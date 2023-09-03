"use strict";
let mainData = fetch("../../src/json/data.json").then(
  (data) => (data = data.json())
);
//================== helping functions ==================
function multiClasses(action, classText, element) {
  const classArr = classText.split(" ");
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
    multiClasses("remove", "-translate-x-full left-0", mainAsideCloseIcon);
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
    multiClasses("add", "left-0 -translate-x-full", mainAsideCloseIcon);
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
    multiClasses("add", "px-9 mb-2 font-bold", subMenuHeading);
    subMenuHeading.innerHTML = menu.heading;
    subMenuListContainer.append(subMenuHeading);

    const subMenu = document.createElement("ul");
    multiClasses(
      "add",
      "sub-menu border-b-2 border-amazon-grey-100 mt-4 last:border-b-0",
      subMenu
    );

    menu.links.forEach((link) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href='#${link.split(" ").join("-")}.html'>${link}</a>`;
      multiClasses(
        "add",
        "hover:bg-blue-100 capitalize px-9 py-2 my-1 my-1 cursor-pointer",
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
$(document).ready(function () {
  $(".hero-carousel").owlCarousel({
    loop: true,
    margin: 20,
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

// ================= laying homepage cards and sliders
// =-=-=-=- function for adding cards
function deployCard(card, parent) {
  const cardElement = document.createElement("div");
  multiClasses(
    "add",
    `bg-white p-5 overflow-hidden basis-1/3 grow`,
    cardElement
  );
  // =-=-=-=- card heading
  const heading = document.createElement("h2");
  multiClasses("add", "font-bold mb-2.5", heading);
  heading.innerHTML = card.name;
  cardElement.appendChild(heading);

  if (card.type === "multi") {
    // =-=-=-=- card grid for subCards
    const cardGrid = document.createElement("div");
    multiClasses("add", "grid grid-cols-2 gap-x-6 gap-y-10", cardGrid);

    card.subCards.forEach((subCard) => {
      const linkParent = document.createElement("a");
      multiClasses("add", "block overflow-hidden last:mb-6", linkParent);
      linkParent.href = subCard.srchQuery;

      linkParent.innerHTML = `
          <img src="${subCard.imgSrc}" class="max-w-none -translate-x-[15%]" />
          <p class="text-xs capitalize"> ${subCard.name} </p>
        `;

      cardGrid.appendChild(linkParent);
    });

    cardElement.appendChild(cardGrid);

    const bottomLink = document.createElement("a");
    multiClasses("add", "block text-xs text-blue-700", bottomLink);
    bottomLink.innerHTML = card.bottomLink.text;
    cardElement.appendChild(bottomLink);
  } else {
    const linkParent = document.createElement("a");
    multiClasses("add", "block overflow-hidden mb-6", linkParent);
    linkParent.href = card.srchQuery;

    linkParent.innerHTML = `
          <img src="${card.imgSrc}" class="max-w-none -translate-x-[15%]" />
        `;

    cardElement.appendChild(linkParent);
  }

  parent.appendChild(cardElement);
}
// =-=-=-=- function for adding sliders
function deploySlider(slider, parent) {
  // createing a parent div for the actual slider
  const sliderWrapper = document.createElement("div");
  multiClasses("add", "bg-white px-5 py-2.5 col-span-full", sliderWrapper);
  // creating slider heading and adding it to slider parent
  const sliderHeading = document.createElement("h2");
  sliderHeading.classList.add("font-bold");
  sliderHeading.innerHTML = slider.heading;
  sliderWrapper.appendChild(sliderHeading);
  // creating the actual slider
  const carousel = document.createElement("div");
  multiClasses("add", "home-page-carousel owl-carousel", carousel);

  slider.arr.forEach((product) => {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("item");
    carouselItem.innerHTML = `
      <img class="object-contain max-w-[270px] max-h-[200px]" src="${product.image}" />
    `;
    carousel.appendChild(carouselItem);
  });
  sliderWrapper.appendChild(carousel);

  parent.appendChild(sliderWrapper);
}

// main function for adding cards and sliders
(async function generateHomePage() {
  // =-=-=-=- obtaining section
  const cardsAndSliders = document.querySelector(".cards-and-sliders");
  // =-=-=-=- fetching main data
  let data = await mainData;

  // =-=-=-=- fetching sliders and cards
  const sliders = data.find(
    (element) => element.name === "home page sliders"
  ).sliders;
  const cards = data.find(
    (element) => element.name === "home page cards"
  ).cards;

  // creating container and adding tailwind styling to it
  // grid grid-cols-responsive
  const container = document.createElement("div");
  multiClasses(
    "add",
    "grid grid-cols-responsive gap-x-10 gap-y-5 relative z-10",
    container
  );
  // cards.forEach((card) => {
  //   deployCard(card, container);
  // });
  // sliders.forEach((slider) => {
  //   deploySlider(slider, container);
  // });
  // adding the cards before the sliders and cards row mix
  let i = 0;
  for (; i < 9; i++) {
    deployCard(cards[i], container);
  }
  // adding the sliders and cards row mix
  for (let j = 0; j < sliders.length; j++) {
    deploySlider(sliders[j], container);
    if (j % 2 === 0) {
      for (let m = 0; m < 4 && i < cards.length; m++) {
        deployCard(cards[i++], container);
      }
    }
  }

  cardsAndSliders.appendChild(container);

  // initiating all deployed carousels
  $(".home-page-carousel").owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    items: 5,
    center: false,
    dots: false,
    navText: [
      '<i class="icon-left-open-big"></i>',
      '<i class="icon-right-open-big"></i>',
    ],
  });
})();
