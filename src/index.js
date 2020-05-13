const express = require("express");

const app = express();

// const { createDog, Dog } = require("./factory/SimpleDogFactory");
const { createDog, Dog } = require("./factory/AdvancedDogFactory");

const ShopperObservable = require("./observer/ShopperObserver");
const Category = require("./observer/Category");
const Sales = require("./observer/Sales");

app.get("/", (req, res) => {
  const dog = createDog("chiwawa");

  return res.json({ type: typeof dog });
});

app.get("/observable", (req, res) => {
  const designCategory = new Category("Design");
  const webDevelopment = new Category("Web Development");
  const videoEditing = new Category("Video Editing");

  const paul = new ShopperObservable("Paul");
  const mike = new ShopperObservable("Mike");
  const john = new ShopperObservable("John");

  const blackFriday = new Sales();
  designCategory.subscribe(blackFriday);
  webDevelopment.subscribe(blackFriday);
  videoEditing.subscribe(blackFriday);

  designCategory.subscribe(paul);
  designCategory.subscribe(mike);
  designCategory.subscribe(john); 

  webDevelopment.subscribe(mike);

  videoEditing.subscribe(john);

  designCategory.sale(20);
  webDevelopment.sale(50);
  videoEditing.sale(25);

  console.log(blackFriday.sales);
  return res.json({ok:true});
});

app.listen(3333);
