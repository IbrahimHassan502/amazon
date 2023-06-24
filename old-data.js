import React from "react";
import { BiGlobe, BiMoney, BiBox, BiMap } from "react-icons/bi";
import { IoWalletOutline } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";

const allsearchCategories = [
  // **** product 1 ****
  {
    id: 1,
    category: "nintendoSwitch",
    availableStyles: [
      {
        name: "console",
      },
      {
        name: "console w/ 128G memory card",
      },
      {
        name: "console w/ 256G memory card",
      },
      {
        name: "console w/ 64G memory card",
      },
    ],
    availableColors: [
      {
        name: "neon blue and red",
        iconSrc: "https://m.media-amazon.com/images/I/41C4JkSnyzL._SS36_.jpg",
      },
      {
        name: "mario red & blue edition",
        iconSrc: "https://m.media-amazon.com/images/I/41QYZ-7oroL._SS36_.jpg",
      },
      {
        name: "green and blue",
        iconSrc: "https://m.media-amazon.com/images/I/41L7ZbzwQcL._SS36_.jpg",
      },
      {
        name: "gray",
        iconSrc: "https://m.media-amazon.com/images/I/41AfeXVVoUL._SS36_.jpg",
      },
    ],
  },
  // **** product 2 ****
  {
    id: 2,
    category: "nintendoMimoryCard",
    availableCapacities: [
      {
        name: "128GB",
        id: 2.0,
      },
      {
        name: "64GB",
        id: 2.1,
      },
      {
        name: "256GB",
        id: 2.2,
      },
      {
        name: "512GB",
        id: 2.3,
      },
    ],
    availableStyles: [
      {
        name: "legend of zelda triforce",
      },
      {
        name: "apex legends sigil",
      },
      {
        name: "super mario super mashroom",
      },
      {
        name: "super mario super star + mario cart 8 delux",
      },
      {
        name: "super mario super star",
      },
      {
        name: "animal crossing leaf",
      },
    ],
  },
  // **** product 4 ****
  {
    id: 4,
    category: "nintendoSwitchGames",
    availablePlatforms: [
      {
        name: "nintendo switch",
        id: 4.0,
      },
      {
        name: "switch digital code",
        id: 4.1,
      },
    ],
    availableEditions: [
      {
        name: "standard",
      },
      {
        name: "dreamer",
      },
    ],
  },
  // **** product 5 ****
  {
    id: 5,
    category: "nintendoSwitchGames2",
    availablePlatforms: [
      {
        name: "nintendo switch",
      },
      {
        name: "switch digital code",
      },
    ],
    availableEditions: ["standard", "delux", "collectors"],
  },
];

const showAvailable = (point, category) => {
  let catIndex = allsearchCategories.find((cat) => cat.category === category);
  return catIndex[`available${point}`];
};

const getProductsByIds = (from, to) => {
  let i;
  let nums = [];
  for (i = from; i <= to; i++) {
    nums.push(i);
  }
  let ids = nums.map((id) => products.find((product) => product.id === id));
  return ids;
};

