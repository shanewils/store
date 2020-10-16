"use strict";

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));

var _orderRoute = _interopRequireDefault(require("./routes/orderRoute"));

var _productRoutes = _interopRequireDefault(require("./routes/productRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mongodbUrl = _config["default"].MONGODB_URL;

_mongoose["default"].connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})["catch"](function (error) {
  return console.log(error.reason);
});

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use("/api/users", _userRoutes["default"]);
app.use("/api/products", _productRoutes["default"]);
app.use('/api/orders', _orderRoute["default"]);
app.get("/api/config/paypal", function (req, res) {
  res.send(_config["default"].PAYPAL_CLIENT_ID);
}); // app.get("/api/products/:id", (req, res) => {
//     const productId = req.params.id;
//     const product = data.products.find(x=>x._id === productId);
//     if (product)
//         res.send(product);
//     else
//         res.status(404).send({ msg: "Product Not Found." })
// });
// app.get("/api/products", (req, res) => {
//     res.send(data.products);
// });

app.listen(5000, function () {
  console.log("Server started at http://localhost:5000");
});