require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3030;
const connectDB = require("./config/connectDB");
const router = require("./routes/index");

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// api end points
app.use("/api", router);

app.get("/", (req, res) => {
  res.send(`Server is runing from ${PORT}`);
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is runing from ${PORT}`);
  });
});
