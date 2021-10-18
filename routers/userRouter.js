const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config/keys").JWT_SECRET;

//REGISTER USER
router.post("/", async (req, res) => {
  try {
    const { email, password, passwordVerify, userName } = req.body;

    //VALIDATIONS

    if (!email || !password || !passwordVerify || !userName)
      return res
        .status(400)
        .json({ errorMessage: "Enter All Required Fields" });

    if (password !== passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: "Please Enter Same Password Twice" });

    if (password.length < 6)
      return res
        .status(400)
        .json({ errorMessage: "Password Must Be At least 6 Characters Long" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ errorMessage: "Email Already Being Used" });

    if (!email.includes("@"))
      return res
        .status(400)
        .json({ errorMessage: "Please enter a valid email" });

    //HASH THE PASSWORD

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    //SAVE NEW USER TO DB

    const newUser = new User({ email, passwordHash, userName });
    const savedUser = await newUser.save();

    //SIGN THE TOKEN

    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      JWT_SECRET
    );

    //SEND THE TOKEN IN A HTTP-ONLY COOKIE
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //VALIDATION
    if (!email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please Enter All Required Fields" });

    //FIND USER FROM DB
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(401).json({ errorMessage: "Wrong Email Or Password" });

    //CHECKING PASSWORD
    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );

    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong Email Or Password" });

    //SIGN THE TOKEN
    const token = jwt.sign({ user: existingUser._id }, JWT_SECRET);

    //SENDING THE TOKEN IN A HTTP-ONLY COOKIE
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status.send();
  }
});

//LOG USER OUT
router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

//CHECK IF THE USER IS LOGGED IN CERTIFIED
router.get("/loggedIn", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, JWT_SECRET);

    res.send(true);
  } catch (err) {
    console.error(err);
    res.json(false);
  }
});

//GET CURRENT USER ID
router.get("/userid", (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    jwt.verify(token, JWT_SECRET);

    res.send(jwt.verify(token, JWT_SECRET).user);
  } catch (err) {
    console.error(err);
    res.json(false);
  }
});

module.exports = router;