export const products = [
  // ****** PRODUCT 1******
  {
    id: 1.0,
    type: "multi-src",
    srcs: [
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41C4JkSnyzL._AC_US40_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SX355_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41PSrh5lpdL._AC_US40_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/41PSrh5lpdL._AC_SX355_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/41PSrh5lpdL._AC_SX355_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41aaQR4AxkL._AC_US40_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/71lfEWM9AYL._AC_SX355_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71lfEWM9AYL._AC_SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/31EkknyH69L._AC_US40_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/71ILSOE6ovL._AC_SX355_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71ILSOE6ovL._AC_SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/31VD5Se%2BHKL._AC_US40_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/71Qk2M1CIgL._AC_SX355_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71Qk2M1CIgL._AC_SL1500_.jpg",
      },
    ],
    title: "Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)",
    storeName: "nintendo switch",
    category: "nintendo switch consoles",
    patch1: "amazon's",
    patch2: "choice",
    stars: 4.5,
    ratings: "71,784",
    answered: "1000",
    price: 353.98,
    seller: "the corner store",
    fulfilledBy: "amazon",
    style: "console",
    points: [
      {
        name: "styles",
        value: "console",
        type: "tags",
        tags: [...showAvailable("Styles", "nintendoSwitch")],
      },
      {
        name: "colors",
        value: "neon blue and red",
        type: "subImgs",
        availableSubImgs: [...showAvailable("Colors", "nintendoSwitch")],
        srcs: [
          {
            name: "neon blue and red",
            srcs: [
              {
                icon: "https://images-na.ssl-images-amazon.com/images/I/41C4JkSnyzL._AC_US40_.jpg",
                view: "https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SX355_.jpg",
                detail:
                  "https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg",
              },
              {
                icon: "https://images-na.ssl-images-amazon.com/images/I/41PSrh5lpdL._AC_US40_.jpg",
                view: "https://images-na.ssl-images-amazon.com/images/I/41PSrh5lpdL._AC_SX355_.jpg",
                detail:
                  "https://images-na.ssl-images-amazon.com/images/I/41PSrh5lpdL._AC_SX355_.jpg",
              },
              {
                icon: "https://images-na.ssl-images-amazon.com/images/I/41aaQR4AxkL._AC_US40_.jpg",
                view: "https://images-na.ssl-images-amazon.com/images/I/71lfEWM9AYL._AC_SX355_.jpg",
                detail:
                  "https://images-na.ssl-images-amazon.com/images/I/71lfEWM9AYL._AC_SL1500_.jpg",
              },
              {
                icon: "https://images-na.ssl-images-amazon.com/images/I/31EkknyH69L._AC_US40_.jpg",
                view: "https://images-na.ssl-images-amazon.com/images/I/71ILSOE6ovL._AC_SX355_.jpg",
                detail:
                  "https://images-na.ssl-images-amazon.com/images/I/71ILSOE6ovL._AC_SL1500_.jpg",
              },
              {
                icon: "https://images-na.ssl-images-amazon.com/images/I/31VD5Se%2BHKL._AC_US40_.jpg",
                view: "https://images-na.ssl-images-amazon.com/images/I/71Qk2M1CIgL._AC_SX355_.jpg",
                detail:
                  "https://images-na.ssl-images-amazon.com/images/I/71Qk2M1CIgL._AC_SL1500_.jpg",
              },
            ],
          },
          {
            name: "mario red & blue edition",

            srcs: [
              {
                icon: "https://m.media-amazon.com/images/I/61smlrSf0HL._AC_SX425_.jpg",
                view: "https://m.media-amazon.com/images/I/61smlrSf0HL._AC_SX679_.jpg",
                detail:
                  "https://m.media-amazon.com/images/I/61smlrSf0HL._AC_SL1500_.jpg",
              },
              {
                icon: "https://m.media-amazon.com/images/I/81JlB89ti6L._AC_SX425_.jpg",
                view: "https://m.media-amazon.com/images/I/81JlB89ti6L._AC_SX450_.jpg",
                detail:
                  "https://m.media-amazon.com/images/I/81JlB89ti6L._AC_SL1500_.jpg",
              },
              {
                icon: "https://m.media-amazon.com/images/I/71N+MgrxDVL._AC_SX425_.jpg",
                view: "https://m.media-amazon.com/images/I/71N+MgrxDVL._AC_SX569_.jpg",
                detail:
                  "https://m.media-amazon.com/images/I/71N+MgrxDVL._AC_SL1500_.jpg",
              },
              {
                icon: "https://m.media-amazon.com/images/I/71p6jNz7f6L._AC_SX425_.jpg",
                view: "https://m.media-amazon.com/images/I/71p6jNz7f6L._AC_SX569_.jpg",
                detail:
                  "https://m.media-amazon.com/images/I/71p6jNz7f6L._AC_SL1500_.jpg",
              },
              {
                icon: "https://m.media-amazon.com/images/I/81VLgSezP9L._AC_SX425_.jpg",
                view: "https://m.media-amazon.com/images/I/81VLgSezP9L._AC_SX679_.jpg",
                detail:
                  "https://m.media-amazon.com/images/I/81VLgSezP9L._AC_SL1500_.jpg",
              },
              {
                icon: "https://m.media-amazon.com/images/I/813CZneBNaL._AC_SX425_.jpg",
                view: "https://m.media-amazon.com/images/I/813CZneBNaL._AC_SX425_.jpg",
                detail:
                  "https://m.media-amazon.com/images/I/813CZneBNaL._AC_SL1500_.jpg",
              },
              {
                icon: "https://m.media-amazon.com/images/I/81mR6j6jnPL._AC_SX425_.jpg",
                view: "https://m.media-amazon.com/images/I/81mR6j6jnPL._AC_SX569_.jpg",
                detail:
                  "https://m.media-amazon.com/images/I/81mR6j6jnPL._AC_SL1500_.jpg",
              },
            ],
          },
          {
            name: "green and blue",

            srcs: [
              {
                icon: "https://m.media-amazon.com/images/I/81Sxdp0JBLL._AC_SX425_.jpg",
                view: "https://m.media-amazon.com/images/I/81Sxdp0JBLL._AC_SX679_.jpg",
                detail:
                  "https://m.media-amazon.com/images/I/81Sxdp0JBLL._AC_SL1500_.jpg",
              },
              {
                icon: "https://m.media-amazon.com/images/I/51WCwr6MW-L._AC_SX425_.jpg",
                view: "https://m.media-amazon.com/images/I/51WCwr6MW-L._AC_SX679_.jpg",
                detail:
                  "https://m.media-amazon.com/images/I/51WCwr6MW-L._AC_SL1000_.jpg",
              },
              {
                icon: "https://m.media-amazon.com/images/I/51xTqVPBzuL._AC_SX425_.jpg",
                view: "https://m.media-amazon.com/images/I/51xTqVPBzuL._AC_SX679_.jpg",
                detail:
                  "https://m.media-amazon.com/images/I/51xTqVPBzuL._AC_SL1000_.jpg",
              },
              {
                icon: "https://m.media-amazon.com/images/I/51KQle8PoSL._AC_SX425_.jpg",
                view: "https://m.media-amazon.com/images/I/51KQle8PoSL._AC_SX522_.jpg",
                detail:
                  "https://m.media-amazon.com/images/I/51KQle8PoSL._AC_SL1000_.jpg",
              },
              {
                icon: "https://m.media-amazon.com/images/I/51tE5aqHDrL._AC_SX425_.jpg",
                view: "https://m.media-amazon.com/images/I/51tE5aqHDrL._AC_SX679_.jpg",
                detail:
                  "https://m.media-amazon.com/images/I/51tE5aqHDrL._AC_SL1000_.jpg",
              },
              {
                icon: "https://m.media-amazon.com/images/I/61f7O-SjrlL._AC_SX425_.jpg",
                view: "https://m.media-amazon.com/images/I/61f7O-SjrlL._AC_SX679_.jpg",
                detail:
                  "https://m.media-amazon.com/images/I/61f7O-SjrlL._AC_SL1000_.jpg",
              },
            ],
          },
          {
            name: "gray",

            srcs: [
              {
                icon: "https://m.media-amazon.com/images/I/61i421VnFYL._AC_SX425_.jpg",
                view: "https://images-na.ssl-images-amazon.com/images/I/61i421VnFYL._AC_SX679_.jpg",
                detail:
                  "https://images-na.ssl-images-amazon.com/images/I/61i421VnFYL._AC_SL1201_.jpg",
              },
              {
                icon: "https://images-na.ssl-images-amazon.com/images/I/31tRPtvt1qL._AC_US40_.jpg",
                view: "https://images-na.ssl-images-amazon.com/images/I/61RtiOhejgL._AC_SX679_.jpg",
                detail:
                  "https://images-na.ssl-images-amazon.com/images/I/61RtiOhejgL._AC_SL1500_.jpg",
              },
              {
                icon: "https://images-na.ssl-images-amazon.com/images/I/313VlpVjlrL._AC_US40_.jpg",
                view: "https://images-na.ssl-images-amazon.com/images/I/71tafO9HSrL._AC_SX569_.jpg",
                detail:
                  "https://images-na.ssl-images-amazon.com/images/I/71tafO9HSrL._AC_SL1500_.jpg",
              },
              {
                icon: "https://m.media-amazon.com/images/I/71Kipktef0L._AC_SX425_.jpg",
                view: "https://images-na.ssl-images-amazon.com/images/I/71Kipktef0L._AC_SX569_.jpg",
                detail:
                  "https://images-na.ssl-images-amazon.com/images/I/71Kipktef0L._AC_SL1500_.jpg",
              },
              {
                icon: "https://m.media-amazon.com/images/I/71JTNR2HkiL._AC_SX425_.jpg ",
                view: "https://images-na.ssl-images-amazon.com/images/I/71JTNR2HkiL._AC_SX569_.jpg",
                detail:
                  "https://images-na.ssl-images-amazon.com/images/I/71JTNR2HkiL._AC_SL1500_.jpg",
              },
            ],
          },
        ],
      },
    ],
    about: [
      "3 Play Styles: TV Mode, Tabletop Mode, Handheld Mode",
      "6.2-inch, multi-touch capacitive touch screen",
      "4.5-9+ Hours of Battery Life will vary depending on software usage conditions",
      "connects over Wi-Fi for multiplayer gaming; Up to 8 consoles can be connected for local wireless multiplayer",
      "model number: HAC-001(-01)",
    ],
  },
  // ****** PRODUCT 1.1******
  {
    id: 1.1,
    srcs: [
      {
        icon: "https://m.media-amazon.com/images/I/41yEDIb70CL._AC_US40_.jpg",
        view: "https://m.media-amazon.com/images/I/51SqV8Ut+wL._AC_SX425_.jpg",
        detail:
          "https://m.media-amazon.com/images/I/51t0Hffw33L._AC_SY355_.jpg",
      },
    ],
    title:
      "Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01) + SanDisk 128GB MicroSDXC UHS-I Card",
    storeName: "nintendo switch",
    category: "nintendo switch consoles",
    stars: 4.5,
    seller: "the corner store",
    fulfilledBy: "amazon",
    style: "console w/ 128G memory card",
    points: [
      {
        name: "price",
        value: "324.48",
      },
      {
        name: "styles",
        value: "console w/ 128G memory card",
        type: "tags",
        tags: [...showAvailable("Styles", "nintendoSwitch")],
      },
      {
        name: "colors",
        value: "neon blue and red",
        type: "subImgs",
        availableSubImgs: [...showAvailable("Colors", "nintendoSwitch")],
        srcs: [
          {
            name: "neon blue and red",
            srcs: [
              {
                icon: "https://m.media-amazon.com/images/I/41yEDIb70CL._AC_US40_.jpg",
                view: "https://m.media-amazon.com/images/I/51SqV8Ut+wL._AC_SX425_.jpg",
                detail:
                  "https://m.media-amazon.com/images/I/51t0Hffw33L._AC_SY355_.jpg",
              },
            ],
          },
          {
            name: "gray",
            srcs: [
              {
                icon: "https://m.media-amazon.com/images/I/51t0Hffw33L._AC_SX425_.jpg",
                view: "https://images-na.ssl-images-amazon.com/images/I/51t0Hffw33L._AC_SX425_.jpg",
                detail:
                  "https://images-na.ssl-images-amazon.com/images/I/51t0Hffw33L._AC_SL1001_.jpg",
              },
            ],
          },
        ],
      },
    ],
    about: [
      "Play your way with the Nintendo Switch gaming system. Whether you’re at home or on the go, solo or with friends, the Nintendo Switch system is designed to fit your life. Dock your Nintendo Switch to enjoy HD gaming on your TV. Heading out? Just undock your console and keep playing in handheld mode",
      "This model includes battery life of approximately 4.5 9 hours .",
      "The battery life will depend on the games you play. For instance, the battery will last approximately 5.5 hours for The Legend of Zelda: Breath of the Wild (games sold separately)",
      "Model number HAC 001( 01)",
      "Incredible speeds in a microSD card officially licensed for the Nintendo Switch and Nintendo Switch Lite systems",
      "Spend less time waiting and more time playing with read speeds up to 100MB/s(1) and write speeds up to 90MB/s(1).",
      "Instantly add up to 128GB (1GB=1,000,000,000 bytes. Actual user storage less.)",
      "Store your downloaded games, screenshots and video captures in one place so you can travel light.",
    ],
  },
  // ****** PRODUCT 1.2******
  {
    id: 1.2,
    srcs: [
      {
        icon: "https://m.media-amazon.com/images/I/51RkuCo-r-L._AC_SY355_.jpg",
        view: "https://m.media-amazon.com/images/I/51m+2X4jg6L._AC_SX425_.jpg",
        detail:
          "https://m.media-amazon.com/images/I/51RkuCo-r-L._AC_SL1001_.jpg",
      },
    ],
    title:
      "Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01) + SanDisk 256GB MicroSDXC UHS-I Card",
    storeName: "nintendo switch",
    category: "nintendo switch consoles",
    stars: 4.5,
    seller: "the corner store",
    fulfilledBy: "amazon",
    style: "console w/ 256G memory card",
    points: [
      {
        name: "price",
        value: 347.06,
        type: "",
      },
      {
        name: "styles",
        value: "console w/ 256G memory card",
        type: "tags",
        tags: [...showAvailable("Styles", "nintendoSwitch")],
      },
      {
        name: "colors",
        value: "neon blue and red",
        type: "subImgs",
        availableSubImgs: [...showAvailable("Colors", "nintendoSwitch")],
        colors: [
          {
            name: "neon blue and red",
            iconSrc:
              "https://m.media-amazon.com/images/I/41C4JkSnyzL._SS36_.jpg",
            srcs: [
              "https://m.media-amazon.com/images/I/51m+2X4jg6L._AC_SX425_.jpg",
            ],
          },

          {
            name: "gray",
            iconSrc:
              "https://m.media-amazon.com/images/I/41AfeXVVoUL._SS36_.jpg",
            srcs: [
              "https://m.media-amazon.com/images/I/51RkuCo-r-L._AC_SX425_.jpg",
            ],
          },
        ],
      },
    ],
    about: [
      "Play your way with the Nintendo Switch gaming system. Whether you’re at home or on the go, solo or with friends, the Nintendo Switch system is designed to fit your life. Dock your Nintendo Switch to enjoy HD gaming on your TV. Heading out? Just undock your console and keep playing in handheld mode",
      "Dungeon layouts will change each time you enter them, so you’ll likely not have the same adventure twice",
      "The battery life will depend on the games you play. For instance, the battery will last approximately 5.5 hours for The Legend of Zelda: Breath of the Wild (games sold separately)",
      "Incredible speeds in a MicroSD card officially licensed for the Nintendo Switch and Nintendo Switch Lite systems",
      "Spend less time waiting and more time playing with read speeds up to 100MB/s(1) and write speeds up to 90MB/s(1).",
      "Instantly add up to 256GB (1GB=1,000,000,000 bytes. Actual user storage less.)",
    ],
  },
  // ****** PRODUCT 1.3******
  {
    id: 1.3,
    srcs: [
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41TzBkKGVHL._AC_US40_.jpg",
        view: "https://m.media-amazon.com/images/I/51PHOLYPBiL._AC_SX425_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/51PHOLYPBiL._AC_SL1001_.jpg",
      },
    ],
    title:
      "Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01) + SanDisk 64GB MicroSDXC UHS-I Card",
    storeName: "nintendo switch",
    category: "nintendo switch consoles",
    stars: 4.5,
    seller: "the corner store",
    fulfilledBy: "amazon",
    style: "console w/ 64G memory card",
    points: [
      {
        name: "price",
        value: 316.98,
        type: "",
      },
      {
        name: "style",
        value: "console w/ 64G memory card",
        type: "tags",
        tags: [...showAvailable("Styles", "nintendoSwitch")],
      },
      {
        name: "colors",
        value: "neon blue and red",
        type: "subImgs",
        availableSubImgs: [...showAvailable("Colors", "nintendoSwitch")],
        colors: [
          {
            name: "neon blue and red",
            iconSrc:
              "https://m.media-amazon.com/images/I/41C4JkSnyzL._SS36_.jpg",
            srcs: [
              "https://m.media-amazon.com/images/I/51PHOLYPBiL._AC_SX425_.jpg",
            ],
          },

          {
            name: "gray",
            iconSrc:
              "https://m.media-amazon.com/images/I/41AfeXVVoUL._SS36_.jpg",
            srcs: [
              "https://m.media-amazon.com/images/I/51GaFA7Q0nL._AC_SX425_.jpg",
            ],
          },
        ],
      },
    ],
    about: [
      "Play your way with the Nintendo Switch gaming system. Whether you’re at home or on the go, solo or with friends, the Nintendo Switch system is designed to fit your life. Dock your Nintendo Switch to enjoy HD gaming on your TV. Heading out? Just undock your console and keep playing in handheld mode",
      "This model includes battery life of approximately 4.5 9 hours .",
      "The battery life will depend on the games you play. For instance, the battery will last approximately 5.5 hours for The Legend of Zelda: Breath of the Wild (games sold separately)",
      "Incredible speeds in a microSD card officially licensed for the Nintendo Switch and Nintendo Switch Lite systems",
      "Spend less time waiting and more time playing with read speeds up to 100MB/s(1) and write speeds up to 60MB/s(1).",
      "Instantly add up to 64GB (1GB=1,000,000,000 bytes. Actual user storage less.)",
    ],
  },
  // ****** PRODUCT 2******
  {
    id: 2.0,
    type: "multi-src",
    srcs: [
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41wuFwHgE9L._AC_US40_.jpg",
        view: "https://m.media-amazon.com/images/I/41wuFwHgE9L._AC_SY200_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/810o-i5jpiL._AC_SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/5122in9l7FL._AC_US40_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/61ohFUCI7sL._AC_SX425_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/61ohFUCI7sL._AC_SL1000_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51N19xNBh%2BL._AC_US40_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/61DzVD49AfL._AC_SX425_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/61DzVD49AfL._AC_SL1000_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51DnGvpeQwL._AC_US40_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/616xkPy3kkL._AC_SX425_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/616xkPy3kkL._AC_SL1000_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41hd5fyfwBL._AC_US40_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/71IuUD6X7mL._AC_SX425_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71IuUD6X7mL._AC_SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51QENmgYxgL._AC_US40_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/71xOhhO6PSL._AC_SY606_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71xOhhO6PSL._AC_SL1500_.jpg",
      },
    ],
    title:
      "SanDisk 128GB microSDXC-Card, Licensed for Nintendo-Switch - SDSQXAO-128G-GNCZN",
    storeName: "SanDisk",
    category: "Micro SD Memory Cards",
    patch: "amazon's choice",
    stars: 5,
    ratings: "114,676",
    answered: "166",
    points: [
      {
        name: "price",
        vlaue: 23.78,
        type: "",
      },
      {
        name: "capacity",
        vlaue: "128GB",
        type: "tags",
        tags: [...showAvailable("Capacities", "nintendoMimoryCard")],
      },
      {
        name: "style",
        vlaue: "super mario super mashroom",
        type: "tags",
        tags: [...showAvailable("Styles", "nintendoMimoryCard")],
      },
      {
        name: "brand",
        vlaue: "SanDisk",
        type: "",
      },
      {
        name: "flash memory type",
        vlaue: "micro SD",
        type: "",
      },
      {
        name: "hardware interface",
        vlaue: "microSDXC",
        type: "",
      },
      {
        name: "secure digital",
        vlaue: "class 10",
        type: "",
      },
    ],
    about: [
      "incredible speeds in a microSD card officially licensed for the Nintendo Switch and Nintendo Switch Lite systems",
      "spend less time waiting and more time playing with read speeds up to 100 MB/s and write speeds up to 90MB/s",
      "instantly add up to 128GB (1GB=1,000,000,000 bytes. Actual user storage less.)",
      "store your downloaded games, screenshots and video captures in 1 place so you can travel light.",
      "lifetime limited warranty",
    ],
  },
  // ****** PRODUCT 2.1******
  {
    id: 2.1,
    type: "multi-src",
    srcs: [
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41rfhnyVsBL._AC_US40_.jpg",
        view: "https://m.media-amazon.com/images/I/51IEVgCe89L._AC_SX425_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/51A0KYLSMHL._AC_SL1044_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51f-cogTYvL._AC_US40_.jpg",
        view: "https://m.media-amazon.com/images/I/61IWJpxxaXL._AC_SX425_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/61IWJpxxaXL._AC_SL1000_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51VxM8lrJ-L._AC_US40_.jpg",
        view: "https://m.media-amazon.com/images/I/61Q0Lib8hDL._AC_SY450_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/61Q0Lib8hDL._AC_SL1000_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/513nGG4uejL._AC_US40_.jpg",
        view: "https://m.media-amazon.com/images/I/71rsbAsZUdL._AC_SY606_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71rsbAsZUdL._AC_SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41nLFg3X-wL._AC_US40_.jpg",
        view: "https://m.media-amazon.com/images/I/81GcG1pXrbL._AC_SX425_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/81GcG1pXrbL._AC_SL1500_.jpg",
      },
    ],
    title:
      "SanDisk 64GB MicroSDXC-Card, Licensed for Nintendo-Switch - SDSQXAT-064G-GNCZN",
    storeName: "SanDisk",
    category: "Micro SD Memory Cards",
    stars: 5,
    ratings: "114,676",
    answered: "166",
    availableStyles: [...showAvailable("Styles", "nintendoMimoryCard")],
    points: [
      {
        name: "price",
        vlaue: 16.8,
        type: "",
      },
      {
        name: "capacity",
        value: "64GB",
        type: "tags",
        tags: [...showAvailable("Capacities", "nintendoMimoryCard")],
      },
      {
        name: "style",
        value: "apex legends sigil",
        type: "tags",
        tags: [...showAvailable("Styles", "nintendoMimoryCard")],
      },
      {
        name: "brand",
        value: "san disk",
      },
      {
        name: "flash memory type",
        value: "Micro SDXC",
      },
      {
        name: "hardware interface",
        value: "MicroSDXC",
      },
      {
        name: "memory stroage capcity",
        value: "64GB",
      },
      {
        name: "wirte speed",
        value: "60GB",
      },
    ],
    about: [
      "Incredible speeds in a microSD card officially licensed for the Nintendo Switch and Nintendo Switch Lite systems",
      "Spend less time waiting and more time playing with read speeds up to 100MB/s(1) and write speeds up to 60MB/s(1).",
      "Instantly add up to 64GB (1GB=1,000,000,000 bytes. Actual user storage less.)",
      "Store your downloaded games, screenshots and video captures in one place so you can travel light.",
      "Lifetime limited warranty(2)",
    ],
  },
  // ****** PRODUCT 2.2******
  {
    id: 2.2,
    type: "multi-src",
    srcs: [
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51Du6MbBn1L._AC_US40_.jpg",
        view: "https://m.media-amazon.com/images/I/71J1YdapVRL._AC_SX425_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71J1YdapVRL._AC_SL1001_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51Mw7Ct5imL._AC_US40_.jpg",
        view: "https://m.media-amazon.com/images/I/91wHPqU30oL._AC_SX425_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/91wHPqU30oL._AC_SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51ZedZr9JaL._AC_US40_.jpg",
        view: "https://m.media-amazon.com/images/I/61rJJoVEugL._AC_SX425_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/61rJJoVEugL._AC_SL1000_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51mEiNcCaFL._AC_US40_.jpg",
        view: "https://m.media-amazon.com/images/I/61rYPpahHtL._AC_SX425_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/61rYPpahHtL._AC_SL1000_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/515IAQsQGjL._AC_US40_.jpg",
        view: "https://m.media-amazon.com/images/I/91KQmjDxj-L._AC_SY679_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/91KQmjDxj-L._AC_SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51iViCu4LFL._AC_US40_.jpg",
        view: "https://m.media-amazon.com/images/I/71DdVqmfUCL._AC_SX425_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71DdVqmfUCL._AC_SL1280_.jpg",
      },
    ],
    title:
      "SanDisk 256GB MicroSDXC Card, Licensed for Nintendo Switch - SDSQXAO-256G-GNCZN & Mario Kart 8 Deluxe - Nintendo Switch",
    storeName: "SanDisk",
    category: "Micro SD Memory Cards",
    points: [
      {
        name: "price",
        value: "97.01",
      },
      {
        name: "capacity",
        value: "256GB",
        type: "tags",
        tags: [...showAvailable("Capacities", "nintendoMimoryCard")],
      },
      {
        name: "style",
        value: "apex legends sigil",
        type: "tags",
        tags: [...showAvailable("Styles", "nintendoMimoryCard")],
      },
    ],
    about: [
      "Product 1: Incredible speeds in a microSD card officially licensed for the Nintendo Switch and Nintendo Switch Lite systems",
      "Product 1: Spend less time waiting and more time playing with read speeds up to 100MB/s and write speeds up to 90MB/s",
      "Product 1: Instantly add up to 256GB (1GB=1,000,000,000 bytes. Actual user storage less.)",
      "Product 1: Store your downloaded games, screenshots and video captures in 1 place so you can travel light.",
      "Product 2: Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere! Race your friends or battle them in a revised battle mode on new and returning battle courses",
      "Product 2: Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return",
      "Product 2: Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr.",
      "Product 2: Players can choose a new Smart Steering feature which makes driving and staying on the track easy for novice players and kids even at 200cc",
    ],
  },
  // ****** PRODUCT 3******
  {
    id: 3.0,
    type: "multi-src",
    srcs: [
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41lo7JOm0UL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://m.media-amazon.com/images/I/41lo7JOm0UL._AC_SY200_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/61drpi3cYUL._SL1258_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41euSWO2Q%2BL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/7166--AaJIL._SX425_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/7166--AaJIL._SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41IU%2B9EVv6L._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/71CbYcn-kZL._SX425_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71CbYcn-kZL._SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41uQbTWaAZL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/81GutZPdWiL._SX425_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/81GutZPdWiL._SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/31VHuZJAGCL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/51vJMiQR4-L._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/51vJMiQR4-L._SL1500_.jpg",
      },
    ],
    title: "nintendo switch pro controller",
    storeName: "nintendo switch",
    category: "nintendo switch controller",
    stars: 5,
    ratings: "42,505",
    points: [
      {
        name: "edition",
        value: "single",
        type: "",
      },
      {
        name: "colors",
        value: "black",
        type: "subImgs",
        srcs: [
          {
            name: "black",
            iconSrc:
              "https://m.media-amazon.com/images/I/415tcAh3E1L._SS36_.jpg",
            src: [
              "https://m.media-amazon.com/images/I/41lo7JOm0UL._AC_SY200_.jpg",
              "https://images-na.ssl-images-amazon.com/images/I/7166--AaJIL._SX425_.jpg",
              "https://images-na.ssl-images-amazon.com/images/I/71CbYcn-kZL._SX425_.jpg",
              "https://images-na.ssl-images-amazon.com/images/I/81GutZPdWiL._SX425_.jpg",
              "https://images-na.ssl-images-amazon.com/images/I/51vJMiQR4-L._SX522_.jpg",
            ],
          },
          {
            name: "xenoblade chronicles 2",
            iconSrc:
              "https://m.media-amazon.com/images/I/415tcAh3E1L._SS36_.jpg",
            src: [
              "https://m.media-amazon.com/images/I/81eE7bWieSL._SX425_.jpg",
              "https://m.media-amazon.com/images/I/71wNKgBcSCL._SX522_.jpg",
              "https://m.media-amazon.com/images/I/71tSFDdPHqL._SX522_.jpg",
              "https://m.media-amazon.com/images/I/71FHoY1qgbL._SX466_.jpg",
            ],
          },
        ],
      },
    ],
    about: [
      "kick your game sessions up a notch with the Nintendo Switch Pro Controller featuring a special Xenoblade Chronicles 2 theme",
      "also includes charging cable (USB-C to USB-A)",
      "amiibo sold separately",
    ],
  },
  // ****** PRODUCT 4******
  {
    id: 4.0,
    type: "multi-src",
    srcs: [
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51Xtjsa7suL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://m.media-amazon.com/images/I/51yPmwP26mL._AC_SY200_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/81QydOacjqL._SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/412H1J5Sl4L._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/71HeeFyFe7L._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/712k2H1lgcL._SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41Qnka6bpfL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/71FuJJF5bAL._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71HIJYsH2TL._SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41%2BqtaMPfqL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/71o-i1XtYfL._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/715gHy5YeIL._SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41qbf5i9HRL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/71Yyf9X5I8L._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71lBk8JUUGL._SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41kwQVwSDFL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/61nCQv618lL._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71wGTMin9aL._SL1500_.jpg",
      },
    ],
    title: "legend of zelda link's awakening - nintendo switch",
    storeName: "nintendo switch",
    category: "nintendo switch games",
    stars: 4,
    ratings: "17,555",
    points: [
      {
        name: "platform",
        vlaue: "nintendo switch",
        type: "tags",
        tags: [...showAvailable("Platforms", "nintendoSwitchGames")],
      },
      {
        name: "edition",
        vlaue: "standard",
        type: "tags",
        tags: [...showAvailable("Editions", "nintendoSwitchGames")],
        editions: [
          {
            tagName: "standard",
            hoverSrc: [
              "https://m.media-amazon.com/images/I/51yPmwP26mL._AC_SY200_.jpg",
              "https://images-na.ssl-images-amazon.com/images/I/71HeeFyFe7L._SX522_.jpg",
              "https://images-na.ssl-images-amazon.com/images/I/71FuJJF5bAL._SX522_.jpg",
              "https://images-na.ssl-images-amazon.com/images/I/71o-i1XtYfL._SX522_.jpg",
              "https://images-na.ssl-images-amazon.com/images/I/71Yyf9X5I8L._SX522_.jpg",
              "https://images-na.ssl-images-amazon.com/images/I/61nCQv618lL._SX522_.jpg",
            ],
          },
          {
            tagName: "dreamer",
            hoverSrc: [
              "https://m.media-amazon.com/images/I/91WpY8b6iHL._SX425_.jpg",
              "https://m.media-amazon.com/images/I/71FuJJF5bAL._SX522_.jpg",
              "https://m.media-amazon.com/images/I/71RLTHVHmwL._SX522_.jpg",
              "https://m.media-amazon.com/images/I/71HeeFyFe7L._SX522_.jpg",
              "https://m.media-amazon.com/images/I/71o-i1XtYfL._SX522_.jpg",
              "https://m.media-amazon.com/images/I/71Yyf9X5I8L._SX522_.jpg",
            ],
          },
        ],
      },
    ],
    about: [
      "as Link, explore a reimagined Koholint Island and collect instruments to awaken the Wind Fish to find a way home",
      "explore numerous dungeons, riddled with tricks, traps, and enemies, including some from the Super Mario series",
      "meet and interact with unique locals to get help on your adventure",
      "listen to a reawakened soundtrack that helps bring life to Koholint Island",
      "earn Chambers (Dungeon Rooms) and arrange them to complete objectives in the all new Chamber Dungeon",
    ],
  },
  // ****** PRODUCT 4.1******
  {
    id: 4.1,
    tagName: "switch digital code",
    srcs: [
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51Xtjsa7suL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://m.media-amazon.com/images/I/51yPmwP26mL._AC_SY200_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/81QydOacjqL._SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/412H1J5Sl4L._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/71HeeFyFe7L._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/712k2H1lgcL._SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41Qnka6bpfL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/71FuJJF5bAL._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71HIJYsH2TL._SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41%2BqtaMPfqL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/71o-i1XtYfL._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/715gHy5YeIL._SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41qbf5i9HRL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/71Yyf9X5I8L._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71lBk8JUUGL._SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41kwQVwSDFL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/61nCQv618lL._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71wGTMin9aL._SL1500_.jpg",
      },
    ],
    title: "Legend of Zelda Link's Awakening - Nintendo Switch [Digital Code]",
    storeName: "nintendo switch",
    category: "nintendo switch games",
    stars: 4,
    ratings: "17,555",
    points: [
      {
        name: "platform",
        vlaue: "nintendo switch",
        type: "tags",
        tags: [...showAvailable("Platforms", "nintendoSwitchGames")],
      },
      {
        name: "edition",
        vlaue: "standard",
        type: "tags",
        tags: [...showAvailable("Editions", "nintendoSwitchGames")],
        editions: [
          {
            tagName: "dreamer",
            hoverSrc: [
              "https://m.media-amazon.com/images/I/91WpY8b6iHL._SX425_.jpg",
              "https://m.media-amazon.com/images/I/71FuJJF5bAL._SX522_.jpg",
              "https://m.media-amazon.com/images/I/71RLTHVHmwL._SX522_.jpg",
              "https://m.media-amazon.com/images/I/71HeeFyFe7L._SX522_.jpg",
              "https://m.media-amazon.com/images/I/71o-i1XtYfL._SX522_.jpg",
              "https://m.media-amazon.com/images/I/71Yyf9X5I8L._SX522_.jpg",
            ],
          },
        ],
      },
    ],
  },
  // ****** PRODUCT 5******
  {
    id: 5.0,
    srcs: [
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51w4aXzlW-L._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://m.media-amazon.com/images/I/51PSZ+sS1gL._AC_SY200_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71T2bsIM1oL._SL1237_.jpg",
      },
    ],
    title: "monster hunter rise - nintendo switch",
    storeName: "nintendo switch",
    category: "nintendo switch games",
    stars: 4.5,
    ratings: "331",
    points: [
      {
        name: "price",
        vlaue: 49.99,
        type: "",
      },
      {
        name: "platform",
        vlaue: "nintendo switch",
        type: "tags",

        tags: [...showAvailable("Platforms", "nintendoSwitchGames2")],
      },
      {
        name: "edition",
        value: "standard",
        type: "tags",
        tags: [...showAvailable("Editions", "nintendoSwitchGames2")],
        editions: [
          {
            tagName: "standatd",
            hoverSrc: [
              "https://images-na.ssl-images-amazon.com/images/I/71T2bsIM1oL._SX342_.jpg",
            ],
          },
          {
            tagName: "delux",
            hoverSrc: [
              "https://m.media-amazon.com/images/I/71sO2zTxRaL._SX342_.jpg",
            ],
          },
          {
            tagName: "collectors",
            hoverSrc: [
              "https://m.media-amazon.com/images/I/81WVgWk3vXL._SX522_.jpg",
            ],
          },
        ],
      },
    ],
    about: [
      "collector's Edition includes enamel pin, stickers, monster Hunter Rise Deluxe Edition, and magnamalo amiibo.",
      "the debut of the new “wirebug” mechanic allows for wire-based grappling actions that can be used to scale cliffs and other hard-to-reach areas, providing new traversal and aerial attack options.",
      "the game will introduce magnamalo, a menacing new flagship monster, as well as other new monsters like the shape-shifting aknosom, the amphibious tetranadon, and more.",
      "new hunting partners called palamutes can be personalized and used to ride across the terrain, providing players with all-new traveling and attack options.",
    ],
  },
  // ****** PRODUCT 5.1******
  {
    id: 5.1,
    src: [
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51Ezf7HQ8YL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://m.media-amazon.com/images/I/816xoweJxKL._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/816xoweJxKL._SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51jU1lYnJHL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://m.media-amazon.com/images/I/71atx6BQXxL._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71atx6BQXxL._SL1280_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51%2BtJbE%2BrmL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "hthttps://images-na.ssl-images-amazon.com/images/I/71FBFXWHMxL._SL1280_.jpgtps://m.media-amazon.com/images/I/71FBFXWHMxL._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71FBFXWHMxL._SL1280_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51LvQYakzfL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://m.media-amazon.com/images/I/71siQtmK-bL._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71siQtmK-bL._SL1280_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/51AF0lL6NvL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://m.media-amazon.com/images/I/71KWtz8pP3L._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71KWtz8pP3L._SL1280_.jpg",
      },
      {
        icon: "",
        view: "https://m.media-amazon.com/images/I/61WuYrjL0hL._SX522_.jpg",
        detail: "",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41WoVDpc8pL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://m.media-amazon.com/images/I/61WuYrjL0hL._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/61WuYrjL0hL._SL1280_.jpg",
      },
    ],
    title: "Monster Hunter Rise Standard - Switch [Digital Code]",
    storeName: "nintendo switch",
    category: "nintendo switch games",
    stars: 4.5,
    ratings: "331",
    points: [
      {
        name: "price",
        vlaue: 59.99,
        type: "",
      },
      {
        name: "platform",
        vlaue: "switch digital code",
        type: "tags",
        src: ["https://m.media-amazon.com/images/I/51PSZ+sS1gL._AC_SY200_.jpg"],
        tags: [...showAvailable("Platforms", "nintendoSwitchGames2")],
      },
      {
        name: "edition",
        value: "standard",
        type: "tags",
        tags: [...showAvailable("Editions", "nintendoSwitchGames2")],
        editions: [
          {
            tagName: "standatd",
            hoverSrc: [
              "https://images-na.ssl-images-amazon.com/images/I/71T2bsIM1oL._SX342_.jpg",
            ],
          },
          {
            tagName: "delux",
            hoverSrc: [
              "https://m.media-amazon.com/images/I/71sO2zTxRaL._SX342_.jpg",
            ],
          },
          {
            tagName: "collectors",
            hoverSrc: [
              "https://m.media-amazon.com/images/I/81WVgWk3vXL._SX522_.jpg",
            ],
          },
        ],
        about: [
          "collector's Edition includes enamel pin, stickers, monster Hunter Rise Deluxe Edition, and magnamalo amiibo.",
          "the debut of the new “wirebug” mechanic allows for wire-based grappling actions that can be used to scale cliffs and other hard-to-reach areas, providing new traversal and aerial attack options.",
          "the game will introduce magnamalo, a menacing new flagship monster, as well as other new monsters like the shape-shifting aknosom, the amphibious tetranadon, and more.",
          "new hunting partners called palamutes can be personalized and used to ride across the terrain, providing players with all-new traveling and attack options.",
        ],
      },
    ],
  },
  // ****** PRODUCT 6******
  {
    id: 6.0,
    srcs: [
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/516IxHYyAjL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://m.media-amazon.com/images/I/51-PxSqkitL._AC_SY200_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71tmtmIgbhL._SL1500_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41-caAX2H%2BL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/711ZbLTqljL._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71SrBB4tACL._SL1280_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41ZlhjDtxbL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/71d4uFuyo4L._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/718UGZC8pRL._SL1280_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/414Kl4FthWL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/71OUzlqSZ0L._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71%2BmCuo5nLL._SL1280_.jpg",
      },
      {
        icon: "https://images-na.ssl-images-amazon.com/images/I/41S4L7i%2BvVL._SX38_SY50_CR,0,0,38,50_.jpg",
        view: "https://images-na.ssl-images-amazon.com/images/I/81Bo9AYEpWL._SX522_.jpg",
        detail:
          "https://images-na.ssl-images-amazon.com/images/I/71Jcc4Oj4fL._SL1500_.jpg",
      },
    ],
    title: "Minecraft with Super Mario Mash-up - Nintendo Switch",
    storeName: "nintendo switch",
    category: "nintendo switch games",
    stars: 5,
    ratings: "458",
    points: [
      {
        name: "price",
        vlaue: 60.99,
        type: "",
      },
    ],

    about: [
      "Includes Super Mario Mash-up and more!",
      "No need to go alone! Share the adventure with friends in split-screen multiplayer and online!",
      "Discover tons of community creations and share the adventure with friends across different platforms!",
      "Online multiplayer will be free until the Nintendo Switch Online service launches in 2018.",
      "Online multiplayer requires a subscription to online service (sold separately) and a network connection.",
    ],
  },
  // ****** PRODUCT 7******
  {
    id: 7,
    srcs: ["https://m.media-amazon.com/images/I/41dpVipelxL._AC_SY200_.jpg"],
  },
  // ****** PRODUCT 8******
  {
    id: 8.0,
    srcs: [
      "https://m.media-amazon.com/images/I/51-PxSqkitL._AC_SY200_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/711ZbLTqljL._SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71d4uFuyo4L._SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71OUzlqSZ0L._SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81Bo9AYEpWL._SX522_.jpg",
    ],
    title: "Minecraft with Super Mario Mash-up - Nintendo Switch",
    starts: 5,
    answered: "1,115",
    points: [
      {
        name: "price",
        value: 35.5,
      },
    ],
    about: [
      "Includes Super Mario Mash-up and more!",
      "No need to go alone! Share the adventure with friends in split-screen multiplayer and online!",
      "Discover tons of community creations and share the adventure with friends across different platforms!",
      "Online multiplayer will be free until the Nintendo Switch Online service launches in 2018.",
      "Online multiplayer requires a subscription to online service (sold separately) and a network connection.",
    ],
  },
  // ****** PRODUCT 9******
  {
    id: 9,
    srcs: [
      "https://images-na.ssl-images-amazon.com/images/I/81V7L6auixL._SX425_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71ODe8urfGL._SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71xMjwoZLaL._SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/712%2BGkpF-wL._SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/712LdbEQHTL._SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61c0HcqVhQL._SX522_.jpg",
    ],
  },
  // ****** PRODUCT 10******
  {
    id: 10,
    srcs: [
      "https://images-na.ssl-images-amazon.com/images/I/81dNjZGGgKL._SY445_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71EQ2b5S6AL._SY445_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71-twbVb99L._SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71fw1FBjm0L._SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81soKAPENiL._SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71Lh9SndhnL._SX522_.jpg",
    ],
  },
  // ****** PRODUCT 11******
  {
    id: 11,
    srcs: [
      "https://images-na.ssl-images-amazon.com/images/I/71w18E60zzL._SY445_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81ENz7ZUNAL._SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71JVSNlYlAL._SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71i-FEvx8-L._SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/71z3PfdOccL._SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81yY2Qc37vL._SX522_.jpg",
    ],
  },
  // ****** PRODUCT 12******
  {
    id: 12,
    srcs: [
      "https://images-na.ssl-images-amazon.com/images/I/51aUEzZwBhL._AC_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41EAS5d2gRL._AC_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51p5fEJQOQL._AC_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/51jeImNKLCL._AC_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/6128rl68P1L._AC_SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61vRI7JbpZL._AC_SX522_.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/41uvXp9sCaL._AC_.jpg",
    ],
  },
  // ****** PRODUCT 13******
  {
    id: 13,
    srcs: ["https://m.media-amazon.com/images/I/31i3tpuXxxL._AC_SY200_.jpg"],
  },
  // ****** PRODUCT 14******
  {
    id: 14,
    srcs: ["https://m.media-amazon.com/images/I/41yavwjp-8L._AC_SY200_.jpg"],
  },
  // ****** PRODUCT 15******
  {
    id: 15,
    srcs: ["https://m.media-amazon.com/images/I/41XlyY4EvQL._AC_SY200_.jpg"],
  },
  // ****** PRODUCT 16******
  {
    id: 16,
    srcs: ["https://m.media-amazon.com/images/I/41g0C69FbvL._AC_SY200_.jpg"],
  },
  // ****** PRODUCT 17******
  {
    id: 17,
    srcs: ["https://m.media-amazon.com/images/I/31FA9oO9VEL._AC_SY200_.jpg"],
  },
  // ****** PRODUCT 18******
  {
    id: 18,
    srcs: ["https://m.media-amazon.com/images/I/416IxcmUpGL._AC_SY200_.jpg"],
  },
  // ****** PRODUCT 19******
  {
    id: 19,
    srcs: ["https://m.media-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg"],
  },
  // ****** PRODUCT 20******
  {
    id: 20,
    srcs: ["https://m.media-amazon.com/images/I/51EFHtOLKxL._AC_SY200_.jpg"],
  },
  // ****** PRODUCT 21******
  {
    id: 21,
    srcs: ["https://m.media-amazon.com/images/I/51EFHtOLKxL._AC_SY200_.jpg"],
  },
  // ****** PRODUCT 22******
  {
    id: 22,
    srcs: ["https://m.media-amazon.com/images/I/31USdJPy1QL._AC_SY200_.jpg"],
  },
  // ****** PRODUCT 23******
  {
    id: 23,
    srcs: ["https://m.media-amazon.com/images/I/41dpVipelxL._AC_SY200_.jpg"],
  },
  {
    id: 24,
    srcs: ["https://m.media-amazon.com/images/I/41L7ZbzwQcL._AC_SY200_.jpg"],
  },
  {
    id: 25,
    srcs: ["https://m.media-amazon.com/images/I/515IAQsQGjL._AC_SY200_.jpg"],
  },
  {
    id: 26,
    srcs: ["https://m.media-amazon.com/images/I/41McnBJl0FL._AC_SY200_.jpg"],
  },
  {
    id: 27,
    srcs: ["https://m.media-amazon.com/images/I/31KgT4TDgkL._AC_SY200_.jpg"],
  },
  {
    id: 28,
    srcs: ["https://m.media-amazon.com/images/I/513ttWDr7eL._AC_SY200_.jpg"],
  },
  {
    id: 29,
    srcs: ["https://m.media-amazon.com/images/I/41PZtgxSarL._AC_SY200_.jpg"],
  },
  {
    id: 30,
    srcs: ["https://m.media-amazon.com/images/I/51SCO4M07xL._AC_SY200_.jpg"],
  },
  {
    id: 31,
    srcs: ["https://m.media-amazon.com/images/I/41HQbvhq8AL._AC_SY200_.jpg"],
  },
  {
    id: 32,
    srcs: ["https://m.media-amazon.com/images/I/51Po53jQorL._AC_SY200_.jpg"],
  },
  {
    id: 33,
    srcs: ["https://m.media-amazon.com/images/I/51iVC6pFaJL._AC_SY200_.jpg"],
  },
  {
    id: 34,
    srcs: ["https://m.media-amazon.com/images/I/41-dwzym+DL._AC_SY200_.jpg"],
  },
  {
    id: 35,
    srcs: ["https://m.media-amazon.com/images/I/51ktI-0APpL._AC_SY200_.jpg"],
  },
  {
    id: 36,
    srcs: ["https://m.media-amazon.com/images/I/31i3tpuXxxL._AC_SY200_.jpg"],
  },
  {
    id: 37,
    srcs: ["https://m.media-amazon.com/images/I/51baHzdxfLL._AC_SY200_.jpg"],
  },
  {
    id: 38,
    srcs: ["https://m.media-amazon.com/images/I/41zSn74fPuL._AC_SY200_.jpg"],
  },
  {
    id: 39,
    srcs: ["https://m.media-amazon.com/images/I/41zSn74fPuL._AC_SY200_.jpg"],
  },
  {
    id: 40,
    srcs: ["https://m.media-amazon.com/images/I/41f2bsOLm4L._AC_SY200_.jpg"],
  },
  {
    id: 41,
    srcs: ["https://m.media-amazon.com/images/I/51DS3hWD9lL._AC_SY200_.jpg"],
  },
  {
    id: 41,
    srcs: ["https://m.media-amazon.com/images/I/51x+YpqXTIL._AC_SY200_.jpg"],
  },
  {
    id: 42,
    srcs: ["https://m.media-amazon.com/images/I/51teAzhRNiL._AC_SY200_.jpg"],
  },
  {
    id: 43,
    srcs: ["https://m.media-amazon.com/images/I/41kygBpa3iL._AC_SY200_.jpg"],
  },
  {
    id: 44,
    srcs: ["https://m.media-amazon.com/images/I/41n-v84wr8L._AC_SY200_.jpg"],
  },
  {
    id: 45,
    srcs: ["https://m.media-amazon.com/images/I/51+RBtlZeuL._AC_SY200_.jpg"],
  },
  {
    id: 46,
    srcs: ["https://m.media-amazon.com/images/I/41sMH1+VhvL._AC_SY200_.jpg"],
  },
  {
    id: 47,
    srcs: ["https://m.media-amazon.com/images/I/51uBLNdYDgL._AC_SY200_.jpg"],
  },
  {
    id: 48,
    srcs: ["https://m.media-amazon.com/images/I/51W+hgUt3UL._AC_SY200_.jpg"],
  },
  {
    id: 48,
    srcs: ["https://m.media-amazon.com/images/I/41CL827xmNL._AC_SY200_.jpg"],
  },
  {
    id: 49,
    srcs: ["https://m.media-amazon.com/images/I/41Y15o6btZL._AC_SY200_.jpg"],
  },
  {
    id: 50,
    srcs: ["https://m.media-amazon.com/images/I/41C4EsdONdL._AC_SY200_.jpg"],
  },
  {
    id: 51,
    srcs: ["https://m.media-amazon.com/images/I/51IIMW6-TbL._AC_SY200_.jpg"],
  },
  {
    id: 52,
    srcs: ["https://m.media-amazon.com/images/I/41a+DJMfzwL._AC_SY200_.jpg"],
  },
  {
    id: 53,
    srcs: ["https://m.media-amazon.com/images/I/41a+DJMfzwL._AC_SY200_.jpg"],
  },
  {
    id: 54,
    srcs: ["https://m.media-amazon.com/images/I/41uj5xFzXZL._AC_SY200_.jpg"],
  },
  {
    id: 55,
    srcs: ["https://m.media-amazon.com/images/I/41bjpRqJneL._AC_SY200_.jpg"],
  },
  {
    id: 56,
    srcs: ["https://m.media-amazon.com/images/I/419PxLnkFrL._AC_SY200_.jpg"],
  },
  {
    id: 57,
    srcs: ["https://m.media-amazon.com/images/I/41vMYgD92xL._AC_SY200_.jpg"],
  },
  {
    id: 58,
    srcs: ["https://m.media-amazon.com/images/I/415vAIn9uEL._AC_SY200_.jpg"],
  },
  {
    id: 59,
    srcs: ["https://m.media-amazon.com/images/I/41QLuWcqFjL._AC_SY200_.jpg"],
  },
  {
    id: 60,
    srcs: ["https://m.media-amazon.com/images/I/31UVA7LKmOL._AC_SY200_.jpg"],
  },
  {
    id: 61,
    srcs: ["https://m.media-amazon.com/images/I/51uHDpXAD4L._AC_SY200_.jpg"],
  },
  {
    id: 62,
    srcs: ["https://m.media-amazon.com/images/I/41FiaJIzMzL._AC_SY200_.jpg"],
  },
  {
    id: 63,
    srcs: ["https://m.media-amazon.com/images/I/513Hg1ZeXtL._AC_SY200_.jpg"],
  },
  {
    id: 64,
    srcs: ["https://m.media-amazon.com/images/I/51mSaMHje3L._AC_SY200_.jpg"],
  },
  {
    id: 65,
    srcs: ["https://m.media-amazon.com/images/I/41-K6Ta7FjL._AC_SY200_.jpg"],
  },
  {
    id: 66,
    srcs: ["https://m.media-amazon.com/images/I/61vwEAcyrZL._AC_SY200_.jpg"],
  },
  {
    id: 67,
    srcs: ["https://m.media-amazon.com/images/I/51Mdz7KQ0VL._AC_SY200_.jpg"],
  },
  {
    id: 68,
    srcs: ["https://m.media-amazon.com/images/I/51d5cqa2fVL._AC_SY200_.jpg"],
  },
  {
    id: 69,
    srcs: ["https://m.media-amazon.com/images/I/51ZHBtac2KL._AC_SY200_.jpg"],
  },
  {
    id: 70,
    srcs: ["https://m.media-amazon.com/images/I/51cEng9OPTL._AC_SY200_.jpg"],
  },
  {
    id: 71,
    srcs: ["https://m.media-amazon.com/images/I/41LcHkVQbwL._AC_SY200_.jpg"],
  },
  {
    id: 72,
    srcs: ["https://m.media-amazon.com/images/I/51OM2hozIyL._AC_SY200_.jpg"],
  },
  {
    id: 73,
    srcs: ["https://m.media-amazon.com/images/I/41RQHwUl+LL._AC_SY200_.jpg"],
  },
  {
    id: 74,
    srcs: ["https://m.media-amazon.com/images/I/51wlUnNtsHL._AC_SY200_.jpg"],
  },
  {
    id: 75,
    srcs: ["https://m.media-amazon.com/images/I/51al5c5C52L._AC_SY200_.jpg"],
  },
  {
    id: 76,
    srcs: ["https://m.media-amazon.com/images/I/51gIBBYlqNL._AC_SY200_.jpg"],
  },
  {
    id: 77,
    srcs: ["https://m.media-amazon.com/images/I/51c8sgFCIQL._AC_SY200_.jpg"],
  },
  {
    id: 78,
    srcs: ["https://m.media-amazon.com/images/I/517h-u1AQlL._AC_SY200_.jpg"],
  },
  {
    id: 79,
    srcs: ["https://m.media-amazon.com/images/I/51V9Sk9bCyL._AC_SY200_.jpg"],
  },
  {
    id: 80,
    srcs: ["https://m.media-amazon.com/images/I/41gxzYX-iGL._AC_SY200_.jpg"],
  },
  {
    id: 81,
    srcs: ["https://m.media-amazon.com/images/I/51hzREF2dJL._AC_SY200_.jpg"],
  },
  {
    id: 82,
    srcs: ["https://m.media-amazon.com/images/I/516Yy6yh8XL._AC_SY200_.jpg"],
  },
  {
    id: 83,
    srcs: ["https://m.media-amazon.com/images/I/51FcSSKpJBL._AC_SY200_.jpg"],
  },
  {
    id: 84,
    srcs: ["https://m.media-amazon.com/images/I/51Tlm0GZTXL._AC_SY200_.jpg"],
  },
  {
    id: 85,
    srcs: ["https://m.media-amazon.com/images/I/61-2bISJnwL._AC_SY200_.jpg"],
  },
  {
    id: 86,
    srcs: ["https://m.media-amazon.com/images/I/51Ifl1zXhJL._AC_SY200_.jpg"],
  },
];

