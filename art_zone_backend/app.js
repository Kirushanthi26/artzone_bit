const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");

const authRoutes = require("./routes/auth-routes");
const shoppingRoutes = require("./routes/shopping-routes");
const eventRoutes = require("./routes/events-routes");

const app = express();
app.use(bodyParser.json());

app.use("/uploads/images", express.static(path.join("uploads", "images")));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use("/", authRoutes);

app.use("/shops", shoppingRoutes);

app.use("/events", eventRoutes);

app.listen(5000);
