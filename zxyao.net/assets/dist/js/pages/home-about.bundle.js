/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/pages/home-about.scss":
/*!****************************************!*\
  !*** ./src/scss/pages/home-about.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ts/common/global.ts":
/*!*********************************!*\
  !*** ./src/ts/common/global.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Global = {
    showLoading: function (text) {
        if (text === void 0) { text = null; }
        var showText = "加载中...";
        if (text) {
            showText = text;
        }
        $("#gLoading .loading-text").html(showText);
        $("#gLoading").css("display", "block");
    },
    hideLoading: function () {
        $("#gLoading").css("display", "none");
    },
    alert: function (text, obj) {
        if (obj === void 0) { obj = null; }
        var defaultObj = {
            time: 2000,
            title: "提示"
        };
        if (obj) {
            if (typeof obj === "function") {
                //callback
                window.layer.alert(text, defaultObj, obj);
            }
            else {
                $.extend(obj, defaultObj);
                window.layer.alert(text, obj);
            }
        }
        else {
            window.layer.alert(text, defaultObj);
        }
    }
};
exports.default = Global;


/***/ }),

/***/ "./src/ts/pages/home-about.ts":
/*!************************************!*\
  !*** ./src/ts/pages/home-about.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../../scss/pages/home-about.scss */ "./src/scss/pages/home-about.scss");
var global_1 = __importDefault(__webpack_require__(/*! ../common/global */ "./src/ts/common/global.ts"));
(function () {
    var aboutApi = "/api/Home/About";
    global_1.default.showLoading();
    $.ajax({
        type: "get",
        url: aboutApi,
        success: function (msg) {
            if (msg.Code === 0) {
                $("#about").html(msg.Data);
            }
        },
        complete: function () {
            global_1.default.hideLoading();
        }
    });
})();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/pages/home-about.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=home-about.bundle.js.map