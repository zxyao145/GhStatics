/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/components/_essay-style.scss":
/*!***********************************************!*\
  !*** ./src/scss/components/_essay-style.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/commentZ.scss":
/*!*******************************************!*\
  !*** ./src/scss/components/commentZ.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/pages/essays-details.scss":
/*!********************************************!*\
  !*** ./src/scss/pages/essays-details.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./common/tinyMceConfig.js":
/*!*********************************!*\
  !*** ./common/tinyMceConfig.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/// <reference path="../libs/tinymce/5.2.0/plugins/lineheight/plugin.min.js" />
/// <reference path="../libs/tinymce/5.2.0/plugins/lineheight/plugin.min.js" />

const editorUpApi = {
    comment: {
        image: '/api/Editor/CommentImg',
        file: '/api/Editor/CommentFile'
    },
    blog: {
        image: '/api/Editor/BlogImg',
        file: '/api/Editor/BlogFile'
    }
}

const cdn = "https://cdn.jsdelivr.net/gh/zxyao145/JsDelivr@202206237/zxyao.net/assets";;


const tinymceUploadConfig = {
    file: {
        uploadUrl: 'TinyUploadFile',
        accept: [
            {
                title: '文档',
                extensions: 'doc,docx,xls,xlsx,ppt,pptx,pdf',
                mimeTypes:
                    'application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,' +
                        'application/vnd.ms-excel,application/x-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,' +
                        'application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,' +
                        'application/pdf'
            },
            {
                title: '压缩文件',
                extensions: 'rar,zip,7z',
                mimeTypes: 'application/octet-stream,application/x-zip-compressed,.7z'
            },
            {
                title: '图片',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/gif,image/jpeg,image/bmp,image/png'
            },
            {
                title: '音视频',
                extensions: 'flv,mkv,mp4,webm,mp3,wav',
                mimeTypes: 'audio/wav,audio/mpeg,video/flv,video/mkv,video/mp4,video/webm'
            }
        ]
    },
    image: {
        uploadUrl: 'TinyUploadImage',
        accept: [
            {
                title: '图片',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/gif,image/jpeg,image/bmp,image/png'
            }
        ]

    },
    media: {
        uploadUrl: 'TinyUploadVideo',
        accept: [
            {
                title: '音视频',
                extensions: 'flv,mkv,mp4,webm,mp3,wav',
                mimeTypes: 'audio/wav,audio/mpeg,video/flv,video/mkv,video/mp4,video/webm'
            }
        ]
    }
};

const tinyMceUploadImage = function (url, blobInfo, success, failure, basePath = "") {
    var xhr, formData;
    xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open('POST', url);
    xhr.onload = function () {
        var json;
        if (xhr.status != 200) {
            failure('HTTP Error: ' + xhr.status);
            return;
        }
        json = JSON.parse(xhr.responseText);

        if (!json || typeof json.Data.Url != 'string') {
            failure('Invalid JSON: ' + xhr.responseText);
            return;
        }
        success(basePath + json.Data.Url);
    };
    formData = new FormData();
    var file = blobInfo.blob();
    formData.append('file', file, blobInfo.filename());
    xhr.send(formData);
};

const tinyMceFileBrowserCallback = function (field_name, url, type, win) {
    var uploadConfig;
    var titleInputOff = 0;
    switch (type) {
        case 'file':
            uploadConfig = tinymceUploadConfig.file;
            titleInputOff = 1;
            break;
        case 'image':
            uploadConfig = tinymceUploadConfig.image;
            titleInputOff = 1;
            break;
        case 'media':
            uploadConfig = tinymceUploadConfig.media;
            titleInputOff = 0;
            break;
        default:
            uploadConfig = tinymceUploadConfig.file;
            titleInputOff = 0;
    }
    var allmimeTypes = '';
    $.each(uploadConfig.accept, function (index, item) {
        allmimeTypes += item.mimeTypes + ',';
    });
    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', allmimeTypes);
    input.onchange = function () {
        var file = this.files[0];
        
        var xhr, formData;
        xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open('POST', url);
        xhr.onload = function () {
            var json;
            if (xhr.status != 200) {
                failure('HTTP Error: ' + xhr.status);
                return;
            }
            json = JSON.parse(xhr.responseText);

            if (!json  ) {
                failure('Invalid JSON: ' + xhr.responseText);
                return;
            }
            //success
            var files = json.Data;

            {
                win.document.getElementById(field_name).value =
                    '/Services/FileService.ashx?Action=Get&Name=' + files[0].url;
                if (titleInputOff == 0) return;
                var inputlist = win.document.getElementsByTagName('input');
                for (var i = 0; i < inputlist.length; i++) {
                    if (inputlist[i].id == field_name) {
                        if (i + titleInputOff < inputlist.length)
                            inputlist[i + titleInputOff].value = files[0].fileName;
                        break;
                    }
                }
            }
        };
        formData = new FormData();
        formData.append('file', file, blobInfo.filename());
        xhr.send(formData);
    };
    input.click();
};

const filePickerCallback = function (url, callback, value, meta) {
    var uploadConfig;
    var type = meta.filetype;
    switch (type) {
    case 'file':
        uploadConfig = tinymceUploadConfig.file;
        break;
    case 'image':
        uploadConfig = tinymceUploadConfig.image;
        break;
    case 'media':
        uploadConfig = tinymceUploadConfig.media;
        break;
    default:
        uploadConfig = tinymceUploadConfig.file;
    }
    var allmimeTypes = '';
    $.each(uploadConfig.accept, function (index, item) {
        allmimeTypes += item.mimeTypes + ',';
    });

    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', allmimeTypes);
    input.onchange = function () {
        var file = this.files[0];
        var xhr, formData;
        xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open('POST', url);
        xhr.onload = function () {
            var json;
            if (xhr.status != 200) {
                failure('HTTP Error: ' + xhr.status);
                return;
            }
            json = JSON.parse(xhr.responseText);
            if (!json || typeof json.Data.Url != 'string') {
                failure('Invalid JSON: ' + xhr.responseText);
                return;
            }
            callback(json.Data.Url);
        };
        formData = new FormData();
        formData.append('file', file, file.name);
        xhr.send(formData);
    }
    input.click();
}


const tinyMceConfig = {
    "basic": {
        plugins: [
            'link image lists  hr anchor emoticons',
            'searchreplace wordcount fullscreen insertdatetime media nonbreaking',
            'save table contextmenu paste textcolor codesample'
        ],
        menubar: false,
        statusbar: false,
        toolbar:
            'undo redo | removeformat | emoticons | bold italic underline strikethrough | forecolor backcolor | codesample blockquote | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media table  hr',
        paste_word_valid_elements: "b,strong,i,em,h1,h2",
        image_advtab: true, //开启图片上传的高级选项功能
        image_title: false, // 是否开启图片标题设置的选择，这里设置否
        automatic_uploads: true, //开启点击图片上传时，自动进行远程上传操作
        paste_data_images: true,
        images_upload_handler:
            function (blobInfo, success, failure) {
                var url = editorUpApi.comment.image;
                tinyMceUploadImage(url, blobInfo, success, failure, "");
            },
        file_picker_callback: function(callback, value, meta) {
            var url = editorUpApi.comment.file;
            filePickerCallback(url, callback, value, meta);
        }
    },
    "full": {
        plugins: [
            'code link image lists hr anchor textpattern emoticons',
            'searchreplace wordcount fullscreen insertdatetime media nonbreaking',
            'save table contextmenu powerpaste textcolor lineheight indent2em codesample'
        ],
        external_plugins: {
            'lineheight': cdn + '/libs/tinymce/5.2.0/plugins/lineheight/plugin.min.js',
            'indent2em': cdn +'/libs/tinymce/5.2.0/plugins/indent2em/plugin.min.js',
            'powerpaste': cdn + '/libs/tinymce/5.2.0/plugins/powerpaste/plugin.min.js',
        },
        //menubar: 'edit insert format table tools',
        menubar: false,
        toolbar:
            'undo redo | pastetext | removeformat | formatselect fontselect fontsizeselect lineheightselect bold italic underline strikethrough | codesample blockquote | indent2em alignleft aligncenter alignright alignjustify | forecolor backcolor |  superscript subscript | bullist numlist  outdent indent | link image media table  hr | fullscreen code | emoticons',
        paste_word_valid_elements: "b,strong,i,em,h1,h2",
        image_advtab: true, //开启图片上传的高级选项功能
        image_title: false, // 是否开启图片标题设置的选择，这里设置否
        automatic_uploads: true, //开启点击图片上传时，自动进行远程上传操作

        paste_data_images: true,
        powerpaste_allow_local_images: true,
        powerpaste_word_import: "propmt",
        powerpaste_html_import: 'propmt',
        images_upload_handler:
            function (blobInfo, success, failure) {
                var url = editorUpApi.blog.image;
                tinyMceUploadImage(url, blobInfo, success, failure, "");
            },
        file_picker_callback: function (callback, value, meta) {
            var url = editorUpApi.blog.file;
            filePickerCallback(url, callback, value, meta);
        },
        file_browser_callback: function (field_name, url, type, win) {
            tinyMceFileBrowserCallback(field_name, url, type, win);
        },
        //markdown
        textpattern_patterns: [
            { start: '#', format: 'h1' },
            { start: '##', format: 'h2' },
            { start: '###', format: 'h3' },
            { start: '####', format: 'h4' },
            { start: '#####', format: 'h5' },
            { start: '######', format: 'h6' },
            { start: '*', end: '*', format: 'italic' },
            { start: '**', end: '**', format: 'bold' },
            { start: '* ', cmd: 'InsertUnorderedList' },
            { start: '- ', cmd: 'InsertUnorderedList' },
            { start: '1. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' } },
            { start: '1) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' } },
            { start: 'a. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' } },
            { start: 'a) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' } },
            { start: 'i. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' } },
            { start: 'i) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' } }
        ]
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tinyMceConfig);

/***/ }),

