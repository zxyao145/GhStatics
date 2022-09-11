/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/components/_blogSummary.scss":
/*!***********************************************!*\
  !*** ./src/scss/components/_blogSummary.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./common/Paging.ts":
/*!**************************!*\
  !*** ./common/Paging.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Paging = /** @class */ (function () {
    /**
     *
     * @param ulPagingContainer ul容器
     * @param onPageNumTurn 当页面变化时的回调事件
     */
    function Paging(ulPagingContainer, onPageNumTurn, showOnlyOnePage) {
        if (showOnlyOnePage === void 0) { showOnlyOnePage = false; }
        this.leftPageNum = 4;
        this.rightPageNum = 0;
        this.onPageNumTurn = null;
        this.showOnlyOnePage = false;
        this.ulPagingContainer = ulPagingContainer;
        this.onPageNumTurn = onPageNumTurn;
        this.showOnlyOnePage = showOnlyOnePage;
    }
    Paging.prototype.bindPageNumTurnEvent = function () {
        var self = this;
        $(this.ulPagingContainer).find("li").click(function (e) {
            e.preventDefault();
            var $Li = $(this);
            if ($Li.hasClass("active") || $Li.hasClass("disabled")) {
                return;
            }
            else {
                var pageNumStr = $Li.children('a').text();
                if (pageNumStr) {
                    var pageNum = parseInt(pageNumStr);
                    if (self.onPageNumTurn) {
                        self.onPageNumTurn(pageNum);
                    }
                }
            }
        });
    };
    Paging.prototype.createPagingLi = function (activePageNum, maxPageNum) {
        if (maxPageNum === 1 && !this.showOnlyOnePage) {
            return;
        }
        var htmlStr = '';
        // 总页数小于6
        if (maxPageNum < 6) {
            for (var j = 1; j <= maxPageNum; j++) {
                htmlStr += "<li class=\"page-item";
                if (activePageNum === j) {
                    htmlStr += ' active';
                }
                htmlStr += "\"><a class=\"page-link\" href=\"javascript:void(0);\">" + j + "</a></li>";
            }
        }
        else {
            this.rightPageNum = maxPageNum - 3;
            if (activePageNum < this.leftPageNum) {
                for (var j = 1; j <= this.leftPageNum; j++) {
                    htmlStr += "<li class=\"page-item";
                    if (activePageNum === j) {
                        htmlStr += ' active';
                    }
                    htmlStr += "\"><a class=\"page-link\" href=\"javascript:void(0);\">" + j + "</a></li>";
                }
                htmlStr += "<li class=\"page-item disabled\"><a class=\"page-link\" href=\"javascript:void(0);\">...</a></li>";
                htmlStr += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">" + maxPageNum + "</a></li>";
            }
            else if (activePageNum > this.rightPageNum) {
                htmlStr = '<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>';
                htmlStr += "<li class=\"page-item disabled\"><a class=\"page-link\" href=\"javascript:void(0);\">...</a></li>";
                for (var j = this.rightPageNum; j <= maxPageNum; j++) {
                    htmlStr += "<li class=\"page-item";
                    if (activePageNum === j) {
                        htmlStr += ' active';
                    }
                    htmlStr += "\"><a class=\"page-link\" href=\"javascript:void(0);\">" + j + "</a></li>";
                }
            }
            else {
                htmlStr = '<li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>';
                htmlStr += "<li class=\"page-item disabled\"><a class=\"page-link\" href=\"javascript:void(0);\">...</a></li>";
                htmlStr += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">" + (activePageNum - 1) + "</a></li>";
                htmlStr += "<li class=\"page-item active\"><a class=\"page-link\" href=\"javascript:void(0);\">" + activePageNum + "</a></li>";
                htmlStr += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">" + (activePageNum + 1) + "</a></li>";
                htmlStr += "<li class=\"page-item disabled\"><a class=\"page-link\" href=\"javascript:void(0);\">...</a></li>";
                htmlStr += "<li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0);\">" + maxPageNum + "</a></li>";
            }
        }
        htmlStr = "<ul class=\"pagination\">" + htmlStr + "</ul>";
        $(this.ulPagingContainer).html(htmlStr);
        this.bindPageNumTurnEvent();
    };
    return Paging;
}());
exports.default = Paging;


/***/ }),

/***/ "./common/extensions/global.ts":
/*!*************************************!*\
  !*** ./common/extensions/global.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
String.prototype.isEmail = function () {
    var email = this.replace(" ", "");
    var pattern = /^([\w-.]+)@([\w_-]+\.)+([a-zA-Z0-9]+)/i;
    var flag = pattern.test(email);
    if (flag) {
        return true;
    }
    else {
        return false;
    }
};
String.prototype.iso8601ToLocal = function () {
    var str = this.replace(/T/g, ' ');
    return str;
};
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "H+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (o.hasOwnProperty(k)) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                var okValue = o[k];
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1)
                    ? okValue
                    : (("00" + okValue).substr(("" + okValue).length)));
            }
        }
    }
    return fmt;
};
String.prototype.iso8601ToDate = function () {
    return new Date(this);
};


/***/ }),

