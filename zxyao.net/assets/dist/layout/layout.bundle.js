/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/layout/index.scss":
/*!************************************!*\
  !*** ./src/scss/layout/index.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/ts/layout/index.ts":
/*!********************************!*\
  !*** ./src/ts/layout/index.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../../scss/layout/index.scss */ "./src/scss/layout/index.scss");
var jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
function navEventBind() {
    var $navContainer = jquery_1.default(".nav-container");
    /**
     * 多级菜单
     */
    jquery_1.default(".nav .nav-dd").on("mouseover", function (e) {
        var $this = jquery_1.default(this);
        if (!$this.hasClass("open")) {
            var $dropdownMenu = jquery_1.default(this).children(".nav-dd-menu");
            $dropdownMenu.addClass("active");
        }
    }).on("mouseout", function (e) {
        var $this = jquery_1.default(this);
        if (!$this.hasClass("open")) {
            var $dropdownMenu = jquery_1.default(this).children(".nav-dd-menu");
            $dropdownMenu.removeClass("active");
        }
    }).on("click", function (e) {
        var $this = jquery_1.default(this);
        if ($this.hasClass("open")) {
            $this.removeClass("open");
        }
        else {
            $this.addClass("open");
            var $dropdownMenu = jquery_1.default(this).children(".nav-dd-menu");
            $dropdownMenu.addClass("active");
        }
    });
    jquery_1.default(".nav-toggle", $navContainer).on("click", function (e) {
        var $menu = jquery_1.default(".nav-menu", $navContainer);
        if (!$menu.hasClass("nav-show")) {
            $menu.addClass("nav-show")
                .removeClass("nav-hide");
        }
        else {
            $menu.removeClass("nav-show")
                .addClass("nav-hide");
        }
    });
    //搜索框显示
    jquery_1.default(".search-container>a", $navContainer).on('click', function (e) {
        var $searchBox = jquery_1.default(".search-container .search-box", $navContainer);
        if ($searchBox.hasClass("active")) {
            $searchBox.removeClass("active");
        }
        else {
            $searchBox.addClass("active");
        }
    });
    //判断那个导航栏高亮
    var s = jquery_1.default("title").text().split("-")[0].replace(" ", "");
    var navArr = ["首页", "已往内容", "点点滴滴", "关于本站"];
    var isDefault = true;
    for (var i = 0; i < navArr.length; i++) {
        if (s.indexOf(navArr[i]) > -1) {
            jquery_1.default("#zxyNav li:contains(" + s + ")").addClass("active");
            isDefault = false;
            break;
        }
    }
    if (isDefault) {
        jquery_1.default("#zxyNav .active").removeClass("active");
    }
    var defaultHref = '/';
    var homeHref = '/home/index';
    function checkHighLight() {
        var pathname = location.pathname.toLocaleLowerCase();
        if (!pathname) {
            pathname = defaultHref;
        }
        var pathParamter = pathname.split('/')
            .filter(function (e) {
            return e;
        });
        if (pathParamter.length === 1) {
            pathParamter.push('index');
        }
        pathname = '/' + pathParamter.join('/');
        if (pathname === homeHref) {
            pathname = defaultHref;
        }
        jquery_1.default('li.active', $navContainer).removeClass('active');
        jquery_1.default('.nav-link', $navContainer)
            .each(function (index, htmlEle) {
            var href = jquery_1.default(htmlEle).attr('href');
            if (href) {
                href = href.toLowerCase();
                if (pathname === href) {
                    var $li = jquery_1.default(htmlEle).parent('li');
                    $li.addClass('active');
                    $li.parents('.nav-dd').addClass('active');
                    return false;
                }
            }
            return;
        });
    }
    checkHighLight();
    //搜索事件
    jquery_1.default(".search-container .btn-search-submit", $navContainer).on("click", function (e) {
        e.preventDefault();
        var oq = jquery_1.default(".search-val").val();
        var searchVal = oq;
        if (!searchVal) {
            return;
        }
        else {
            var queryVals = [];
            var reParten = /"[\S]*"/g;
            var result = reParten.exec(searchVal);
            while (result) {
                queryVals.push(result[0]);
                searchVal = searchVal.replace(result[0], "");
                result = reParten.exec(searchVal);
            }
            searchVal = searchVal.trim().replace(/\s+/g, ' ');
            ;
            var searchOtherAndVals = searchVal.split(' ');
            queryVals = queryVals.concat(searchOtherAndVals);
            for (var i = 0; i < queryVals.length; i++) {
                queryVals[i] = 'q=' + queryVals[i];
            }
            window.location.href = "/Essays/Search?oq=" + oq + "&" + queryVals.join('&');
        }
    });
}
navEventBind();


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/layout/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=layout.bundle.js.map