/***/ "./common/TinyMceHelper.ts":
/*!*********************************!*\
  !*** ./common/TinyMceHelper.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var tinymce = __importStar(__webpack_require__(/*! tinymce */ "tinymce"));
// @ts-ignore TS7016
var tinyMceConfig = __importStar(__webpack_require__(/*! ./tinyMceConfig.js */ "./common/tinyMceConfig.js"));
var cdn = "https://cdn.jsdelivr.net/gh/zxyao145/JsDelivr@202206237/zxyao.net/assets";
var primseHighLight = function () {
    var allUeditorPreCode = $("#tinymce");
    allUeditorPreCode.each(function () {
        var $this = $(this);
        var classVal = $this.attr('class');
        var classArr = classVal.split(';');
        classArr = classArr[0].split(':');
        var lanClass = 'language-' + classArr[1];
        $this.addClass("line-numbers")
            .css("white-space", "pre-wrap");
        $this.children('code').addClass(lanClass);
        //var pre_content = '<code class="' + lan_class + '">' + $(this).children('code').html() + '</code>';
        //$(this).html(pre_content);
    });
    window.Prism.highlightAll(); //js代码中调用此方法
};
var safeSetContent = function (editor, content) {
    if (editor.initialized) {
        editor.setContent(content);
    }
    else {
        window.setTimeout(function () {
            safeSetContent(editor, content);
        }, 2000);
    }
};
var tinyMceLoader = {
    init: function (selector, tinymceType, height, width, otherConfig, onReady) {
        if (selector === void 0) { selector = "#tinyEditor"; }
        if (tinymceType === void 0) { tinymceType = "basic"; }
        if (height === void 0) { height = 440; }
        if (width === void 0) { width = "100%"; }
        if (otherConfig === void 0) { otherConfig = null; }
        if (onReady === void 0) { onReady = null; }
        var lineheightFormats = "1 1.25 1.4 1.5 1.75 1.8 2";
        if (tinymceType === 'full') {
            lineheightFormats = '1 1.25 1.4 1.5 1.6 1.75 1.8 2 3 4 5';
        }
        var config = {
            selector: selector,
            init_instance_callback: function (editor) {
                typeof onReady === 'function' && onReady();
                //editor.setContent($(selector).val());
                editor.on('blur', function (e) {
                    $(selector).val(editor.getContent());
                });
                //editor.execCommand("fontName", false, "Arial");
                //editor.execCommand("fontSize", false, "12pt");
            },
            language: 'zh_CN',
            language_url: cdn + '/libs/tinymce/5.2.0/langs/zh_CN.js',
            width: width,
            height: height,
            theme: 'silver',
            relative_urls: false,
            browser_spellcheck: false,
            fontsize_formats: "8pt 10pt 12pt 14pt 16pt 18pt 20pt 22pt 24pt 28pt 20pt 36pt",
            font_formats: "Times New Roman=times new roman,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;微软雅黑='微软雅黑';宋体='宋体';黑体='黑体';仿宋='仿宋';楷体='楷体';隶书='隶书'",
            lineheight_formats: lineheightFormats,
            paste_enable_default_filters: true,
            //prism js language list
            codesample_languages: [
                { text: 'C#', value: 'csharp' },
                { text: 'HTML/XML', value: 'markup' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'TypeScript', value: 'ts' },
                { text: 'Scss', value: 'scss' },
                { text: 'Python', value: 'python' },
                { text: 'Java', value: 'java' },
                { text: 'Markdown', value: 'md' },
                { text: 'YAML', value: 'yml' },
                { text: 'JSON', value: 'json' },
                { text: 'SQL', value: 'sql' },
                { text: 'Bash', value: 'bash' },
                { text: 'C', value: 'c' },
                { text: 'C++', value: 'cpp' }
            ],
        };
        if (otherConfig) {
            $.extend(config, otherConfig);
        }
        $.extend(config, tinyMceConfig[tinymceType]);
        tinymce.init(config);
    },
    setContent: function (content, selector) {
        if (selector === void 0) { selector = "tinyEditor"; }
        safeSetContent(tinymce.get(selector), content);
    },
    getContent: function (selector) {
        if (selector === void 0) { selector = "tinyEditor"; }
        var editor = tinymce.get(selector);
        if (editor.initialized) {
            return editor.getContent();
        }
        else {
            return null;
        }
    }
};
exports.default = tinyMceLoader;


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

