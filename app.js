const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const productRouter = require("./app/v1/routs/product");
const categoryRouter = require("./app/v1/routs/category");
const userRouter = require("./app/v1/routs/user");

const mongoConnStr = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@curd-demo-two-cluster.8pd7zcn.mongodb.net/webapi2025`;

mongoose.connect(mongoConnStr).then(() => {
  console.log("connected to mongo");
});

console.log(process.env.MONGO_USER);
console.log(process.env.MONGO_PASS);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log(process.env.GOOGLE_USER);

const secure = require("./app/v1/middelewares/secure");

app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/user", userRouter);

app.all("*", (req, res) => {
  return res.status(404).json({ Msg: "not pound 404" });
});

module.exports = app;
