const express = require("express");

const app = express();

// const { createDog, Dog } = require("./factory/SimpleDogFactory");
const { createDog, Dog } = require("./factory/AdvancedDogFactory");

app.get("/", (req, res) => {
  const dog = createDog("chiwawa");

  return res.json({ type: typeof dog });
});

app.listen(3333);
