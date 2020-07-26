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

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      vis = _React$useState2[0],
      setVis = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      visTwo = _React$useState4[0],
      setVisTwo = _React$useState4[1];

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
      lineNumber: 44,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "w-full h-auto bg-gray-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "w-full text-xl font-light text-center text-gray-100 underline serif",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("a", {
    href: "http://chng.it/xLSSp4DbJS",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 6
    }
  }, "Sign the petition to bring back Hollywood Masterclass")), __jsx("div", {
    className: "flex flex-wrap justify-center w-full mt-10 md:mt-32",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "z-10 w-full mr-32 overflow-visible text-4xl leading-tight text-center text-yellow-100 uppercase lato md:text-6xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "w-full tracking-widest mc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, "Hollywood"), __jsx("p", {
    className: "w-full tracking-wider mc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, "Masterclass"), __jsx("p", {
    className: "flex items-start w-full mt-4 text-2xl md:text-4xl md:mt-10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 8
    }
  }, "By"), __jsx("div", {
    className: "inline-block w-48 h-32 ml-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  }, visTwo && __jsx(_components_shonk__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 20
    }
  }), vis && __jsx(_components_lemons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  })))), __jsx("img", {
    src: "/shonk.png",
    alt: "Shonk Lemons",
    className: "z-0 w-2/3 h-auto max-w-2xl ml-20 -mt-16 md:-mt-32 md:ml-84 md:w-1/2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 6
    }
  }))), __jsx("div", {
    className: "container flex flex-col items-center max-w-6xl mx-auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 4
    }
  }, infobox('About Shonk Lemons', 'A renaissance man in the truest sense of the term -- comedian, producer, actor, executive, humanitarian, and, most recently, father -- there is nothing, it seems, that Lemons cannot do.', 'Off-screen, Lemons has become prominently involved in international charity projects.'), __jsx("div", {
    className: "w-full px-10 mx-auto my-24 text-lg italic font-normal leading-loose text-white md:w-3/4 md:text-2xl lora",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "py-10 pl-10 border-l-8 border-gray-800 hover:border-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, "\u201CHollywood Masterclass is a beautiful showcase for the prickly comic genius of [Lemons]."), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, "[Lemons] brings in ringers like Hayes Davenport and Paul Scheer as guest lecturers to further\xA0", __jsx("span", {
    className: "line-through",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 8
    }
  }, "confuse and frustrate"), " [inspire his student] with staggeringly ", __jsx("span", {
    className: "line-through",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, "un"), "helpful advice about money and head shots and improvisation.\u201D"), __jsx("p", {
    className: "text-base not-italic md:text-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, "- Vulture Magazine"))), infobox('About the class', 'Hollywood Masterclass is a daring journey through the human psyche and beyond.', 'Learn to master auditions, analyze scripts, and find the truth in every role you play.', 'In this class, you’ll learn Shonk Lemon’s rules of storytelling, dialogue, character development, and what makes a script actually sell.'), __jsx("div", {
    className: "w-full px-10 mx-auto my-24 text-lg italic font-normal leading-loose text-white md:w-3/4 md:text-2xl lora",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "py-10 pl-10 border-l-8 border-gray-800 hover:border-gray-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 6
    }
  }, __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, "\u201CPeople other than me might have learned something.\u201D"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, "\u201CThe intention and obstacle stuff that you brought up. It was helpful.\u201D"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, "\u201CSome of the basics that you brought up in the course are in there, so yeah, that's great.\u201D"), __jsx("p", {
    className: "mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }, "\u201CYou know what? I'll sign up for your next one. I'll pay for this one. Okay.\u201D"), __jsx("p", {
    className: "text-base not-italic md:text-xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, "- Bang Rodgeman, former student"))), __jsx("div", {
    className: "flex flex-col items-center justify-center w-full mx-auto my-20 text-gray-800 md:flex-row md:w-5/6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "w-2/3 text-center bg-gray-300 rounded-lg shadow-lg h-76 md:w-1/4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 6
    }
  }, sidePricing('Trial'), __jsx("div", {
    className: "flex flex-wrap items-start justify-center w-full h-56 px-3 text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "w-1/6 font-sans text-lg font-extrabold text-center text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, "\u2713"), __jsx("div", {
    className: "w-5/6 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }, "Listen to a single episode of Hollywood Masterclass.")), __jsx("div", {
    className: "flex w-full",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "w-1/6 font-sans text-lg font-extrabold text-center text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, "\u2713"), __jsx("p", {
    className: "w-5/6 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, "Free of charge.")), __jsx("button", {
    className: "self-end w-1/2 p-2 mb-4 text-white bg-blue-400 rounded-md hover:bg-blue-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "https://www.earwolf.com/episode/hollywood-masterclass-ep1-the-role-of-the-artist/",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, "Listen here")))), __jsx("div", {
    className: "w-3/4 h-auto mx-2 my-6 text-center bg-gray-300 rounded-lg shadow-lg md:my-0 md:w-1/3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 6
    }
  }, sidePricing('Personal Masterclass'), __jsx("div", {
    className: "flex flex-wrap items-start justify-center w-full h-auto pl-4 pr-8 text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("p", {
    className: "w-5/6 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 8
    }
  }, "Shonk sends the elevator back down to teach you everything you need to succeed in Hollywood."), __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("p", {
    className: "w-5/6 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 8
    }
  }, "Learn what is art, what is a artist."), __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("div", {
    className: "w-5/6 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 8
    }
  }, "First one is free, but if you want to take another it will cost double."), __jsx("div", {
    className: "self-end py-2 pl-4 pr-2 mb-4 italic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 8
    }
  }, "Contact Shonk's agent for info."))), __jsx("div", {
    className: "w-2/3 text-center bg-gray-300 rounded-lg shadow-lg h-76 md:w-1/4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 6
    }
  }, sidePricing('Premium'), __jsx("div", {
    className: "flex flex-wrap items-start justify-center w-full h-56 px-3 text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }
  }, __jsx("div", {
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
  }, "\u2713")), __jsx("div", {
    className: "w-5/6 pr-2 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 8
    }
  }, "Listen to the first two seasons of Hollywood Masterclass."), __jsx("div", {
    className: "w-1/6 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "font-sans text-lg font-extrabold text-green-400",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, "\u2713")), __jsx("p", {
    className: "w-5/6 pr-2 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 8
    }
  }, "Use the beloved Stitcher App."), __jsx("button", {
    className: "self-end w-1/2 px-4 py-2 mb-4 text-white bg-blue-400 rounded-md hover:bg-blue-700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 8
    }
  }, __jsx("a", {
    href: "https://www.stitcherpremium.com/masterclass",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, "Subscribe")))))), __jsx("div", {
    className: "w-screen h-auto px-10 py-4 text-center text-gray-600 bg-gray-800",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 4
    }
  }, "This website is not affiliated with Sean Clements, Ben Rodgers, Midroll Earwolf or Stitcher. Site created by Marten (", __jsx("a", {
    href: "https://github.com/martenfrisk",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 24
    }
  }, "reach me on GitHub"), ")"));
}

