webpackHotUpdate("static/development/pages/our-day.js",{

/***/ "./layout/Meta.js":
/*!************************!*\
  !*** ./layout/Meta.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/paul/Projects/Wedding/website/layout/Meta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Meta = function Meta() {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./layout/Page.js":
/*!************************!*\
  !*** ./layout/Page.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Meta.js */ "./layout/Meta.js");
/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.js */ "./layout/Header.js");
/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.js */ "./layout/Footer.js");
/* harmony import */ var _Page_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Page.scss */ "./layout/Page.scss");
/* harmony import */ var _Page_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Page_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/paul/Projects/Wedding/website/layout/Page.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return __jsx("div", {
    className: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_Meta_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    className: "page parallax",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_Header_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), children, __jsx(_Footer_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })));
});

/***/ }),

/***/ "./pages/our-day.js":
/*!**************************!*\
  !*** ./pages/our-day.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Page */ "./layout/Page.js");
/* harmony import */ var _layout_components_TitleCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/components/TitleCard */ "./layout/components/TitleCard.js");
var _jsxFileName = "/Users/paul/Projects/Wedding/website/pages/our-day.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Index = function Index() {
  return __jsx(_layout_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(_layout_components_TitleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "About Our Day",
    image: "/static/images/Danielle+and+Paul-13.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("div", {
    className: "content ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "content__copy width__narrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "THE DAY ALL STARTED WHEN\u2026"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "They woke in the morning to beautiful sun and happy little clouds in the sky after a night of rolling thunder and strobes of lightening surrounded their little ", __jsx("a", {
    href: "https://www.airbnb.com/rooms/17610367",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "mid-century home rental"), ". After a restless sleep with shivers of worry about whether rain on their wedding day is really good luck, they awoke and began the journey to prepare for one of the biggest days of their lives."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Paul slipped and dodged around the house drinking coffee, putting together the last minute touches of DIYs and packing to head to ", __jsx("a", {
    href: "https://www.laquintaresort.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "La Quinta"), " to take deep breaths and deep drinks with his groomsmen and dad. Danielle slipped into a slip, ", __jsx("a", {
    href: "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1311.R1.TR1.TRC0.A0.H0.Xvintage+bridal+nig.TRS0&_nkw=vintage+bridal+nightgown&_sacat=0",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "second-hand 90s vintage"), " Victoria Secret of course, and opened the door bright and early to her bridesmaids and beauty team."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "The room was abuzz with the bubbles of champagne and the whir of each Polaroid as it popped out of the camera. Family arrived and each opened a gift bag filled with matching pajamas, spa day goodies, and a personal note written by the bride."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "The ", __jsx("a", {
    href: "https://www.instagram.com/alyss_beauty/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "make-up artist"), " worked her magic, transforming each girl from bright-eyed to beautiful, and the ", __jsx("a", {
    href: "https://www.instagram.com/forthelov3ofhair/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "hair stylist"), "\u2019s fingers wove curls into creations. Somewhere beyond, Paul and his groomsmen were clinking glasses and tying matching ties, both loosening up and tightening down in their own ways."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "They arrived at ", __jsx("a", {
    href: "http://www.livingdesert.org/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "the venue"), " in matching black ", __jsx("a", {
    href: "https://www.uber.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Ubers"), " and met with ", __jsx("a", {
    href: "https://www.heretodayphoto.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "photographers"), " in a secret location. They read cards from each other, and separated from prying eyes as well as from each other, they were placed ready to see each other for the first time. "), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Danielle walked slowly up behind Paul, and overcome by emotion, she wrapped him in a hug, her hands thudding into his ", __jsx("a", {
    href: "https://www.enzocustom.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "tuxedo-wrapped"), " chest. Paul turned around with tears in his eyes, forgetting to look Danielle up and down, unable to pull his gaze from her face. He thought she looked beautiful."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "With their bridal party, photographers, and ", __jsx("a", {
    href: "https://www.letsbefrankmedia.com/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "videographer"), " in tow, they huddled into a golf cart and drove into the desert for portraits."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Cheeks hurting from smiles, they ", __jsx("a", {
    href: "https://eventsbycmg.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "rushed to the venue to line up"), " to say their I Do\u2019s. A few last minute tweaks and a proud gaze at the decor they\u2019d handmade and the ", __jsx("a", {
    href: "http://www.ocfleurish.com/home.html",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "handcrafted florals"), " left them feeling complete before their walk down the aisle."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "The music began and Paul proudly strode on a ", __jsx("a", {
    href: "https://www.youtube.com/watch?v=kuq7RYQ8Wa0",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "glorious walk"), " to the altar they built. Pair by pair, family and friends walked arm in arm to meet him."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "As the time grew nearer, Danielle felt stars in her eyes and thought she might faint, not from nerves of the day but from sheer lack of food. Her dad held her arm and asked if she was ready."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "With a ", __jsx("a", {
    href: "http://www.asitbridal.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "veil"), " over her face and heel-savers on her ", __jsx("a", {
    href: "https://www.badgleymischka.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "shoes"), ", they walked arm in arm through family and friends to her dad\u2019s f", __jsx("a", {
    href: "https://www.youtube.com/watch?v=K0qnt5rTCoo",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "avorite song"), " from her youth. With a hug and a kiss, her dad passed her hand off into the hand of another loving man."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Looking into each others eyes and hand in hand, they listened to the beautifully crafted words their good friend Ben spoke as he led the their family and friends through the story of their moments together."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "With shaking hands and steady hearts, Danielle and Paul each read their thoughts, dreams, and vows, with some funny, some poignant, and all of them heartfelt."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "After an ", __jsx("a", {
    href: "https://www.romajewelers.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "exchange of rings"), ", a broken glass, and a new understanding of the words MAZEL TOV!, they held each other, lips pressed over smiling teeth, in their first kiss as one."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Friends cheered with gold pompoms as they ", __jsx("a", {
    href: "https://www.youtube.com/watch?v=8PqAzl8stOc",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "danced back up the aisle"), " and regaled them at cocktail hour about their memories high-fiving a porcupine as they were welcomed into the celebration. While the couple posed with family, friends, and a few wild animals, their guests fed frolicking giraffes, and fed themselves with drinks and ", __jsx("a", {
    href: "http://www.fundamental-la.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "delicacies"), "."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Family gathered at their seats with their VIP Passes and awaited the grand entrance of the bride and groom. After a couple of hiccups, they grabbed each other\u2019s hands and ran through the crowd, high-fiving guests and letting the smiles of friendly faces wash over them as they made their way to the dance floor."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Their feet tapped to the beats of ", __jsx("a", {
    href: "https://www.youtube.com/watch?v=tB54XUhA9_w",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Barry White"), " and they ", __jsx("a", {
    href: "http://emmamesrobiandance.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "twisted and spun"), " to the best of their abilities, bowing between the cracks in the cement."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "After a feast of the ", __jsx("a", {
    href: "http://www.fundamental-la.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "fanciest tacos"), ", they danced alone in front of their ", __jsx("a", {
    href: "https://www.modieventsupply.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "sweetheart table"), " as the DJ prepared for their parent dances. To the tunes of ", __jsx("a", {
    href: "https://www.youtube.com/watch?v=ssXAkg0bV6o",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Roy Orbison"), ", Paul spun his mom, Karen, and laughed as they made their way around the dance floor."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Together Danielle and her Dad slow-danced their way into a surprise rendition of ", __jsx("a", {
    href: "https://www.youtube.com/watch?v=TcWPiHjIExA",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Napoleon Dynamite"), ", joined at the end by their bridesmaids, new in-laws, and of course, Paul."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Beautiful speeches brought tears to their eyes \u2014 and turns to the stomachs of those who had to give them\u2026 but not a drop of those nerves showed through when on stage. Every person could feel the care in their hearts and their words."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "After a quick speech from the bride and a quicker one from the groom, the dance-floor was filled for a group photo. Those with big muscles were grabbed to lift the bride and groom in celebration as the few people who knew what Mazel Tov meant tried to explain what the Hora is and how to do it."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "With the music already felt within all of their souls, guests were surprised as ", __jsx("a", {
    href: "http://www.popgunrerun.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "5 spritely musicians"), " rushed the stage garbed in sequins, mullets and spandex gear floating effortlessly into song. Never leaving the dance floor except to fill up their glass, chew on churros, or a quick photobooth photo-op, they danced wildly into the night."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Quietly sneaking off with her Aunt, Danielle prepared for her final surprise of the night \u2014 changing into her mother\u2019s 1980\u2019s bridal gown. Round 2 of grand entry was greeted with the shocked smile of her mother who had dreamed of seeing Danielle in her dress on her wedding day."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Together, two groups of friends, two groups of families, and two people complete on their own, but better together, ended the night with blisters on their dancing feet and love filled in their hearts."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "*", __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "All of the vendors we used for our day can be found in their links in this story! If you are looking for vendors for your own day, we\u2019d love to connect you with ours.*")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Thank you so much to all of our family, friends, and vendors who made this day so special and filled with memories. We wanted to throw a crazy emotion- and fun-filled day for you all and go into married life with a bang\u2026 and we think we succeeded. We appreciate your part in our day more than you know.")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Love,")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "The Valenzanos")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=our-day.js.e4fd7bd74ffc6c4be321.hot-update.js.map