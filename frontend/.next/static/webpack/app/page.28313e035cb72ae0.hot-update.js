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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Corner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Corner */ \"(app-pages-browser)/./components/Corner.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst BoundingBox = ()=>{\n    _s();\n    const [bounds, setBounds] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        x1: 100,\n        y1: 100,\n        x2: 200,\n        y2: 200\n    });\n    const boundsChange = (topleft, x, y)=>{\n        if (topleft) {\n            setBounds({\n                ...bounds,\n                x1: x,\n                y1: y\n            });\n        } else {\n            setBounds({\n                ...bounds,\n                x2: x,\n                y2: y\n            });\n        }\n    };\n    const leftLineStyle = {\n        position: \"absolute\",\n        left: bounds.x1,\n        top: bounds.y1,\n        \"border-left\": \"solid #660000 2px\",\n        transform: \"translate(-1px, 0px)\",\n        height: bounds.y2 - bounds.y1,\n        width: 10\n    };\n    const topLineStyle = {\n        position: \"absolute\",\n        left: bounds.x1,\n        top: bounds.y1,\n        \"border-top\": \"solid #660000 2px\",\n        transform: \"translate(0px, -1px)\",\n        height: 10,\n        width: bounds.x2 - bounds.x1\n    };\n    const rightLineStyle = {\n        position: \"absolute\",\n        left: bounds.x2,\n        top: bounds.y1,\n        \"border-left\": \"solid #660000 2px\",\n        transform: \"translate(-1px, 0px)\",\n        height: bounds.y2 - bounds.y1,\n        width: 10\n    };\n    const bottomLineStyle = {\n        position: \"absolute\",\n        left: bounds.x1,\n        top: bounds.y2,\n        \"border-top\": \"solid #660000 2px\",\n        transform: \"translate(0px, -1px)\",\n        height: 10,\n        width: bounds.x2 - bounds.x1\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bounding-box\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: leftLineStyle\n            }, void 0, false, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: topLineStyle\n            }, void 0, false, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: rightLineStyle\n            }, void 0, false, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: bottomLineStyle\n            }, void 0, false, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Corner__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                top: 100,\n                left: 100,\n                right: bounds.x2 - 10,\n                bottom: bounds.y2 - 10,\n                topleft: true,\n                posx: bounds.x1,\n                posy: bounds.y1,\n                boundsChange: boundsChange\n            }, void 0, false, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Corner__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                top: bounds.y1 + 10,\n                left: bounds.x1 + 10,\n                right: 600,\n                bottom: 600,\n                topleft: false,\n                posx: bounds.x2,\n                posy: bounds.y2,\n                boundsChange: boundsChange\n            }, void 0, false, {\n                fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/hooferjackal2/Documents/personal-projects/image-classifier-tester/components/BoundingBox.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BoundingBox, \"dGitJnCnrfKjbOZcatjTOvZCySE=\");\n_c = BoundingBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoundingBox);\nvar _c;\n$RefreshReg$(_c, \"BoundingBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQm91bmRpbmdCb3gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBeUM7QUFDUjtBQU9qQyxNQUFNRSxjQUFjOztJQUNsQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUM7UUFBQ0ksSUFBSTtRQUFLQyxJQUFJO1FBQUtDLElBQUk7UUFBS0MsSUFBSTtJQUFHO0lBRXhFLE1BQU1DLGVBQWUsQ0FBQ0MsU0FBa0JDLEdBQVdDO1FBQ2pELElBQUlGLFNBQVM7WUFDWE4sVUFBVTtnQkFBQyxHQUFHRCxNQUFNO2dCQUFFRSxJQUFJTTtnQkFBR0wsSUFBSU07WUFBQztRQUNwQyxPQUFPO1lBQ0xSLFVBQVU7Z0JBQUMsR0FBR0QsTUFBTTtnQkFBRUksSUFBSUk7Z0JBQUdILElBQUlJO1lBQUM7UUFDcEM7SUFDRjtJQUVBLE1BQU1DLGdCQUFnQjtRQUNwQkMsVUFBVTtRQUNWQyxNQUFNWixPQUFPRSxFQUFFO1FBQ2ZXLEtBQUtiLE9BQU9HLEVBQUU7UUFDZCxlQUFlO1FBQ2ZXLFdBQVc7UUFDWEMsUUFBUWYsT0FBT0ssRUFBRSxHQUFHTCxPQUFPRyxFQUFFO1FBQzdCYSxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxlQUFlO1FBQ25CTixVQUFVO1FBQ1ZDLE1BQU1aLE9BQU9FLEVBQUU7UUFDZlcsS0FBS2IsT0FBT0csRUFBRTtRQUNkLGNBQWM7UUFDZFcsV0FBVztRQUNYQyxRQUFRO1FBQ1JDLE9BQU9oQixPQUFPSSxFQUFFLEdBQUdKLE9BQU9FLEVBQUU7SUFDOUI7SUFFQSxNQUFNZ0IsaUJBQWlCO1FBQ3JCUCxVQUFVO1FBQ1ZDLE1BQU1aLE9BQU9JLEVBQUU7UUFDZlMsS0FBS2IsT0FBT0csRUFBRTtRQUNkLGVBQWU7UUFDZlcsV0FBVztRQUNYQyxRQUFRZixPQUFPSyxFQUFFLEdBQUdMLE9BQU9HLEVBQUU7UUFDN0JhLE9BQU87SUFDVDtJQUVBLE1BQU1HLGtCQUFrQjtRQUN0QlIsVUFBVTtRQUNWQyxNQUFNWixPQUFPRSxFQUFFO1FBQ2ZXLEtBQUtiLE9BQU9LLEVBQUU7UUFDZCxjQUFjO1FBQ2RTLFdBQVc7UUFDWEMsUUFBUTtRQUNSQyxPQUFPaEIsT0FBT0ksRUFBRSxHQUFHSixPQUFPRSxFQUFFO0lBQzlCO0lBRUEscUJBQ0UsOERBQUNrQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlFLE9BQU9aOzs7Ozs7MEJBQ1osOERBQUNVO2dCQUFJRSxPQUFPTDs7Ozs7OzBCQUNaLDhEQUFDRztnQkFBSUUsT0FBT0o7Ozs7OzswQkFDWiw4REFBQ0U7Z0JBQUlFLE9BQU9IOzs7Ozs7MEJBQ1osOERBQUN0QiwwREFBTUE7Z0JBQ0xnQixLQUFLO2dCQUNMRCxNQUFNO2dCQUNOVyxPQUFPdkIsT0FBT0ksRUFBRSxHQUFHO2dCQUNuQm9CLFFBQVF4QixPQUFPSyxFQUFFLEdBQUc7Z0JBQ3BCRSxTQUFTO2dCQUNUa0IsTUFBTXpCLE9BQU9FLEVBQUU7Z0JBQ2Z3QixNQUFNMUIsT0FBT0csRUFBRTtnQkFDZkcsY0FBY0E7Ozs7OzswQkFDaEIsOERBQUNULDBEQUFNQTtnQkFDTGdCLEtBQUtiLE9BQU9HLEVBQUUsR0FBRztnQkFDakJTLE1BQU1aLE9BQU9FLEVBQUUsR0FBRztnQkFDbEJxQixPQUFPO2dCQUNQQyxRQUFRO2dCQUNSakIsU0FBUztnQkFDVGtCLE1BQU16QixPQUFPSSxFQUFFO2dCQUNmc0IsTUFBTTFCLE9BQU9LLEVBQUU7Z0JBQ2ZDLGNBQWNBOzs7Ozs7Ozs7Ozs7QUFHdEI7R0E3RU1QO0tBQUFBO0FBK0VOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm91bmRpbmdCb3gudHN4PzM2ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvcm5lciBmcm9tICdAL2NvbXBvbmVudHMvQ29ybmVyJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGhlaWdodDogbnVtYmVyO1xuICB3aWR0aDogbnVtYmVyO1xufVxuXG5jb25zdCBCb3VuZGluZ0JveCA9ICgpID0+IHtcbiAgY29uc3QgW2JvdW5kcywgc2V0Qm91bmRzXSA9IHVzZVN0YXRlKHt4MTogMTAwLCB5MTogMTAwLCB4MjogMjAwLCB5MjogMjAwfSk7XG5cbiAgY29uc3QgYm91bmRzQ2hhbmdlID0gKHRvcGxlZnQ6IGJvb2xlYW4sIHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRvcGxlZnQpIHtcbiAgICAgIHNldEJvdW5kcyh7Li4uYm91bmRzLCB4MTogeCwgeTE6IHl9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Qm91bmRzKHsuLi5ib3VuZHMsIHgyOiB4LCB5MjogeX0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGxlZnRMaW5lU3R5bGUgPSB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBsZWZ0OiBib3VuZHMueDEsXG4gICAgdG9wOiBib3VuZHMueTEsXG4gICAgXCJib3JkZXItbGVmdFwiOiBcInNvbGlkICM2NjAwMDAgMnB4XCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtMXB4LCAwcHgpXCIsXG4gICAgaGVpZ2h0OiBib3VuZHMueTIgLSBib3VuZHMueTEsXG4gICAgd2lkdGg6IDEwXG4gIH0gYXMgY29uc3Q7XG5cbiAgY29uc3QgdG9wTGluZVN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgbGVmdDogYm91bmRzLngxLFxuICAgIHRvcDogYm91bmRzLnkxLFxuICAgIFwiYm9yZGVyLXRvcFwiOiBcInNvbGlkICM2NjAwMDAgMnB4XCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwcHgsIC0xcHgpXCIsXG4gICAgaGVpZ2h0OiAxMCxcbiAgICB3aWR0aDogYm91bmRzLngyIC0gYm91bmRzLngxXG4gIH0gYXMgY29uc3Q7XG5cbiAgY29uc3QgcmlnaHRMaW5lU3R5bGUgPSB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBsZWZ0OiBib3VuZHMueDIsXG4gICAgdG9wOiBib3VuZHMueTEsXG4gICAgXCJib3JkZXItbGVmdFwiOiBcInNvbGlkICM2NjAwMDAgMnB4XCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgtMXB4LCAwcHgpXCIsXG4gICAgaGVpZ2h0OiBib3VuZHMueTIgLSBib3VuZHMueTEsXG4gICAgd2lkdGg6IDEwXG4gIH0gYXMgY29uc3Q7XG5cbiAgY29uc3QgYm90dG9tTGluZVN0eWxlID0ge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgbGVmdDogYm91bmRzLngxLFxuICAgIHRvcDogYm91bmRzLnkyLFxuICAgIFwiYm9yZGVyLXRvcFwiOiBcInNvbGlkICM2NjAwMDAgMnB4XCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwcHgsIC0xcHgpXCIsXG4gICAgaGVpZ2h0OiAxMCxcbiAgICB3aWR0aDogYm91bmRzLngyIC0gYm91bmRzLngxXG4gIH0gYXMgY29uc3Q7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdW5kaW5nLWJveFwiPlxuICAgICAgPGRpdiBzdHlsZT17bGVmdExpbmVTdHlsZX0+PC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt0b3BMaW5lU3R5bGV9PjwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17cmlnaHRMaW5lU3R5bGV9PjwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17Ym90dG9tTGluZVN0eWxlfT48L2Rpdj5cbiAgICAgIDxDb3JuZXIgXG4gICAgICAgIHRvcD17MTAwfVxuICAgICAgICBsZWZ0PXsxMDB9XG4gICAgICAgIHJpZ2h0PXtib3VuZHMueDIgLSAxMH1cbiAgICAgICAgYm90dG9tPXtib3VuZHMueTIgLSAxMH1cbiAgICAgICAgdG9wbGVmdD17dHJ1ZX1cbiAgICAgICAgcG9zeD17Ym91bmRzLngxfVxuICAgICAgICBwb3N5PXtib3VuZHMueTF9XG4gICAgICAgIGJvdW5kc0NoYW5nZT17Ym91bmRzQ2hhbmdlfT48L0Nvcm5lcj5cbiAgICAgIDxDb3JuZXJcbiAgICAgICAgdG9wPXtib3VuZHMueTEgKyAxMH1cbiAgICAgICAgbGVmdD17Ym91bmRzLngxICsgMTB9XG4gICAgICAgIHJpZ2h0PXs2MDB9XG4gICAgICAgIGJvdHRvbT17NjAwfVxuICAgICAgICB0b3BsZWZ0PXtmYWxzZX1cbiAgICAgICAgcG9zeD17Ym91bmRzLngyfVxuICAgICAgICBwb3N5PXtib3VuZHMueTJ9XG4gICAgICAgIGJvdW5kc0NoYW5nZT17Ym91bmRzQ2hhbmdlfT48L0Nvcm5lcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3VuZGluZ0JveDsiXSwibmFtZXMiOlsiQ29ybmVyIiwidXNlU3RhdGUiLCJCb3VuZGluZ0JveCIsImJvdW5kcyIsInNldEJvdW5kcyIsIngxIiwieTEiLCJ4MiIsInkyIiwiYm91bmRzQ2hhbmdlIiwidG9wbGVmdCIsIngiLCJ5IiwibGVmdExpbmVTdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInRyYW5zZm9ybSIsImhlaWdodCIsIndpZHRoIiwidG9wTGluZVN0eWxlIiwicmlnaHRMaW5lU3R5bGUiLCJib3R0b21MaW5lU3R5bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInJpZ2h0IiwiYm90dG9tIiwicG9zeCIsInBvc3kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/BoundingBox.tsx\n"));

/***/ })

});