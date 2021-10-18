const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const MBD_CONNECT = require("./config/keys").MBD_CONNECT;

dotenv.config();

//SETTING UP SERVER
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json({ limit: "100mb" }));
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
// { origin: ["http://localhost:3000"], credentials: true }

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
});

//CONNECTING TO MONGODB
mongoose.connect(
  MBD_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("Connect to MongoDB");
  }
);

//SETTING UP ROUTES
app.use("/api/restaurants", require("./routers/restaurantsRouter"));
app.use("/api/authentication", require("./routers/userRouter"));
app.use("/api/review", require("./routers/reviewRouter"));

//SETTING UP HEROKU
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}
