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
  })), __jsx("div", {
    className: "absolute top-0 left-auto flex justify-center w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-auto p-4 mt-2 text-lg text-white bg-red-700 rounded-md",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }
  }, "This is a fan website. It is not affiliated with the creators of Hollywood Masterclass.")), __jsx("div", {
    className: "w-full h-auto bg-gray-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full pt-4 text-xl font-light text-center text-gray-100 underline serif",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "http://chng.it/xLSSp4DbJS",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 6
    }
  }, "Sign the petition to bring back Hollywood Masterclass")), __jsx("div", {
    className: "flex flex-wrap justify-center w-full mt-10 md:mt-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "z-10 w-full mr-10 overflow-visible text-4xl leading-tight text-center text-yellow-100 uppercase md:mr-32 lato md:text-6xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "w-full tracking-widest mc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, "Hollywood"), __jsx("p", {
    className: "w-full tracking-wider mc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, "Masterclass"), __jsx("div", {
    className: "flex items-start w-64 mx-auto mt-4 text-2xl md:text-4xl md:mt-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 8
    }
  }, "By"), __jsx("div", {
    className: "inline-block w-48 h-32 ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 8
    }
  }, visTwo && __jsx(_components_shonk__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 20
    }
  }), vis && __jsx(_components_lemons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  })))), __jsx("img", {
    src: "/shonk.png",
    alt: "Shonk Lemons",
    className: "z-0 w-2/3 h-auto max-w-2xl ml-20 -mt-16 md:-mt-32 md:ml-84 md:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 6
    }
  }))), __jsx("div", {
    className: "container flex flex-col items-center max-w-6xl mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 4
    }
  }, infobox('About Shonk Lemons', 'A renaissance man in the truest sense of the term -- comedian, producer, actor, executive, humanitarian -- there is nothing, it seems, that Lemons cannot do.', 'Off-screen, Lemons has become prominently involved in international charity projects.'), __jsx("div", {
    className: "w-full px-10 mx-auto my-24 text-lg italic font-normal leading-loose text-white md:w-3/4 md:text-2xl lora",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "py-10 pl-10 border-l-8 border-gray-800 hover:border-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, "\u201CHollywood Masterclass is a beautiful showcase for the prickly comic genius of [Lemons]."), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, "[Lemons] brings in ringers like Hayes Davenport and Paul Scheer as guest lecturers to further\xA0", __jsx("span", {
    className: "line-through",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 8
    }
  }, "confuse and frustrate"), " [inspire his student] with staggeringly ", __jsx("span", {
    className: "line-through",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, "un"), "helpful advice about money and head shots and improvisation.\u201D"), __jsx("p", {
    className: "text-base not-italic md:text-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, "- Vulture Magazine"))), infobox('About the class', 'Hollywood Masterclass is a daring journey through the human psyche and beyond.', 'Learn to master auditions, analyze scripts, and find the truth in every role you play.', 'In this class, you’ll learn Shonk Lemon’s rules of storytelling, dialogue, character development, and what makes a script actually sell.'), __jsx("div", {
    className: "w-full px-10 mx-auto my-24 text-lg italic font-normal leading-loose text-white md:w-3/4 md:text-2xl lora",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "py-10 pl-10 border-l-8 border-gray-800 hover:border-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, "\u201CPeople other than me might have learned something.\u201D"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }
  }, "\u201CThe intention and obstacle stuff that you brought up. It was helpful.\u201D"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }, "\u201CSome of the basics that you brought up in the course are in there, so yeah, that's great.\u201D"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }
  }, "\u201CYou know what? I'll sign up for your next one. I'll pay for this one. Okay.\u201D"), __jsx("p", {
    className: "text-base not-italic md:text-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }
  }, "- Bang Rodgeman, former student"))), __jsx("div", {
    className: "flex flex-col items-center justify-center w-full mx-auto my-20 text-gray-800 md:flex-row md:w-5/6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-2/3 text-center bg-gray-300 rounded-lg shadow-lg h-76 md:w-1/3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 6
    }
  }, sidePricing('Trial'), __jsx("div", {
    className: "flex flex-wrap items-start justify-center w-full h-56 px-3 text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "w-1/6 font-sans text-lg font-extrabold text-center text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, "\u2713"), __jsx("div", {
    className: "w-5/6 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, "Listen to a single episode of Hollywood Masterclass.")), __jsx("div", {
    className: "flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "w-1/6 font-sans text-lg font-extrabold text-center text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 9
    }
  }, "\u2713"), __jsx("p", {
    className: "w-5/6 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, "Free of charge.")), __jsx("button", {
    className: "self-end w-2/3 p-2 mb-4 text-white bg-blue-400 rounded-md hover:bg-blue-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "https://www.earwolf.com/episode/hollywood-masterclass-ep1-the-role-of-the-artist/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, "Listen here")))), __jsx("div", {
    className: "w-3/4 h-auto mx-6 my-6 text-center bg-gray-300 rounded-lg shadow-lg md:my-0 md:w-2/5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "py-3 mb-4 text-3xl bg-gray-400 rounded-tl-lg rounded-tr-lg lora",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 6
    }
  }, "Personal", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 95
    }
  }), "Masterclass"), __jsx("div", {
    className: "flex flex-wrap items-start justify-center w-full h-auto pl-4 pr-8 text-left md:py-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("p", {
    className: "w-5/6 mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 8
    }
  }, "Shonk sends the elevator back down to teach you everything you need to succeed in Hollywood."), __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("p", {
    className: "w-5/6 mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 8
    }
  }, "Learn what is art, what is a artist."), __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("div", {
    className: "w-5/6 mb-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 8
    }
  }, "First one is free, but if you want to take another it will cost double.")), __jsx("div", {
    className: "self-end w-full px-6 mb-6 italic text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 8
    }
  }, "Contact Shonk's agent for info.")), __jsx("div", {
    className: "w-2/3 text-center bg-gray-300 rounded-lg shadow-lg h-76 md:w-1/3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 6
    }
  }, sidePricing('Premium'), __jsx("div", {
    className: "flex flex-wrap items-start justify-center w-full h-56 px-3 text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("div", {
    className: "w-5/6 pr-2 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 8
    }
  }, "Listen to the first two seasons of Hollywood Masterclass."), __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("p", {
    className: "w-5/6 pr-2 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 8
    }
  }, "Use the beloved Stitcher App."), __jsx("button", {
    className: "self-end w-3/4 px-4 py-2 mb-4 text-white bg-blue-400 rounded-md hover:bg-blue-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "https://www.stitcherpremium.com/masterclass",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 9
    }
  }, "Subscribe")))))), __jsx("div", {
    className: "w-screen h-auto px-10 py-4 text-center text-gray-600 bg-gray-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 4
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 5
    }
  }, "This website is not affiliated with Sean Clements, Ben Rodgers, Midroll, Earwolf or Stitcher. No copyright infringement intented."), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
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
      lineNumber: 220,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsiaW5mb2JveCIsInRpdGxlIiwicGFyYTEiLCJwYXJhMiIsInBhcmEzIiwic2lkZVByaWNpbmciLCJIb21lIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInZpcyIsInNldFZpcyIsInZpc1R3byIsInNldFZpc1R3byIsImluZm8iLCJzZXRJbmZvIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFlQyxLQUFmLEVBQXNCQyxLQUF0QixFQUFnQztBQUMvQyxTQUNDO0FBQUssYUFBUyxFQUFDLDJHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxrSEFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VILEtBREYsQ0FERCxFQUlDO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLGFBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0JDLEtBQXRCLENBREQsRUFFRUUsS0FBSyxHQUNMLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLGFBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0JELEtBQXRCLENBREQsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlDLEtBQUosQ0FGRCxDQURLLEdBTUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxL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anMuM2I3NmRhNmQ5YjA4NGM1ZGFmNDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBTaG9uayBmcm9tICcuLi9jb21wb25lbnRzL3Nob25rJ1xuaW1wb3J0IExlbW9ucyBmcm9tICcuLi9jb21wb25lbnRzL2xlbW9ucydcblxuY29uc3QgaW5mb2JveCA9ICh0aXRsZSwgcGFyYTEsIHBhcmEyLCBwYXJhMykgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIHB4LTQgcGItMTAgbXgtNCBtdC0xMCB0ZXh0LWxnIHRleHQtd2hpdGUgYmctZ3JheS05MDAgc2hhZG93LTJ4bCBsb3JhIG1kOm14LTE2IG1kOnRleHQtMnhsIG1kOnB4LTIwXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiBtYi04IGZvbnQtc2FucyB0ZXh0LTJ4bCBmb250LWxpZ2h0IHRleHQtY2VudGVyIGJnLWdyYXktNzAwIG1kOnRleHQtMnhsIG1kOmlubGluZS1ibG9jayBtZDotbWwtMTBcIj5cblx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxlYWRpbmctbG9vc2UgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMTBcIj57cGFyYTF9PC9wPlxuXHRcdFx0XHR7cGFyYTMgPyAoXG5cdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMTBcIj57cGFyYTJ9PC9wPlxuXHRcdFx0XHRcdFx0PHA+e3BhcmEzfTwvcD5cblx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxwPntwYXJhMn08L3A+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5jb25zdCBzaWRlUHJpY2luZyA9ICh0aXRsZSkgPT4ge1xuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJweS0zIG1iLTQgdGV4dC0zeGwgYmctZ3JheS00MDAgcm91bmRlZC10bC1sZyByb3VuZGVkLXRyLWxnIGxvcmFcIj57dGl0bGV9PC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cdGNvbnN0IFsgdmlzLCBzZXRWaXMgXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbIHZpc1R3bywgc2V0VmlzVHdvIF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgWyBpbmZvLCBzZXRJbmZvIF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblx0UmVhY3QudXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRJbmZvKHRydWUpXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRzZXRJbmZvKGZhbHNlKVxuXHRcdH0sIDMwMDApXG5cdH0sIFtdKVxuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0c2V0VmlzKHRydWUpXG5cdFx0fSwgMjEwMClcblx0fSwgW10pXG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRzZXRWaXNUd28odHJ1ZSlcblx0XHR9LCAxMDApXG5cdH0sIFtdKVxuXHRyZXR1cm4gKFxuXHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHQ8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRmFuIHdlYnNpdGUgZGVkaWNhdGVkIHRvIEhvbGx5d29vZCBNYXN0ZXJjbGFzc1wiIC8+XG5cdFx0XHRcdDx0aXRsZT5Ib2xseXdvb2QgTWFzdGVyY2xhc3Mgd2l0aCBTaG9uayBMZW1vbnM8L3RpdGxlPlxuXHRcdFx0XHQ8c2NyaXB0IGRhdGEtZ29hdGNvdW50ZXI9XCJodHRwczovL21hc3RlcmNsYXNzLmdvYXRjb3VudGVyLmNvbS9jb3VudFwiIGFzeW5jIHNyYz1cIi8vZ2MuemdvLmF0L2NvdW50LmpzXCIgLz5cblx0XHRcdDwvSGVhZD5cblx0XHRcdHsvKiB7aW5mbyAmJiAgKi99XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtYXV0byBmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gcC00IG10LTIgdGV4dC1sZyB0ZXh0LXdoaXRlIGJnLXJlZC03MDAgcm91bmRlZC1tZFwiPlRoaXMgaXMgYSBmYW4gd2Vic2l0ZS4gSXQgaXMgbm90IGFmZmlsaWF0ZWQgd2l0aCB0aGUgY3JlYXRvcnMgb2YgSG9sbHl3b29kIE1hc3RlcmNsYXNzLjwvZGl2PlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHsvKiB9ICovfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIGJnLWdyYXktODAwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB0LTQgdGV4dC14bCBmb250LWxpZ2h0IHRleHQtY2VudGVyIHRleHQtZ3JheS0xMDAgdW5kZXJsaW5lIHNlcmlmXCI+XG5cdFx0XHRcdFx0PGEgaHJlZj1cImh0dHA6Ly9jaG5nLml0L3hMU1NwNERiSlNcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XG5cdFx0XHRcdFx0XHRTaWduIHRoZSBwZXRpdGlvbiB0byBicmluZyBiYWNrIEhvbGx5d29vZCBNYXN0ZXJjbGFzc1xuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbXQtMTAgbWQ6bXQtMzJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInotMTAgdy1mdWxsIG1yLTEwIG92ZXJmbG93LXZpc2libGUgdGV4dC00eGwgbGVhZGluZy10aWdodCB0ZXh0LWNlbnRlciB0ZXh0LXllbGxvdy0xMDAgdXBwZXJjYXNlIG1kOm1yLTMyIGxhdG8gbWQ6dGV4dC02eGxcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInctZnVsbCB0cmFja2luZy13aWRlc3QgbWNcIj5Ib2xseXdvb2Q8L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ3LWZ1bGwgdHJhY2tpbmctd2lkZXIgbWNcIj5NYXN0ZXJjbGFzczwvcD5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IHctNjQgbXgtYXV0byBtdC00IHRleHQtMnhsIG1kOnRleHQtNHhsIG1kOm10LTEwXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPkJ5PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTQ4IGgtMzIgbWwtNFwiPlxuXHRcdFx0XHRcdFx0XHRcdHt2aXNUd28gJiYgPFNob25rIC8+fVxuXHRcdFx0XHRcdFx0XHRcdHt2aXMgJiYgPExlbW9ucyAvPn1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCIvc2hvbmsucG5nXCJcblx0XHRcdFx0XHRcdGFsdD1cIlNob25rIExlbW9uc1wiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ6LTAgdy0yLzMgaC1hdXRvIG1heC13LTJ4bCBtbC0yMCAtbXQtMTYgbWQ6LW10LTMyIG1kOm1sLTg0IG1kOnctMS8yXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtYXgtdy02eGwgbXgtYXV0b1wiPlxuXHRcdFx0XHR7aW5mb2JveChcblx0XHRcdFx0XHQnQWJvdXQgU2hvbmsgTGVtb25zJyxcblx0XHRcdFx0XHQnQSByZW5haXNzYW5jZSBtYW4gaW4gdGhlIHRydWVzdCBzZW5zZSBvZiB0aGUgdGVybSAtLSBjb21lZGlhbiwgcHJvZHVjZXIsIGFjdG9yLCBleGVjdXRpdmUsIGh1bWFuaXRhcmlhbiAtLSB0aGVyZSBpcyBub3RoaW5nLCBpdCBzZWVtcywgdGhhdCBMZW1vbnMgY2Fubm90IGRvLicsXG5cdFx0XHRcdFx0J09mZi1zY3JlZW4sIExlbW9ucyBoYXMgYmVjb21lIHByb21pbmVudGx5IGludm9sdmVkIGluIGludGVybmF0aW9uYWwgY2hhcml0eSBwcm9qZWN0cy4nXG5cdFx0XHRcdCl9XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMTAgbXgtYXV0byBteS0yNCB0ZXh0LWxnIGl0YWxpYyBmb250LW5vcm1hbCBsZWFkaW5nLWxvb3NlIHRleHQtd2hpdGUgbWQ6dy0zLzQgbWQ6dGV4dC0yeGwgbG9yYVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHktMTAgcGwtMTAgYm9yZGVyLWwtOCBib3JkZXItZ3JheS04MDAgaG92ZXI6Ym9yZGVyLWdyYXktNzAwXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi00XCI+XG5cdFx0XHRcdFx0XHRcdOKAnEhvbGx5d29vZCBNYXN0ZXJjbGFzcyBpcyBhIGJlYXV0aWZ1bCBzaG93Y2FzZSBmb3IgdGhlIHByaWNrbHkgY29taWMgZ2VuaXVzIG9mIFtMZW1vbnNdLlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItNFwiPlxuXHRcdFx0XHRcdFx0XHRbTGVtb25zXSBicmluZ3MgaW4gcmluZ2VycyBsaWtlIEhheWVzIERhdmVucG9ydCBhbmQgUGF1bCBTY2hlZXIgYXMgZ3Vlc3QgbGVjdHVyZXJzIHRvXG5cdFx0XHRcdFx0XHRcdGZ1cnRoZXImbmJzcDtcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGluZS10aHJvdWdoXCI+Y29uZnVzZSBhbmQgZnJ1c3RyYXRlPC9zcGFuPiBbaW5zcGlyZSBoaXMgc3R1ZGVudF0gd2l0aFxuXHRcdFx0XHRcdFx0XHRzdGFnZ2VyaW5nbHkgPHNwYW4gY2xhc3NOYW1lPVwibGluZS10aHJvdWdoXCI+dW48L3NwYW4+aGVscGZ1bCBhZHZpY2UgYWJvdXQgbW9uZXkgYW5kIGhlYWRcblx0XHRcdFx0XHRcdFx0c2hvdHMgYW5kIGltcHJvdmlzYXRpb24u4oCdXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugbm90LWl0YWxpYyBtZDp0ZXh0LXhsXCI+LSBWdWx0dXJlIE1hZ2F6aW5lPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHR7aW5mb2JveChcblx0XHRcdFx0XHQnQWJvdXQgdGhlIGNsYXNzJyxcblx0XHRcdFx0XHQnSG9sbHl3b29kIE1hc3RlcmNsYXNzIGlzIGEgZGFyaW5nIGpvdXJuZXkgdGhyb3VnaCB0aGUgaHVtYW4gcHN5Y2hlIGFuZCBiZXlvbmQuJyxcblx0XHRcdFx0XHQnTGVhcm4gdG8gbWFzdGVyIGF1ZGl0aW9ucywgYW5hbHl6ZSBzY3JpcHRzLCBhbmQgZmluZCB0aGUgdHJ1dGggaW4gZXZlcnkgcm9sZSB5b3UgcGxheS4nLFxuXHRcdFx0XHRcdCdJbiB0aGlzIGNsYXNzLCB5b3XigJlsbCBsZWFybiBTaG9uayBMZW1vbuKAmXMgcnVsZXMgb2Ygc3Rvcnl0ZWxsaW5nLCBkaWFsb2d1ZSwgY2hhcmFjdGVyIGRldmVsb3BtZW50LCBhbmQgd2hhdCBtYWtlcyBhIHNjcmlwdCBhY3R1YWxseSBzZWxsLidcblx0XHRcdFx0KX1cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0xMCBteC1hdXRvIG15LTI0IHRleHQtbGcgaXRhbGljIGZvbnQtbm9ybWFsIGxlYWRpbmctbG9vc2UgdGV4dC13aGl0ZSBtZDp3LTMvNCBtZDp0ZXh0LTJ4bCBsb3JhXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0xMCBwbC0xMCBib3JkZXItbC04IGJvcmRlci1ncmF5LTgwMCBob3Zlcjpib3JkZXItZ3JheS03MDBcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLTRcIj7igJxQZW9wbGUgb3RoZXIgdGhhbiBtZSBtaWdodCBoYXZlIGxlYXJuZWQgc29tZXRoaW5nLuKAnTwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLTRcIj7igJxUaGUgaW50ZW50aW9uIGFuZCBvYnN0YWNsZSBzdHVmZiB0aGF0IHlvdSBicm91Z2h0IHVwLiBJdCB3YXMgaGVscGZ1bC7igJ08L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi00XCI+XG5cdFx0XHRcdFx0XHRcdOKAnFNvbWUgb2YgdGhlIGJhc2ljcyB0aGF0IHlvdSBicm91Z2h0IHVwIGluIHRoZSBjb3Vyc2UgYXJlIGluIHRoZXJlLCBzbyB5ZWFoLCB0aGF0J3MgZ3JlYXQu4oCdXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi00XCI+XG5cdFx0XHRcdFx0XHRcdOKAnFlvdSBrbm93IHdoYXQ/IEknbGwgc2lnbiB1cCBmb3IgeW91ciBuZXh0IG9uZS4gSSdsbCBwYXkgZm9yIHRoaXMgb25lLiBPa2F5LuKAnVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIG5vdC1pdGFsaWMgbWQ6dGV4dC14bFwiPi0gQmFuZyBSb2RnZW1hbiwgZm9ybWVyIHN0dWRlbnQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIG14LWF1dG8gbXktMjAgdGV4dC1ncmF5LTgwMCBtZDpmbGV4LXJvdyBtZDp3LTUvNlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgdGV4dC1jZW50ZXIgYmctZ3JheS0zMDAgcm91bmRlZC1sZyBzaGFkb3ctbGcgaC03NiBtZDp3LTEvM1wiPlxuXHRcdFx0XHRcdFx0e3NpZGVQcmljaW5nKCdUcmlhbCcpfVxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC01NiBweC0zIHRleHQtbGVmdFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTEvNiBmb250LXNhbnMgdGV4dC1sZyBmb250LWV4dHJhYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LWdyZWVuLTQwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0JiN4MjcxMztcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctNS82IG1iLTJcIj5MaXN0ZW4gdG8gYSBzaW5nbGUgZXBpc29kZSBvZiBIb2xseXdvb2QgTWFzdGVyY2xhc3MuPC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTEvNiBmb250LXNhbnMgdGV4dC1sZyBmb250LWV4dHJhYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LWdyZWVuLTQwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0JiN4MjcxMztcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ3LTUvNiBtYi0yXCI+RnJlZSBvZiBjaGFyZ2UuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJzZWxmLWVuZCB3LTIvMyBwLTIgbWItNCB0ZXh0LXdoaXRlIGJnLWJsdWUtNDAwIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS03MDBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vd3d3LmVhcndvbGYuY29tL2VwaXNvZGUvaG9sbHl3b29kLW1hc3RlcmNsYXNzLWVwMS10aGUtcm9sZS1vZi10aGUtYXJ0aXN0L1wiXG5cdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0TGlzdGVuIGhlcmVcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctMy80IGgtYXV0byBteC02IG15LTYgdGV4dC1jZW50ZXIgYmctZ3JheS0zMDAgcm91bmRlZC1sZyBzaGFkb3ctbGcgbWQ6bXktMCBtZDp3LTIvNVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHktMyBtYi00IHRleHQtM3hsIGJnLWdyYXktNDAwIHJvdW5kZWQtdGwtbGcgcm91bmRlZC10ci1sZyBsb3JhXCI+UGVyc29uYWw8YnIgLz5NYXN0ZXJjbGFzczwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIHBsLTQgcHItOCB0ZXh0LWxlZnQgbWQ6cHktNlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctMS82IHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1sZyBmb250LWV4dHJhYm9sZCB0ZXh0LWdyZWVuLTQwMFwiPiYjeDI3MTM7PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ3LTUvNiBtYi02XCI+XG5cdFx0XHRcdFx0XHRcdFx0U2hvbmsgc2VuZHMgdGhlIGVsZXZhdG9yIGJhY2sgZG93biB0byB0ZWFjaCB5b3UgZXZlcnl0aGluZyB5b3UgbmVlZCB0byBzdWNjZWVkIGluXG5cdFx0XHRcdFx0XHRcdFx0SG9sbHl3b29kLlxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0xLzYgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWxnIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JlZW4tNDAwXCI+JiN4MjcxMzs8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInctNS82IG1iLTZcIj5MZWFybiB3aGF0IGlzIGFydCwgd2hhdCBpcyBhIGFydGlzdC48L3A+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0xLzYgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWxnIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JlZW4tNDAwXCI+JiN4MjcxMzs8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy01LzYgbWItNlwiPlxuXHRcdFx0XHRcdFx0XHRcdEZpcnN0IG9uZSBpcyBmcmVlLCBidXQgaWYgeW91IHdhbnQgdG8gdGFrZSBhbm90aGVyIGl0IHdpbGwgY29zdCBkb3VibGUuXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2VsZi1lbmQgdy1mdWxsIHB4LTYgbWItNiBpdGFsaWMgdGV4dC1jZW50ZXJcIj5Db250YWN0IFNob25rJ3MgYWdlbnQgZm9yIGluZm8uPC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctMi8zIHRleHQtY2VudGVyIGJnLWdyYXktMzAwIHJvdW5kZWQtbGcgc2hhZG93LWxnIGgtNzYgbWQ6dy0xLzNcIj5cblx0XHRcdFx0XHRcdHtzaWRlUHJpY2luZygnUHJlbWl1bScpfVxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC01NiBweC0zIHRleHQtbGVmdFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctMS82IHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1sZyBmb250LWV4dHJhYm9sZCB0ZXh0LWdyZWVuLTQwMFwiPiYjeDI3MTM7PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctNS82IHByLTIgbWItMlwiPlxuXHRcdFx0XHRcdFx0XHRcdExpc3RlbiB0byB0aGUgZmlyc3QgdHdvIHNlYXNvbnMgb2YgSG9sbHl3b29kIE1hc3RlcmNsYXNzLlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTEvNiB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtbGcgZm9udC1leHRyYWJvbGQgdGV4dC1ncmVlbi00MDBcIj4mI3gyNzEzOzwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidy01LzYgcHItMiBtYi0yXCI+VXNlIHRoZSBiZWxvdmVkIFN0aXRjaGVyIEFwcC48L3A+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwic2VsZi1lbmQgdy0zLzQgcHgtNCBweS0yIG1iLTQgdGV4dC13aGl0ZSBiZy1ibHVlLTQwMCByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNzAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3d3dy5zdGl0Y2hlcnByZW1pdW0uY29tL21hc3RlcmNsYXNzXCJcblx0XHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRTdWJzY3JpYmVcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtYXV0byBweC0xMCBweS00IHRleHQtY2VudGVyIHRleHQtZ3JheS02MDAgYmctZ3JheS04MDBcIj5cblx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0VGhpcyB3ZWJzaXRlIGlzIG5vdCBhZmZpbGlhdGVkIHdpdGggU2VhbiBDbGVtZW50cywgQmVuIFJvZGdlcnMsIE1pZHJvbGwsIEVhcndvbGYgb3IgU3RpdGNoZXIuIE5vXG5cdFx0XHRcdFx0Y29weXJpZ2h0IGluZnJpbmdlbWVudCBpbnRlbnRlZC5cblx0XHRcdFx0PC9wPlxuXHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRTaXRlIGNyZWF0ZWQgYnkgTWFydGVuICg8YVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYm9yZGVyLWItMiBib3JkZXItZ3JheS02MDAgYm9yZGVyLWRvdHRlZFwiXG5cdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21hcnRlbmZyaXNrXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRyZWFjaCBtZSBvbiBHaXRIdWJcblx0XHRcdFx0XHQ8L2E+KVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHQpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9