import express from "express";
const consign = require("consign");

cosign().then("./config/middlewares.js").into(app);

app = express();

app.listen(3000, () => {
  console.log(`Server is running in ${3000}`);
});
