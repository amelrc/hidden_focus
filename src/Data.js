//galleries
import I0 from "../src/images/LATF/0.jpg";
import LS1 from "./images/LS/WEB-LS1-RAY-3838-249kb.jpg";
import AW1 from "./images/AW/WEB--0665-302kb--Angkor--p.1.jpg";
import I3 from "./images/CAUC/3.jpg";
import W0762 from "./images/MX/WEB-0762-250kb.jpg";
import I1 from "./images/NY/1.jpg";

///////// LIGHTSPCAPES //////////

import LS2 from "./images/LS/WEB-LS2-RAY-8032-252kb.jpg";
import LS3 from "./images/LS/WEB-LS3-RAY-6862-253kb.jpg";
import LS4 from "./images/LS/WEB-LS4-RAY-4194-251kb.jpg";
import LS5 from "./images/LS/WEB-LS5-RAY-7766-263kb.jpg";
import LS6 from "./images/LS/WEB-LS6-RAY-6989-261kb.jpg";
import LS7 from "./images/LS/WEB-LS7-RAY-7013-265kb.jpg";
import LS8 from "./images/LS/WEB-LS8-RAY-6931-422kb.JPG";
import LS9 from "./images/LS/WEB-LS9-RAY-6781-256kb.jpg";
import LS10 from "./images/LS/WEB-LS10-RAY-7776-257kb.jpg";
import LS11 from "./images/LS/WEB-LS11-2N7A8243-249kb.jpg";
import LS12 from "./images/LS/WEB-LS12-RAY-4937-257kb.jpg";
import LS13 from "./images/LS/WEB-LS13-RAY-8422-312kb.jpg";
import LS14 from "./images/LS/WEB-LS14-RAY-3652-246kb.jpg";
import LS15 from "./images/LS/WEB-LS15-RAY-3832-261kb.jpg";
import LS16 from "./images/LS/WEB-LS16-7742-259kb.jpg";

////////// GEORGE //////////

import W0001 from "./images/GE/WEB-0001-251kb.jpg";

///////// LIGHTSPCAPES //////////

export const LS = [
  { img: LS2, text: "", css: { width: "100%" } },
  { img: LS3, text: "", css: { width: "100%" } },
  { img: LS4, text: "", css: { width: "50%" } },
  { img: LS5, text: "", css: { width: "100%" } },
  { img: LS6, text: "", css: { width: "50%" } },
  { img: LS7, text: "", css: { width: "100%" } },
  { img: LS8, text: "", css: { width: "50%" } },
  { img: LS9, text: "", css: { width: "100%" } },
  { img: LS10, text: "", css: { width: "100%" } },
  { img: LS11, text: "Unstill Life", css: { width: "100%" } },
  { img: LS12, text: "", css: { width: "100%" } },
  { img: LS13, text: "", css: { width: "100%" } },
  { img: LS14, text: "", css: { width: "50%" } },
  { img: LS15, text: "", css: { width: "100%" } },
  { img: LS16, text: "Elysium", css: { width: "100%" } },
];

///////// GALLERY //////////
export const museum = [
  {
    floors: "themes",
    rooms: [
      {
        url: "look-at-the-flowers",
        id: 1,
        introImg: I0,
        name: "Look at the Flowers",
      },
      {
        url: "lightscapes",
        id: 2,
        introImg: LS1,
        name: "Lightscapes",
      },
      // { url: "explorations", id:3 ,introImg: W2555 },
      // { url: "protraits", id: 4,introImg: LS1 },
    ],
  },
  {
    floors: "destinations",
    rooms: [
      {
        url: "angkor-wat",
        id: 5,
        introImg: AW1,
        name: "Angkor Wat",
      },
      // {
      //   url: "quatro-amigos-una-cuba",
      //   id: 6,
      //   introImg: I3,
      //   name: "Quatro Amigos: Una Cuba",
      // },
      { url: "new-york", id: 7, introImg: I1, name: "New York" },
    ],
  },
  {
    floors: "shows",
    rooms: [
      {
        url: "george-enescu",
        id: 8,
        introImg: W0001,
        name: "George Enescu's Secret Garden",
      },
      {
        url: "digital-table-book",
        id: 9,
        introImg: W0762,
        name: "A Digital Coffee Table Book",
      },
      {
        url: "cuatro-amigos",
        id: 10,
        introImg: I3,
        name: "Quatro Amigos:Una Cuba",
      },
    ],
  },
];
