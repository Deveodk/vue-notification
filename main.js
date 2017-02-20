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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_script__, __vue_template__
__vue_script__ = __webpack_require__(1)
__vue_template__ = __webpack_require__(2)
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
//     <style type="text/css">
//         .notification-wrapper{
//             position: fixed;
//             right: 50px;
//             bottom: 50px;
//             z-index: 1000000;
//         }
//         .notification{
//             z-index: 1000000;
//             min-width: 300px;
//             min-height: 80px;
//             opacity: 0.95;
//             background: #fff;
//             border-radius: 4px;
//             box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 10px 0 rgba(0, 0, 0, 0.08);
//         }
//         .notification:nth-of-type(1n){
//             margin-top: 25px;
//         }
//         .noti-icon{
//             width: 80px;
//             float: left;
//             text-align: center;
//             line-height: 80px;
//             font-size: 30px;
//             background: #f4f8fb;
//             color: #fff;
//             border-radius: 4px 0px 0px 4px;
//         }
//         .noti-text{
//             padding-left: 100px;
//             padding-right: 20px;
//             border-radius: 4px;
//         }
//         .noti-headline{
//             padding-top: 20px;
//             font-weight: bold;
//             height: 20px;
//             line-height: 20px;
//             font-size: 16px;
//             color: #555;
//         }
//         .noti-description{
//             height: 20px;
//             line-height: 20px;
//             font-size: 14px;
//             padding-top: 20px;
//             padding-bottom: 20px;
//             display: table;
//         }
//         .notification.custom-alert .noti-text{background: rgba(93,156,236,0.5);}
//         .notification.custom-alert .noti-icon{background-color: #5d9cec;}
//         .notification.custom-error .noti-text{background: rgba(240,80,80,0.5);}
//         .notification.custom-error .noti-icon{background-color: #f05050;}
//         .notification.custom-success .noti-text{background: rgba(129,200,104,0.5);}
//         .notification.custom-success .noti-icon{background-color: #81c868;}
//     </style>
//
//     <div class="notification-wrapper" v-if="showing" v-on:click="hide()">
//
//         <div class="notification" :class="alertType">
//             <div class="noti-icon">
//                 <i class="fa fa-bell"></i>
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
        }
    }
};
// </script>

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "\n\n    <style type=\"text/css\">\n        .notification-wrapper{\n            position: fixed;\n            right: 50px;\n            bottom: 50px;\n            z-index: 1000000;\n        }\n        .notification{\n            z-index: 1000000;\n            min-width: 300px;\n            min-height: 80px;\n            opacity: 0.95;\n            background: #fff;\n            border-radius: 4px;\n            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 10px 0 rgba(0, 0, 0, 0.08);\n        }\n        .notification:nth-of-type(1n){\n            margin-top: 25px;\n        }\n        .noti-icon{\n            width: 80px;\n            float: left;\n            text-align: center;\n            line-height: 80px;\n            font-size: 30px;\n            background: #f4f8fb;\n            color: #fff;\n            border-radius: 4px 0px 0px 4px;\n        }\n        .noti-text{\n            padding-left: 100px;\n            padding-right: 20px;\n            border-radius: 4px;\n        }\n        .noti-headline{\n            padding-top: 20px;\n            font-weight: bold;\n            height: 20px;\n            line-height: 20px;\n            font-size: 16px;\n            color: #555;\n        }\n        .noti-description{\n            height: 20px;\n            line-height: 20px;\n            font-size: 14px;\n            padding-top: 20px;\n            padding-bottom: 20px;\n            display: table;\n        }\n        .notification.custom-alert .noti-text{background: rgba(93,156,236,0.5);}\n        .notification.custom-alert .noti-icon{background-color: #5d9cec;}\n        .notification.custom-error .noti-text{background: rgba(240,80,80,0.5);}\n        .notification.custom-error .noti-icon{background-color: #f05050;}\n        .notification.custom-success .noti-text{background: rgba(129,200,104,0.5);}\n        .notification.custom-success .noti-icon{background-color: #81c868;}\n    </style>\n\n    <div class=\"notification-wrapper\" v-if=\"showing\" v-on:click=\"hide()\">\n\n        <div class=\"notification\" :class=\"alertType\">\n            <div class=\"noti-icon\">\n                <i class=\"fa fa-bell\"></i>\n            </div>\n            <div class=\"noti-text\">\n                <div class=\"noti-headline\">\n                    {{header}}\n                </div>\n                <div class=\"noti-description\">\n                    {{content}}\n                </div>\n            </div>\n        </div>\n\n    </div>\n";

/***/ }),
/* 3 */
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