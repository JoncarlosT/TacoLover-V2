const router = require("express").Router();
const authentication = require("../middleware/authentication");
const Restaurant = require("../models/restaurantModel");
const Review = require("../models/reviewModel");
const mbxCeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxCeocoding({ accessToken: mapBoxToken });
const { cloudinary } = require("../cloudinary/index");

//ADDS RESTAURANTS TO SERVER
router.post("/add", authentication, async (req, res) => {
  try {
    const { title, images, description, location } = req.body;

    //VALIDATIONS
    if (!title || !images || !description || !location)
      return res
        .status(400)
        .json({ errorMessage: "Please Enter all Required Fields" });

    const geoData = await geocoder
      .forwardGeocode({
        query: location,
        limit: 1,
      })
      .send();

    const uploadedRes = await cloudinary.uploader.upload(
      images,
      (options = {
        folder: "TacoLover",
      })
    );

    // console.log(uploadedRes);

    const newRestaurant = new Restaurant({
      title,
      images: uploadedRes.url,
      description,
      location,
      geometry: geoData.body.features[0].geometry,
      author: req.user,
    });

    await newRestaurant.save();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//DELETE RESTAURANTS
router.delete("/", authentication, async (req, res) => {
  try {
    const currentUser = req.user;
    const { _id, images } = req.body;

    const imageId = images.slice(images.indexOf("TacoLover"));

    const { author } = await Restaurant.findById(_id);

    if (currentUser != author)
      return res.status(400).json({ errorMessage: "Not your Restaurant" });

    const map = await cloudinary.uploader.destroy(
      imageId.substring(-1, imageId.indexOf("."))
    );

    await Restaurant.findByIdAndDelete(_id);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//GET RESTAURANTS
router.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.find({}).populate({ path: "author" });
    res.send(restaurants);
  } catch (err) {
    console.error(err);
    res.json(false);
  }
});

//POST RESTAURANT REVIEW
router.post("/review", authentication, async (req, res) => {
  try {
    const { restaurantId, body, rating } = req.body;

    const newReview = new Review({
      body,
      rating,
      author: req.user,
    });
    await Restaurant.findByIdAndUpdate(restaurantId, {
      $push: { review: newReview },
    });
    await newReview.save();
  } catch (err) {
    console.error(err);
    res.json(false);
  }
});

//GETS RESTAURANT REVIEWS
router.get("/review", async (req, res) => {
  try {
    const { restaurantId } = req.query;
    const restaurant = await Restaurant.findById(restaurantId).populate(
      "review"
    );

    res.send(restaurant.review);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//LET USER DELETE THEIR REVIEW
router.delete("/review", authentication, async (req, res) => {
  try {
    const currentUser = req.user;
    const { _id } = req.body;
    const { author } = await Review.findById(_id);

    if (currentUser != author)
      return res.status(400).json({ errorMessage: "Not your Review" });

    await Review.findByIdAndDelete(_id);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
