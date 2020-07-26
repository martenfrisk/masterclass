webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_shonk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shonk */ "./components/shonk.jsx");
/* harmony import */ var _components_lemons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/lemons */ "./components/lemons.jsx");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Marten\\Documents\\Web\\homa\\pages\\index.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var infobox = function infobox(title, para1, para2, para3) {
  return __jsx("div", {
    className: "w-auto px-4 pb-10 mx-4 mt-10 text-lg text-white bg-gray-900 shadow-xl lora md:mx-16 md:text-2xl md:px-20",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "block px-4 py-2 mb-8 font-sans text-2xl font-light text-center bg-gray-700 md:text-2xl md:inline-block md:-ml-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, title), __jsx("div", {
    className: "leading-loose text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, __jsx("p", {
    className: "mb-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, para1), para3 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "mb-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, para2), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, para3)) : __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  }, para2)));
};

var sidePricing = function sidePricing(title) {
  return __jsx("div", {
    className: "py-2 mb-4 text-3xl bg-gray-400 rounded-tl-lg rounded-tr-lg lora",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, title);
};

function Home() {
  _s();

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      vis = _useState2[0],
      setVis = _useState2[1];

  useEffect(function () {
    setVis(true);
  }, [input]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "w-full h-auto bg-gray-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full text-xl font-light text-center text-gray-100 underline serif",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "http://chng.it/xLSSp4DbJS",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 6
    }
  }, "Sign the petition to bring back Hollywood Masterclass")), __jsx("div", {
    className: "flex flex-wrap justify-center w-full mt-10 md:mt-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "z-10 w-full mr-32 overflow-visible text-4xl leading-tight text-center text-yellow-100 uppercase lato md:text-6xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "w-full tracking-widest mc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Hollywood"), __jsx("p", {
    className: "w-full tracking-wider mc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Masterclass"), __jsx("p", {
    className: "w-full mt-4 text-2xl whitespace-no-wrap md:text-4xl md:mt-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, "By", __jsx("div", {
    className: "inline-block ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 10
    }
  }, __jsx(_components_shonk__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(_components_lemons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  })))), __jsx("img", {
    src: "/shonk.png",
    alt: "Shonk Lemons",
    className: "z-0 w-2/3 h-auto max-w-2xl ml-20 -mt-16 md:-mt-32 md:ml-84 md:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 6
    }
  }))), __jsx("div", {
    className: "container flex flex-col items-center max-w-6xl mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }
  }, infobox('About Shonk Lemons', 'A renaissance man in the truest sense of the term -- comedian, producer, actor, executive, humanitarian, and, most recently, father -- there is nothing, it seems, that Lemons cannot do.', 'Off-screen, Lemons has become prominently involved in international charity projects.'), __jsx("div", {
    className: "w-full px-10 mx-auto my-24 text-lg italic font-normal leading-loose text-white md:w-3/4 md:text-2xl lora",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "py-10 pl-10 border-l-8 border-gray-800 hover:border-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, "\u201CHollywood Masterclass is a beautiful showcase for the prickly comic genius of [Lemons]."), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, "[Lemons] brings in ringers like Hayes Davenport and Paul Scheer as guest lecturers to further\xA0", __jsx("span", {
    className: "line-through",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 8
    }
  }, "confuse and frustrate"), " [inspire his student] with staggeringly ", __jsx("span", {
    className: "line-through",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, "un"), "helpful advice about money and head shots and improvisation.\u201D"), __jsx("p", {
    className: "text-base not-italic md:text-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, "- Vulture Magazine"))), infobox('About the class', 'Hollywood Masterclass is a daring journey through the human psyche and beyond.', 'Learn to master auditions, analyze scripts, and find the truth in every role you play.', 'In this class, you’ll learn Shonk Lemon’s rules of storytelling, dialogue, character development, and what makes a script actually sell.'), __jsx("div", {
    className: "w-full px-10 mx-auto my-24 text-lg italic font-normal leading-loose text-white md:w-3/4 md:text-2xl lora",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "py-10 pl-10 border-l-8 border-gray-800 hover:border-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, "\u201CPeople other than me might have learned something.\u201D"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, "\u201CThe intention and obstacle stuff that you brought up. It was helpful.\u201D"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, "\u201CSome of the basics that you brought up in the course are in there, so yeah, that's great.\u201D"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, "\u201CYou know what? I'll sign up for your next one. I'll pay for this one. Okay.\u201D"), __jsx("p", {
    className: "text-base not-italic md:text-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, "- Bang Rodgeman, former student"))), __jsx("div", {
    className: "flex flex-col items-center justify-center w-full mx-auto my-20 text-gray-800 md:flex-row md:w-5/6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-2/3 text-center bg-gray-300 rounded-lg shadow-lg h-76 md:w-1/4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 6
    }
  }, sidePricing('Trial'), __jsx("div", {
    className: "flex flex-wrap items-start justify-center w-full h-56 px-3 text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "w-1/6 font-sans text-lg font-extrabold text-center text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, "\u2713"), __jsx("div", {
    className: "w-5/6 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, "Listen to a single episode of Hollywood Masterclass.")), __jsx("div", {
    className: "flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "w-1/6 font-sans text-lg font-extrabold text-center text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, "\u2713"), __jsx("p", {
    className: "w-5/6 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "Free of charge.")), __jsx("button", {
    className: "self-end w-1/2 p-2 mb-4 text-white bg-blue-400 rounded-md hover:bg-blue-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "https://www.earwolf.com/episode/hollywood-masterclass-ep1-the-role-of-the-artist/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, "Listen here")))), __jsx("div", {
    className: "w-3/4 h-auto mx-2 my-6 text-center bg-gray-300 rounded-lg shadow-lg md:my-0 md:w-1/3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 6
    }
  }, sidePricing('Personal Masterclass'), __jsx("div", {
    className: "flex flex-wrap items-start justify-center w-full h-auto pl-4 pr-8 text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("p", {
    className: "w-5/6 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 8
    }
  }, "Shonk sends the elevator back down to teach you everything you need to succeed in Hollywood."), __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("p", {
    className: "w-5/6 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 8
    }
  }, "Learn what is art, what is a artist."), __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("div", {
    className: "w-5/6 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 8
    }
  }, "First one is free, but if you want to take another it will cost double."), __jsx("div", {
    className: "self-end py-2 pl-4 pr-2 mb-4 italic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 8
    }
  }, "Contact Shonk's agent for info."))), __jsx("div", {
    className: "w-2/3 text-center bg-gray-300 rounded-lg shadow-lg h-76 md:w-1/4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 6
    }
  }, sidePricing('Premium'), __jsx("div", {
    className: "flex flex-wrap items-start justify-center w-full h-56 px-3 text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("div", {
    className: "w-5/6 pr-2 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 8
    }
  }, "Listen to the first two seasons of Hollywood Masterclass."), __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("p", {
    className: "w-5/6 pr-2 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 8
    }
  }, "Use the beloved Stitcher App."), __jsx("button", {
    className: "self-end w-1/2 px-4 py-2 mb-4 text-white bg-blue-400 rounded-md hover:bg-blue-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "https://www.stitcherpremium.com/masterclass",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, "Subscribe")))))), __jsx("div", {
    className: "w-screen h-auto px-10 py-4 text-center text-gray-600 bg-gray-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 4
    }
  }, "This website is not affiliated with Sean Clements, Ben Rodgers, Midroll Earwolf or Stitcher. Site created by Marten (", __jsx("a", {
    href: "https://github.com/martenfrisk",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 24
    }
  }, "reach me on GitHub"), ")"));
}

