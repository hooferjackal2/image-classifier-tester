"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ClassifierTester.tsx":
/*!*****************************************!*\
  !*** ./components/ClassifierTester.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_SearchedCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/SearchedCategory */ \"(app-pages-browser)/./components/SearchedCategory.tsx\");\n/* harmony import */ var _components_TopCategories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/TopCategories */ \"(app-pages-browser)/./components/TopCategories.tsx\");\n/* harmony import */ var _components_BoundingBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BoundingBox */ \"(app-pages-browser)/./components/BoundingBox.tsx\");\n/* harmony import */ var _public_images_placeholder_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/images/placeholder.png */ \"(app-pages-browser)/./public/images/placeholder.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ClassifierTester = (param)=>{\n    let { search } = param;\n    _s();\n    const [startHeight, startWidth] = [\n        128,\n        128\n    ];\n    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    let [height, width] = [\n        startHeight,\n        startWidth\n    ];\n    const [bounds, setBounds] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        x1: 0,\n        y1: 0,\n        x2: width,\n        y2: height\n    });\n    const boundsChange = (topleft, x, y)=>{\n        if (topleft) {\n            setBounds({\n                ...bounds,\n                x1: x,\n                y1: y\n            });\n        } else {\n            setBounds({\n                ...bounds,\n                x2: x,\n                y2: y\n            });\n        }\n    };\n    const containerStyle = {\n        height: height,\n        width: width\n    };\n    /*useEffect(() => {\n    console.log(imgRef.current.naturalHeight);\n    height = imgRef.current ? imgRef.current.naturalHeight : 0;\n    width = imgRef.current ? imgRef.current.naturalWidth : 0;\n  }, []);*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"image-container\",\n                style: containerStyle,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"input-image\",\n                        ref: imgRef,\n                        src: _public_images_placeholder_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n                        alt: \"A placeholder image\"\n                    }, void 0, false, {\n                        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/ClassifierTester.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BoundingBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        height: height,\n                        width: width,\n                        bounds: bounds,\n                        boundsChange: boundsChange\n                    }, void 0, false, {\n                        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/ClassifierTester.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/ClassifierTester.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"classifier-results\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchedCategory__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/ClassifierTester.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopCategories__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/ClassifierTester.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/ClassifierTester.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/ClassifierTester.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ClassifierTester, \"Q7oSYfX78WfYS5MPWI14KVCZJHw=\");\n_c = ClassifierTester;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClassifierTester);\nvar _c;\n$RefreshReg$(_c, \"ClassifierTester\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2xhc3NpZmllclRlc3Rlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2RDtBQUNOO0FBQ0o7QUFDWTtBQUNYO0FBTXBELE1BQU1NLG1CQUFtQjtRQUFDLEVBQUVDLE1BQU0sRUFBUzs7SUFDekMsTUFBTSxDQUFDQyxhQUFhQyxXQUFXLEdBQUc7UUFBQztRQUFLO0tBQUk7SUFDNUMsTUFBTUMsU0FBU0wsNkNBQU1BLENBQUM7SUFDdEIsSUFBSSxDQUFDTSxRQUFRQyxNQUFNLEdBQUc7UUFBQ0o7UUFBYUM7S0FBVztJQUMvQyxNQUFNLENBQUNJLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7UUFBQ1csSUFBSTtRQUFHQyxJQUFJO1FBQUdDLElBQUlMO1FBQU9NLElBQUlQO0lBQU07SUFFekUsTUFBTVEsZUFBZSxDQUFDQyxTQUFrQkMsR0FBV0M7UUFDakQsSUFBSUYsU0FBUztZQUNYTixVQUFVO2dCQUFDLEdBQUdELE1BQU07Z0JBQUVFLElBQUlNO2dCQUFHTCxJQUFJTTtZQUFDO1FBQ3BDLE9BQU87WUFDTFIsVUFBVTtnQkFBQyxHQUFHRCxNQUFNO2dCQUFFSSxJQUFJSTtnQkFBR0gsSUFBSUk7WUFBQztRQUNwQztJQUNGO0lBRUEsTUFBTUMsaUJBQWlCO1FBQ3JCWixRQUFRQTtRQUNSQyxPQUFPQTtJQUNUO0lBRUE7Ozs7U0FJTyxHQUVQLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7Z0JBQWtCQyxPQUFPSDs7a0NBQ3RDLDhEQUFDSTt3QkFBSUYsV0FBVTt3QkFBY0csS0FBS2xCO3dCQUFRbUIsS0FBSzFCLHNFQUFnQkEsQ0FBQzBCLEdBQUc7d0JBQUVDLEtBQUk7Ozs7OztrQ0FDekUsOERBQUM1QiwrREFBV0E7d0JBQUNTLFFBQVFBO3dCQUFRQyxPQUFPQTt3QkFBT0MsUUFBUUE7d0JBQVFNLGNBQWNBOzs7Ozs7Ozs7Ozs7MEJBRTNFLDhEQUFDSztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUN6QixvRUFBZ0JBOzs7OztrQ0FDakIsOERBQUNDLGlFQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEI7R0FyQ01LO0tBQUFBO0FBdUNOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbGFzc2lmaWVyVGVzdGVyLnRzeD85ZTIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWFyY2hlZENhdGVnb3J5IGZyb20gJ0AvY29tcG9uZW50cy9TZWFyY2hlZENhdGVnb3J5JztcbmltcG9ydCBUb3BDYXRlZ29yaWVzIGZyb20gJ0AvY29tcG9uZW50cy9Ub3BDYXRlZ29yaWVzJztcbmltcG9ydCBCb3VuZGluZ0JveCBmcm9tICdAL2NvbXBvbmVudHMvQm91bmRpbmdCb3gnO1xuaW1wb3J0IHBsYWNlaG9sZGVySW1hZ2UgZnJvbSAnQC9wdWJsaWMvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNlYXJjaDogc3RyaW5nO1xufVxuXG5jb25zdCBDbGFzc2lmaWVyVGVzdGVyID0gKHsgc2VhcmNoIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtzdGFydEhlaWdodCwgc3RhcnRXaWR0aF0gPSBbMTI4LCAxMjhdO1xuICBjb25zdCBpbWdSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGxldCBbaGVpZ2h0LCB3aWR0aF0gPSBbc3RhcnRIZWlnaHQsIHN0YXJ0V2lkdGhdO1xuICBjb25zdCBbYm91bmRzLCBzZXRCb3VuZHNdID0gdXNlU3RhdGUoe3gxOiAwLCB5MTogMCwgeDI6IHdpZHRoLCB5MjogaGVpZ2h0fSk7XG5cbiAgY29uc3QgYm91bmRzQ2hhbmdlID0gKHRvcGxlZnQ6IGJvb2xlYW4sIHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRvcGxlZnQpIHtcbiAgICAgIHNldEJvdW5kcyh7Li4uYm91bmRzLCB4MTogeCwgeTE6IHl9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Qm91bmRzKHsuLi5ib3VuZHMsIHgyOiB4LCB5MjogeX0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgfVxuXG4gIC8qdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpbWdSZWYuY3VycmVudC5uYXR1cmFsSGVpZ2h0KTtcbiAgICBoZWlnaHQgPSBpbWdSZWYuY3VycmVudCA/IGltZ1JlZi5jdXJyZW50Lm5hdHVyYWxIZWlnaHQgOiAwO1xuICAgIHdpZHRoID0gaW1nUmVmLmN1cnJlbnQgPyBpbWdSZWYuY3VycmVudC5uYXR1cmFsV2lkdGggOiAwO1xuICB9LCBbXSk7Ki9cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIiBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImlucHV0LWltYWdlXCIgcmVmPXtpbWdSZWZ9IHNyYz17cGxhY2Vob2xkZXJJbWFnZS5zcmN9IGFsdD1cIkEgcGxhY2Vob2xkZXIgaW1hZ2VcIj48L2ltZz5cbiAgICAgICAgPEJvdW5kaW5nQm94IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9IGJvdW5kcz17Ym91bmRzfSBib3VuZHNDaGFuZ2U9e2JvdW5kc0NoYW5nZX0+PC9Cb3VuZGluZ0JveD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGFzc2lmaWVyLXJlc3VsdHNcIj5cbiAgICAgICAgPFNlYXJjaGVkQ2F0ZWdvcnk+PC9TZWFyY2hlZENhdGVnb3J5PlxuICAgICAgICA8VG9wQ2F0ZWdvcmllcz48L1RvcENhdGVnb3JpZXM+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDbGFzc2lmaWVyVGVzdGVyOyJdLCJuYW1lcyI6WyJTZWFyY2hlZENhdGVnb3J5IiwiVG9wQ2F0ZWdvcmllcyIsIkJvdW5kaW5nQm94IiwicGxhY2Vob2xkZXJJbWFnZSIsInVzZVN0YXRlIiwidXNlUmVmIiwiQ2xhc3NpZmllclRlc3RlciIsInNlYXJjaCIsInN0YXJ0SGVpZ2h0Iiwic3RhcnRXaWR0aCIsImltZ1JlZiIsImhlaWdodCIsIndpZHRoIiwiYm91bmRzIiwic2V0Qm91bmRzIiwieDEiLCJ5MSIsIngyIiwieTIiLCJib3VuZHNDaGFuZ2UiLCJ0b3BsZWZ0IiwieCIsInkiLCJjb250YWluZXJTdHlsZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaW1nIiwicmVmIiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ClassifierTester.tsx\n"));

/***/ })

});