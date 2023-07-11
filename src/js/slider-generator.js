"use strict";
const fs = require("fs");
let data = fs.readFileSync("products.json", "utf8");
data = JSON.parse(data).find((el) => el.name === "all products").arr;
let sliderArr = [];
let arr = [];
let slider = {};
// =============== popular items for the season ===============
arr = [];
slider = {};
data.forEach((product) => {
  product.tags.includes("popular") && arr.length < 12
    ? arr.push(product)
    : false;
});
slider = {
  heading: "popular items this season",
  arr: arr,
};
sliderArr.push(slider);
// =============== new international customers purchased ===============
arr = [];
slider = {};
data.forEach((product) => {
  product.tags.includes("international") && arr.length < 12
    ? arr.push(product)
    : false;
});
slider = {
  heading: "new international customers purchased",
  arr: arr,
};
sliderArr.push(slider);
// =============== deals under $25 ===============
arr = [];
slider = {};
data.forEach((product) => {
  product.tags.includes("deal") && Number(product.price) < 25 && arr.length < 12
    ? arr.push(product)
    : false;
});
slider = {
  heading: "deals under $25",
  arr: arr,
};
sliderArr.push(slider);
// =============== frequently repurchased in home ===============
arr = [];
slider = {};
data.forEach((product) => {
  product.tags.includes("frequently repurchased") &&
  product.category === "home & kitchen" &&
  arr.length < 12
    ? arr.push(product)
    : false;
});
slider = {
  heading: "frequently repurchased in home",
  arr: arr,
};
sliderArr.push(slider);
// =============== frequently repurchased in beauty ===============
arr = [];
slider = {};
data.forEach((product) => {
  product.tags.includes("frequently repurchased") &&
  product.category === "beauty & personal care" &&
  arr.length < 12
    ? arr.push(product)
    : false;
});
slider = {
  heading: "frequently repurchased in beauty",
  arr: arr,
};
sliderArr.push(slider);
// =============== home decor under $25 ===============
arr = [];
slider = {};
data.forEach((product) => {
  product.tags.includes("home decor") &&
  Number(product.price) < 25 &&
  arr.length < 12
    ? arr.push(product)
    : false;
});
slider = {
  heading: "frequently repurchased in beauty",
  arr: arr,
};
sliderArr.push(slider);
// =============== popular gifts in baby ===============
arr = [];
slider = {};
data.forEach((product) => {
  product.tags.includes("popular") &&
  product.tags.includes("gifts") &&
  product.category === "baby" &&
  arr.length < 12
    ? arr.push(product)
    : false;
});
slider = {
  heading: "frequently repurchased in beauty",
  arr: arr,
};
sliderArr.push(slider);

const content = "-\n\tconst data = " + JSON.stringify(sliderArr);
fs.writeFile("home-page-sliders.pug", content, (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
