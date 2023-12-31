require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
const { default: mongoose } = require("mongoose");
const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/cors.js");
const dbConnection = require("./config/dbConnection.js");
const rootRoute = require("./routes/root.js");
const usersRoute = require("./routes/userRoute.js");
const registerRoute = require("./routes/register.js");
const authRoute = require("./routes/auth.js");
const logoutRouter = require("./routes/logout.js");

const PORT = process.env.PORT || 4000;
const app = express();

dbConnection();
// middlewares
// files to be save by the server
app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// routes
app.use("/", rootRoute);
// users route
app.use("/users", usersRoute);
app.use("/register", registerRoute)
app.use("/auth", authRoute)
app.use("/logout", logoutRouter)

app.all("*", function (req, res) {
  if (req.accepts("json")) {
    return res.json({ message: "Not found !", status: "error" });
  } else return res.send("not found !");
});

mongoose.connection.on("open", function (err) {
  console.log("Connected to mongoDB");
  // listen to the server now
  app.listen(PORT, function () {
    console.log("server up and running on port : ", PORT);
  });
});

mongoose.connection.on("error", function (err) {
  console.log(err);
});
