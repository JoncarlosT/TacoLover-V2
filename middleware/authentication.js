const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config/keys").JWT_SECRET;

const authentication = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token)
      return res
        .status(401)
        .json({ errorMessage: "Unauthorized, Please Login" });

    const verified = jwt.verify(token, JWT_SECRET);

    req.user = verified.user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized, Please Login" });
  }
};

module.exports = authentication;
