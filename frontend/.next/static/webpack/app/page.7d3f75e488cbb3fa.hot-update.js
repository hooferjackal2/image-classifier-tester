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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ \"(app-pages-browser)/./node_modules/react-draggable/build/cjs/cjs.js\");\n/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Corner = (param)=>{\n    let { top, left, right, bottom, topleft, posx, posy, boundsChange } = param;\n    _s();\n    const [position, setPosition] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x: left,\n        y: top\n    });\n    const controlledDrag = (e, position)=>{\n        const { x, y } = position;\n        boundsChange(topleft, x, y);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_draggable__WEBPACK_IMPORTED_MODULE_1___default()), {\n        position: position,\n        onDrag: controlledDrag,\n        bounds: {\n            top: top,\n            left: left,\n            right: right,\n            bottom: bottom\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"corner\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"corner-pip\"\n                }, void 0, false, {\n                    fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Hey guys!!! I'm at \",\n                        undefined,\n                        \" \",\n                        position.x,\n                        \", \",\n                        position.y\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/Corner.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Corner, \"PJda7Komt1g3Wo70PHqLbMcfh0I=\");\n_c = Corner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Corner);\nvar _c;\n$RefreshReg$(_c, \"Corner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29ybmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwRDtBQUN6QjtBQWFqQyxNQUFNRSxTQUFTO1FBQUMsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxZQUFZLEVBQVM7O0lBQ3BGLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBQztRQUFDWSxHQUFHVDtRQUFNVSxHQUFHWDtJQUFHO0lBRXpELE1BQU1ZLGlCQUFpQixDQUFDQyxHQUFtQkw7UUFDekMsTUFBTSxFQUFDRSxDQUFDLEVBQUVDLENBQUMsRUFBQyxHQUFHSDtRQUNmRCxhQUFhSCxTQUFTTSxHQUFHQztJQUMzQjtJQUVBLHFCQUNFLDhEQUFDZCx3REFBU0E7UUFDUlcsVUFBVUE7UUFDVk0sUUFBUUY7UUFDUkcsUUFBUTtZQUFDZixLQUFLQTtZQUFLQyxNQUFNQTtZQUFNQyxPQUFPQTtZQUFPQyxRQUFRQTtRQUFNO2tCQUUzRCw0RUFBQ2E7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOzs7Ozs7OEJBQ2YsOERBQUNDOzt3QkFBRTt3QkFBb0IsU0FBSTt3QkFBQzt3QkFBRVYsU0FBU0UsQ0FBQzt3QkFBQzt3QkFBR0YsU0FBU0csQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlEO0dBcEJNWjtLQUFBQTtBQXNCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Nvcm5lci50c3g/YzM0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRHJhZ2dhYmxlLCB7RHJhZ2dhYmxlRXZlbnR9IGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRvcDogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG4gIHJpZ2h0OiBudW1iZXI7XG4gIGJvdHRvbTogbnVtYmVyO1xuICB0b3BsZWZ0OiBib29sZWFuO1xuICBwb3N4OiBudW1iZXI7XG4gIHBvc3k6IG51bWJlcjtcbiAgYm91bmRzQ2hhbmdlOiAodG9wbGVmdDogYm9vbGVhbiwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmNvbnN0IENvcm5lciA9ICh7IHRvcCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wbGVmdCwgcG9zeCwgcG9zeSwgYm91bmRzQ2hhbmdlIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtwb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGUoe3g6IGxlZnQsIHk6IHRvcH0pO1xuXG4gIGNvbnN0IGNvbnRyb2xsZWREcmFnID0gKGU6IERyYWdnYWJsZUV2ZW50LCBwb3NpdGlvbjoge3g6IG51bWJlciwgeTogbnVtYmVyfSkgPT4ge1xuICAgIGNvbnN0IHt4LCB5fSA9IHBvc2l0aW9uO1xuICAgIGJvdW5kc0NoYW5nZSh0b3BsZWZ0LCB4LCB5KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxEcmFnZ2FibGUgXG4gICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICBvbkRyYWc9e2NvbnRyb2xsZWREcmFnfVxuICAgICAgYm91bmRzPXt7dG9wOiB0b3AsIGxlZnQ6IGxlZnQsIHJpZ2h0OiByaWdodCwgYm90dG9tOiBib3R0b219fVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ybmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29ybmVyLXBpcFwiPjwvZGl2PlxuICAgICAgICA8cD5IZXkgZ3V5cyEhISBJJ20gYXQge3RoaXN9IHtwb3NpdGlvbi54fSwge3Bvc2l0aW9uLnl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9EcmFnZ2FibGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29ybmVyOyJdLCJuYW1lcyI6WyJEcmFnZ2FibGUiLCJ1c2VTdGF0ZSIsIkNvcm5lciIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsInRvcGxlZnQiLCJwb3N4IiwicG9zeSIsImJvdW5kc0NoYW5nZSIsInBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJ4IiwieSIsImNvbnRyb2xsZWREcmFnIiwiZSIsIm9uRHJhZyIsImJvdW5kcyIsImRpdiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Corner.tsx\n"));

/***/ })

});