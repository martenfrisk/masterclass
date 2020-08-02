webpackHotUpdate("static\\development\\pages\\index.js",{

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
    className: "w-auto px-4 pb-10 mx-4 mt-10 text-lg text-white bg-gray-900 shadow-2xl lora md:mx-16 md:text-2xl md:px-20",
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
    className: "py-3 mb-4 text-3xl bg-gray-400 rounded-tl-lg rounded-tr-lg lora",
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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      vis = _React$useState2[0],
      setVis = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      visTwo = _React$useState4[0],
      setVisTwo = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      info = _React$useState6[0],
      setInfo = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    setInfo(true);
    setTimeout(function () {
      setInfo(false);
    }, 3000);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    setTimeout(function () {
      setVis(true);
    }, 2100);
  }, []);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {
    setTimeout(function () {
      setVisTwo(true);
    }, 100);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 3
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }
  }, __jsx("meta", {
    charSet: "utf-8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }), __jsx("meta", {
    name: "description",
    content: "Fan website dedicated to Hollywood Masterclass",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, "Hollywood Masterclass with Shonk Lemons"), __jsx("script", {
    "data-goatcounter": "https://masterclass.goatcounter.com/count",
    async: true,
    src: "//gc.zgo.at/count.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  })), info && __jsx("div", {
    className: "absolute top-0 left-auto w-auto text-white bg-red-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }
  }, "This is a fan website. It is not affiliated with the creators of Hollywood Masterclass."), __jsx("div", {
    className: "w-full h-auto bg-gray-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full pt-4 text-xl font-light text-center text-gray-100 underline serif",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "http://chng.it/xLSSp4DbJS",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 6
    }
  }, "Sign the petition to bring back Hollywood Masterclass")), __jsx("div", {
    className: "flex flex-wrap justify-center w-full mt-10 md:mt-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "z-10 w-full mr-10 overflow-visible text-4xl leading-tight text-center text-yellow-100 uppercase md:mr-32 lato md:text-6xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "w-full tracking-widest mc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, "Hollywood"), __jsx("p", {
    className: "w-full tracking-wider mc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, "Masterclass"), __jsx("p", {
    className: "flex items-start w-64 mx-auto mt-4 text-2xl md:text-4xl md:mt-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 8
    }
  }, "By"), __jsx("div", {
    className: "inline-block w-48 h-32 ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 8
    }
  }, visTwo && __jsx(_components_shonk__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 20
    }
  }), vis && __jsx(_components_lemons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  })))), __jsx("img", {
    src: "/shonk.png",
    alt: "Shonk Lemons",
    className: "z-0 w-2/3 h-auto max-w-2xl ml-20 -mt-16 md:-mt-32 md:ml-84 md:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 6
    }
  }))), __jsx("div", {
    className: "container flex flex-col items-center max-w-6xl mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }
  }, infobox('About Shonk Lemons', 'A renaissance man in the truest sense of the term -- comedian, producer, actor, executive, humanitarian, and, most recently, father -- there is nothing, it seems, that Lemons cannot do.', 'Off-screen, Lemons has become prominently involved in international charity projects.'), __jsx("div", {
    className: "w-full px-10 mx-auto my-24 text-lg italic font-normal leading-loose text-white md:w-3/4 md:text-2xl lora",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "py-10 pl-10 border-l-8 border-gray-800 hover:border-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, "\u201CHollywood Masterclass is a beautiful showcase for the prickly comic genius of [Lemons]."), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, "[Lemons] brings in ringers like Hayes Davenport and Paul Scheer as guest lecturers to further\xA0", __jsx("span", {
    className: "line-through",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 8
    }
  }, "confuse and frustrate"), " [inspire his student] with staggeringly ", __jsx("span", {
    className: "line-through",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }, "un"), "helpful advice about money and head shots and improvisation.\u201D"), __jsx("p", {
    className: "text-base not-italic md:text-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, "- Vulture Magazine"))), infobox('About the class', 'Hollywood Masterclass is a daring journey through the human psyche and beyond.', 'Learn to master auditions, analyze scripts, and find the truth in every role you play.', 'In this class, you’ll learn Shonk Lemon’s rules of storytelling, dialogue, character development, and what makes a script actually sell.'), __jsx("div", {
    className: "w-full px-10 mx-auto my-24 text-lg italic font-normal leading-loose text-white md:w-3/4 md:text-2xl lora",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "py-10 pl-10 border-l-8 border-gray-800 hover:border-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, "\u201CPeople other than me might have learned something.\u201D"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, "\u201CThe intention and obstacle stuff that you brought up. It was helpful.\u201D"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }
  }, "\u201CSome of the basics that you brought up in the course are in there, so yeah, that's great.\u201D"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, "\u201CYou know what? I'll sign up for your next one. I'll pay for this one. Okay.\u201D"), __jsx("p", {
    className: "text-base not-italic md:text-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, "- Bang Rodgeman, former student"))), __jsx("div", {
    className: "flex flex-col items-center justify-center w-full mx-auto my-20 text-gray-800 md:flex-row md:w-5/6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-2/3 text-center bg-gray-300 rounded-lg shadow-lg h-76 md:w-1/3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 6
    }
  }, sidePricing('Trial'), __jsx("div", {
    className: "flex flex-wrap items-start justify-center w-full h-56 px-3 text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "w-1/6 font-sans text-lg font-extrabold text-center text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, "\u2713"), __jsx("div", {
    className: "w-5/6 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, "Listen to a single episode of Hollywood Masterclass.")), __jsx("div", {
    className: "flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "w-1/6 font-sans text-lg font-extrabold text-center text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, "\u2713"), __jsx("p", {
    className: "w-5/6 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, "Free of charge.")), __jsx("button", {
    className: "self-end w-2/3 p-2 mb-4 text-white bg-blue-400 rounded-md hover:bg-blue-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "https://www.earwolf.com/episode/hollywood-masterclass-ep1-the-role-of-the-artist/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, "Listen here")))), __jsx("div", {
    className: "w-3/4 h-auto mx-6 my-6 text-center bg-gray-300 rounded-lg shadow-lg md:my-0 md:w-2/5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "py-3 mb-4 text-3xl bg-gray-400 rounded-tl-lg rounded-tr-lg lora",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 6
    }
  }, "Personal", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 95
    }
  }), "Masterclass"), __jsx("div", {
    className: "flex flex-wrap items-start justify-center w-full h-auto pl-4 pr-8 text-left md:py-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("p", {
    className: "w-5/6 mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 8
    }
  }, "Shonk sends the elevator back down to teach you everything you need to succeed in Hollywood."), __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("p", {
    className: "w-5/6 mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 8
    }
  }, "Learn what is art, what is a artist."), __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("div", {
    className: "w-5/6 mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 8
    }
  }, "First one is free, but if you want to take another it will cost double.")), __jsx("div", {
    className: "self-end w-full px-6 mb-6 italic text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 8
    }
  }, "Contact Shonk's agent for info.")), __jsx("div", {
    className: "w-2/3 text-center bg-gray-300 rounded-lg shadow-lg h-76 md:w-1/3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 6
    }
  }, sidePricing('Premium'), __jsx("div", {
    className: "flex flex-wrap items-start justify-center w-full h-56 px-3 text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("div", {
    className: "w-5/6 pr-2 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 8
    }
  }, "Listen to the first two seasons of Hollywood Masterclass."), __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("p", {
    className: "w-5/6 pr-2 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 8
    }
  }, "Use the beloved Stitcher App."), __jsx("button", {
    className: "self-end w-3/4 px-4 py-2 mb-4 text-white bg-blue-400 rounded-md hover:bg-blue-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "https://www.stitcherpremium.com/masterclass",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 9
    }
  }, "Subscribe")))))), __jsx("div", {
    className: "w-screen h-auto px-10 py-4 text-center text-gray-600 bg-gray-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 4
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 5
    }
  }, "This website is not affiliated with Sean Clements, Ben Rodgers, Midroll, Earwolf or Stitcher. No copyright infringement intented."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, "Site created by Marten (", __jsx("a", {
    className: "border-b-2 border-gray-600 border-dotted",
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://github.com/martenfrisk",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 30
    }
  }, "reach me on GitHub"), ")")));
}