/***/ "./common/util.ts":
/*!************************!*\
  !*** ./common/util.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var getIdByRoute = function () {
    var pathInfo = location.pathname.split('/')
        .filter(function (item) {
        if (item) {
            return true;
        }
        return false;
    });
    return pathInfo[pathInfo.length - 1];
};
var pickUpUrlParams = function () {
    var url = location.search; //获取url中"?"符后的字串 
    var urlParamInfo = {
        keys: [],
        params: {},
        get: function (key) {
            return "";
        }
    };
    if (url.indexOf("?") !== -1) {
        var str = url.substr(1);
        var requestPairArr = str.split("&");
        var keyArr_1 = [];
        var params_1 = {};
        for (var i = 0; i < requestPairArr.length; i++) {
            var paramPair = requestPairArr[i].split("=");
            var key = paramPair[0].toLocaleLowerCase();
            if (params_1[key]) {
                params_1[key] = [params_1[key], unescape(paramPair[1])];
            }
            else {
                params_1[key] = unescape(paramPair[1]);
            }
            keyArr_1.push(key);
        }
        var get = function (key) {
            var lowKey = key.toLocaleLowerCase();
            if (keyArr_1.includes(lowKey)) {
                return params_1[key];
            }
            else {
                return "";
            }
        };
        urlParamInfo.keys = keyArr_1;
        urlParamInfo.params = params_1;
        urlParamInfo.get = get;
    }
    return urlParamInfo;
};
var util = {
    "getIdByRoute": getIdByRoute,
    "pickUpUrlParams": pickUpUrlParams
};
exports.default = util;


/***/ }),

/***/ "./src/ts/common/blogSummary.ts":
/*!**************************************!*\
  !*** ./src/ts/common/blogSummary.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../../../common/extensions/global */ "./common/extensions/global.ts");
__webpack_require__(/*! ../../scss/components/_blogSummary.scss */ "./src/scss/components/_blogSummary.scss");
var blogSummary = (function () {
    var buildSticky = function (isSticky, showSticky) {
        if (isSticky === void 0) { isSticky = false; }
        if (showSticky === void 0) { showSticky = false; }
        console.log(isSticky, showSticky);
        if (!showSticky)
            return "";
        if (!isSticky)
            return "";
        return '<span class="badge badge-success square badge-sticky">置顶</span>';
    };
    var createItem = function (item, showSticky) {
        if (showSticky === void 0) { showSticky = false; }
        var tags = item.Tags.split('|').map(function (tag) {
            return "<span class=\"badge badge-info\">" + tag + "</span>";
        });
        var itemStr = "<div class=\"blogInfo\">\n    <div class='b-left'>\n        <img src=\"" + item.CoverImg + "\" />\n    </div>\n    <div class='b-right'>\n        <h3>\n            <a href=\"/Essays/Details/" + item.Slug + "\">" + item.Title + "</a>" + buildSticky(item.Sticky, showSticky) + "\n        </h3>\n        <p>" + item.Introduce + "</p>\n        <div class=\"sapnContainer\">\n            <span class=\"fa fa-bookmark\" aria-hidden=\"true\">" + item.EssayType + "</span>\n            <span class=\"fa fa-tags\">\n                " + tags.join(" ") + "\n            </span>\n            <span class=\"fa fa-calendar\">" + item.Modify.iso8601ToDate().format("yyyy-MM-dd HH:mm:ss") + "</span>\n            <div class=\"pull-right\">\n                <span class=\"fa fa-eye\">" + item.ReadNum + "</span>\n                <span class=\"fa fa-thumbs-o-up\">\n                    " + item.Praise + "\n                </span><span class=\"fa fa-thumbs-o-down\">" + item.Criticize + "</span>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n    </div>\n</div>";
        return itemStr;
    };
    var createSummarys = function (blogSummaryArr, showSticky) {
        if (showSticky === void 0) { showSticky = false; }
        var html = blogSummaryArr.map(function (item) {
            return createItem(item, showSticky);
        }).join(' ');
        return html;
    };
    var create = function (data, selector, showSticky) {
        if (showSticky === void 0) { showSticky = false; }
        var summarys = createSummarys(data, showSticky);
        document.querySelector(selector).innerHTML = summarys;
    };
    return {
        create: create
    };
})();
exports.default = blogSummary;


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

/***/ "./src/ts/pages/taxonomy-tag.ts":
/*!**************************************!*\
  !*** ./src/ts/pages/taxonomy-tag.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var util_1 = __importDefault(__webpack_require__(/*! ../../../common/util */ "./common/util.ts"));
var Paging_1 = __importDefault(__webpack_require__(/*! ../../../common/Paging */ "./common/Paging.ts"));
var blogSummary_1 = __importDefault(__webpack_require__(/*! ../common/blogSummary */ "./src/ts/common/blogSummary.ts"));
var global_1 = __importDefault(__webpack_require__(/*! ../common/global */ "./src/ts/common/global.ts"));
(function () {
    var allParams = util_1.default.pickUpUrlParams();
    var taxonomyId = allParams.get("id");
    if (!taxonomyId) {
        location.href = "/Home";
    }
    var paging = new Paging_1.default("#paginationContainer", getData);
    var searchsApi = "/api/Essays/Tag";
    function getData(page) {
        if (page === void 0) { page = 1; }
        var data = {
            id: taxonomyId,
            page: page
        };
        global_1.default.showLoading();
        $.ajax({
            type: "get",
            url: searchsApi,
            data: data,
            success: function (msg) {
                if (msg.Code !== 0) {
                    return;
                }
                var pagingData = msg.Data;
                var taxonomyInfo = "<a class=\"btn btn-light\">" + pagingData.Taxonomy.Name + "</a> <small style=\"font-size:16px;\">\u5171\u6709<span class=\"bg-navy pl-1 pr-1\">" + pagingData.Taxonomy.Num + "</span>\u6587\u7AE0</small>";
                $("#taxonomy").html(taxonomyInfo);
                blogSummary_1.default.create(pagingData.Essays, '#bIContainer');
                paging.createPagingLi(pagingData.PageIndex, pagingData.TotalPages);
            },
            complete: function () {
                global_1.default.hideLoading();
            }
        });
    }
    var page = allParams.get("page");
    if (!page) {
        getData();
    }
    else {
        getData(parseInt(page));
    }
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/pages/taxonomy-tag.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=taxonomy-tag.bundle.js.map