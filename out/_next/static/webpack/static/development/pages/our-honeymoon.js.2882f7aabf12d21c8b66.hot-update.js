webpackHotUpdate("static/development/pages/our-honeymoon.js",{

/***/ "./layout/Header.js":
/*!**************************!*\
  !*** ./layout/Header.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Navigation */ "./layout/components/Navigation.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.scss */ "./layout/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/paul/Projects/_Sites/Wedding/layout/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Logo = function Logo() {
  return __jsx("div", {
    className: "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Paul + Danielle")));
};

var Header = function Header() {
  var fakeMenu = [{
    label: 'Our Story',
    target: '/how-we-met',
    key: 'menu-our-story'
  }, {
    label: 'Our Day',
    target: '/our-day',
    key: 'menu-our-day'
  }, {
    label: 'Honeymoon',
    target: '/our-honeymoon',
    key: 'menu-honeymoon'
  }, {
    label: 'Peep the Pics',
    target: '/peep-the-pics',
    key: 'menu-pics'
  }, {
    label: 'Registry',
    target: '/registry',
    key: 'menu-registry'
  }];
  return __jsx("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
    menuItems: fakeMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(Logo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

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
var _jsxFileName = "/Users/paul/Projects/_Sites/Wedding/layout/Page.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var seo = _ref.seo,
      children = _ref.children;
  return __jsx("div", {
    className: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_Meta_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    seo: seo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    className: "page",
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

/***/ "./layout/components/Gallery.js":
/*!**************************************!*\
  !*** ./layout/components/Gallery.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ "./layout/components/Image.js");
/* harmony import */ var _Gallery_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gallery.scss */ "./layout/components/Gallery.scss");
/* harmony import */ var _Gallery_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Gallery_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/paul/Projects/_Sites/Wedding/layout/components/Gallery.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // TODO:  update image object structure

var GalleryImageRow = function GalleryImageRow(_ref) {
  var galleryImages = _ref.galleryImages;
  var rowClassName = galleryImages.reduce(function (result, galleryImage) {
    return result ? result + '-' + galleryImage.aspect : galleryImage.aspect;
  }, "");
  var aspectCount = new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_0___default.a(galleryImages.map(function (galleryImage) {
    return galleryImage.aspect;
  })).size;
  var counter = 0;
  return __jsx("div", {
    className: "gallery__row ".concat(rowClassName),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, galleryImages && galleryImages.map(function (_ref2) {
    var url = _ref2.url,
        alt = _ref2.alt,
        ratio = _ref2.ratio;
    return __jsx(GalleryImage, {
      url: url,
      alt: alt,
      style: "image-".concat(counter),
      ratio: ratio,
      respectAspect: aspectCount > 1 ? false : true,
      key: "gallery-image=".concat(++counter),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });
  }));
};

var GalleryImage = function GalleryImage(_ref3) {
  var url = _ref3.url,
      alt = _ref3.alt,
      style = _ref3.style,
      ratio = _ref3.ratio,
      respectAspect = _ref3.respectAspect,
      key = _ref3.key;

  if (respectAspect) {
    var splitParams = ratio && ratio.split("x");
    var viewBoxParams = splitParams[0] + " " + splitParams[1];
    return __jsx("div", {
      className: "image__ratio ".concat(style),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("svg", {
      viewBox: "0 0 ".concat(viewBoxParams),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), __jsx(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      url: url,
      alt: alt,
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }));
  } else {
    return __jsx("div", {
      className: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
      url: url,
      alt: alt,
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }));
  }
}; // takes in a row


var Gallery = function Gallery(_ref4) {
  var galleryRows = _ref4.galleryRows;
  return __jsx("div", {
    className: "gallery__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, galleryRows && galleryRows.map(function (images) {
    return __jsx(GalleryImageRow, {
      galleryImages: images,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./layout/components/Image.js":
/*!************************************!*\
  !*** ./layout/components/Image.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.scss */ "./layout/components/Image.scss");
/* harmony import */ var _Image_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Image_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/paul/Projects/_Sites/Wedding/layout/components/Image.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // TODO:  upgrade url to variants / srcset list

var Image = function Image(_ref) {
  var url = _ref.url,
      alt = _ref.alt;
  return __jsx("picture", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    src: url,
    alt: alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./layout/components/Navigation.js":
/*!*****************************************!*\
  !*** ./layout/components/Navigation.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Navigation_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Navigation.scss */ "./layout/components/Navigation.scss");
/* harmony import */ var _Navigation_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Navigation_scss__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/paul/Projects/_Sites/Wedding/layout/components/Navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;






var NavigationItem = function NavigationItem(_ref) {
  var label = _ref.label,
      target = _ref.target;
  return __jsx("div", {
    className: "navigation__menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: target,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, label)));
};

var Navigation =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Navigation, _Component);

  function Navigation(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigation);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigation).call(this, props));
    _this.state = {
      mobileMenu: false,
      menu: _this.props.menuItems
    };
    _this.toggleMobile = _this.toggleMobile.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, [{
    key: "toggleMobile",
    value: function toggleMobile(e) {
      var _this2 = this;

      e.preventDefault();
      this.setState({
        mobileMenu: !this.state.mobileMenu
      }, function () {
        return _this2.state.mobileMenu ? console.log('on') : console.log('off');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("div", {
        className: "navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("div", {
        className: "navigation__mobile-menu",
        onClick: function onClick(e) {
          return _this3.toggleMobile(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.state.mobileMenu ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faTimes"],
        size: "lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }) : __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faBars"],
        size: "lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), __jsx("div", {
        className: "navigation__menu ".concat(this.state.mobileMenu ? 'mobile-on' : 'mobile-off'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, this.state.menu.map(function (item) {
        return __jsx(NavigationItem, {
          label: item.label,
          target: item.target,
          key: item.key,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        });
      })));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./pages/our-honeymoon.js":
/*!********************************!*\
  !*** ./pages/our-honeymoon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Page */ "./layout/Page.js");
/* harmony import */ var _layout_components_TitleCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/components/TitleCard */ "./layout/components/TitleCard.js");
/* harmony import */ var _layout_components_Gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/components/Gallery */ "./layout/components/Gallery.js");
var _jsxFileName = "/Users/paul/Projects/_Sites/Wedding/pages/our-honeymoon.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var seo = {
  title: 'Our Honeymoon'
};
var galleryRows = [[{
  url: '/images/honeymoon/001.jpg',
  alt: 'Danielle at the Parthenon',
  aspect: 'portrait',
  ratio: '2x3'
}, {
  url: '/images/honeymoon/002.jpg',
  alt: 'Paul at the Parthenon',
  aspect: 'portrait',
  ratio: '2x3'
}], [{
  url: '/images/honeymoon/008.jpg',
  alt: 'Holding hands, showing off Danielle\'s Ring',
  aspect: 'landscape',
  ratio: '3x2'
}], [{
  url: '/images/honeymoon/003.jpg',
  alt: 'Paul at the Pink Beach on Crete',
  aspect: 'portrait',
  ratio: '2x3'
}, {
  url: '/images/honeymoon/004.jpg',
  alt: 'Danielle at the Pink Beach on Crete',
  aspect: 'portrait',
  ratio: '2x3'
}], [{
  url: '/images/honeymoon/013.jpg',
  alt: 'Paul at the Pink Beach on Crete',
  aspect: 'landscape',
  ratio: '3x2'
}, {
  url: '/images/honeymoon/010.jpg',
  alt: 'Danielle at the Pink Beach on Crete',
  aspect: 'portrait',
  ratio: '2x3'
}]];

var Honeymoon = function Honeymoon() {
  return __jsx(_layout_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    seo: seo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_layout_components_TitleCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Honeymoon Memories",
    image: "/images/honeymoon-hero.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx("div", {
    className: "content ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: "content__copy width__narrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "From Mini-Moon to Maxi-Moon\u2026"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "After our wedding, we were lucky enough to celebrate our newlywed life with a quick mini-moon in Hawaii! (Shout out to our friends, Ko and Jess who got married while we were there!)"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Once Paul had accrued some vacation days after all the time off for the wedding (#thisamericanlife), we hopped on a plane at LAX with a dream and a cardigan, one of which was lost with our luggage when we arrived in Croatia. Thankfully it was the latter."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Together we toured the coast of the country, drinking wine (it\u2019s like $2 a glass), eating truffles (which are surprisingly cheap there!), and devouring seafood (also cheap!) We visited a number of Game of Thrones locations, and even got drunk where the dragons were held."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "After Croatia, we did some island hoping in Greece, through Crete and Santorini, where we dusted off our wedding wear and were shocked to see that it still fit. Our hotel in Santorini, Honeymoon Petra, was fantastic and let us take photos throughout the resort (and even upgraded us to an awesome suite to boot!)"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "We couldn\u2019t have done any of this without the generous gifts to our honeymoon fund from our awesome friends and family. We truly thank you, and want you to know that each of your gifts was enjoyed full-heartedly and we thought about all of you on each and every day of our trips. (Couples massage? CHECK. Fish pedicure? CHECK. Swanky hotel? CHECK. Lots of wine? QUADRUPLE CHECK.)"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "We love you all and hope that your thank you cards (albeit quite late, we apologize, newlywed life has been busy!) got to you safely."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "If you\u2019d like to see some photos from our trip, please feel free to scroll the gallery below or follow Danielle on ", __jsx("a", {
    href: "http://instagram.com/hodgepodger",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Instagram"), "."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Love,")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Danielle & Paul"))), __jsx("div", {
    className: "content__gallery",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_layout_components_Gallery__WEBPACK_IMPORTED_MODULE_3__["default"], {
    galleryRows: galleryRows,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Honeymoon);

/***/ })

})
//# sourceMappingURL=our-honeymoon.js.2882f7aabf12d21c8b66.hot-update.js.map