_s(Home, "XL1RDwZv9U5wQLIK9h9LN6tCwDE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsiaW5mb2JveCIsInRpdGxlIiwicGFyYTEiLCJwYXJhMiIsInBhcmEzIiwic2lkZVByaWNpbmciLCJIb21lIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInZpcyIsInNldFZpcyIsInZpc1R3byIsInNldFZpc1R3byIsImluZm8iLCJzZXRJbmZvIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFlQyxLQUFmLEVBQXNCQyxLQUF0QixFQUFnQztBQUMvQyxTQUNDO0FBQUssYUFBUyxFQUFDLDJHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxrSEFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VILEtBREYsQ0FERCxFQUlDO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLGFBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0JDLEtBQXRCLENBREQsRUFFRUUsS0FBSyxHQUNMLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLGFBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0JELEtBQXRCLENBREQsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlDLEtBQUosQ0FGRCxDQURLLEdBTUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxL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QUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlFQUpELEVBT0M7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLGlEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxDQVBELEVBVUM7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FWRCxFQVdDO0FBQVEsYUFBUyxFQUFDLG1GQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxRQUFJLEVBQUMsNkNBRE47QUFFQyxVQUFNLEVBQUMsUUFGUjtBQUdDLE9BQUcsRUFBQyxxQkFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELENBWEQsQ0FGRCxDQXBERCxDQTVDRCxDQXRDRCxFQWdLQztBQUFLLGFBQVMsRUFBQyxrRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5SUFERCxFQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQ3lCO0FBQ3ZCLGFBQVMsRUFBQywwQ0FEYTtBQUV2QixVQUFNLEVBQUMsUUFGZ0I7QUFHdkIsT0FBRyxFQUFDLHFCQUhtQjtBQUl2QixRQUFJLEVBQUMsZ0NBSmtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRHpCLE1BTEQsQ0FoS0QsQ0FERDtBQW1MQTs7R0F2TXVCQyxJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5hYTQ5NzcwMTY0OTkzNTBkOWU4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFNob25rIGZyb20gJy4uL2NvbXBvbmVudHMvc2hvbmsnXG5pbXBvcnQgTGVtb25zIGZyb20gJy4uL2NvbXBvbmVudHMvbGVtb25zJ1xuXG5jb25zdCBpbmZvYm94ID0gKHRpdGxlLCBwYXJhMSwgcGFyYTIsIHBhcmEzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gcHgtNCBwYi0xMCBteC00IG10LTEwIHRleHQtbGcgdGV4dC13aGl0ZSBiZy1ncmF5LTkwMCBzaGFkb3ctMnhsIGxvcmEgbWQ6bXgtMTYgbWQ6dGV4dC0yeGwgbWQ6cHgtMjBcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgcHgtNCBweS0yIG1iLTggZm9udC1zYW5zIHRleHQtMnhsIGZvbnQtbGlnaHQgdGV4dC1jZW50ZXIgYmctZ3JheS03MDAgbWQ6dGV4dC0yeGwgbWQ6aW5saW5lLWJsb2NrIG1kOi1tbC0xMFwiPlxuXHRcdFx0XHR7dGl0bGV9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGVhZGluZy1sb29zZSB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi0xMFwiPntwYXJhMX08L3A+XG5cdFx0XHRcdHtwYXJhMyA/IChcblx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi0xMFwiPntwYXJhMn08L3A+XG5cdFx0XHRcdFx0XHQ8cD57cGFyYTN9PC9wPlxuXHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PHA+e3BhcmEyfTwvcD5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmNvbnN0IHNpZGVQcmljaW5nID0gKHRpdGxlKSA9PiB7XG5cdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInB5LTMgbWItNCB0ZXh0LTN4bCBiZy1ncmF5LTQwMCByb3VuZGVkLXRsLWxnIHJvdW5kZWQtdHItbGcgbG9yYVwiPnt0aXRsZX08L2Rpdj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblx0Y29uc3QgWyB2aXMsIHNldFZpcyBdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IFsgdmlzVHdvLCBzZXRWaXNUd28gXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbIGluZm8sIHNldEluZm8gXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldEluZm8odHJ1ZSlcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHNldEluZm8oZmFsc2UpXG5cdFx0fSwgMzAwMClcblx0fSwgW10pXG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRzZXRWaXModHJ1ZSlcblx0XHR9LCAyMTAwKVxuXHR9LCBbXSlcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHNldFZpc1R3byh0cnVlKVxuXHRcdH0sIDEwMClcblx0fSwgW10pXG5cdHJldHVybiAoXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0PEhlYWQ+XG5cdFx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG5cdFx0XHRcdDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJGYW4gd2Vic2l0ZSBkZWRpY2F0ZWQgdG8gSG9sbHl3b29kIE1hc3RlcmNsYXNzXCIgLz5cblx0XHRcdFx0PHRpdGxlPkhvbGx5d29vZCBNYXN0ZXJjbGFzcyB3aXRoIFNob25rIExlbW9uczwvdGl0bGU+XG5cdFx0XHRcdDxzY3JpcHQgZGF0YS1nb2F0Y291bnRlcj1cImh0dHBzOi8vbWFzdGVyY2xhc3MuZ29hdGNvdW50ZXIuY29tL2NvdW50XCIgYXN5bmMgc3JjPVwiLy9nYy56Z28uYXQvY291bnQuanNcIiAvPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0e2luZm8gJiYgXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtYXV0byB3LWF1dG8gdGV4dC13aGl0ZSBiZy1yZWQtOTAwXCI+VGhpcyBpcyBhIGZhbiB3ZWJzaXRlLiBJdCBpcyBub3QgYWZmaWxpYXRlZCB3aXRoIHRoZSBjcmVhdG9ycyBvZiBIb2xseXdvb2QgTWFzdGVyY2xhc3MuPC9kaXY+XG5cdFx0XHR9XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gYmctZ3JheS04MDBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNCB0ZXh0LXhsIGZvbnQtbGlnaHQgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTEwMCB1bmRlcmxpbmUgc2VyaWZcIj5cblx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cDovL2NobmcuaXQveExTU3A0RGJKU1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cblx0XHRcdFx0XHRcdFNpZ24gdGhlIHBldGl0aW9uIHRvIGJyaW5nIGJhY2sgSG9sbHl3b29kIE1hc3RlcmNsYXNzXG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIHctZnVsbCBtdC0xMCBtZDptdC0zMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiei0xMCB3LWZ1bGwgbXItMTAgb3ZlcmZsb3ctdmlzaWJsZSB0ZXh0LTR4bCBsZWFkaW5nLXRpZ2h0IHRleHQtY2VudGVyIHRleHQteWVsbG93LTEwMCB1cHBlcmNhc2UgbWQ6bXItMzIgbGF0byBtZDp0ZXh0LTZ4bFwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidy1mdWxsIHRyYWNraW5nLXdpZGVzdCBtY1wiPkhvbGx5d29vZDwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInctZnVsbCB0cmFja2luZy13aWRlciBtY1wiPk1hc3RlcmNsYXNzPC9wPlxuXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IHctNjQgbXgtYXV0byBtdC00IHRleHQtMnhsIG1kOnRleHQtNHhsIG1kOm10LTEwXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPkJ5PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTQ4IGgtMzIgbWwtNFwiPlxuXHRcdFx0XHRcdFx0XHRcdHt2aXNUd28gJiYgPFNob25rIC8+fVxuXHRcdFx0XHRcdFx0XHRcdHt2aXMgJiYgPExlbW9ucyAvPn1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPVwiL3Nob25rLnBuZ1wiXG5cdFx0XHRcdFx0XHRhbHQ9XCJTaG9uayBMZW1vbnNcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiei0wIHctMi8zIGgtYXV0byBtYXgtdy0yeGwgbWwtMjAgLW10LTE2IG1kOi1tdC0zMiBtZDptbC04NCBtZDp3LTEvMlwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbWF4LXctNnhsIG14LWF1dG9cIj5cblx0XHRcdFx0e2luZm9ib3goXG5cdFx0XHRcdFx0J0Fib3V0IFNob25rIExlbW9ucycsXG5cdFx0XHRcdFx0J0EgcmVuYWlzc2FuY2UgbWFuIGluIHRoZSB0cnVlc3Qgc2Vuc2Ugb2YgdGhlIHRlcm0gLS0gY29tZWRpYW4sIHByb2R1Y2VyLCBhY3RvciwgZXhlY3V0aXZlLCBodW1hbml0YXJpYW4sIGFuZCwgbW9zdCByZWNlbnRseSwgZmF0aGVyIC0tIHRoZXJlIGlzIG5vdGhpbmcsIGl0IHNlZW1zLCB0aGF0IExlbW9ucyBjYW5ub3QgZG8uJyxcblx0XHRcdFx0XHQnT2ZmLXNjcmVlbiwgTGVtb25zIGhhcyBiZWNvbWUgcHJvbWluZW50bHkgaW52b2x2ZWQgaW4gaW50ZXJuYXRpb25hbCBjaGFyaXR5IHByb2plY3RzLidcblx0XHRcdFx0KX1cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0xMCBteC1hdXRvIG15LTI0IHRleHQtbGcgaXRhbGljIGZvbnQtbm9ybWFsIGxlYWRpbmctbG9vc2UgdGV4dC13aGl0ZSBtZDp3LTMvNCBtZDp0ZXh0LTJ4bCBsb3JhXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0xMCBwbC0xMCBib3JkZXItbC04IGJvcmRlci1ncmF5LTgwMCBob3Zlcjpib3JkZXItZ3JheS03MDBcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLTRcIj5cblx0XHRcdFx0XHRcdFx04oCcSG9sbHl3b29kIE1hc3RlcmNsYXNzIGlzIGEgYmVhdXRpZnVsIHNob3djYXNlIGZvciB0aGUgcHJpY2tseSBjb21pYyBnZW5pdXMgb2YgW0xlbW9uc10uXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi00XCI+XG5cdFx0XHRcdFx0XHRcdFtMZW1vbnNdIGJyaW5ncyBpbiByaW5nZXJzIGxpa2UgSGF5ZXMgRGF2ZW5wb3J0IGFuZCBQYXVsIFNjaGVlciBhcyBndWVzdCBsZWN0dXJlcnMgdG9cblx0XHRcdFx0XHRcdFx0ZnVydGhlciZuYnNwO1xuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsaW5lLXRocm91Z2hcIj5jb25mdXNlIGFuZCBmcnVzdHJhdGU8L3NwYW4+IFtpbnNwaXJlIGhpcyBzdHVkZW50XSB3aXRoXG5cdFx0XHRcdFx0XHRcdHN0YWdnZXJpbmdseSA8c3BhbiBjbGFzc05hbWU9XCJsaW5lLXRocm91Z2hcIj51bjwvc3Bhbj5oZWxwZnVsIGFkdmljZSBhYm91dCBtb25leSBhbmQgaGVhZFxuXHRcdFx0XHRcdFx0XHRzaG90cyBhbmQgaW1wcm92aXNhdGlvbi7igJ1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBub3QtaXRhbGljIG1kOnRleHQteGxcIj4tIFZ1bHR1cmUgTWFnYXppbmU8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdHtpbmZvYm94KFxuXHRcdFx0XHRcdCdBYm91dCB0aGUgY2xhc3MnLFxuXHRcdFx0XHRcdCdIb2xseXdvb2QgTWFzdGVyY2xhc3MgaXMgYSBkYXJpbmcgam91cm5leSB0aHJvdWdoIHRoZSBodW1hbiBwc3ljaGUgYW5kIGJleW9uZC4nLFxuXHRcdFx0XHRcdCdMZWFybiB0byBtYXN0ZXIgYXVkaXRpb25zLCBhbmFseXplIHNjcmlwdHMsIGFuZCBmaW5kIHRoZSB0cnV0aCBpbiBldmVyeSByb2xlIHlvdSBwbGF5LicsXG5cdFx0XHRcdFx0J0luIHRoaXMgY2xhc3MsIHlvdeKAmWxsIGxlYXJuIFNob25rIExlbW9u4oCZcyBydWxlcyBvZiBzdG9yeXRlbGxpbmcsIGRpYWxvZ3VlLCBjaGFyYWN0ZXIgZGV2ZWxvcG1lbnQsIGFuZCB3aGF0IG1ha2VzIGEgc2NyaXB0IGFjdHVhbGx5IHNlbGwuJ1xuXHRcdFx0XHQpfVxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTEwIG14LWF1dG8gbXktMjQgdGV4dC1sZyBpdGFsaWMgZm9udC1ub3JtYWwgbGVhZGluZy1sb29zZSB0ZXh0LXdoaXRlIG1kOnctMy80IG1kOnRleHQtMnhsIGxvcmFcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5LTEwIHBsLTEwIGJvcmRlci1sLTggYm9yZGVyLWdyYXktODAwIGhvdmVyOmJvcmRlci1ncmF5LTcwMFwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItNFwiPuKAnFBlb3BsZSBvdGhlciB0aGFuIG1lIG1pZ2h0IGhhdmUgbGVhcm5lZCBzb21ldGhpbmcu4oCdPC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItNFwiPuKAnFRoZSBpbnRlbnRpb24gYW5kIG9ic3RhY2xlIHN0dWZmIHRoYXQgeW91IGJyb3VnaHQgdXAuIEl0IHdhcyBoZWxwZnVsLuKAnTwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLTRcIj5cblx0XHRcdFx0XHRcdFx04oCcU29tZSBvZiB0aGUgYmFzaWNzIHRoYXQgeW91IGJyb3VnaHQgdXAgaW4gdGhlIGNvdXJzZSBhcmUgaW4gdGhlcmUsIHNvIHllYWgsIHRoYXQncyBncmVhdC7igJ1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLTRcIj5cblx0XHRcdFx0XHRcdFx04oCcWW91IGtub3cgd2hhdD8gSSdsbCBzaWduIHVwIGZvciB5b3VyIG5leHQgb25lLiBJJ2xsIHBheSBmb3IgdGhpcyBvbmUuIE9rYXku4oCdXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugbm90LWl0YWxpYyBtZDp0ZXh0LXhsXCI+LSBCYW5nIFJvZGdlbWFuLCBmb3JtZXIgc3R1ZGVudDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbXgtYXV0byBteS0yMCB0ZXh0LWdyYXktODAwIG1kOmZsZXgtcm93IG1kOnctNS82XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTIvMyB0ZXh0LWNlbnRlciBiZy1ncmF5LTMwMCByb3VuZGVkLWxnIHNoYWRvdy1sZyBoLTc2IG1kOnctMS8zXCI+XG5cdFx0XHRcdFx0XHR7c2lkZVByaWNpbmcoJ1RyaWFsJyl9XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLTU2IHB4LTMgdGV4dC1sZWZ0XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctMS82IGZvbnQtc2FucyB0ZXh0LWxnIGZvbnQtZXh0cmFib2xkIHRleHQtY2VudGVyIHRleHQtZ3JlZW4tNDAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQmI3gyNzEzO1xuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy01LzYgbWItMlwiPkxpc3RlbiB0byBhIHNpbmdsZSBlcGlzb2RlIG9mIEhvbGx5d29vZCBNYXN0ZXJjbGFzcy48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGxcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctMS82IGZvbnQtc2FucyB0ZXh0LWxnIGZvbnQtZXh0cmFib2xkIHRleHQtY2VudGVyIHRleHQtZ3JlZW4tNDAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQmI3gyNzEzO1xuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInctNS82IG1iLTJcIj5GcmVlIG9mIGNoYXJnZS48L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInNlbGYtZW5kIHctMi8zIHAtMiBtYi00IHRleHQtd2hpdGUgYmctYmx1ZS00MDAgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTcwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly93d3cuZWFyd29sZi5jb20vZXBpc29kZS9ob2xseXdvb2QtbWFzdGVyY2xhc3MtZXAxLXRoZS1yb2xlLW9mLXRoZS1hcnRpc3QvXCJcblx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRMaXN0ZW4gaGVyZVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0zLzQgaC1hdXRvIG14LTYgbXktNiB0ZXh0LWNlbnRlciBiZy1ncmF5LTMwMCByb3VuZGVkLWxnIHNoYWRvdy1sZyBtZDpteS0wIG1kOnctMi81XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0zIG1iLTQgdGV4dC0zeGwgYmctZ3JheS00MDAgcm91bmRlZC10bC1sZyByb3VuZGVkLXRyLWxnIGxvcmFcIj5QZXJzb25hbDxiciAvPk1hc3RlcmNsYXNzPC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLWF1dG8gcGwtNCBwci04IHRleHQtbGVmdCBtZDpweS02XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0xLzYgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWxnIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JlZW4tNDAwXCI+JiN4MjcxMzs8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInctNS82IG1iLTZcIj5cblx0XHRcdFx0XHRcdFx0XHRTaG9uayBzZW5kcyB0aGUgZWxldmF0b3IgYmFjayBkb3duIHRvIHRlYWNoIHlvdSBldmVyeXRoaW5nIHlvdSBuZWVkIHRvIHN1Y2NlZWQgaW5cblx0XHRcdFx0XHRcdFx0XHRIb2xseXdvb2QuXG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTEvNiB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtbGcgZm9udC1leHRyYWJvbGQgdGV4dC1ncmVlbi00MDBcIj4mI3gyNzEzOzwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidy01LzYgbWItNlwiPkxlYXJuIHdoYXQgaXMgYXJ0LCB3aGF0IGlzIGEgYXJ0aXN0LjwvcD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTEvNiB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtbGcgZm9udC1leHRyYWJvbGQgdGV4dC1ncmVlbi00MDBcIj4mI3gyNzEzOzwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTUvNiBtYi02XCI+XG5cdFx0XHRcdFx0XHRcdFx0Rmlyc3Qgb25lIGlzIGZyZWUsIGJ1dCBpZiB5b3Ugd2FudCB0byB0YWtlIGFub3RoZXIgaXQgd2lsbCBjb3N0IGRvdWJsZS5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWxmLWVuZCB3LWZ1bGwgcHgtNiBtYi02IGl0YWxpYyB0ZXh0LWNlbnRlclwiPkNvbnRhY3QgU2hvbmsncyBhZ2VudCBmb3IgaW5mby48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgdGV4dC1jZW50ZXIgYmctZ3JheS0zMDAgcm91bmRlZC1sZyBzaGFkb3ctbGcgaC03NiBtZDp3LTEvM1wiPlxuXHRcdFx0XHRcdFx0e3NpZGVQcmljaW5nKCdQcmVtaXVtJyl9XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLXN0YXJ0IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLTU2IHB4LTMgdGV4dC1sZWZ0XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0xLzYgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWxnIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JlZW4tNDAwXCI+JiN4MjcxMzs8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy01LzYgcHItMiBtYi0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0TGlzdGVuIHRvIHRoZSBmaXJzdCB0d28gc2Vhc29ucyBvZiBIb2xseXdvb2QgTWFzdGVyY2xhc3MuXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctMS82IHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1sZyBmb250LWV4dHJhYm9sZCB0ZXh0LWdyZWVuLTQwMFwiPiYjeDI3MTM7PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ3LTUvNiBwci0yIG1iLTJcIj5Vc2UgdGhlIGJlbG92ZWQgU3RpdGNoZXIgQXBwLjwvcD5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJzZWxmLWVuZCB3LTMvNCBweC00IHB5LTIgbWItNCB0ZXh0LXdoaXRlIGJnLWJsdWUtNDAwIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS03MDBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vd3d3LnN0aXRjaGVycHJlbWl1bS5jb20vbWFzdGVyY2xhc3NcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFN1YnNjcmliZVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1hdXRvIHB4LTEwIHB5LTQgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTYwMCBiZy1ncmF5LTgwMFwiPlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRUaGlzIHdlYnNpdGUgaXMgbm90IGFmZmlsaWF0ZWQgd2l0aCBTZWFuIENsZW1lbnRzLCBCZW4gUm9kZ2VycywgTWlkcm9sbCwgRWFyd29sZiBvciBTdGl0Y2hlci4gTm9cblx0XHRcdFx0XHRjb3B5cmlnaHQgaW5mcmluZ2VtZW50IGludGVudGVkLlxuXHRcdFx0XHQ8L3A+XG5cdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFNpdGUgY3JlYXRlZCBieSBNYXJ0ZW4gKDxhXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJib3JkZXItYi0yIGJvcmRlci1ncmF5LTYwMCBib3JkZXItZG90dGVkXCJcblx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWFydGVuZnJpc2tcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdHJlYWNoIG1lIG9uIEdpdEh1YlxuXHRcdFx0XHRcdDwvYT4pXG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=