/***/ "./src/ts/components/comment/CommentZ.ts":
/*!***********************************************!*\
  !*** ./src/ts/components/comment/CommentZ.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../../../../common/extensions/global */ "./common/extensions/global.ts");
var TinyMceHelper_1 = __importDefault(__webpack_require__(/*! ../../../../common/TinyMceHelper */ "./common/TinyMceHelper.ts"));
var tinymce = __importStar(__webpack_require__(/*! tinymce */ "tinymce"));
__webpack_require__(/*! ../../../scss/components/commentZ.scss */ "./src/scss/components/commentZ.scss");
var CommentZ = /** @class */ (function () {
    function CommentZ(setting) {
        this.$selectorDom = null;
        this.$showReplyBox = null;
        this.setting = setting;
        this.page = 1;
        if (this.setting.paging) {
            if (!this.setting.pageCommentSize) {
                this.setting.pageCommentSize = 10;
            }
        }
        this.$showReplyBox = null;
    }
    CommentZ.prototype.init = function () {
        var _this = this;
        this.$selectorDom = $(this.setting.selector);
        var commentHtml = "\n<div class=\"cz-container\">\n    <div class=\"row\">\n        <textarea id=\"cz-editor\"></textarea>\n    </div>\n    <div class=\"row cz-tool\" style=\"margin-top: 2rem;\">\n        <div class=\"col-md-5 col-sm-4 col-12 form-group\" style=\"line-height: 34px;\">\n            <input id=\"cz-nickName\" type=\"text\" required=\"required\" class=\"form-control\" placeholder=\"\u6635\u79F0(\u9650\u957F:8)\" maxlength=\"8\" />\n        </div>\n        <div class=\"col-md-5 col-sm-4 col-12 form-group\" style=\"line-height: 34px;\">\n            <input id=\"cz-email\" type=\"email\" required=\"required\" class=\"form-control\" placeholder=\"\u90AE\u7BB1\" />\n        </div>\n\n        <div class=\"col-md-2 col-sm-4 col-12 form-group\">\n            <div class=\"pull-right\">\n                <button class=\"btn btn-primary pull-right\" id=\"cz-submit\">\u8BC4\u8BBA</button>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n    </div>\n    <div id=\"cz-comments\" class=\"mt-4\"></div>\n</div>";
        this.$selectorDom.html(commentHtml);
        this.queryComments();
        TinyMceHelper_1.default.init("#cz-editor", "basic", "240");
        var that = this;
        $("#cz-submit").click(function (e) {
            e.preventDefault();
            var content = tinymce.get('cz-editor').getContent();
            var nickName = $("#cz-nickName", that.$selectorDom).val();
            var email = $("#cz-email", that.$selectorDom).val();
            var comment = {
                NickName: nickName,
                Content: content,
                Email: email,
                Create: CommentZ.getNowDateFormat()
            };
            that.submitComment(comment, function (newComment) {
                //TODO 更新楼层
                var createComment = that.createComment(newComment, '新');
                $("#cz-comments", that.$selectorDom).prepend(createComment);
                _this.clear();
            });
        });
    };
    CommentZ.prototype.clear = function () {
        tinymce.get('cz-editor').setContent("");
        $("#cz-nickName", this.$selectorDom).val("");
        $("#cz-email", this.$selectorDom).val("");
    };
    CommentZ.prototype.parseData = function (data) {
        this.createComments(data);
    };
    CommentZ.prototype.createReplyComment = function (replyObj) {
        return "<div class=\"reply\" id='cz-" + replyObj.Id + "' data-id=\"" + replyObj.Id + "\">\n            <div class=\"cz-reply-name\"><a href=\"javascript:void(0)\">" + replyObj.NickName + "</a>:<a href=\"#cz-" + replyObj.ReplyId + "\">@" + replyObj.ReplyName + "</a></div>\n            <p>" + replyObj.Content + "</p>\n            <div class='reply-footer'><span>" + replyObj.Create.iso8601ToDate().format("yyyy-MM-dd HH:mm:ss") + "</span><span class=\"reply-list-btn\">\u56DE\u590D</span></div>\n        </div>";
    };
    CommentZ.prototype.createComment = function (comment, index) {
        var replyComments = '';
        if (comment.ReplyBody !== null && comment.ReplyBody.length > 0) {
            var that_1 = this;
            replyComments = comment.ReplyBody.map(function (item) {
                return that_1.createReplyComment(item);
            }).join(' ');
        }
        var commentHtml = "<div class=\"comment-info\"  data-id=\"" + comment.Id + "\">\n            <div class=\"comment-left\">\n                <header class='hidden-sm hidden-xs'>\n                    <span><b>#" + index + "\u697C</b></span>\n                </header>\n            </div>\n            <div class=\"comment-right\" id='cz-" + comment.Id + "'>\n                <div class='cz-uname'>" + comment.NickName + "</div>\n                <div class=\"comment-content-header\"><span><i class=\"fa fa-clock-o\"></i> " + comment.Create.iso8601ToDate().format("yyyy-MM-dd HH:mm:ss") + "</span></div>\n                <div class=\"content\">\n                    " + comment.Content + "\n                </div>\n                <div class=\"comment-content-footer\">\n                    <div class=\"row\">                        \n                        <div class=\"col-12\"><span class=\"reply-btn\">\u56DE\u590D</span></div>\n                    </div>\n                </div>\n                <div class=\"reply-list\">" + replyComments + "</div>\n            </div>\n        </div>";
        return commentHtml;
    };
    CommentZ.prototype.createComments = function (comments) {
        var $czComments = $("#cz-comments", this.$selectorDom);
        var that = this;
        var commentsContent = comments.map(function (item, index) {
            return that.createComment(item, index + 1);
        }).join(" ");
        $czComments.html(commentsContent);
        $czComments.find(".reply-btn").click(function (e) {
            that.replyClick(e.target);
        });
        $czComments.find(".reply-list-btn").click(function (e) {
            that.replyClick(e.target);
        });
    };
    CommentZ.prototype.replyClick = function (element) {
        var _this = this;
        var el = $(element);
        var $replyBoxContainer = el.parent().parent();
        var $newReplyBox = $replyBoxContainer.children(".replybox");
        if ($newReplyBox.length > 0) {
            if (this.$showReplyBox[0].isEqualNode($newReplyBox[0])) {
                this.$showReplyBox.remove();
                this.$showReplyBox = null;
                tinymce.get("cz-reply-editor").remove();
                return;
            }
        }
        else {
            if (this.$showReplyBox !== null) {
                this.$showReplyBox.remove();
                this.$showReplyBox = null;
                tinymce.get("cz-reply-editor").remove();
            }
        }
        var replyHtml = "<div class='replybox'>\n                <textarea id='cz-reply-editor' cols='80' rows='50' placeholder='\u6765\u8BF4\u51E0\u53E5\u5427......' class='mytextarea'></textarea>\n                <div class=\"row cz-tool\">\n                    <div class=\"col-md-5 col-sm-4 col-12 form-group\" style=\"line-height: 34px;\">\n                        <input id=\"nickName2\" type=\"text\" required=\"required\" class=\"form-control\" placeholder=\"\u6635\u79F0(\u9650\u957F:8)\" maxlength=\"8\" data-cip-id=\"cz-nickName\">\n                    </div>\n                    <div class=\"col-md-5 col-sm-4 col-12 form-group\" style=\"line-height: 34px;\">\n                        <input id=\"ema2\" type=\"email\" required=\"required\" class=\"form-control\" placeholder=\"\u90AE\u7BB1\" data-cip-id=\"cz-email\">\n                    </div>\n\n                    <div class=\"col-md-2 col-sm-4 col-12 form-group send-container\">\n                        <span class='send'>\u53D1\u9001</span>\n                    </div>\n                </div>\n            </div>";
        var $replyHtml = $(replyHtml);
        this.$showReplyBox = $replyHtml;
        console.log("submit");
        $replyHtml.find(".send").click(function (e) {
            var $this = $(e.target);
            var content = tinymce.get("cz-reply-editor").getContent(); //$("#cz-reply-editor").val();
            var parentEl = $this.parents('.comment-right');
            var nickName = $("#nickName2").val();
            var ema = $("#ema2").val();
            var id, beReplyName;
            console.log(el[0]);
            if (el.hasClass("reply-list-btn")) {
                var $repltParent = el.parents(".reply");
                id = $repltParent.data("id");
                beReplyName = $repltParent
                    .children(".cz-reply-name")
                    .children("a").eq(0).text();
            }
            else {
                id = el.parents(".comment-info").data("id");
                beReplyName = el
                    .parents(".comment-right")
                    .children(".cz-uname")
                    .text();
            }
            console.log(beReplyName);
            var obj = {
                ReplyId: id,
                Img: "N",
                NickName: nickName,
                Content: content,
                Email: ema
            };
            _this.submitComment(obj, function (newComment) {
                newComment.ReplyName = beReplyName;
                console.log(_this);
                var replyString = _this.createReplyComment(newComment);
                $(".replybox").remove();
                var $replyString = $(replyString);
                $replyString.find(".reply-list-btn:last").click(function () {
                    alert("不能回复自己");
                    return;
                });
                parentEl.find(".reply-list").append($replyString);
            });
        });
        //评论回复事件
        $replyBoxContainer.append($replyHtml);
        TinyMceHelper_1.default.init("#cz-reply-editor", "basic", 200);
    };
    CommentZ.prototype.submitComment = function (comment, callBack) {
        if (!comment.Content) {
            alert("回复内容不能为空！");
            return;
        }
        if (!comment.NickName) {
            alert("昵称不能为空！");
            return;
        }
        if (!comment.Email) {
            alert("邮箱不能为空！");
            return;
        }
        if (!comment.Email.isEmail()) {
            alert("邮箱格式不正确！");
            return;
        }
        if (!comment.Create) {
            comment.Create = CommentZ.getNowDateFormat();
        }
        this.setting.commentSubmit(comment, function (newComment) {
            typeof callBack === "function" && callBack(newComment);
        });
    };
    CommentZ.prototype.queryComments = function (page) {
        if (page === void 0) { page = 1; }
        if (this.setting.paging) {
            this.page = page;
            this.setting.queryComments(this, page, this.setting.pageCommentSize);
        }
        else {
            this.setting.queryComments(this);
        }
    };
    /**
     *
     * Start 时间处理
     */
    CommentZ.getNowDateFormat = function () {
        var nowDate = new Date();
        var year = nowDate.getFullYear();
        var month = CommentZ.filterNum(nowDate.getMonth() + 1);
        var day = CommentZ.filterNum(nowDate.getDate());
        var hours = CommentZ.filterNum(nowDate.getHours());
        var min = CommentZ.filterNum(nowDate.getMinutes());
        var seconds = CommentZ.filterNum(nowDate.getSeconds());
        return year + "-" + month + "-" + day + " " + hours + ":" + min + ":" + seconds;
    };
    CommentZ.filterNum = function (num) {
        if (num < 10) {
            return "0" + num;
        }
        else {
            return num;
        }
    };
    return CommentZ;
}());
exports.CommentZ = CommentZ;
exports.default = CommentZ;