export const searchCategories = [
  "All Departments",
  "Arts & Crafts",
  "Automotive",
  "Baby",
  "Beauty & Personal Care",
  "Books",
  "Computers",
  "Digital Music",
  "Electronics",
  "Kindle Store",
  "Prime Video",
  "Men's Fashion",
  "Women's Fashion",
  "Girls' Fashion",
  "Boys' Fashion",
  "Deals",
  "Health & Household",
  "Home & Kitchen",
  "Industrial & Scientific",
];

export const bannerCarousel = [
  {
    link: "ships",
    imgsrc:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg",
  },
  {
    link: "techs",
    imgsrc:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg",
  },
  {
    link: "lang",
    imgsrc:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Launches/Arabic/Fuji_TallHero_Arabic_Language_en_US_1x._CB424660381_.jpg",
  },
  {
    link: "beauty",
    imgsrc:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg",
  },
  {
    link: "amazon-music",
    imgsrc:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV1._CB412009348_.jpg",
  },
];

const cardRow1 = {
  type: "card",
  items: [
    {
      type: "multi-img",
      title: "shop by category",
      cards: [
        {
          link: "computers",
          title: "computers & accessories",
          imgsrc:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg",
        },
        {
          link: "video-games",
          title: "video games",
          imgsrc:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg",
        },
        {
          link: "baby",
          title: "baby",
          imgsrc:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg",
        },
        {
          link: "toys",
          title: "toys & games",
          imgsrc:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg",
        },
      ],
    },
    {
      type: "single-card",
      link: "computers",
      title: "computers & accessories",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg",
    },
    {
      type: "single-card",
      link: "amazonbasics",
      title: "amazon basics",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg",
    },
    {
      type: "split-card",
      link: "amazonbasics",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg",
    },
  ],
};
const cardRow2 = {
  type: "card",
  items: [
    {
      type: "single-card",
      link: "top-searchCategories",
      title: "shop top searchCategories",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg",
    },
    {
      type: "single-card",
      link: "beauty",
      title: "beauty picks",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg",
    },
    {
      type: "single-card",
      link: "tv",
      title: "find your tv",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg",
    },
    {
      type: "single-card",
      link: "sport",
      title: "git fit at home",
      imgsrc:
        "https://images.pexels.com/photos/4397831/pexels-photo-4397831.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
  ],
};
const cardRow3 = {
  type: "card",
  items: [
    {
      type: "multi-img",
      title: "comfity styles for her",
      cards: [
        {
          link: "computers",
          title: "sweatshirts",
          imgsrc:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg",
        },
        {
          link: "video-games",
          title: "joggers",
          imgsrc:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Joggers_Quad_Cat_1x._SY116_CB418608748_.jpg",
        },
        {
          link: "baby",
          title: "cardigans",
          imgsrc:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Cardigans_Quad_Cat_1x._SY116_CB418608722_.jpg",
        },
        {
          link: "toys",
          title: "easy tees",
          imgsrc:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Tees_Quad_Cat_1x._SY116_CB418608878_.jpg",
        },
      ],
    },
    {
      type: "single-card",
      link: "computers",
      title: "shop laptops & tablets",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg",
    },
    {
      type: "single-card",
      link: "computers",
      title: "explore home bedding",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg",
    },
    {
      type: "single-card",
      link: "computers",
      title: "create with strip lights",
      imgsrc:
        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476_.jpg",
    },
  ],
};

const icons = {
  type: "iconSlider",
  title: "discover amazon",
  srcs: [
    {
      icon: <BiGlobe />,
      line1: "shop in",
      line2: " 8 languages",
    },
    {
      icon: <BiMoney />,
      line1: "shop in",
      line2: "60+ currencies",
    },
    {
      icon: <IoWalletOutline />,
      line1: "secure",
      line2: "payments",
    },
    {
      icon: <BiBox />,
      line1: "estimated",
      line2: "import fees",
    },
    {
      icon: <BiMap />,
      line1: "track your",
      line2: "package",
    },
    {
      icon: <IoChatbubblesOutline />,
      line1: "24/7",
      line2: "customer service",
    },
  ],
};

const prefrence = {
  type: "slider",
  title: "inspired by shopping trends",
  srcs: [...getProductsByIds(1, 12)],
};

const topSillers = {
  type: "slider",
  title: "top sillers",
  srcs: [...getProductsByIds(13, 23)],
};

const wishes = {
  type: "slider",
  title: "most wished for video games",
  srcs: [...getProductsByIds(24, 41)],
};

const kitchenBestSellers = {
  type: "slider",
  title: "best sillers in kitchen & dining",
  srcs: [...getProductsByIds(42, 48)],
};

const computerBestSellers = {
  type: "slider",
  title: "best sellers in computers & accessories",
  srcs: [...getProductsByIds(49, 62)],
};

const toysBestSellers = {
  type: "slider",
  title: "best sellers in toys & games",
  srcs: [...getProductsByIds(63, 73)],
};

const booksBestSellers = {
  type: "slider",
  title: "best sellers in books",
  srcs: [...getProductsByIds(74, 86)],
};
export const rows = [
  cardRow1,
  cardRow2,
  // icons,
  cardRow3,
  prefrence,
  topSillers,
  wishes,
  kitchenBestSellers,
  computerBestSellers,
  toysBestSellers,
  booksBestSellers,
];

export const languages = [
  "English - En",
  "Español - ES",
  "简体中文 - ZH",
  "Deutsch - DE",
  "Português - PT",
  "繁體中文 - ZH",
  "한국어 - KO",
  "العربية",
];

export const accountLinks = [
  "account",
  "orders",
  "recommendations",
  "borwsing history",
  "watchlist",
  "video purches & retains",
  "kindle unlimted",
  "content & devices",
  "subscribe & save items",
  "Membership & subscripitions",
  "music library",
  "switch accounts",
  "sign out",
];
