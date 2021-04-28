const router = require("express").Router();
const Review = require("../models/reviewModel");
const authentication = require("../middleware/authentication");

//ADDS REVIEWS TO RECIPE
router.post("/recipe", authentication, async (req, res) => {
  try {
    const { tacoId, body, rating } = req.body;

    const newReview = new Review({
      tacoId,
      body,
      rating,
      author: req.user,
    });

    const savedReview = await newReview.save();

    res.json(savedReview);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//GET REVIEWS
router.get("/recipe", async (req, res) => {
  try {
    const { tacoId } = req.query;
    const review = await Review.find({ tacoId }).populate({ path: "author" });
    res.send(review);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//LET USER DELETE THEIR OWN REVIEWS
router.delete("/recipe", authentication, async (req, res) => {
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
