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

/***/ "(app-pages-browser)/./components/Corner.tsx":
/*!*******************************!*\
  !*** ./components/Corner.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ \"(app-pages-browser)/./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Corner = (param)=>{\n    let { top, left, right, bottom, topleft, posx, posy, boundsChange } = param;\n    const controlledDrag = (e, position)=>{\n        const { x, y } = position;\n        boundsChange(topleft, x, y);\n    };\n    const pipStyle = {\n        transform: topleft ? \"translate(-2px, -2px)\" : \"translate(-8px, -8px)\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"corner-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n            position: {\n                x: posx,\n                y: posy\n            },\n            onDrag: controlledDrag,\n            bounds: {\n                top: top,\n                left: left,\n                right: right,\n                bottom: bottom\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"corner\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"corner-pip\",\n                        style: pipStyle\n                    }, void 0, false, {\n                        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Hey guys!!! I'm at \",\n                            undefined,\n                            \" \",\n                            posx,\n                            \", \",\n                            posy\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Corner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Corner);\nvar _c;\n$RefreshReg$(_c, \"Corner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29ybmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUEwRDtBQWMxRCxNQUFNQyxTQUFTO1FBQUMsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQVM7SUFFcEYsTUFBTUMsaUJBQWlCLENBQUNDLEdBQW1CQztRQUN6QyxNQUFNLEVBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFDLEdBQUdGO1FBQ2ZILGFBQWFILFNBQVNPLEdBQUdDO0lBQzNCO0lBRUEsTUFBTUMsV0FBVztRQUNmQyxXQUFXVixVQUFVLDBCQUEwQjtJQUNqRDtJQUVBLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDbEIsd0RBQVNBO1lBQ1ZZLFVBQVU7Z0JBQUNDLEdBQUdOO2dCQUFNTyxHQUFHTjtZQUFJO1lBQzNCVyxRQUFRVDtZQUNSVSxRQUFRO2dCQUNObEIsS0FBS0E7Z0JBQ0xDLE1BQU1BO2dCQUNOQyxPQUFPQTtnQkFDUEMsUUFBUUE7WUFDVjtzQkFFQSw0RUFBQ1k7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTt3QkFBYUcsT0FBT047Ozs7OztrQ0FDbkMsOERBQUNPOzs0QkFBRTs0QkFBb0IsU0FBSTs0QkFBQzs0QkFBRWY7NEJBQUs7NEJBQUdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QztLQTlCTVA7QUFnQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3JuZXIudHN4P2MzNDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERyYWdnYWJsZSwge0RyYWdnYWJsZUV2ZW50fSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB0b3A6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICByaWdodDogbnVtYmVyO1xuICBib3R0b206IG51bWJlcjtcbiAgdG9wbGVmdDogYm9vbGVhbjtcbiAgcG9zeDogbnVtYmVyO1xuICBwb3N5OiBudW1iZXI7XG4gIGJvdW5kc0NoYW5nZTogKHRvcGxlZnQ6IGJvb2xlYW4sIHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG5jb25zdCBDb3JuZXIgPSAoeyB0b3AsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcGxlZnQsIHBvc3gsIHBvc3ksIGJvdW5kc0NoYW5nZSB9OiBQcm9wcykgPT4ge1xuXG4gIGNvbnN0IGNvbnRyb2xsZWREcmFnID0gKGU6IERyYWdnYWJsZUV2ZW50LCBwb3NpdGlvbjoge3g6IG51bWJlciwgeTogbnVtYmVyfSkgPT4ge1xuICAgIGNvbnN0IHt4LCB5fSA9IHBvc2l0aW9uO1xuICAgIGJvdW5kc0NoYW5nZSh0b3BsZWZ0LCB4LCB5KTtcbiAgfTtcblxuICBjb25zdCBwaXBTdHlsZSA9IHtcbiAgICB0cmFuc2Zvcm06IHRvcGxlZnQgPyBcInRyYW5zbGF0ZSgtMnB4LCAtMnB4KVwiIDogXCJ0cmFuc2xhdGUoLThweCwgLThweClcIixcbiAgfSBhcyBjb25zdDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ybmVyLWNvbnRhaW5lclwiPlxuICAgICAgPERyYWdnYWJsZSBcbiAgICAgIHBvc2l0aW9uPXt7eDogcG9zeCwgeTogcG9zeX19XG4gICAgICBvbkRyYWc9e2NvbnRyb2xsZWREcmFnfVxuICAgICAgYm91bmRzPXt7XG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgIGJvdHRvbTogYm90dG9tXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ybmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ybmVyLXBpcFwiIHN0eWxlPXtwaXBTdHlsZX0+PC9kaXY+XG4gICAgICAgIDxwPkhleSBndXlzISEhIEknbSBhdCB7dGhpc30ge3Bvc3h9LCB7cG9zeX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L0RyYWdnYWJsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3JuZXI7Il0sIm5hbWVzIjpbIkRyYWdnYWJsZSIsIkNvcm5lciIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInRvcGxlZnQiLCJwb3N4IiwicG9zeSIsImJvdW5kc0NoYW5nZSIsImNvbnRyb2xsZWREcmFnIiwiZSIsInBvc2l0aW9uIiwieCIsInkiLCJwaXBTdHlsZSIsInRyYW5zZm9ybSIsImRpdiIsImNsYXNzTmFtZSIsIm9uRHJhZyIsImJvdW5kcyIsInN0eWxlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Corner.tsx\n"));

/***/ })

});