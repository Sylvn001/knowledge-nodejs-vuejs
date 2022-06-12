const app = require("express")();
const consign = require("consign");
const db = require("./config/db");
const mongoose = require("mongoose");
require("./config/mongodb");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

app.db = db;
app.mongoose = mongoose;

consign()
  .include("./config/passport.js")
  .then("./config/middlewares.js")
  .then("./api/validation.js")
  .then("./api")
  .then("./schedule")
  .then("./config/routes.js")
  .into(app);

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000, () => {
  console.log("Server is running in port 3000");
});