_s(Home, "BpNUVjgxxBruQuh5yEzxRUHpXvY=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbmZvYm94IiwidGl0bGUiLCJwYXJhMSIsInBhcmEyIiwicGFyYTMiLCJzaWRlUHJpY2luZyIsIkhvbWUiLCJ1c2VTdGF0ZSIsInZpcyIsInNldFZpcyIsInVzZUVmZmVjdCIsImlucHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FB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QyxpREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsQ0FQRCxFQVVDO0FBQUcsYUFBUyxFQUFDLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBVkQsRUFXQztBQUFRLGFBQVMsRUFBQyxtRkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQ0MsUUFBSSxFQUFDLDZDQUROO0FBRUMsVUFBTSxFQUFDLFFBRlI7QUFHQyxPQUFHLEVBQUMscUJBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxDQVhELENBRkQsQ0FwREQsQ0E1Q0QsQ0E1QkQsRUFzSkM7QUFBSyxhQUFTLEVBQUMsa0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4SEFFb0I7QUFBRyxRQUFJLEVBQUMsZ0NBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGcEIsTUF0SkQsQ0FERDtBQTZKQTs7R0FsS3VCQyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45MDg4ZmUyMzI0ZTVmZTNmODYzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBTaG9uayBmcm9tICcuLi9jb21wb25lbnRzL3Nob25rJ1xuaW1wb3J0IExlbW9ucyBmcm9tICcuLi9jb21wb25lbnRzL2xlbW9ucydcblxuY29uc3QgaW5mb2JveCA9ICh0aXRsZSwgcGFyYTEsIHBhcmEyLCBwYXJhMykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIHB4LTQgcGItMTAgbXgtNCBtdC0xMCB0ZXh0LWxnIHRleHQtd2hpdGUgYmctZ3JheS05MDAgc2hhZG93LXhsIGxvcmEgbWQ6bXgtMTYgbWQ6dGV4dC0yeGwgbWQ6cHgtMjBcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIG1iLTggZm9udC1zYW5zIHRleHQtMnhsIGZvbnQtbGlnaHQgdGV4dC1jZW50ZXIgYmctZ3JheS03MDAgbWQ6dGV4dC0yeGwgbWQ6aW5saW5lLWJsb2NrIG1kOi1tbC0xMFwiPlxuXHRcdFx0XHR7dGl0bGV9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGVhZGluZy1sb29zZSB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi0xMFwiPntwYXJhMX08L3A+XG5cdFx0XHRcdHtwYXJhMyA/IChcblx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi0xMFwiPntwYXJhMn08L3A+XG5cdFx0XHRcdFx0XHQ8cD57cGFyYTN9PC9wPlxuXHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PHA+e3BhcmEyfTwvcD5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmNvbnN0IHNpZGVQcmljaW5nID0gKHRpdGxlKSA9PiB7XG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInB5LTIgbWItNCB0ZXh0LTN4bCBiZy1ncmF5LTQwMCByb3VuZGVkLXRsLWxnIHJvdW5kZWQtdHItbGcgbG9yYVwiPnt0aXRsZX08L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblx0Y29uc3QgW3Zpcywgc2V0VmlzXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldFZpcyh0cnVlKVxuXHR9LCBbaW5wdXRdKVxuXHRyZXR1cm4gKFxuXHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBiZy1ncmF5LTgwMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXhsIGZvbnQtbGlnaHQgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTEwMCB1bmRlcmxpbmUgc2VyaWZcIj5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cDovL2NobmcuaXQveExTU3A0RGJKU1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHRcdFNpZ24gdGhlIHBldGl0aW9uIHRvIGJyaW5nIGJhY2sgSG9sbHl3b29kIE1hc3RlcmNsYXNzXG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIHctZnVsbCBtdC0xMCBtZDptdC0zMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiei0xMCB3LWZ1bGwgbXItMzIgb3ZlcmZsb3ctdmlzaWJsZSB0ZXh0LTR4bCBsZWFkaW5nLXRpZ2h0IHRleHQtY2VudGVyIHRleHQteWVsbG93LTEwMCB1cHBlcmNhc2UgbGF0byBtZDp0ZXh0LTZ4bFwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidy1mdWxsIHRyYWNraW5nLXdpZGVzdCBtY1wiPkhvbGx5d29vZDwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInctZnVsbCB0cmFja2luZy13aWRlciBtY1wiPk1hc3RlcmNsYXNzPC9wPlxuXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtNCB0ZXh0LTJ4bCB3aGl0ZXNwYWNlLW5vLXdyYXAgbWQ6dGV4dC00eGwgbWQ6bXQtMTBcIj5cblx0XHRcdFx0XHRcdFx0Qnk8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBtbC00XCI+XG5cdFx0XHRcdFx0XHRcdFx0PFNob25rIC8+XG5cdFx0XHRcdFx0XHRcdFx0PExlbW9ucyAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCIvc2hvbmsucG5nXCJcblx0XHRcdFx0XHRcdGFsdD1cIlNob25rIExlbW9uc1wiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ6LTAgdy0yLzMgaC1hdXRvIG1heC13LTJ4bCBtbC0yMCAtbXQtMTYgbWQ6LW10LTMyIG1kOm1sLTg0IG1kOnctMS8yXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtYXgtdy02eGwgbXgtYXV0b1wiPlxuXHRcdFx0XHR7aW5mb2JveChcblx0XHRcdFx0XHQnQWJvdXQgU2hvbmsgTGVtb25zJyxcblx0XHRcdFx0XHQnQSByZW5haXNzYW5jZSBtYW4gaW4gdGhlIHRydWVzdCBzZW5zZSBvZiB0aGUgdGVybSAtLSBjb21lZGlhbiwgcHJvZHVjZXIsIGFjdG9yLCBleGVjdXRpdmUsIGh1bWFuaXRhcmlhbiwgYW5kLCBtb3N0IHJlY2VudGx5LCBmYXRoZXIgLS0gdGhlcmUgaXMgbm90aGluZywgaXQgc2VlbXMsIHRoYXQgTGVtb25zIGNhbm5vdCBkby4nLFxuXHRcdFx0XHRcdCdPZmYtc2NyZWVuLCBMZW1vbnMgaGFzIGJlY29tZSBwcm9taW5lbnRseSBpbnZvbHZlZCBpbiBpbnRlcm5hdGlvbmFsIGNoYXJpdHkgcHJvamVjdHMuJ1xuXHRcdFx0XHQpfVxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTEwIG14LWF1dG8gbXktMjQgdGV4dC1sZyBpdGFsaWMgZm9udC1ub3JtYWwgbGVhZGluZy1sb29zZSB0ZXh0LXdoaXRlIG1kOnctMy80IG1kOnRleHQtMnhsIGxvcmFcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTEwIHBsLTEwIGJvcmRlci1sLTggYm9yZGVyLWdyYXktODAwIGhvdmVyOmJvcmRlci1ncmF5LTcwMFwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItNFwiPlxuXHRcdFx0XHRcdFx0XHTigJxIb2xseXdvb2QgTWFzdGVyY2xhc3MgaXMgYSBiZWF1dGlmdWwgc2hvd2Nhc2UgZm9yIHRoZSBwcmlja2x5IGNvbWljIGdlbml1cyBvZiBbTGVtb25zXS5cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLTRcIj5cblx0XHRcdFx0XHRcdFx0W0xlbW9uc10gYnJpbmdzIGluIHJpbmdlcnMgbGlrZSBIYXllcyBEYXZlbnBvcnQgYW5kIFBhdWwgU2NoZWVyIGFzIGd1ZXN0IGxlY3R1cmVycyB0b1xuXHRcdFx0XHRcdFx0XHRmdXJ0aGVyJm5ic3A7XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxpbmUtdGhyb3VnaFwiPmNvbmZ1c2UgYW5kIGZydXN0cmF0ZTwvc3Bhbj4gW2luc3BpcmUgaGlzIHN0dWRlbnRdIHdpdGhcblx0XHRcdFx0XHRcdFx0c3RhZ2dlcmluZ2x5IDxzcGFuIGNsYXNzTmFtZT1cImxpbmUtdGhyb3VnaFwiPnVuPC9zcGFuPmhlbHBmdWwgYWR2aWNlIGFib3V0IG1vbmV5IGFuZCBoZWFkXG5cdFx0XHRcdFx0XHRcdHNob3RzIGFuZCBpbXByb3Zpc2F0aW9uLuKAnVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIG5vdC1pdGFsaWMgbWQ6dGV4dC14bFwiPi0gVnVsdHVyZSBNYWdhemluZTwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0e2luZm9ib3goXG5cdFx0XHRcdFx0J0Fib3V0IHRoZSBjbGFzcycsXG5cdFx0XHRcdFx0J0hvbGx5d29vZCBNYXN0ZXJjbGFzcyBpcyBhIGRhcmluZyBqb3VybmV5IHRocm91Z2ggdGhlIGh1bWFuIHBzeWNoZSBhbmQgYmV5b25kLicsXG5cdFx0XHRcdFx0J0xlYXJuIHRvIG1hc3RlciBhdWRpdGlvbnMsIGFuYWx5emUgc2NyaXB0cywgYW5kIGZpbmQgdGhlIHRydXRoIGluIGV2ZXJ5IHJvbGUgeW91IHBsYXkuJyxcblx0XHRcdFx0XHQnSW4gdGhpcyBjbGFzcywgeW914oCZbGwgbGVhcm4gU2hvbmsgTGVtb27igJlzIHJ1bGVzIG9mIHN0b3J5dGVsbGluZywgZGlhbG9ndWUsIGNoYXJhY3RlciBkZXZlbG9wbWVudCwgYW5kIHdoYXQgbWFrZXMgYSBzY3JpcHQgYWN0dWFsbHkgc2VsbC4nXG5cdFx0XHRcdCl9XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMTAgbXgtYXV0byBteS0yNCB0ZXh0LWxnIGl0YWxpYyBmb250LW5vcm1hbCBsZWFkaW5nLWxvb3NlIHRleHQtd2hpdGUgbWQ6dy0zLzQgbWQ6dGV4dC0yeGwgbG9yYVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHktMTAgcGwtMTAgYm9yZGVyLWwtOCBib3JkZXItZ3JheS04MDAgaG92ZXI6Ym9yZGVyLWdyYXktNzAwXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi00XCI+4oCcUGVvcGxlIG90aGVyIHRoYW4gbWUgbWlnaHQgaGF2ZSBsZWFybmVkIHNvbWV0aGluZy7igJ08L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi00XCI+4oCcVGhlIGludGVudGlvbiBhbmQgb2JzdGFjbGUgc3R1ZmYgdGhhdCB5b3UgYnJvdWdodCB1cC4gSXQgd2FzIGhlbHBmdWwu4oCdPC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItNFwiPlxuXHRcdFx0XHRcdFx0XHTigJxTb21lIG9mIHRoZSBiYXNpY3MgdGhhdCB5b3UgYnJvdWdodCB1cCBpbiB0aGUgY291cnNlIGFyZSBpbiB0aGVyZSwgc28geWVhaCwgdGhhdCdzIGdyZWF0LuKAnVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItNFwiPlxuXHRcdFx0XHRcdFx0XHTigJxZb3Uga25vdyB3aGF0PyBJJ2xsIHNpZ24gdXAgZm9yIHlvdXIgbmV4dCBvbmUuIEknbGwgcGF5IGZvciB0aGlzIG9uZS4gT2theS7igJ1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBub3QtaXRhbGljIG1kOnRleHQteGxcIj4tIEJhbmcgUm9kZ2VtYW4sIGZvcm1lciBzdHVkZW50PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctZnVsbCBteC1hdXRvIG15LTIwIHRleHQtZ3JheS04MDAgbWQ6ZmxleC1yb3cgbWQ6dy01LzZcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctMi8zIHRleHQtY2VudGVyIGJnLWdyYXktMzAwIHJvdW5kZWQtbGcgc2hhZG93LWxnIGgtNzYgbWQ6dy0xLzRcIj5cblx0XHRcdFx0XHRcdHtzaWRlUHJpY2luZygnVHJpYWwnKX1cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtNTYgcHgtMyB0ZXh0LWxlZnRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0xLzYgZm9udC1zYW5zIHRleHQtbGcgZm9udC1leHRyYWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1ncmVlbi00MDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdCYjeDI3MTM7XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTUvNiBtYi0yXCI+TGlzdGVuIHRvIGEgc2luZ2xlIGVwaXNvZGUgb2YgSG9sbHl3b29kIE1hc3RlcmNsYXNzLjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0xLzYgZm9udC1zYW5zIHRleHQtbGcgZm9udC1leHRyYWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1ncmVlbi00MDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdCYjeDI3MTM7XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidy01LzYgbWItMlwiPkZyZWUgb2YgY2hhcmdlLjwvcD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwic2VsZi1lbmQgdy0xLzIgcC0yIG1iLTQgdGV4dC13aGl0ZSBiZy1ibHVlLTQwMCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNzAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3d3dy5lYXJ3b2xmLmNvbS9lcGlzb2RlL2hvbGx5d29vZC1tYXN0ZXJjbGFzcy1lcDEtdGhlLXJvbGUtb2YtdGhlLWFydGlzdC9cIlxuXHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdExpc3RlbiBoZXJlXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTMvNCBoLWF1dG8gbXgtMiBteS02IHRleHQtY2VudGVyIGJnLWdyYXktMzAwIHJvdW5kZWQtbGcgc2hhZG93LWxnIG1kOm15LTAgbWQ6dy0xLzNcIj5cblx0XHRcdFx0XHRcdHtzaWRlUHJpY2luZygnUGVyc29uYWwgTWFzdGVyY2xhc3MnKX1cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtYXV0byBwbC00IHByLTggdGV4dC1sZWZ0XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0xLzYgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWxnIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JlZW4tNDAwXCI+JiN4MjcxMzs8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInctNS82IG1iLTJcIj5cblx0XHRcdFx0XHRcdFx0XHRTaG9uayBzZW5kcyB0aGUgZWxldmF0b3IgYmFjayBkb3duIHRvIHRlYWNoIHlvdSBldmVyeXRoaW5nIHlvdSBuZWVkIHRvIHN1Y2NlZWQgaW5cblx0XHRcdFx0XHRcdFx0XHRIb2xseXdvb2QuXG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTEvNiB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtbGcgZm9udC1leHRyYWJvbGQgdGV4dC1ncmVlbi00MDBcIj4mI3gyNzEzOzwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidy01LzYgbWItMlwiPkxlYXJuIHdoYXQgaXMgYXJ0LCB3aGF0IGlzIGEgYXJ0aXN0LjwvcD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTEvNiB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtbGcgZm9udC1leHRyYWJvbGQgdGV4dC1ncmVlbi00MDBcIj4mI3gyNzEzOzwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTUvNiBtYi0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0Rmlyc3Qgb25lIGlzIGZyZWUsIGJ1dCBpZiB5b3Ugd2FudCB0byB0YWtlIGFub3RoZXIgaXQgd2lsbCBjb3N0IGRvdWJsZS5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VsZi1lbmQgcHktMiBwbC00IHByLTIgbWItNCBpdGFsaWNcIj5Db250YWN0IFNob25rJ3MgYWdlbnQgZm9yIGluZm8uPC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgdGV4dC1jZW50ZXIgYmctZ3JheS0zMDAgcm91bmRlZC1sZyBzaGFkb3ctbGcgaC03NiBtZDp3LTEvNFwiPlxuXHRcdFx0XHRcdFx0e3NpZGVQcmljaW5nKCdQcmVtaXVtJyl9XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLTU2IHB4LTMgdGV4dC1sZWZ0XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0xLzYgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWxnIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JlZW4tNDAwXCI+JiN4MjcxMzs8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy01LzYgcHItMiBtYi0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0TGlzdGVuIHRvIHRoZSBmaXJzdCB0d28gc2Vhc29ucyBvZiBIb2xseXdvb2QgTWFzdGVyY2xhc3MuXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctMS82IHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1sZyBmb250LWV4dHJhYm9sZCB0ZXh0LWdyZWVuLTQwMFwiPiYjeDI3MTM7PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ3LTUvNiBwci0yIG1iLTJcIj5Vc2UgdGhlIGJlbG92ZWQgU3RpdGNoZXIgQXBwLjwvcD5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJzZWxmLWVuZCB3LTEvMiBweC00IHB5LTIgbWItNCB0ZXh0LXdoaXRlIGJnLWJsdWUtNDAwIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS03MDBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vd3d3LnN0aXRjaGVycHJlbWl1bS5jb20vbWFzdGVyY2xhc3NcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFN1YnNjcmliZVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1hdXRvIHB4LTEwIHB5LTQgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTYwMCBiZy1ncmF5LTgwMFwiPlxuXHRcdFx0XHRUaGlzIHdlYnNpdGUgaXMgbm90IGFmZmlsaWF0ZWQgd2l0aCBTZWFuIENsZW1lbnRzLCBCZW4gUm9kZ2VycywgTWlkcm9sbCBFYXJ3b2xmIG9yIFN0aXRjaGVyLiBTaXRlXG5cdFx0XHRcdGNyZWF0ZWQgYnkgTWFydGVuICg8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21hcnRlbmZyaXNrXCI+cmVhY2ggbWUgb24gR2l0SHViPC9hPilcblx0XHRcdDwvZGl2PlxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=