_s(Home, "ux06m38sz7jGwbTkFa+yC4r7oJA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsiaW5mb2JveCIsInRpdGxlIiwicGFyYTEiLCJwYXJhMiIsInBhcmEzIiwic2lkZVByaWNpbmciLCJIb21lIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInZpcyIsInNldFZpcyIsInZpc1R3byIsInNldFZpc1R3byIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBZUMsS0FBZixFQUFzQkMsS0FBdEIsRUFBZ0M7QUFDL0MsU0FDQztBQUFLLGFBQVMsRUFBQywwR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsa0hBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFSCxLQURGLENBREQsRUFJQztBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCQyxLQUF0QixDQURELEVBRUVFLEtBQUssR0FDTCxNQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBRyxhQUFTLEVBQUMsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCRCxLQUF0QixDQURELEVBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQyxLQUFKLENBRkQsQ0FESyxHQU1MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUQsS0FBSixDQVJGLENB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QyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsaURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELENBREQsRUFJQztBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlFQUpELEVBT0M7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLGlEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxDQVBELEVBVUM7QUFBRyxhQUFTLEVBQUMsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FWRCxFQVdDO0FBQVEsYUFBUyxFQUFDLG1GQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFDQyxRQUFJLEVBQUMsNkNBRE47QUFFQyxVQUFNLEVBQUMsUUFGUjtBQUdDLE9BQUcsRUFBQyxxQkFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELENBWEQsQ0FGRCxDQXBERCxDQTVDRCxDQTVCRCxFQXNKQztBQUFLLGFBQVMsRUFBQyxrRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhIQUVvQjtBQUFHLFFBQUksRUFBQyxnQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZwQixNQXRKRCxDQUREO0FBNkpBOztHQTFLdUJDLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjZhMjMxMTZiMmU5OTNhZjQ2ZWZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgU2hvbmsgZnJvbSAnLi4vY29tcG9uZW50cy9zaG9uaydcbmltcG9ydCBMZW1vbnMgZnJvbSAnLi4vY29tcG9uZW50cy9sZW1vbnMnXG5cbmNvbnN0IGluZm9ib3ggPSAodGl0bGUsIHBhcmExLCBwYXJhMiwgcGFyYTMpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctYXV0byBweC00IHBiLTEwIG14LTQgbXQtMTAgdGV4dC1sZyB0ZXh0LXdoaXRlIGJnLWdyYXktOTAwIHNoYWRvdy14bCBsb3JhIG1kOm14LTE2IG1kOnRleHQtMnhsIG1kOnB4LTIwXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHB4LTQgcHktMiBtYi04IGZvbnQtc2FucyB0ZXh0LTJ4bCBmb250LWxpZ2h0IHRleHQtY2VudGVyIGJnLWdyYXktNzAwIG1kOnRleHQtMnhsIG1kOmlubGluZS1ibG9jayBtZDotbWwtMTBcIj5cblx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxlYWRpbmctbG9vc2UgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMTBcIj57cGFyYTF9PC9wPlxuXHRcdFx0XHR7cGFyYTMgPyAoXG5cdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMTBcIj57cGFyYTJ9PC9wPlxuXHRcdFx0XHRcdFx0PHA+e3BhcmEzfTwvcD5cblx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxwPntwYXJhMn08L3A+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5jb25zdCBzaWRlUHJpY2luZyA9ICh0aXRsZSkgPT4ge1xuXHRyZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJweS0yIG1iLTQgdGV4dC0zeGwgYmctZ3JheS00MDAgcm91bmRlZC10bC1sZyByb3VuZGVkLXRyLWxnIGxvcmFcIj57dGl0bGV9PC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cdGNvbnN0IFt2aXMsIHNldFZpc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgW3Zpc1R3bywgc2V0VmlzVHdvXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0c2V0VmlzKHRydWUpXG5cdFx0fSwgMjEwMCk7XG5cdH0sIFtdKVxuXHRSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0c2V0VmlzVHdvKHRydWUpXG5cdFx0fSwgMTAwKTtcblx0fSwgW10pXG5cdHJldHVybiAoXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvIGJnLWdyYXktODAwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQteGwgZm9udC1saWdodCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktMTAwIHVuZGVybGluZSBzZXJpZlwiPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCJodHRwOi8vY2huZy5pdC94TFNTcDREYkpTXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuXHRcdFx0XHRcdFx0U2lnbiB0aGUgcGV0aXRpb24gdG8gYnJpbmcgYmFjayBIb2xseXdvb2QgTWFzdGVyY2xhc3Ncblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgdy1mdWxsIG10LTEwIG1kOm10LTMyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ6LTEwIHctZnVsbCBtci0zMiBvdmVyZmxvdy12aXNpYmxlIHRleHQtNHhsIGxlYWRpbmctdGlnaHQgdGV4dC1jZW50ZXIgdGV4dC15ZWxsb3ctMTAwIHVwcGVyY2FzZSBsYXRvIG1kOnRleHQtNnhsXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ3LWZ1bGwgdHJhY2tpbmctd2lkZXN0IG1jXCI+SG9sbHl3b29kPC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidy1mdWxsIHRyYWNraW5nLXdpZGVyIG1jXCI+TWFzdGVyY2xhc3M8L3A+XG5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgdy1mdWxsIG10LTQgdGV4dC0yeGwgbWQ6dGV4dC00eGwgbWQ6bXQtMTBcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+Qnk8L3NwYW4+PGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy00OCBoLTMyIG1sLTRcIj5cblx0XHRcdFx0XHRcdFx0XHR7dmlzVHdvICYmIDxTaG9uayAvPn1cblx0XHRcdFx0XHRcdFx0XHR7dmlzICYmIDxMZW1vbnMgLz59XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz1cIi9zaG9uay5wbmdcIlxuXHRcdFx0XHRcdFx0YWx0PVwiU2hvbmsgTGVtb25zXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInotMCB3LTIvMyBoLWF1dG8gbWF4LXctMnhsIG1sLTIwIC1tdC0xNiBtZDotbXQtMzIgbWQ6bWwtODQgbWQ6dy0xLzJcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG1heC13LTZ4bCBteC1hdXRvXCI+XG5cdFx0XHRcdHtpbmZvYm94KFxuXHRcdFx0XHRcdCdBYm91dCBTaG9uayBMZW1vbnMnLFxuXHRcdFx0XHRcdCdBIHJlbmFpc3NhbmNlIG1hbiBpbiB0aGUgdHJ1ZXN0IHNlbnNlIG9mIHRoZSB0ZXJtIC0tIGNvbWVkaWFuLCBwcm9kdWNlciwgYWN0b3IsIGV4ZWN1dGl2ZSwgaHVtYW5pdGFyaWFuLCBhbmQsIG1vc3QgcmVjZW50bHksIGZhdGhlciAtLSB0aGVyZSBpcyBub3RoaW5nLCBpdCBzZWVtcywgdGhhdCBMZW1vbnMgY2Fubm90IGRvLicsXG5cdFx0XHRcdFx0J09mZi1zY3JlZW4sIExlbW9ucyBoYXMgYmVjb21lIHByb21pbmVudGx5IGludm9sdmVkIGluIGludGVybmF0aW9uYWwgY2hhcml0eSBwcm9qZWN0cy4nXG5cdFx0XHRcdCl9XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMTAgbXgtYXV0byBteS0yNCB0ZXh0LWxnIGl0YWxpYyBmb250LW5vcm1hbCBsZWFkaW5nLWxvb3NlIHRleHQtd2hpdGUgbWQ6dy0zLzQgbWQ6dGV4dC0yeGwgbG9yYVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHktMTAgcGwtMTAgYm9yZGVyLWwtOCBib3JkZXItZ3JheS04MDAgaG92ZXI6Ym9yZGVyLWdyYXktNzAwXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi00XCI+XG5cdFx0XHRcdFx0XHRcdOKAnEhvbGx5d29vZCBNYXN0ZXJjbGFzcyBpcyBhIGJlYXV0aWZ1bCBzaG93Y2FzZSBmb3IgdGhlIHByaWNrbHkgY29taWMgZ2VuaXVzIG9mIFtMZW1vbnNdLlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItNFwiPlxuXHRcdFx0XHRcdFx0XHRbTGVtb25zXSBicmluZ3MgaW4gcmluZ2VycyBsaWtlIEhheWVzIERhdmVucG9ydCBhbmQgUGF1bCBTY2hlZXIgYXMgZ3Vlc3QgbGVjdHVyZXJzIHRvXG5cdFx0XHRcdFx0XHRcdGZ1cnRoZXImbmJzcDtcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGluZS10aHJvdWdoXCI+Y29uZnVzZSBhbmQgZnJ1c3RyYXRlPC9zcGFuPiBbaW5zcGlyZSBoaXMgc3R1ZGVudF0gd2l0aFxuXHRcdFx0XHRcdFx0XHRzdGFnZ2VyaW5nbHkgPHNwYW4gY2xhc3NOYW1lPVwibGluZS10aHJvdWdoXCI+dW48L3NwYW4+aGVscGZ1bCBhZHZpY2UgYWJvdXQgbW9uZXkgYW5kIGhlYWRcblx0XHRcdFx0XHRcdFx0c2hvdHMgYW5kIGltcHJvdmlzYXRpb24u4oCdXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugbm90LWl0YWxpYyBtZDp0ZXh0LXhsXCI+LSBWdWx0dXJlIE1hZ2F6aW5lPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHR7aW5mb2JveChcblx0XHRcdFx0XHQnQWJvdXQgdGhlIGNsYXNzJyxcblx0XHRcdFx0XHQnSG9sbHl3b29kIE1hc3RlcmNsYXNzIGlzIGEgZGFyaW5nIGpvdXJuZXkgdGhyb3VnaCB0aGUgaHVtYW4gcHN5Y2hlIGFuZCBiZXlvbmQuJyxcblx0XHRcdFx0XHQnTGVhcm4gdG8gbWFzdGVyIGF1ZGl0aW9ucywgYW5hbHl6ZSBzY3JpcHRzLCBhbmQgZmluZCB0aGUgdHJ1dGggaW4gZXZlcnkgcm9sZSB5b3UgcGxheS4nLFxuXHRcdFx0XHRcdCdJbiB0aGlzIGNsYXNzLCB5b3XigJlsbCBsZWFybiBTaG9uayBMZW1vbuKAmXMgcnVsZXMgb2Ygc3Rvcnl0ZWxsaW5nLCBkaWFsb2d1ZSwgY2hhcmFjdGVyIGRldmVsb3BtZW50LCBhbmQgd2hhdCBtYWtlcyBhIHNjcmlwdCBhY3R1YWxseSBzZWxsLidcblx0XHRcdFx0KX1cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0xMCBteC1hdXRvIG15LTI0IHRleHQtbGcgaXRhbGljIGZvbnQtbm9ybWFsIGxlYWRpbmctbG9vc2UgdGV4dC13aGl0ZSBtZDp3LTMvNCBtZDp0ZXh0LTJ4bCBsb3JhXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweS0xMCBwbC0xMCBib3JkZXItbC04IGJvcmRlci1ncmF5LTgwMCBob3Zlcjpib3JkZXItZ3JheS03MDBcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLTRcIj7igJxQZW9wbGUgb3RoZXIgdGhhbiBtZSBtaWdodCBoYXZlIGxlYXJuZWQgc29tZXRoaW5nLuKAnTwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLTRcIj7igJxUaGUgaW50ZW50aW9uIGFuZCBvYnN0YWNsZSBzdHVmZiB0aGF0IHlvdSBicm91Z2h0IHVwLiBJdCB3YXMgaGVscGZ1bC7igJ08L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi00XCI+XG5cdFx0XHRcdFx0XHRcdOKAnFNvbWUgb2YgdGhlIGJhc2ljcyB0aGF0IHlvdSBicm91Z2h0IHVwIGluIHRoZSBjb3Vyc2UgYXJlIGluIHRoZXJlLCBzbyB5ZWFoLCB0aGF0J3MgZ3JlYXQu4oCdXG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi00XCI+XG5cdFx0XHRcdFx0XHRcdOKAnFlvdSBrbm93IHdoYXQ/IEknbGwgc2lnbiB1cCBmb3IgeW91ciBuZXh0IG9uZS4gSSdsbCBwYXkgZm9yIHRoaXMgb25lLiBPa2F5LuKAnVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIG5vdC1pdGFsaWMgbWQ6dGV4dC14bFwiPi0gQmFuZyBSb2RnZW1hbiwgZm9ybWVyIHN0dWRlbnQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIG14LWF1dG8gbXktMjAgdGV4dC1ncmF5LTgwMCBtZDpmbGV4LXJvdyBtZDp3LTUvNlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgdGV4dC1jZW50ZXIgYmctZ3JheS0zMDAgcm91bmRlZC1sZyBzaGFkb3ctbGcgaC03NiBtZDp3LTEvNFwiPlxuXHRcdFx0XHRcdFx0e3NpZGVQcmljaW5nKCdUcmlhbCcpfVxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC01NiBweC0zIHRleHQtbGVmdFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTEvNiBmb250LXNhbnMgdGV4dC1sZyBmb250LWV4dHJhYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LWdyZWVuLTQwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0JiN4MjcxMztcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctNS82IG1iLTJcIj5MaXN0ZW4gdG8gYSBzaW5nbGUgZXBpc29kZSBvZiBIb2xseXdvb2QgTWFzdGVyY2xhc3MuPC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTEvNiBmb250LXNhbnMgdGV4dC1sZyBmb250LWV4dHJhYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LWdyZWVuLTQwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0JiN4MjcxMztcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ3LTUvNiBtYi0yXCI+RnJlZSBvZiBjaGFyZ2UuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJzZWxmLWVuZCB3LTEvMiBwLTIgbWItNCB0ZXh0LXdoaXRlIGJnLWJsdWUtNDAwIHJvdW5kZWQtbWQgaG92ZXI6YmctYmx1ZS03MDBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vd3d3LmVhcndvbGYuY29tL2VwaXNvZGUvaG9sbHl3b29kLW1hc3RlcmNsYXNzLWVwMS10aGUtcm9sZS1vZi10aGUtYXJ0aXN0L1wiXG5cdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0TGlzdGVuIGhlcmVcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctMy80IGgtYXV0byBteC0yIG15LTYgdGV4dC1jZW50ZXIgYmctZ3JheS0zMDAgcm91bmRlZC1sZyBzaGFkb3ctbGcgbWQ6bXktMCBtZDp3LTEvM1wiPlxuXHRcdFx0XHRcdFx0e3NpZGVQcmljaW5nKCdQZXJzb25hbCBNYXN0ZXJjbGFzcycpfVxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1zdGFydCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgaC1hdXRvIHBsLTQgcHItOCB0ZXh0LWxlZnRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTEvNiB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtbGcgZm9udC1leHRyYWJvbGQgdGV4dC1ncmVlbi00MDBcIj4mI3gyNzEzOzwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidy01LzYgbWItMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFNob25rIHNlbmRzIHRoZSBlbGV2YXRvciBiYWNrIGRvd24gdG8gdGVhY2ggeW91IGV2ZXJ5dGhpbmcgeW91IG5lZWQgdG8gc3VjY2VlZCBpblxuXHRcdFx0XHRcdFx0XHRcdEhvbGx5d29vZC5cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctMS82IHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1sZyBmb250LWV4dHJhYm9sZCB0ZXh0LWdyZWVuLTQwMFwiPiYjeDI3MTM7PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ3LTUvNiBtYi0yXCI+TGVhcm4gd2hhdCBpcyBhcnQsIHdoYXQgaXMgYSBhcnRpc3QuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctMS82IHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb250LXNhbnMgdGV4dC1sZyBmb250LWV4dHJhYm9sZCB0ZXh0LWdyZWVuLTQwMFwiPiYjeDI3MTM7PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInctNS82IG1iLTJcIj5cblx0XHRcdFx0XHRcdFx0XHRGaXJzdCBvbmUgaXMgZnJlZSwgYnV0IGlmIHlvdSB3YW50IHRvIHRha2UgYW5vdGhlciBpdCB3aWxsIGNvc3QgZG91YmxlLlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWxmLWVuZCBweS0yIHBsLTQgcHItMiBtYi00IGl0YWxpY1wiPkNvbnRhY3QgU2hvbmsncyBhZ2VudCBmb3IgaW5mby48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTIvMyB0ZXh0LWNlbnRlciBiZy1ncmF5LTMwMCByb3VuZGVkLWxnIHNoYWRvdy1sZyBoLTc2IG1kOnctMS80XCI+XG5cdFx0XHRcdFx0XHR7c2lkZVByaWNpbmcoJ1ByZW1pdW0nKX1cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXIgdy1mdWxsIGgtNTYgcHgtMyB0ZXh0LWxlZnRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTEvNiB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9udC1zYW5zIHRleHQtbGcgZm9udC1leHRyYWJvbGQgdGV4dC1ncmVlbi00MDBcIj4mI3gyNzEzOzwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LTUvNiBwci0yIG1iLTJcIj5cblx0XHRcdFx0XHRcdFx0XHRMaXN0ZW4gdG8gdGhlIGZpcnN0IHR3byBzZWFzb25zIG9mIEhvbGx5d29vZCBNYXN0ZXJjbGFzcy5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy0xLzYgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2FucyB0ZXh0LWxnIGZvbnQtZXh0cmFib2xkIHRleHQtZ3JlZW4tNDAwXCI+JiN4MjcxMzs8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInctNS82IHByLTIgbWItMlwiPlVzZSB0aGUgYmVsb3ZlZCBTdGl0Y2hlciBBcHAuPC9wPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cInNlbGYtZW5kIHctMS8yIHB4LTQgcHktMiBtYi00IHRleHQtd2hpdGUgYmctYmx1ZS00MDAgcm91bmRlZC1tZCBob3ZlcjpiZy1ibHVlLTcwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly93d3cuc3RpdGNoZXJwcmVtaXVtLmNvbS9tYXN0ZXJjbGFzc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0U3Vic2NyaWJlXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLWF1dG8gcHgtMTAgcHktNCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktNjAwIGJnLWdyYXktODAwXCI+XG5cdFx0XHRcdFRoaXMgd2Vic2l0ZSBpcyBub3QgYWZmaWxpYXRlZCB3aXRoIFNlYW4gQ2xlbWVudHMsIEJlbiBSb2RnZXJzLCBNaWRyb2xsIEVhcndvbGYgb3IgU3RpdGNoZXIuIFNpdGVcblx0XHRcdFx0Y3JlYXRlZCBieSBNYXJ0ZW4gKDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbWFydGVuZnJpc2tcIj5yZWFjaCBtZSBvbiBHaXRIdWI8L2E+KVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==