const cloudinary = require("cloudinary").v2;
const CLOUDINARY_CLOUD_NAME = require("../config/keys").CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_KEY = require("../config/keys").CLOUDINARY_KEY;
const CLOUDINARY_SECRET = require("../config/keys").CLOUDINARY_SECRET;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

module.exports = {
  cloudinary,
};
