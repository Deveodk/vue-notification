(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueNotification"] = factory();
	else
		root["VueNotification"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
__webpack_require__(5)
__vue_script__ = __webpack_require__(1)
__vue_template__ = __webpack_require__(6)
module.exports = __vue_script__ || {}
if (module.exports.__esModule) module.exports = module.exports.default
if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
if (false) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  var id = "/Users/jasonkelly/Development/packages/vue-notification/src/components/notification.vue"
  if (!module.hot.data) {
    hotAPI.createRecord(id, module.exports)
  } else {
    hotAPI.update(id, module.exports, __vue_template__)
  }
})()}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// <template>
//
//     <div class="notification-wrapper" v-if="showing" v-on:click="hide()">
//
//         <div class="notification" :class="alertType">
//             <div class="noti-icon">
//                 <i :class="iconType" class="fa"></i>
//             </div>
//             <div class="noti-text">
//                 <div class="noti-headline">
//                     {{header}}
//                 </div>
//                 <div class="noti-description">
//                     {{content}}
//                 </div>
//             </div>
//         </div>
//
//     </div>
// </template>
// <style>
//     @keyframes fadein{
//         from {
//             transform: scale(0);
//         }
//         to {
//             transform: scale(1);
//         }
//     }
//     .notification-wrapper{
//         position: fixed;
//         right: 50px;
//         bottom: 50px;
//         z-index: 1000000;
//         animation-duration: 1s;
//         animation-name: fadein;
//         animation-iteration-count: 1;
//         animation-direction: alternate;
//     }
//     body .notification-wrapper:nth-of-type(7){bottom: 450px!important;}
//     body .notification-wrapper:nth-of-type(6){bottom: 350px!important;}
//     body .notification-wrapper:nth-of-type(5){bottom: 250px!important;}
//     body .notification-wrapper:nth-of-type(4){bottom: 150px!important;}
//     body .notification-wrapper:nth-of-type(3){bottom: 50px!important;}
//     .notification{
//         z-index: 1000000;
//         min-width: 300px;
//         height: 80px;
//         opacity: 0.95;
//         background: #fff;
//         border-radius: 4px;
//         box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 10px 0 rgba(0, 0, 0, 0.08);
//     }
//     .noti-icon{
//         width: 80px;
//         float: left;
//         text-align: center;
//         line-height: 80px;
//         font-size: 30px;
//         background: #f4f8fb;
//         color: #fff;
//         border-radius: 4px 0px 0px 4px;
//     }
//     .noti-text{
//         padding-left: 100px;
//         padding-right: 20px;
//         border-radius: 4px;
//     }
//     .noti-headline{
//         padding-top: 20px;
//         font-weight: bold;
//         height: 20px;
//         line-height: 20px;
//         font-size: 16px;
//         color: #555;
//     }
//     .noti-description{
//         height: 20px;
//         line-height: 20px;
//         font-size: 14px;
//         padding-top: 20px;
//         padding-bottom: 20px;
//         display: table;
//     }
//     .notification.custom-alert .noti-text{background: rgba(93,156,236,0.5);}
//     .notification.custom-alert .noti-icon{background-color: #5d9cec;}
//     .notification.custom-error .noti-text{background: rgba(240,80,80,0.5);}
//     .notification.custom-error .noti-icon{background-color: #f05050;}
//     .notification.custom-success .noti-text{background: rgba(129,200,104,0.5);}
//     .notification.custom-success .noti-icon{background-color: #81c868;}
// </style>
// <script>
exports.default = {
    data: function data() {
        return {
            showing: true
        };
    },
    props: ['type', 'header', 'content'],
    created: function created() {},

    methods: {
        hide: function hide() {
            this.showing = false;
        }
    },
    computed: {
        alertType: function alertType() {
            switch (this.type) {
                case "alert":
                    return "custom-alert";
                    break;
                case "success":
                    return "custom-success";
                    break;
                case "error":
                    return "custom-error";
                    break;
            }
        },
        iconType: function iconType() {
            switch (this.type) {
                case "alert":
                    return "fa-bell";
                    break;
                case "success":
                    return "fa-check";
                    break;
                case "error":
                    return "fa-times";
                    break;
            }
        }
    }
};
// </script>

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "\n    @-webkit-keyframes fadein{\n        from {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n        }\n        to {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n        }\n    }\n    @keyframes fadein{\n        from {\n            -webkit-transform: scale(0);\n                    transform: scale(0);\n        }\n        to {\n            -webkit-transform: scale(1);\n                    transform: scale(1);\n        }\n    }\n    .notification-wrapper{\n        position: fixed;\n        right: 50px;\n        bottom: 50px;\n        z-index: 1000000;\n        -webkit-animation-duration: 1s;\n                animation-duration: 1s;\n        -webkit-animation-name: fadein;\n                animation-name: fadein;\n        -webkit-animation-iteration-count: 1;\n                animation-iteration-count: 1;\n        -webkit-animation-direction: alternate;\n                animation-direction: alternate;\n    }\n    body .notification-wrapper:nth-of-type(7){bottom: 450px!important;}\n    body .notification-wrapper:nth-of-type(6){bottom: 350px!important;}\n    body .notification-wrapper:nth-of-type(5){bottom: 250px!important;}\n    body .notification-wrapper:nth-of-type(4){bottom: 150px!important;}\n    body .notification-wrapper:nth-of-type(3){bottom: 50px!important;}\n    .notification{\n        z-index: 1000000;\n        min-width: 300px;\n        height: 80px;\n        opacity: 0.95;\n        background: #fff;\n        border-radius: 4px;\n        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 10px 0 rgba(0, 0, 0, 0.08);\n    }\n    .noti-icon{\n        width: 80px;\n        float: left;\n        text-align: center;\n        line-height: 80px;\n        font-size: 30px;\n        background: #f4f8fb;\n        color: #fff;\n        border-radius: 4px 0px 0px 4px;\n    }\n    .noti-text{\n        padding-left: 100px;\n        padding-right: 20px;\n        border-radius: 4px;\n    }\n    .noti-headline{\n        padding-top: 20px;\n        font-weight: bold;\n        height: 20px;\n        line-height: 20px;\n        font-size: 16px;\n        color: #555;\n    }\n    .noti-description{\n        height: 20px;\n        line-height: 20px;\n        font-size: 14px;\n        padding-top: 20px;\n        padding-bottom: 20px;\n        display: table;\n    }\n    .notification.custom-alert .noti-text{background: rgba(93,156,236,0.5);}\n    .notification.custom-alert .noti-icon{background-color: #5d9cec;}\n    .notification.custom-error .noti-text{background: rgba(240,80,80,0.5);}\n    .notification.custom-error .noti-icon{background-color: #f05050;}\n    .notification.custom-success .noti-text{background: rgba(129,200,104,0.5);}\n    .notification.custom-success .noti-icon{background-color: #81c868;}\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(4)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1eac8fd7&file=notification.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./notification.vue", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1eac8fd7&file=notification.vue!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./notification.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "\n\n    <div class=\"notification-wrapper\" v-if=\"showing\" v-on:click=\"hide()\">\n\n        <div class=\"notification\" :class=\"alertType\">\n            <div class=\"noti-icon\">\n                <i :class=\"iconType\" class=\"fa\"></i>\n            </div>\n            <div class=\"noti-text\">\n                <div class=\"noti-headline\">\n                    {{header}}\n                </div>\n                <div class=\"noti-description\">\n                    {{content}}\n                </div>\n            </div>\n        </div>\n\n    </div>\n";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var component = __webpack_require__(0);
module.exports = function () {

    return function install(Vue, options) {

        Vue.prototype.$vuenotification = function (type, header, content) {

            var Comp = Vue.extend(component);
            var vm = new Comp({
                data: {
                    type: type,
                    header: header,
                    content: content
                }
            }).$mount();
            vm.$appendTo('body');

            setTimeout(function () {
                vm.$remove();
            }, 5000);
        };
    };
}();

/***/ })
/******/ ]);
});