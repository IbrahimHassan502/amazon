"use strict";
let mainData = fetch("../../src/js/data.json").then(
  (data) => (data = data.json())
);
//================== helping functions ==================
function multiClasses(action, classArr, element) {
  if (action === "add") {
    classArr.forEach((elementClass) => {
      element.classList.add(elementClass);
    });
  } else if (action === "remove") {
    classArr.forEach((elementClass) => {
      element.classList.remove(elementClass);
    });
  }
}
//================== showing the aside onClick on the all menu button ===================
const allMenuButton = document.querySelector(".all-menu");
const mainAsideContainer = document.querySelector(".aside-container");
const mainAsideCloseIcon = document.querySelector(".close-aside");

allMenuButton.addEventListener("click", () => {
  mainAsideContainer.classList.remove("hidden");
  setTimeout(() => {
    mainAsideContainer.classList.remove("opacity-0");
  }, 0);
  setTimeout(() => {
    mainAside.classList.remove("-translate-x-full");
    multiClasses("remove", ["-translate-x-full", "left-0"], mainAsideCloseIcon);
    mainAsideCloseIcon.classList.add("left-1/3");
  }, 100);
});
//================== closing the aside onClick on the close button or the overlay of the aside ===================
const mainAside = document.querySelector("aside.main");
const asideListContainer = document.querySelector(".aside-list-container");

mainAsideContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("aside-container") ||
    e.target.classList.contains("close-aside")
  ) {
    mainAside.classList.add("-translate-x-full");
    mainAsideCloseIcon.classList.remove("left-1/3");
    multiClasses("add", ["left-0", "-translate-x-full"], mainAsideCloseIcon);
    asideListContainer.classList.remove("-translate-x-full");
    asideListContainer.classList.add("overflow-hidden");

    setTimeout(() => {
      mainAsideContainer.classList.add("opacity-0");
    }, 250);
    setTimeout(() => {
      mainAsideContainer.classList.add("hidden");
    }, 250);
  }
});
//================== showing sub menus ==================

asideListContainer.addEventListener("click", async function (e) {
  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- detecting span which contains the button text
  let clickedButton = "";
  if (e.target.nodeName === "BUTTON") {
    clickedButton = e.target.querySelector("span");
  } else if (e.target.nodeName === "SPAN") {
    clickedButton = e.target;
  }

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- obtaining aside lists
  let data = await mainData;
  let asideLists = data.find((element) => element.name === "asideLists").array;

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- obtaining button sub menus
  let clickedButtonName = clickedButton.textContent;
  let asideListHeading = clickedButton.closest("ul").dataset.heading;
  let asdieButtonSubMenus = asideLists
    .find((list) => list.heading === asideListHeading)
    .links.find((link) => link.name === clickedButtonName).subMenus;

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- creating the sub menu & adding it to the aside
  const subMenuListContainer = document.querySelector(
    ".sub-menu-list-container"
  );
  subMenuListContainer.innerHTML = "";

  asdieButtonSubMenus.forEach((menu) => {
    const subMenuHeading = document.createElement("h2");
    multiClasses("add", ["px-9", "mb-2", "font-bold"], subMenuHeading);
    subMenuHeading.innerHTML = menu.heading;
    subMenuListContainer.append(subMenuHeading);

    const subMenu = document.createElement("ul");
    multiClasses(
      "add",
      [
        "sub-menu",
        "border-b-2",
        "border-amazon-grey-100",
        "mt-4",
        "last:border-b-0",
      ],
      subMenu
    );

    menu.links.forEach((link) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href='#${link.split(" ").join("-")}.html'>${link}</a>`;
      multiClasses(
        "add",
        [
          "hover:bg-blue-100",
          "capitalize",
          "px-9",
          "py-2",
          "my-1",
          "my-1",
          "cursor-pointer",
        ],
        li
      );
      subMenu.append(li);
    });

    subMenuListContainer.append(subMenu);
  });

  //  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=- sliding the aside list container & sub menu container
  const subListContainer = document.querySelector(".aside-list-container");
  subListContainer.classList.add("-translate-x-full");
  subListContainer.classList.remove("overflow-hidden");
});

//================== going back to aside main menu on click
const mainMenuButton = document.querySelector(".main-menu-button");
mainMenuButton.addEventListener("click", () => {
  asideListContainer.classList.remove("-translate-x-full");
});

// ================= initiating owl carousel for hero section
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: true,
  margin: 10,
  nav: true,
  items: 1,
  center: false,
  dots: false,
    navText: [
            '<i class="icon-left-open-big"></i>',
            '<i class="icon-right-open-big"></i>',
          ],
  });
});