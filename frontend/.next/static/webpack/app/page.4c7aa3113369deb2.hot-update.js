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

/***/ "(app-pages-browser)/./components/BoundingBox.tsx":
/*!************************************!*\
  !*** ./components/BoundingBox.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Corner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Corner */ \"(app-pages-browser)/./components/Corner.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst BoundingBox = ()=>{\n    _s();\n    const [bounds, setBounds] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x1: 100,\n        y1: 100,\n        x2: 200,\n        y2: 200\n    });\n    const boundsChange = (topleft, x, y)=>{\n        if (topleft) {\n            setBounds({\n                ...bounds,\n                x1: x,\n                y1: y\n            });\n        } else {\n            setBounds({\n                ...bounds,\n                x2: x,\n                y2: y\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Corner__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                top: 100,\n                left: 100,\n                right: bounds.x2,\n                bottom: bounds.y2,\n                topleft: true,\n                posx: bounds.x1,\n                posy: bounds.y1,\n                boundsChange: boundsChange\n            }, void 0, false, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Corner__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                top: 200,\n                left: 200,\n                right: 600,\n                bottom: 600,\n                topleft: false,\n                posx: bounds.x2,\n                posy: bounds.y2,\n                boundsChange: boundsChange\n            }, void 0, false, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BoundingBox, \"dGitJnCnrfKjbOZcatjTOvZCySE=\");\n_c = BoundingBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoundingBox);\nvar _c;\n$RefreshReg$(_c, \"BoundingBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQm91bmRpbmdCb3gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUM7QUFDUjtBQUVqQyxNQUFNRSxjQUFjOztJQUNsQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUM7UUFBQ0ksSUFBSTtRQUFLQyxJQUFJO1FBQUtDLElBQUk7UUFBS0MsSUFBSTtJQUFHO0lBRXhFLE1BQU1DLGVBQWUsQ0FBQ0MsU0FBa0JDLEdBQVdDO1FBQ2pELElBQUlGLFNBQVM7WUFDWE4sVUFBVTtnQkFBQyxHQUFHRCxNQUFNO2dCQUFFRSxJQUFJTTtnQkFBR0wsSUFBSU07WUFBQztRQUNwQyxPQUFPO1lBQ0xSLFVBQVU7Z0JBQUMsR0FBR0QsTUFBTTtnQkFBRUksSUFBSUk7Z0JBQUdILElBQUlJO1lBQUM7UUFDcEM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNiLDBEQUFNQTtnQkFDTGMsS0FBSztnQkFDTEMsTUFBTTtnQkFDTkMsT0FBT2IsT0FBT0ksRUFBRTtnQkFDaEJVLFFBQVFkLE9BQU9LLEVBQUU7Z0JBQ2pCRSxTQUFTO2dCQUNUUSxNQUFNZixPQUFPRSxFQUFFO2dCQUNmYyxNQUFNaEIsT0FBT0csRUFBRTtnQkFDZkcsY0FBY0E7Ozs7OzswQkFDaEIsOERBQUNULDBEQUFNQTtnQkFDTGMsS0FBSztnQkFDTEMsTUFBTTtnQkFDTkMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUlAsU0FBUztnQkFDVFEsTUFBTWYsT0FBT0ksRUFBRTtnQkFDZlksTUFBTWhCLE9BQU9LLEVBQUU7Z0JBQ2ZDLGNBQWNBOzs7Ozs7Ozs7Ozs7QUFHdEI7R0FqQ01QO0tBQUFBO0FBbUNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm91bmRpbmdCb3gudHN4PzM2ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvcm5lciBmcm9tICdAL2NvbXBvbmVudHMvQ29ybmVyJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEJvdW5kaW5nQm94ID0gKCkgPT4ge1xuICBjb25zdCBbYm91bmRzLCBzZXRCb3VuZHNdID0gdXNlU3RhdGUoe3gxOiAxMDAsIHkxOiAxMDAsIHgyOiAyMDAsIHkyOiAyMDB9KTtcblxuICBjb25zdCBib3VuZHNDaGFuZ2UgPSAodG9wbGVmdDogYm9vbGVhbiwgeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgICBpZiAodG9wbGVmdCkge1xuICAgICAgc2V0Qm91bmRzKHsuLi5ib3VuZHMsIHgxOiB4LCB5MTogeX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRCb3VuZHMoey4uLmJvdW5kcywgeDI6IHgsIHkyOiB5fSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENvcm5lciBcbiAgICAgICAgdG9wPXsxMDB9XG4gICAgICAgIGxlZnQ9ezEwMH1cbiAgICAgICAgcmlnaHQ9e2JvdW5kcy54Mn1cbiAgICAgICAgYm90dG9tPXtib3VuZHMueTJ9XG4gICAgICAgIHRvcGxlZnQ9e3RydWV9XG4gICAgICAgIHBvc3g9e2JvdW5kcy54MX1cbiAgICAgICAgcG9zeT17Ym91bmRzLnkxfVxuICAgICAgICBib3VuZHNDaGFuZ2U9e2JvdW5kc0NoYW5nZX0+PC9Db3JuZXI+XG4gICAgICA8Q29ybmVyXG4gICAgICAgIHRvcD17MjAwfVxuICAgICAgICBsZWZ0PXsyMDB9XG4gICAgICAgIHJpZ2h0PXs2MDB9XG4gICAgICAgIGJvdHRvbT17NjAwfVxuICAgICAgICB0b3BsZWZ0PXtmYWxzZX1cbiAgICAgICAgcG9zeD17Ym91bmRzLngyfVxuICAgICAgICBwb3N5PXtib3VuZHMueTJ9XG4gICAgICAgIGJvdW5kc0NoYW5nZT17Ym91bmRzQ2hhbmdlfT48L0Nvcm5lcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3VuZGluZ0JveDsiXSwibmFtZXMiOlsiQ29ybmVyIiwidXNlU3RhdGUiLCJCb3VuZGluZ0JveCIsImJvdW5kcyIsInNldEJvdW5kcyIsIngxIiwieTEiLCJ4MiIsInkyIiwiYm91bmRzQ2hhbmdlIiwidG9wbGVmdCIsIngiLCJ5IiwiZGl2IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwicG9zeCIsInBvc3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BoundingBox.tsx\n"));

/***/ })

});