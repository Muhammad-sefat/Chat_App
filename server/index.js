require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3030;
const connectDB = require("./config/connectDB");

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send(`Server is runing from ${PORT}`);
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is runing from ${PORT}`);
  });
});