/***/ }),

/***/ "./src/ts/pages/essays-details.ts":
/*!****************************************!*\
  !*** ./src/ts/pages/essays-details.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../../../common/extensions/global */ "./common/extensions/global.ts");
var util_1 = __importDefault(__webpack_require__(/*! ../.././../common/util */ "./common/util.ts"));
var CommentZ_1 = __webpack_require__(/*! ../components/comment/CommentZ */ "./src/ts/components/comment/CommentZ.ts");
var global_1 = __importDefault(__webpack_require__(/*! ../common/global */ "./src/ts/common/global.ts"));
var tinyMceConfig_1 = __importDefault(__webpack_require__(/*! ../../../common/tinyMceConfig */ "./common/tinyMceConfig.js"));
__webpack_require__(/*! ../../scss/pages/essays-details.scss */ "./src/scss/pages/essays-details.scss");
__webpack_require__(/*! ../../scss/components/_essay-style.scss */ "./src/scss/components/_essay-style.scss");
(function () {
    var loadingCount = 0;
    function hideLoading() {
        loadingCount += 1;
        if (loadingCount > 1) {
            global_1.default.hideLoading();
        }
    }
    var id = util_1.default.getIdByRoute();
    var getIFrame = function () {
        var url = "https://www.zxyao.net/Essays/Shared/" + id;
        var iframe = "<iframe src='" + url + "' frameborder='0'  width='100%' height='100%'></iframe>";
        return iframe;
    };
    var essayDtailsApi = "/api/Essays/Details?slug=";
    var buildEssay = function (essayData) {
        var tags = essayData.Tags.split('|').map(function (tag) {
            return "<span class=\"badge  badge-info\">" + tag + "</span>";
        }).join(' ');
        var updateStr = "";
        if (essayData.Create !== essayData.Modify) {
            updateStr = ",&nbsp;&nbsp;更新于" +
                essayData.Modify
                    .iso8601ToDate().format("yyyy-MM-dd");
        }
        var essay = "<article data-id='" + essayData.Id + "'>\n                <aside class=\"top\">\n                    <h3><strong>" + essayData.Title + "</strong></h3>";
        if (location.pathname.toLowerCase().indexOf('essays/shared/') > -1) {
            essay += '<div style="margin-bottom:20px;margin-top:-10px;">&copy; <b>半野</b> 原载于<a href="https://www.zxyao.net/Essays/Details/' + id + '"> <b>www.zxyao.net</b></a></div>';
        }
        essay += "<span class=\"fa fa-bookmark\">" + essayData.EssayType + "</span>\n                    <span class=\"fa fa-tags\">\n                        " + tags + "\n                    </span><br />\n                    <span class=\"fa fa-calendar\">\n                        \u5199\u4E8E" + (essayData.Create.iso8601ToDate().format("yyyy-MM-dd") + updateStr) + "\n                    </span>\n                    <span class=\"fa fa-eye\">" + essayData.ReadNum + "</span>\n                </aside>\n                <section>" + essayData.Content + "</section>\n\n                <aside class=\"down\">\n                    <span class=\"fa fa-thumbs-o-up\">" + essayData.Praise + "</span>\n                    <span class=\"fa fa-thumbs-o-down\">" + essayData.Criticize + "</span>\n                    <span class=\"fa fa-share\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"" + ('点击复制：' + getIFrame()) + "\">\u8F6C\u8F7D</span>\n                </aside>\n            </article>";
        return essay;
    };
    var buildToc = function (catalog) {
        if (catalog && catalog !== 'none') {
            var aArr = catalog.split("</a>");
            return aArr.map(function (item) {
                var realA = item + "</a>";
                return "<li>" + realA + "</li>";
            }).join(' ');
        }
        else {
            return '<li>本文没有目录</li>';
        }
    };
    var buildSEO = function (essayData) {
        $("head>title").html(essayData.Title);
        var keywordsContent = $("meta[name='keywords']")
            .attr("content");
        var newKeywordsContent = essayData.Tags.split("|").join(",");
        keywordsContent += "," + essayData.EssayType + "," + newKeywordsContent;
        $("meta[name='keywords']").attr("content", keywordsContent);
        $("meta[name='description']").attr("content", essayData.Introduce);
        $("meta[name='title']").attr("content", essayData.Title);
    };
    var parseData = function (data) {
        buildSEO(data);
        var essay = buildEssay(data);
        $("#essayDetails").html(essay);
        var toc = buildToc(data.Catalog);
        $('#myNav').html(toc);
        //editor to highlighjs
        var allUeditorPreCode = $("#essayDetails pre[class^='brush']");
        allUeditorPreCode.each(function () {
            var $this = $(this);
            var classVal = $this.attr('class');
            var classArr = classVal.split(';');
            classArr = classArr[0].split(':');
            var lanClass = 'language-' + classArr[1];
            $this.addClass("line-numbers")
                .css("white-space", "pre-wrap");
            $this.children('code').addClass(lanClass);
            //var pre_content = '<code class="' + lan_class + '">' + $(this).children('code').html() + '</code>';
            //$(this).html(pre_content);
        });
        $("#essayDetails pre[class^='language']").addClass("line-numbers")
            .css("white-space", "pre-wrap");
        window.Prism.highlightAll(); //js代码中调用此方法
        upOrDownEventBind(data.Id);
        $('[data-toggle="tooltip"]').tooltip();
    };
    $.ajax({
        type: "get",
        url: essayDtailsApi + id,
        success: function (msg) {
            if (msg.Code === 0) {
                parseData(msg.Data);
            }
            else {
                location.href = "/Home/Error/404";
            }
        },
        complete: function () {
            hideLoading();
        }
    });
    function upOrDownEventBind(essayId) {
        var upOrDownApi = "/api/Essays/UpOrDown";
        //赞和踩
        $("#essayDetails .fa-thumbs-o-up").click(function () {
            upOrDown('up');
        });
        $("#essayDetails .fa-thumbs-o-down").click(function () {
            upOrDown('down');
        });
        $("#essayDetails .fa-share").click(function () {
            var input = document.createElement('input');
            document.body.appendChild(input);
            input.setAttribute('value', getIFrame());
            input.select();
            if (document.execCommand('copy')) {
                document.execCommand('copy');
                console.log('复制成功');
            }
            document.body.removeChild(input);
        });
        var submitData = function (data, callback) {
            $.ajax({
                url: upOrDownApi,
                type: "POST",
                data: data,
                complete: function () {
                },
                success: function (msg) {
                }
            });
        };
        function upOrDown(type) {
            var key = "Attitude" + essayId;
            var className = ".fa-thumbs-o-" + type; //赞还是踩的类名
            var value; //赞还是踩的数量
            var cookie; //当前cookie json 字符串
            if (!$.cookie(key)) {
                submitData({ "Id": essayId, "type": type, "oper": "p" });
                value = parseInt($(className).text()) + 1;
                $(className).text(value);
                cookie = '{"type":"' + type + '","value":' + value + ',"time":1}';
                $.cookie(key, cookie);
            }
            else {
                var ck = JSON.parse($.cookie(key));
                //等于4的时候，再次执行就变成了5，即第三次机会已经使用
                if (ck.time < 5) {
                    if (ck.time % 2 === 1) {
                        //ck.time % 2 === 1,意味着是取消表态，要求点击的必须是上次表态的按钮
                        if (type === ck.type) {
                            submitData({ "Id": essayId, "type": type, "oper": "r" });
                            value = ck.value - 1;
                        }
                        else {
                            alert("您已经表过态啦，可以再次点击取消赞或踩。");
                            return;
                        }
                    }
                    else {
                        //(ck.time % 2) === 0 意味着是重新表态
                        submitData({ "Id": essayId, "type": type, "oper": "p" });
                        value = ck.value + 1;
                    }
                    $(className).text(value);
                    cookie = '{"type":"' + type + '","value":' + value + ',"time":' + (ck.time + 1) + '}';
                    $.cookie(key, cookie);
                }
                else {
                    alert("最多只有三次更改的机会，您已经用完啦！");
                }
            }
        }
    }
    //评论操作
    var commentsApi = "/api/Essays/Comments?Id=" + id;
    var submitCommentApi = "/api/Essays/SubmitComment";
    var queryEssayComments = function (commentZ) {
        $.ajax({
            type: "get",
            url: commentsApi,
            success: function (msg) {
                if (msg.Code === 0) {
                    commentZ.parseData(msg.Data);
                }
            },
            complete: function () {
                hideLoading();
            }
        });
    };
    var submitComment = function (comment, callBack) {
        var formData = new FormData();
        for (var prop in comment) {
            if (comment.hasOwnProperty(prop)) {
                formData.append(prop, comment[prop]);
            }
        }
        formData.append("essayId", id);
        global_1.default.showLoading("操作中...");
        $.ajax({
            url: submitCommentApi,
            type: 'post',
            processData: false,
            contentType: false,
            data: formData,
            success: function (msg) {
                if (msg.Code === 0) {
                    typeof callBack === "function" && callBack(msg.Data);
                }
            },
            complete: function () {
                global_1.default.hideLoading();
                global_1.default.alert("评论成功");
            }
        });
    };
    var commentZSetting = {
        selector: "#commentBox",
        editorConfig: tinyMceConfig_1.default["basic"],
        queryComments: queryEssayComments,
        commentSubmit: submitComment,
        paging: false
    };
    var commentZ = new CommentZ_1.CommentZ(commentZSetting);
    commentZ.init();
})();


/***/ }),

/***/ "tinymce":
/*!**************************!*\
  !*** external "tinymce" ***!
  \**************************/
/***/ ((module) => {

module.exports = tinymce;

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/pages/essays-details.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=essays-details.bundle.js.map