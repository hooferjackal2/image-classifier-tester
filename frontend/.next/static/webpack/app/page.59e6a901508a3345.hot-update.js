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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_SearchedCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/SearchedCategory */ \"(app-pages-browser)/./components/SearchedCategory.tsx\");\n/* harmony import */ var _components_TopCategories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/TopCategories */ \"(app-pages-browser)/./components/TopCategories.tsx\");\n/* harmony import */ var _components_BoundingBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BoundingBox */ \"(app-pages-browser)/./components/BoundingBox.tsx\");\n/* harmony import */ var _public_images_placeholder_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/public/images/placeholder.png */ \"(app-pages-browser)/./public/images/placeholder.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ClassifierTester = ()=>{\n    _s();\n    const [bounds, setBounds] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        x1: 0,\n        y1: 0,\n        x2: width,\n        y2: height\n    });\n    const boundsChange = (topleft, x, y)=>{\n        if (topleft) {\n            setBounds({\n                ...bounds,\n                x1: x,\n                y1: y\n            });\n        } else {\n            setBounds({\n                ...bounds,\n                x2: x,\n                y2: y\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"image-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"input-image\",\n                        src: _public_images_placeholder_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n                        alt: \"A placeholder image\"\n                    }, void 0, false, {\n                        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/ClassifierTester.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BoundingBox__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        height: 200,\n                        width: 200\n                    }, void 0, false, {\n                        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/ClassifierTester.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/ClassifierTester.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"classifier-results\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchedCategory__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/ClassifierTester.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopCategories__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/ClassifierTester.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/ClassifierTester.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/ClassifierTester.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ClassifierTester, \"FRCKkTlFdJSakpry6ULUSOWpbWE=\");\n_c = ClassifierTester;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ClassifierTester);\nvar _c;\n$RefreshReg$(_c, \"ClassifierTester\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ2xhc3NpZmllclRlc3Rlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE2RDtBQUNOO0FBQ0o7QUFDWTtBQUM5QjtBQUVqQyxNQUFNSyxtQkFBbUI7O0lBQ3ZCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSCwrQ0FBUUEsQ0FBQztRQUFDSSxJQUFJO1FBQUdDLElBQUk7UUFBR0MsSUFBSUM7UUFBT0MsSUFBSUM7SUFBTTtJQUV6RSxNQUFNQyxlQUFlLENBQUNDLFNBQWtCQyxHQUFXQztRQUNqRCxJQUFJRixTQUFTO1lBQ1hSLFVBQVU7Z0JBQUMsR0FBR0QsTUFBTTtnQkFBRUUsSUFBSVE7Z0JBQUdQLElBQUlRO1lBQUM7UUFDcEMsT0FBTztZQUNMVixVQUFVO2dCQUFDLEdBQUdELE1BQU07Z0JBQUVJLElBQUlNO2dCQUFHSixJQUFJSztZQUFDO1FBQ3BDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7d0JBQWNFLEtBQUtsQixzRUFBZ0JBLENBQUNrQixHQUFHO3dCQUFFQyxLQUFJOzs7Ozs7a0NBQzVELDhEQUFDcEIsK0RBQVdBO3dCQUFDVyxRQUFRO3dCQUFLRixPQUFPOzs7Ozs7Ozs7Ozs7MEJBRW5DLDhEQUFDTztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNuQixvRUFBZ0JBOzs7OztrQ0FDakIsOERBQUNDLGlFQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEI7R0F2Qk1JO0tBQUFBO0FBeUJOLCtEQUFlQSxnQkFBZ0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DbGFzc2lmaWVyVGVzdGVyLnRzeD85ZTIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWFyY2hlZENhdGVnb3J5IGZyb20gJ0AvY29tcG9uZW50cy9TZWFyY2hlZENhdGVnb3J5JztcbmltcG9ydCBUb3BDYXRlZ29yaWVzIGZyb20gJ0AvY29tcG9uZW50cy9Ub3BDYXRlZ29yaWVzJztcbmltcG9ydCBCb3VuZGluZ0JveCBmcm9tICdAL2NvbXBvbmVudHMvQm91bmRpbmdCb3gnO1xuaW1wb3J0IHBsYWNlaG9sZGVySW1hZ2UgZnJvbSAnQC9wdWJsaWMvaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ2xhc3NpZmllclRlc3RlciA9ICgpID0+IHtcbiAgY29uc3QgW2JvdW5kcywgc2V0Qm91bmRzXSA9IHVzZVN0YXRlKHt4MTogMCwgeTE6IDAsIHgyOiB3aWR0aCwgeTI6IGhlaWdodH0pO1xuXG4gIGNvbnN0IGJvdW5kc0NoYW5nZSA9ICh0b3BsZWZ0OiBib29sZWFuLCB4OiBudW1iZXIsIHk6IG51bWJlcikgPT4ge1xuICAgIGlmICh0b3BsZWZ0KSB7XG4gICAgICBzZXRCb3VuZHMoey4uLmJvdW5kcywgeDE6IHgsIHkxOiB5fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEJvdW5kcyh7Li4uYm91bmRzLCB4MjogeCwgeTI6IHl9KTtcbiAgICB9XG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbnB1dC1pbWFnZVwiIHNyYz17cGxhY2Vob2xkZXJJbWFnZS5zcmN9IGFsdD1cIkEgcGxhY2Vob2xkZXIgaW1hZ2VcIj48L2ltZz5cbiAgICAgICAgPEJvdW5kaW5nQm94IGhlaWdodD17MjAwfSB3aWR0aD17MjAwfT48L0JvdW5kaW5nQm94PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsYXNzaWZpZXItcmVzdWx0c1wiPlxuICAgICAgICA8U2VhcmNoZWRDYXRlZ29yeT48L1NlYXJjaGVkQ2F0ZWdvcnk+XG4gICAgICAgIDxUb3BDYXRlZ29yaWVzPjwvVG9wQ2F0ZWdvcmllcz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENsYXNzaWZpZXJUZXN0ZXI7Il0sIm5hbWVzIjpbIlNlYXJjaGVkQ2F0ZWdvcnkiLCJUb3BDYXRlZ29yaWVzIiwiQm91bmRpbmdCb3giLCJwbGFjZWhvbGRlckltYWdlIiwidXNlU3RhdGUiLCJDbGFzc2lmaWVyVGVzdGVyIiwiYm91bmRzIiwic2V0Qm91bmRzIiwieDEiLCJ5MSIsIngyIiwid2lkdGgiLCJ5MiIsImhlaWdodCIsImJvdW5kc0NoYW5nZSIsInRvcGxlZnQiLCJ4IiwieSIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ClassifierTester.tsx\n"));

/***/ })

});