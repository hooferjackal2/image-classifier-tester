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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ \"(app-pages-browser)/./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Corner = (param)=>{\n    let { top, left, right, bottom, topleft, posx, posy, boundsChange } = param;\n    const controlledDrag = (e, position)=>{\n        const { x, y } = position;\n        boundsChange(topleft, x, y);\n    };\n    const pipStyle = {\n        transform: topleft ? \"translate(-6px, -6px)\" : \"\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"corner-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n            position: {\n                x: posx,\n                y: posy\n            },\n            onDrag: controlledDrag,\n            bounds: {\n                top: top,\n                left: left,\n                right: right,\n                bottom: bottom\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"corner\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"corner-pip\"\n                    }, void 0, false, {\n                        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Hey guys!!! I'm at \",\n                            undefined,\n                            \" \",\n                            posx,\n                            \", \",\n                            posy\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Corner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Corner);\nvar _c;\n$RefreshReg$(_c, \"Corner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29ybmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUEwRDtBQWMxRCxNQUFNQyxTQUFTO1FBQUMsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQVM7SUFFcEYsTUFBTUMsaUJBQWlCLENBQUNDLEdBQW1CQztRQUN6QyxNQUFNLEVBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFDLEdBQUdGO1FBQ2ZILGFBQWFILFNBQVNPLEdBQUdDO0lBQzNCO0lBRUEsTUFBTUMsV0FBVztRQUNmQyxXQUFXVixVQUFVLDBCQUEwQjtJQUNqRDtJQUVBLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDbEIsd0RBQVNBO1lBQ1ZZLFVBQVU7Z0JBQUNDLEdBQUdOO2dCQUFNTyxHQUFHTjtZQUFJO1lBQzNCVyxRQUFRVDtZQUNSVSxRQUFRO2dCQUNObEIsS0FBS0E7Z0JBQ0xDLE1BQU1BO2dCQUNOQyxPQUFPQTtnQkFDUEMsUUFBUUE7WUFDVjtzQkFFQSw0RUFBQ1k7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRzs7NEJBQUU7NEJBQW9CLFNBQUk7NEJBQUM7NEJBQUVkOzRCQUFLOzRCQUFHQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUM7S0E5Qk1QO0FBZ0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29ybmVyLnRzeD9jMzQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEcmFnZ2FibGUsIHtEcmFnZ2FibGVFdmVudH0gZnJvbSBcInJlYWN0LWRyYWdnYWJsZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdG9wOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbiAgcmlnaHQ6IG51bWJlcjtcbiAgYm90dG9tOiBudW1iZXI7XG4gIHRvcGxlZnQ6IGJvb2xlYW47XG4gIHBvc3g6IG51bWJlcjtcbiAgcG9zeTogbnVtYmVyO1xuICBib3VuZHNDaGFuZ2U6ICh0b3BsZWZ0OiBib29sZWFuLCB4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuY29uc3QgQ29ybmVyID0gKHsgdG9wLCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3BsZWZ0LCBwb3N4LCBwb3N5LCBib3VuZHNDaGFuZ2UgfTogUHJvcHMpID0+IHtcblxuICBjb25zdCBjb250cm9sbGVkRHJhZyA9IChlOiBEcmFnZ2FibGVFdmVudCwgcG9zaXRpb246IHt4OiBudW1iZXIsIHk6IG51bWJlcn0pID0+IHtcbiAgICBjb25zdCB7eCwgeX0gPSBwb3NpdGlvbjtcbiAgICBib3VuZHNDaGFuZ2UodG9wbGVmdCwgeCwgeSk7XG4gIH07XG5cbiAgY29uc3QgcGlwU3R5bGUgPSB7XG4gICAgdHJhbnNmb3JtOiB0b3BsZWZ0ID8gXCJ0cmFuc2xhdGUoLTZweCwgLTZweClcIiA6IFwiXCJcbiAgfSBhcyBjb25zdDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ybmVyLWNvbnRhaW5lclwiPlxuICAgICAgPERyYWdnYWJsZSBcbiAgICAgIHBvc2l0aW9uPXt7eDogcG9zeCwgeTogcG9zeX19XG4gICAgICBvbkRyYWc9e2NvbnRyb2xsZWREcmFnfVxuICAgICAgYm91bmRzPXt7XG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBsZWZ0OiBsZWZ0LFxuICAgICAgICByaWdodDogcmlnaHQsXG4gICAgICAgIGJvdHRvbTogYm90dG9tXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ybmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ybmVyLXBpcFwiPjwvZGl2PlxuICAgICAgICA8cD5IZXkgZ3V5cyEhISBJJ20gYXQge3RoaXN9IHtwb3N4fSwge3Bvc3l9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9EcmFnZ2FibGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29ybmVyOyJdLCJuYW1lcyI6WyJEcmFnZ2FibGUiLCJDb3JuZXIiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ0b3BsZWZ0IiwicG9zeCIsInBvc3kiLCJib3VuZHNDaGFuZ2UiLCJjb250cm9sbGVkRHJhZyIsImUiLCJwb3NpdGlvbiIsIngiLCJ5IiwicGlwU3R5bGUiLCJ0cmFuc2Zvcm0iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkRyYWciLCJib3VuZHMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Corner.tsx\n"));

/***/ })

});