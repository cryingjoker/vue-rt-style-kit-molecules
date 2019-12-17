(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"), require("vue-rt-style-kit-atoms"), require("vee-validate"));
	else if(typeof define === 'function' && define.amd)
		define("vue-rt-style-kit-molecules", ["vue", "vue-rt-style-kit-atoms", "vee-validate"], factory);
	else if(typeof exports === 'object')
		exports["vue-rt-style-kit-molecules"] = factory(require("vue"), require("vue-rt-style-kit-atoms"), require("vee-validate"));
	else
		root["vue-rt-style-kit-molecules"] = factory(root["vue"], root["vue-rt-style-kit-atoms"], root["vee-validate"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module) {

module.exports = JSON.parse("{\"newAppName\":\"rt\",\"b2bAppName\":\"rtb\",\"globalSettingsKey\":\"RTK_STYLE\",\"defaultSegment\":\"b2c\",\"horizontal-space\":\"20px\",\"vertical-space\":\"20px\",\"iphone8\":\"415px\",\"desktop-step-grid\":\"8.333333%\",\"tablet-step-grid\":\"16.66666%\",\"mobile-step-grid\":\"33.333333%\",\"mobile-upper-limit\":\"767px\",\"tablet-lower-limit\":\"768px\",\"tablet-upper-limit\":\"1024px\",\"laptop-lower-limit\":\"1025px\",\"laptop-upper-limit\":\"1279px\",\"desktop-lower-limit\":\"1280px\",\"desktop-upper-limit\":\"1400px\",\"large-desktop-lower-limit\":\"1401px\",\"container-upper-limit\":\"1480px\"}");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};

// Adds compatibility for ES modules
debounce.debounce = debounce;

module.exports = debounce;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

exports.debounce=function(i,e,o){var t;return void 0===e&&(e=50),void 0===o&&(o={isImmediate:!1}),function(){for(var a=[],d=0;d<arguments.length;d++)a[d]=arguments[d];var n=this,m=o.isImmediate&&void 0===t;void 0!==t&&clearTimeout(t),t=setTimeout(function(){t=void 0,o.isImmediate||i.apply(n,a)},e),m&&i.apply(n,a)}};
//# sourceMappingURL=index.js.map


/***/ }),
/* 4 */
/***/ (function(module) {

module.exports = JSON.parse("{\"b2c-purple\":\"#7700FF\",\"b2c-purple01\":\"rgba(119,0,255,0.1)\",\"b2c-purple-low\":\"#6605C6\",\"b2c-purple-high\":\"#8348FC\",\"b2c-red\":\"#BC104B\",\"b2c-red-low\":\"#910046\",\"b2c-red-high\":\"#E22E65\",\"b2c-dark-blue\":\"#273A64\",\"b2c-dark-blue-low\":\"#001C45\",\"b2c-dark-blue-high\":\"#275392\",\"b2c-light-blue\":\"#65BBDF\",\"b2c-light-blue-low\":\"#4897DF\",\"b2c-light-blue-high\":\"#65DEED\",\"b2c-yellow\":\"#FFBE08\",\"b2c-yellow-low\":\"#FFA307\",\"b2c-yellow-high\":\"#FFD800\",\"b2c-orange\":\"#FF4F12\",\"b2c-orange-low\":\"#D33706\",\"b2c-orange-high\":\"#FF8218\",\"b2c-pink\":\"#FFBFC3\",\"b2c-pink-low\":\"#FFA0A7\",\"b2c-pink-high\":\"#FFD2DD\",\"b2c-green\":\"#57D9B7\",\"b2c-green-low\":\"#3BBC9E\",\"b2c-green-high\":\"#81EBD6\",\"main-color\":\"#101828\",\"main-color09\":\"rgba(16,24,40,0.9)\",\"main-color08\":\"rgba(16,24,40,0.8)\",\"main-color07\":\"rgba(16,24,40,0.7)\",\"main-color06\":\"rgba(16,24,40,0.6)\",\"main-color05\":\"rgba(16,24,40,0.5)\",\"main-color04\":\"rgba(16,24,40,0.4)\",\"main-color03\":\"rgba(16,24,40,0.3)\",\"main-color02\":\"rgba(16,24,40,0.2)\",\"main-color01\":\"rgba(16,24,40,0.1)\",\"main-color003\":\"rgba(16,24,40,0.03)\",\"main-color09-no-opacity\":\"#272F3D\",\"main-color07-no-opacity\":\"#575D68\",\"main-color05-no-opacity\":\"#868B95\",\"main-color03-no-opacity\":\"#B8B9C0\",\"main-color01-no-opacity\":\"#B8B9C0\",\"main-color003-no-opacity\":\"#E7E7E9\",\"b2c-cool-grey\":\"#E3E8EC\",\"b2c-cool-grey07\":\"rgba(227,232,236,0.7)\",\"b2c-cool-grey05\":\"rgba(227,232,236,0.5)\",\"b2c-cool-grey03\":\"rgba(227,232,236,0.3)\",\"b2b-cool-grey05-no-opacity\":\"#F1F3F5\",\"b2c-purple-high05\":\"rgba(131,72,252,0.5)\",\"b2c-purple-high02\":\"rgba(131,72,252,0.2)\",\"b2c-orange-high05\":\"rgba(255,130,24,0.5)\",\"b2c-orange-high02\":\"rgba(255,130,24,0.2)\",\"b2b-state\":\"#7B939B\",\"b2b-dark-state\":\"#313A49\",\"b2b-burgundy\":\"#431625\",\"b2c-white\":\"#ffffff\",\"b2c-white09\":\"rgba(255,255,255, 0.9)\",\"b2c-white08\":\"rgba(255,255,255, 0.8)\",\"b2c-white07\":\"rgba(255,255,255, 0.7)\",\"b2c-white06\":\"rgba(255,255,255, 0.6)\",\"b2c-white05\":\"rgba(255,255,255, 0.5)\",\"b2c-white04\":\"rgba(255,255,255, 0.4)\",\"b2c-white03\":\"rgba(255,255,255, 0.3)\",\"b2c-white02\":\"rgba(255,255,255, 0.2)\",\"b2c-white01\":\"rgba(255,255,255, 0.1)\",\"dark-card-background\":\"rgba(0,0,0,0.8)\",\"disable-button-color\":\"#e6e6e6\",\"disable-button-color-dark-theme\":\"rgba(255,255,255,0.1)\",\"card-list-border\":\"#E5E5E5\",\"default-wive-color\":\"#808080\",\"error-color\":\"#FF0C0C\",\"error-color-text\":\"rgba(255,12,12,0.58)\",\"box-shadow-background\":\"rgba(16,24,40,0.1)\",\"dark-theme-dropdown-background\":\"#202432\",\"light-grey\":\"#fafafa\",\"rule-color\":\"#272F3D\",\"switcher-color\":\"#404653\",\"game-promo-color\":\"#001424\"}");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"vue-rt-style-kit-molecules\",\"version\":\"0.2.3\",\"description\":\"\",\"main\":\"lib/vue-rt-style-kit-molecules.js\",\"scripts\":{\"start\":\"node bin/local/index.js\",\"optimize\":\"node node_modules/rt-image-optimizer --orig=/tmp/ --dist=/dist/ --max-width=1600\",\"build\":\"cross-env NODE_ENV=production webpack --config ./bin/webpack.config.lib.js\",\"build:docs\":\"cross-env NODE_ENV=production webpack --config ./bin/webpack.config.docs.js\",\"build:icons\":\"npx vsvg -s ./src/lib/components/Icon/generator/svg -t ./static/icons --tpl ./src/lib/components/Icon/generator/icon-tpl.js\",\"serve:dev\":\"cross-env NODE_ENV=development node bin/deаev-server.js\",\"serve: production\":\"cross-env NODE_ENV=production node    bin/spa-server.js\",\"lint\":\"./node_modules/eslint/bin/eslint.js  --ext src/**/*.{js,vue} --ignore-path .gitignore --fix\",\"lintfix\":\"./node_modules/e3slint/bin/eslint.js --ext .js,.vue --ignore-path .gitignore --fix\",\"lint-stylelint\":\"stylus-supremacy format src/**/*.styl --replace --options stylus-supremacy.config.json\",\"precommit\":\"lint-staged\",\"test\":\"NODE_ENV=test jest --no-cache --config ./jest.config.json\"},\"lint-staged\":{\"*.styl\":[\"stylus-supremacy format src/**/*.styl --replace --options stylus-supremacy.config.jљson\",\"git add\"],\"*.{js,json,vue}\":[\"prettier --write\",\"git add\"]},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/vue-rt-style/vue-rt-style-kit-molecules.git\"},\"keywords\":[],\"author\":\"Alex Nikolaev / cryingjoker\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/vue-rt-style/vue-rt-style-kit-molecules/issues\"},\"homepage\":\"https://github.com/vue-rt-style/vue-rt-style-kit-molecules\",\"dependencies\":{\"@babel/polyfill\":\"^7.4.4\",\"@babel/runtime\":\"^7.5.5\",\"@vue/babel-preset-jsx\":\"^1.1.0\",\"babel-plugin-transform-vue-tsx\":\"^3510.0.3\",\"element-closest-polyfill\":\"^1.0.0\",\"element-remove\":\"^1.0.4\",\"http-proxy-middleware\":\"^0.19.1\",\"markdown\":\"^0.5.0\",\"nodelist-foreach-polyfill\":\"^1.2.0\",\"normalize.css\":\"^8.0.1\",\"ora\":\"^3.4.0\",\"pug\":\"^2.0.4\",\"reset-css\":\"^4.0.1\",\"vue-fragment\":\"^1.5.1\",\"vue-router\":\"^3.1.1\",\"vue-tsx-support\":\"^2.3.1\"},\"devDependencies\":{\"@avalanche/eslint-config\":\"^4.0.0\",\"@babel/core\":\"^7.5.5\",\"@babel/plugin-proposal-class-properties\":\"^7.5.5\",\"@babel/plugin-proposal-decorators\":\"^7.4.4\",\"@babel/plugin-syntax-dynamic-import\":\"^7.2.0\",\"@babel/plugin-transform-modules-commonjs\":\"^7.5.0\",\"@babel/plugin-transform-regenerator\":\"^7.4.5\",\"@babel/plugin-transform-runtime\":\"^7.5.5\",\"@babel/preset-env\":\"^7.7.4\",\"babel-core\":\"^7.0.0-bridge.0\",\"babel-eslint\":\"^10.0.2\",\"babel-helper-vue-jsx-merge-props\":\"^2.0.3\",\"babel-jest\":\"^24.8.0\",\"babel-loader\":\"^8.0.6\",\"babel-plugin-syntax-jsx\":\"^6.18.0\",\"babel-plugin-transform-vue-jsx\":\"^3.7.0\",\"babel-preset-env\":\"^1.7.0\",\"brace\":\"^0.11.1\",\"compression\":\"^1.7.4\",\"connect-history-api-fallback\":\"^1.6.0\",\"cross-env\":\"^5.2.1\",\"css-loader\":\"^3.2.0\",\"debounce\":\"^1.2.0\",\"eslint\":\"^6.7.2\",\"eslint-plugin-vue\":\"^6.0.1\",\"file-loader\":\"^4.2.0\",\"friendly-errors-webpack-plugin\":\"^1.7.0\",\"fstream\":\"^1.0.12 \",\"html-webpack-plugin\":\"^3.2.0\",\"image-webpack-loader\":\"^5.0.0\",\"js-beautify\":\"^1.10.2\",\"mini-css-extract-plugin\":\"^0.8.0\",\"nib\":\"^1.1.2\",\"opn\":\"^6.0.0\",\"optimize-css-assets-webpack-plugin\":\"^5.0.3\",\"prettier\":\"^1.18.2\",\"push-dir\":\"^0.4.1\",\"raw-loader\":\"^3.1.0\",\"regenerator-runtime\":\"^0.13.3\",\"sass-loader\":\"^7.1.0\",\"style-loader\":\"^1.0.0\",\"stylus\":\"^0.54.5\",\"stylus-loader\":\"^3.0.2\",\"stylus-supremacy\":\"^2.12.7\",\"ts-debounce\":\"^1.0.0\",\"ts-loader\":\"^6.0.4\",\"typescript\":\"^3.5.3\",\"uglifyjs-webpack-plugin\":\"^2.2.0\",\"unzip\":\"^0.1.11\",\"url-loader\":\"^2.1.0\",\"vee-validate\":\"^2.2.14\",\"vue\":\"^2.6.10\",\"vue-loader\":\"^15.7.1\",\"vue-property-decorator\":\"^8.2.1\",\"vue-rt-style-kit-atoms\":\"^0.2.3\",\"vue-svgicon\":\"^3.2.6\",\"vue-template-compiler\":\"^2.6.10\",\"webpack\":\"4.39.1\",\"webpack-cli\":\"3.3.10\",\"webpack-dev-middleware\":\"^3.7.0\",\"webpack-hot-middleware\":\"^2.25.0\",\"webpack-merge\":\"^4.2.1\",\"webpack-serve\":\"^3.1.1\",\"webpack-stats-plugin\":\"^0.3.0\"}}");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }

    if (!Element.prototype.closest) {
        Element.prototype.closest = function (s) {
            var el = this;

            do {
                if (el.matches(s)) return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
        };
    }
})();

/***/ }),
/* 11 */
/***/ (function(module, exports) {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode && this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype].filter(Boolean));


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(6);
var external_vee_validate_default = /*#__PURE__*/__webpack_require__.n(external_vee_validate_);

// EXTERNAL MODULE: ./src/css/vue-rt-style-kit-molecules.styl
var vue_rt_style_kit_molecules = __webpack_require__(9);

// EXTERNAL MODULE: ./src/variables.json
var variables = __webpack_require__(0);

// EXTERNAL MODULE: ./package.json
var package_0 = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm.js
/**
  * vue-class-component v7.1.0
  * (c) 2015-present Evan You
  * @license MIT
  */


// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
var reflectionIsSupported = typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
function copyReflectionMetadata(to, from) {
    forwardMetadata(to, from);
    Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
        forwardMetadata(to.prototype, from.prototype, key);
    });
    Object.getOwnPropertyNames(from).forEach(function (key) {
        forwardMetadata(to, from, key);
    });
}
function forwardMetadata(to, from, propertyKey) {
    var metaKeys = propertyKey
        ? Reflect.getOwnMetadataKeys(from, propertyKey)
        : Reflect.getOwnMetadataKeys(from);
    metaKeys.forEach(function (metaKey) {
        var metadata = propertyKey
            ? Reflect.getOwnMetadata(metaKey, from, propertyKey)
            : Reflect.getOwnMetadata(metaKey, from);
        if (propertyKey) {
            Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
        }
        else {
            Reflect.defineMetadata(metaKey, metadata, to);
        }
    });
}

var fakeArray = { __proto__: [] };
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return external_vue_default.a.extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== 'object' && type !== 'function');
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (false) {}
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured',
    'serverPrefetch' // 2.6
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (descriptor.value !== void 0) {
            // methods
            if (typeof descriptor.value === 'function') {
                (options.methods || (options.methods = {}))[key] = descriptor.value;
            }
            else {
                // typescript decorated data
                (options.mixins || (options.mixins = [])).push({
                    data: function () {
                        var _a;
                        return _a = {}, _a[key] = descriptor.value, _a;
                    }
                });
            }
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof external_vue_default.a
        ? superProto.constructor
        : external_vue_default.a;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    if (reflectionIsSupported) {
        copyReflectionMetadata(Extended, Component);
    }
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
var shouldIgnore = {
    prototype: true,
    arguments: true,
    callee: true,
    caller: true
};
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // Skip the properties that should not be overwritten
        if (shouldIgnore[key]) {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value) &&
                superDescriptor &&
                superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if (false) {}
        Object.defineProperty(Extended, key, descriptor);
    });
}

function vue_class_component_esm_Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
vue_class_component_esm_Component.registerHooks = function registerHooks(keys) {
    $internalHooks.push.apply($internalHooks, keys);
};

/* harmony default export */ var vue_class_component_esm = (vue_class_component_esm_Component);


// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 8.2.2 MIT LICENSE copyright 2019 kaorun343 */
/// <reference types='reflect-metadata'/>




/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) ||
                    null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        // inject parent reactive services (if any)
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject = componentOptions.inject || {};
            componentOptions.inject[reactiveInjectKey] = { from: reactiveInjectKey, default: {} };
        }
        if (typeof provide !== 'function' || !provide.managedReactive) {
            var original_2 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var _this = this;
                var rv = typeof original_2 === 'function'
                    ? original_2.call(this)
                    : original_2;
                rv = Object.create(rv || null);
                // set reactive services (propagates previous services if necessary)
                rv[reactiveInjectKey] = this[reactiveInjectKey] || {};
                var _loop_1 = function (i) {
                    rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
                    Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                        enumerable: true,
                        get: function () { return _this[i]; },
                    });
                };
                var this_1 = this;
                for (var i in provide.managedReactive) {
                    _loop_1(i);
                }
                return rv;
            };
            provide.managedReactive = {};
        }
        provide.managedReactive[k] = key || k;
    });
}
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
    }
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}
/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    // @ts-ignore
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                if (returnValue !== undefined)
                    args.unshift(returnValue);
                _this.$emit.apply(_this, [event || key].concat(args));
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(function (returnValue) {
                    emit(returnValue);
                });
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return createDecorator(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

// EXTERNAL MODULE: ./node_modules/ts-debounce/dist/src/index.js
var src = __webpack_require__(3);

// CONCATENATED MODULE: ./src/utils/scrollIt.js
var scrollIt = function scrollIt(destination) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "linear";
  var callback = arguments.length > 3 ? arguments[3] : undefined;
  destination = destination >= 0 ? destination : 0;
  var easings = {
    linear: function linear(t) {
      return t;
    },
    easeInQuad: function easeInQuad(t) {
      return t * t;
    },
    easeOutQuad: function easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad: function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic: function easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic: function easeOutCubic(t) {
      return --t * t * t + 1;
    },
    easeInOutCubic: function easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart: function easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart: function easeOutQuart(t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart: function easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint: function easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint: function easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint: function easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };
  var start = window.pageYOffset;
  var startTime = "now" in window.performance ? performance.now() : new Date().getTime();
  var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight;
  var destinationOffset = typeof destination === "number" ? destination : destination.offsetTop;
  var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if ("requestAnimationFrame" in window === false) {
    window.scroll(0, destinationOffsetToScroll);

    if (callback) {
      callback();
    }

    return;
  }

  function scroll() {
    var now = "now" in window.performance ? performance.now() : new Date().getTime();
    var time = Math.min(1, (now - startTime) / duration);
    var timeFunction = easings[easing](time);
    window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));
    var top = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(top - destinationOffsetToScroll) <= 20) {
      if (callback) {
        callback();
      }

      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
};

/* harmony default export */ var utils_scrollIt = (scrollIt);
// CONCATENATED MODULE: ./src/utils/index.js

// CONCATENATED MODULE: ./src/components/ScrollTabs/ScrollTabs.tsx
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = undefined && undefined.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ScrollTabs_ScrollTabs =
/*#__PURE__*/
function (_Vue) {
  _inherits(ScrollTabs, _Vue);

  function ScrollTabs() {
    var _this;

    _classCallCheck(this, ScrollTabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollTabs).apply(this, arguments));
    _this.activeKey = "";
    _this.anchorObejects = [];
    _this.fixedNode = null;
    _this.fixedNodeParent = null;
    _this.fixedNodeHeight = null;
    _this.fixedNodeWidth = null;
    _this.fixedNodeTop = null;

    _this.getOffsetTop = function (el) {
      var position = el.getBoundingClientRect();
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return scrollTop + position.top;
    };

    _this.debounceCalculateScroll = Object(src["debounce"])(function () {
      _this.calculateScroll();
    }, 5);

    _this.calculateScroll = function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var container = _this.$refs.tabsContainer;
      var activeEl = container.querySelector("." + _this.activeTabsClassname);
      var hasFound = false;
      Object.keys(_this.anchorObejects).forEach(function (key) {
        if (scrollTop >= _this.anchorObejects[key].y_start - _this.topPadding - 10 && scrollTop < _this.anchorObejects[key].y_end && !hasFound) {
          hasFound = true;

          if (activeEl && activeEl.getAttribute("href").replace("#", "") !== key) {
            activeEl.classList.remove(_this.activeTabsClassname);
          }

          if (_this.activeKey === key) {
            return false;
          }

          _this.activeKey = key;

          if (_this.$refs.tabsContainer) {
            var _container = _this.$refs.tabsContainer;

            var nextEl = _container.querySelector("[href=\"#" + key + "\"]");

            if (nextEl && !nextEl.classList.contains(_this.activeTabsClassname)) {
              nextEl.classList.add(_this.activeTabsClassname);
            }
          }

          window.history.replaceState(undefined, undefined, "#" + key);
          return false;
        }
      });
      var url = window.location.toString();

      if (url.indexOf("#") > 0 && !hasFound) {
        if (activeEl) {
          activeEl.classList.remove(_this.activeTabsClassname);
          _this.activeKey = "";
        }

        var clean_url = url.substring(0, url.indexOf("#"));
        window.history.replaceState({}, document.title, clean_url);
      }
    };

    _this.initAnchorsList = function () {
      var notBindClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (_this.$refs.tabsContainer) {
        var container = _this.$refs.tabsContainer;
        container.querySelectorAll("." + _this.tabsClassname).forEach(function (i) {
          var anchor = i.getAttribute("href").replace("#", "");
          var anchorEl = document.querySelector("[id=\"" + anchor + "\"]");

          if (!notBindClick) {
            i.addEventListener("click", _this.scrollBind, {
              passive: true
            });
          }

          if (anchorEl) {
            _this.anchorObejects[anchor] = {
              y_start: _this.getOffsetTop(anchorEl) - _this.topPadding,
              y_end: _this.getOffsetTop(anchorEl) + anchorEl.offsetHeight - _this.topPadding
            };

            if (_this.fixedNode && _this.fixedNodeHeight) {
              _this.anchorObejects[anchor].y_start -= _this.fixedNodeHeight;
            }
          }
        });
      }

      _this.calculateScroll();
    };

    _this.debounceInitAnchorsList = Object(src["debounce"])(function () {
      _this.initAnchorsList(true);
    }, 150);

    _this.scrollBind = function (e) {
      var anchor = e.target.getAttribute("href").replace("#", "");
      utils_scrollIt(_this.anchorObejects[anchor].y_start + 40);
      e.preventDefault();
    };

    return _this;
  }

  _createClass(ScrollTabs, [{
    key: "removeFixedElementStyle",
    value: function removeFixedElementStyle() {
      this.fixedNode.style.removeProperty('position');
      this.fixedNode.style.removeProperty('width');
      this.fixedNode.style.removeProperty('top');
      var parentNode = this.fixedNode.parentNode;
      var fixedNodeTop = parentNode.getBoundingClientRect().top - this.fixedNode.offsetHeight + (window.pageYOffset || document.documentElement.scrollTop) - this.fixedNodeTop;

      if (document.documentElement.scrollTop > fixedNodeTop) {
        this.fixedNode.style.height = '0px';
      } else {
        this.fixedNode.style.removeProperty('height');
      }

      this.fixedNode.style.overflow = 'hidden';
      this.fixedNodeParent.style.removeProperty('padding-top');
    }
  }, {
    key: "showElement",
    value: function showElement() {
      this.fixedNode.style.opacity = '1';
      this.fixedNode.style.visibility = 'visible';
    }
  }, {
    key: "hideElement",
    value: function hideElement() {
      this.fixedNode.style.opacity = '0';
      this.fixedNode.style.visibility = 'hidden';
    }
  }, {
    key: "setFixedJsScroll",
    value: function setFixedJsScroll() {
      var _this2 = this;

      if (!this.hasFixedJsNode) {
        return false;
      }

      var resizeSize = Object(src["debounce"])(function () {
        var parentNode = _this2.fixedNode.parentNode;

        var fixedNodeTop = parentNode.getBoundingClientRect().top - _this2.fixedNode.offsetHeight + (window.pageYOffset || document.documentElement.scrollTop) - _this2.fixedNodeTop;

        if (window.pageYOffset || document.documentElement.scrollTop > fixedNodeTop) {
          _this2.removeFixedElementStyle();
        }

        _this2.fixedNodeHeight = _this2.fixedNode.offsetHeight;

        if (_this2.fixedNodeParent.style.paddingTop) {
          _this2.fixedNodeHeight += parseInt(_this2.fixedNodeParent.style.paddingTop);
        }

        _this2.fixedNodeWidth = _this2.fixedNode.offsetWidth;
        window.dispatchEvent(new CustomEvent('scroll'));
      }, 50);
      var getFixedJsScrollPosition = Object(src["debounce"])(function () {
        if (!_this2.fixedNode) {
          return false;
        }

        var parentNode = _this2.fixedNode.parentNode;
        var fixedNodeTop;

        if (parentNode.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) < _this2.fixedNodeTop + _this2.fixedNode.offsetHeight) {
          fixedNodeTop = _this2.fixedNode.offsetHeight;
        } else {
          fixedNodeTop = parentNode.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop) - _this2.fixedNodeTop - _this2.fixedNode.offsetHeight;
        }

        if ((window.pageYOffset || document.documentElement.scrollTop) > fixedNodeTop) {
          if (_this2.hideIfNotInViewport) {
            _this2.showElement();
          }

          _this2.fixedNode.style.position = 'fixed';
          _this2.fixedNode.style.top = _this2.topPadding + 'px';
          _this2.fixedNode.style.width = _this2.fixedNodeWidth + 'px';

          _this2.fixedNode.style.removeProperty('height');

          _this2.fixedNode.style.removeProperty('overflow');

          _this2.fixedNodeParent.style.paddingTop = _this2.fixedNodeHeight + 'px';
        } else {
          if (_this2.hideIfNotInViewport) {
            _this2.hideElement();
          }

          _this2.removeFixedElementStyle();
        }
      }, 10);
      var container = this.$refs.tabsContainer;
      this.fixedNode = container.parentNode;
      this.fixedNodeParent = container.parentNode.parentNode;
      this.fixedNodeHeight = this.fixedNode.offsetHeight;

      if (this.fixedNodeParent.style.paddingTop) {
        this.fixedNodeHeight += parseInt(this.fixedNodeParent.style.paddingTop);
      }

      this.fixedNodeWidth = this.fixedNode.offsetWidth; // this.fixedNodeTop = parentNode.getBoundingClientRect().top - this.fixedNode.offsetHeight + (window.pageYOffset || document.documentElement.scrollTop) - this.fixedNodeTop;

      getFixedJsScrollPosition();
      setTimeout(function () {
        window.addEventListener("scroll", getFixedJsScrollPosition, {
          passive: false
        });
        window.addEventListener("resize", resizeSize, {
          passive: false
        });
      }, 50);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this3 = this;

      this.setFixedJsScroll();

      if (this.tabsClassname) {
        setTimeout(function () {
          _this3.initAnchorsList();

          window.addEventListener("scroll", _this3.debounceCalculateScroll, {
            passive: true
          });
          window.addEventListener("resize", _this3.debounceInitAnchorsList, {
            passive: true
          });
        }, 300);
      }

      if (this.removeBaseTag) {
        var baseNode = document.querySelector("base");
        baseNode.parentNode.removeChild(baseNode);
        var newBase = document.createElement("base");
        var url = location.href;
        url = url.split("#")[0];
        newBase.setAttribute("href", url);
        document.getElementsByTagName("head")[0].appendChild(newBase);
      }
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      var _this4 = this;

      window.removeEventListener("scroll", this.debounceCalculateScroll);
      window.removeEventListener("resize", this.debounceInitAnchorsList);

      if (this.$refs.tabsContainer) {
        var container = this.$refs.tabsContainer;
        container.querySelectorAll("." + this.tabsClassname).forEach(function (i) {
          i.removeEventListener("click", _this4.scrollBind);
        });
      }
    }
  }, {
    key: "render",
    value: function render(h) {
      return h("div", {
        ref: "tabsContainer"
      }, [this.$slots["default"]]);
    }
  }]);

  return ScrollTabs;
}(external_vue_default.a);

__decorate([Prop({
  "default": null
}), __metadata("design:type", String)], ScrollTabs_ScrollTabs.prototype, "hasFixedJsNode", void 0);

__decorate([Prop({
  "default": false
}), __metadata("design:type", Boolean)], ScrollTabs_ScrollTabs.prototype, "removeBaseTag", void 0);

__decorate([Prop({
  "default": null
}), __metadata("design:type", String)], ScrollTabs_ScrollTabs.prototype, "activeTabsClassname", void 0);

__decorate([Prop({
  "default": false
}), __metadata("design:type", String)], ScrollTabs_ScrollTabs.prototype, "tabsClassname", void 0);

__decorate([Prop({
  "default": 80
}), __metadata("design:type", Number)], ScrollTabs_ScrollTabs.prototype, "topPadding", void 0);

__decorate([Prop({
  "default": false
}), __metadata("design:type", Boolean)], ScrollTabs_ScrollTabs.prototype, "hideIfNotInViewport", void 0);

ScrollTabs_ScrollTabs = __decorate([vue_class_component_esm], ScrollTabs_ScrollTabs);
/* harmony default export */ var components_ScrollTabs_ScrollTabs = ({
  component: ScrollTabs_ScrollTabs,
  name: "RtScrollTabs"
});
// CONCATENATED MODULE: ./src/components/Tabs/TabsStore.tsx
function TabsStore_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TabsStore_typeof = function _typeof(obj) { return typeof obj; }; } else { TabsStore_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TabsStore_typeof(obj); }



var TabsStore_setActiveTabName = function setActiveTabName(tabsName) {
  var tabAnchore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var dontResize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!tabsStore.tabsNames) {
    tabsStore.tabsNames = [];
  }

  if (tabsStore.tabsNames[tabsName]) {
    var parentId = tabsStore.tabsNames[tabsName];
    var parentArray = tabsStore.tabsParents[parentId];

    for (var key in parentArray) {
      if (TabsStore_typeof(parentArray[key]) === 'object') {
        parentArray[key].isActive = false;
      }
    }

    parentArray[tabsName].isActive = true;
  } // Определение Internet Explorer. нужно т.к. в нем не работет resize


  var browserName = navigator.userAgent.toLowerCase(),
      isIE = /trident/gi.test(browserName) || /msie/gi.test(browserName);

  if (!dontResize) {
    if (!isIE) {
      window.dispatchEvent(new Event("resize"));
    } else {
      var resizeEvent = window.document.createEvent('UIEvents');
      resizeEvent['initUIEvent']('resize', true, false, window, 0);
      window.dispatchEvent(resizeEvent);
    }
  }

  if (tabAnchore && tabAnchore.length > 0) {
    window.history.replaceState(undefined, undefined, "#" + tabAnchore);
  }

  runWatchers();
};

var runWatchers = function runWatchers() {
  for (var fnIndex in tabsStore.watcherFunction) {
    tabsStore.watcherFunction[fnIndex]();
  }
};

var addTabUuid = function addTabUuid(tabsContainerId, tabsName) {
  if (!tabsStore.tabsParents[tabsContainerId]) {
    tabsStore.tabsParents[tabsContainerId] = {};

    if (tabsStore.tabsParents[tabsContainerId][tabsName]) {
      console.error('tabs name must be unique');
    } else {
      tabsStore.tabsParents[tabsContainerId][tabsName] = {
        isActive: true
      };
    }
  } else {
    tabsStore.tabsParents[tabsContainerId][tabsName] = {
      isActive: false
    };
  }

  tabsStore.tabsNames[tabsName] = tabsContainerId;
  runWatchers();
};

var addWatcher = function addWatcher(fn) {
  tabsStore.watcherFunction.push(fn);
};

var setTabWidth = function setTabWidth(parentUiid, width) {
  if (!tabsStore.tabsParents[parentUiid].width) {
    tabsStore.tabsParents[parentUiid].width = width;
    tabsStore.tabsParents[parentUiid].lastUpdateTime = new Date().getTime();
  } else {
    if (tabsStore.tabsParents[parentUiid].width < width) {
      tabsStore.tabsParents[parentUiid].width = width;
      tabsStore.tabsParents[parentUiid].lastUpdateTime = new Date().getTime();
      tabsStore.tabsParents[parentUiid].centerText = true;
    }
  }

  setTimeout(function () {
    checkMaxWidth(parentUiid);
  }, 400); // runWatchers();
};

var checkMaxWidth = function checkMaxWidth(parentUiid) {
  var time = new Date().getTime();

  if (time - tabsStore.tabsParents[parentUiid].lastUpdateTime >= 400) {
    tabsStore.tabsParents[parentUiid].lastUpdateTime = new Date().getTime();
    runWatchers();
  }
};

var tabsStore = external_vue_default.a.observable({
  setActiveTabName: TabsStore_setActiveTabName,
  addTabUuid: addTabUuid,
  tabsParents: {},
  tabsNames: {},
  addWatcher: addWatcher,
  watcherFunction: [],
  setTabWidth: setTabWidth
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tabs/Tabs.vue?vue&type=script&lang=js&


var componentsList = {};
/* harmony default export */ var Tabsvue_type_script_lang_js_ = ({
  name: "RtTabs",
  components: componentsList,
  props: {
    roundTabletView: {
      type: Boolean,
      "default": false
    },
    showAsTags: {
      type: Boolean,
      "default": false
    },
    reverseView: {
      type: Boolean,
      "default": false
    },
    roundTabletViewMaxWidth: {
      type: Boolean,
      "default": false
    },
    fillContent: {
      type: Boolean,
      "default": false
    },
    justifyAllWidth: {
      type: Boolean,
      "default": false
    },
    dontUseAdaptive: {
      type: Boolean,
      "default": false
    },
    isDisabled: {
      type: Boolean,
      "default": false
    },
    navigationHorizontalPadding: {
      type: Number,
      "default": null
    },
    vertical: {
      type: Boolean,
      "default": false
    },
    positionCenter: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      activeTabIndex: 0,
      tabletSize: null,
      mobileSize: null,
      deviceType: "pc"
    };
  },
  computed: {},
  mounted: function mounted() {
    if (!this.dontUseAdaptive) {
      this.tabletSize = parseInt(variables["tablet-upper-limit"]);
      this.mobileSize = parseInt(variables["mobile-upper-limit"]);
      window.addEventListener("resize", this.checkDeviceType);
      this.checkDeviceType();
    }
  },
  updated: function updated() {
    window.removeEventListener("resize", this.checkDeviceType);
    window.addEventListener("resize", this.checkDeviceType);
  },
  beforeDestroy: function beforeDestroy() {},
  methods: {
    checkDeviceType: function checkDeviceType() {
      var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
      var width = iOS ? screen.width : window.innerWidth;

      if (width <= this.mobileSize) {
        this.deviceType = "mobile";
      } else {
        if (width <= this.tabletSize) {
          this.deviceType = "tablet";
        } else {
          this.deviceType = "pc";
        }
      }
    },
    setActiveTabName: function setActiveTabName(name) {
      var hashAnchor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      tabsStore.setActiveTabName(name, hashAnchor);
      window.dispatchEvent(new Event("resize"));

      if (hashAnchor) {
        window.history.replaceState(undefined, undefined, "#" + hashAnchor);
      }
    },
    addTabName: function addTabName(name) {
      if (this.RtTabs.namesArray.length === 0) {
        this.setActiveTabName(name);
      }

      this.RtTabs.namesArray.push(name);
    },
    navigationStyle: function navigationStyle() {
      var style = {};

      if (this.navigationHorizontalPadding) {
        style.paddingLeft = this.navigationHorizontalPadding + "px";
        style.paddingRight = this.navigationHorizontalPadding + "px";
      }

      return style;
    }
  },
  render: function render(h) {
    var classNames = "rt-tabs";

    if (this.vertical && window.innerWidth <= this.mobileSize) {
      classNames += " rt-tabs--vertical";
    } else {
      if (this.roundTabletView) {
        classNames += " rt-tabs--round-tablet-view";
      }

      if (this.deviceType && !this.dontUseAdaptive) {
        classNames += " rt-tabs-" + this.deviceType;
      }
    }

    if (this.positionCenter) {
      classNames += " rt-tabs--centered";
    }

    if (this.fillContent) {
      classNames += " rt-tabs--fill";

      if (this.justifyAllWidth) {
        classNames += " rt-tabs--justify-all-width";
      }
    }

    if (this.showAsTags) {
      classNames += " rt-tabs--tag-mode";
    } // fillContent


    var id = 'tabs-' + this._uid;

    if (this.vertical && window.innerWidth <= this.mobileSize) {
      return h("div", {
        attrs: {
          id: id
        },
        "class": classNames
      }, [h("div", {
        "class": "rt-tabs-navigation"
      }, [this.$slots.navigation])]);
    } else {
      if (!this.reverseView) {
        return h("div", {
          attrs: {
            id: id
          },
          "class": classNames
        }, [h("div", {
          "class": "rt-tabs-navigation-wrapper"
        }, [h("div", {
          style: this.navigationStyle,
          "class": "rt-tabs-navigation"
        }, [this.$slots.navigation])]), h("div", {
          "class": "rt-tabs-content"
        }, [this.$slots.content])]);
      } else {
        return h("div", {
          attrs: {
            id: id
          },
          "class": classNames
        }, [h("div", {
          "class": "rt-tabs-content"
        }, [this.$slots.content]), h("div", {
          "class": "rt-tabs-navigation-wrapper"
        }, [h("div", {
          style: this.navigationStyle,
          "class": "rt-tabs-navigation"
        }, [this.$slots.navigation])])]);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Tabs/Tabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tabs_Tabsvue_type_script_lang_js_ = (Tabsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Tabs/Tabs.vue
var Tabs_render, staticRenderFns




/* normalize component */

var component = normalizeComponent(
  Tabs_Tabsvue_type_script_lang_js_,
  Tabs_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Tabs = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CheckboxTabs/CheckboxTabs.vue?vue&type=script&lang=js&


/* harmony default export */ var CheckboxTabsvue_type_script_lang_js_ = ({
  name: "RtCheckboxTabs",
  props: {
    isActive: {
      type: Boolean,
      "default": false
    },
    hideNotActive: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      deviceType: "pc",
      isActiveLocal: false
    };
  },
  mounted: function mounted() {},
  updated: function updated() {},
  beforeDestroy: function beforeDestroy() {},
  methods: {
    onChange: function onChange(event) {
      this.isActiveLocal = event.target.checked;
    },
    setActiveTabName: function setActiveTabName(name) {
      var hashAnchor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      tabsStore.setActiveTabName(name, hashAnchor);
      window.dispatchEvent(new Event("resize"));

      if (hashAnchor) {
        window.history.replaceState(undefined, undefined, "#" + hashAnchor);
      }
    },
    addTabName: function addTabName(name) {
      if (this.RtTabs.namesArray.length === 0) {
        this.setActiveTabName(name);
      }

      this.RtTabs.namesArray.push(name);
    }
  },
  render: function render(h) {
    var _this = this;

    var content = function content() {
      if (_this.hideNotActive) {
        if (_this.isActiveLocal) {
          return h("div", {
            "class": "rt-tabs-checklist-content"
          }, [h("div", {
            "class": "rt-tabs-checklist-content__item"
          }, [_this.$slots.content[1]])]);
        } else {
          return h("div", {
            "class": "rt-tabs-checklist-content"
          }, [h("div", {
            "class": "rt-tabs-checklist-content__item"
          }, [_this.$slots.content[0]])]);
        }
      } else {
        return h("div", {
          "class": "rt-tabs-checklist-content"
        }, [h("div", {
          "class": "rt-tabs-checklist-content__item"
        }, [_this.$slots.content[0]]), h("div", {
          "class": "rt-tabs-checklist-content__item"
        }, [_this.$slots.content[1]])]);
      }
    };

    return h("div", {
      "class": "rt-tabs-checklist" + (this.isActiveLocal && !this.hideNotActive ? " rt-tabs-checklist--is-active" : "")
    }, [h("div", {
      "class": "rt-tabs-checklist-input"
    }, [h("rt-checkbox", {
      on: {
        "change": this.onChange
      },
      attrs: {
        model: this.isActiveLocal,
        name: "rt-checkbox-" + this._uid
      }
    }, [this.$slots.label])]), content()]);
  }
});
// CONCATENATED MODULE: ./src/components/CheckboxTabs/CheckboxTabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var CheckboxTabs_CheckboxTabsvue_type_script_lang_js_ = (CheckboxTabsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CheckboxTabs/CheckboxTabs.vue
var CheckboxTabs_render, CheckboxTabs_staticRenderFns




/* normalize component */

var CheckboxTabs_component = normalizeComponent(
  CheckboxTabs_CheckboxTabsvue_type_script_lang_js_,
  CheckboxTabs_render,
  CheckboxTabs_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CheckboxTabs = (CheckboxTabs_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tabs/TabsNavigationItem.vue?vue&type=script&lang=js&

/* harmony default export */ var TabsNavigationItemvue_type_script_lang_js_ = ({
  name: "RtTabsNavItem",
  props: {
    anchor: {
      type: String,
      "default": null
    },
    removeBaseTag: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String,
      "default": null
    },
    scrollOnTop: {
      type: Boolean,
      "default": false
    },
    activeTab: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      parentid: "",
      isActive: false
    };
  },
  methods: {
    setActiveTabName: function setActiveTabName() {
      tabsStore.setActiveTabName(this.name, this.anchor);
      var $el = this.$el;
      var currentScrollLeft = $el.parentNode.scrollLeft;
      $el.parentNode.scrollLeft = $el.offsetLeft - (window.innerWidth - $el.offsetWidth) / 2 - currentScrollLeft;
    },
    onUpdateTabsStore: function onUpdateTabsStore() {
      this.$forceUpdate();
    }
  },
  mounted: function mounted() {
    var _this = this;

    tabsStore.addTabUuid(this.$parent._uid, this.name);
    this.$refs['tabItem'].addEventListener('click', function () {
      _this.setActiveTabName();
    }, true);

    if (this.removeBaseTag) {
      var baseNode = document.querySelector("base");

      if (baseNode) {
        baseNode.parentNode.removeChild(baseNode);
        var newBase = document.createElement("base");
        var url = location.href;
        url = url.split("#")[0];
        newBase.setAttribute("href", url);
        document.getElementsByTagName("head")[0].appendChild(newBase);
      }
    }

    if (this.anchor && document.location.hash) {
      if (document.location.hash.replace(/^\#/, "") === this.anchor) {
        this.setActiveTabName();
      }
    }

    if (this.activeTab) {
      this.setActiveTabName();
    }

    setTimeout(function () {
      if (_this.$parent['roundTabletView'] && _this.$parent['roundTabletViewMaxWidth']) {
        tabsStore.setTabWidth(_this.$parent._uid, _this.$el['offsetWidth'] + 2);
      }
    }, 2000);
  },
  created: function created() {
    tabsStore.addWatcher(this.onUpdateTabsStore);
  },
  render: function render(h) {
    var tabsItemClass = "rt-tabs-navigation__item";

    if (tabsStore.tabsParents[this.$parent._uid] && tabsStore.tabsParents[this.$parent._uid][this.name].isActive) {
      tabsItemClass += " rt-tabs-navigation__item--is-active";
    }

    if (this.scrollOnTop && this.$el) {
      var id = this.$el.closest('.rt-tabs').getAttribute('id');
      var scrollToTopData = '{ "scrollToId" : "' + id + '" }';

      if (tabsStore.tabsParents[this.$parent._uid] && tabsStore.tabsParents[this.$parent._uid].width) {
        var align = 'left';

        if (tabsStore.tabsParents[this.$parent._uid].centerText) {
          align = 'center';
        }

        return h("div", {
          ref: "tabItem",
          "class": tabsItemClass,
          directives: [{
            name: "rt-scroll-to-on-click",
            value: scrollToTopData
          }],
          style: {
            'width': tabsStore.tabsParents[this.$parent._uid].width + 'px',
            'text-align': align
          }
        }, [h("button", {
          "class": "rt-tabs-navigation__item-name"
        }, [this.$slots["default"]])]);
      } else {
        return h("div", {
          ref: "tabItem",
          "class": tabsItemClass,
          directives: [{
            name: "rt-scroll-to-on-click",
            value: scrollToTopData
          }]
        }, [h("button", {
          "class": "rt-tabs-navigation__item-name"
        }, [this.$slots["default"]])]);
      }
    } else {
      if (tabsStore.tabsParents[this.$parent._uid] && tabsStore.tabsParents[this.$parent._uid].width) {
        var _align = 'left';

        if (tabsStore.tabsParents[this.$parent._uid].centerText) {
          _align = 'center';
        }

        return h("div", {
          ref: "tabItem",
          "class": tabsItemClass,
          style: {
            'width': tabsStore.tabsParents[this.$parent._uid].width + 'px',
            'text-align': _align
          }
        }, [h("button", {
          "class": "rt-tabs-navigation__item-name"
        }, [this.$slots["default"]])]);
      } else {
        return h("div", {
          ref: "tabItem",
          "class": tabsItemClass
        }, [h("button", {
          "class": "rt-tabs-navigation__item-name"
        }, [this.$slots["default"]])]);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Tabs/TabsNavigationItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tabs_TabsNavigationItemvue_type_script_lang_js_ = (TabsNavigationItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tabs/TabsNavigationItem.vue
var TabsNavigationItem_render, TabsNavigationItem_staticRenderFns




/* normalize component */

var TabsNavigationItem_component = normalizeComponent(
  Tabs_TabsNavigationItemvue_type_script_lang_js_,
  TabsNavigationItem_render,
  TabsNavigationItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TabsNavigationItem = (TabsNavigationItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tabs/TabsContentItem.vue?vue&type=script&lang=js&

/* harmony default export */ var TabsContentItemvue_type_script_lang_js_ = ({
  name: "RtTabsContentItem",
  props: {
    name: {
      type: String,
      "default": ""
    }
  },
  data: function data() {
    return {
      isActive: false,
      parentid: "",
      namesArray: [],
      activeName: ""
    };
  },
  created: function created() {
    tabsStore.addWatcher(this.onUpdateTabsStore);
  },
  methods: {
    onUpdateTabsStore: function onUpdateTabsStore() {
      this.$forceUpdate();
    }
  },
  render: function render() {
    var h = arguments[0];

    if (tabsStore.tabsNames[this.name]) {
      var tabsParentUid = tabsStore.tabsNames[this.name];

      if (tabsStore.tabsParents[tabsParentUid] && tabsStore.tabsParents[tabsParentUid][this.name] && tabsStore.tabsParents[tabsParentUid][this.name].isActive) {
        return h("div", {
          "class": "rt-tabs-content__item"
        }, [this.$slots["default"]]);
      }
    }

    return null;
  }
});
// CONCATENATED MODULE: ./src/components/Tabs/TabsContentItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tabs_TabsContentItemvue_type_script_lang_js_ = (TabsContentItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tabs/TabsContentItem.vue
var TabsContentItem_render, TabsContentItem_staticRenderFns




/* normalize component */

var TabsContentItem_component = normalizeComponent(
  Tabs_TabsContentItemvue_type_script_lang_js_,
  TabsContentItem_render,
  TabsContentItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TabsContentItem = (TabsContentItem_component.exports);
// CONCATENATED MODULE: ./src/utils/browser.js
function browser_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { browser_typeof = function _typeof(obj) { return typeof obj; }; } else { browser_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return browser_typeof(obj); }


var isSupportedWebp;
var supportedWebP = isSupportedWebp === undefined ? testWebP() : isSupportedWebp;
var isTouch = typeof window !== 'undefined' && 'ontouchstart' in window; // Именно функции, чтобы при ресайзе брать актуальные значения

var browser_isMobile = function isMobile() {
  return window.innerWidth <= parseInt(variables['mobile-upper-limit']);
};

var browser_isTablet = function isTablet() {
  return window.innerWidth >= parseInt(variables['tablet-lower-limit']) && window.innerWidth <= parseInt(variables['tablet-upper-limit']);
};

function testWebP() {
  var canvas = (typeof document === "undefined" ? "undefined" : browser_typeof(document)) === 'object' ? document.createElement('canvas') : {};
  canvas.width = canvas.height = 1;
  return canvas.toDataURL ? canvas.toDataURL('image/webp').indexOf('image/webp') === 5 : false;
}

/* harmony default export */ var browser = ({
  supportedWebP: supportedWebP,
  isTouch: isTouch,
  isMobile: browser_isMobile,
  isTablet: browser_isTablet
});
// EXTERNAL MODULE: ./src/color.json
var color = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Card/Card.vue?vue&type=script&lang=js&
var Cardvue_type_script_lang_js_componentsList = {};



/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
  name: "RtCard",
  components: Cardvue_type_script_lang_js_componentsList,
  props: {
    resetMinHeight: {
      type: Boolean,
      "default": false
    },
    staticBodyHeight: {
      type: Boolean,
      "default": false
    },
    hideBackgroundOnMobile: {
      type: Boolean,
      "default": false
    },
    backgroundSizeWidth: {
      type: [Number, String],
      "default": null
    },
    backgroundImageStandAlone: {
      type: Boolean,
      "default": false
    },
    backgroundSizeHeight: {
      type: [Number, String],
      "default": null
    },
    backgroundColorType: {
      type: String,
      "default": null
    },
    backgroundImage: {
      type: String,
      "default": null
    },
    backgroundImageTablet: {
      type: String,
      "default": null
    },
    backgroundImageMobile: {
      type: String,
      "default": null
    },
    backgroundImageWebp: {
      type: String,
      "default": null
    },
    lazyLoad: {
      type: Boolean,
      "default": true
    },
    lazyBackgroundImage: {
      type: String,
      "default": null
    },
    lazyImage: {
      type: String,
      "default": null
    },
    lazyImageTablet: {
      type: String,
      "default": null
    },
    lazyImageMobile: {
      type: String,
      "default": null
    },
    backgroundCover: {
      type: Boolean,
      "default": false
    },
    backgroundRepeat: {
      type: Boolean,
      "default": false
    },
    backgroundBlur: {
      type: Number,
      "default": null
    },
    backgroundSmoke: {
      type: Number,
      "default": null
    },
    backgroundOpacity: {
      type: Number,
      "default": null
    },
    isWhiteColor: {
      type: Boolean,
      "default": false
    },
    backgroundPosition: {
      type: String,
      // [top, left, bottom, right, top-left, top-right, bottom-left, bottom-right]
      "default": null
    },
    backgroundPositionTop: {
      type: [String, Number],
      "default": null
    },
    backgroundPositionBottom: {
      type: [String, Number],
      "default": null
    },
    backgroundPositionRight: {
      type: [String, Number],
      "default": null
    },
    backgroundPositionLeft: {
      type: [String, Number],
      "default": null
    },
    offsetTop: {
      type: Boolean,
      "default": false
    },
    colSize: {
      type: Number,
      "default": null
    },
    cardHeight: {
      type: Number,
      "default": null
    },
    cardHeaderHeight: {
      type: Number,
      "default": null
    },
    cardBodyHeight: {
      type: Number,
      "default": null
    },
    equalPadding: {
      type: Boolean,
      "default": false
    },
    hasDiscount: {
      type: Boolean,
      "default": false
    },
    discountLines: {
      type: Number,
      "default": null
    },
    isB2bPackage: {
      type: Boolean,
      "default": false
    },
    isB2bCategory: {
      type: Boolean,
      "default": false
    },
    categoryCardSize: {
      type: Number,
      "default": 1
    },
    categoryIconMobile: {
      type: String,
      "default": null
    },
    hasLabel: {
      type: Boolean,
      "default": false
    },
    showLabelWhenHover: {
      type: Boolean,
      "default": false
    },
    productCard: {
      type: Boolean,
      "default": false
    },
    doubleSided: {
      type: Boolean,
      "default": false
    },
    productIcon: {
      type: String,
      "default": ''
    },
    labelMainColor: {
      type: String,
      "default": 'b2c-red'
    },
    labelAdditionalColor: {
      type: String,
      "default": 'b2c-yellow'
    },
    labelFontSize: {
      type: String,
      "default": ''
    },
    //    backgroundPosition: {
    //      type: String,
    //      default: ''
    //    },
    discountText: {
      type: String,
      "default": ''
    },
    inTabsWImage: {
      type: Boolean,
      "default": false
    },
    unfoldButtonText: {
      type: String,
      "default": ''
    },
    ga: {
      type: Object,
      "default": null
    },
    hasExpandedBlock: {
      type: Boolean,
      "default": false
    },
    fullWidthTopImage: {
      type: Boolean,
      "default": false
    },
    hasGradientOverImage: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      index: null,
      mobileLayout: browser.isMobile(),
      tabletLayout: browser.isTablet(),
      localBackgroundImage: null,
      localProductIcon: null,
      localCategoryIconMobile: null,
      lazyImageLoaded: false,
      mobileSvgWidth: window.innerWidth - 40
    };
  },
  computed: {
    cardClass: function cardClass() {
      var cardClass = "";

      if (this.backgroundCover) {
        cardClass += " rt-card--has-bg-cover";
      }

      if (this.isWhiteColor) {
        cardClass += " rt-card--has-white-color";
      }

      if (this.backgroundColorType) {
        cardClass += " rt-card-" + this.backgroundColorType;
      }

      if (this.backgroundImage) {
        if (this.backgroundRepeat) {
          cardClass += " rt-card--has-bg-repeat";
        }

        if (!this.backgroundColorType) {
          if (this.backgroundSmoke === 0.5) {
            cardClass += " rt-card--has-smoke";
          }

          if (this.backgroundSmoke === 0.3) {
            cardClass += " rt-card--has-smoke03";
          }

          if (this.backgroundSmoke === 0.2) {
            cardClass += " rt-card--has-smoke02";
          }
        }
      }

      if (this.hideBackgroundOnMobile) {
        cardClass += " rt-card--hide-background-on-mobile";
      }

      if (this.resetMinHeight) {
        cardClass += " rt-card--custom-height";
      }

      if (this.equalPadding) {
        cardClass += " rtb-card";
      }

      if (this.isB2bPackage) {
        cardClass += " rtb-card--package";
      }

      if (this.isB2bCategory) {
        if (this.categoryCardSize === 1) {
          cardClass += " rtb-category--small";
        }

        if (this.categoryCardSize === 2) {
          cardClass += " rtb-category--medium";
        }

        if (this.categoryCardSize === 3) {
          cardClass += " rtb-category--large";
        }

        cardClass += " rtb-category";
      }

      if (this.productCard) {
        cardClass += " rtb-card--product";
      }

      if (this.doubleSided) {
        cardClass += " rtb-card--double-sided";
      }

      if (this.backgroundPosition) {
        if (this.backgroundPosition === 'left') {
          cardClass += " rtb-card--bgp-left";
        } else {
          cardClass += " rtb-card--bgp-right";
        }
      }

      if (this.inTabsWImage) {
        cardClass += " rt-card--half-white-plus-image";
      }

      if (this.hasDiscount) {
        cardClass += " rt-card--has-discount";
      }

      if (this.fullWidthTopImage) {
        cardClass += " rtb-card--img-full-width";
      }

      return cardClass;
    },
    cardContentClass: function cardContentClass() {
      var cardContentClass = "";

      if (this.cardHeight !== null) {
        cardContentClass += " rt-card__content--has-custom-height";
      }

      if (this.offsetTop) {
        cardContentClass += " rt-card__content--has-offset-top";
      }

      if (this.colSize) {
        if (this.colSize === 2) {
          cardContentClass += " rt-col-6 rt-col-md-3";
        }
      }

      if (this.backgroundColorType && this.productCard) {
        cardContentClass += " color-block color-block--" + this.backgroundColorType;
      }

      return cardContentClass;
    },
    cardBodyClass: function cardBodyClass() {
      var cardBodyClass = "";

      if (this.cardBodyHeight !== null) {
        cardBodyClass += " flex-center-center flex-fill";
      }

      if (!this.$slots.content) {
        cardBodyClass += " rt-card__body--is-empty";
      }

      if (this.staticBodyHeight) {
        cardBodyClass += " rt-card__body--is-static";
      }

      return cardBodyClass;
    },
    cardStyle: function cardStyle() {
      var styles = {};

      if (this.cardHeight !== null) {
        styles.height = this.normalizeSize(this.cardHeight);
        styles.minHeight = "auto";
      }

      return styles;
    },
    cardContentStyle: function cardContentStyle() {
      var styles = {};

      if (this.cardHeight !== null) {
        styles.height = this.normalizeSize(this.cardHeight);
        styles.minHeight = "auto";
      }

      return styles;
    },
    bodyStyle: function bodyStyle() {
      var styles = {};

      if (this.cardBodyHeight !== null) {
        styles.minHeight = this.normalizeSize(this.cardBodyHeight);
      }

      return styles;
    },
    cardHeaderStyle: function cardHeaderStyle() {
      var styles = {};

      if (typeof this.cardHeaderHeight !== "undefined") {
        styles.maxHeight = this.normalizeSize(this.cardHeaderHeight);
      }

      return styles;
    },
    cardBackgroundClass: function cardBackgroundClass() {
      var cardBackgroundClass = "";

      if (this.backgroundPosition) {
        if (this.backgroundPosition.search(/(top)|(left)|(bottom)|(right)|(bottom-left)|(top-right)|(bottom-left)|(bottom-right)/) === 0) {
          switch (this.backgroundPosition) {
            case "top":
              cardBackgroundClass += " rt-card__background--position-background-top";
              break;

            case "right":
              cardBackgroundClass += " rt-card__background--position-background-right";
              break;

            case "bottom":
              cardBackgroundClass += " rt-card__background--position-background-bottom";
              break;

            case "left":
              cardBackgroundClass += " rt-card__background--position-background-left";
              break;

            case "top-right":
              cardBackgroundClass += " rt-card__background--position-background-top-right";
              break;

            case "bottom-right":
              cardBackgroundClass += " rt-card__background--position-background-bottom-right";
              break;

            case "bottom-left":
              cardBackgroundClass += " rt-card__background--position-background-bottom-left";
              break;

            case "top-left":
              cardBackgroundClass += " rt-card__background--position-background-top-left";
              break;
          }
        }
      }

      if (this.productCard) {
        cardBackgroundClass += " rtb-card__product-image";
      }

      if (this.productIcon) {
        cardBackgroundClass += " rtb-card__product-icon";
      }

      return cardBackgroundClass;
    },
    cardBackgroundStyle: function cardBackgroundStyle() {
      var styles = {};

      if (this.backgroundImage && !this.backgroundImageStandAlone && this.localBackgroundImage) {
        styles.backgroundImage = "url(" + this.localBackgroundImage + ")";
      }

      if (this.productIcon && this.localProductIcon) {
        styles.backgroundImage = "url(" + this.localProductIcon + ")";
      }

      if (this.backgroundSizeWidth && this.backgroundSizeHeight) {
        var backgroundSizeWidth = this.normalizeSize(this.backgroundSizeWidth);
        var backgroundSizeHeight = this.normalizeSize(this.backgroundSizeHeight);
        styles.backgroundSize = backgroundSizeWidth + " " + backgroundSizeHeight;
      } else {
        if (this.backgroundSizeWidth) {
          var _backgroundSizeWidth = this.normalizeSize(this.backgroundSizeWidth);

          styles.backgroundSize = _backgroundSizeWidth;
        }

        if (this.backgroundSizeHeight) {
          var _backgroundSizeHeight = this.normalizeSize(this.backgroundSizeHeight);

          styles.backgroundSize = _backgroundSizeHeight;
        }
      }

      if (this.backgroundImage) {
        if (this.backgroundBlur) {
          styles.filter = "blur(" + this.normalizeSize(this.backgroundBlur) + ")";
        }

        if (this.backgroundOpacity) {
          styles.opacity = this.backgroundOpacity;
        }
      }

      return styles;
    },
    standAloneBackgroundStyle: function standAloneBackgroundStyle() {
      if (this.backgroundImageStandAlone && this.backgroundImage) {
        var styles = {};

        if (this.localBackgroundImage) {
          styles.backgroundImage = "url(" + this.localBackgroundImage + ")";
        }

        styles.width = this.normalizeSize(this.backgroundSizeWidth) || this.normalizeSize(this.backgroundSizeHeight);
        styles.height = this.normalizeSize(this.backgroundSizeHeight) || this.normalizeSize(this.backgroundSizeWidth);
        styles.top = this.normalizeSize(this.backgroundPositionTop);
        styles.bottom = this.normalizeSize(this.backgroundPositionBottom);
        styles.right = this.normalizeSize(this.backgroundPositionRight);
        styles.left = this.normalizeSize(this.backgroundPositionLeft);
        return styles;
      }

      return {};
    },
    categoryImage: function categoryImage() {
      var styles = {};

      if (this.backgroundImage && this.localBackgroundImage) {
        styles.backgroundImage = "url(" + this.localBackgroundImage + ")";
      }

      return styles;
    },
    categoryIcon: function categoryIcon() {
      var styles = {};

      if (this.categoryIconMobile && this.localCategoryIconMobile) {
        styles.backgroundImage = "url(" + this.localCategoryIconMobile + ")";
      }

      return styles;
    },
    categoryBackgroundColor: function categoryBackgroundColor() {
      var styles = {};

      if (this.isB2bCategory) {
        styles.backgroundColor = this.backgroundColorType;
      }

      return styles;
    },
    computedLazyImage: function computedLazyImage() {
      var result;

      if (this.mobileLayout && this.lazyImageMobile) {
        result = this.lazyImageMobile;
      } else if (this.tabletLayout && this.lazyImageTablet) {
        result = this.lazyImageTablet;
      } else {
        result = this.lazyImage || this.lazyBackgroundImage;
      }

      return result;
    }
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener('resize', function () {
      _this.mobileLayout = browser.isMobile();
      _this.tabletLayout = browser.isTablet();
      if (_this.inTabsWImage) _this.redrawSvg();

      _this.setMainImage();
    });
    this.setMainImage();
    if (this.inTabsWImage) this.redrawSvg();
    var anchor = this.$el.querySelector('a, button');

    if (anchor && this.ga && this.$el) {
      var parentIsLink = this.$el.parentElement.tagName === 'A';
      var clickableEl = parentIsLink ? this.$el.parentElement : anchor;
      clickableEl.addEventListener('click', function (Event) {
        var el = Event.target;
        if (_this.$el.getAttribute('data-ga-pushed') || !_this.ga) return;
        Event.preventDefault();
        if (!window.dataLayer) window.dataLayer = [];
        window.dataLayer.push(Object.assign({
          event: window[variables.globalSettingsKey].segment,
          type: 'card_click'
        }, _this.ga));

        _this.$el.setAttribute('data-ga-pushed', 'true');

        el.click();
      }, false);
    }

    if (this.hasExpandedBlock) {
      window.addEventListener('timeToExpand', function () {
        _this.$el.querySelector('.rtb-card__expanding-button').classList.contains('rtb-card__expanding-button--active') ? _this.$el.querySelector('.rtb-card__expanding-button').classList.remove('rtb-card__expanding-button--active') : _this.$el.querySelector('.rtb-card__expanding-button').classList.add('rtb-card__expanding-button--active');
      });
    }
  },
  methods: {
    loadImageAsync: function loadImageAsync(src, resolve) {
      var reject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
      var image = new Image();
      image.src = src;

      image.onload = function () {
        resolve({
          naturalHeight: image.naturalHeight,
          naturalWidth: image.naturalWidth,
          src: image.src
        });
      };

      image.onerror = function (e) {
        reject(e);
      };
    },

    /**
     * Возвращает основной src для фона, опираясь на поддержку браузером и BP
     */
    getMainImage: function getMainImage() {
      var mainImage;

      if (browser.isMobile() && this.backgroundImageMobile) {
        mainImage = this.backgroundImageMobile;
      } else if (browser.isTablet() && this.backgroundImageTablet) {
        mainImage = this.backgroundImageTablet;
      } else if (browser.supportedWebP && this.backgroundImageWebp) {
        mainImage = this.backgroundImageWebp;
      } else {
        mainImage = this.backgroundImage;
      }

      return mainImage;
    },

    /**
     * Сеттит основной src для фона, опираясь на загруженность Lazy, поддержку браузером и BP
     */
    setMainImage: function setMainImage() {
      // Игнорируем если lazy включен и не подгружен
      if (!this.checkLazy()) return;
      this.localBackgroundImage = this.getMainImage();
    },

    /**
     * Заменяем фон на lazy, если есть параметр с её src
     */
    checkLazy: function checkLazy() {
      var _this2 = this;

      // Выключена lazy или уже загружена
      if (!this.lazyLoad || this.lazyImageLoaded) return true;
      var mainImage = this.getMainImage();

      if (this.lazyLoad) {
        if (mainImage) {
          // Заменяем основную картинку на lazy
          this.localBackgroundImage = this.computedLazyImage; // Подписываемся на загрузку основной

          this.loadImageAsync(mainImage, function (img) {
            _this2.lazyImageLoaded = true;
            _this2.localBackgroundImage = mainImage;
          });
        }

        if (this.productIcon) {
          this.loadImageAsync(this.productIcon, function (img) {
            _this2.localProductIcon = _this2.productIcon;
          });
        }

        if (this.categoryIconMobile) {
          this.loadImageAsync(this.categoryIconMobile, function (img) {
            _this2.localCategoryIconMobile = _this2.categoryIconMobile;
          });
        }
      } else {
        if (mainImage) {
          this.localBackgroundImage = mainImage;
        }

        if (this.productIcon) {
          this.localProductIcon = this.productIcon;
        }

        if (this.categoryIconMobile) {
          this.localCategoryIconMobile = this.categoryIconMobile;
        }
      }
    },
    normalizeSize: function normalizeSize(size) {
      if (typeof size === "number") {
        return size + "px";
      }

      if (typeof size === "string") {
        return size;
      }

      return size;
    },
    flipCard: function flipCard() {
      if (this.$el.classList.contains('rtb-card--double-sided')) {
        if (this.$el.classList.contains('is-flipped')) {
          this.$el.classList.toggle('is-flipped');
        } else {
          for (var i = 0; i < this.$parent.$children.length; i++) {
            this.$parent.$children[i].$el.classList.remove('is-flipped');
          }

          this.$el.classList.toggle('is-flipped');
        }

        if ((this.tabletLayout || this.mobileLayout) && document.querySelector('.popup-content')) {
          document.querySelector('.popup-content').innerHTML = this.$el.querySelector('.rtb-card__reverse').innerHTML;
          setTimeout(function () {
            document.querySelector('.rtb-popup-wrapper').classList.add('rtb-popup-wrapper--active');
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
          }, 300);
        }
      }
    },
    unfoldFeatures: function unfoldFeatures() {
      this.$el.querySelector('.equipment__full-description').classList.contains('equipment__full-description--shown') ? this.$el.querySelector('.equipment__full-description').classList.remove('equipment__full-description--shown') : this.$el.querySelector('.equipment__full-description').classList.add('equipment__full-description--shown');
      this.$el.querySelector('.equipment__unfold-button-arrow').classList.contains('equipment__unfold-button-arrow--reverse') ? this.$el.querySelector('.equipment__unfold-button-arrow').classList.remove('equipment__unfold-button-arrow--reverse') : this.$el.querySelector('.equipment__unfold-button-arrow').classList.add('equipment__unfold-button-arrow--reverse');
    },
    redrawSvg: function redrawSvg() {
      if (this.$el.querySelector('.rt-card__content')) {
        this.mobileSvgWidth = +getComputedStyle(this.$el.querySelector('.rt-card__content')).width.slice(0, -2);
      }
    },
    expandBlock: function expandBlock() {
      window.dispatchEvent(new CustomEvent('timeToExpand'));
    }
  },
  render: function render(h) {
    var _this3 = this;

    var categoryCard = function () {
      if (_this3.isB2bCategory) {
        if (_this3.categoryCardSize === 3) {
          return h("div", {
            "class": "rtb-category__content"
          }, [h("div", {
            "class": "rtb-category__text-content"
          }, [h("div", {
            "class": "rtb-category__content-top"
          }, [_this3.$slots.content]), h("div", {
            "class": "rtb-category__content-bottom"
          }, [_this3.$slots.footer])]), h("div", {
            "class": "rtb-category__triangle"
          }, [h("svg", {
            "class": "rtb-category-triangle",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 76 364"
            }
          }, [h("polygon", {
            attrs: {
              points: "0 364,76 0,0 0"
            }
          })])]), h("div", {
            "class": "rtb-category__image",
            style: _this3.categoryImage
          })]);
        }

        if (_this3.categoryCardSize === 2) {
          return h("div", {
            "class": "rtb-category__content"
          }, [h("div", {
            "class": "rtb-category__text-content"
          }, [h("div", {
            "class": "rtb-category__content-top"
          }, [h("div", {
            "class": "rtb-category__mobile-header",
            style: _this3.categoryIcon
          }), _this3.$slots.content]), h("div", {
            "class": "rtb-category__content-bottom"
          }, [_this3.$slots.footer])]), h("div", {
            "class": "rtb-category__triangle"
          }, [h("svg", {
            "class": "rtb-category__triangle-image",
            attrs: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 76 364"
            }
          }, [h("polygon", {
            attrs: {
              points: "0 364,76 0,0 0"
            }
          })])]), h("div", {
            "class": "rtb-category__image",
            style: _this3.categoryImage
          })]);
        }

        if (_this3.categoryCardSize === 1) {
          return h("div", {
            "class": "rtb-category__content"
          }, [h("div", {
            "class": "rtb-category__text-content"
          }, [h("div", {
            "class": "rtb-category__content-top"
          }, [h("div", {
            "class": "rtb-category__mobile-header",
            style: _this3.categoryIcon
          }), _this3.$slots.content]), h("div", {
            "class": "rtb-category__content-bottom"
          }, [_this3.$slots.footer])])]);
        }
      } else {
        return null;
      }
    }();

    var label = function () {
      if (_this3.hasLabel) {
        return h("div", {
          "class": _this3.showLabelWhenHover ? 'rtb-card__label-hover rtb-card__label' : 'rtb-card__label'
        }, [h("div", {
          "class": "rtb-card__label-content",
          style: "font-size:" + _this3.labelFontSize
        }, [h("p", {
          "class": "rtb-card__label-text color-block--" + _this3.labelMainColor.replace(/^(b2b\-)|(b2c\-)/i, ''),
          style: "background-color:" + _this3.labelMainColor
        }, [_this3.$slots.label])]), h("svg", {
          attrs: {
            width: "80",
            height: "48",
            xmlns: "http://www.w3.org/2000/svg"
          }
        }, [h("g", {
          attrs: {
            fill: "none",
            "fill-rule": "evenodd"
          }
        }, [h("path", {
          "class": "svg-fill--" + _this3.labelAdditionalColor,
          attrs: {
            d: "M79.153 35.741l-.007.012a2.955 2.955 0 0 1-.373.538c-.02.024-.039.05-.06.072l-.041.047-11.426 11.196V31.304h9.118a3.251 3.251 0 0 1 .438.033h.005a2.977 2.977 0 0 1 .253.046c.152.035.302.08.448.137l.017.006c.07.028.14.058.207.091l.03.015c.069.033.137.07.203.108l.004.003c.065.038.128.08.19.122l.03.021a2.99 2.99 0 0 1 .21.164 2.962 2.962 0 0 1 .341.335l.026.028c.05.06.098.12.143.182l.022.03c.046.065.09.13.13.197l.004.008c.042.07.08.14.116.213l.004.008a3.082 3.082 0 0 1 .104.237 3.014 3.014 0 0 1 .202.99v.03c.004.159-.005.318-.027.475l-.006.03c-.02.138-.05.275-.091.41l-.007.019a2.765 2.765 0 0 1-.086.241l-.011.025a2.93 2.93 0 0 1-.11.233z"
          }
        }), h("path", {
          "class": "svg-fill--" + _this3.labelMainColor,
          attrs: {
            d: "M79.777 14.674v11.41l-.001 7.415c-.004.071-.013.141-.02.212l-.018.174c-.129 1.016-.596 1.921-1.268 2.638l.087-.103a2.919 2.919 0 0 0 .627-2.206 3.018 3.018 0 0 0-.895-1.799 3.335 3.335 0 0 0-.604-.463 3.145 3.145 0 0 0-.446-.216 3.185 3.185 0 0 0-1.16-.222h-5.73L0 31.512V0h74.962c2.661-.008 4.812 2.167 4.813 4.788l.002 9.886zm-1.665 22.214c.044-.038.082-.083.125-.123l-.125.123z"
          }
        })])])]);
      }
    }();

    var discount = function () {
      if (_this3.hasDiscount) {
        if (_this3.discountLines === 1) {
          return h("div", {
            "class": "rtb-card__discount"
          }, [h("div", {
            "class": "rtb-card__discount-line rtb-card__discount-line-1"
          }, [h("span", {
            "class": "rtb-card__discount-line__flag-text"
          }, [_this3.discountText]), h("div", {
            "class": "rtb-card__discount-line__flag"
          }, [h("svg", {
            attrs: {
              width: "30",
              height: "29",
              viewBox: "0 0 83 80",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [h("path", {
            attrs: {
              d: "M0 0h83v80l-41.45-6.884L0 80z",
              fill: "#FCD500",
              "fill-rule": "evenodd"
            }
          })])])])]);
        }

        if (_this3.discountLines === 2) {
          return h("div", {
            "class": "rtb-card__discount"
          }, [h("div", {
            "class": "rtb-card__discount-line rtb-card__discount-line-1"
          }, [h("span", {
            "class": "rtb-card__discount-line__flag-text"
          }, [_this3.discountText]), h("div", {
            "class": "rtb-card__discount-line__flag"
          }, [h("svg", {
            attrs: {
              width: "30",
              height: "29",
              viewBox: "0 0 83 80",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [h("path", {
            attrs: {
              d: "M0 0h83v80l-41.45-6.884L0 80z",
              fill: "#54D3B1",
              "fill-rule": "evenodd"
            }
          })])])]), h("div", {
            "class": "rtb-card__discount-line rtb-card__discount-line-2"
          })]);
        }

        if (_this3.discountLines === 3) {
          return h("div", {
            "class": "rtb-card__discount triple"
          }, [h("div", {
            "class": "rtb-card__discount-line rtb-card__discount-line-1"
          }, [h("span", {
            "class": "rtb-card__discount-line__flag-text"
          }, [_this3.discountText]), h("div", {
            "class": "rtb-card__discount-line__flag"
          }, [h("svg", {
            attrs: {
              width: "30",
              height: "29",
              viewBox: "0 0 83 80",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [h("path", {
            attrs: {
              d: "M0 0h83v80l-41.45-6.884L0 80z",
              fill: "#64DDEC",
              "fill-rule": "evenodd"
            }
          })])])]), h("div", {
            "class": "rtb-card__discount-line rtb-card__discount-line-2"
          }), h("div", {
            "class": "rtb-card__discount-line rtb-card__discount-line-3"
          })]);
        }
      } else {
        return null;
      }
    }();

    var header = function () {
      if (_this3.$slots.header) {
        return h("div", {
          style: _this3.cardHeaderStyle,
          "class": "rt-card__header"
        }, [_this3.$slots["header"]]);
      } else {
        return null;
      }
    }();

    var bottomList = function () {
      if (_this3.$slots["bottom-list"]) {
        return h("div", {
          "class": "rt-card__bottom-list"
        }, [_this3.$slots["bottom-list"]]);
      } else {
        return null;
      }
    }();

    var contentWithoutWrapper = function () {
      if (_this3.$slots['content-without-wrapper']) {
        return _this3.$slots['content-without-wrapper'];
      } else {
        return null;
      }
    }();

    var productTriangle = function () {
      if (_this3.productCard && !_this3.productIcon) {
        return h("div", {
          "class": "rtb-product__triangle"
        }, [h("svg", {
          "class": "rtb-product__triangle-image",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 364 40"
          }
        }, [h("polygon", {
          attrs: {
            points: "0 38,0 40,364 40,364 0"
          }
        })])]);
      }
    }();

    var doubleSided = function () {
      if (_this3.doubleSided) {
        return h("div", {
          "class": "rtb-card__reverse"
        }, [h("svg", {
          attrs: {
            width: "35",
            height: "35",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "-10 -10 35 35"
          },
          "class": "rtb-card-close"
        }, [h("path", {
          attrs: {
            d: "M15 1.5L13.5 0l-6 6-6-6L0 1.5l6 6-6 6L1.5 15l6-6 6 6 1.5-1.5-6-6z",
            fill: "#101828",
            "fill-rule": "evenodd",
            "fill-opacity": ".5"
          }
        })]), _this3.$slots.reverse]);
      }
    }();

    var hiddenPopupBenefits = function () {
      if (_this3.$slots['popup-special-benefits']) {
        return h("div", {
          "class": "rt-card__popup-benefits"
        }, [_this3.$slots['popup-special-benefits']]);
      } else {
        return null;
      }
    }();

    var hiddenPopupCosts = function () {
      if (_this3.$slots['popup-special-costs']) {
        return h("div", {
          "class": "rt-card__popup-costs"
        }, [_this3.$slots['popup-special-costs']]);
      } else {
        return null;
      }
    }();

    var triangle = function () {
      if (_this3.inTabsWImage) {
        if (_this3.tabletLayout || _this3.mobileLayout) {
          return h("svg", {
            attrs: {
              width: "100%",
              height: "100"
            },
            "class": "rt-card__content-triangle"
          }, [h("polygon", {
            attrs: {
              points: "0,100 " + _this3.mobileSvgWidth + ",0 " + _this3.mobileSvgWidth + ",100",
              fill: "rgb(255, 255, 255)"
            }
          })]);
        } else {
          return h("svg", {
            attrs: {
              width: "100",
              height: "490"
            },
            "class": "rt-card__content-triangle"
          }, [h("polygon", {
            attrs: {
              points: "0,0 100,0 0,490",
              fill: "rgb(255, 255, 255)"
            }
          })]);
        }
      }
    }();

    var unfoldButton = function () {
      if (_this3.unfoldButtonText) {
        if (_this3.mobileLayout) {
          return h("div", {
            "class": "equipment__unfold-button color-purple",
            on: {
              "click": _this3.unfoldFeatures
            }
          }, [_this3.unfoldButtonText, h("div", {
            "class": "equipment__unfold-button-arrow"
          }, [h("svg", {
            attrs: {
              width: "20",
              height: "20"
            }
          }, [h("polyline", {
            attrs: {
              points: "2,6 10,14 18,6",
              fill: "none",
              stroke: "#e3e8ec",
              "stroke-width": "2"
            }
          })])])]);
        } else {
          return null;
        }
      }
    }();

    var expandBlock = function () {
      if (_this3.hasExpandedBlock) {
        return h("div", {
          "class": "rtb-card__expanding-block rt-space-top05 rt-space-bottom15",
          on: {
            "click": _this3.expandBlock
          }
        }, [_this3.$slots['expanding-block']]);
      } else {
        return null;
      }
    }();

    var headerImage = function () {
      if (_this3.fullWidthTopImage) {
        if (_this3.hasGradientOverImage) {
          return h("div", {
            "class": "rtb-card__image-wrapper rtb-card__image-wrapper--has-gradient rt-font-center"
          }, [h("img", {
            "class": "additional-possibilities__card-image",
            attrs: {
              src: _this3.backgroundImage
            }
          })]);
        } else {
          return h("div", {
            "class": "rtb-card__image-wrapper rt-font-center"
          }, [h("img", {
            "class": "additional-possibilities__card-image",
            attrs: {
              src: _this3.backgroundImage
            }
          })]);
        }
      } else {
        return null;
      }
    }();

    if (this.doubleSided) {
      return h("div", {
        "class": "rt-card " + this.cardClass,
        style: this.cardStyle,
        on: {
          "click": this.flipCard
        }
      }, [h("div", {
        "class": "rt-card__content" + this.cardContentClass,
        style: this.cardBackgroundStyle
      }, [h("div", {
        "class": "rt-card__body" + this.cardBodyClass,
        style: this.bodyStyle
      }, [this.$slots["content"]]), h("div", {
        "class": "rt-card__footer"
      }, [this.$slots["footer"]])]), doubleSided]);
    } else if (!this.isB2bCategory) {
      return h("div", {
        "class": "rt-card" + this.cardClass,
        style: this.cardStyle
      }, [this.backgroundImageStandAlone ? h("div", {
        style: this.standAloneBackgroundStyle,
        "class": "rt-card__stand-alone-background"
      }) : null, discount, label, !this.fullWidthTopImage ? h("div", {
        style: this.cardBackgroundStyle,
        "class": "rt-card__background" + this.cardBackgroundClass
      }) : null, h("div", {
        "class": "rt-card__content" + this.cardContentClass
      }, [header, productTriangle, headerImage, h("div", {
        "class": "rt-card__body" + this.cardBodyClass,
        style: this.bodyStyle
      }, [unfoldButton, this.$slots["content"], expandBlock]), bottomList, contentWithoutWrapper, h("div", {
        "class": "rt-card__footer"
      }, [this.$slots["footer"]]), hiddenPopupBenefits, hiddenPopupCosts, triangle])]);
    } else {
      return h("div", {
        "class": "rt-card" + this.cardClass,
        style: this.cardStyle
      }, [categoryCard]);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Card/Card.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Card/Card.vue
var Card_render, Card_staticRenderFns




/* normalize component */

var Card_component = normalizeComponent(
  Card_Cardvue_type_script_lang_js_,
  Card_render,
  Card_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Card = (Card_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Card/CardB2o.vue?vue&type=script&lang=js&
var CardB2ovue_type_script_lang_js_componentsList = {};



/* harmony default export */ var CardB2ovue_type_script_lang_js_ = ({
  name: "RtCardB2o",
  components: CardB2ovue_type_script_lang_js_componentsList,
  props: {
    target: {
      type: String,
      "default": "_blank"
    },
    href: {
      type: String,
      "default": ""
    },
    isBlueCard: {
      type: Boolean,
      "default": false
    },
    hasBottomContent: {
      type: Boolean,
      "default": false
    },
    hasHiddenFooter: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  computed: {
    classCard: function classCard() {
      var classCard = ["rt-card", "rt-card-b2o"];

      if (this.isBlueCard) {
        classCard.push("rt-card-b2o--blue-card");
      }

      if (this.hasBottomContent) {
        classCard.push("rt-card-b2o--bottom-content");
      }

      if (this.hasHiddenFooter) {
        classCard.push("rt-card-b2o--has-hidden-footer");
      }

      return classCard.join(" ");
    }
  },
  methods: {},
  render: function render(h) {
    var _this = this;

    var footer = function footer() {
      if (_this.$slots.footer) {
        return h("div", {
          "class": "rt-card-b2o-footer"
        }, [_this.$slots.footer]);
      }
    };

    if (this.href.length > 0) {
      return h("a", {
        attrs: {
          href: this.href,
          target: this.target
        },
        "class": this.classCard
      }, [h("div", {
        "class": "rt-card-b2o-inner"
      }, [h("div", {
        "class": "rt-card-b2o-content"
      }, [this.$slots.content]), footer()])]);
    } else {
      return h("div", {
        "class": this.classCard
      }, [h("div", {
        "class": "rt-card-b2o-inner"
      }, [h("div", {
        "class": "rt-card-b2o-content"
      }, [this.$slots.content]), footer()])]);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Card/CardB2o.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardB2ovue_type_script_lang_js_ = (CardB2ovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Card/CardB2o.vue
var CardB2o_render, CardB2o_staticRenderFns




/* normalize component */

var CardB2o_component = normalizeComponent(
  Card_CardB2ovue_type_script_lang_js_,
  CardB2o_render,
  CardB2o_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardB2o = (CardB2o_component.exports);
// CONCATENATED MODULE: ./src/components/ProductCard/ProductCard.tsx
function ProductCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProductCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProductCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProductCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProductCard_defineProperties(Constructor, staticProps); return Constructor; }

function ProductCard_possibleConstructorReturn(self, call) { if (call && (ProductCard_typeof(call) === "object" || typeof call === "function")) { return call; } return ProductCard_assertThisInitialized(self); }

function ProductCard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProductCard_getPrototypeOf(o) { ProductCard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProductCard_getPrototypeOf(o); }

function ProductCard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProductCard_setPrototypeOf(subClass, superClass); }

function ProductCard_setPrototypeOf(o, p) { ProductCard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProductCard_setPrototypeOf(o, p); }

function ProductCard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProductCard_typeof = function _typeof(obj) { return typeof obj; }; } else { ProductCard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProductCard_typeof(obj); }

var ProductCard_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : ProductCard_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductCard_metadata = undefined && undefined.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : ProductCard_typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductCard_ProductCard =
/*#__PURE__*/
function (_Vue) {
  ProductCard_inherits(ProductCard, _Vue);

  function ProductCard() {
    var _this;

    ProductCard_classCallCheck(this, ProductCard);

    _this = ProductCard_possibleConstructorReturn(this, ProductCard_getPrototypeOf(ProductCard).apply(this, arguments));
    _this.tel = "";
    _this.type = "desktop";
    return _this;
  }

  ProductCard_createClass(ProductCard, [{
    key: "checkWidth",
    value: function checkWidth() {
      var _this2 = this;

      var w = window.innerWidth;
      var image = this.$refs.image;

      if (w <= parseInt(variables["tablet-upper-limit"])) {
        if (w < parseInt(variables["mobile-upper-limit"])) {
          if (this.type != "mobile") {
            image.classList.add("rt-product-card__image--hide-animate");
            setTimeout(function () {
              image.classList.remove("rt-product-card__image--hide-animate");
              _this2.type = "mobile";
              image.classList.add("rt-product-card__image--show-animate");
              setTimeout(function () {
                image.classList.remove("rt-product-card__image--show-animate");
              }, 400);
            }, 400);
          }
        } else {
          if (this.type != "tablet") {
            image.classList.add("rt-product-card__image--hide-animate");
            setTimeout(function () {
              image.classList.remove("rt-product-card__image--hide-animate");
              _this2.type = "tablet";
              image.classList.add("rt-product-card__image--show-animate");
              setTimeout(function () {
                image.classList.remove("rt-product-card__image--show-animate");
              }, 400);
            }, 400);
          }
        }
      } else {
        if (this.type != "desktop") {
          image.classList.add("rt-product-card__image--hide-animate");
          setTimeout(function () {
            image.classList.remove("rt-product-card__image--hide-animate");
            _this2.type = "desktop";
            image.classList.add("rt-product-card__image--show-animate");
            setTimeout(function () {
              image.classList.remove("rt-product-card__image--show-animate");
            }, 400);
          }, 400);
        }
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.checkWidth();

      if (this.tabletBackgroundImage || this.mobileBackgroundImage) {
        window.addEventListener("resize", this.checkWidth, {
          passive: false
        });
      }
    }
  }, {
    key: "render",
    value: function render(h) {
      var _this3 = this;

      var productCardClass = function () {
        var className = "rt-product-card";

        if (_this3.fixedImageHeight && !_this3.safeImageRate) {
          className += " rt-product-card--has-fixed-height";
        }

        if (_this3.fixedImageHeight && _this3.safeImageRate) {
          className += " rt-product-card--has-static-image-with-fix-height";
        }

        if (_this3.contentOrientation === 'bottom') {
          className += ' rt-product-card--has-bottom-orient';
        }

        if (_this3.color) {
          className += " rt-product-card--".concat(_this3.color);
        }

        return className;
      }();

      var productImageStyle = function () {
        var styleObj = {};

        if (_this3.safeImageRate && _this3.type === "mobile") {
          if (_this3.type === "tablet" && _this3.tabletBackgroundImage) {
            return _this3.tabletBackgroundImage;
          } else if (_this3.type === "mobile" && _this3.mobileBackgroundImage) {
            return _this3.mobileBackgroundImage;
          } else {
            return _this3.backgroundImage;
          }
        } else {
          if (_this3.backgroundImage) {
            if (_this3.type === "tablet" && _this3.tabletBackgroundImage) {
              styleObj["backgroundImage"] = "url(" + _this3.tabletBackgroundImage + ")";
            } else if (_this3.type === "mobile" && _this3.mobileBackgroundImage) {
              styleObj["backgroundImage"] = "url(" + _this3.mobileBackgroundImage + ")";
            } else {
              styleObj["backgroundImage"] = "url(" + _this3.backgroundImage + ")";
            }
          }
        }

        return styleObj;
      }();

      if (this.$slots.footer && this.$slots.content) {
        return h("div", {
          "class": productCardClass
        }, [h("div", {
          "class": "rt-product-card__body"
        }, [h("div", {
          "class": "rt-product-card__content"
        }, [this.$slots.content]), h("div", {
          "class": "rt-product-card__footer"
        }, [this.$slots.footer])]), h("div", {
          ref: "image",
          "class": "rt-product-card__image"
        })]);
      }

      if (this.safeImageRate && this.type === "mobile") {
        return h("div", {
          "class": productCardClass
        }, [h("div", {
          "class": "rt-product-card__body"
        }, [this.$slots["default"]]), h("div", {
          "class": "rt-product-card__image rt-product-card__image-tag"
        }, [h("img", {
          ref: "image",
          "class": "rt-product-card__image-tag",
          attrs: {
            src: productImageStyle
          }
        })])]);
      }

      return h("div", {
        "class": productCardClass
      }, [h("div", {
        "class": "rt-product-card__body"
      }, [this.$slots["default"]]), h("div", {
        ref: "image",
        "class": "rt-product-card__image",
        style: productImageStyle
      })]);
    }
  }]);

  return ProductCard;
}(external_vue_default.a);

ProductCard_decorate([Prop({
  "default": false
}), ProductCard_metadata("design:type", Boolean)], ProductCard_ProductCard.prototype, "fixedImageHeight", void 0);

ProductCard_decorate([Prop({
  "default": null
}), ProductCard_metadata("design:type", String)], ProductCard_ProductCard.prototype, "backgroundImage", void 0);

ProductCard_decorate([Prop({
  "default": null
}), ProductCard_metadata("design:type", String)], ProductCard_ProductCard.prototype, "color", void 0);

ProductCard_decorate([Prop({
  "default": null
}), ProductCard_metadata("design:type", String)], ProductCard_ProductCard.prototype, "tabletBackgroundImage", void 0);

ProductCard_decorate([Prop({
  "default": null
}), ProductCard_metadata("design:type", String)], ProductCard_ProductCard.prototype, "mobileBackgroundImage", void 0);

ProductCard_decorate([Prop({
  "default": false
}), ProductCard_metadata("design:type", Boolean)], ProductCard_ProductCard.prototype, "safeImageRate", void 0);

ProductCard_decorate([Prop({
  "default": 'top'
}), ProductCard_metadata("design:type", String)], ProductCard_ProductCard.prototype, "contentOrientation", void 0);

ProductCard_ProductCard = ProductCard_decorate([vue_class_component_esm], ProductCard_ProductCard);
/* harmony default export */ var components_ProductCard_ProductCard = ({
  component: ProductCard_ProductCard,
  name: "RtProductCard"
});
// CONCATENATED MODULE: ./src/components/TariffCard/TariffCard.tsx
function TariffCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TariffCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TariffCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) TariffCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) TariffCard_defineProperties(Constructor, staticProps); return Constructor; }

function TariffCard_possibleConstructorReturn(self, call) { if (call && (TariffCard_typeof(call) === "object" || typeof call === "function")) { return call; } return TariffCard_assertThisInitialized(self); }

function TariffCard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TariffCard_getPrototypeOf(o) { TariffCard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TariffCard_getPrototypeOf(o); }

function TariffCard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TariffCard_setPrototypeOf(subClass, superClass); }

function TariffCard_setPrototypeOf(o, p) { TariffCard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TariffCard_setPrototypeOf(o, p); }

function TariffCard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TariffCard_typeof = function _typeof(obj) { return typeof obj; }; } else { TariffCard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TariffCard_typeof(obj); }

var TariffCard_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : TariffCard_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TariffCard_metadata = undefined && undefined.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : TariffCard_typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TariffCard_TariffCard =
/*#__PURE__*/
function (_Vue) {
  TariffCard_inherits(TariffCard, _Vue);

  function TariffCard() {
    var _this;

    TariffCard_classCallCheck(this, TariffCard);

    _this = TariffCard_possibleConstructorReturn(this, TariffCard_getPrototypeOf(TariffCard).apply(this, arguments));
    _this.colorObject = color;
    _this.localColor = null;
    return _this;
  }

  TariffCard_createClass(TariffCard, [{
    key: "mounted",
    value: function mounted() {
      if (this.color in this.colorObject) {
        this.localColor = this.colorObject[this.color];
      }
    }
  }, {
    key: "render",
    value: function render(h) {
      var _this2 = this;

      var additionalTopElements = function () {
        if (_this2.hasSeal) {
          return h("svg", {
            "class": "rt-card-seal",
            attrs: {
              width: "36px",
              height: "72px",
              viewBox: "0 0 36 72",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [h("g", {
            attrs: {
              id: "Page-1",
              stroke: "none",
              "stroke-width": "1",
              fill: "none",
              "fill-rule": "evenodd"
            }
          }, [h("g", {
            attrs: {
              id: "Card_v2-Copy",
              transform: "translate(-388.000000, -870.000000)",
              fill: _this2.localColor
            }
          }, [h("path", {
            attrs: {
              d: "M388,910.8 C407.2,931.6 416.8,942 416.8,942 C424,934.8 424,934.8 424,932.4 C424,932.4 424,884.4 424,877.2 C424,872.4 420,870 412,870 C418.4,870 421.6,871.6 421.6,874.8 C421.6,878 410.4,890 388,910.8 Z",
              id: "Fill-5-Copy-6"
            }
          })])])]);
        } else if (_this2.discount) {
          return h("div", {
            "class": "rt-card-discount"
          }, [h("svg", {
            attrs: {
              width: "76px",
              height: "48px",
              viewBox: "0 0 76 48",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [h("g", {
            attrs: {
              id: "Page-1",
              stroke: "none",
              "stroke-width": "1",
              fill: "none",
              "fill-rule": "evenodd"
            }
          }, [h("g", {
            attrs: {
              id: "Card_v3_color-Copy",
              transform: "translate(-362.000000, -871.000000)"
            }
          }, [h("g", {
            attrs: {
              id: "sale-flags-copy",
              transform: "translate(362.000000, 871.000000)"
            }
          }, [h("g", {
            attrs: {
              id: "Group-10"
            }
          }, [h("path", {
            attrs: {
              d: "M75.1531322,35.7412929 C75.1510799,35.7453159 75.1485145,35.7488361 75.1464623,35.7528592 C75.06078,35.9122734 74.9591927,36.065653 74.8422133,36.2104836 C74.8196383,36.2381422 74.7970634,36.2647951 74.7734623,36.2914479 C74.7529396,36.3150834 74.7344691,36.3402276 74.7124072,36.3633603 C74.6990675,36.3789497 74.6862408,36.3945391 74.6718749,36.4096256 C74.6718749,36.4096256 63.2658734,47.5867242 63.2463768,47.6058338 L63.2463768,31.3043478 L72.3640977,31.3043478 C72.4682504,31.3048507 72.5724031,31.3103824 72.6765558,31.320943 C72.7186273,31.325469 72.7601858,31.3304978 72.8022573,31.3365324 L72.8068749,31.3370353 C72.8858873,31.3480987 72.9633605,31.3621795 73.0403206,31.3792775 C73.0469904,31.3807862 73.0536603,31.3822948 73.0598171,31.3833006 C73.2116851,31.4179996 73.3615008,31.4632592 73.508238,31.520085 C73.5138818,31.5220966 73.5190125,31.5241081 73.5246562,31.5261196 C73.5949464,31.5537783 73.6642105,31.5844542 73.7324485,31.6171416 C73.7421968,31.6221705 73.7524581,31.6266964 73.7622064,31.6317253 C73.8309574,31.6654185 73.8986823,31.7011233 73.964868,31.7403482 C73.9664072,31.741354 73.9679464,31.7423597 73.9694856,31.7433655 C74.0336191,31.7810818 74.0967264,31.8223183 74.1582944,31.8650634 C74.1685558,31.8721038 74.1793302,31.8786413 74.1895916,31.8861845 C74.2496204,31.9289297 74.3091363,31.9741892 74.3665998,32.0219632 C74.3778873,32.0310151 74.3891748,32.0405699 74.3999492,32.0501247 C74.459465,32.0999102 74.5174416,32.1517073 74.573366,32.2065216 C74.6323687,32.2638504 74.6872669,32.3236936 74.7401129,32.3845425 C74.748835,32.3940973 74.7575572,32.4036521 74.7657663,32.4132069 C74.8160469,32.4725472 74.8637621,32.5328933 74.9089121,32.594748 C74.9166081,32.6053086 74.923791,32.6158692 74.931487,32.6259268 C74.97715,32.690296 75.0207608,32.7556709 75.06078,32.8220516 C75.0623192,32.8250689 75.0638584,32.8275833 75.0653976,32.8300977 C75.1069561,32.8999986 75.1454361,32.9709052 75.1813509,33.0428176 C75.182377,33.0458349 75.1839162,33.0483493 75.1854554,33.0513666 C75.220857,33.1237819 75.2531803,33.197203 75.2824251,33.2711269 C75.2844774,33.2771615 75.2865297,33.2826933 75.289095,33.288225 C75.3788818,33.5200545 75.4389107,33.760433 75.4691817,34.0028231 C75.4804692,34.0958566 75.4876521,34.1873815 75.4907305,34.2789064 C75.4907305,34.288964 75.4912436,34.2980159 75.4912436,34.3080736 C75.494835,34.466985 75.4855998,34.6258963 75.4635379,34.7827961 C75.4619987,34.7933566 75.4599465,34.8034143 75.4584073,34.813472 C75.4378846,34.9512622 75.4071005,35.0880466 75.3665682,35.2223166 C75.3645159,35.2288541 75.3619506,35.2353916 75.3598983,35.2419291 C75.334758,35.3233963 75.3065393,35.4038577 75.273703,35.4833134 C75.2706246,35.4913595 75.26652,35.4999086 75.2629286,35.5079547 C75.2295792,35.5869075 75.1936645,35.6648545 75.1531322,35.7412929 Z",
              id: "Fill-245-Copy",
              fill: "#BC104B"
            }
          }), h("path", {
            attrs: {
              d: "M75.7770296,14.6736702 L75.7765165,26.0846098 L75.7760035,33.4986278 C75.7718989,33.5700373 75.7631768,33.640441 75.7565069,33.7108448 C75.7544546,33.7333069 75.7481268,33.7913062 75.7375234,33.8848426 C75.6092566,34.9011711 75.1423652,35.8063622 74.4697338,36.5229718 C74.5118054,36.4741921 74.5343803,36.4470363 74.5569553,36.4198806 C74.6739347,36.27505 74.7760351,36.1216704 74.8612043,35.9622562 C74.9084065,35.8742515 74.9448343,35.7958016 74.9781836,35.7168488 C75.0212813,35.6132547 75.0495,35.5327933 75.0746403,35.4513261 C75.1218425,35.2969407 75.1526266,35.1606592 75.1736623,35.0223661 C75.2008549,34.8347904 75.2095771,34.6763819 75.2064986,34.5174706 C75.2023941,34.3962756 75.1957242,34.3052536 75.1844367,34.2137287 C75.1541658,33.96983 75.0936238,33.7294515 75.003837,33.4971191 C74.9679223,33.4060971 74.9361121,33.3326761 74.9001974,33.2602608 C74.8601781,33.1797993 74.8216981,33.1088927 74.7801396,33.0394947 C74.7355028,32.9650679 74.691892,32.899693 74.646229,32.8353238 C74.5785041,32.7417874 74.5313019,32.6819442 74.4810213,32.6226039 C74.402009,32.5325877 74.3471107,32.4732474 74.2886211,32.4154157 C74.2321836,32.3606014 74.174207,32.3088043 74.1152043,32.2590188 C74.0238783,32.1830834 73.9648755,32.1383267 73.9043336,32.0955815 C73.8114684,32.0312124 73.7483611,31.9904788 73.6847407,31.9522596 C73.6134243,31.9105203 73.5456994,31.8748155 73.4769484,31.8411223 C73.3789525,31.7933483 73.3096884,31.7626724 73.2393982,31.7355166 C73.0767558,31.6721533 72.9269402,31.6268937 72.7750722,31.5926976 C72.6781025,31.5715765 72.6006293,31.5574957 72.5231561,31.5464323 C72.2871451,31.5197794 72.1829924,31.5137448 72.0788397,31.5137448 L66.349416,31.5137448 C66.349758,31.5134096 44.233286,31.5129067 0,31.5122362 L0,0 L70.961892,1.95623525e-05 C73.6231726,-0.00752369681 75.7744643,2.16744936 75.7754904,4.7879776 L75.7770296,14.6736702 Z M74.1116128,36.8880655 C74.1562497,36.8498464 74.1937036,36.8050897 74.2368012,36.7653619 L74.1116128,36.8880655 Z",
              id: "Fill-248-Copy",
              fill: "#FF4F12"
            }
          })])])])])]), h("span", {
            "class": "rt-card-discount__value"
          }, [_this2.discount])]);
        } else {
          return null;
        }
      }();

      return h("div", {
        "class": "rt-card rt-tariff-card"
      }, [additionalTopElements, this.$slots["default"]]);
    }
  }]);

  return TariffCard;
}(external_vue_default.a);

TariffCard_decorate([Prop({
  "default": false
}), TariffCard_metadata("design:type", Boolean)], TariffCard_TariffCard.prototype, "hasSeal", void 0);

TariffCard_decorate([Prop({
  "default": null
}), TariffCard_metadata("design:type", String)], TariffCard_TariffCard.prototype, "discount", void 0);

TariffCard_decorate([Prop({
  "default": "b2c-orange"
}), TariffCard_metadata("design:type", String)], TariffCard_TariffCard.prototype, "color", void 0);

TariffCard_TariffCard = TariffCard_decorate([vue_class_component_esm], TariffCard_TariffCard);
/* harmony default export */ var components_TariffCard_TariffCard = ({
  component: TariffCard_TariffCard,
  name: "RtTariffCard"
});
// CONCATENATED MODULE: ./src/directives/OudsideClick/OudsideClick.js
function OudsideClick_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var OudsideClick_OutsideClick = function OutsideClick(element, action, vnode) {
  var _this = this;

  OudsideClick_classCallCheck(this, OutsideClick);

  _defineProperty(this, "bind", function () {
    if (_this.$el && (!_this.vnode || !_this.vnode.OutsideClick)) {
      window.addEventListener('click', _this.triggerAction, {
        passive: true
      });

      _this.$el.addEventListener('mouseenter', _this.mouseenter, {
        passive: true
      });

      _this.$el.addEventListener('mouseleave', _this.mouseleave, {
        passive: true
      });
    }
  });

  _defineProperty(this, "update", function (el) {
    _this.unbind();

    _this.$el = el;

    _this.bind();
  });

  _defineProperty(this, "unbind", function () {
    window.removeEventListener('click', _this.triggerAction);

    _this.$el.removeEventListener('mouseenter', _this.mouseenter);

    _this.$el.removeEventListener('mouseleave', _this.mouseleave);
  });

  _defineProperty(this, "mouseleave", function () {
    _this.hover = false;
  });

  _defineProperty(this, "mouseenter", function () {
    _this.hover = true;
  });

  _defineProperty(this, "triggerAction", function () {
    var isTablet = window.innerWidth <= parseInt(variables["tablet-upper-limit"]);

    if (!_this.hover && !isTablet) {
      _this.action.value();
    }
  });

  this.$el = element;
  this.action = action;
  this.bind();
  this.vnode = vnode;
};

var OutsideClickDirective = {
  name: 'RtOutSideClick',
  isFn: true,
  bind: function bind(el, bindings, vnode) {
    vnode.context.OutsideClick = new OudsideClick_OutsideClick(vnode.elm, bindings, vnode);
  },
  update: function update(el, bindings, vnode) {
    vnode.context.OutsideClick.update(el);
  },
  beforeDestroy: function beforeDestroy() {
    vnode.context.OutsideClick.unbind(el);
  }
};
// EXTERNAL MODULE: ./node_modules/debounce/index.js
var debounce = __webpack_require__(2);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Card/CardBuy.vue?vue&type=script&lang=js&



var CardBuyvue_type_script_lang_js_componentsList = {};
var directives = {};
directives[OutsideClickDirective.name] = OutsideClickDirective;
/* harmony default export */ var CardBuyvue_type_script_lang_js_ = ({
  name: "RtCardBuy",
  components: CardBuyvue_type_script_lang_js_componentsList,
  directives: directives,
  props: {
    isHorizontalCard: {
      type: Boolean,
      "default": false
    },
    hasCustomButton: {
      type: Boolean,
      "default": false
    },
    customButtonClass: {
      type: String,
      "default": null
    }
  },
  data: function data() {
    return {
      cardHeight: null,
      showForm: false
    };
  },
  computed: {},
  mounted: function mounted() {
    if (this.hasCustomButton && this.customButtonClass) {
      this.bindCustomButton();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.hasCustomButton && this.customButtonClass) {
      this.unbindCustomButton();
    }
  },
  updated: function updated() {
    if (this.hasCustomButton && this.customButtonClass) {
      this.unbindCustomButton();
      this.bindCustomButton();
    }
  },
  methods: {
    customButtonClick: function customButtonClick() {
      if (this.showForm) {
        if (this.submitForm) {
          this.submitForm();
        }
      } else {
        this.toggleShow();
      }
    },
    bindCustomButton: function bindCustomButton() {
      this.$el.querySelector(".".concat(this.customButtonClass)).addEventListener('click', this.customButtonClick);
    },
    unbindCustomButton: function unbindCustomButton() {
      this.$el.querySelector(".".concat(this.customButtonClass)).removeEventListener('click', this.customButtonClick);
    },
    hideShow: function hideShow() {
      if (this.showForm) {
        this.showForm = false;
      }
    },
    scrollToStart: function scrollToStart() {
      utils_scrollIt(this.$el.offsetTop + 40, 400);
    },
    toggleShow: function toggleShow() {
      this.showForm = !this.showForm; // this.scrollToStart();
    },
    submitForm: function submitForm() {
      var form = this.$refs.card.querySelector('form');

      if (!form) {
        form = this.$refs.card.querySelector('.form');
      }

      if (form && form.submit && typeof form.submit === 'function') {
        form.submit();
      }
    }
  },
  render: function render(h) {
    var _this = this;

    var button = function button() {
      if (!_this.hasCustomButton || !_this.customButtonClass) {
        if (_this.showForm) {
          if (_this.submitForm) {
            return h("rt-button", {
              on: {
                "click": _this.submitForm
              },
              "class": "rt-button--is-block rt-button-orange"
            }, [_this.$slots.button]);
          } else {
            return h("rt-button", {
              "class": "rt-button--is-block rt-button-orange"
            }, [_this.$slots.button]);
          }
        } else {
          return h("rt-button", {
            on: {
              "click": _this.toggleShow
            },
            "class": "rt-button--is-block rt-button-orange"
          }, [_this.$slots.button]);
        }
      } else {
        return null;
      }
    };

    var contentWithoutWrapper = function () {
      if (_this.$slots['content-without-wrapper']) {
        return _this.$slots['content-without-wrapper'];
      }
    }();

    var bottomContent = function bottomContent() {
      if (!_this.hasCustomButton || !_this.customButtonClass) {
        return h("div", {
          "class": "rt-card__border-content rt-space-bottom"
        }, [_this.$slots['card-footer'], button()]);
      } else {
        if (_this.$slots['card-footer']) {
          return h("div", {
            "class": "d-static"
          }, [_this.$slots['card-footer']]);
        } else {
          return null;
        }
      }
    };

    return h("div", {
      ref: "card",
      directives: [{
        name: "rt-out-side-click",
        value: this.hideShow
      }]
    }, [h("div", {
      "class": 'rt-card rt-card-buy' + (this.showForm ? ' rt-card-buy--show-form' : '') + (this.isHorizontalCard ? ' rt-card-buy--is-horizontal' : '')
    }, [h("div", {
      "class": "row rt-card-buy__info"
    }, [h("div", {
      "class": "rt-card-buy__form rt-space-vertical" + (this.isHorizontalCard ? " rt-card-buy__form-horizontal" : "")
    }, [h("div", {
      "class": "rt-close",
      on: {
        "click": this.hideShow
      }
    }, [h("svg", {
      "class": "rt-close__icon",
      attrs: {
        width: "14",
        height: "14",
        xmlns: "http://www.w3.org/2000/svg"
      }
    }, [h("path", {
      attrs: {
        d: "M14 1.4L12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7z",
        "fill-rule": "evenodd"
      }
    })])]), this.$slots['form']]), h("div", {
      "class": "rt-col-12 rt-card-buy__content"
    }, [this.$slots['content']])]), contentWithoutWrapper, bottomContent()])]);
  }
});
// CONCATENATED MODULE: ./src/components/Card/CardBuy.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardBuyvue_type_script_lang_js_ = (CardBuyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Card/CardBuy.vue
var CardBuy_render, CardBuy_staticRenderFns




/* normalize component */

var CardBuy_component = normalizeComponent(
  Card_CardBuyvue_type_script_lang_js_,
  CardBuy_render,
  CardBuy_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardBuy = (CardBuy_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Card/CardImage.vue?vue&type=template&id=3c82105d&
var CardImagevue_type_template_id_3c82105d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rt-card rt-card-image"},[_c('div',{staticClass:"rt-card-image__figure",style:(_vm.figureImageStyle)}),_vm._v(" "),_c('div',{staticClass:"rt-card-image__content"},[_c('div',{staticClass:"rt-card__body"},[_vm._t("body")],2),_vm._v(" "),_vm._t("list")],2)])}
var CardImagevue_type_template_id_3c82105d_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Card/CardImage.vue?vue&type=template&id=3c82105d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Card/CardImage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CardImagevue_type_script_lang_js_ = ({
  name: "RtCardImage",
  props: {
    cardImage: {
      type: String,
      "default": null,
      required: true
    }
  },
  computed: {
    figureImageStyle: function figureImageStyle() {
      var styleObject = {};
      styleObject.backgroundImage = "url(" + this.cardImage + ")";
      return styleObject;
    }
  },
  mounted: function mounted() {}
});
// CONCATENATED MODULE: ./src/components/Card/CardImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardImagevue_type_script_lang_js_ = (CardImagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Card/CardImage.vue





/* normalize component */

var CardImage_component = normalizeComponent(
  Card_CardImagevue_type_script_lang_js_,
  CardImagevue_type_template_id_3c82105d_render,
  CardImagevue_type_template_id_3c82105d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardImage = (CardImage_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Card/CardImageList.vue?vue&type=script&lang=js&
/* harmony default export */ var CardImageListvue_type_script_lang_js_ = ({
  name: "RtCardImageList",
  props: {
    hasIcon: {
      type: Boolean,
      "default": false
    }
  },
  computed: {},
  render: function render(h) {
    if (this.hasIcon && this.$slots.icon) {
      return h("div", {
        "class": "rt-card-image-list rt-card-image-list--has-icon rt-font-small-paragraph"
      }, [h("div", {
        "class": "rt-card-image-list__icon"
      }, [this.$slots.icon]), h("div", {
        "class": "rt-card-image-list__content rt-space-left05"
      }, [this.$slots["default"]])]);
    } else {
      return h("div", {
        "class": "rt-card-image-list rt-font-small-paragraph"
      }, [this.$slots["default"]]);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Card/CardImageList.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardImageListvue_type_script_lang_js_ = (CardImageListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Card/CardImageList.vue
var CardImageList_render, CardImageList_staticRenderFns




/* normalize component */

var CardImageList_component = normalizeComponent(
  Card_CardImageListvue_type_script_lang_js_,
  CardImageList_render,
  CardImageList_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardImageList = (CardImageList_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Carousel/Carousel.vue?vue&type=template&id=8a04019e&
var Carouselvue_type_template_id_8a04019e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.carouselClassesState,style:(_vm.carouselStylesState),attrs:{"data-uid":_vm._uid}},[(_vm.debug)?_c('div',{staticStyle:{"background":"black","color":"#3fa","font-size":"10px","padding":"5px","position":"absolute","height":"150px","width":"100px","bottom":"0","right":"0","z-index":"12"}},[_c('p',[_vm._v("offset: "+_vm._s(_vm.innerBlockOffset))]),_vm._v(" "),_c('p',[_vm._v("mc: "+_vm._s(_vm.activeMCId)+" "+_vm._s(_vm.isAnimating ? 'run' : 'stopped'))]),_vm._v(" "),_c('p',[_vm._v("page: "+_vm._s(_vm.activePage))]),_vm._v(" "),_c('p',[_vm._v("perf: "+_vm._s(parseInt(Math.floor(_vm.perfResult/10)))+"ms")]),_vm._v(" "),_c('p',[_vm._v("scrollLeft: "+_vm._s(_vm.$refs && _vm.$refs.overlay ? _vm.$refs.overlay.scrollLeft : ''))]),_vm._v(" "),_c('p',[_vm._v("canBack: "+_vm._s(_vm.canAdvanceBackward))]),_vm._v(" "),_c('p',[_vm._v("canForward: "+_vm._s(_vm.canAdvanceForward))])]):_vm._e(),_vm._v(" "),(!_vm.hideNavigation && !_vm.isTouch && !_vm.disabledScrolling)?_c('RtCarouselNavi',{attrs:{"hSpace":_vm.isInnerBlock && _vm.innerBlockOffset > 10 ? _vm.innerBlockOffset - 10 : _vm.hSpace,"isPending":_vm.isPending,"hideArrows":_vm.hideArrows,"showTipsNext":_vm.showTipsNext,"containerName":_vm.cssContainer,"overlayEl":_vm.$refs.overlay,"advancePage":_vm.advancePage,"canAdvanceForward":_vm.canAdvanceForward,"canAdvanceBackward":_vm.canAdvanceBackward,"navsPosStart":_vm.navsPosStart,"navsPosEnd":_vm.navsPosEnd}}):_vm._e(),_vm._v(" "),(!_vm.isTouch)?_c('div',{ref:"overlay",class:_vm.cssSelector + '__overlay'},[_c('div',{ref:"inner",class:_vm.cssSelector + '__inner ' + _vm.cssContainer,style:(_vm.innerStylesState)},[_vm._t("default"),_vm._v(" "),_c('div',{class:_vm.cssSelector + '__spacer',style:(_vm.spacerStylesState)})],2)]):_c('div',{ref:"overlay",class:_vm.cssSelector + '__overlay ' + _vm.cssSelector + '__inner ' + _vm.cssContainer,style:(_vm.overlayStyleState)},[_vm._t("default"),_vm._v(" "),_c('div',{class:_vm.cssSelector + '__spacer',style:(_vm.spacerStylesState)})],2)],1)}
var Carouselvue_type_template_id_8a04019e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Carousel/Carousel.vue?vue&type=template&id=8a04019e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Carousel/CarouselNavi.vue?vue&type=script&lang=js&
var CarouselNavivue_type_script_lang_js_name = 'RtCarouselNavi';
var cssSelector = 'rt-carousel__navi';
var navContainerChanged = false;
/* harmony default export */ var CarouselNavivue_type_script_lang_js_ = ({
  name: CarouselNavivue_type_script_lang_js_name,
  props: {
    overlayEl: null,
    hSpace: {
      type: Number,
      "default": 0
    },
    containerName: {
      type: String,
      "default": ''
    },
    buttonSize: {
      type: Number,
      "default": 53
    },
    isPending: {
      type: Boolean,
      "default": false
    },
    showTipsNext: {
      type: Boolean,
      "default": false
    },
    hideArrows: {
      type: Boolean,
      "default": false
    },
    nextCount: {
      type: Number,
      "default": 0
    },
    navsPosStart: {
      type: Number,
      "default": 0
    },
    navsPosEnd: {
      type: Number,
      "default": 0
    },
    navigationContainer: {
      type: String,
      "default": ''
    },
    canAdvanceForward: {
      type: Boolean,
      "default": false
    },
    canAdvanceBackward: {
      type: Boolean,
      "default": false
    },
    advancePage: {
      type: Function,
      "default": function _default() {}
    }
  },
  data: function data() {
    return {
      position: 'absolute',
      topPos: null,
      bottomPos: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (this.$el.scrollHeight > this.navsPosStart + this.navsPosEnd) {
      this.$nextTick(function () {
        window.addEventListener('scroll', _this.stickNavs, {
          passive: true
        });
        window.addEventListener('resize', _this.stickNavs, {
          passive: true
        });
      });
      this.stickNavs();
    } else {
      // Если заданная высота отступа выше зоны просмотра, то центрируем стрелочки
      this.topPos = '0px';
      this.bottomPos = '0px';
    }
  },
  updated: function updated() {
    if (!navContainerChanged && this.navigationContainer !== '') {
      var els = document.querySelectorAll(this.navigationContainer);

      if (els.length) {
        els[0].insertBefore(this.$el, els[0].firstChild);
      }

      navContainerChanged = true;
    }
  },
  destroyed: function destroyed() {
    window.removeEventListener('scroll', this.stickNavs);
    window.removeEventListener('resize', this.stickNavs);
  },
  methods: {
    stickNavs: function stickNavs() {
      if (this.overlayEl) {
        var getTop = this.overlayEl.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop;
        var posY = window.pageYOffset + window.innerHeight / 2;
        var posStart = getTop + this.navsPosStart;
        var posEnd = getTop + this.overlayEl.clientHeight - this.navsPosEnd - this.buttonSize;

        if (posY >= posStart && posY < posEnd) {
          // Scrolled
          this.position = 'fixed';
          this.topPos = null;
          this.bottomPos = 'auto';
        } else if (posY >= posEnd) {
          // After scrolling zone
          this.position = 'absolute';
          this.topPos = 'auto';
          this.bottomPos = "".concat(this.navsPosEnd, "px");
        } else {
          // Before scrolling zone
          this.position = 'absolute';
          this.topPos = "".concat(this.navsPosStart, "px");
          this.bottomPos = 'auto';
        }
      }
    },
    triggerPageAdvance: function triggerPageAdvance(e) {
      var el = e && e.target ? e.target : null;
      if (el && el.getAttribute('data-pos')) this.advancePage(el.getAttribute('data-pos'));
    }
  },
  render: function render(h) {
    var _this2 = this;

    var sideRender = function sideRender(pos) {
      var n = cssSelector + '-side';
      var className = n + ' ' + n + '-' + pos;
      return h("div", {
        "class": className,
        attrs: {
          "data-pos": pos
        },
        on: {
          "click": _this2.triggerPageAdvance
        },
        style: {
          width: _this2.hSpace + 'px'
        }
      });
    };

    var sideLeftBlock = function sideLeftBlock() {
      if (_this2.canAdvanceBackward) return sideRender('prev');
    };

    var sideRightBlock = function sideRightBlock() {
      if (_this2.canAdvanceForward) return sideRender('next');
    };

    var moreTextBlock = function moreTextBlock() {
      if (_this2.showTipsNext && _this2.nextCount > 0) return h("div", {
        "class": cssSelector + '-more-text'
      }, ["\u0415\u0449\u0451\xA0", _this2.nextCount]);
    };

    var btnRender = function btnRender(pos) {
      if (!_this2.hideArrows) return h("a", {
        "class": [cssSelector + '-btn', cssSelector + '-btn-' + pos, {
          'is-disabled': pos === 'next' ? !_this2.canAdvanceForward : !_this2.canAdvanceBackward,
          'is-pending': _this2.isPending
        }],
        attrs: {
          "data-pos": pos
        },
        on: {
          "click": _this2.triggerPageAdvance
        },
        style: {
          width: _this2.buttonSize + 'px',
          height: _this2.buttonSize + 'px'
        }
      }, [h("i", {
        "class": cssSelector + '-circle-icon'
      }), pos === 'next' ? moreTextBlock() : null]);
    };

    return h("div", {
      "class": cssSelector
    }, [sideLeftBlock(), h("div", {
      "class": [cssSelector + '-arrows', this.containerName],
      style: {
        position: this.position,
        height: this.buttonSize + 'px',
        top: this.topPos,
        bottom: this.bottomPos
      }
    }, [btnRender('prev'), btnRender('next')]), sideRightBlock()]);
  }
});
// CONCATENATED MODULE: ./src/components/Carousel/CarouselNavi.vue?vue&type=script&lang=js&
 /* harmony default export */ var Carousel_CarouselNavivue_type_script_lang_js_ = (CarouselNavivue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Carousel/CarouselNavi.vue
var CarouselNavi_render, CarouselNavi_staticRenderFns




/* normalize component */

var CarouselNavi_component = normalizeComponent(
  Carousel_CarouselNavivue_type_script_lang_js_,
  CarouselNavi_render,
  CarouselNavi_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CarouselNavi = (CarouselNavi_component.exports);
// CONCATENATED MODULE: ./src/utils/mobile.js
var Mobile = {
  isTouch: typeof window !== "undefined" && "ontouchstart" in window
};
/* harmony default export */ var mobile = (Mobile);
// CONCATENATED MODULE: ./src/utils/animate.js
var fps = 60;

var EaseIn = function EaseIn(power) {
  return function (t) {
    return Math.pow(t, power);
  };
};

var EaseOut = function EaseOut(power) {
  return function (t) {
    return 1 - Math.abs(Math.pow(t - 1, power));
  };
};

var EaseInOut = function EaseInOut(power) {
  return function (t) {
    return t < 0.5 ? EaseIn(power)(t * 2) / 2 : EaseOut(power)(t * 2 - 1) / 2 + 0.5;
  };
};

var Animate = {
  timingFunctions: {
    linear: EaseInOut(1),
    easeInQuad: EaseIn(2),
    easeOutQuad: EaseOut(2),
    easeInOutQuad: EaseInOut(2),
    easeInCubic: EaseIn(3),
    easeOutCubic: EaseOut(3),
    easeInOutCubic: EaseInOut(3),
    easeInQuart: EaseIn(4),
    easeOutQuart: EaseOut(4),
    easeInOutQuart: EaseInOut(4),
    easeInQuint: EaseIn(5),
    easeOutQuint: EaseOut(5),
    easeInOutQuint: EaseInOut(5)
  },
  start: function start(opt) {
    var fpsInterval = 1000 / fps;
    var lastDrawTime = performance.now();
    var startTime;
    var rId;

    var animate = function animate(timestamp) {
      rId = window.requestAnimationFrame(animate);
      var timeElapsed = timestamp - lastDrawTime;

      if (timeElapsed > fpsInterval) {
        lastDrawTime = timestamp - timeElapsed % fpsInterval;
        startTime = startTime || timestamp;
        var timeElapsedSinceStart = timestamp - startTime;
        var progress = timeElapsedSinceStart / opt.duration;
        var safeProgress = Math.min(Number(progress.toFixed(2)), 1);

        if (safeProgress >= 1) {
          opt.draw(opt.timing(1), rId);
          Animate.stop(rId);
          opt.onLeave();
        } else {
          opt.draw(opt.timing(safeProgress), rId);
        }
      }
    };

    return animate();
  },
  stop: function stop(rId) {
    if (rId) window.cancelAnimationFrame(rId);
  }
};
/* harmony default export */ var animate = (Animate);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Carousel/Carousel.vue?vue&type=script&lang=js&
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function Carouselvue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * @TODO :
 * - "Подглядывание" карточек
 */



var Carouselvue_type_script_lang_js_name = 'RtCarousel';
var autoScrollingTimeout = 100; // Длительность задержки автоскроллинга

var slideSwipingMinDistance = 40; // Минимальное значение сдвига для автоскроллинга

var boostedIndex = 0;
/* harmony default export */ var Carouselvue_type_script_lang_js_ = ({
  name: Carouselvue_type_script_lang_js_name,
  components: Carouselvue_type_script_lang_js_defineProperty({}, CarouselNavi.name, CarouselNavi),
  props: {
    debug: {
      type: Boolean,
      "default": false
    },
    decorated: {
      type: Boolean // Технический параметр для обворачивания карусели в другой компонент

    },
    hideArrows: {
      type: Boolean,
      "default": false
    },
    hideNavigation: {
      type: Boolean,
      "default": false
    },
    disabledScrolling: {
      type: Boolean,
      "default": false
    },
    autoScrolling: {
      type: Boolean,
      "default": true
    },
    showTipsNext: {
      type: Boolean,
      "default": false
    },
    duration: {
      type: Number,
      "default": 500
    },
    offsetTop: {
      type: Number,
      "default": 20
    },
    offsetBottom: {
      type: Number,
      "default": 20
    },
    navsPosStart: {
      type: Number,
      "default": 113
    },
    navsPosEnd: {
      type: Number,
      "default": 200
    },
    slidesClasses: {
      type: String,
      "default": 'rt-col-3 rt-col-md-2 rt-col-td-3'
    },
    transitionFunction: {
      type: String,
      "default": 'easeInOutCubic'
    }
  },
  data: function data() {
    return {
      isAnimating: false,
      isFinalSlide: false,
      isPending: true,
      isTouch: mobile.isTouch,
      isInnerBlock: false,
      // Позволяет вынести блок карусели за контейнер
      innerBlockOffset: 0,
      hSpace: 0,
      pages: [],
      // Набор слайдов с позицией для ускорителя
      activeMCId: null,
      activePage: 0,
      toggleSlidesTimer: null,
      scrollingTimer: null,
      canAdvanceForward: false,
      canAdvanceBackward: false,
      scrollingAutoEnd: true,
      swipingStartPoint: null,
      // Детектор направления свайпинга
      cssSelector: 'rt-carousel',
      cssContainer: 'rt-container',
      // Используется для отладки
      perfStart: 0,
      perfResult: 0
    };
  },
  computed: {
    carouselClassesState: function carouselClassesState() {
      return [this.cssSelector, {
        'is-touch-device': this.isTouch,
        'is-inner-block': this.isInnerBlock,
        'is-pending': this.isPending,
        'is-animating': this.isAnimating,
        'is-hide-navs': this.hideNavigation,
        'is-scrolling': !this.scrollingAutoEnd,
        'is-disabled-scrolling': this.disabledScrolling
      }];
    },
    carouselStylesState: function carouselStylesState() {
      return {
        marginTop: -this.offsetTop + 'px',
        marginBottom: -this.offsetBottom + 'px',
        width: this.isInnerBlock && !this.isTouch ? "".concat(document.body.clientWidth, "px") : null,
        marginLeft: this.isInnerBlock && !this.isTouch ? "-".concat(this.innerBlockOffset, "px") : null
      };
    },
    innerStylesState: function innerStylesState() {
      return {
        paddingTop: this.offsetTop + 'px',
        paddingBottom: this.offsetBottom + 'px'
      };
    },
    overlayStyleState: function overlayStyleState() {
      return {
        paddingTop: this.offsetTop + 'px',
        paddingBottom: this.offsetBottom + 'px'
      };
    },
    spacerStylesState: function spacerStylesState() {
      return "flex: 0 0 ".concat(this.isInnerBlock ? this.innerBlockOffset - 10 : this.hSpace, "px");
    },
    overlayEl: function overlayEl() {
      return this.$refs.overlay;
    },
    slidedEl: function slidedEl() {
      return this.$refs.inner;
    },
    slides: function slides() {
      var slideName = 'CarouselSlide';

      if (this.decorated) {
        var list = [];
        this.$children.filter(function (vn) {
          return vn.$vnode && vn.$vnode.tag && vn.$vnode.tag.indexOf('slide') > -1;
        }).forEach(function (ch) {
          if (ch.$children && ch.$children.length > 0) {
            ch.$children.forEach(function (child) {
              if (child.$vnode && child.$vnode.tag && child.$vnode.tag.indexOf(slideName) > -1) list.push(child);
            });
          }
        });
        return list;
      } else {
        return this.$children.filter(function (slide) {
          return slide.$vnode && slide.$vnode.tag && slide.$vnode.tag.indexOf(slideName) > -1;
        });
      }
    }
  },
  mounted: function mounted() {
    this.isInnerBlock = document.querySelector(".".concat(this.cssContainer, " .").concat(this.cssSelector, "[data-uid=\"").concat(this._uid, "\"]")) !== null;

    if (!this.isTouch) {
      this.createMoves();
      window.addEventListener('resize', this.createMoves, {
        passive: true
      });
      if (this.overlayEl) this.overlayEl.addEventListener('scroll', this.scrollNative, {
        passive: true
      });
    }
  },
  destroyed: function destroyed() {
    this.isAnimating = false;
    this.isPending = true;

    if (!this.isTouch) {
      window.removeEventListener("resize", this.createMoves);
      clearTimeout(this.scrollingTimer);
      clearTimeout(this.toggleSlidesTimer);
    }
  },
  methods: {
    /**
     * Основной метод для навигации по слайдам
     * + Формирует постраничную навигацию
     * + Собирает диапозоны широт в виде массива
     */
    createMoves: function createMoves() {
      var _this = this;

      if (!this.slidedEl || !this.overlayEl) return;
      this.autoScrollerRemove();
      clearTimeout(this.toggleSlidesTimer);
      this.isPending = true;
      if (this.isInnerBlock) this.innerBlockOffset = this.$el.parentElement.getBoundingClientRect().left;
      this.activePage = 0;
      this.pages = [];
      this.overlayEl.scrollLeft = 0;
      this.isPending = false;
      var wrapStyles = getComputedStyle(this.slidedEl);
      var leftPadding = parseFloat(wrapStyles.paddingLeft);
      var innerWrapDiffPadding = this.innerBlockOffset - leftPadding;
      var innerWrapPadding = innerWrapDiffPadding > 0 ? innerWrapDiffPadding : 0;
      var wrapperWidth;
      var maxMoveDist;

      if (this.isInnerBlock) {
        this.hSpace = this.innerBlockOffset - innerWrapPadding;
      } else {
        var leftOffset = this.slidedEl.getBoundingClientRect().left;
        this.hSpace = (leftPadding > 0 ? leftPadding : 0) + (leftOffset > 0 ? leftOffset : 0);
      }

      this.$nextTick(function () {
        // Calculate wrapper after move slidedEl
        if (_this.isInnerBlock) {
          wrapperWidth = parseFloat(wrapStyles.width) - _this.hSpace * 2;
          maxMoveDist = _this.overlayEl.scrollWidth - wrapperWidth - _this.hSpace * 2;
        } else {
          wrapperWidth = parseFloat(wrapStyles.width);
          maxMoveDist = _this.overlayEl.scrollWidth;
        }

        var currPage = 0;
        var pageWidth = 0;
        var distance = 0;
        var distanceAfter = 0;

        _this.slides.forEach(function (slide, i) {
          if (typeof slide.width === 'function') {
            var slideWidth = slide.width();
            var nextResolveWidth = distanceAfter + slideWidth;
            distance += slideWidth;

            if (Math.round(distance * 100) / 100 > wrapperWidth || nextResolveWidth > wrapperWidth) {
              currPage++;
              distance = 0;
              distanceAfter = 0;
            }

            if (!_this.pages[currPage]) {
              _this.pages[currPage] = {
                active: false,
                slides: []
              };
            }

            _this.slides[i].page = currPage;
            _this.slides[i].move = pageWidth;

            _this.pages[currPage].slides.push({
              key: i,
              move: pageWidth,
              page: currPage,
              slide: i + 1,
              width: slideWidth
            });

            pageWidth += slideWidth; // Не может быть больше inner.srollLeft-innerWrap+leftPadding

            if (pageWidth > maxMoveDist) pageWidth = maxMoveDist;
            distanceAfter += slideWidth;
          }
        });

        if (_this.pages[0]) {
          _this.pages[0].active = true;

          _this.move().then(function () {
            _this.updateNavs();
          });

          _this.toggleSlides();
        }

        if (_this.debug && maxMoveDist > 0) console.log('Instance ', _this, '\n left', _this.slidedEl.getBoundingClientRect().left, '\n hSpace', _this.hSpace, '\n wrapperWidth', wrapperWidth, '\n pages ', _this.pages, '\n isInnerBlock ', _this.isInnerBlock);
      });
    },

    /**
     * Простая навигация зоны просмотра по слайдам (Навигаторы, стрелочки)
     */
    advancePage: function advancePage(direction) {
      var _this2 = this;

      if (!this.isPending && this.pages.length > 0) {
        this.perfStart = performance.now();
        var currPage = this.activePage + (direction === 'next' ? 1 : -1);
        if (!this.pages[currPage]) return; // Ускоритель, когда несколько раз щелкнуть на навигатор

        if (this.isAnimating) {
          boostedIndex++;
          var boostedPageId = this.activePage + (direction === 'next' ? boostedIndex : -boostedIndex);

          if (this.pages[boostedPageId]) {
            this.activePage = boostedPageId;
            animate.stop(this.activeMCId);
            this.move(this.pages[boostedPageId].slides[0].move).then(function () {
              boostedIndex = 0;

              _this2.autoScrollerRemove();

              _this2.updateNavs();
            });
          }
        }

        if (!this.isAnimating) {
          this.pages[this.activePage].active = false;
          this.pages[currPage].active = true;
          this.activePage = currPage;
          this.move(this.pages[currPage].slides[0].move).then(function () {
            boostedIndex = 0;

            _this2.autoScrollerRemove();

            _this2.updateNavs();
          });
        }

        if (!this.swipingStartPoint) this.swipingStartPoint = this.overlayEl.scrollLeft;
      }
    },

    /**
     * Анимированный скроллинг к указанной позиции
     */
    move: function move() {
      var _this3 = this;

      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return new Promise(function (resolve) {
        if (!_this3.overlayEl) {
          resolve();
        }

        var from = _this3.overlayEl.scrollLeft;

        if (from !== to && from !== to + 1) {
          _this3.isAnimating = true;

          _this3.$emit('onAnimatingStart', function (callback) {
            return callback();
          });

          animate.start({
            duration: _this3.duration,
            timing: animate.timingFunctions[_this3.transitionFunction],
            draw: function draw(progress, rId) {
              if (_this3.overlayEl) {
                _this3.overlayEl.scrollLeft = from + (to - from) * progress;
                _this3.activeMCId = rId;
              }
            },
            onLeave: function onLeave() {
              _this3.activeMCId = null;

              _this3.$emit('onAnimatingEnd', function (callback) {
                return callback();
              });

              setTimeout(function () {
                _this3.isAnimating = false;
                _this3.perfResult = performance.now() - _this3.perfStart; // @TMP

                resolve();
              }, 1); // В FF скроллинг быстрее отрабатывает, чем триггер isAnimating
            }
          });
        } else {
          resolve();
        }
      });
    },

    /**
     * Скроллит к указанному слайду
     * @param {Number} slideId
     */
    moveTo: function moveTo(slideId) {
      var _this4 = this;

      if (slideId !== undefined && this.slides[slideId]) this.move(this.slides[slideId].move).then(function () {
        _this4.updateNavs();
      });
    },

    /**
     * Нативное событие скроллинга
     */
    scrollNative: function scrollNative(e) {
      var _this5 = this;

      if (!this.disabledScrolling && !this.isTouch) {
        this.autoScroller();
        this.$nextTick(function () {
          _this5.updateNavs();
        });
      }

      this.toggleSlides();
    },

    /**
     * Доводчик позиции скролла до ближайшего слайда
     */
    autoScroller: function autoScroller() {
      var _this6 = this;

      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : autoScrollingTimeout;

      if (this.autoScrolling && !this.isPending && !this.isAnimating) {
        if (!this.swipingStartPoint) this.swipingStartPoint = this.overlayEl.scrollLeft;
        var now = this.overlayEl.scrollLeft;
        this.scrollingTimer = setTimeout(function () {
          if (now === _this6.overlayEl.scrollLeft && now !== _this6.swipingStartPoint && !_this6.isAnimating && !_this6.isPending) {
            _this6.perfStart = performance.now();
            _this6.scrollingAutoEnd = false; // Определив что скроллинг окончен получаем ближайшую позицию для доводки скролла

            var distance = _this6.getNearbySlide();

            if (distance !== null && _this6.overlayEl.scrollLeft !== distance) {
              _this6.move(distance).then(function () {
                _this6.toggleSlides();

                _this6.autoScrollerRemove();
              });
            } else {
              _this6.autoScrollerRemove();
            }
          }
        }, delay);
      }
    },
    autoScrollerRemove: function autoScrollerRemove() {
      this.swipingStartPoint = this.overlayEl.scrollLeft;
      clearTimeout(this.scrollingTimer);
      this.scrollingTimer = null;
      this.scrollingAutoEnd = true;
    },

    /**
     * Определяет ближайший слайд для автоскролла и сэттит страницу
     */
    getNearbySlide: function getNearbySlide() {
      var _this7 = this;

      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number(this.overlayEl.scrollLeft.toFixed());

      if (this.swipingStartPoint !== to) {
        var nextNav = this.swipingStartPoint <= to;
        var findedSlide;
        var distance = 0;

        if (nextNav) {
          var prevMove = 0;
          this.slides.some(function (slide) {
            if (prevMove + slideSwipingMinDistance > to) {
              findedSlide = slide;
              distance = slide.move;
              _this7.pages[_this7.activePage].active = false;
              _this7.activePage = findedSlide.page;
              _this7.pages[_this7.activePage].active = true;
              return true;
            }

            prevMove += slide.width();
          });
        } else {
          var _prevMove = this.overlayEl.scrollWidth - this.hSpace * 2;

          void _toConsumableArray(this.slides).reverse().some(function (slide) {
            if (_prevMove - slideSwipingMinDistance <= to) {
              findedSlide = slide;
              distance = slide.move;
              _this7.pages[_this7.activePage].active = false;
              _this7.activePage = findedSlide.page;
              _this7.pages[_this7.activePage].active = true;
              return true;
            }

            _prevMove -= slide.width();
          });
        }

        if (this.debug) console.log('\n distance', distance, '\n findedSlide', findedSlide);
        return Number(distance.toFixed());
      } else {
        return null;
      }
    },

    /**
     * Меняет состояние слайдов
     */
    toggleSlides: function toggleSlides() {
      var _this8 = this;

      if (!this.isTouch) {
        clearTimeout(this.toggleSlidesTimer); // Throttle for scroll event

        this.toggleSlidesTimer = setTimeout(function () {
          if (!_this8.overlayEl && !_this8.$refs.overlay) {
            return;
          }

          if (!_this8.overlayEl || !_this8.slidedEl) return;
          var startScrolling = _this8.overlayEl.scrollLeft;
          var distance = 0;
          var distanceLeft = 0;
          var distanceRight = startScrolling + _this8.slidedEl.clientWidth;

          _this8.slides.forEach(function (slide, key) {
            distance += slide.width();
            var flag = true;

            if (startScrolling - slideSwipingMinDistance > distanceLeft) {
              distanceLeft += slide.width();
              flag = false;
            }

            if (distance - slideSwipingMinDistance > distanceRight) {
              distanceRight += slide.width();
              flag = false;
            }

            slide.toggle(flag);
          });
        }, 15);
      }
    },
    updateNavs: function updateNavs() {
      if (!this.isTouch && this.overlayEl) {
        var el = this.overlayEl;
        this.canAdvanceBackward = el.scrollLeft > 0;
        this.isFinalSlide = el.scrollLeft + el.offsetWidth + slideSwipingMinDistance >= el.scrollWidth;
        this.canAdvanceForward = !this.isFinalSlide;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Carousel/Carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var Carousel_Carouselvue_type_script_lang_js_ = (Carouselvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Carousel/Carousel.vue





/* normalize component */

var Carousel_component = normalizeComponent(
  Carousel_Carouselvue_type_script_lang_js_,
  Carouselvue_type_template_id_8a04019e_render,
  Carouselvue_type_template_id_8a04019e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Carousel = (Carousel_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Carousel/CarouselSlide.vue?vue&type=script&lang=js&
var CarouselSlidevue_type_script_lang_js_name = 'RtCarouselSlide';
var CarouselSlidevue_type_script_lang_js_cssSelector = 'rt-carousel__slide';
/* harmony default export */ var CarouselSlidevue_type_script_lang_js_ = ({
  name: CarouselSlidevue_type_script_lang_js_name,
  props: {
    slideClasses: {
      type: String,
      "default": ''
    },
    loaded: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      move: null,
      page: null,
      shown: true
    };
  },
  computed: {
    offsetSlide: function offsetSlide() {
      return this.$parent.offsetSlide;
    },
    getCustomClass: function getCustomClass() {
      return this.slideClasses ? this.slideClasses : this.$parent['slidesClasses'];
    }
  },
  methods: {
    /**
     * Делает видимым слайд или скрывает его
     * @param flag - Принудительно назначить статус видимости
     */
    toggle: function toggle(flag) {
      this.shown = this.loaded ? flag !== undefined ? flag : !this.shown : false;
    },
    width: function width() {
      return this.$el.clientWidth;
    }
  },
  render: function render(h) {
    return h("div", {
      "class": CarouselSlidevue_type_script_lang_js_cssSelector + (this.shown ? '' : ' not-shown') + ' ' + this.getCustomClass,
      style: {
        backgroundColor: this.$parent.debug && !this.shown ? '#3ca' : null,
        paddingRight: this.offsetSlide + 'px'
      }
    }, [this.$slots["default"]]);
  }
});
// CONCATENATED MODULE: ./src/components/Carousel/CarouselSlide.vue?vue&type=script&lang=js&
 /* harmony default export */ var Carousel_CarouselSlidevue_type_script_lang_js_ = (CarouselSlidevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Carousel/CarouselSlide.vue
var CarouselSlide_render, CarouselSlide_staticRenderFns




/* normalize component */

var CarouselSlide_component = normalizeComponent(
  Carousel_CarouselSlidevue_type_script_lang_js_,
  CarouselSlide_render,
  CarouselSlide_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CarouselSlide = (CarouselSlide_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FullscreenImage/FullscreenImage.vue?vue&type=script&lang=js&
var FullscreenImagevue_type_script_lang_js_componentsList = {};
/* harmony default export */ var FullscreenImagevue_type_script_lang_js_ = ({
  name: "RtFullscreenImage",
  components: FullscreenImagevue_type_script_lang_js_componentsList,
  props: {
    backgroundImage: {
      type: String,
      "default": null,
      required: true
    },
    backgroundPosition: {
      type: String,
      "default": null
    }
  },
  mounted: function mounted() {},
  render: function render(h) {
    var styleObject = {};
    styleObject.backgroundImage = "url(" + this.backgroundImage + ")";

    if (this.backgroundPosition) {
      styleObject.backgroundPosition = this.backgroundPosition;
    }

    return h("div", {
      "class": "rt-fullscreen-image"
    }, [h("div", {
      "class": "rt-fullscreen-image__element",
      attrs: {
        "image-url": this.backgroundImage
      },
      style: styleObject
    }, [this.$slots["default"]])]);
  }
});
// CONCATENATED MODULE: ./src/components/FullscreenImage/FullscreenImage.vue?vue&type=script&lang=js&
 /* harmony default export */ var FullscreenImage_FullscreenImagevue_type_script_lang_js_ = (FullscreenImagevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FullscreenImage/FullscreenImage.vue
var FullscreenImage_render, FullscreenImage_staticRenderFns




/* normalize component */

var FullscreenImage_component = normalizeComponent(
  FullscreenImage_FullscreenImagevue_type_script_lang_js_,
  FullscreenImage_render,
  FullscreenImage_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FullscreenImage = (FullscreenImage_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RowList/RowList.vue?vue&type=script&lang=js&
/* harmony default export */ var RowListvue_type_script_lang_js_ = ({
  name: "RtRowList",
  props: {
    isProfitList: {
      type: Boolean,
      "default": false
    },
    columnsQuantity: {
      type: Number,
      "default": 1
    },
    companyProfits: {
      type: Boolean,
      "default": false
    },
    isHowItWorksBlock: {
      type: Boolean,
      "default": false
    },
    isHelpBlock: {
      type: Boolean,
      "default": false
    },
    contentBlockType: {
      type: Boolean,
      "default": false
    },
    iconSize: {
      type: String,
      "default": ''
    },
    alignLeft: {
      type: Boolean,
      "default": false
    }
  },
  render: function render(h) {
    var _this = this;

    var listType = function () {
      if (_this.isProfitList) {
        return h("div", {
          "class": "rt-row-list" + (_this.isProfitList ? " rtb-profit-list" : "")
        }, [h("div", {
          "class": "rt-container rt-col-12"
        }, [h("div", {
          "class": "row"
        }, [_this.$slots["default"]])])]);
      } else {
        return h("div", {
          "class": "rt-row-list row"
        }, [_this.$slots["default"]]);
      }
    }();

    return h("div", [listType]);
  }
});
// CONCATENATED MODULE: ./src/components/RowList/RowList.vue?vue&type=script&lang=js&
 /* harmony default export */ var RowList_RowListvue_type_script_lang_js_ = (RowListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/RowList/RowList.vue
var RowList_render, RowList_staticRenderFns




/* normalize component */

var RowList_component = normalizeComponent(
  RowList_RowListvue_type_script_lang_js_,
  RowList_render,
  RowList_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RowList = (RowList_component.exports);
// CONCATENATED MODULE: ./src/components/OptionsList/OptionsListStore.tsx

var optionsListArray = [];
var optionsListStatuses = {};
var hasHash = false;

var setOptionsListArray = function setOptionsListArray(id, hash, needSave, closeOther) {
  if (optionsListArray.indexOf(id) < 0) {
    optionsListArray.push(optionsListArray);
    optionsListStatuses[id] = {
      isActive: false,
      watchers: [],
      hash: hash,
      needSave: needSave,
      closeOther: closeOther
    };

    if (hash) {
      if (!hasHash) {
        hasHash = true;
      }
    }
  }
};

var OptionsListStore_addWatcher = function addWatcher(id, fn) {
  optionsListStatuses[id].watchers.push(fn);
  var needSave = optionsListStatuses[id].needSave;

  if (needSave) {
    getLocalStatus(id);
  }

  if (optionsListStatuses[id].hash) {
    if (optionsListStatuses[id].hash === document.location.hash.replace('#', '')) {
      optionsListStatuses[id].isActive = true;
      runWatcher(id);
    }
  }
};

var runWatcher = function runWatcher(id) {
  var watchers = optionsListStatuses[id].watchers;

  for (var wKey in watchers) {
    watchers[wKey]();
  }
};

var saveToLocalStorage = function saveToLocalStorage(id, status) {
  var rtSettings = localStorage.getItem("rt-settings");

  if (!rtSettings) {
    rtSettings = {};
  } else {
    rtSettings = JSON.parse(rtSettings);
  }

  if (!rtSettings.optionContent) {
    rtSettings.optionContent = {};
  }

  rtSettings.optionContent[id] = status;
  localStorage.setItem("rt-settings", JSON.stringify(rtSettings));
};

var getLocalStatus = function getLocalStatus(id) {
  var rtSettings = localStorage.getItem("rt-settings");

  if (rtSettings) {
    rtSettings = JSON.parse(rtSettings);

    if (rtSettings.optionContent) {
      if (rtSettings.optionContent[id]) {
        optionsListStatuses[id].isActive = rtSettings.optionContent[id];
        runWatcher(id);
      }
    }
  }
};

var OptionsListStore_changeStatus = function changeStatus(id, status) {
  var closeOther = optionsListStatuses[id].closeOther;
  var needSave = optionsListStatuses[id].needSave;

  if (typeof status === "boolean") {
    optionsListStatuses[id].isActive = status;
  } else {
    optionsListStatuses[id].isActive = !optionsListStatuses[id].isActive;
  }

  if (needSave) {
    saveToLocalStorage(id, optionsListStatuses[id].isActive);
  }

  if (hasHash) {
    if (optionsListStatuses[id].hash) {
      document.location.hash = optionsListStatuses[id].hash;
    } else {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  }

  if (closeOther && optionsListStatuses[id].isActive) {
    var keys = Object.keys(optionsListStatuses);

    for (var indexKey in keys) {
      if (keys[indexKey] !== id && optionsListStatuses[keys[indexKey]] && optionsListStatuses[keys[indexKey]].isActive) {
        optionsListStatuses[keys[indexKey]].isActive = false;

        if (optionsListStatuses[keys[indexKey]].needSave) {
          saveToLocalStorage(keys[indexKey], optionsListStatuses[keys[indexKey]].isActive);
        }

        runWatcher(keys[indexKey]);
      }
    }
  }

  runWatcher(id);
};

var getOptionStatus = function getOptionStatus(id) {
  return optionsListStatuses[id];
};

var optionsListStore = external_vue_default.a.observable({
  addInListArray: setOptionsListArray,
  getStatus: getOptionStatus,
  changeStatus: OptionsListStore_changeStatus,
  addWatcher: OptionsListStore_addWatcher
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/OptionsList/OptionsList.vue?vue&type=script&lang=js&

/* harmony default export */ var OptionsListvue_type_script_lang_js_ = ({
  name: "RtOptionsList",
  props: {
    hash: {
      type: String,
      "default": ""
    },
    needToSave: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String,
      "default": ""
    },
    closeOther: {
      type: Boolean,
      "default": false
    },
    hasStar: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      isActive: false
    };
  },
  mounted: function mounted() {
    optionsListStore.addInListArray(this.name || this._uid, this.hash, this.needToSave, this.closeOther);
    optionsListStore.addWatcher(this.name || this._uid, this.onChangeStatus);
  },
  methods: {
    onChangeStatus: function onChangeStatus() {
      var options = optionsListStore.getStatus(this.name || this._uid);
      this.isActive = options.isActive;
    },
    changeStatus: function changeStatus() {
      optionsListStore.changeStatus(this.name || this._uid);
    }
  },
  computed: {
    optionsListClass: function optionsListClass() {
      var optionsListClass = "rt-options-list";

      if (!this.isContentIsNotEmpty) {
        optionsListClass += " rt-options-list----is_empty";
      }

      if (this.isActive) {
        optionsListClass += " rt-options-list--is-active";
      }

      return optionsListClass;
    },
    isContentIsNotEmpty: function isContentIsNotEmpty() {
      return !!this.$slots.content;
    }
  },
  render: function render(h) {
    var _this = this;

    var optionContent = function optionContent() {
      if (_this.isContentIsNotEmpty) {
        if (_this.isActive) {
          return h("div", {
            "class": "rt-options-list__content"
          }, [_this.$slots.content]);
        } else {
          return h("div", {
            "class": "rt-options-list__content"
          });
        }
      }

      return null;
    };

    var star = function star() {
      if (_this.hasStar) return h("svg", {
        attrs: {
          width: "21px",
          height: "20px",
          viewBox: "0 0 21 20",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        },
        "class": "rt-options-list__star"
      }, [h("g", {
        attrs: {
          id: "Page-1",
          stroke: "none",
          "stroke-width": "1",
          fill: "none",
          "fill-rule": "evenodd"
        }
      }, [h("g", {
        attrs: {
          id: "RTRU-5634_Mobile_internet_1460_v1",
          transform: "translate(-422.000000, -1374.000000)",
          fill: "#FFBE08"
        }
      }, [h("path", {
        attrs: {
          d: "M442.393573,1382.71076 L440.957021,1383.95875 L437.711308,1386.68558 L438.267355,1388.94955 L438.731684,1390.79753 L439.194866,1392.64551 C439.473463,1393.8935 438.82455,1394.35521 437.758314,1393.70836 L436.134884,1392.69237 L434.512601,1391.72209 L432.474142,1390.52096 L430.479249,1391.72209 L428.856966,1392.69237 L427.234683,1393.70836 C426.122588,1394.35521 425.472528,1393.8935 425.796984,1392.64551 L426.261313,1390.79753 L426.724495,1388.94955 L427.234683,1386.68558 L424.035976,1383.95875 L422.598278,1382.71076 C421.626054,1381.87877 421.857645,1381.09364 423.155472,1381.00107 L425.056352,1380.86278 L429.275435,1380.53936 L430.897718,1376.65711 L431.638351,1374.9017 C432.148539,1373.69943 432.937324,1373.69943 433.446365,1374.9017 L434.188144,1376.65711 L435.811574,1380.53936 L440.028364,1380.86278 L441.930391,1381.00107 C443.135352,1381.13935 443.368089,1381.87877 442.393573,1382.71076 Z",
          id: "Stroke-423-Copy-4"
        }
      })])])]);
      return null;
    };

    var moreInfoButton = function moreInfoButton() {
      if (_this.isContentIsNotEmpty) {
        return h("rt-button", {
          attrs: {
            "show-as-tag": true
          },
          "class": "rt-button--td-as-text"
        }, ["\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"]);
      }

      return null;
    };

    return h("div", {
      "class": this.optionsListClass
    }, [h("div", {
      "class": "rt-options-list__header",
      on: {
        "click": this.changeStatus
      }
    }, [h("div", {
      "class": "rt-options-list__icon"
    }, [h("div", {
      "class": "rt-space-right"
    }, [this.$slots.icon])]), h("div", {
      "class": "rt-options-list__info"
    }, [h("div", {
      "class": "rt-options-list__info-content"
    }, [h("p", {
      "class": "rt-options-list__info-content__label"
    }, [h("span", {
      "class": "rt-font-bold rt-space-right05"
    }, [this.$slots.label]), star(), moreInfoButton()]), h("p", {
      "class": "rt-font-control color-main07"
    }, [this.$slots.info])]), h("div", {
      "class": "rt-options-break-mobile"
    }), h("div", {
      "class": "rt-options-list__info-aside"
    }, [this.$slots.aside]), h("div", {
      "class": "rt-options-break"
    }), h("div", {
      "class": "rt-options-list__info-more"
    }, [h("div", {
      "class": "rt-space-left rt-td-space-left-none"
    })])])]), optionContent()]);
  }
});
// CONCATENATED MODULE: ./src/components/OptionsList/OptionsList.vue?vue&type=script&lang=js&
 /* harmony default export */ var OptionsList_OptionsListvue_type_script_lang_js_ = (OptionsListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/OptionsList/OptionsList.vue
var OptionsList_render, OptionsList_staticRenderFns




/* normalize component */

var OptionsList_component = normalizeComponent(
  OptionsList_OptionsListvue_type_script_lang_js_,
  OptionsList_render,
  OptionsList_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var OptionsList = (OptionsList_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/OptionsList/OptionsListInfoItem.vue?vue&type=script&lang=js&

/* harmony default export */ var OptionsListInfoItemvue_type_script_lang_js_ = ({
  name: "RtOptionsListInfoItem",
  props: {},
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  methods: {},
  computed: {},
  render: function render(h) {
    if (!!this.$slots.right) {
      return h("div", {
        "class": "rt-options-list__option rt-space-vertical05-half"
      }, [h("div", {
        "class": "rt-options-list__option-left"
      }, [this.$slots.left]), h("div", {
        "class": "rt-options-list__option-right"
      }, [" ", this.$slots.right])]);
    } else {
      if (!!this.$slots.left) {
        return h("div", {
          "class": "rt-options-list__option rt-space-vertical05-half"
        }, [h("div", {
          "class": "rt-options-list__option-left"
        }, [this.$slots.left])]);
      } else {
        return h("div", {
          "class": "rt-options-list__option rt-space-vertical05-half"
        }, [h("div", {
          "class": "rt-options-list__option-all"
        }, [this.$slots["default"]])]);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/OptionsList/OptionsListInfoItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var OptionsList_OptionsListInfoItemvue_type_script_lang_js_ = (OptionsListInfoItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/OptionsList/OptionsListInfoItem.vue
var OptionsListInfoItem_render, OptionsListInfoItem_staticRenderFns




/* normalize component */

var OptionsListInfoItem_component = normalizeComponent(
  OptionsList_OptionsListInfoItemvue_type_script_lang_js_,
  OptionsListInfoItem_render,
  OptionsListInfoItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var OptionsListInfoItem = (OptionsListInfoItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/RowList/RowListItem.vue?vue&type=script&lang=js&

/* harmony default export */ var RowListItemvue_type_script_lang_js_ = ({
  name: "RtRowListItem",
  props: {
    arrayIcon: {
      type: Boolean,
      "default": false
    },
    icon: {
      type: String,
      "default": null
    },
    buttonInMobile: {
      type: Boolean,
      "default": false
    },
    phoneNumber: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      show: false,
      componentView: 'desktop',
      componentLayout: '',
      iconSize: ''
    };
  },
  computed: {
    iconImage: function iconImage() {
      var styles = {};

      if (this.icon) {
        styles.backgroundImage = "url(" + this.icon + ")";
      }

      if (this.iconSize) {
        styles.width = "" + this.iconSize + "px";
        styles.height = "" + this.iconSize + "px";
        styles.flexBasis = "" + this.iconSize + "px";
      }

      return styles;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.iconSize = this.$parent._props.iconSize;

    var toggleComponentView = function toggleComponentView() {
      if (_this.buttonInMobile) {
        if (window.innerWidth <= parseInt(variables["mobile-upper-limit"])) {
          _this.componentView = 'mobile';
        } else {
          _this.componentView = 'desktop';
        }
      }
    };

    toggleComponentView();
    window.addEventListener('resize', toggleComponentView);

    if (this.$parent._props.isHelpBlock) {
      this.componentLayout = this.$el.parentNode.children.length;
    }
  },
  methods: {
    toggleShow: function toggleShow(e) {
      this.show = !this.show;
      e.stopPropagation();
    }
  },
  render: function render(h) {
    var _this2 = this;

    this.columnsQuantity = this.$parent._props.columnsQuantity;
    this.companyProfits = this.$parent._props.companyProfits;
    this.isProfitList = this.$parent._props.isProfitList;
    this.howItWorks = this.$parent._props.isHowItWorksBlock;
    this.help = this.$parent._props.isHelpBlock;
    this.contentBlockType = this.$parent._props.contentBlockType;
    this.alignLeft = this.$parent._props.alignLeft;

    if (this.columnsQuantity === 1 && !this.companyProfits) {
      if (this.$slots.moreInfo) {
        return h("div", {
          "class": "rt-row-list__item rt-col-12 rt-col-md-3",
          on: {
            "click": this.toggleShow
          }
        }, [h("div", {
          "class": "rt-row-list__header rt-row-list__header--has-more-content row"
        }, [this.$slots.icon ? h("div", {
          "class": "rt-row-list__icon rt-col-1 rt-col-md-3 rt-md-space-bottom"
        }, [this.$slots.icon]) : null, h("div", {
          "class": this.$slots.icon ? "rt-row-list__content rt-col-7 rt-col-md-3" : "rt-row-list__content rt-col-8 rt-col-md-3"
        }, [this.$slots.option]), h("div", {
          "class": "rt-row-list__value rt-col-4 rt-col-md-3 rt-md-space-top"
        }, [this.$slots.value])]), h("div", {
          "class": "rt-row-list__body row" + (this.show ? " rt-row-list__item--active" : "")
        }, [this.$slots.icon ? h("div", {
          "class": "rt-col-1 rt-col-md-3"
        }) : null, h("div", {
          "class": this.$slots.icon ? "rt-col-7 rt-col-md-3" : "rt-col-8 rt-col-md-3"
        }, [this.$slots.moreInfo])])]);
      } else if (this.help) {
        if (this.buttonInMobile && this.componentView === 'mobile') {
          return h("a", {
            attrs: {
              href: "tel:" + this.phoneNumber
            },
            style: "order:2;",
            "class": "rt-col-md-3"
          }, [h("rt-button", {
            "class": "rt-button-orange",
            style: "width: 100%; margin-top:20px"
          }, ["\u041F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u044C \u0432 \u0441\u043B\u0443\u0436\u0431\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0438"])]);
        } else {
          return h("div", {
            "class": "rt-row-list__item rt-col-td-2 rt-col-md-3 rtb-help-block" + (this.componentLayout === 4 ? ' rt-col-3' : ' rt-col-4')
          }, [h("div", {
            "class": "rt-row-list__header"
          }, [h("div", {
            "class": "rt-space-bottom"
          }, [h("div", {
            "class": "rt-row-list__icon",
            style: this.iconImage
          })]), this.$slots.option])]);
        }
      } else if (this.howItWorks) {
        return h("div", {
          "class": "rt-row-list__item rt-col-3 rt-col-td-3 rt-col-md-3 rtb-profit rtb-company-profits rtb-how-it-works"
        }, [h("div", {
          "class": "rt-row-list__header"
        }, [h("div", {
          "class": "rt-row-list__image",
          style: this.iconImage
        }), this.$slots.option])]);
      } else if (this.contentBlockType) {
        return h("div", {
          "class": "rt-row-list__item rt-row-list__item--block-type rt-col"
        }, [h("div", {
          "class": "rt-row-list__header"
        }, [this.$slots.icon ? h("div", {
          "class": "rt-row-list__icon rt-md-space-bottom rt-row-list__icon--baseline"
        }, [this.$slots.icon]) : null, h("div", {
          "class": "rt-row-list__content rt-row-list__content--column"
        }, [this.$slots.option])])]);
      } else {
        return h("div", {
          "class": "rt-row-list__item rt-col-12 rt-col-md-3"
        }, [h("div", {
          "class": "rt-row-list__header row"
        }, [this.$slots.icon ? h("div", {
          "class": "rt-row-list__icon rt-col-1 rt-col-md-3 rt-md-space-bottom"
        }, [this.$slots.icon]) : null, h("div", {
          "class": this.$slots.icon ? "rt-row-list__content rt-col-7 rt-col-md-3" : "rt-row-list__content rt-col-8 rt-col-md-3"
        }, [this.$slots.option]), h("div", {
          "class": "rt-row-list__value rt-col-4 rt-col-md-3 rt-md-space-top"
        }, [this.$slots.value])])]);
      }
    } else if (this.isProfitList) {
      var columnClass = function () {
        var profitColumn = '';

        if (_this2.columnsQuantity === 2) {
          profitColumn += ' rtb-profit--col-2 rt-col-6 ';
        }

        if (_this2.columnsQuantity === 3) {
          profitColumn += ' rtb-profit--col-3 rt-col-4 ';
        }

        return profitColumn;
      }();

      return h("div", {
        "class": "rt-row-list__item rtb-profit" + columnClass + "rt-col-td-3 rt-col-md-3"
      }, [h("div", {
        "class": "rt-row-list__header"
      }, [h("div", {
        "class": "rt-row-list__icon",
        style: this.iconImage
      }), this.$slots.option])]);
    } else if (this.companyProfits) {
      var _columnClass = function () {
        var profitColumn = '';

        if (_this2.columnsQuantity === 1) {
          profitColumn += ' rt-col-3 ';
        }

        if (_this2.columnsQuantity === 2) {
          profitColumn += ' rt-col-6 ';
        }

        if (_this2.columnsQuantity === 3) {
          profitColumn += ' rt-col-4 ';
        }

        return profitColumn;
      }();

      return h("div", {
        "class": "rt-row-list__item" + _columnClass + " rt-col-td-3 rt-col-md-3 rtb-profit rtb-company-profits" + (this.alignLeft ? " rtb-company-profits--left" : "")
      }, [h("div", {
        "class": "rt-row-list__header"
      }, [h("div", {
        "class": "rt-row-list__icon",
        style: this.iconImage
      }), this.$slots.option])]);
    } else {
      var _columnClass2 = function () {
        var profitColumn = '';

        if (_this2.columnsQuantity === 2) {
          profitColumn += ' rtb-profit--col-2 rt-col-6 ';
        }

        if (_this2.columnsQuantity === 3) {
          profitColumn += ' rtb-profit--col-3 rt-col-4 ';
        }

        return profitColumn;
      }();

      return h("div", {
        "class": "rt-row-list__item rtb-profit rtb-services" + _columnClass2 + "rt-col-td-3 rt-col-md-3"
      }, [h("div", {
        "class": "rt-row-list__header"
      }, [h("div", {
        "class": "rt-row-list__icon",
        style: this.iconImage
      }), this.$slots.option])]);
    }
  }
});
// CONCATENATED MODULE: ./src/components/RowList/RowListItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var RowList_RowListItemvue_type_script_lang_js_ = (RowListItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/RowList/RowListItem.vue
var RowListItem_render, RowListItem_staticRenderFns




/* normalize component */

var RowListItem_component = normalizeComponent(
  RowList_RowListItemvue_type_script_lang_js_,
  RowListItem_render,
  RowListItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RowListItem = (RowListItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/Table.vue?vue&type=script&lang=js&
/* harmony default export */ var Tablevue_type_script_lang_js_ = ({
  name: "RtTable",
  components: {},
  props: {
    tabletListType: {
      type: Boolean,
      "default": false
    },
    noBorders: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      tableLabels: []
    };
  },
  provide: function provide() {
    var tableLabels = this["tableLabels"];
    return {
      tableLabels: tableLabels
    };
  },
  render: function render(h) {
    var _this = this;

    var columns = function columns() {
      if (!_this.$slots.columns) {
        return null;
      }

      return h("div", {
        "class": "rt-table-colgroup"
      }, [_this.$slots.columns]);
    };

    var renderBodyFn = function renderBodyFn() {
      if (!_this.$slots.body) {
        return null;
      }

      return _this.$slots.body.map(function (slotVNode) {
        if (slotVNode.tag && slotVNode.tag.search(/RtTableRow/gi) >= 0) {
          slotVNode.componentOptions = slotVNode.componentOptions || {};
          slotVNode.componentOptions.propsData = slotVNode.componentOptions.propsData || {};
          slotVNode.componentOptions.propsData.tableLabels = JSON.stringify(_this.tableLabels);
        }

        return slotVNode;
      });
    };

    if (this.$slots.label) {
      return h("div", [h("p", {
        "class": "rt-table-title rt-space-bottom rt-td-space-bottom"
      }, [this.$slots.label]), this.$slots.description, h("table", {
        "class": "rt-table" + (this.tabletListType ? " rt-table--list" : "") + (this.noBorders ? " rt-table--no-borders" : "")
      }, [columns(), h("thead", {
        "class": "rt-table-head",
        ref: "head"
      }, [this.$slots.header]), h("tbody", [renderBodyFn()])])]);
    } else {
      return h("table", {
        "class": "rt-table" + (this.tabletListType ? " rt-table--list" : "") + (this.noBorders ? " rt-table--no-borders" : "")
      }, [columns(), h("thead", {
        "class": "rt-table-head",
        ref: "head"
      }, [this.$slots.header]), h("tbody", [renderBodyFn()])]);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Table/Table.vue?vue&type=script&lang=js&
 /* harmony default export */ var Table_Tablevue_type_script_lang_js_ = (Tablevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Table/Table.vue
var Table_render, Table_staticRenderFns




/* normalize component */

var Table_component = normalizeComponent(
  Table_Tablevue_type_script_lang_js_,
  Table_render,
  Table_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Table = (Table_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/TableHeadItem.vue?vue&type=script&lang=js&
/* harmony default export */ var TableHeadItemvue_type_script_lang_js_ = ({
  name: "RtTableHeadItem",
  components: {},
  inject: ["tableLabels"],
  props: {
    fill: {
      type: Boolean,
      "default": false
    },
    colspan: {
      type: Number,
      String: String,
      "default": 1
    },
    verticalAlign: {
      type: String,
      "default": null
    },
    align: {
      type: String,
      "default": null
    },
    width: {
      type: [String, Number],
      "default": null
    }
  },
  created: function created() {},
  mounted: function mounted() {
    var name = this.$el.innerText.trim();

    if (this.tableLabels.length === 1 && this.tableLabels[0] === name) {
      this.tableLabels.push(name);
    }

    this.tableLabels.push(name);

    for (var i = 0; i < parseInt(this.colspan) - 1; i++) {
      this.tableLabels.push('');
    }
  },
  render: function render(h) {
    var style = {};

    if (this.verticalAlign) {
      style.verticalAlign = this.verticalAlign;
    }

    if (this.align) {
      style.textAlign = this.align;
    }

    return h("th", {
      "class": "rt-table-head__item",
      attrs: {
        colspan: this.colspan
      },
      style: style
    }, [this.$slots["default"]]);
  }
});
// CONCATENATED MODULE: ./src/components/Table/TableHeadItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Table_TableHeadItemvue_type_script_lang_js_ = (TableHeadItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Table/TableHeadItem.vue
var TableHeadItem_render, TableHeadItem_staticRenderFns




/* normalize component */

var TableHeadItem_component = normalizeComponent(
  Table_TableHeadItemvue_type_script_lang_js_,
  TableHeadItem_render,
  TableHeadItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TableHeadItem = (TableHeadItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/TableItem.vue?vue&type=script&lang=js&
/* harmony default export */ var TableItemvue_type_script_lang_js_ = ({
  name: "RtTableItem",
  components: {},
  inject: {
    tableLabels: {}
  },
  props: {
    mobileWidth: {
      type: String,
      "default": null
    },
    html: {
      type: String,
      "default": null
    },
    verticalAlign: {
      type: String,
      "default": null
    },
    align: {
      type: String,
      "default": null
    },
    colspan: {
      type: [Number, String],
      "default": 1
    },
    slotIndex: {
      type: Number,
      "default": null
    },
    inactive: {
      type: Boolean,
      "default": false
    }
  },
  mounted: function mounted() {
    if (this.$parent.$parent._props.noBorders) {
      var tableBorder = document.createElement("div");
      tableBorder.classList.add('border-element');
      this.$el.appendChild(tableBorder);
    }

    ;
  },
  render: function render(h) {
    var style = {};
    var classList = "rt-table-body__item";

    if (this.verticalAlign) {
      style.verticalAlign = this.verticalAlign;
    }

    if (this.align) {
      style.textAlign = this.align;
    }

    if (this.mobileWidth) {
      if (this.mobileWidth === "50%") {
        classList += " rt-table-body__item--half-mobile-width";
      }
    }

    if (this.inactive) {
      classList += " rt-table-body__item--inactive";
    }

    var slotLabel = '';

    if (this.colspan == 1) {
      slotLabel = this.tableLabels[this.slotIndex];
    } else {
      for (var i = 0; i <= this.colspan; i++) {
        slotLabel += this.tableLabels[i] + ', ';
      }
    }

    return h("td", {
      style: style,
      attrs: {
        colspan: this.colspan,
        label: slotLabel
      },
      "class": classList
    }, [this.html ? h("div", {
      domProps: {
        "innerHTML": this.html
      },
      "class": "rt-table-body__content"
    }) : h("div", {
      "class": "rt-table-body__content"
    }, [this.$slots["default"]])]);
  }
});
// CONCATENATED MODULE: ./src/components/Table/TableItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Table_TableItemvue_type_script_lang_js_ = (TableItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Table/TableItem.vue
var TableItem_render, TableItem_staticRenderFns




/* normalize component */

var TableItem_component = normalizeComponent(
  Table_TableItemvue_type_script_lang_js_,
  TableItem_render,
  TableItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TableItem = (TableItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/TableCol.vue?vue&type=script&lang=js&
/* harmony default export */ var TableColvue_type_script_lang_js_ = ({
  name: "RtTableCol",
  components: {},
  inject: ["tableLabels"],
  props: {
    width: {
      type: [String, Number],
      "default": null
    }
  },
  render: function render(h) {
    var style = {};

    if (this.width) {
      style.width = String(this.width).replace(/[0-9]/gi).length === 0 ? String(this.width) + "px" : this.width;
    }

    return h("div", {
      "class": "rt-table-col",
      style: style
    });
  }
});
// CONCATENATED MODULE: ./src/components/Table/TableCol.vue?vue&type=script&lang=js&
 /* harmony default export */ var Table_TableColvue_type_script_lang_js_ = (TableColvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Table/TableCol.vue
var TableCol_render, TableCol_staticRenderFns




/* normalize component */

var TableCol_component = normalizeComponent(
  Table_TableColvue_type_script_lang_js_,
  TableCol_render,
  TableCol_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TableCol = (TableCol_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Table/TableRow.vue?vue&type=script&lang=js&
/* harmony default export */ var TableRowvue_type_script_lang_js_ = ({
  name: "RtTableRow",
  components: {},
  inject: {
    tableLabels: {}
  },
  props: {
    fill: {
      type: Boolean,
      "default": false
    }
  },
  mounted: function mounted() {// return this.$slots.default.map(slotVNode => {
    //   console.info('!!',slotVNode.elm);
    // })
  },
  render: function render(h) {
    var _this = this;

    var renderSlots = function renderSlots() {
      var counter = 0;
      return _this.$slots["default"].map(function (slotVNode) {
        if (slotVNode.tag && slotVNode.tag.search(/RtTableItem/gi) >= 0) {
          slotVNode.componentOptions = slotVNode.componentOptions || {};
          slotVNode.componentOptions.propsData = slotVNode.componentOptions.propsData || {}; // for(let i in Object.keys(slotVNode)){
          //   console.info('++',Object.keys(slotVNode)[i],slotVNode[Object.keys(slotVNode)[i]])
          // }

          slotVNode.componentOptions.propsData.slotIndex = counter;

          if (slotVNode.componentOptions.propsData.colspan) {
            counter += slotVNode.componentOptions.propsData.colspan - 0;
          } else {
            counter++;
          }
        }

        return slotVNode;
      });
    };

    return h("tr", {
      "class": "rt-table-body__row" + (this.fill ? " rt-table-body__row--fill" : "")
    }, [renderSlots()]);
  }
});
// CONCATENATED MODULE: ./src/components/Table/TableRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var Table_TableRowvue_type_script_lang_js_ = (TableRowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Table/TableRow.vue
var TableRow_render, TableRow_staticRenderFns




/* normalize component */

var TableRow_component = normalizeComponent(
  Table_TableRowvue_type_script_lang_js_,
  TableRow_render,
  TableRow_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TableRow = (TableRow_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DownloadContent/DownloadContent.vue?vue&type=script&lang=js&
/* harmony default export */ var DownloadContentvue_type_script_lang_js_ = ({
  name: "RtDownloadContent",
  props: {
    expansion: {
      type: String,
      "default": null
    },
    fileSize: {
      type: String,
      "default": null
    },
    link: {
      type: String,
      "default": null
    }
  },
  computed: {},
  mounted: function mounted() {
    if (this.link) {
      if (!this.exception) {
        this.exception = this.link.split(".").pop().split(/\?#/)[0];
      }
    }
  },
  render: function render(h) {
    return h("div", [h("div", {
      "class": "download-content"
    }, [h("div", {
      "class": "download-content__icon"
    }, [h("svg", {
      attrs: {
        width: "17px",
        height: "22px",
        viewBox: "0 0 17 22",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      },
      "class": "download-content__icon-svg"
    }, [h("g", {
      attrs: {
        id: "Page-1",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }
    }, [h("g", {
      attrs: {
        id: "Group-4",
        transform: "translate(1.000000, 0.000000)"
      }
    }, [h("g", {
      attrs: {
        id: "icon_48",
        transform: "translate(0.000000, 1.000000)"
      }
    }, [h("polygon", {
      attrs: {
        id: "Shape",
        points: "14.4782609 4.08695652 14.4782609 19.8695652 0.304347826 19.8695652 0.304347826 0.130434783 10.5652174 0.130434783"
      }
    }), h("polyline", {
      attrs: {
        id: "Shape",
        points: "14.4782609 4.8 9.86406581 4.8 9.86406581 0.130434783"
      }
    })])])])])]), h("div", {
      "class": "download-content__text"
    }, [this.$slots["default"]]), h("div", {
      "class": "download-content__info"
    }, [this.fileSize, this.expansion ? ", " + this.expansion : ""])])]);
  }
});
// CONCATENATED MODULE: ./src/components/DownloadContent/DownloadContent.vue?vue&type=script&lang=js&
 /* harmony default export */ var DownloadContent_DownloadContentvue_type_script_lang_js_ = (DownloadContentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/DownloadContent/DownloadContent.vue
var DownloadContent_render, DownloadContent_staticRenderFns




/* normalize component */

var DownloadContent_component = normalizeComponent(
  DownloadContent_DownloadContentvue_type_script_lang_js_,
  DownloadContent_render,
  DownloadContent_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DownloadContent = (DownloadContent_component.exports);
// EXTERNAL MODULE: external "vue-rt-style-kit-atoms"
var external_vue_rt_style_kit_atoms_ = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InlineDropdown/InlineDropdown.vue?vue&type=script&lang=js&

var InlineDropdownvue_type_script_lang_js_componentsList = {};
InlineDropdownvue_type_script_lang_js_componentsList[external_vue_rt_style_kit_atoms_["Select"].name] = external_vue_rt_style_kit_atoms_["Select"];
/* harmony default export */ var InlineDropdownvue_type_script_lang_js_ = ({
  name: "RtInlineDropdown",
  components: {},
  props: {
    resizeSteps: {
      type: Array,
      "default": []
    },
    dropdownMinWidth: {
      type: [Number, String]
    }
  },
  data: function data() {
    return {
      resizeTypeEnum: 0,
      RtInlineDropdown: {
        minClientY: null,
        maxClientY: null,
        stepToClose: null,
        activeItem: null,
        isDropdownMode: false
      },
      dropdownStyle: null,
      idealHeight: null,
      dropdownStepWidth: null
    };
  },
  provide: function provide() {
    var RtInlineDropdown = this.RtInlineDropdown;
    return {
      RtInlineDropdown: RtInlineDropdown
    };
  },
  mounted: function mounted() {
    this.stepCheck();
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindResize();
  },
  updated: function updated() {
    this.unbindResize();
    this.bindResize();
  },
  methods: {
    stepCheck: function stepCheck(step) {
      if (this.RtInlineDropdown.isDropdownMode) {
        this.RtInlineDropdown.isDropdownMode = false;
        this.stepCheck();
      } else {
        var currentStep = step ? step : 0;
        var width = 2000 - 10 * currentStep;
        var nowrap = "";

        if (currentStep === 0) {
          nowrap = "flex-wrap: nowrap;";
          this.$el.setAttribute("style", "".concat(nowrap));
        } else {
          this.$el.removeAttribute("style");
        }

        var el = this.$el.querySelector(".rt-inline-dropdown__list");

        if (el) {
          el.setAttribute("style", "width: ".concat(width, "px!important; height:auto!important;").concat(nowrap));

          if (currentStep == 0) {
            this.idealHeight = el.clientHeight;
          }

          if (this.idealHeight === el.clientHeight) {
            this.stepCheck(++currentStep);
          } else {
            this.dropdownStepWidth = width + 40;
            el.removeAttribute("style");
            this.bindResize();
          }
        }
      }
    },
    bindResize: function bindResize() {
      window.addEventListener("resize", this.checkWidth, {
        passive: true
      });
      this.checkWidth();
    },
    checkWidth: function checkWidth() {
      var currentClienWidth = this.$el.clientWidth;
      var isDropdownMode = currentClienWidth <= this.dropdownStepWidth;

      if (this.RtInlineDropdown.isDropdownMode != isDropdownMode) {
        this.RtInlineDropdown.isDropdownMode = isDropdownMode;
      }

      if (this.resizeSteps && this.resizeSteps.length > 0) {
        var windowWidth = window.innerWidth;
        var enumIndex = this.resizeSteps.findIndex(function (a) {
          return windowWidth < parseInt(a);
        });

        if (enumIndex < 0) {
          enumIndex = this.resizeSteps.length;
        }

        if (this.resizeTypeEnum !== enumIndex) {
          this.resizeTypeEnum = enumIndex;
          this.stepCheck();
        }
      }
    },
    unbindResize: function unbindResize() {
      window.removeEventListener("resize", this.checkWidth);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": "rt-inline-dropdown"
    }, [this.RtInlineDropdown.isDropdownMode ? h("rt-select", {
      attrs: {
        text: this.RtInlineDropdown.activeItem,
        "dropdown-min-width": this.dropdownMinWidth,
        "reset-wrapper-width": true
      }
    }, [this.$slots["default"]]) : h("div", {
      "class": "rt-inline-dropdown__list"
    }, [this.$slots["default"]])]);
  }
});
// CONCATENATED MODULE: ./src/components/InlineDropdown/InlineDropdown.vue?vue&type=script&lang=js&
 /* harmony default export */ var InlineDropdown_InlineDropdownvue_type_script_lang_js_ = (InlineDropdownvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/InlineDropdown/InlineDropdown.vue
var InlineDropdown_render, InlineDropdown_staticRenderFns




/* normalize component */

var InlineDropdown_component = normalizeComponent(
  InlineDropdown_InlineDropdownvue_type_script_lang_js_,
  InlineDropdown_render,
  InlineDropdown_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InlineDropdown = (InlineDropdown_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/InlineDropdown/InlineDropdownItem.vue?vue&type=script&lang=js&
/* harmony default export */ var InlineDropdownItemvue_type_script_lang_js_ = ({
  name: "RtInlineDropdownItem",
  components: {},
  props: {
    isActive: {
      type: Boolean,
      "default": false
    }
  },
  inject: {
    RtInlineDropdown: {}
  },
  mounted: function mounted() {
    if (this.isActive) {
      this.RtInlineDropdown.activeItem = this.$el.innerText;
    }
  },
  methods: {},
  render: function render() {
    var h = arguments[0];

    if (this.RtInlineDropdown.isDropdownMode) {
      return h("rt-select-option", [this.$slots["default"]]);
    }

    return h("div", {
      "class": "rt-inline-dropdown-item"
    }, [this.$slots["default"]]);
  }
});
// CONCATENATED MODULE: ./src/components/InlineDropdown/InlineDropdownItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var InlineDropdown_InlineDropdownItemvue_type_script_lang_js_ = (InlineDropdownItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/InlineDropdown/InlineDropdownItem.vue
var InlineDropdownItem_render, InlineDropdownItem_staticRenderFns




/* normalize component */

var InlineDropdownItem_component = normalizeComponent(
  InlineDropdown_InlineDropdownItemvue_type_script_lang_js_,
  InlineDropdownItem_render,
  InlineDropdownItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InlineDropdownItem = (InlineDropdownItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tag/Tag.vue?vue&type=script&lang=js&
var Tagvue_type_script_lang_js_componentsList = {};
/* harmony default export */ var Tagvue_type_script_lang_js_ = ({
  name: "RtTag",
  components: Tagvue_type_script_lang_js_componentsList,
  props: {
    isActive: {
      type: Boolean,
      "default": false
    },
    setToFilter: {
      type: Boolean,
      "default": false
    },
    value: {
      type: String,
      "default": null
    }
  },
  data: function data() {
    return {
      index: null
    };
  },
  inject: ['RtTags'],
  created: function created() {},
  methods: {
    checkIfActive: function checkIfActive() {
      if (this.isActive && !this.RtTags.indexOfActiveTag !== this.index) {
        this.RtTags.indexOfActiveTag = this.index;
      }
    },
    toggleActiveState: function toggleActiveState() {
      this.isNowActive = !this.isNowActive;
    },
    setActive: function setActive() {
      this.RtTags.setActiveTag(this.index);
      this.RtTags.setActiveValue(this.value);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      on: {
        "click": this.setActive
      },
      "class": "rt-tag" + (this.RtTags.indexOfActiveTag != null && this.RtTags.indexOfActiveTag === this.index ? " rt-tag--is-active" : "")
    }, [this.$slots["default"]]);
  }
});
// CONCATENATED MODULE: ./src/components/Tag/Tag.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tag_Tagvue_type_script_lang_js_ = (Tagvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tag/Tag.vue
var Tag_render, Tag_staticRenderFns




/* normalize component */

var Tag_component = normalizeComponent(
  Tag_Tagvue_type_script_lang_js_,
  Tag_render,
  Tag_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Tag = (Tag_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Tag/TagsList.vue?vue&type=script&lang=js&
var TagsListvue_type_script_lang_js_componentsList = {};
/* harmony default export */ var TagsListvue_type_script_lang_js_ = ({
  name: "RtTagList",
  components: TagsListvue_type_script_lang_js_componentsList,
  props: {
    isActive: {
      type: Boolean,
      "default": false
    },
    color: {
      type: String,
      "default": null
    }
  },
  data: function data() {
    return {
      indexOfActiveTag: 0,
      value: 0,
      RtTags: {
        indexOfActiveTag: 0,
        setActiveTag: null,
        setActiveValue: null
      }
    };
  },
  provide: function provide() {
    var RtTags = this.RtTags;
    return {
      RtTags: RtTags
    };
  },
  mounted: function mounted() {
    this.bindChilds();
    this.RtTags.setActiveTag = this.setActiveTag;
    this.RtTags.setActiveValue = this.setActiveValue;
    this.$children.forEach(function (vComponent, index) {
      vComponent.index = index;

      if (vComponent.checkIfActive && typeof vComponent.checkIfActive === 'function') {
        vComponent.checkIfActive();
      }
    });
  },
  updated: function updated() {
    this.bindChilds();
  },
  methods: {
    bindChilds: function bindChilds() {
      var _this = this;

      this.$children.forEach(function (vNode) {
        vNode.$on('change', function (value) {
          _this.setActiveTag(vNode.tagIndex);

          _this.setActiveValue(value);
        });

        if (vNode.isActive && vNode.tagIndex !== _this.indexOfActiveTag) {
          _this.indexOfActiveTag = vNode.tagIndex;
          _this.value = vNode.value;
        }
      });
    },
    setActiveTag: function setActiveTag(index) {
      this.RtTags.indexOfActiveTag = index;
    },
    setActiveValue: function setActiveValue(newValue) {
      this.value = newValue;
      this.$emit("change", newValue);
    }
  },
  render: function render(h) {
    this.$slots["default"].filter(function (vNode) {
      if (vNode.tag) {
        return true;
      }

      return false;
    }).forEach(function (vNode, index) {
      if (vNode.componentInstance) {
        vNode.componentInstance = vNode.componentInstance || {};
        vNode.componentInstance.$data.index = index;
        vNode.componentInstance.index = index;
      }
    });
    return h("div", {
      "class": "rt-tag-list" + (this.color ? " rt-tag-list--color-" + this.color : "")
    }, [this.$slots["default"]]);
  }
});
// CONCATENATED MODULE: ./src/components/Tag/TagsList.vue?vue&type=script&lang=js&
 /* harmony default export */ var Tag_TagsListvue_type_script_lang_js_ = (TagsListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tag/TagsList.vue
var TagsList_render, TagsList_staticRenderFns




/* normalize component */

var TagsList_component = normalizeComponent(
  Tag_TagsListvue_type_script_lang_js_,
  TagsList_render,
  TagsList_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TagsList = (TagsList_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Filter/Filter.vue?vue&type=script&lang=js&
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Filtervue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Filtervue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ var Filtervue_type_script_lang_js_ = ({
  name: "RtFilter",
  props: {
    changeUrl: {
      type: Boolean,
      "default": false
    },
    dontClearProps: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      selectedProps: {},
      listners: [],
      listnersCaller: []
    };
  },
  provide: function provide() {
    var RtFilter = {};
    RtFilter['selectedProps'] = this.selectedProps;
    RtFilter['setProps'] = this.setProps;
    RtFilter['removeProps'] = this.removeProps;
    RtFilter['removeAllProps'] = this.removeAllProps;
    RtFilter['addListener'] = this.addListener;
    RtFilter['addListenerForCaller'] = this.addListenerForCaller;
    RtFilter['getFromHistory'] = this.getFromHistory;
    return {
      RtFilter: RtFilter
    };
  },
  watch: {
    selectedProps: function selectedProps(newProps, oldProps) {
      if (this.changeUrl && JSON.stringify(newProps) !== JSON.stringify(oldProps)) {
        this.setHistory();
      }
    }
  },
  mounted: function mounted() {
    this.getFromHistory();
  },
  methods: {
    setHistory: function setHistory() {
      var _this = this;

      if (window.history) {
        var history = window.history;
        var getLine = '';
        Object.keys(this.selectedProps).forEach(function (key) {
          if (_this.selectedProps[key] && _this.selectedProps[key].length > 0 && _this.selectedProps[key][0].search('@') !== 0) {
            if (getLine.length > 1) {
              getLine += ',';
            }

            getLine += key + ':';
            getLine += _this.selectedProps[key].join('+');
          }
        });
        var params = new URLSearchParams(location.search);

        if (getLine.length > 0) {
          params.set('filter', getLine);
        } else {
          if (params.get('filter') && params.get('filter').toString().length > 0) {
            params["delete"]('filter');
          }
        }

        if (params.toString().length > 0) {
          if (location.search !== encodeURIComponent(params)) {
            history.replaceState({}, "", decodeURIComponent("".concat(location.pathname, "?").concat(encodeURIComponent(params))));
          }
        } else {
          history.replaceState({}, "", decodeURIComponent("".concat(location.pathname)));
        }
      }
    },
    getFromHistory: function getFromHistory() {
      if (this.changeUrl) {
        var params = new URLSearchParams(location.search);
        var filter = params.get('filter');
        var json = {};

        if (filter) {
          filter.split(',').map(function (i) {
            var item = i.split(':');
            json[item[0]] = item[1].split('+');
          });
          this.$set(this, 'selectedProps', json);
          this.callListenersCallers();
        }
      }
    },
    callListeners: function callListeners() {
      var _this2 = this;

      this.listners.forEach(function (fn) {
        fn.call(null, _this2.selectedProps);
      });
    },
    callListenersCallers: function callListenersCallers() {
      var _this3 = this;

      this.listnersCaller.forEach(function (fn) {
        fn.call(null, _this3.selectedProps);
      });
    },
    addListener: function addListener(fn) {
      this.listners.push(fn);
      return this.listners.length - 1;
    },
    addListenerForCaller: function addListenerForCaller(fn) {
      this.listnersCaller.push(fn);
      return this.listners.length - 1;
    },
    setProps: function setProps(option, value) {
      if (value.length === 0) {
        this.removeProps(option);
      } else {
        this.selectedProps = _objectSpread({}, this.selectedProps);
        this.$set(this.selectedProps, option, value);
        this.callListeners();
      }
    },
    removeAllProps: function removeAllProps() {
      var _this4 = this;

      var json = {};
      this.dontClearProps.forEach(function (key) {
        json[key] = _this4.selectedProps[key];
      });
      this.$set(this, 'selectedProps', json);
      this.callListeners();
    },
    removeProps: function removeProps(option) {
      this.selectedProps = _objectSpread({}, this.selectedProps);
      delete this.selectedProps[option];
      this.$set(this, 'selectedProps', this.selectedProps);
      this.callListeners();
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": "d-static"
    }, [this.$slots["default"]]);
  }
});
// CONCATENATED MODULE: ./src/components/Filter/Filter.vue?vue&type=script&lang=js&
 /* harmony default export */ var Filter_Filtervue_type_script_lang_js_ = (Filtervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Filter/Filter.vue
var Filter_render, Filter_staticRenderFns




/* normalize component */

var Filter_component = normalizeComponent(
  Filter_Filtervue_type_script_lang_js_,
  Filter_render,
  Filter_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Filter = (Filter_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Filter/FilterWatcher.vue?vue&type=script&lang=js&
function FilterWatchervue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FilterWatchervue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FilterWatchervue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { FilterWatchervue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FilterWatchervue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FilterWatchervue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ var FilterWatchervue_type_script_lang_js_ = ({
  name: "RtFilterWatcher",
  inject: ["RtFilter"],
  props: {
    options: {
      type: Array,
      "default": null
    },
    values: {
      type: Array,
      "default": null
    }
  },
  data: function data() {
    return {
      index: null,
      selectedProps: {},
      isActive: true,
      valuesList: []
    };
  },
  created: function created() {
    var _this = this;

    setTimeout(function () {
      _this.setPropsToChildren();
    }, 0);
  },
  mounted: function mounted() {
    this.setValuesList();
    this.RtFilter.addListener(this.onUpdateProps);
  },
  methods: {
    setValuesList: function setValuesList() {
      var _this2 = this;

      this.values.forEach(function (value_item, index) {
        if (Array.isArray(value_item)) {
          _this2.valuesList[index] = value_item;
        } else {
          _this2.valuesList[index] = [value_item];
        }
      });
    },
    checkValue: function checkValue(watcherValue, filterValue) {
      var res = false;
      var typeOfCheck = 0;

      if ((watcherValue + '').search("less than") === 0) {
        typeOfCheck = 1;
      }

      if ((watcherValue + '').search("more than") === 0) {
        typeOfCheck = 2;
      }

      switch (typeOfCheck) {
        case 1:
          res = filterValue - 0 < watcherValue.replace("less than", "") - 0;
          break;

        case 2:
          res = filterValue - 0 > watcherValue.replace("less than", "") - 0;
          break;

        default:
          res = filterValue === watcherValue;
          break;
      }

      return res;
    },
    onUpdateProps: function onUpdateProps(props) {
      var _this3 = this;

      var importantOptionsMap = {};
      var simpleOptionsMap = {};
      var hasOnlyOption = false;
      this.options.forEach(function (optionName, optionIndex) {
        if (_this3.valuesList[optionIndex]) {
          _this3.valuesList[optionIndex].forEach(function (value, valueIndex) {
            if ((value + '').search(/(only )|(not )/) === 0) {
              importantOptionsMap[optionName] = value;

              if (_this3.valuesList[optionIndex][valueIndex].search(/(only )/) === 0) {
                hasOnlyOption = true;
              }
            } else {
              if (!simpleOptionsMap[optionName]) {
                simpleOptionsMap[optionName] = [];
              }

              if (Array.isArray(value)) {
                simpleOptionsMap[optionName] = simpleOptionsMap[optionName].concat(value);
              } else {
                simpleOptionsMap[optionName].push(value);
              }
            }
          });
        }
      });

      var sendedProps = FilterWatchervue_type_script_lang_js_objectSpread({}, props);

      var needToBreakFilter = false;

      if (Object.keys(importantOptionsMap).length > 0) {
        this.isActive = true;
        Object.keys(importantOptionsMap).forEach(function (key) {
          if (importantOptionsMap[key].search("only ") === 0) {
            if (!sendedProps[key]) {
              needToBreakFilter = true;
              _this3.isActive = false;
              return false;
            } else {
              var onlyOption = importantOptionsMap[key].replace("only ", "");

              if (sendedProps[key].findIndex(function (i) {
                return i === onlyOption;
              }) < 0) {
                needToBreakFilter = true;
                _this3.isActive = false;
                return false;
              }
            }
          } else {
            if (importantOptionsMap[key].search("not ") === 0) {
              if (sendedProps[key]) {
                var notOption = importantOptionsMap[key].replace("not ", "");

                if (sendedProps[key].findIndex(function (i) {
                  return i === notOption;
                }) >= 0) {
                  needToBreakFilter = true;
                  _this3.isActive = false;
                  return false;
                }
              }
            }
          }

          if (needToBreakFilter) {
            return false;
          }
        });

        if (needToBreakFilter) {
          return false;
        }
      }

      if (Object.keys(simpleOptionsMap).length > 0 && this.isActive) {
        Object.keys(simpleOptionsMap).forEach(function (key) {
          var hasFound = false;

          if (sendedProps[key]) {
            var sendedPropsValues = Array.isArray(sendedProps[key]) ? sendedProps[key] : [sendedProps[key]];
            hasFound = sendedPropsValues.findIndex(function (sendedPropsValuesItem) {
              return simpleOptionsMap[key].findIndex(function (simpleOptionsMapItem) {
                return _this3.checkValue(simpleOptionsMapItem, sendedPropsValuesItem);
              }) >= 0;
            }) >= 0;

            if (!hasFound) {
              _this3.isActive = false;
              return false;
            }
          }

          if (needToBreakFilter) {
            return false;
          }
        });
      }
    },
    setPropsToChildren: function setPropsToChildren() {
      var _this4 = this;

      this.$children.forEach(function (vNode) {
        if (vNode && vNode.index !== "undefinded") {
          vNode.$set(vNode, "index", _this4.index);
        }
      });
    }
  },
  render: function render() {
    var h = arguments[0];

    if (this.isActive) {
      return h("div", {
        "class": "d-static"
      }, [this.$slots["default"]]);
    } else {
      return null;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Filter/FilterWatcher.vue?vue&type=script&lang=js&
 /* harmony default export */ var Filter_FilterWatchervue_type_script_lang_js_ = (FilterWatchervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Filter/FilterWatcher.vue
var FilterWatcher_render, FilterWatcher_staticRenderFns




/* normalize component */

var FilterWatcher_component = normalizeComponent(
  Filter_FilterWatchervue_type_script_lang_js_,
  FilterWatcher_render,
  FilterWatcher_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FilterWatcher = (FilterWatcher_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Filter/FilterCaller.vue?vue&type=script&lang=js&
/* harmony default export */ var FilterCallervue_type_script_lang_js_ = ({
  name: "RtFilterCaller",
  inject: ["RtFilter"],
  props: {
    clearValue: {
      type: Boolean,
      "default": false
    },
    option: {
      type: String,
      "default": null
    },
    value: {
      type: String,
      "default": null
    },
    clearZero: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      index: null,
      selectedProps: []
    };
  },
  mounted: function mounted() {
    this.RtFilter.addListenerForCaller(this.onUpdateFilters);
    this.setPropsFromChildren();
  },
  methods: {
    onUpdateFilters: function onUpdateFilters(props) {
      this.setPropsToChildren(props);
    },
    fireFilterEvent: function fireFilterEvent() {
      if (this.clearValue) {
        this.RtFilter.removeProps(this.option);
      } else {
        this.RtFilter.setProps(this.option, this.value);
      }
    },
    fireFilterEventWithDataFromChild: function fireFilterEventWithDataFromChild(childDataJson) {
      var _this = this;

      Object.keys(childDataJson).forEach(function (optionName) {
        _this.RtFilter.setProps(optionName, childDataJson[optionName]);
      });
      setTimeout(function () {
        window.dispatchEvent(new Event("resize"));
      }, 0);
    },
    setPropsToChildren: function setPropsToChildren(props) {
      this.$children.forEach(function (vNode) {
        if (vNode.$vnode.tag.search('RtInput') > 0) {
          if ('changeFromParent' in vNode) {
            vNode.changeFromParent(props);
          }
        } else {
          if (vNode.$vnode.tag.search(/(RtSwitchContainer|RtCheckboxContainer|RtRadioButtonContainer)/) > 0) {
            if ('updateAllChildren' in vNode) {
              vNode.updateAllChildren(props);
            }
          }
        }
      });
    },
    setPropsFromChildren: function setPropsFromChildren() {
      var _this2 = this;

      this.$children.forEach(function (vNode) {
        if (vNode && vNode.index !== "undefinded") {
          vNode.$set(vNode, 'index', _this2.index);

          if (vNode.$vnode.tag.search('RtTagList') > 0) {
            vNode.$on('change', function (value) {
              var json = "";

              if (value) {
                json = JSON.parse(value.replace(/'/g, '"'));
              }

              var keys = Object.keys(json);

              _this2.RtFilter.removeAllProps();

              keys.forEach(function (key) {
                _this2.RtFilter.setProps(key, [].concat(json[key]));

                setTimeout(function () {
                  _this2.RtFilter.getFromHistory();
                }, 300);
              });
            });
          } else {
            if (vNode.$vnode.tag.search('RtInput') > 0) {
              vNode.$on('input', function (value) {
                var childDataJson = {};

                if (vNode.$vnode.componentOptions && vNode.$vnode.componentOptions.propsData && vNode.$vnode.componentOptions.propsData.insertType === 'number' && value + '' !== '0') {
                  childDataJson[vNode['name']] = [value + ''];
                } else {
                  childDataJson[vNode['name']] = [value + ''];
                }

                if (_this2.clearZero && !isNaN(parseInt(value)) && parseInt(value) === 0) {
                  childDataJson[vNode['name']] = [];
                }

                _this2.fireFilterEventWithDataFromChild(childDataJson);
              });
            } else {
              if (vNode.$vnode.tag.search(/(RtSwitchContainer|RtCheckboxContainer|RtRadioButtonContainer)/) > 0) {
                vNode.$on('change', function (childDataJson) {
                  _this2.fireFilterEventWithDataFromChild(childDataJson);
                });
              } else {
                vNode.$el.addEventListener('click', function () {
                  _this2.fireFilterEvent();
                }, false);
              }
            }
          }
        }
      });
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": "d-static"
    }, [this.$slots["default"]]);
  }
});
// CONCATENATED MODULE: ./src/components/Filter/FilterCaller.vue?vue&type=script&lang=js&
 /* harmony default export */ var Filter_FilterCallervue_type_script_lang_js_ = (FilterCallervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Filter/FilterCaller.vue
var FilterCaller_render, FilterCaller_staticRenderFns




/* normalize component */

var FilterCaller_component = normalizeComponent(
  Filter_FilterCallervue_type_script_lang_js_,
  FilterCaller_render,
  FilterCaller_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FilterCaller = (FilterCaller_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Youtube/YoutubeVolume.vue?vue&type=script&lang=js&
/* harmony default export */ var YoutubeVolumevue_type_script_lang_js_ = ({
  name: "RtYoutubeVolume",
  props: {
    defaultVolume: {
      type: Number,
      "default": 0
    },
    isMute: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      volume: 100,
      isMuteLocal: false
    };
  },
  watch: {
    defaultVolume: function defaultVolume(newV, old) {
      this.volume = newV;
      this.$refs.volumeLine.style.width = newV + '%';
      this.$refs.point.style.left = newV + '%';
    }
  },
  mounted: function mounted() {
    this.isMuteLocal = this.isMute;
    this.bindClick();
    this.drawVolumeFromParen(this.defaultVolume);
  },
  updated: function updated() {
    this.unbindClick();
    this.bindClick();
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindClick();
  },
  methods: {
    emitValue: function emitValue(nextLeft) {
      var lineWidth = this.$refs.line.offsetWidth;
      var responseValue = nextLeft / lineWidth;
      this.$emit("changevolume", responseValue);
    },
    setVolumeByClick: function setVolumeByClick(event) {
      var lineLeft = this.$refs.line.getBoundingClientRect().left;
      var nextLeft = event.clientX - lineLeft;
      this.$refs.point.style.left = nextLeft + 'px';
      this.$refs.volumeLine.style.width = nextLeft + 'px';
      this.emitValue(nextLeft);
    },
    drawVolumeFromParen: function drawVolumeFromParen(volume) {
      var volumeProcent = volume / 100;
      var lineLeft = this.$refs.line.clientWidth;
      var nextLeft = volumeProcent * lineLeft;
      this.$refs.point.style.left = nextLeft + 'px';
      this.$refs.volumeLine.style.width = nextLeft + 'px';
    },
    unbindClick: function unbindClick() {
      this.$refs.line.removeEventListener("click", this.setVolumeByClick);
    },
    bindClick: function bindClick() {
      this.$refs.line.addEventListener("click", this.setVolumeByClick);
    },
    mouseMoveHandler: function mouseMoveHandler(event) {
      var lineWidth = this.$refs.line.offsetWidth;
      var lineLeft = this.$refs.line.getBoundingClientRect().left;
      var lineTopPosition = this.$refs.line.getBoundingClientRect().top;
      var nextLeft = event.clientX - lineLeft;

      if (nextLeft <= lineWidth && nextLeft >= 0) {
        this.$refs.point.style.left = nextLeft + 'px';
        this.$refs.volumeLine.style.width = nextLeft + 'px';
        this.emitValue(nextLeft);
      }

      if (Math.abs(event.clientY - lineTopPosition) > 100 || lineWidth - event.clientX + lineLeft < -50 || lineLeft - event.clientX > 50) {
        this.unbindMousemove();
      }
    },
    unbindMousemove: function unbindMousemove(event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }

      document.removeEventListener("mousemove", this.mouseMoveHandler);
      document.removeEventListener("mouseup", this.unbindMousemove);
    },
    bindMousemove: function bindMousemove() {
      document.addEventListener("mousemove", this.mouseMoveHandler, false);
      document.addEventListener("mouseup", this.unbindMousemove, false);
    },
    mouseDown: function mouseDown() {
      this.bindMousemove();
    },
    muteToggle: function muteToggle() {
      this.isMuteLocal = !this.isMuteLocal;
      this.$emit("mutetoggle", this.isMuteLocal);
    }
  },
  render: function render(h) {
    var _this = this;

    var muteButton = function () {
      var buttonClass = 'rt-youtube__sound-control';

      if (_this.isMuteLocal) {
        buttonClass += ' rt-youtube__sound-control--mute';
      }

      return h("div", {
        "class": buttonClass,
        on: {
          "click": _this.muteToggle
        }
      }, [h("svg", {
        "class": "rt-youtube__sound-control__icon",
        attrs: {
          width: "18px",
          height: "13px",
          viewBox: "0 0 18 17",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        }
      }, [h("g", {
        attrs: {
          id: "Page-1",
          stroke: "none",
          "stroke-width": "1",
          fill: "none",
          "fill-rule": "evenodd"
        }
      }, [h("g", {
        attrs: {
          id: "smart-home-copy",
          transform: "translate(-908.000000, -2230.000000)",
          fill: "#FFFFFF",
          "fill-rule": "nonzero"
        }
      }, [h("g", {
        attrs: {
          id: "video-ui-simple-copy-3",
          transform: "translate(263.000000, 2218.000000)"
        }
      }, [h("path", {
        attrs: {
          d: "M645,17.5295833 L645,23.2795833 L648.833333,23.2795833 L653.625,28.07125 L653.625,12.7379167 L648.833333,17.5295833 L645,17.5295833 Z M657.9375,20.4045833 C657.9375,18.7083333 656.96,17.2516667 655.541667,16.5425 L655.541667,24.2570833 C656.96,23.5575 657.9375,22.1008333 657.9375,20.4045833 Z M655.541667,12 L655.541667,13.9741667 C658.31125,14.7983333 660.333333,17.3666667 660.333333,20.4045833 C660.333333,23.4425 658.31125,26.0108333 655.541667,26.835 L655.541667,28.8091667 C659.384583,27.9370833 662.25,24.50625 662.25,20.4045833 C662.25,16.3029167 659.384583,12.8720833 655.541667,12 L655.541667,12 Z",
          id: "ic-volume"
        }
      })])])])])]);
    }();

    return h("div", {
      "class": "rt-youtube__volume"
    }, [muteButton, h("div", {
      ref: "line",
      "class": "rt-youtube__volume__line"
    }, [h("div", {
      ref: "volumeLine",
      "class": "rt-youtube__volume__now-line"
    }), h("div", {
      attrs: {
        draggable: "false"
      },
      ref: "point",
      on: {
        "mousedown": this.mouseDown
      },
      "class": "rt-youtube__volume__point"
    })])]);
  }
});
// CONCATENATED MODULE: ./src/components/Youtube/YoutubeVolume.vue?vue&type=script&lang=js&
 /* harmony default export */ var Youtube_YoutubeVolumevue_type_script_lang_js_ = (YoutubeVolumevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Youtube/YoutubeVolume.vue
var YoutubeVolume_render, YoutubeVolume_staticRenderFns




/* normalize component */

var YoutubeVolume_component = normalizeComponent(
  Youtube_YoutubeVolumevue_type_script_lang_js_,
  YoutubeVolume_render,
  YoutubeVolume_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var YoutubeVolume = (YoutubeVolume_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Youtube/YoutubeFraction.vue?vue&type=script&lang=js&
/* harmony default export */ var YoutubeFractionvue_type_script_lang_js_ = ({
  name: "RtYoutubeFraction",
  props: {
    fraction: {
      type: Number,
      "default": 0
    },
    procentPlayed: {
      type: Number,
      "default": 0
    }
  },
  computed: {
    fractionLocal: function fractionLocal() {
      return this.fraction;
    },
    playedProcentLocal: function playedProcentLocal() {
      if (isNaN(this.procentPlayed)) {
        return 0;
      } else {
        return this.procentPlayed;
      }
    }
  },
  mounted: function mounted() {
    this.bindMouse();
  },
  updated: function updated() {
    this.unbindMouse();
    this.bindMouse();
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindMouse();
  },
  methods: {
    setWillBePlayedLineWidth: function setWillBePlayedLineWidth(event) {
      var lineLeft = this.$refs.fraction.getBoundingClientRect().left;
      var lineWidth = this.$refs.fraction.offsetWidth;
      var nextLeft = event.clientX - lineLeft;
      this.$refs.fraction.querySelector('.rt-youtube-fraction__will-be-played').style.width = parseInt(nextLeft / lineWidth * 100) + '%';
    },
    setNewTimePlay: function setNewTimePlay(event) {
      var lineLeft = this.$refs.fraction.getBoundingClientRect().left;
      var nextLeft = event.clientX - lineLeft;
      var lineWidth = this.$refs.fraction.offsetWidth;
      this.$emit('changetime', nextLeft / lineWidth);
    },
    removeWillBePlayedLineWidth: function removeWillBePlayedLineWidth() {
      this.$refs.fraction.querySelector('.rt-youtube-fraction__will-be-played').style.width = 0;
    },
    bindMouse: function bindMouse() {
      this.$refs.fraction.addEventListener('mousemove', this.setWillBePlayedLineWidth);
      this.$refs.fraction.addEventListener('mouseleave', this.removeWillBePlayedLineWidth);
      this.$refs.fraction.addEventListener('mousedown', this.setNewTimePlay);
    },
    unbindMouse: function unbindMouse() {
      this.$refs.fraction.removeEventListener('mousemove', this.setWillBePlayedLineWidth);
      this.$refs.fraction.removeEventListener('mouseleave', this.removeWillBePlayedLineWidth);
      this.$refs.fraction.removeEventListener('mousedown', this.setNewTimePlay);
    }
  },
  render: function render(h) {
    var readyLineWidth = "width:" + this.fractionLocal * 100 + '%';
    var playedLineStyle = "width:" + this.playedProcentLocal + '%';
    var playedPointStyle = "left:" + this.playedProcentLocal + '%'; // procentPlayed

    return h("div", {
      "class": "rt-youtube-fraction",
      ref: "fraction"
    }, [h("div", {
      style: playedPointStyle,
      "class": "rt-youtube-fraction__played-point"
    }), h("div", {
      style: playedLineStyle,
      "class": "rt-youtube-fraction__played-line"
    }), h("div", {
      style: readyLineWidth,
      "class": "rt-youtube-fraction__ready-line"
    }), h("div", {
      "class": "rt-youtube-fraction__will-be-played"
    })]);
  }
});
// CONCATENATED MODULE: ./src/components/Youtube/YoutubeFraction.vue?vue&type=script&lang=js&
 /* harmony default export */ var Youtube_YoutubeFractionvue_type_script_lang_js_ = (YoutubeFractionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Youtube/YoutubeFraction.vue
var YoutubeFraction_render, YoutubeFraction_staticRenderFns




/* normalize component */

var YoutubeFraction_component = normalizeComponent(
  Youtube_YoutubeFractionvue_type_script_lang_js_,
  YoutubeFraction_render,
  YoutubeFraction_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var YoutubeFraction = (YoutubeFraction_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Youtube/Youtube.vue?vue&type=script&lang=js&


var components = {};
components[YoutubeVolume.name] = YoutubeVolume;
components[YoutubeFraction.name] = YoutubeFraction;
/* harmony default export */ var Youtubevue_type_script_lang_js_ = ({
  name: "RtYoutube",
  components: components,
  props: {
    videoId: {
      type: Array,
      "default": null
    },
    startIndex: {
      type: Array,
      "default": function _default() {
        return [0];
      }
    },
    height: {
      type: String,
      "default": null
    },
    isFullscreen: {
      type: Boolean,
      "default": false
    },
    realTimePlay: {
      type: Boolean,
      "default": false
    },
    playlistId: {
      type: Array,
      "default": null
    },
    utmSources: {
      type: Array,
      "default": null
    },
    pauseImage: {
      type: String,
      "default": null
    },
    disableButtons: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      playTime: 0,
      videoIsReady: false,
      player: null,
      playerState: '-1',
      isPlaying: false,
      activeIndexVideo: 0,
      activePlaylistIndex: 0,
      loadedFraction: 0,
      volume: 0,
      videoIdsArray: [],
      videoSize: 0,
      touchCount: 0,
      isTouchDevice: false
    };
  },
  mounted: function mounted() {
    if (this.utmSources) {
      if (location.search) {
        var utm = location.search.split('utm-source=')[1];

        if (utm) {
          var utmPrefix = utm.split('_')[0];

          if (this.utmSources && this.utmSources.length > 0) {
            var activePlaylistIndex = this.utmSources.findIndex(function (utmSourcesItem) {
              if (utmSourcesItem === utmPrefix) {
                return true;
              } else {
                return false;
              }
            });

            if (activePlaylistIndex >= 0) {
              this.activePlaylistIndex = activePlaylistIndex;
            }
          }
        }
      }
    }

    if (!this.playlistId) {
      this.videoSize = this.videoId.length;
    }

    this.init();
    this.bindKeyboardEvents();
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindKeyboardEvents();
  },
  updated: function updated() {
    this.unbindKeyboardEvents();
    this.bindKeyboardEvents();
  },
  methods: {
    keyPressHolder: function keyPressHolder(event) {
      if (this.duration && !this.buttonControlDisabled()) {
        switch (event.keyCode) {
          case 32:
            if (this.isPlaying) {
              this.pauseVideo();
            } else {
              this.playVideo();
            }

            event.preventDefault();
            break;

          case 39:
            if (this.isPlaying) {
              this.playTime += 5;
              this.player.seekTo(this.playTime);
            }

            break;

          case 37:
            if (this.isPlaying) {
              this.playTime -= 5;

              if (this.playTime < 0) {
                this.playTime = 0;
              }

              this.player.seekTo(this.playTime);
            }

            break;
        }
      }
    },
    unbindKeyboardEvents: function unbindKeyboardEvents() {
      window.removeEventListener("keydown", this.keyPressHolder);
    },
    bindKeyboardEvents: function bindKeyboardEvents() {
      window.addEventListener("keydown", this.keyPressHolder, false);
    },
    init: function init() {
      var _this = this;

      var apiScript = document.querySelector('script[src$="https://www.youtube.com/iframe_api"]');

      if (typeof YT === 'undefined' && apiScript === null) {
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.onload = this.init;
        document.getElementsByTagName('body')[0].appendChild(tag);
      } else {
        if (typeof YT === 'undefined' || !YT.Player) {
          setTimeout(function () {
            _this.init();
          }, 100);
        } else {
          this.createPlayer();
        }
      }
    },
    onStateChange: function onStateChange(event) {
      this.playerState = event.data;

      if (this.playerState === YT.PlayerState.PLAYING || this.playerState === YT.PlayerState.CUED || this.playerState === YT.PlayerState.BUFFERING) {
        this.getCurrentTime();
        this.getDuration();
        this.volume = this.player.getVolume();
        if (this.player.getPlaylist()) this.videoSize = this.player.getPlaylist().length;
      }

      if (event.data == YT.PlayerState.PAUSED && this.isPlaying) {
        this.isPlaying = false;
      }

      if (event.data == YT.PlayerState.PLAYING && !this.isPlaying) {
        this.isPlaying = true;
      }

      if (this.playlistId) {
        this.activeIndexVideo = this.player.getPlaylistIndex();
      }

      if (event.data == YT.PlayerState.ENDED) {
        if (this.activeIndexVideo < this.videoSize - 1) {
          if (!this.playlistId) {
            this.nextVideo();
          }
        } else {
          this.stopVideo();
        }
      }
    },
    createPlayer: function createPlayer() {
      var loc = document.location.href.split('/');
      var settings = {
        height: '56.25%',
        width: '100%',
        playerVars: {
          "autoplay": "0",
          "loop": "0",
          "autohide": "1",
          "border": "0",
          "wmode": "opaque",
          "enablejsapi": "1",
          "modestbranding": "1",
          "playsinline": "1",
          "rel": "0",
          "showinfo": "0",
          "controls": "0",
          "disablekb": "1",
          "iv_load_policy": "3",
          "origin": loc[0] + '//' + loc[2]
        },
        events: {
          'onReady': this.setVideoReady,
          'onStateChange': this.onStateChange
        }
      };

      if (this.videoId) {
        settings.videoId = this.videoId[this.activeIndexVideo];
      } else {
        if (this.playlistId && this.startIndex) {
          settings.playerVars.list = this.playlistId[this.activePlaylistIndex];

          if (this.startIndex[this.activePlaylistIndex] !== undefined) {
            settings.playerVars.index = this.startIndex[this.activePlaylistIndex];
          }
        }
      }

      this.player = new YT.Player("player-" + this._uid, settings);
    },
    setVideoReady: function setVideoReady() {
      this.videoIsReady = true;
      this.getLoadedFraction();
      this.isMute = this.player.isMuted();
    },
    pauseVideo: function pauseVideo() {
      this.player.pauseVideo();
      this.isPlaying = false;
    },
    stopVideo: function stopVideo() {
      this.player.stopVideo();
      this.isPlaying = false;
      this.activeIndexVideo = 0;
      this.playerState = '-1';
    },
    previousVideo: function previousVideo() {
      if (this.activeIndexVideo - 1 < 0) {
        this.activeIndexVideo = this.videoSize - 1;
      } else {
        this.activeIndexVideo--;
      }

      if (this.playlistId) {
        this.player.previousVideo();
      } else {
        this.player.loadVideoById(this.videoId[this.activeIndexVideo]);
      }
    },
    nextVideo: function nextVideo() {
      if (this.activeIndexVideo + 1 === this.videoSize) {
        this.activeIndexVideo = 0;
      } else {
        this.activeIndexVideo++;
      }

      if (this.playlistId) {
        this.player.nextVideo();
      } else {
        this.player.loadVideoById(this.videoId[this.activeIndexVideo]);
      }
    },
    setMuteParams: function setMuteParams(isMute) {
      if (isMute) {
        this.player.mute();
      } else {
        this.player.unMute();
      }
    },
    getDuration: function getDuration() {
      this.duration = this.player.getDuration();
    },
    getCurrentTime: function getCurrentTime() {
      var _this2 = this;

      this.playTime = this.player.getCurrentTime();

      if (this.playerState === YT.PlayerState.PLAYING || this.playerState === YT.PlayerState.BUFFERING) {
        setTimeout(function () {
          var newTime = parseInt(_this2.player.getCurrentTime());

          if (_this2.playTime != newTime) {
            _this2.playTime = newTime;

            _this2.getCurrentTime();
          }
        }, 800);
      }
    },
    togglePause: function togglePause(event) {
      var _this3 = this;

      // const windowWidth = window.outerWidth
      setTimeout(function () {
        if (_this3.touchCount === 0 || _this3.touchCount === 2) {
          if (_this3.isPlaying) {
            _this3.pauseVideo();
          } else {
            _this3.playVideo();
          }
        }
      });
    },
    getLoadedFraction: function getLoadedFraction() {
      var _this4 = this;

      if (this.loadedFraction !== this.player.getVideoLoadedFraction()) {
        this.loadedFraction = this.player.getVideoLoadedFraction();
      }

      if (this.loadedFraction < 1) {
        setTimeout(function () {
          _this4.getLoadedFraction();
        }, 500);
      }
    },
    playVideo: function playVideo() {
      var _this5 = this;

      this.player.playVideo();
      setTimeout(function () {
        _this5.volume = _this5.player.getVolume();
        _this5.isPlaying = true;
      }, 10);
    },
    changeTime: function changeTime(procentOfDuration) {
      this.player.seekTo(this.duration * procentOfDuration);
    },
    changeVolume: function changeVolume(newVolume) {
      this.volume = newVolume * 100;
      this.player.setVolume(newVolume * 100);
    },
    touchTogglePause: function touchTogglePause() {
      var _this6 = this;

      this.touchCount++;
      this.isTouchDevice = true;

      if (this.touchCount > 2) {
        this.touchCount = 2;
      }

      if (this.timeout) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(function () {
        _this6.touchCount--;

        if (_this6.touchCount > 0) {
          _this6.timeout = setTimeout(function () {
            _this6.touchCount--;
          }, 2000);
        }
      }, 2000);
    },
    buttonControlDisabled: function buttonControlDisabled() {
      return this.disableButtons && (this.$el.getBoundingClientRect().bottom < 0 || this.$el.getBoundingClientRect().top > window.innerHeight);
    }
  },
  render: function render() {
    var _this7 = this;

    var h = arguments[0];

    var backgroundImage = function () {
      var style = {};

      if (_this7.pauseImage) {
        style.backgroundImage = 'url(' + _this7.pauseImage + ')';
      }

      if (_this7.height) {
        style.height = _this7.height;
      }

      return h("div", {
        "class": "rt-youtube___pause-image" + (!_this7.isPlaying ? ' rt-youtube___pause-image--is-active' : ''),
        style: style
      });
    }();

    var playButton = function () {
      if (!_this7.isPlaying) {
        return h("div", {
          "class": "rt-youtube__play",
          on: {
            "click": _this7.playVideo
          }
        }, [h("svg", {
          "class": "rt-youtube__play__icon",
          attrs: {
            width: "10px",
            height: "13px",
            viewBox: "0 0 10 13",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
          }
        }, [h("g", {
          attrs: {
            id: "Page-1",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
          }
        }, [h("g", {
          attrs: {
            id: "smart-home-copy",
            transform: "translate(-273.000000, -2232.000000)",
            fill: "#FFFFFF",
            "fill-rule": "nonzero"
          }
        }, [h("polygon", {
          attrs: {
            id: "ic-play",
            transform: "translate(278.000000, 2238.500000) rotate(-270.000000) translate(-278.000000, -2238.500000) ",
            points: "272 2243 278 2234 284 2243"
          }
        })])])])]);
      } else {
        return h("div", {
          "class": "rt-youtube__pause",
          on: {
            "click": _this7.pauseVideo
          }
        }, [h("svg", {
          "class": "rt-youtube__play__icon",
          attrs: {
            width: "9px",
            height: "13px",
            viewBox: "0 0 9 13",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
          }
        }, [h("g", {
          attrs: {
            id: "Page-1",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
          }
        }, [h("g", {
          attrs: {
            id: "smart-home-copy",
            transform: "translate(-273.000000, -1119.000000)",
            fill: "#FFFFFF",
            "fill-rule": "nonzero"
          }
        }, [h("g", {
          attrs: {
            id: "Group",
            transform: "translate(273.000000, 1119.000000)"
          }
        }, [h("rect", {
          attrs: {
            id: "Rectangle-5",
            x: "0",
            y: "0",
            width: "3",
            height: "13"
          }
        }), h("rect", {
          attrs: {
            id: "Rectangle-5-Copy",
            x: "6",
            y: "0",
            width: "3",
            height: "13"
          }
        })])])])])]);
      }
    }();

    var videoControls = function () {
      if (_this7.videoIsReady) {
        var min = parseInt(_this7.playTime / 60);
        var sec = parseInt(_this7.playTime % 60);

        if (min < 10) {
          min = '0' + min;
        }

        if (sec < 10) {
          sec = '0' + sec;
        }

        var minD = parseInt(_this7.duration / 60);
        var secD = parseInt(_this7.duration % 60);

        if (minD < 10) {
          minD = '0' + minD;
        }

        if (secD < 10) {
          secD = '0' + secD;
        }

        var procentPlayed = _this7.playTime / _this7.duration * 100;

        var time = function () {
          if (_this7.duration) {
            return h("div", {
              "class": "rt-youtube__time"
            }, [min, ":", sec, " / ", minD, ":", secD]);
          } else {
            return null;
          }
        }();

        var playControlClass = 'rt-youtube__play-control';
        return h("div", {
          "class": playControlClass,
          ref: "playControl"
        }, [h("div", {
          "class": "rt-youtube__pause-space",
          on: {
            "click": _this7.togglePause,
            "touchstart": _this7.touchTogglePause
          }
        }), _this7.duration || _this7.playerState !== '-1' ? h("div", {
          "class": "rt-youtube__menu"
        }, [h("rt-youtube-fraction", {
          on: {
            "changetime": _this7.changeTime
          },
          attrs: {
            "procent-played": procentPlayed,
            fraction: _this7.loadedFraction
          }
        }), playButton, time, _this7.duration ? h("rt-youtube-volume", {
          attrs: {
            "default-volume": _this7.volume,
            "is-mute": _this7.isMute
          },
          on: {
            "mutetoggle": _this7.setMuteParams,
            "changevolume": _this7.changeVolume
          }
        }) : null]) : null, h("div", {
          "class": "rt-youtube__start-video" + ((!_this7.isPlaying || _this7.playerState != '-1') && _this7.duration ? ' rt-youtube__start-video--not-active' : ''),
          on: {
            "click": _this7.playVideo
          }
        }, [h("svg", {
          attrs: {
            width: "34px",
            height: "47px",
            viewBox: "0 0 34 47",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
          }
        }, [h("g", {
          attrs: {
            id: "Page-1",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd"
          }
        }, [h("g", {
          attrs: {
            id: "smart-home-copy",
            transform: "translate(-631.000000, -329.000000)",
            fill: "#FFFFFF",
            "fill-rule": "nonzero"
          }
        }, [h("polygon", {
          attrs: {
            id: "ic-play",
            transform: "translate(648.000000, 352.500000) rotate(-270.000000) translate(-648.000000, -352.500000) ",
            points: "625 369 648 336 671 369"
          }
        })])])])])]);
      } else {
        return h("div", {
          "class": "rt-youtube___not-ready"
        }, [h("rt-spinner")]);
      }
    }();

    var nextVideoButton = function () {
      if (_this7.playerState !== '-1' && _this7.videoSize > 1 && _this7.activeIndexVideo + 1 < _this7.videoSize) {
        return h("div", {
          "class": "rt-youtube__next rt-youtube__change-video",
          on: {
            "click": _this7.nextVideo
          }
        }, [h("svg", {
          attrs: {
            width: "20px",
            height: "39px",
            viewBox: "0 0 20 39",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
          },
          "class": "rt-youtube__change-icon"
        }, [h("g", {
          attrs: {
            id: "Page-1",
            stroke: "none",
            "stroke-width": "1",
            "fill-rule": "evenodd"
          }
        }, [h("g", {
          attrs: {
            id: "smart-home-copy",
            transform: "translate(-1061.000000, -335.000000)",
            "fill-rule": "nonzero"
          }
        }, [h("polygon", {
          attrs: {
            id: "Path-2",
            points: "1061.48968 335.403436 1080.59192 354.506833 1061.48968 373.61023 1061.48968 370.765082 1077.75961 354.506833 1061.48968 338.229608"
          }
        })])])])]);
      } else {
        return null;
      }
    }();

    var previousVideoButton = function () {
      if (_this7.playerState !== '-1' && _this7.videoSize > 0 && _this7.activeIndexVideo > 0) {
        return h("div", {
          "class": "rt-youtube__previous rt-youtube__change-video",
          on: {
            "click": _this7.previousVideo
          }
        }, [h("svg", {
          attrs: {
            width: "20px",
            height: "39px",
            viewBox: "0 0 20 39",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg"
          },
          "class": "rt-youtube__change-icon"
        }, [h("g", {
          attrs: {
            id: "Page-1",
            stroke: "none",
            "stroke-width": "1",
            "fill-rule": "evenodd"
          }
        }, [h("g", {
          attrs: {
            id: "smart-home-copy",
            transform: "translate(-215.000000, -335.000000)",
            "fill-rule": "nonzero"
          }
        }, [h("polygon", {
          attrs: {
            id: "Path-2",
            transform: "translate(224.551120, 354.488486) scale(-1, 1) translate(-224.551120, -354.488486) ",
            points: "215 335.385089 234.102239 354.488486 215 373.591883 215 370.746735 231.269933 354.488486 215 338.21126"
          }
        })])])])]);
      } else {
        return null;
      }
    }();

    var youtubeClass = 'rt-youtube';

    if (this.isTouchDevice) {
      youtubeClass += ' rt-youtube--touch-detected';

      if (this.touchCount > 0) {
        youtubeClass += ' rt-youtube--is-hover';
      }

      if (this.isFullscreen) {
        youtubeClass += ' rt-youtube--is-fullscreen';
      }

      if (this.realTimePlay) {
        youtubeClass += ' rt-youtube--real-time-play';
      }
    }

    if (this.isPlaying) {
      youtubeClass += " rt-youtube--is-active";
    }

    return h("div", {
      "class": youtubeClass
    }, [h("div", {
      attrs: {
        id: "player-" + this._uid
      }
    }), h("div", {
      "class": "rt-youtube__controls"
    }, [backgroundImage, videoControls]), nextVideoButton, previousVideoButton]);
  }
});
// CONCATENATED MODULE: ./src/components/Youtube/Youtube.vue?vue&type=script&lang=js&
 /* harmony default export */ var Youtube_Youtubevue_type_script_lang_js_ = (Youtubevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Youtube/Youtube.vue
var Youtube_render, Youtube_staticRenderFns




/* normalize component */

var Youtube_component = normalizeComponent(
  Youtube_Youtubevue_type_script_lang_js_,
  Youtube_render,
  Youtube_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Youtube = (Youtube_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Sticky/Sticky.vue?vue&type=script&lang=js&
/* harmony default export */ var Stickyvue_type_script_lang_js_ = ({
  name: "RtSticky",
  render: function render(h) {
    return h("div", {
      "class": "rt-sticky"
    }, [this.$slots["default"]]);
  }
});
// CONCATENATED MODULE: ./src/components/Sticky/Sticky.vue?vue&type=script&lang=js&
 /* harmony default export */ var Sticky_Stickyvue_type_script_lang_js_ = (Stickyvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Sticky/Sticky.vue
var Sticky_render, Sticky_staticRenderFns




/* normalize component */

var Sticky_component = normalizeComponent(
  Sticky_Stickyvue_type_script_lang_js_,
  Sticky_render,
  Sticky_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Sticky = (Sticky_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ResizeContentHeight/ResizeContentHeight.vue?vue&type=script&lang=js&
function ResizeContentHeightvue_type_script_lang_js_toConsumableArray(arr) { return ResizeContentHeightvue_type_script_lang_js_arrayWithoutHoles(arr) || ResizeContentHeightvue_type_script_lang_js_iterableToArray(arr) || ResizeContentHeightvue_type_script_lang_js_nonIterableSpread(); }

function ResizeContentHeightvue_type_script_lang_js_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function ResizeContentHeightvue_type_script_lang_js_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function ResizeContentHeightvue_type_script_lang_js_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



/* harmony default export */ var ResizeContentHeightvue_type_script_lang_js_ = ({
  name: "RtResizeContentHeight",
  props: {
    querySelectorsNames: {
      type: Array,
      "default": []
    },
    groupSize: {
      type: Number,
      "default": null
    },
    tabletGroupSize: {
      type: Number,
      "default": null
    },
    mobileGroupSize: {
      type: Number,
      "default": null
    },
    desctopItem: {
      type: Number,
      "default": null
    },
    tabletItem: {
      type: Number,
      "default": null
    },
    mobileItem: {
      type: Number,
      "default": null
    },
    mobileNotResize: {
      type: Boolean,
      "default": false
    },
    reactive: {
      type: Boolean
    }
  },
  data: function data() {
    return {
      debounce: null,
      isMobile: false,
      isTablet: false
    };
  },
  updated: function updated() {
    if (this.querySelectorsNames.length > 0) {
      this.unbindResize();
      this.bindResize();
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.querySelectorsNames.length > 0) {
      this.unbindResize();
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.reactive) {
      this.initReactiveWaiter();
    } else {
      setTimeout(function () {
        if (_this.querySelectorsNames.length > 0) {
          _this.bindResize();

          _this.calculateMaxHeight();
        }
      }, 0);
      setTimeout(function () {
        _this.calculateMaxHeight();
      }, 500);
    }

    window.addEventListener('resizeTrigger', function () {
      _this.calculateMaxHeight();
    });
  },
  methods: {
    bindResize: function bindResize() {
      window.addEventListener("resize", debounce_default()(this.calculateMaxHeight, 1));
    },
    unbindResize: function unbindResize() {
      window.removeEventListener("resize", debounce_default()(this.calculateMaxHeight, 1));
    },
    calculateMaxHeight: function calculateMaxHeight() {
      var _this2 = this;

      var isMobile = window.innerWidth <= parseInt(variables["mobile-upper-limit"]);
      var isTablet = window.innerWidth <= parseInt(variables["tablet-upper-limit"]);
      this.isMobile = isMobile;
      this.isTablet = isTablet;

      if (isMobile && this.mobileNotResize) {
        this.querySelectorsNames.forEach(function (selectorName) {
          _this2.$el.querySelectorAll("".concat(selectorName)).forEach(function (node) {
            if (node.style.height) {
              node.style.height = null;
            }
          });
        });
      } else {
        if (this.groupSize && !isTablet && !isMobile || isTablet && this.tabletGroupSize || isMobile && this.mobileGroupSize) {
          var gropSize = this.groupSize;

          if (isTablet && this.tabletGroupSize) {
            gropSize = this.tabletGroupSize;
          }

          if (isMobile && this.mobileGroupSize) {
            gropSize = this.mobileGroupSize;
          }

          this.querySelectorsNames.forEach(function (selectorName) {
            var nodeList = ResizeContentHeightvue_type_script_lang_js_toConsumableArray(_this2.$el.querySelectorAll("".concat(selectorName)));

            if (nodeList.length === 1) {
              nodeList = [[nodeList]];
            }

            if (nodeList.length > 0) {
              nodeList.reduce(function (res, item) {
                if (!Array.isArray(res)) {
                  res = [[res]];
                }

                if (res[res.length - 1].length < gropSize) {
                  res[res.length - 1].push(item);
                } else {
                  res.push([item]);
                }

                return res;
              }).forEach(function (nodeGroup) {
                var maxHeight = 0;
                nodeGroup.forEach(function (node) {
                  if (node.style.height) {
                    node.style.height = null;
                  }

                  maxHeight = maxHeight > node.clientHeight ? maxHeight : node.clientHeight;
                });
                nodeGroup.forEach(function (node) {
                  node.style.height = "".concat(maxHeight, "px");
                });
              });
            }
          });
        } else {
          this.querySelectorsNames.forEach(function (selectorName) {
            var maxHeight = 0;

            _this2.$el.querySelectorAll("".concat(selectorName)).forEach(function (node) {
              if (node.style.height) {
                node.style.height = null;
              }

              maxHeight = maxHeight > node.clientHeight ? maxHeight : node.clientHeight;
            });

            _this2.$el.querySelectorAll("".concat(selectorName)).forEach(function (node) {
              node.style.height = "".concat(maxHeight, "px");
            });
          });
        }
      }
    },
    initReactiveWaiter: function initReactiveWaiter() {
      var _this3 = this;

      var count = 0;
      var maxCount = this.$children.length;
      var wait = setInterval(function () {
        _this3.$children.forEach(function (cmp) {
          if (cmp.loaded) count++;

          if (count === maxCount) {
            clearInterval(wait);

            _this3.calculateMaxHeight();
          }
        });
      }, 50);
    }
  },
  render: function render(h) {
    return h("div", [this.$slots["default"]]);
  }
});
// CONCATENATED MODULE: ./src/components/ResizeContentHeight/ResizeContentHeight.vue?vue&type=script&lang=js&
 /* harmony default export */ var ResizeContentHeight_ResizeContentHeightvue_type_script_lang_js_ = (ResizeContentHeightvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/ResizeContentHeight/ResizeContentHeight.vue
var ResizeContentHeight_render, ResizeContentHeight_staticRenderFns




/* normalize component */

var ResizeContentHeight_component = normalizeComponent(
  ResizeContentHeight_ResizeContentHeightvue_type_script_lang_js_,
  ResizeContentHeight_render,
  ResizeContentHeight_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ResizeContentHeight = (ResizeContentHeight_component.exports);
// CONCATENATED MODULE: ./src/components/SlideContent/SlideContent.tsx
function SlideContent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SlideContent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SlideContent_createClass(Constructor, protoProps, staticProps) { if (protoProps) SlideContent_defineProperties(Constructor.prototype, protoProps); if (staticProps) SlideContent_defineProperties(Constructor, staticProps); return Constructor; }

function SlideContent_possibleConstructorReturn(self, call) { if (call && (SlideContent_typeof(call) === "object" || typeof call === "function")) { return call; } return SlideContent_assertThisInitialized(self); }

function SlideContent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SlideContent_getPrototypeOf(o) { SlideContent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SlideContent_getPrototypeOf(o); }

function SlideContent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SlideContent_setPrototypeOf(subClass, superClass); }

function SlideContent_setPrototypeOf(o, p) { SlideContent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SlideContent_setPrototypeOf(o, p); }

function SlideContent_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SlideContent_typeof = function _typeof(obj) { return typeof obj; }; } else { SlideContent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SlideContent_typeof(obj); }

var SlideContent_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : SlideContent_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SlideContent_metadata = undefined && undefined.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : SlideContent_typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SlideContent =
/*#__PURE__*/
function (_Vue) {
  SlideContent_inherits(SlideContent, _Vue);

  function SlideContent() {
    var _this;

    SlideContent_classCallCheck(this, SlideContent);

    _this = SlideContent_possibleConstructorReturn(this, SlideContent_getPrototypeOf(SlideContent).apply(this, arguments));
    _this.isOpenLocal = false;
    return _this;
  }

  SlideContent_createClass(SlideContent, [{
    key: "toggleOpen",
    value: function toggleOpen() {
      this.isOpenLocal = !this.isOpenLocal;
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this2 = this;

      if (this.isOpen) {
        this.isOpenLocal = this.isOpen;
      }

      if (this.dottedView) {
        var header = this.$refs.header;
        header.$el.querySelectorAll('.rt-slide-content-trigger').forEach(function (el) {
          el.addEventListener('click', function () {
            _this2.isOpenLocal = !_this2.isOpenLocal;
            window.getSelection().removeAllRanges();
            setTimeout(function () {
              window.dispatchEvent(new Event("resize"));
              setTimeout(function () {
                window.dispatchEvent(new Event("resize"));
              }, 300);
            }, 50);
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render(h) {
      if (this.revertDottedView) {
        return h("div", {
          "class": 'slide-dotted'
        }, [h("rt-slide-content-dotted-content", {
          attrs: {
            "is-open": this.isOpenLocal
          }
        }, [this.$slots.content]), h("rt-slide-content-dotted-header", {
          ref: "header",
          attrs: {
            "is-open": this.isOpenLocal
          }
        }, [this.$slots.header])]);
      }

      if (this.dottedView) {
        return h("div", {
          "class": 'slide-dotted'
        }, [h("rt-slide-content-dotted-header", {
          ref: "header",
          attrs: {
            "is-open": this.isOpenLocal
          }
        }, [this.$slots.header]), h("rt-slide-content-dotted-content", {
          attrs: {
            "is-open": this.isOpenLocal
          }
        }, [this.$slots.content])]);
      }

      var slideArrowClass = "rt-slide__arrow rt-slide__arrow--".concat(this.arrowPosition);
      var slideClass = "rt-slide";

      if (!this.needBorder) {
        slideClass += ' rt-slide--without-border';
      }

      if (this.isOpenLocal) {
        slideClass += ' rt-slide--is-active';
      }

      var slideHeaderClass = "rt-slide__header rt-slide__header--".concat(this.arrowPosition.split('-')[0]);
      var slideContentClass = "rt-slide__content rt-slide__content--".concat(this.arrowPosition.split('-')[0]);
      return h("div", {
        "class": slideClass
      }, [h("div", {
        "class": slideHeaderClass,
        on: {
          "click": this.toggleOpen
        }
      }, [h("svg", {
        "class": slideArrowClass,
        attrs: {
          width: "8px",
          height: "13px",
          viewBox: "0 0 8 13",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        }
      }, [h("g", {
        attrs: {
          id: "Page-1",
          stroke: "none",
          "stroke-width": "1",
          fill: "none",
          "fill-rule": "evenodd"
        }
      }, [h("g", {
        attrs: {
          id: "new-abonent",
          transform: "translate(-202.000000, -2087.000000)",
          fill: "#101828"
        }
      }, [h("g", {
        attrs: {
          id: "primechania",
          transform: "translate(0.000000, 1885.000000)"
        }
      }, [h("g", {
        attrs: {
          id: "Group"
        }
      }, [h("g", {
        attrs: {
          id: "Group-3",
          transform: "translate(3.000000, 50.000000)"
        }
      }, [h("polygon", {
        attrs: {
          id: "Shape-Copy",
          transform: "translate(203.000000, 158.500000) rotate(-90.000000) translate(-203.000000, -158.500000) ",
          points: "207.6 155 203 159.351351 198.4 155 197 156.324324 203 162 209 156.324324"
        }
      })])])])])])]), h("div", {
        "class": "rt-slide__title"
      }, [this.$slots.label])]), h("div", {
        "class": slideContentClass
      }, [this.$slots.content])]);
    }
  }]);

  return SlideContent;
}(external_vue_default.a);

SlideContent_decorate([Prop({
  "default": false
}), SlideContent_metadata("design:type", Boolean)], SlideContent.prototype, "isOpen", void 0);

SlideContent_decorate([Prop({
  "default": 'left-right'
}), SlideContent_metadata("design:type", String)], SlideContent.prototype, "arrowPosition", void 0);

SlideContent_decorate([Prop({
  "default": true
}), SlideContent_metadata("design:type", Boolean)], SlideContent.prototype, "needBorder", void 0);

SlideContent_decorate([Prop({
  "default": false
}), SlideContent_metadata("design:type", Boolean)], SlideContent.prototype, "dottedView", void 0);

SlideContent_decorate([Prop({
  "default": false
}), SlideContent_metadata("design:type", Boolean)], SlideContent.prototype, "revertDottedView", void 0);

SlideContent = SlideContent_decorate([vue_class_component_esm], SlideContent);
/* harmony default export */ var SlideContent_SlideContent = ({
  component: SlideContent,
  name: "RtSlideContent"
});
// CONCATENATED MODULE: ./src/components/SlideContent/SlideContentDottedContent.tsx
function SlideContentDottedContent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SlideContentDottedContent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SlideContentDottedContent_createClass(Constructor, protoProps, staticProps) { if (protoProps) SlideContentDottedContent_defineProperties(Constructor.prototype, protoProps); if (staticProps) SlideContentDottedContent_defineProperties(Constructor, staticProps); return Constructor; }

function SlideContentDottedContent_possibleConstructorReturn(self, call) { if (call && (SlideContentDottedContent_typeof(call) === "object" || typeof call === "function")) { return call; } return SlideContentDottedContent_assertThisInitialized(self); }

function SlideContentDottedContent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SlideContentDottedContent_getPrototypeOf(o) { SlideContentDottedContent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SlideContentDottedContent_getPrototypeOf(o); }

function SlideContentDottedContent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SlideContentDottedContent_setPrototypeOf(subClass, superClass); }

function SlideContentDottedContent_setPrototypeOf(o, p) { SlideContentDottedContent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SlideContentDottedContent_setPrototypeOf(o, p); }

function SlideContentDottedContent_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SlideContentDottedContent_typeof = function _typeof(obj) { return typeof obj; }; } else { SlideContentDottedContent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SlideContentDottedContent_typeof(obj); }

var SlideContentDottedContent_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : SlideContentDottedContent_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SlideContentDottedContent_metadata = undefined && undefined.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : SlideContentDottedContent_typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SlideContentDottedContent =
/*#__PURE__*/
function (_Vue) {
  SlideContentDottedContent_inherits(SlideContentDottedContent, _Vue);

  function SlideContentDottedContent() {
    SlideContentDottedContent_classCallCheck(this, SlideContentDottedContent);

    return SlideContentDottedContent_possibleConstructorReturn(this, SlideContentDottedContent_getPrototypeOf(SlideContentDottedContent).apply(this, arguments));
  }

  SlideContentDottedContent_createClass(SlideContentDottedContent, [{
    key: "render",
    value: function render(h) {
      var slideContentClass = 'rt-slide-content-dotted-content';

      if (this.isOpen) {
        slideContentClass += ' rt-slide-content-dotted-content--is-active';
      }

      return h("div", {
        "class": slideContentClass,
        ref: "header"
      }, [this.$slots["default"]]);
    }
  }]);

  return SlideContentDottedContent;
}(external_vue_default.a);

SlideContentDottedContent_decorate([Prop({
  "default": false
}), SlideContentDottedContent_metadata("design:type", Boolean)], SlideContentDottedContent.prototype, "isOpen", void 0);

SlideContentDottedContent = SlideContentDottedContent_decorate([vue_class_component_esm], SlideContentDottedContent);
/* harmony default export */ var SlideContent_SlideContentDottedContent = ({
  component: SlideContentDottedContent,
  name: "RtSlideContentDottedContent"
});
// CONCATENATED MODULE: ./src/components/SlideContent/SlideContentDottedHeader.tsx
function SlideContentDottedHeader_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SlideContentDottedHeader_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SlideContentDottedHeader_createClass(Constructor, protoProps, staticProps) { if (protoProps) SlideContentDottedHeader_defineProperties(Constructor.prototype, protoProps); if (staticProps) SlideContentDottedHeader_defineProperties(Constructor, staticProps); return Constructor; }

function SlideContentDottedHeader_possibleConstructorReturn(self, call) { if (call && (SlideContentDottedHeader_typeof(call) === "object" || typeof call === "function")) { return call; } return SlideContentDottedHeader_assertThisInitialized(self); }

function SlideContentDottedHeader_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SlideContentDottedHeader_getPrototypeOf(o) { SlideContentDottedHeader_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SlideContentDottedHeader_getPrototypeOf(o); }

function SlideContentDottedHeader_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SlideContentDottedHeader_setPrototypeOf(subClass, superClass); }

function SlideContentDottedHeader_setPrototypeOf(o, p) { SlideContentDottedHeader_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SlideContentDottedHeader_setPrototypeOf(o, p); }

function SlideContentDottedHeader_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SlideContentDottedHeader_typeof = function _typeof(obj) { return typeof obj; }; } else { SlideContentDottedHeader_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SlideContentDottedHeader_typeof(obj); }

var SlideContentDottedHeader_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : SlideContentDottedHeader_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SlideContentDottedHeader_metadata = undefined && undefined.__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : SlideContentDottedHeader_typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SlideContentDottedHeader =
/*#__PURE__*/
function (_Vue) {
  SlideContentDottedHeader_inherits(SlideContentDottedHeader, _Vue);

  function SlideContentDottedHeader() {
    SlideContentDottedHeader_classCallCheck(this, SlideContentDottedHeader);

    return SlideContentDottedHeader_possibleConstructorReturn(this, SlideContentDottedHeader_getPrototypeOf(SlideContentDottedHeader).apply(this, arguments));
  }

  SlideContentDottedHeader_createClass(SlideContentDottedHeader, [{
    key: "render",
    value: function render(h) {
      var headerClass = 'rt-slide-content-dotted-header';

      if (this.isOpen) {
        headerClass += ' rt-slide-content-dotted-header--is-active';
      }

      return h("div", {
        "class": headerClass,
        ref: "header"
      }, [this.$slots["default"]]);
    }
  }]);

  return SlideContentDottedHeader;
}(external_vue_default.a);

SlideContentDottedHeader_decorate([Prop({
  "default": false
}), SlideContentDottedHeader_metadata("design:type", Boolean)], SlideContentDottedHeader.prototype, "isOpen", void 0);

SlideContentDottedHeader = SlideContentDottedHeader_decorate([vue_class_component_esm], SlideContentDottedHeader);
/* harmony default export */ var SlideContent_SlideContentDottedHeader = ({
  component: SlideContentDottedHeader,
  name: "RtSlideContentDottedHeader"
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Popup/Popup.vue?vue&type=script&lang=js&
/* harmony default export */ var Popupvue_type_script_lang_js_ = ({
  name: "RtPopup",
  props: {
    name: {
      type: String,
      "default": null,
      required: true
    },
    popupWrapperClasses: {
      type: String,
      "default": ""
    },
    popupClasses: {
      type: String,
      "default": ""
    },
    preventDefaultScrollOnActive: {
      type: Boolean,
      "default": false
    },
    showOnDesktop: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      isActive: false
    };
  },
  mounted: function mounted() {
    this.addEventListener();
    this.bindCloseButton();
  },
  updated: function updated() {
    this.removeEventListener();
    this.addEventListener();
    this.unbindCloseButton();
    this.bindCloseButton();
  },
  beforeDestroy: function beforeDestroy() {
    this.removeEventListener();
  },
  methods: {
    setActive: function setActive() {
      this.isActive = true;
      this.addKeyBindind();
      this.bindPageScroll();
    },
    removeActive: function removeActive() {
      var _this = this;

      this.$el.classList.add('rt-popup-wrapper-td--is-closing');
      setTimeout(function () {
        _this.$el.classList.remove('rt-popup-wrapper-td--is-active');

        setTimeout(function () {
          _this.isActive = false;

          _this.$el.classList.remove('rt-popup-wrapper-td--is-closing');

          _this.removeKeyBindind();

          _this.unbindPageScroll();
        }, 50);
      }, 300);
    },
    keyPress: function keyPress(e) {
      if (e.keyCode === 27) {
        this.removeActive();
      }
    },
    clickOutside: function clickOutside() {
      if (!this.$options.isHover) {
        this.removeActive();
      }
    },
    stopScroll: function stopScroll(e) {
      e.preventDefault();
      return false;
    },
    bindPageScroll: function bindPageScroll() {
      document.body.style.overflow = 'hidden';
    },
    unbindPageScroll: function unbindPageScroll() {
      document.body.style.overflow = null;
    },
    addKeyBindind: function addKeyBindind() {
      window.addEventListener('keydown', this.keyPress, {
        passive: false
      });
    },
    removeKeyBindind: function removeKeyBindind() {
      window.removeEventListener('keydown', this.keyPress);
    },
    bindCloseButton: function bindCloseButton() {
      var close = this.$el.querySelector('.rt-close');

      if (close) {
        close.addEventListener('click', this.removeActive, {
          passive: true
        });
      }
    },
    unbindCloseButton: function unbindCloseButton() {
      var close = this.$el.querySelector('.rt-close');

      if (close) {
        close.addEventListener('click', this.removeActive, {
          passive: true
        });
      }
    },
    addEventListener: function addEventListener() {
      window.addEventListener('open-popup-' + this.name, this.setActive, {
        passive: false
      });
      window.addEventListener('close-popup-' + this.name, this.removeActive, {
        passive: false
      });
    },
    removeEventListener: function removeEventListener() {
      window.removeEventListener('open-popup-' + this.name, this.setActive);
      window.removeEventListener('close-popup-' + this.name, this.removeActive);
    },
    setHover: function setHover() {
      if (!this.$options.isHover) {
        this.$options.isHover = true;
      }
    },
    removeHover: function removeHover() {
      this.$options.isHover = false;
    }
  },
  render: function render(h) {
    var wrapperClasses;
    var popupClasses;

    if (this.showOnDesktop) {
      wrapperClasses = "rt-popup-wrapper";
      popupClasses = "rt-popup";
    } else {
      wrapperClasses = "rt-popup-wrapper-td";
      popupClasses = "rt-popup-td";
    }

    if (this.popupWrapperClasses) {
      wrapperClasses += " " + this.popupWrapperClasses.trim();
      popupClasses += " " + this.popupClasses.trim();
    }

    if (this.isActive) {
      wrapperClasses += " rt-popup-wrapper-td--is-active";
    }

    return h("div", {
      "class": wrapperClasses,
      on: {
        "click": this.clickOutside
      }
    }, [h("div", {
      "class": popupClasses,
      on: {
        "mouseenter": this.setHover,
        "mouseleave": this.removeHover,
        "mousemove": this.setHover
      }
    }, [this.$slots["default"]])]);
  }
});
// CONCATENATED MODULE: ./src/components/Popup/Popup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Popup_Popupvue_type_script_lang_js_ = (Popupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Popup/Popup.vue
var Popup_render, Popup_staticRenderFns




/* normalize component */

var Popup_component = normalizeComponent(
  Popup_Popupvue_type_script_lang_js_,
  Popup_render,
  Popup_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Popup = (Popup_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Card/LinksBlock.vue?vue&type=script&lang=js&

/* harmony default export */ var LinksBlockvue_type_script_lang_js_ = ({
  name: "LinksBlock",
  props: {
    iconArray: {
      type: Array,
      "default": null
    },
    sourceDirectory: {
      type: String,
      "default": '/sites/default/files/b2b/'
    }
  },
  data: function data() {
    return {
      isOpen: false,
      totalQuantity: this.iconArray.length,
      quantityHidden: this.totalQuantity - 6,
      iconsList: [],
      outerWidth: null,
      innerWidth: null,
      visibleIcons: null
    };
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {
    var _this = this;

    //      window.addEventListener('load', ()=>{
    this.quantityHidden = this.totalQuantity - 6;
    setTimeout(function () {
      _this.outerWidth = +getComputedStyle(_this.$el).width.slice(0, -2);
      _this.innerWidth = +getComputedStyle(_this.$refs.inner).width.slice(0, -2);
      _this.visibleIcons = Math.floor(_this.innerWidth / 32) > 6 ? 6 : Math.floor(_this.innerWidth / 32);
      _this.iconsList = _this.$refs.inner.children;
      setTimeout(function () {
        //          this.hideIcons();
        _this.countHiddenIconsQuantity();

        console.log('stqh', _this.quantityHidden);
      }, 1);
    }, 1); //      });

    window.addEventListener('load', function () {
      console.log(_this.$el);
      console.log('sqh', _this.quantityHidden);
    });
    window.addEventListener('resize', function () {
      setTimeout(function () {
        _this.countHiddenIconsQuantity();
      }, 1);
    });
  },
  methods: {
    unwrap: function unwrap() {
      this.isOpen = !this.isOpen;
      this.$el.querySelector('.rtb-card__links-block').classList.add('rtb-card__links-block--expanded');

      for (var i = 0; i < this.totalQuantity; i++) {
        this.iconsList[i].classList.remove('rtb-card__social-link--hidden');
      }

      setTimeout(function () {
        window.dispatchEvent(new Event("resizeTrigger"));
      }, 1);
    },
    countHiddenIconsQuantity: function countHiddenIconsQuantity() {
      var _this2 = this;

      // 32 - icon.width + icon.margin
      this.$el.querySelectorAll('.rtb-card__social-link').forEach(function (item) {
        item.classList.remove('rtb-card__social-link--hidden');
      });
      this.outerWidth = +getComputedStyle(this.$el).width.slice(0, -2);
      this.innerWidth = this.$refs.inner.scrollWidth;
      this.visibleIcons = Math.floor(this.innerWidth / 32) > 6 ? 6 : Math.floor(this.innerWidth / 32);
      this.quantityHidden = this.totalQuantity - this.visibleIcons;

      if (this.quantityHidden === 1 || this.quantityHidden === 0) {
        this.$refs.inner.style.maxWidth = '100%';
        this.visibleIcons = 7;
        this.quantityHidden = this.totalQuantity - this.visibleIcons;

        if (this.outerWidth < this.totalQuantity * 32) {
          this.quantityHidden = this.totalQuantity - (this.visibleIcons - 1);
          this.$refs.inner.removeAttribute('style');
        }
      } else {
        this.$refs.inner.removeAttribute('style');
      }

      setTimeout(function () {
        _this2.hideIcons();
      }, 1);
    },
    hideIcons: function hideIcons() {
      console.log(this.visibleIcons);

      for (var i = this.visibleIcons; i < this.totalQuantity; i++) {
        this.iconsList[i].classList.add('rtb-card__social-link--hidden');
      }
    }
  },
  render: function render(h) {
    var _this3 = this;

    var content = function () {
      if (_this3.$el) {
        var linksLayout = '';

        _this3.iconArray.forEach(function (el) {
          var link = "".concat(_this3.sourceDirectory).concat(el.path, ".svg");
          var title = el.tooltip;
          linksLayout += "<div class=\"rtb-card__social-link\"><img src=".concat(link, " title=").concat(title, " /></div>");
        });

        _this3.$el.children[0].innerHTML = linksLayout;
      }
    }();

    var button = function () {
      if (_this3.quantityHidden && _this3.totalQuantity > 6 && _this3.quantityHidden !== 1) {
        return h("button", {
          "class": "rtb-card__expand-button",
          on: {
            "click": _this3.unwrap
          }
        }, ["\u0435\u0449\u0451 ", _this3.quantityHidden]);
      } else {
        return null;
      }
    }();

    return h("div", {
      "class": "links-block"
    }, [h("div", {
      "class": "rtb-card__links-block",
      ref: "inner"
    }, [content]), button]);
  }
});
// CONCATENATED MODULE: ./src/components/Card/LinksBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_LinksBlockvue_type_script_lang_js_ = (LinksBlockvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Card/LinksBlock.vue
var LinksBlock_render, LinksBlock_staticRenderFns




/* normalize component */

var LinksBlock_component = normalizeComponent(
  Card_LinksBlockvue_type_script_lang_js_,
  LinksBlock_render,
  LinksBlock_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LinksBlock = (LinksBlock_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Card/Hint.vue?vue&type=script&lang=js&
/* harmony default export */ var Hintvue_type_script_lang_js_ = ({
  name: "RtHint",
  props: {
    simpleToolTip: {
      type: Boolean,
      "default": false
    },
    confirmation: {
      type: Boolean,
      "default": false
    },
    confirmationPassed: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  computed: {
    hintClass: function hintClass() {
      var className = 'rtb-hint';

      if (this.simpleToolTip) {
        className += ' rtb-hint--tooltip';
      }

      if (this.confirmation) {
        if (this.confirmationPassed) {
          className += ' rtb-hint--confirmed';
        } else {
          className += ' rtb-hint--denied';
        }
      }

      return className;
    }
  },
  mounted: function mounted() {},
  created: function created() {},
  methods: {
    showHint: function showHint() {
      var hint = this.$el;
      if (hint.closest(".higher-z")) hint.closest(".higher-z").style.zIndex = 999;
      this.active = true;
    },
    hideHint: function hideHint() {
      var hint = this.$el;
      if (hint.closest(".higher-z")) hint.closest(".higher-z").style.zIndex = null;
      this.active = false;
    }
  },
  render: function render(h) {
    var _this = this;

    var toolTipType = function toolTipType() {
      if (_this.simpleToolTip) {
        return h("span", ["?"]);
      }

      if (_this.confirmation) {
        if (_this.confirmationPassed) {
          return h("svg", {
            attrs: {
              width: "20",
              height: "20",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [h("g", {
            attrs: {
              fill: "none",
              "fill-rule": "evenodd"
            }
          }, [h("circle", {
            attrs: {
              fill: "#57D9B7",
              cx: "10",
              cy: "10",
              r: "10"
            }
          }), h("path", {
            attrs: {
              stroke: "#FFF",
              "stroke-width": "2",
              d: "M5 10l3.793 3L16 7"
            }
          })])]);
        } else {
          return h("svg", {
            attrs: {
              width: "20",
              height: "20",
              xmlns: "http://www.w3.org/2000/svg"
            }
          }, [h("g", {
            attrs: {
              fill: "none",
              "fill-rule": "evenodd"
            }
          }, [h("circle", {
            attrs: {
              fill: "#FF0C0C",
              cx: "10",
              cy: "10",
              r: "10"
            }
          }), h("path", {
            attrs: {
              d: "M10 10.207l-4.51 4.51 4.51-4.51 4.51 4.51-4.51-4.51zm0 0L14.207 6 10 10.207 5.793 6 10 10.207z",
              stroke: "#FFF",
              "stroke-width": "2"
            }
          })])]);
        }
      }
    };

    var hintText = function hintText() {
      if (_this.active) {
        return h("div", {
          "class": "rtb-hint__text"
        }, [_this.$slots["default"]]);
      } else {
        return null;
      }
    };

    return h("div", {
      "class": this.hintClass
    }, [h("div", {
      "class": "rtb-hint__icon",
      on: {
        "mouseover": this.showHint,
        "mouseleave": this.hideHint
      }
    }, [toolTipType()]), hintText()]);
  }
});
// CONCATENATED MODULE: ./src/components/Card/Hint.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_Hintvue_type_script_lang_js_ = (Hintvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Card/Hint.vue
var Hint_render, Hint_staticRenderFns




/* normalize component */

var Hint_component = normalizeComponent(
  Card_Hintvue_type_script_lang_js_,
  Hint_render,
  Hint_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Hint = (Hint_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Pattern/Pattern.vue?vue&type=script&lang=js&

/* harmony default export */ var Patternvue_type_script_lang_js_ = ({
  name: "RtPattern",
  props: {
    topColor: {
      type: String,
      "default": null,
      required: true
    },
    leftColor: {
      type: String,
      "default": null,
      required: true
    },
    rightColor: {
      type: String,
      "default": null,
      required: true
    },
    patternType: {
      type: Number,
      "default": '1'
    },
    patternForTextBlock: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      mainColor: '',
      svgOffset: null,
      activeViewBox: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.mainColor = this.topColor;

    if (this.$parent.$el.classList.contains('rt-banner')) {
      if (this.$parent.$children[1]) {
        var sibling = this.$parent.$children[1];

        if (sibling._props.backgroundColor != null) {
          this.mainColor = sibling._props.backgroundColor;

          if (sibling._props.patternTopColor != "") {
            this.mainColor = sibling._props.patternTopColor;
          }
        }
      }
    }

    var patternPositioning = function patternPositioning() {
      if (_this.patternForTextBlock) {
        var parentBlock = _this.$el.parentNode;
        var height = parentBlock.offsetHeight;
        var width = parentBlock.offsetWidth;
        var windowWidth = window.innerWidth;
        var minX = 0;

        if (window.innerWidth <= 500) {
          minX = windowWidth / 2 - 80;
        } else if (windowWidth <= parseInt(variables["tablet-upper-limit"])) {
          minX = (1460 - windowWidth) / 4;
        }

        _this.activeViewBox = "".concat(minX, " 0 ").concat(width, " ").concat(height);

        _this.$el.getElementsByTagName('svg')[0].setAttribute('viewBox', _this.activeViewBox);
      } //      if(this.patternType === 3) {
      //        let parentBlock = this.$el.parentNode;
      //        let height = parentBlock.offsetHeight;
      //        let width = parentBlock.offsetWidth;
      //        let windowWidth = window.innerWidth;
      //        let minX = windowWidth > parseInt(variables["tablet-upper-limit"]) ? (1920 - windowWidth) / 2 : (1920 - windowWidth) / 1.5;
      //        let minY = height <= 600 ? 600 - height : 0;
      //        this.activeViewBox = `${minX} ${minY} ${width} ${height}`;
      //        this.$el.getElementsByTagName('svg')[0].setAttribute('viewBox', this.activeViewBox);
      //      }

    };

    var countOffset = function countOffset() {
      if (_this.$el.parentNode) {
        setTimeout(function () {
          if (window.innerWidth <= parseInt(variables["mobile-upper-limit"]) && !_this.$el.parentNode.classList.contains('rt-banner-image')) {
            _this.svgOffset = parseInt(variables["mobile-upper-limit"]) - window.innerWidth;
            return _this.svgOffset;
          }
        }, 0);
      }
    };

    window.addEventListener('resize', function () {
      countOffset();
      patternPositioning();
    });
    countOffset();
    patternPositioning();
  },
  render: function render(h) {
    var _this2 = this;

    var patternItem = function () {
      if (_this2.patternType === 1) {
        return h("svg", {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 768 400",
            height: "100%"
          }
        }, [h("path", {
          "class": "rt-pattern--" + _this2.mainColor.replace(/^(b2b\-)|(b2c\-)/i, ''),
          attrs: {
            d: "M0 0h768v400H0z"
          }
        }), h("path", {
          "class": "rt-pattern--" + _this2.rightColor.replace(/^(b2b\-)|(b2c\-)/i, ''),
          attrs: {
            d: "M768 279.7c-15.8-8.5-34.7-16.4-56.4-26.7-66.3-31.6-452.4-215.7-452.5-215.8-17-8.1-35.6-9-51.9-3.5-5.3 1.8-11.4 3.8-11.4 3.8 22.1-7.4 46.5 4.2 54.4 25.9.1.4.2.8.4 1.2.1.3.3.6.4.9v.1c0 .1 4.8 13 11.9 32.5L373.5 400H768V279.7z"
          }
        }), h("path", {
          "class": "rt-pattern--" + _this2.leftColor.replace(/^(b2b\-)|(b2c\-)/i, ''),
          attrs: {
            d: "M267.5 96.7L255.7 64h-.1c-.2-.7-.4-1.5-.7-2.2-7.9-21.7-32.3-33.4-54.4-26 0 0-84.6 28.3-199.9 66.8V400h377.6L267.5 96.7z"
          }
        })]);
      }

      if (_this2.patternType === 2) {
        return h("svg", {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 804 500",
            height: "500"
          }
        }, [h("path", {
          "class": "rt-pattern--" + _this2.mainColor.replace(/^(b2b\-)|(b2c\-)/i, ''),
          attrs: {
            d: "M0 0h804v500H0z"
          }
        }), h("path", {
          "class": "rt-pattern--" + _this2.rightColor.replace(/^(b2b\-)|(b2c\-)/i, ''),
          attrs: {
            d: "M460.8 150.7c31.1 40.3 24.4 98.8-14.9 130.6-.7.6-27.6 22.2-63 50.7L174.3 500l307.2-.1c14.8-128.7 25.1-218.7 25.1-218.8 4.7-40.8-6.8-79.8-29.7-109.6-7.4-9.5-16.1-20.8-16.1-20.8z",
            transform: "translate(-1.5,-1)"
          }
        }), h("path", {
          "class": "rt-pattern--" + _this2.leftColor.replace(/^(b2b\-)|(b2c\-)/i, ''),
          attrs: {
            d: "M0 500h174.3l208.2-167.8s61.9-49.8 63.2-50.9c39.4-31.8 46.1-90.2 15.1-130.6 0 0-23.4-30.3-63.5-82.4-15.3-19.7-33-42.7-52.7-68.3H0v500z"
          }
        })]);
      }

      if (_this2.patternType === 3) {
        return null; //empty digit - can be fullfilled later
      }

      if (_this2.patternType === 4) {
        return h("svg", {
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%"
          }
        }, [h("g", {
          attrs: {
            fill: "none",
            "fill-rule": "evenodd"
          }
        }, [h("g", {
          attrs: {
            mask: "url(#b)"
          }
        }, [h("g", {
          attrs: {
            transform: "rotate(71 1330.093 458.357)"
          }
        }, [h("path", {
          "class": "rt-pattern--" + _this2.mainColor.replace(/^(b2b\-)|(b2c\-)/i, ''),
          attrs: {
            d: "M0 0h1595v1781H0z"
          }
        }), "/>", h("g", {
          attrs: {
            mask: "url(#d)"
          }
        }, [h("g", {
          attrs: {
            transform: "scale(-1 1) rotate(83 -69.592 7.323)"
          }
        }, [h("g", {
          attrs: {
            mask: "url(#f)"
          }
        }, [h("path", {
          "class": "rt-pattern--" + _this2.rightColor.replace(/^(b2b\-)|(b2c\-)/i, ''),
          attrs: {
            d: "M935.18 796.972l76.12 1.677-.007-.288c1.67.124 3.323.322 5.022.353 50.615 1 93.349-39.471 95.45-90.402l4.287-103.92c16.51-400.12 75.067-1818.837 75.067-1818.837L172.908-249.778l-42.55 1030.872 804.822 15.878z"
          }
        }), h("path", {
          "class": "rt-pattern--" + _this2.leftColor.replace(/^(b2b\-)|(b2c\-)/i, ''),
          attrs: {
            "fill-rule": "nonzero",
            d: "M-57.81 1761.074c165.565 3.086 211.332-61.943 327.276-171.834l793.288-751.88c29.783-28.227 46.083-65.424 47.657-103.018.508-12.082 1.121-26.315 1.121-26.315-2.153 50.853-44.843 91.315-95.35 90.374-.95-.016-1.87-.145-2.811-.192-.685.022-1.384.12-2.068.125l-.01.009h-.12c-.132 0-30.379-.54-75.767-1.446l-1077.623-20.08-1394.71-25.985-41.915 982.238 1521.032 28.004z"
          }
        })])])])])])])]);
      }
    }();

    return h("div", {
      "class": "rt-pattern"
    }, [patternItem]);
  }
});
// CONCATENATED MODULE: ./src/components/Pattern/Pattern.vue?vue&type=script&lang=js&
 /* harmony default export */ var Pattern_Patternvue_type_script_lang_js_ = (Patternvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Pattern/Pattern.vue
var Pattern_render, Pattern_staticRenderFns




/* normalize component */

var Pattern_component = normalizeComponent(
  Pattern_Patternvue_type_script_lang_js_,
  Pattern_render,
  Pattern_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Pattern = (Pattern_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Swiper/Swiper.vue?vue&type=template&id=23367810&
var Swipervue_type_template_id_23367810_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
    _vm.cmpName,
    {
      'is-touch-device': _vm.isTouch,
      'is-animating': _vm.isAnimating,
      'is-disabled-scrolling': _vm.disabledScrolling,
      'is-scrolling': !_vm.scrollingAutoEnd,
      'show-no-move-prev': !_vm.disabledScrolling && _vm.noMovesShown === 'prev',
      'show-no-move-next': !_vm.disabledScrolling && _vm.noMovesShown === 'next',
      'hide-navigation': _vm.hideNavigation
    },
    _vm.styleIfCarouselOverride
  ]},[(!_vm.isTouch && !_vm.hideNavigation)?_c('rt-navigation',{class:(_vm.cmpName + "__navs"),attrs:{"navigation-container":_vm.navigationContainer}}):_vm._e(),_vm._v(" "),_c('div',{ref:"overlay",class:(_vm.cmpName + "__overlay"),on:{"&scroll":function($event){return _vm.scrollNative($event)}}},[_c('div',{ref:"slidedBlock",class:_vm.styleInnerCarousel,attrs:{"draggable":_vm.isTouch}},[_vm._t("default"),_vm._v(" "),_c('div',{ref:"spacer",class:(_vm.cmpName + "__spacer"),style:({
          flex: ("0 0 " + _vm.hSpace + "px")
        })})],2)])],1)}
var Swipervue_type_template_id_23367810_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Swiper/Swiper.vue?vue&type=template&id=23367810&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Swiper/Navigation.vue?vue&type=template&id=1a7555a3&
var Navigationvue_type_template_id_1a7555a3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pc-navs"},[(_vm.canAdvanceBackward)?_c('div',{staticClass:"pc-navs__side pc-navs__side-left",style:({
      width: ((_vm.$parent.hSpace) + "px")
    }),on:{"click":function($event){$event.preventDefault();return _vm.triggerPageAdvance('prev')}}}):_vm._e(),_vm._v(" "),(_vm.$parent.navsArrows)?_c('div',{staticClass:"pc-navs__arrows",class:[
      _vm.$parent.containerName,
      {
        'is-scrolled': _vm.isScrolled,
        'is-overlay': _vm.isOverlay
      }
    ],style:(_vm.navStyles)},[_c('a',{staticClass:"pc-navs__button",class:_vm.linkClasses('prev'),style:({
        width: (_vm.buttonsSize + "px"),
        height: (_vm.buttonsSize + "px")
      }),on:{"click":function($event){$event.preventDefault();return _vm.triggerPageAdvance('prev')}}},[_c('i',{staticClass:"pc-navs__circle-nav"})]),_vm._v(" "),_c('a',{staticClass:"pc-navs__button",class:_vm.linkClasses('next'),style:({
        width: (_vm.buttonsSize + "px"),
        height: (_vm.buttonsSize + "px")
      }),on:{"click":function($event){$event.preventDefault();return _vm.triggerPageAdvance('next')}}},[_c('i',{staticClass:"pc-navs__circle-nav"}),_vm._v(" "),(_vm.showTipsNext)?_c('div',{staticClass:"pc-navs-more",domProps:{"innerHTML":_vm._s(_vm.moreText)}}):_vm._e()])]):_vm._e(),_vm._v(" "),(_vm.canAdvanceForward)?_c('div',{staticClass:"pc-navs__side pc-navs__side-right",style:({
      width: ((_vm.$parent.hSpace) + "px")
    }),on:{"click":function($event){$event.preventDefault();return _vm.triggerPageAdvance('next')}}}):_vm._e()])}
var Navigationvue_type_template_id_1a7555a3_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Swiper/Navigation.vue?vue&type=template&id=1a7555a3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Swiper/Navigation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Navigationvue_type_script_lang_js_ = ({
  name: "RtNavigation",
  props: {
    navigationContainer: {
      // Контейнер, в который будет помещена навигация карусели. Если пусто, навигация перемещена не будет.
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      isScrolled: false,
      isOverlay: false,
      topPos: null,
      bottomPos: null,
      buttonsSize: 53,
      nextCountTip: null,
      // Количество слайдов доступных к прокрутке
      position: 'absolute',
      showTipsNext: false,
      navContainerChanged: false
    };
  },
  mounted: function mounted() {//    if (
    //      this.$parent.navsArrows &&
    //      this.$el.scrollHeight >
    //        this.$parent.navsPosStart + this.$parent.navsPosEnd
    //    ) {
    //      this.$nextTick(() => {
    //        window.addEventListener("scroll", this.stickNavs, { passive: true });
    //        window.addEventListener("resize", this.stickNavs, { passive: true });
    //      });
    //      this.stickNavs();
    //    } else if (this.$parent.navsArrows) {
    //      // Если заданная высота отступа выше зоны просмотра, то центрируем стрелочки
    //      this.topPos = "0px";
    //      this.bottomPos = "0px";
    //    }
  },
  updated: function updated() {
    if (!this.navContainerChanged && this.navigationContainer !== "") {
      var els = document.querySelectorAll(this.navigationContainer);

      if (els.length) {
        els[0].insertBefore(this.$el, els[0].firstChild);
      }

      this.navContainerChanged = true;
    }
  },
  computed: {
    cmpName: function cmpName() {
      return this.$parent.cmpName || "RtNavigation";
    },
    isPending: function isPending() {
      return this.$parent.isPending;
    },
    canAdvanceForward: function canAdvanceForward() {
      return this.$parent.canAdvanceForward;
    },
    canAdvanceBackward: function canAdvanceBackward() {
      return this.$parent.canAdvanceBackward;
    },
    moreText: function moreText() {
      return "\u0415\u0449\u0451&nbsp;".concat(this.nextCountTip);
    },
    navStyles: function navStyles() {
      return {
        height: "".concat(this.buttonsSize, "px"),
        position: this.position,
        top: this.topPos,
        bottom: this.bottomPos
      };
    }
  },
  destroyed: function destroyed() {
    if (this.$parent.navsArrows) {
      window.removeEventListener("scroll", this.stickNavs);
      window.removeEventListener("resize", this.stickNavs);
    }
  },
  methods: {
    triggerPageAdvance: function triggerPageAdvance(direction) {
      if (direction) {
        this.$parent.advancePage(direction);
      } else {
        this.$parent.advancePage();
      }
    },
    stickNavs: function stickNavs() {
      if (this.$parent.$refs.overlay) {
        var posY = window.pageYOffset + window.innerHeight / 2;
        var posStart = this.getTop(this.$parent.$refs.overlay) + this.$parent.navsPosStart;
        var posEnd = this.getTop(this.$parent.$refs.overlay) + this.$parent.$refs.overlay.clientHeight - this.$parent.navsPosEnd - this.buttonsSize;

        if (posY >= posStart && posY < posEnd) {
          // Scrolled
          this.position = "fixed";
          this.topPos = null;
          this.bottomPos = "auto";
        } else if (posY >= posEnd) {
          // After scrolling zone
          this.position = "absolute";
          this.topPos = "auto";
          this.bottomPos = "".concat(this.$parent.navsPosEnd, "px");
        } else {
          // Before scrolling zone
          this.position = "absolute";
          this.topPos = "".concat(this.$parent.navsPosStart, "px");
          this.bottomPos = "auto";
        }
      }
    },
    linkClasses: function linkClasses(pos) {
      return ["pc-navs-".concat(pos), {
        "pc-navs--disabled": pos === "next" ? !this.canAdvanceForward : !this.canAdvanceBackward,
        "pc-navs--pending": this.isPending
      }];
    },
    getTop: function getTop(el) {
      return el.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop;
    }
  }
});
// CONCATENATED MODULE: ./src/components/Swiper/Navigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var Swiper_Navigationvue_type_script_lang_js_ = (Navigationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Swiper/Navigation.vue





/* normalize component */

var Navigation_component = normalizeComponent(
  Swiper_Navigationvue_type_script_lang_js_,
  Navigationvue_type_template_id_1a7555a3_render,
  Navigationvue_type_template_id_1a7555a3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Navigation = (Navigation_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Swiper/Swiper.vue?vue&type=script&lang=js&
function Swipervue_type_script_lang_js_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Swipervue_type_script_lang_js_typeof = function _typeof(obj) { return typeof obj; }; } else { Swipervue_type_script_lang_js_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Swipervue_type_script_lang_js_typeof(obj); }

function Swipervue_type_script_lang_js_toConsumableArray(arr) { return Swipervue_type_script_lang_js_arrayWithoutHoles(arr) || Swipervue_type_script_lang_js_iterableToArray(arr) || Swipervue_type_script_lang_js_nonIterableSpread(); }

function Swipervue_type_script_lang_js_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function Swipervue_type_script_lang_js_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function Swipervue_type_script_lang_js_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function Swipervue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var Swipervue_type_script_lang_js_autoScrollingTimeout = 100; // Длительность задержки автоскроллинга
// const swipeFriction = 0.95

var defaultTouch = {
  fingerCount: 0,
  time: null,
  direction: null,
  curX: null,
  curY: null,
  startX: null,
  startY: null,
  swipeLength: 0
};
var Swipervue_type_script_lang_js_fps = 60;
var Swipervue_type_script_lang_js_slideSwipingMinDistance = 40; // Минимальное значение сдвига для автоскроллинга

var Swipervue_type_script_lang_js_EaseIn = function EaseIn(power) {
  return function (t) {
    return Math.pow(t, power);
  };
};

var Swipervue_type_script_lang_js_EaseOut = function EaseOut(power) {
  return function (t) {
    return 1 - Math.abs(Math.pow(t - 1, power));
  };
};

var Swipervue_type_script_lang_js_EaseInOut = function EaseInOut(power) {
  return function (t) {
    return t < 0.5 ? Swipervue_type_script_lang_js_EaseIn(power)(t * 2) / 2 : Swipervue_type_script_lang_js_EaseOut(power)(t * 2 - 1) / 2 + 0.5;
  };
};

var timingFunctions = {
  linear: Swipervue_type_script_lang_js_EaseInOut(1),
  easeInQuad: Swipervue_type_script_lang_js_EaseIn(2),
  easeOutQuad: Swipervue_type_script_lang_js_EaseOut(2),
  easeInOutQuad: Swipervue_type_script_lang_js_EaseInOut(2),
  easeInCubic: Swipervue_type_script_lang_js_EaseIn(3),
  easeOutCubic: Swipervue_type_script_lang_js_EaseOut(3),
  easeInOutCubic: Swipervue_type_script_lang_js_EaseInOut(3),
  easeInQuart: Swipervue_type_script_lang_js_EaseIn(4),
  easeOutQuart: Swipervue_type_script_lang_js_EaseOut(4),
  easeInOutQuart: Swipervue_type_script_lang_js_EaseInOut(4),
  easeInQuint: Swipervue_type_script_lang_js_EaseIn(5),
  easeOutQuint: Swipervue_type_script_lang_js_EaseOut(5),
  easeInOutQuint: Swipervue_type_script_lang_js_EaseInOut(5)
};
/* harmony default export */ var Swipervue_type_script_lang_js_ = ({
  name: "RtSwiper",
  components: Swipervue_type_script_lang_js_defineProperty({}, Navigation.name, Navigation),
  props: {
    disableCarousel: {
      type: Boolean,
      "default": false
    },
    minScreenWidthDisable: {
      type: Number,
      "default": 0
    },
    autoScrolling: {
      type: Boolean,
      "default": true
    },
    disabledScrolling: {
      type: Boolean,
      "default": false
    },
    duration: {
      type: Number,
      "default": 500
    },
    navsArrows: {
      type: Boolean,
      "default": true
    },
    navsPosStart: {
      type: Number,
      "default": 113
    },
    navsPosEnd: {
      type: Number,
      "default": 200
    },
    //    offsetTop: {
    //      type: Number,
    //      default: 20
    //    },
    offsetBottom: {
      type: Number,
      "default": 20
    },
    offsetHorizontal: {
      type: Number,
      "default": 20
    },
    //    offsetSlide: {
    //      type: Number
    //    },
    padding: {
      type: String,
      "default": "0"
    },
    slidesClasses: {
      type: String,
      "default": "rt-col-3 rt-col-md-3 rt-col-td-3"
    },
    transitionFunction: {
      type: String,
      "default": "easeInOutCubic"
    },
    navsOnlyLackOfWidth: {
      type: Boolean,
      "default": false
    },
    navigationContainer: {
      type: String,
      "default": ""
    },
    hideNavigation: {
      type: Boolean,
      "default": false
    },
    scrollOnClick: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      canAdvanceForward: false,
      canAdvanceBackward: false,
      cmpName: "rtk-carousel",
      containerName: "rt-container",
      currentWindowWidth: null,
      isAnimating: false,
      isFinalSlide: false,
      isLongTouch: false,
      // Позволяет на мобиле удерживать слайд на полпути
      isPending: null,
      isTouch: false,
      // typeof window !== "undefined" && "ontouchstart" in window,
      hSpace: 0,
      // Горизонтальный отступ для центрирования зоны просмотра, складывается из отступов
      longTouchTimer: null,
      movesArr: [],
      // Для ускорения работы используется массив с широтами слайдов, а не vue-инстансы
      noMovesShown: null,
      // Отображает на мобиле что свайпить не куда
      requestId: null,
      scrollingAutoEnd: true,
      // Триггер для доводчика скроллинга
      scrollingTimer: null,
      swipingInProcess: false,
      swipingY: false,
      swipingPrevYPoint: null,
      swipingStartPoint: null,
      // Детектор направления свайпинга
      toggleSlidesTimer: null,
      touchObject: defaultTouch,
      verticalScrolling: true,
      isDisableCarousel: this.disableCarousel,
      styleIfCarouselOverride: '' //стили, если карусель на некоторых разрешениях должна быть выключена

    };
  },
  computed: {
    slides: function slides() {
      return this.$children && this.$children.filter(function (slide) {
        return slide.$vnode && slide.$vnode.tag && slide.$vnode.tag.indexOf("RtSlide") > -1;
      });
    },
    styleInnerCarousel: function styleInnerCarousel() {
      var result = "".concat(this.cmpName, "__inner ").concat(this.containerName);
      var styleDisableCarousel = " ".concat(this.cmpName, "__inner-default");

      if (this.isDisableCarousel) {
        result += styleDisableCarousel;
      } else {
        result = result.replace(new RegExp(styleDisableCarousel, 'g'), '');
      }

      return result;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.isPending = false;
    this.createMoves();
    window.addEventListener("resize", this.createMoves, {
      passive: true
    }); // if (this.isTouch && this.autoScrolling) {
    //   this.$refs.slidedBlock.addEventListener('touchstart', this.swipeHandler, false)
    //   this.$refs.slidedBlock.addEventListener('touchmove', this.swipeHandler, false)
    //   this.$refs.slidedBlock.addEventListener('touchend', this.swipeHandler, false)
    // }

    if (window.innerWidth <= parseInt(variables["tablet-upper-limit"])) {
      this.isTouch = true;
    }

    window.addEventListener('resize', function () {
      _this.isTouch = window.innerWidth <= parseInt(variables["tablet-upper-limit"]) ? true : false;
    }); // для включения стилей, если карусель на некоторых разрешениях должна быть выключена

    this.overideCarouselStyles();
  },
  destroyed: function destroyed() {
    this.isAnimating = false;
    this.isPending = true;
    window.removeEventListener("resize", this.createMoves);
    clearTimeout(this.scrollingTimer);
    clearTimeout(this.toggleSlidesTimer);
  },
  methods: {
    /**
     * Простая навигация зоны просмотра по слайдам
     */
    advancePage: function advancePage(direction) {
      if (!this.isPending && !this.isAnimating) {
        var now = this.$refs.overlay.scrollLeft;
        var distance = 0;
        var wrapStyles = getComputedStyle(this.$refs.slidedBlock);
        var wrapperWidth = parseFloat(wrapStyles.width) - parseFloat(wrapStyles.paddingLeft) * 2;

        if (direction === "next") {
          this.movesArr.some(function (w) {
            distance += w.width;

            if (Math.round(parseFloat(distance * 100) / 100) >= wrapperWidth) {
              distance = now + distance;
              return true;
            }
          });
        } else if (direction === "prev") {
          void Swipervue_type_script_lang_js_toConsumableArray(this.movesArr).reverse().some(function (w) {
            distance += w.width;

            if (Math.round(parseFloat(distance * 100) / 100) >= wrapperWidth) {
              distance = now - distance;
              return true;
            }
          });
        }

        if (distance > this.$refs.overlay.scrollWidth) {
          distance = this.$refs.overlay.scrollWidth;
        }

        if (distance < 0) {
          distance = 0;
        }

        if (!this.swipingStartPoint) {
          this.swipingStartPoint = now;
        }

        this.move(distance);
      }
    },

    /**
     * Доводчик позиции скролла до ближайшего слайда
     */
    autoScroller: function autoScroller() {
      var _this2 = this;

      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Swipervue_type_script_lang_js_autoScrollingTimeout;
      var to = arguments.length > 1 ? arguments[1] : undefined;
      var mark = arguments.length > 2 ? arguments[2] : undefined;

      if (this.autoScrolling && !this.isPending && !this.isAnimating) {
        var now = this.$refs.overlay.scrollLeft;
        this.scrollingTimer = setTimeout(function () {
          if (now === _this2.$refs.overlay.scrollLeft && now !== _this2.swipingStartPoint && !_this2.isAnimating && !_this2.isPending) {
            _this2.scrollingAutoEnd = false; // Определив что скроллинг окончен получаем ближайшую позицию для доводки скролла

            var distance = _this2.getNearbySlide();

            if (distance !== null && _this2.$refs.overlay.scrollLeft !== parseInt(distance)) {
              _this2.move(distance).then(function () {
                _this2.autoScrollerRemove();
              });
            } else {
              _this2.autoScrollerRemove();
            }
          }
        }, delay);
      }
    },
    autoScrollerRemove: function autoScrollerRemove() {
      clearTimeout(this.scrollingTimer);
      this.scrollingTimer = null;
      this.scrollingAutoEnd = true;
    },

    /**
     * Оптимизирует навигацию по слайдам, собирая диапозоны широт в виде массива
     */
    createMoves: function createMoves() {
      var _this3 = this;

      this.controlDisableCarousel();

      if (this.$refs.overlay && this.currentWindowWidth !== window.innerWidth) {
        this.currentWindowWidth = window.innerWidth;
        var leftPadding = parseFloat(getComputedStyle(this.$refs.slidedBlock).paddingLeft);
        var leftOffset = this.$refs.slidedBlock.getBoundingClientRect().left;
        this.hSpace = //          (leftPadding > 0 ? leftPadding : 0) +
        leftOffset > 0 ? leftOffset : 0;
        this.movesArr = [];
        this.slides.forEach(function (slide, i) {
          _this3.movesArr.push({
            width: slide.width(),
            key: i
          });
        });
        setTimeout(function () {
          _this3.move();

          _this3.toggleSlides();
        }, 50);
      }
    },
    controlDisableCarousel: function controlDisableCarousel() {
      if (this.disableCarousel) {
        if (window.innerWidth < this.minScreenWidthDisable) {
          this.isDisableCarousel = false;
        } else {
          this.isDisableCarousel = true;
        }
      }
    },

    /**
     * Анимировние перехода зоны просмотра от точки к точке
     */
    startAnimating: function startAnimating(opt) {
      var _this4 = this;

      var fpsInterval = 1000 / Swipervue_type_script_lang_js_fps;
      var lastDrawTime = performance.now();
      var startTime;

      var animate = function animate(timestamp) {
        _this4.requestId = window.requestAnimationFrame(animate);
        var timeElapsed = timestamp - lastDrawTime;

        if (timeElapsed > fpsInterval) {
          lastDrawTime = timestamp - timeElapsed % fpsInterval;
          startTime = startTime || timestamp;
          var timeElapsedSinceStart = timestamp - startTime;
          var progress = timeElapsedSinceStart / _this4.duration;
          var safeProgress = Math.min(progress.toFixed(2), 1);

          if (safeProgress >= 1) {
            opt.draw(opt.timing(1));
            window.cancelAnimationFrame(_this4.requestId);
            _this4.requestId = null;
            opt.onLeave();
          } else {
            opt.draw(opt.timing(safeProgress));
          }
        }
      };

      animate();
    },
    getNearbySlide: function getNearbySlide() {
      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.$refs.overlay.scrollLeft;

      if (this.swipingStartPoint !== to) {
        var nextNav = this.swipingStartPoint <= to;
        var distance = nextNav ? 0 : this.$refs.overlay.scrollWidth - this.hSpace * 2;

        if (nextNav) {
          this.movesArr.some(function (w) {
            if (distance + Swipervue_type_script_lang_js_slideSwipingMinDistance >= to) {
              return true;
            } else {
              distance += w.width;
            }
          });
        } else {
          void Swipervue_type_script_lang_js_toConsumableArray(this.movesArr).reverse().some(function (w) {
            if (distance - Swipervue_type_script_lang_js_slideSwipingMinDistance <= to) {
              return true;
            } else {
              distance -= w.width;
            }

            if (distance < 0) {
              distance = 0;
            }
          });
        } // console.log(distance, nextNav, this.swipingStartPoint, to, this.isLongTouch)


        return distance;
      } else {
        return null;
      }
    },
    slidesWidth: function slidesWidth() {
      if (this.movesArr.length) {
        return this.movesArr.reduce(function (accum, curVal) {
          return (Swipervue_type_script_lang_js_typeof(accum) === "object" && accum.constructor === Object ? accum.width : accum) + curVal.width;
        });
      }

      return 0;
    },
    overlayContainerWidth: function overlayContainerWidth() {
      return parseFloat(getComputedStyle(this.$refs.overlay).width);
    },
    move: function move() {
      var _this5 = this;

      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return new Promise(function (resolve) {
        if (!_this5.$refs.overlay) {
          resolve();
        }

        to = parseInt(to);
        var from = parseInt(_this5.$refs.overlay.scrollLeft);

        var updateNavs = function updateNavs() {
          if (!_this5.isTouch) {
            var navsOnlyLackOfWidth = !_this5.navsOnlyLackOfWidth || _this5.navsOnlyLackOfWidth && _this5.overlayContainerWidth() < _this5.slidesWidth();

            _this5.canAdvanceBackward = to > 1;
            _this5.isFinalSlide = _this5.$refs.overlay.scrollLeft + _this5.overlayContainerWidth() + 2 >= _this5.$refs.overlay.scrollWidth;
            _this5.canAdvanceForward = !_this5.isFinalSlide && navsOnlyLackOfWidth;
          }
        };

        if (from !== to && from !== to + 1) {
          // console.log('mc:start', from, to, this.isLongTouch)
          _this5.isAnimating = true;

          _this5.$emit("onAnimatingStart", function (callback) {
            callback();
          });

          _this5.startAnimating({
            duration: _this5.duration,
            timing: timingFunctions[_this5.transitionFunction],
            draw: function draw(progress) {
              if (_this5.$refs.overlay) {
                _this5.$refs.overlay.scrollLeft = parseInt(from + (to - from) * progress);
              }
            },
            onLeave: function onLeave() {
              updateNavs();

              _this5.$emit("onAnimatingEnd", function (callback) {
                callback();
              });

              setTimeout(function () {
                _this5.isAnimating = false; // console.log('mc:end', from, to)

                resolve();
              }, 1); // В FF скроллинг быстрее отрабатывает, чем триггер isAnimating
            }
          });
        } else {
          updateNavs();
          resolve();
        }
      });
    },

    /**
     * Переносит зону просмотра к определенному слайду
     */
    moveToSlide: function moveToSlide(pos) {
      var distance = 0;
      this.movesArr.some(function (w) {
        if (w.key === pos) {
          return true;
        } else {
          distance += w.width;
        }
      });
      this.move(distance);
    },
    scrollNative: function scrollNative(e) {
      if (!this.disabledScrolling && !this.isTouch) {
        this.canAdvanceBackward = e.target.scrollLeft > 0;
        this.isFinalSlide = e.target.scrollLeft + e.target.offsetWidth + 1 >= e.target.scrollWidth;
        this.canAdvanceForward = !this.isFinalSlide;
        this.autoScroller();
      }

      this.toggleSlides();
    },
    swipeHandler: function swipeHandler(e) {
      this.touchObject.fingerCount = e.changedTouches !== undefined ? e.changedTouches.length : 1;

      switch (e.type) {
        case "touchstart":
          this.swipeStart(e);
          break;

        case "touchmove":
          this.swipeMove(e);
          break;

        case "touchend":
          this.swipeEnd(e);
          break;
      }
    },
    swipeStart: function swipeStart(e) {
      if (this.touchObject.fingerCount === 1 && this.scrollingAutoEnd) {
        var touches = e.changedTouches[0];
        this.touchObject.startX = this.touchObject.curX = touches.clientX;
        this.touchObject.startY = this.touchObject.curY = touches.clientY;
      }
    },
    swipeMove: function swipeMove(e) {
      var _this6 = this;

      if (!this.scrollingAutoEnd) {
        return false;
      }

      var touches = e.changedTouches[0];
      var minScrollToActivate = 4;

      if (this.swipingY || e.changedTouches.length !== 1) {
        return false;
      }

      this.touchObject.curX = touches.clientX;
      this.touchObject.curY = touches.clientY;
      this.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(this.touchObject.curX - this.touchObject.startX, 2)));
      var verticalLength = Math.round(Math.sqrt(Math.pow(this.touchObject.curY - this.touchObject.startY, 2))); // Запрещаем свайпинг по оси X при достижении минимальной дистанции Н

      if (!this.swipingInProcess && verticalLength > minScrollToActivate) {
        this.swipingY = true;
        return false;
      }

      if (e.cancelable) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (!this.swipingInProcess) {
        this.swipingInProcess = true;
      }

      if (!this.swipingStartPoint) {
        this.swipingStartPoint = this.$refs.overlay.scrollLeft;
      }

      this.touchObject.direction = this.touchObject.startX !== this.touchObject.curX ? this.touchObject.startX < this.touchObject.curX ? "prev" : "next" : null;

      if (!this.disabledScrolling && this.touchObject.direction !== null) {
        this.$refs.overlay.scrollLeft = this.swipingStartPoint + this.touchObject.swipeLength * (this.touchObject.direction === "next" ? 1 : -1);
        this.longTouchTimer = setTimeout(function () {
          _this6.isLongTouch = true;
        }, Swipervue_type_script_lang_js_autoScrollingTimeout);
        this.touchObject.time = Date.now();
      }
    },
    swipeEnd: function swipeEnd(e) {
      var _this7 = this;

      clearTimeout(this.longTouchTimer);

      if (!this.swipingInProcess || this.swipingY || !this.scrollingAutoEnd) {
        this.swipingY = false;
        return false;
      }

      var swipingEndFunc = function swipingEndFunc(notEnoughMoves) {
        if (notEnoughMoves && !_this7.noMovesShown) {
          _this7.noMovesShown = _this7.touchObject.direction;
          setTimeout(function () {
            _this7.noMovesShown = null;
          }, 1000);
        }

        _this7.isLongTouch = false;
        _this7.swipingStartPoint = null;
        _this7.swipingInProcess = false;
        _this7.touchObject = defaultTouch;
        _this7.scrollingAutoEnd = true;
      };

      var nearby = this.getNearbySlide();

      if (nearby !== null) {
        this.scrollingAutoEnd = false;
        this.move(nearby).then(function () {
          swipingEndFunc();
        });
      } else {
        swipingEndFunc(true);
      }
    },
    toggleSlides: function toggleSlides() {
      var _this8 = this;

      if (!this.isTouch) {
        clearTimeout(this.toggleSlidesTimer);
        this.toggleSlidesTimer = setTimeout(function () {
          if (!_this8.$refs.overlay) {
            return;
          }

          var startScrolling = _this8.$refs.overlay.scrollLeft;
          var distance = 0;
          var distanceLeft = 0;
          var distanceRight = startScrolling + _this8.$refs.slidedBlock.clientWidth;
          var hiddenSlides = [];

          if (!_this8.isDisableCarousel) {
            _this8.movesArr.forEach(function (w) {
              distance += w.width;

              if (startScrolling - Swipervue_type_script_lang_js_slideSwipingMinDistance > distanceLeft) {
                if (_this8.canAdvanceBackward) {
                  hiddenSlides.push(w.key);
                }

                distanceLeft += w.width;
              }

              if (distance - Swipervue_type_script_lang_js_slideSwipingMinDistance > distanceRight) {
                hiddenSlides.push(w.key);
                distanceRight += w.width;
              }
            });
          }

          _this8.slides.forEach(function (s, k) {
            s.toggle(hiddenSlides.indexOf(k) === -1);
          });
        }, 15);
      }
    },
    overideCarouselStyles: function overideCarouselStyles() {
      if (this.isDisableCarousel) {
        this.styleIfCarouselOverride = "".concat(this.cmpName, "-override");
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Swiper/Swiper.vue?vue&type=script&lang=js&
 /* harmony default export */ var Swiper_Swipervue_type_script_lang_js_ = (Swipervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Swiper/Swiper.vue





/* normalize component */

var Swiper_component = normalizeComponent(
  Swiper_Swipervue_type_script_lang_js_,
  Swipervue_type_template_id_23367810_render,
  Swipervue_type_template_id_23367810_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Swiper = (Swiper_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Swiper/Slide.vue?vue&type=script&lang=js&
/* harmony default export */ var Slidevue_type_script_lang_js_ = ({
  name: "RtSlide",
  props: {
    slideClasses: {
      type: String,
      "default": ''
    },
    loaded: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      shown: true
    };
  },
  computed: {
    cmpName: function cmpName() {
      return this.$parent.cmpName || "RtSlide";
    },
    left: function left() {
      return this.$el.getBoundingClientRect().left;
    },
    right: function right() {
      return this.left + this.width;
    },
    offsetSlide: function offsetSlide() {
      return this.$parent.offsetSlide;
    },
    getCustomClass: function getCustomClass() {
      return this.slideClasses || this.$parent.slidesClasses;
    }
  },
  methods: {
    /**
     * Делает видимым слайд или скрывает его
     * @param flag - Принудительно назначить статус видимости
     */
    toggle: function toggle(flag) {
      this.shown = flag !== undefined ? flag : !this.shown;
    },
    width: function width() {
      return this.$el.clientWidth;
    },
    scrollIntoView: function scrollIntoView() {
      if (this.$parent.scrollOnClick) {
        this.$el.parentNode.scrollTo({
          left: this.$el.offsetLeft,
          behavior: "smooth"
        });
      }
    }
  },
  render: function render(h) {
    return h("div", {
      "class": this.cmpName + "-slide " + (this.shown ? '' : ' not-shown ') + this.getCustomClass,
      style: "padding-right:" + this.offsetSlide + "px;",
      on: {
        "click": this.scrollIntoView
      }
    }, [this.$slots["default"]]);
  }
});
// CONCATENATED MODULE: ./src/components/Swiper/Slide.vue?vue&type=script&lang=js&
 /* harmony default export */ var Swiper_Slidevue_type_script_lang_js_ = (Slidevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Swiper/Slide.vue
var Slide_render, Slide_staticRenderFns




/* normalize component */

var Slide_component = normalizeComponent(
  Swiper_Slidevue_type_script_lang_js_,
  Slide_render,
  Slide_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Slide = (Slide_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Opportunity/Opportunity.vue?vue&type=script&lang=js&

/* harmony default export */ var Opportunityvue_type_script_lang_js_ = ({
  name: "RtOpportunity",
  props: {},
  data: function data() {
    return {
      childrenQuantity: null,
      mobileLayout: false
    };
  },
  mounted: function mounted() {
    this.childrenQuantity = this.$children.length;
    this.reRenderOnResize();
  },
  methods: {
    reRenderOnResize: function reRenderOnResize() {
      var _this = this;

      window.addEventListener('resize', function () {
        if (window.innerWidth <= parseInt(variables["tablet-upper-limit"])) {
          _this.mobileLayout = true;
        } else {
          _this.mobileLayout = false;
        }
      });
    }
  },
  render: function render(h) {
    var _this2 = this;

    var navigation = this.$children.map(function (item) {
      return h("rt-tabs-nav-item", {
        attrs: {
          anchor: item._props.anchor,
          "remove-base-tag": true,
          name: Array.from(item.$parent.$children).indexOf(item).toString()
        }
      }, [item._props.title]);
    });
    var content = this.$children.map(function (item, i) {
      return h("rt-tabs-content-item", {
        attrs: {
          name: Array.from(item.$parent.$children).indexOf(item).toString()
        }
      }, [h("rt-opportunity-item", {
        attrs: {
          image: item._props.image,
          title: item._props.title
        }
      }, [h("template", {
        slot: "description"
      }, [item.$slots.description])])]);
    });

    var blockType = function () {
      if (!_this2.mobileLayout) {
        if (_this2.childrenQuantity >= 4) {
          return h("rt-tabs", [h("template", {
            slot: "navigation"
          }, [navigation]), h("template", {
            slot: "content"
          }, [content])]);
        } else {
          return _this2.$slots["default"];
        }
      } else {
        if (_this2.childrenQuantity >= 4) {
          return h("div", {
            "class": "opportunity--mobile-dropdown"
          }, [_this2.$slots["default"]]);
        } else {
          return _this2.$slots["default"];
        }
      }
    }();

    return h("div", {
      "class": "rtb-opportunity-block"
    }, [blockType]);
  }
});
// CONCATENATED MODULE: ./src/components/Opportunity/Opportunity.vue?vue&type=script&lang=js&
 /* harmony default export */ var Opportunity_Opportunityvue_type_script_lang_js_ = (Opportunityvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Opportunity/Opportunity.vue
var Opportunity_render, Opportunity_staticRenderFns




/* normalize component */

var Opportunity_component = normalizeComponent(
  Opportunity_Opportunityvue_type_script_lang_js_,
  Opportunity_render,
  Opportunity_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Opportunity = (Opportunity_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Opportunity/OpportunityItem.vue?vue&type=script&lang=js&
/* harmony default export */ var OpportunityItemvue_type_script_lang_js_ = ({
  name: "RtOpportunityItem",
  props: {
    image: {
      type: String,
      "default": ''
    },
    title: {
      type: String,
      "default": ''
    },
    anchor: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      active: false
    };
  },
  mounted: function mounted() {
    var reversedItem = this.$parent.$children;

    if (reversedItem.length > 1) {
      for (var i = 0; i < reversedItem.length; i++) {
        reversedItem[1].$el.classList.add('rtb-opportunity-item--reverse');

        if (i >= 1) {
          reversedItem[i].$el.classList.add('rt-space-top');
        }
      }
    }

    this.$parent.$children[0].$data.active = true;
  },
  computed: {
    opportunityImage: function opportunityImage() {
      var backgroundImage = "url('" + this.image + "')";
      return backgroundImage;
    }
  },
  methods: {
    toggleDropdownItem: function toggleDropdownItem() {
      if (this.$parent.$data.mobileLayout && !this.active) {
        for (var i = 0; i < this.$parent.$children.length; i++) {
          this.$parent.$children[i].$data.active = false;
        }

        this.active = !this.active;
      } else {
        this.active = false;
      }
    }
  },
  render: function render(h) {
    return h("div", {
      "class": "rtb-opportunity-item" + (this.active ? " rtb-opportunity-item--active" : ""),
      on: {
        "click": this.toggleDropdownItem
      }
    }, [h("h4", {
      "class": "mobile-title rt-font-bold"
    }, [this.title, h("svg", {
      "class": "rtb-opportunity-item__arrow",
      attrs: {
        width: "12px",
        height: "7px",
        viewBox: "0 0 12 7",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      }
    }, [h("g", {
      attrs: {
        id: "Page-1",
        "stroke-width": "1"
      }
    }, [h("g", {
      attrs: {
        transform: "translate(-132.000000, -2341.000000)"
      }
    }, [h("g", {
      attrs: {
        id: "Group-3-Copy-2",
        transform: "translate(132.000000, 2332.000000)"
      }
    }, [h("polygon", {
      attrs: {
        id: "Shape-Copy",
        points: "10.6 9 6 13.3513514 1.4 9 0 10.3243243 6 16 12 10.3243243"
      }
    })])])])])]), h("div", {
      "class": "row"
    }, [h("div", {
      "class": "rt-col-6 rt-col-td-2 rt-col-md-3 rt-space-top"
    }, [h("div", {
      "class": "rtb-opportunity-item__image",
      style: "background-image: " + this.opportunityImage
    })]), h("div", {
      "class": "rt-col-6 rt-col-td-4 rt-col-md-3"
    }, [h("div", {
      "class": "rtb-opportunity-item__description"
    }, [h("h4", {
      "class": "desktop-title rt-font-bold rt-space-bottom"
    }, [this.title]), this.$slots.description])])])]);
  }
});
// CONCATENATED MODULE: ./src/components/Opportunity/OpportunityItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Opportunity_OpportunityItemvue_type_script_lang_js_ = (OpportunityItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Opportunity/OpportunityItem.vue
var OpportunityItem_render, OpportunityItem_staticRenderFns




/* normalize component */

var OpportunityItem_component = normalizeComponent(
  Opportunity_OpportunityItemvue_type_script_lang_js_,
  OpportunityItem_render,
  OpportunityItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var OpportunityItem = (OpportunityItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/MobileExpandWrapper/UnWrapper.vue?vue&type=script&lang=js&

/* harmony default export */ var UnWrappervue_type_script_lang_js_ = ({
  name: "RtUnWrapper",
  components: {},
  props: {
    mobileColor: {
      type: String,
      "default": 'inherit'
    },
    unwrapButtonText: {
      type: String,
      "default": ''
    },
    includingDesktop: {
      type: Boolean,
      "default": false
    },
    alwaysVisible: {
      type: Boolean,
      "default": false
    },
    unwrappedButtonText: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      isClosed: true,
      isMobileView: false
    };
  },
  computed: {},
  mounted: function mounted() {
    var _this = this;

    var toggleComponentView = function toggleComponentView() {
      if (window.innerWidth <= parseInt(variables["mobile-upper-limit"])) {
        _this.isMobileView = true;
      } else {
        _this.isMobileView = false;
      }

      if (_this.includingDesktop) {
        _this.isMobileView = true;
      }
    };

    toggleComponentView();
    window.addEventListener('resize', toggleComponentView);
  },
  created: function created() {},
  methods: {
    toggleOpen: function toggleOpen($event) {
      this.isClosed = !this.isClosed;
      $event.target.classList.add('rtb-unwrap-button--hidden');

      if (!this.isClosed) {
        $event.target.innerText = this.unwrappedButtonText;
      } else {
        $event.target.innerText = this.unwrapButtonText;
      }

      if (this.alwaysVisible) {
        $event.target.classList.remove('rtb-unwrap-button--hidden');
      }
    }
  },
  render: function render(h) {
    var _this2 = this;

    var fullContent = function () {
      if (!_this2.isMobileView || !_this2.isClosed) {
        return _this2.$slots['full-content'];
      }
    }();

    return h("div", {
      "class": "rt-expand-wrapper row"
    }, [this.$slots['short-content'], fullContent, h("div", {
      on: {
        "click": this.toggleOpen
      },
      "class": "rtb-unwrap-button rt-link rt-col-md-3 rt-font-paragraph" + (this.includingDesktop ? " rtb-unwrap-button--all-resolutions" : "")
    }, [this.unwrapButtonText])]);
  }
});
// CONCATENATED MODULE: ./src/components/MobileExpandWrapper/UnWrapper.vue?vue&type=script&lang=js&
 /* harmony default export */ var MobileExpandWrapper_UnWrappervue_type_script_lang_js_ = (UnWrappervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/MobileExpandWrapper/UnWrapper.vue
var UnWrapper_render, UnWrapper_staticRenderFns




/* normalize component */

var UnWrapper_component = normalizeComponent(
  MobileExpandWrapper_UnWrappervue_type_script_lang_js_,
  UnWrapper_render,
  UnWrapper_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var UnWrapper = (UnWrapper_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Popup/RealPopup.vue?vue&type=script&lang=js&

/* harmony default export */ var RealPopupvue_type_script_lang_js_ = ({
  name: "RtRealPopup",
  props: {
    positionTop: {
      type: Boolean,
      "default": false
    },
    positionBottom: {
      type: Boolean,
      "default": false
    },
    positionCenter: {
      type: Boolean,
      "default": false
    },
    displayOnDesktop: {
      type: Boolean,
      "default": true
    },
    popupType: {
      type: Number,
      "default": 1
    }
  },
  data: function data() {
    return {
      missClick: true
    };
  },
  computed: {
    popupClasses: function popupClasses() {
      var classList = "";

      if (this.positionTop) {
        classList += ' rtb-popup--top-center';
      }

      if (this.positionBottom) {
        classList += ' rtb-popup--bottom-center';
      }

      if (this.positionCenter) {
        classList += ' rtb-popup--center-center';
      }

      if (this.popupType) {
        classList += " rtb-popup-type-".concat(this.popupType);
      }

      return classList;
    }
  },
  methods: {
    popupEnter: function popupEnter() {
      this.missClick = false;
    },
    popupLeave: function popupLeave() {
      this.missClick = true;
    },
    milkClick: function milkClick() {
      if (this.missClick) {
        this.close();
      }
    },
    close: function close() {
      this.$refs.popupWrapper.classList.remove('rtb-popup-wrapper--active');
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflowY = 'unset';
    },
    countOffset: function countOffset() {
      var _this = this;

      setTimeout(function () {
        if (window.innerWidth <= parseInt(variables["mobile-upper-limit"]) && !_this.$el.parentNode.classList.contains('rt-banner-image')) {
          _this.svgOffset = parseInt(variables["mobile-upper-limit"]) - window.innerWidth;
          return _this.svgOffset;
        }
      }, 0);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    window.addEventListener('resize', function () {
      _this2.countOffset();
    });
    this.countOffset();
    document.querySelector('body').addEventListener('open-popup', function (e) {
      if (_this2.$el.querySelector('.rtb-popup').classList.contains(e.detail[1])) {
        _this2.$el.querySelector('.popup-content').innerHTML = e.detail[0].closest('.rt-card').querySelector('.rt-card__popup-benefits').innerHTML;

        _this2.$el.classList.add('rtb-popup-wrapper--active');
      }
    });
  },
  render: function render(h) {
    return h("div", {
      on: {
        "click": this.milkClick
      },
      ref: "popupWrapper",
      "class": "rtb-popup-wrapper" + (!this.displayOnDesktop ? " rtb-popup-wrapper--mobile-only" : "")
    }, [h("div", {
      "class": "rt-container"
    }, [h("div", {
      "class": "rt-col"
    }, [h("div", {
      "class": "row"
    }, [h("div", {
      "class": "rt-col-2 rt-col-td-d-none"
    }), h("div", {
      "class": "rt-col-8 rt-col-td-6 rt-col-md-3"
    }, [h("div", {
      "class": "rtb-popup " + this.popupClasses,
      on: {
        "mouseenter": this.popupEnter,
        "mouseleave": this.popupLeave
      }
    }, [h("svg", {
      attrs: {
        width: "35",
        height: "35",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "-10 -10 35 35"
      },
      "class": "rtb-popup-close",
      on: {
        "click": this.close
      }
    }, [h("path", {
      attrs: {
        d: "M15 1.5L13.5 0l-6 6-6-6L0 1.5l6 6-6 6L1.5 15l6-6 6 6 1.5-1.5-6-6z",
        fill: "#101828",
        "fill-rule": "evenodd",
        "fill-opacity": ".5"
      }
    })]), this.$slots["default"]])]), h("div", {
      "class": "rt-col-2 rt-col-td-d-none"
    })])])])]);
  }
});
// CONCATENATED MODULE: ./src/components/Popup/RealPopup.vue?vue&type=script&lang=js&
 /* harmony default export */ var Popup_RealPopupvue_type_script_lang_js_ = (RealPopupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Popup/RealPopup.vue
var RealPopup_render, RealPopup_staticRenderFns




/* normalize component */

var RealPopup_component = normalizeComponent(
  Popup_RealPopupvue_type_script_lang_js_,
  RealPopup_render,
  RealPopup_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RealPopup = (RealPopup_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Card/UseCase.vue?vue&type=script&lang=js&
var UseCasevue_type_script_lang_js_componentsList = {};

/* harmony default export */ var UseCasevue_type_script_lang_js_ = ({
  name: "RtUseCase",
  components: UseCasevue_type_script_lang_js_componentsList,
  data: function data() {
    return {
      lastSelectedCard: null,
      mobileLayout: window.innerWidth <= parseInt(variables["tablet-upper-limit"])
    };
  },
  mounted: function mounted() {
    var _this = this;

    window.addEventListener('load', function () {
      _this.setCardHeight();

      document.addEventListener('resize', function () {
        _this.setCardHeight();
      });
    });
  },
  computed: {},
  methods: {
    setCardHeight: function setCardHeight() {
      if (!this.mobileLayout) {
        for (var i = 0; i < this.$children.length; i++) {
          this.$children[i].$el.style.height = this.$children[i].$el.querySelector('.rtb-card__reverse').scrollHeight + 'px';
        }
      }

      this.equalizeCardsHeight();
    },
    equalizeCardsHeight: function equalizeCardsHeight() {
      var maxHeight = 0;

      for (var i = 0; i < this.$children.length; i++) {
        var cardHeight = +this.$children[i].$el.style.height.replace('px', '');
        maxHeight = maxHeight < cardHeight ? cardHeight : maxHeight;
      }

      for (var _i = 0; _i < this.$children.length; _i++) {
        this.$children[_i].$el.style.height = maxHeight + 'px';
      }
    }
  },
  render: function render(h) {
    return h("div", {
      "class": "row rt-rotating-card-gallery"
    }, [this.$slots["default"]]);
  }
});
// CONCATENATED MODULE: ./src/components/Card/UseCase.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_UseCasevue_type_script_lang_js_ = (UseCasevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Card/UseCase.vue
var UseCase_render, UseCase_staticRenderFns




/* normalize component */

var UseCase_component = normalizeComponent(
  Card_UseCasevue_type_script_lang_js_,
  UseCase_render,
  UseCase_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var UseCase = (UseCase_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BenefitBlock/BenefitBlock.vue?vue&type=script&lang=js&

var BenefitBlockvue_type_script_lang_js_componentsList = {};
/* harmony default export */ var BenefitBlockvue_type_script_lang_js_ = ({
  name: "RtBenefitBlock",
  components: BenefitBlockvue_type_script_lang_js_componentsList,
  props: {
    columnsQuantity: {
      type: Number,
      "default": null
    },
    iconSize: {
      type: [String, Number],
      "default": null
    },
    alignCenter: {
      type: Boolean,
      "default": false
    },
    backgroundColorClass: {
      type: String,
      "default": ''
    },
    hasIcon: {
      type: Boolean,
      "default": false
    },
    smallIcon: {
      type: Boolean,
      "default": false
    },
    step: {
      type: Boolean,
      "default": false
    },
    stepTitle: {
      type: String,
      "default": 'шаг'
    },
    hasImage: {
      type: Boolean,
      "default": false
    },
    inlineLayout: {
      type: Boolean,
      "default": false
    },
    iconBackingColor: {
      type: String,
      "default": ''
    },
    iconBackingSize: {
      type: [Number, String],
      "default": null
    },
    swiperOnMobile: {
      type: Boolean,
      "default": false
    },
    noTransparencyDescription: {
      type: Boolean,
      "default": false
    },
    threeColumnTablet: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      layout: ''
    };
  },
  computed: {
    transparencyClass: function transparencyClass() {
      var className = 'rt-benefit-block';

      if (this.backgroundColorClass) {
        className += ' ' + this.backgroundColorClass;
      }

      if (this.noTransparencyDescription) {
        className += ' rt-benefit-block--no-transparency';
      }

      return className;
    }
  },
  mounted: function mounted() {
    this.specifyLayout();
    window.addEventListener('resize', this.specifyLayout);
  },
  methods: {
    specifyLayout: function specifyLayout() {
      if (window.innerWidth <= parseInt(variables["mobile-upper-limit"]) && this.swiperOnMobile) {
        this.layout = 'swiper';
      } else {
        this.layout = 'benefit';
      }
    }
  },
  render: function render(h) {
    if (this.layout === 'swiper') {
      return h("rt-swiper", [this.$slots["default"]]);
    } else {
      return h("div", {
        "class": this.transparencyClass
      }, [h("div", {
        "class": "rt-container"
      }, [h("div", {
        "class": "rt-col"
      }, [h("div", {
        "class": "row"
      }, [this.$slots["default"]])])])]);
    }
  }
});
// CONCATENATED MODULE: ./src/components/BenefitBlock/BenefitBlock.vue?vue&type=script&lang=js&
 /* harmony default export */ var BenefitBlock_BenefitBlockvue_type_script_lang_js_ = (BenefitBlockvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BenefitBlock/BenefitBlock.vue
var BenefitBlock_render, BenefitBlock_staticRenderFns




/* normalize component */

var BenefitBlock_component = normalizeComponent(
  BenefitBlock_BenefitBlockvue_type_script_lang_js_,
  BenefitBlock_render,
  BenefitBlock_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BenefitBlock = (BenefitBlock_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BenefitBlock/BenefitItem.vue?vue&type=script&lang=js&

/* harmony default export */ var BenefitItemvue_type_script_lang_js_ = ({
  name: "RtBenefitItem",
  props: {},
  data: function data() {
    return {
      iconSize: '',
      columnsQuantity: null,
      step: null,
      alignCenter: false,
      inlineLayout: false,
      layout: ''
    };
  },
  computed: {
    iconImage: function iconImage() {
      var styles = {};

      if (this.iconSize) {
        if (typeof this.iconSize === 'number') {
          styles.width = "" + this.iconSize + "px";
          styles.height = "" + this.iconSize + "px";
          styles.flexBasis = "" + this.iconSize + "px";
        } else if (typeof this.iconSize === 'string') {
          styles.width = this.iconSize;
          styles.height = this.iconSize;
          styles.flexBasis = this.iconSize;
        }
      } else {
        styles.width = "80px";
        styles.height = "80px";
        styles.flexBasis = "80px";
      }

      return styles;
    },
    textFlexBasis: function textFlexBasis() {
      var styles = {};

      if (this.inlineLayout) {
        if (this.iconSize) {
          if (typeof this.iconSize === 'number') {
            styles.flexBasis = "calc(100% - " + this.iconSize + "px)";
          }

          if (typeof this.iconSize === 'string') {
            styles.flexBasis = "calc(100% - " + this.iconSize + ")";
          }
        } else {
          styles.flexBasis = "calc(100% - 80px)";
        }
      }

      return styles;
    },
    iconBackground: function iconBackground() {
      var styles = {};

      if (this.iconBackingSize) {
        if (typeof this.iconBackingSize === 'number') {
          styles.width = "" + this.iconBackingSize + "px";
          styles.height = "" + this.iconBackingSize + "px";
          styles.flexBasis = "" + this.iconBackingSize + "px";
        } else if (typeof this.iconBackingSize === 'string') {
          styles.width = this.iconBackingSize;
          styles.height = this.iconBackingSize;
          styles.flexBasis = this.iconBackingSize;
        }
      } else {
        styles.width = "80px";
        styles.height = "80px";
        styles.flexBasis = "80px";
      }

      return styles;
    }
  },
  mounted: function mounted() {
    this.iconSize = this.$parent._props.iconSize;
    this.columnsQuantity = this.$parent._props.columnsQuantity;
    this.step = this.$parent._props.step;
    this.hasIcon = this.$parent._props.hasIcon;
    this.stepTitle = this.$parent._props.stepTitle;
    this.hasImage = this.$parent._props.hasImage;
    this.alignCenter = this.$parent._props.alignCenter;
    this.inlineLayout = this.$parent._props.inlineLayout;
    this.iconBackingColor = this.$parent._props.iconBackingColor;
    this.iconBackingSize = this.$parent._props.iconBackingSize;
    this.threeColumnTablet = this.$parent._props.threeColumnTablet;
  },
  updated: function updated() {
    if (this.$parent.$data.layout !== 'benefit' || this.$parent._props.swiperOnMobile) {
      this.layout = 'swiper';
    }
  },
  methods: {},
  render: function render(h) {
    var _this = this;

    var icon = function () {
      if (_this.iconBackingColor) {
        return h("div", {
          "class": "rt-benefit-item__icon-background color-block--" + _this.iconBackingColor,
          style: _this.iconBackground
        }, [h("div", {
          "class": "rt-benefit-item__icon",
          style: _this.iconImage
        }, [_this.$slots.image])]);
      } else if (_this.hasIcon && !_this.step && !_this.hasImage) {
        return h("div", {
          "class": "rt-benefit-item__icon",
          style: _this.iconImage
        }, [_this.$slots.image]);
      }
    }();

    var step = function () {
      if (_this.step && !_this.hasImage && !_this.hasIcon) {
        return h("p", {
          "class": "rt-benefit-item__step rt-font-h1 rt-font-bold"
        }, [Array.prototype.indexOf.call(_this.$el.parentNode.children, _this.$el) + 1 + ' ' + _this.stepTitle]);
      }
    }();

    var image = function () {
      if (_this.hasImage && !_this.hasIcon && !_this.step) {
        return h("div", {
          "class": "rt-benefit-item__image"
        }, [_this.$slots.image]);
      }
    }();

    var columnClass = function () {
      if (_this.columnsQuantity === 2) {
        return 'rt-col-6 rbi-pr1c';
      }

      if (_this.columnsQuantity === 3) {
        return 'rt-col-4 rbi-pr70';
      }

      if (_this.columnsQuantity === 4) {
        return 'rt-col-3 rt-space-right15 rt-td-space-right05';
      }

      if (_this.layout === 'swiper') {
        return 'rtk-carousel-slide';
      }
    }();

    var tabletColumnClass = function () {
      if (_this.threeColumnTablet) {
        return ' rt-col-td-2';
      } else {
        return ' rt-col-td-3';
      }
    }();

    return h("div", {
      "class": "rt-benefit-item " + columnClass + tabletColumnClass + " rt-col-md-3" + (this.alignCenter ? " rt-benefit-item--center" : "") + (this.inlineLayout ? " rt-benefit-item--inline" : "")
    }, [icon, step, image, h("div", {
      "class": "rt-benefit-item__text",
      style: this.textFlexBasis
    }, [this.$slots.description])]);
  }
});
// CONCATENATED MODULE: ./src/components/BenefitBlock/BenefitItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var BenefitBlock_BenefitItemvue_type_script_lang_js_ = (BenefitItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BenefitBlock/BenefitItem.vue
var BenefitItem_render, BenefitItem_staticRenderFns




/* normalize component */

var BenefitItem_component = normalizeComponent(
  BenefitBlock_BenefitItemvue_type_script_lang_js_,
  BenefitItem_render,
  BenefitItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BenefitItem = (BenefitItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BusinessDrive/PortraitTile.vue?vue&type=script&lang=js&
var PortraitTilevue_type_script_lang_js_componentsList = {};

/* harmony default export */ var PortraitTilevue_type_script_lang_js_ = ({
  name: "RtPortraitTile",
  components: PortraitTilevue_type_script_lang_js_componentsList,
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  computed: {},
  methods: {},
  render: function render(h) {
    return h("div", {
      "class": "row rt-portrait-tile-gallery"
    }, [this.$slots["default"]]);
  }
});
// CONCATENATED MODULE: ./src/components/BusinessDrive/PortraitTile.vue?vue&type=script&lang=js&
 /* harmony default export */ var BusinessDrive_PortraitTilevue_type_script_lang_js_ = (PortraitTilevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BusinessDrive/PortraitTile.vue
var PortraitTile_render, PortraitTile_staticRenderFns




/* normalize component */

var PortraitTile_component = normalizeComponent(
  BusinessDrive_PortraitTilevue_type_script_lang_js_,
  PortraitTile_render,
  PortraitTile_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PortraitTile = (PortraitTile_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BusinessDrive/Timeline.vue?vue&type=script&lang=js&
var Timelinevue_type_script_lang_js_componentsList = {};

/* harmony default export */ var Timelinevue_type_script_lang_js_ = ({
  name: "RtTimeline",
  components: Timelinevue_type_script_lang_js_componentsList,
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  computed: {},
  methods: {},
  render: function render(h) {
    return h("div", {
      "class": "rt-timeline"
    }, [this.$slots["default"]]);
  }
});
// CONCATENATED MODULE: ./src/components/BusinessDrive/Timeline.vue?vue&type=script&lang=js&
 /* harmony default export */ var BusinessDrive_Timelinevue_type_script_lang_js_ = (Timelinevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BusinessDrive/Timeline.vue
var Timeline_render, Timeline_staticRenderFns




/* normalize component */

var Timeline_component = normalizeComponent(
  BusinessDrive_Timelinevue_type_script_lang_js_,
  Timeline_render,
  Timeline_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Timeline = (Timeline_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ScrollBar/ScrollBar.vue?vue&type=template&id=6f5112a9&
var ScrollBarvue_type_template_id_6f5112a9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.windowWidth)?_c('div',{ref:"scrollWrapper",class:'rt-scrollbar__wrapper' + ( this.classes ? ' ' + this.classes : '' ),style:(this.styles),on:{"click":_vm.calculateSize}},[_c('div',{ref:"scrollArea",class:'rt-scrollbar__area' + ( this.dragging ? ' ' : ' rt-scrollbar-transition'),style:({
      marginTop: this.top * -1 +'px',
      marginLeft: this.left * -1 +'px'
    }),on:{"wheel":_vm.scroll,"touchstart":_vm.startDrag,"touchmove":_vm.onDrag,"touchend":_vm.stopDrag}},[_vm._t("default"),_vm._v(" "),(_vm.ready)?_c('rt-vertical-scroll-bar',{attrs:{"area":{ height: _vm.scrollAreaHeight },"wrapper":{ height: _vm.scrollWrapperHeight },"scrolling":_vm.vMovement,"dragging-from-parent":_vm.dragging,"on-change-position":_vm.handleChangePosition,"on-dragging":_vm.handleScrollbarDragging,"on-stop-drag":_vm.handleScrollbarStopDrag}}):_vm._e()],2)]):_c('div',[_vm._t("default")],2)}
var ScrollBarvue_type_template_id_6f5112a9_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ScrollBar/ScrollBar.vue?vue&type=template&id=6f5112a9&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ScrollBar/VerticalScrollBar.vue?vue&type=template&id=b8bdd5ea&
var VerticalScrollBarvue_type_template_id_b8bdd5ea_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.height < 100)?_c('div',{ref:"container",staticClass:"rt-scrollbar__scrollbar-vertical",on:{"click":_vm.jump}},[_c('div',{ref:"scrollbar",class:'scrollbar' + ( _vm.dragging || _vm.draggingFromParent ? '' : ' rt-scrollbar-transition'),style:({
        height: _vm.height+'%',
        top: _vm.scrolling + '%'
      }),on:{"touchstart":_vm.startDrag,"mousedown":_vm.startDrag}})]):_vm._e()])}
var VerticalScrollBarvue_type_template_id_b8bdd5ea_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ScrollBar/VerticalScrollBar.vue?vue&type=template&id=b8bdd5ea&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ScrollBar/VerticalScrollBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var VerticalScrollBarvue_type_script_lang_js_ = ({
  name: "RtVerticalScrollBar",
  props: {
    draggingFromParent: Boolean,
    scrolling: Number,
    wrapper: Object,
    area: Object,
    onChangePosition: Function,
    onDragging: Function,
    onStopDrag: Function
  },
  data: function data() {
    return {
      height: 0,
      dragging: false,
      start: 0
    };
  },
  watch: {
    'wrapper.height': function wrapperHeight(val, old) {
      this.calculateSize(this);
    },
    'area.height': function areaHeight(val, old) {
      this.calculateSize(this);
    }
  },
  methods: {
    startDrag: function startDrag(e) {
      e.preventDefault();
      e.stopPropagation();
      e = e.changedTouches ? e.changedTouches[0] : e; // Prepare to drag

      this.dragging = true;
      this.start = e.clientY;
    },
    onDrag: function onDrag(e) {
      if (this.dragging) {
        // Make The Parent being in the Dragging State
        this.onDragging();
        e.preventDefault();
        e.stopPropagation();
        e = e.changedTouches ? e.changedTouches[0] : e;
        var yMovement = e.clientY - this.start;
        var yMovementPercentage = yMovement / this.wrapper.height * 100; // Update the last e.clientY

        this.start = e.clientY; // The next Vertical Value will be

        var next = this.scrolling + yMovementPercentage; // Tell the parent to change the position

        this.onChangePosition(next, 'vertical');
      }
    },
    stopDrag: function stopDrag(e) {
      if (this.dragging) {
        // Parent Should Change the Dragging State
        this.onStopDrag();
        this.dragging = false;
      }
    },
    jump: function jump(e) {
      var isContainer = e.target === this.$refs.container;

      if (isContainer) {
        // Get the Element Position
        var position = this.$refs.scrollbar.getBoundingClientRect(); // Calculate the vertical Movement

        var yMovement = e.clientY - position.top;
        var centerize = this.height / 2;
        var yMovementPercentage = yMovement / this.wrapper.height * 100 - centerize; // Update the last e.clientY

        this.start = e.clientY; // The next Vertical Value will be

        var next = this.scrolling + yMovementPercentage; // Tell the parent to change the position

        this.onChangePosition(next, 'vertical');
      }
    },
    calculateSize: function calculateSize(source) {
      // Scrollbar Height
      this.height = source.wrapper.height / source.area.height * 100;
    },
    getSize: function getSize() {
      // The Elements
      var $scrollArea = this.$refs.container.parentElement;
      var $scrollWrapper = $scrollArea.parentElement; // Get new Elements Size

      var elementSize = {
        // Scroll Area Height and Width
        scrollAreaHeight: $scrollArea.children[0].clientHeight,
        scrollAreaWidth: $scrollArea.children[0].clientWidth,
        // Scroll Wrapper Height and Width
        scrollWrapperHeight: $scrollWrapper.clientHeight,
        scrollWrapperWidth: $scrollWrapper.clientWidth
      };
      return elementSize;
    }
  },
  mounted: function mounted() {
    this.calculateSize(this); // Put the Listener

    document.addEventListener('mousemove', this.onDrag);
    document.addEventListener('touchmove', this.onDrag);
    document.addEventListener('mouseup', this.stopDrag);
    document.addEventListener('touchend', this.stopDrag);
  },
  beforeDestroy: function beforeDestroy() {
    // Remove the Listener
    document.removeEventListener('mousemove', this.onDrag);
    document.removeEventListener('touchmove', this.onDrag);
    document.removeEventListener('mouseup', this.stopDrag);
    document.removeEventListener('touchend', this.stopDrag);
  }
});
// CONCATENATED MODULE: ./src/components/ScrollBar/VerticalScrollBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var ScrollBar_VerticalScrollBarvue_type_script_lang_js_ = (VerticalScrollBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/ScrollBar/VerticalScrollBar.vue





/* normalize component */

var VerticalScrollBar_component = normalizeComponent(
  ScrollBar_VerticalScrollBarvue_type_script_lang_js_,
  VerticalScrollBarvue_type_template_id_b8bdd5ea_render,
  VerticalScrollBarvue_type_template_id_b8bdd5ea_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var VerticalScrollBar = (VerticalScrollBar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ScrollBar/ScrollBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var ScrollBarvue_type_script_lang_js_componentsList = {};


/* harmony default export */ var ScrollBarvue_type_script_lang_js_ = ({
  name: "RtScrollBar",
  components: ScrollBarvue_type_script_lang_js_componentsList,
  props: {
    classes: String,
    styles: Object,
    speed: {
      type: Number,
      "default": 53
    },
    onMaxScroll: Function
  },
  data: function data() {
    return {
      ready: false,
      top: 0,
      left: 0,
      scrollAreaHeight: null,
      scrollAreaWidth: null,
      scrollWrapperHeight: null,
      scrollWrapperWidth: null,
      vMovement: 0,
      hMovement: 0,
      dragging: false,
      start: {
        y: 0,
        x: 0
      },
      allowBodyScroll: false,
      windowWidth: window.innerWidth >= 1024
    };
  },
  methods: {
    scroll: function scroll(e) {
      var _this = this;

      // Make sure the content height is not changed
      this.calculateSize(function () {
        // Set the wheel step
        var num = _this.speed; // DOM events

        var shifted = e.shiftKey;
        var scrollY = e.deltaY > 0 ? num : -num;
        var scrollX = e.deltaX > 0 ? num : -num; // Fix Mozilla Shifted Wheel~

        if (shifted && e.deltaX === 0) scrollX = e.deltaY > 0 ? num : -num; // Next Value

        var nextY = _this.top + scrollY;
        var nextX = _this.left + scrollX; // Is it Scrollable?

        var canScrollY = _this.scrollAreaHeight > _this.scrollWrapperHeight;
        var canScrollX = _this.scrollAreaWidth > _this.scrollWrapperWidth; // Vertical Scrolling

        if (canScrollY && !shifted) _this.normalizeVertical(nextY); // Horizontal Scrolling

        if (shifted && canScrollX) _this.normalizeHorizontal(nextX);
      });
      var OSName = "Unknown OS";
      if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
      if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS"; // prevent Default only if scrolled content is not at the top/bottom

      if (!this.allowBodyScroll) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    // DRAG EVENT JUST FOR TOUCH DEVICE~
    startDrag: function startDrag(e) {
      var _this2 = this;

      this.touchEvent = e;
      var evt = e.changedTouches ? e.changedTouches[0] : e; // Make sure the content height is not changed

      this.calculateSize(function () {
        // Prepare to drag
        _this2.dragging = true;
        _this2.start = {
          y: evt.pageY,
          x: evt.pageX
        };
      });
    },
    onDrag: function onDrag(e) {
      if (this.dragging) {
        e.preventDefault();
        e.stopPropagation(); // Prevent Click Event When it dragging

        if (this.touchEvent) {
          this.touchEvent.preventDefault();
          this.touchEvent.stopPropagation();
        }

        var evt = e.changedTouches ? e.changedTouches[0] : e; // Invers the Movement

        var yMovement = this.start.y - evt.clientY;
        var xMovement = this.start.x - evt.clientX; // Update the last e.client

        this.start = {
          y: evt.clientY,
          x: evt.clientX
        }; // The next Vertical Value will be

        var nextY = this.top + yMovement;
        var nextX = this.left + xMovement;
        this.normalizeVertical(nextY);
        this.normalizeHorizontal(nextX);
      }
    },
    stopDrag: function stopDrag(e) {
      this.dragging = false;
      this.touchEvent = false;
    },
    scrollToY: function scrollToY(y) {
      this.normalizeVertical(y);
    },
    scrollToX: function scrollToX(x) {
      this.normalizeHorizontal(x);
    },
    normalizeVertical: function normalizeVertical(next) {
      var elementSize = this.getSize(); // Vertical Scrolling

      var lowerEnd = elementSize.scrollAreaHeight - elementSize.scrollWrapperHeight; // Max Scroll Down

      var maxBottom = next > lowerEnd;
      if (maxBottom) next = lowerEnd; // Max Scroll Up

      var maxTop = next < 0;
      if (maxTop) next = 0; // Update the Vertical Value if it's needed

      var shouldScroll = this.top !== next;
      this.allowBodyScroll = !shouldScroll;

      if (shouldScroll) {
        this.top = next;
        this.vMovement = next / elementSize.scrollAreaHeight * 100;

        if (this.onMaxScroll && (maxTop || maxBottom)) {
          this.onMaxScroll({
            top: maxTop,
            bottom: maxBottom,
            right: false,
            left: false
          });
        }
      }
    },
    normalizeHorizontal: function normalizeHorizontal(next) {
      var elementSize = this.getSize(); // Horizontal Scrolling

      var rightEnd = elementSize.scrollAreaWidth - this.scrollWrapperWidth; // Max Scroll Right

      var maxRight = next > rightEnd;
      if (maxRight) next = rightEnd; // Max Scroll Left

      var maxLeft = next < 0;
      if (next < 0) next = 0; // Update the Horizontal Value

      var shouldScroll = this.left !== next;
      this.allowBodyScroll = !shouldScroll;

      if (shouldScroll) {
        this.left = next;
        this.hMovement = next / elementSize.scrollAreaWidth * 100;

        if (this.onMaxScroll && (maxRight || maxLeft)) {
          this.onMaxScroll({
            right: maxRight,
            left: maxLeft,
            top: false,
            bottom: false
          });
        }
      }
    },
    handleChangePosition: function handleChangePosition(movement, orientation) {
      var _this3 = this;

      // Make sure the content height is not changed
      this.calculateSize(function () {
        // Convert Percentage to Pixel
        var next = movement / 100;
        if (orientation === 'vertical') _this3.normalizeVertical(next * _this3.scrollAreaHeight);
        if (orientation === 'horizontal') _this3.normalizeHorizontal(next * _this3.scrollAreaWidth);
      });
    },
    handleScrollbarDragging: function handleScrollbarDragging() {
      this.dragging = true;
    },
    handleScrollbarStopDrag: function handleScrollbarStopDrag() {
      this.dragging = false;
    },
    getSize: function getSize() {
      // The Elements
      var $scrollArea = this.$refs.scrollArea;
      var $scrollWrapper = this.$refs.scrollWrapper; // Get new Elements Size

      var elementSize = {
        // Scroll Area Height and Width
        scrollAreaHeight: $scrollArea.children[0].clientHeight,
        scrollAreaWidth: $scrollArea.children[0].clientWidth,
        // Scroll Wrapper Height and Width
        scrollWrapperHeight: $scrollWrapper.clientHeight,
        scrollWrapperWidth: $scrollWrapper.clientWidth
      };
      return elementSize;
    },
    calculateSize: function calculateSize(cb) {
      if (typeof cb !== 'function') cb = null;
      var elementSize = this.getSize();

      if (elementSize.scrollWrapperHeight !== this.scrollWrapperHeight || elementSize.scrollWrapperWidth !== this.scrollWrapperWidth || elementSize.scrollAreaHeight !== this.scrollAreaHeight || elementSize.scrollAreaWidth !== this.scrollAreaWidth) {
        // Scroll Area Height and Width
        this.scrollAreaHeight = elementSize.scrollAreaHeight;
        this.scrollAreaWidth = elementSize.scrollAreaWidth; // Scroll Wrapper Height and Width

        this.scrollWrapperHeight = elementSize.scrollWrapperHeight; //this.$el.closest('.rtb-popup').style.height

        this.scrollWrapperWidth = elementSize.scrollWrapperWidth; // Make sure The wrapper is Ready, then render the scrollbar

        this.ready = true;
        return cb ? cb() : false;
      } else return cb ? cb() : false;
    }
  },
  mounted: function mounted() {
    this.calculateSize(); // Attach The Event for Responsive View~

    window.addEventListener('resize', this.calculateSize);
  },
  beforeDestroy: function beforeDestroy() {
    // Remove Event
    window.removeEventListener('resize', this.calculateSize);
  }
});
// CONCATENATED MODULE: ./src/components/ScrollBar/ScrollBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var ScrollBar_ScrollBarvue_type_script_lang_js_ = (ScrollBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/ScrollBar/ScrollBar.vue





/* normalize component */

var ScrollBar_component = normalizeComponent(
  ScrollBar_ScrollBarvue_type_script_lang_js_,
  ScrollBarvue_type_template_id_6f5112a9_render,
  ScrollBarvue_type_template_id_6f5112a9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ScrollBar = (ScrollBar_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BusinessDrive/TimelineItem.vue?vue&type=script&lang=js&
var TimelineItemvue_type_script_lang_js_componentsList = {};

/* harmony default export */ var TimelineItemvue_type_script_lang_js_ = ({
  name: "RtTimelineItem",
  components: TimelineItemvue_type_script_lang_js_componentsList,
  props: {
    important: {
      type: Boolean,
      "default": false
    },
    hasImage: {
      type: Boolean,
      "default": true
    },
    image: {
      type: String,
      "default": ''
    },
    topMargin: {
      type: String,
      "default": ''
    },
    speakerEvent: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  computed: {
    blockStyle: function blockStyle() {
      var styles = {};

      if (this.topMargin !== null) {
        styles.marginTop = this.topMargin;
      }

      return styles;
    }
  },
  methods: {
    showSpeakerPopup: function showSpeakerPopup() {
      document.querySelector('.popup-image').style.backgroundImage = 'url(' + this.$el.querySelector('.rt-timeline__item-image').src + ')';
      var fullName = this.$el.querySelector('.rt-timeline__item-speaker').innerHTML;
      var space = fullName.indexOf(' ');
      var firstName = fullName.substring(0, space);
      var lastName = fullName.substr(space + 1);
      document.querySelector('.popup-title').innerHTML = '<div class="speaker-name__wrapper"> ' + '<div class="speaker-name__name">' + firstName + '</div> ' + '</div> ' + '<div class="speaker-name__wrapper"> ' + '<div class="speaker-name__surname">' + lastName + '</div> ' + '</div> ';
      document.querySelector('.popup-theme').innerHTML = this.$el.querySelector('.rt-timeline__item-theme').innerHTML;
      document.querySelector('.popup-description').innerHTML = this.$el.querySelector('.rt-timeline__item-description').innerHTML;
      document.querySelector('.popup-reputation').innerHTML = this.$el.querySelector('.rt-timeline__item-reputation').innerHTML;
      document.querySelector('.speaker-popup').classList.add('rtb-popup-wrapper--active');
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
  },
  render: function render(h) {
    var _this = this;

    var eventImage = function () {
      if (_this.hasImage) {
        return h("div", {
          "class": "rt-timeline__item-image-wrapper"
        }, [h("img", {
          "class": "rt-timeline__item-image",
          attrs: {
            src: _this.image
          }
        })]);
      } else {
        return null;
      }
    }();

    var speakerName = function () {
      if (_this.$slots["speaker-name"]) {
        return h("h3", {
          "class": "rt-timeline__item-speaker color-white05"
        }, [_this.$slots["speaker-name"]]);
      } else {
        return null;
      }
    }();

    if (this.important) {
      return h("div", {
        "class": "rt-timeline__item rt-timeline__item--important" + (this.speakerEvent ? ' clickable' : ''),
        on: {
          "click": this.showSpeakerPopup
        },
        style: this.blockStyle
      }, [h("div", {
        "class": "timestamp-wrapper rt-space-bottom15"
      }, [h("span", {
        "class": "timestamp"
      }, [this.$slots['time-stamp']])]), eventImage, h("h2", {
        "class": "rt-timeline__item-theme rt-font-bold"
      }, [this.$slots.theme]), speakerName, h("div", {
        "class": "rt-timeline__item-description"
      }, [this.$slots.description]), h("div", {
        "class": "rt-timeline__item-reputation"
      }, [this.$slots.reputation])]);
    } else {
      return h("div", {
        "class": "rt-timeline__item",
        style: this.blockStyle
      }, [h("h2", {
        "class": "timestamp-wrapper rt-space-bottom"
      }, [h("span", {
        "class": "timestamp"
      }, [this.$slots['time-stamp']])]), h("h3", {
        "class": "rt-timeline__item-theme rt-font-bold"
      }, [this.$slots.theme])]);
    }
  }
});
// CONCATENATED MODULE: ./src/components/BusinessDrive/TimelineItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var BusinessDrive_TimelineItemvue_type_script_lang_js_ = (TimelineItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BusinessDrive/TimelineItem.vue
var TimelineItem_render, TimelineItem_staticRenderFns




/* normalize component */

var TimelineItem_component = normalizeComponent(
  BusinessDrive_TimelineItemvue_type_script_lang_js_,
  TimelineItem_render,
  TimelineItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TimelineItem = (TimelineItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BusinessDrive/PortraitTileItem.vue?vue&type=script&lang=js&
var PortraitTileItemvue_type_script_lang_js_componentsList = {};

/* harmony default export */ var PortraitTileItemvue_type_script_lang_js_ = ({
  name: "RtPortraitTileItem",
  components: PortraitTileItemvue_type_script_lang_js_componentsList,
  props: {
    photo: {
      type: String,
      "default": ''
    },
    smallImage: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  computed: {},
  methods: {
    showSpeakerPopup: function showSpeakerPopup() {
      document.querySelector('.popup-image').style.backgroundImage = 'url(' + this.$el.querySelector('.rt-portrait-tile-gallery__image').src + ')';
      document.querySelector('.popup-title').innerHTML = this.$el.querySelector('.speaker-name').innerHTML;
      document.querySelector('.popup-theme').innerHTML = this.$el.querySelector('.rt-portrait-tile-gallery__theme').innerHTML;
      document.querySelector('.popup-reputation').innerHTML = this.$el.querySelector('.rt-portrait-tile-gallery__item-description .rt-font-paragraph').innerHTML;
      document.querySelector('.popup-description').innerHTML = this.$el.querySelector('.rt-portrait-tile-gallery__description').innerHTML;
      document.querySelector('.speaker-popup').classList.add('rtb-popup-wrapper--active');
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    }
  },
  render: function render(h) {
    var _this = this;

    var name = function () {
      var fullName = _this.$slots.title[0].text;
      var space = fullName.indexOf(' ');
      var firstName = fullName.substring(0, space);
      var lastName = fullName.substr(space + 1);
      return h("div", {
        "class": "speaker-name rt-font-bold rt-space-bottom rt-md-space-bottom-none"
      }, [h("div", {
        "class": "speaker-name__wrapper"
      }, [h("div", {
        "class": "speaker-name__name"
      }, [firstName])]), h("div", {
        "class": "speaker-name__wrapper"
      }, [h("div", {
        "class": "speaker-name__surname"
      }, [lastName])])]);
    }();

    return h("div", {
      "class": (this.smallImage ? "rt-col-4 rt-col-td-2" : "rt-col-6 rt-col-td-3") + " rt-col-md-3"
    }, [h("div", {
      "class": "rt-portrait-tile-gallery__item",
      on: {
        "click": this.showSpeakerPopup
      }
    }, [h("img", {
      "class": "rt-portrait-tile-gallery__image",
      attrs: {
        src: this.photo
      }
    }), h("div", {
      "class": "rt-portrait-tile-gallery__item-description"
    }, [name, this.$slots.reputation]), h("div", {
      "class": "rt-portrait-tile-gallery__description"
    }, [this.$slots.description]), h("div", {
      "class": "rt-portrait-tile-gallery__theme"
    }, [this.$slots.theme])])]);
  }
});
// CONCATENATED MODULE: ./src/components/BusinessDrive/PortraitTileItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var BusinessDrive_PortraitTileItemvue_type_script_lang_js_ = (PortraitTileItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/BusinessDrive/PortraitTileItem.vue
var PortraitTileItem_render, PortraitTileItem_staticRenderFns




/* normalize component */

var PortraitTileItem_component = normalizeComponent(
  BusinessDrive_PortraitTileItemvue_type_script_lang_js_,
  PortraitTileItem_render,
  PortraitTileItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var PortraitTileItem = (PortraitTileItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ReplacementLinkWrapper/ReplacementLink.vue?vue&type=script&lang=js&
/* harmony default export */ var ReplacementLinkvue_type_script_lang_js_ = ({
  name: "RtReplacementLink",
  props: {
    linkText: {
      type: String,
      "default": null,
      required: true
    },
    macosLink: {
      type: String,
      "default": null,
      required: true
    },
    windowsLink: {
      type: String,
      "default": null,
      required: true
    },
    preLinkText: {
      type: String,
      "default": ''
    },
    postLinkText: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      deviceOS: null
    };
  },
  mounted: function mounted() {
    if (navigator.appVersion.indexOf("Win") != -1) this.deviceOS = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) this.deviceOS = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) this.deviceOS = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) this.deviceOS = "Linux";
  },
  render: function render(h) {
    if (this.deviceOS === 'MacOS') {
      return h("p", [this.preLinkText, h("a", {
        attrs: {
          href: '' + this.macosLink + ''
        },
        "class": "rt-link"
      }, [this.linkText]), this.postLinkText]);
    } else if (this.deviceOS === 'Windows') {
      return h("p", [this.preLinkText, h("a", {
        attrs: {
          href: '' + this.windowsLink + ''
        },
        "class": "rt-link"
      }, [this.linkText]), this.postLinkText]);
    } else {
      return h("p", [this.preLinkText, h("span", [this.linkText]), this.postLinkText]);
    }
  }
});
// CONCATENATED MODULE: ./src/components/ReplacementLinkWrapper/ReplacementLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var ReplacementLinkWrapper_ReplacementLinkvue_type_script_lang_js_ = (ReplacementLinkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/ReplacementLinkWrapper/ReplacementLink.vue
var ReplacementLink_render, ReplacementLink_staticRenderFns




/* normalize component */

var ReplacementLink_component = normalizeComponent(
  ReplacementLinkWrapper_ReplacementLinkvue_type_script_lang_js_,
  ReplacementLink_render,
  ReplacementLink_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ReplacementLink = (ReplacementLink_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Card/CardCarousel.vue?vue&type=script&lang=js&
var CardCarouselvue_type_script_lang_js_componentsList = {};

/* harmony default export */ var CardCarouselvue_type_script_lang_js_ = ({
  name: "RtCardCarousel",
  components: CardCarouselvue_type_script_lang_js_componentsList,
  data: function data() {
    return {
      mobileLayout: window.innerWidth <= parseInt(variables["mobile-upper-limit"]),
      parentArray: [],
      element: null,
      parent: null,
      activeSlideIndex: null,
      nextSlideIndex: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.element = document.querySelector('.carousel-card');
    this.parent = this.element.parentNode;

    for (var i = 0; i < this.parent.children.length; i++) {
      if (this.parent.children[i].classList.contains('carousel-card')) {
        this.parentArray.push(this.parent.children[i]);
      }
    }

    window.addEventListener('resize', function () {
      _this.mobileLayout = window.innerWidth <= parseInt(variables["mobile-upper-limit"]);

      _this.renderLayout();
    });
    this.renderLayout();
    window.addEventListener('load', this.fixCardHeightMobile);
  },
  methods: {
    renderLayout: function renderLayout() {
      if (this.mobileLayout) {
        this.removePaginator();
        this.addPaginator(); //          for(let i = 0; i < this.parentArray.length; i++) {
        //            document.querySelector('.custom-carousel__paginator').children[i].addEventListener('click', (e) => {
        //              let activePaginatorIndex = this.getChildNumber(e.target);
        //              this.mobileCarousel(activePaginatorIndex);
        //            })
        //          }
        //          this.mobileSwipe(); //using CSS positioning
      } else {
        this.removePaginator();
        this.positionCarouselCards();

        for (var i = 0; i < this.parentArray.length; i++) {
          this.$el.children[i].removeAttribute("style");
        }
      }

      this.fixCardHeightMobile();
    },
    addPaginator: function addPaginator() {
      for (var i = 0; i < this.parentArray.length; i++) {
        var paginatorItem = document.createElement('div');
        paginatorItem.classList.add('custom-carousel__paginator-item');
        document.querySelector('.custom-carousel__paginator').appendChild(paginatorItem);

        if (i === this.nextSlideIndex) {
          document.querySelector('.custom-carousel__paginator-item').classList.add('custom-carousel__paginator-item--active');
        }
      }
    },
    removePaginator: function removePaginator() {
      var myNode = document.querySelector('.custom-carousel__paginator');

      while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
      }
    },
    getChildNumber: function getChildNumber(node) {
      return Array.prototype.indexOf.call(node.parentNode.childNodes, node);
    },
    mobileCarousel: function mobileCarousel(index) {
      var carouselPaginatorWrapper = document.querySelector('.custom-carousel__paginator');
      var slideWidth = document.querySelector('.carousel-card').offsetWidth;
      var carouselWrapperPadding = +window.getComputedStyle(document.querySelector('.custom-carousel')).paddingLeft.replace('px', '');

      for (var i = 0; i < this.parentArray.length; i++) {
        carouselPaginatorWrapper.children[i].classList.remove('custom-carousel__paginator-item--active');
      }

      carouselPaginatorWrapper.children[index].classList.add('custom-carousel__paginator-item--active');
      var endScrollPosition = parseInt(slideWidth * index + (20 * index + 30) - (window.innerWidth - Math.round(slideWidth)) / 2 + carouselWrapperPadding);
      var cardGallery = this.$el;
      var currentScroll = cardGallery.scrollLeft;
      this.mobileSmoothScroll(currentScroll, endScrollPosition, cardGallery);
    },
    positionCarouselCards: function positionCarouselCards() {
      var _this2 = this;

      if (!this.mobileLayout) {
        this.parentArray.forEach(function (el, i) {
          if (i + 1 < _this2.nextSlideIndex || i - 1 > _this2.nextSlideIndex) {
            el.classList.remove('carousel-card--next', 'carousel-card--previous', 'carousel-card--next-via-one', 'carousel-card--previous-via-one');

            if (i - 2 === _this2.nextSlideIndex || _this2.nextSlideIndex === _this2.parentArray.length - 2 && i === 0 || _this2.nextSlideIndex === _this2.parentArray.length - 1 && i === 1) {
              el.classList.add('carousel-card--next-via-one');
            } else if (i + 2 === _this2.nextSlideIndex || _this2.nextSlideIndex === 0 && i === _this2.parentArray.length - 2 || _this2.nextSlideIndex === 1 && i === _this2.parentArray.length - 1) {
              el.classList.add('carousel-card--previous-via-one');
            }
          }

          if (i + 1 === _this2.nextSlideIndex || _this2.nextSlideIndex === 0 && i === _this2.parentArray.length - 1) {
            el.classList.remove('carousel-card--next-via-one', 'carousel-card--previous-via-one');
            el.classList.add('carousel-card--previous');
          }

          if (i - 1 === _this2.nextSlideIndex || _this2.nextSlideIndex === _this2.parentArray.length - 1 && i === 0) {
            el.classList.remove('carousel-card--next-via-one', 'carousel-card--previous-via-one');
            el.classList.add('carousel-card--next');
          }
        });
      }
    },
    nextSlide: function nextSlide() {
      if (!this.mobileLayout) {
        for (var i = 0; i < this.parentArray.length; i++) {
          if (this.parent.children[i].classList.contains('carousel-card--active')) {
            this.activeSlideIndex = this.parentArray.indexOf(this.parent.children[i]);
            this.nextSlideIndex = (this.activeSlideIndex + 1) % this.parentArray.length ? this.activeSlideIndex + 1 : 0;
          }
        }

        document.querySelector('.carousel-card--next').classList.remove('carousel-card--next');
        document.querySelector('.carousel-card--previous').classList.remove('carousel-card--previous');
        document.querySelector('.carousel-card--next-via-one').classList.remove('carousel-card--next-via-one');
        document.querySelector('.carousel-card--previous-via-one').classList.remove('carousel-card--previous-via-one');
        this.parentArray[this.activeSlideIndex].classList.remove('carousel-card--active');
        this.parentArray[this.nextSlideIndex].classList.add('carousel-card--active');
        this.positionCarouselCards();
      }
    },
    previousSlide: function previousSlide() {
      if (!this.mobileLayout) {
        for (var i = 0; i < this.parentArray.length; i++) {
          if (this.parent.children[i].classList.contains('carousel-card--active')) {
            this.activeSlideIndex = this.parentArray.indexOf(this.parent.children[i]);
            this.nextSlideIndex = this.activeSlideIndex - 1 >= 0 ? this.activeSlideIndex - 1 : this.parentArray.length - 1;
          }
        }

        document.querySelector('.carousel-card--next').classList.remove('carousel-card--next');
        document.querySelector('.carousel-card--previous').classList.remove('carousel-card--previous');
        document.querySelector('.carousel-card--next-via-one').classList.remove('carousel-card--next-via-one');
        document.querySelector('.carousel-card--previous-via-one').classList.remove('carousel-card--previous-via-one');
        this.parentArray[this.activeSlideIndex].classList.remove('carousel-card--active');
        this.parentArray[this.nextSlideIndex].classList.add('carousel-card--active');
        this.positionCarouselCards();
      }
    },
    fixCardHeightMobile: function fixCardHeightMobile() {
      var _this3 = this;

      if (this.mobileLayout) {
        var maxHeight = 0;
        var carouselLength = this.$el.querySelectorAll('.carousel-card').length;
        setTimeout(function () {
          for (var i = 0; i < carouselLength; i++) {
            var cardHeight = +window.getComputedStyle(_this3.$el.querySelectorAll('.carousel-card')[i].querySelector('.rt-card__content')).height.replace('px', '');
            maxHeight = maxHeight < cardHeight ? cardHeight : maxHeight;
          }

          for (var j = 0; j < carouselLength; j++) {
            _this3.$el.querySelectorAll('.carousel-card')[j].style.height = maxHeight + 'px';
            _this3.$el.querySelectorAll('.carousel-card')[j].style.minHeight = maxHeight + 'px';
          } //            this.$refs.mobileWrapper.style.minHeight = maxHeight + 'px';

        }, 10);
      } else {
        for (var j = 0; j < this.$el.querySelectorAll('.carousel-card').length; j++) {
          this.$el.querySelectorAll('.carousel-card')[j].removeAttribute('style');
        }
      }
    },
    mobileSwipe: function mobileSwipe() {
      var carouselPaginatorWrapper = document.querySelector('.custom-carousel__paginator');
      var cardGallery = this.$el;
      var cardWidth = document.querySelector('.carousel-card').offsetWidth;
      var activePaginatorButton;
      var carouselWrapperPadding = +window.getComputedStyle(document.querySelector('.custom-carousel')).paddingLeft.replace('px', '');
      var isScrolling;
      this.$el.addEventListener('scroll', function () {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function () {
          var currentScroll = cardGallery.scrollLeft;
          activePaginatorButton = Math.floor((currentScroll + cardWidth / 2 + 20) / (cardWidth + 20));
          var endScrollPosition = parseInt(cardWidth * activePaginatorButton + (20 * activePaginatorButton + 27) - (window.innerWidth - Math.round(cardWidth)) / 2 + carouselWrapperPadding);

          for (var i = 0; i < document.querySelectorAll('.carousel-card').length; i++) {
            carouselPaginatorWrapper.children[i].classList.remove('custom-carousel__paginator-item--active');
          }

          ;
          carouselPaginatorWrapper.children[activePaginatorButton].classList.add('custom-carousel__paginator-item--active'); //            this.mobileSmoothScroll(currentScroll, endScrollPosition, cardGallery);
        }, 150);
      }, false);
    },
    mobileSmoothScroll: function mobileSmoothScroll(currentScroll, endScrollPosition, cardGallery) {
      if (currentScroll < endScrollPosition - 1 || currentScroll > endScrollPosition + 1) {
        if (currentScroll < endScrollPosition) {
          var _int = setInterval(function () {
            if (currentScroll > endScrollPosition - 20) currentScroll += 1;else if (currentScroll > endScrollPosition - 40) currentScroll += 3;else if (currentScroll > endScrollPosition - 80) currentScroll += 8;else if (currentScroll > endScrollPosition - 160) currentScroll += 18;else if (currentScroll > endScrollPosition - 200) currentScroll += 24;else if (currentScroll > endScrollPosition - 300) currentScroll += 40;
            cardGallery.scrollTo(currentScroll, 0);
            if (currentScroll >= endScrollPosition) clearInterval(_int);
          }, 5);
        } else {
          var _int2 = setInterval(function () {
            if (currentScroll < endScrollPosition + 20) currentScroll -= 1;else if (currentScroll < endScrollPosition + 40) currentScroll -= 3;else if (currentScroll < endScrollPosition + 80) currentScroll -= 8;else if (currentScroll < endScrollPosition + 160) currentScroll -= 18;else if (currentScroll < endScrollPosition + 200) currentScroll -= 24;else if (currentScroll < endScrollPosition + 300) currentScroll -= 40;
            cardGallery.scrollTo(currentScroll, 0);
            if (currentScroll <= endScrollPosition) clearInterval(_int2);
          }, 5);
        }
      }
    }
  },
  render: function render(h) {
    var _this4 = this;

    var leftArrow = function leftArrow() {
      return h("div", {
        "class": "custom-carousel__nav-item custom-carousel__left",
        on: {
          "click": _this4.previousSlide
        }
      }, [h("svg", {
        attrs: {
          width: "12px",
          height: "7px",
          viewBox: "0 0 12 7",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        },
        "class": "custom-carousel__left-arrow"
      }, [h("g", {
        attrs: {
          id: "Page-1",
          "stroke-width": "1"
        }
      }, [h("g", {
        attrs: {
          transform: "translate(-132.000000, -2341.000000)"
        }
      }, [h("g", {
        attrs: {
          id: "Group-3-Copy-2",
          transform: "translate(132.000000, 2332.000000)"
        }
      }, [h("polygon", {
        attrs: {
          id: "Shape-Copy",
          points: "10.6 9 6 13.3513514 1.4 9 0 10.3243243 6 16 12 10.3243243"
        }
      })])])])])]);
    };

    var rightArrow = function rightArrow() {
      return h("div", {
        "class": "custom-carousel__nav-item custom-carousel__right",
        on: {
          "click": _this4.nextSlide
        }
      }, [h("svg", {
        attrs: {
          width: "12px",
          height: "7px",
          viewBox: "0 0 12 7",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        },
        "class": "custom-carousel__right-arrow"
      }, [h("g", {
        attrs: {
          id: "Page-1",
          "stroke-width": "1"
        }
      }, [h("g", {
        attrs: {
          transform: "translate(-132.000000, -2341.000000)"
        }
      }, [h("g", {
        attrs: {
          id: "Group-3-Copy-2",
          transform: "translate(132.000000, 2332.000000)"
        }
      }, [h("polygon", {
        attrs: {
          id: "Shape-Copy",
          points: "10.6 9 6 13.3513514 1.4 9 0 10.3243243 6 16 12 10.3243243"
        }
      })])])])])]);
    };

    if (this.mobileLayout) {
      return h("div", {
        "class": "custom-carousel"
      }, [this.$slots["default"], h("div", {
        "class": "custom-carousel__nav"
      }, [h("div", {
        "class": "custom-carousel__paginator"
      })])]);
    } else {
      return h("div", {
        "class": "custom-carousel"
      }, [this.$slots["default"], h("div", {
        "class": "custom-carousel__nav"
      }, [leftArrow(), rightArrow(), h("div", {
        "class": "custom-carousel__paginator"
      })])]);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Card/CardCarousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardCarouselvue_type_script_lang_js_ = (CardCarouselvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Card/CardCarousel.vue
var CardCarousel_render, CardCarousel_staticRenderFns




/* normalize component */

var CardCarousel_component = normalizeComponent(
  Card_CardCarouselvue_type_script_lang_js_,
  CardCarousel_render,
  CardCarousel_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardCarousel = (CardCarousel_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Card/CardLayout.vue?vue&type=script&lang=js&

var CardLayoutvue_type_script_lang_js_componentsList = {};
/* harmony default export */ var CardLayoutvue_type_script_lang_js_ = ({
  name: "RtCardLayout",
  components: CardLayoutvue_type_script_lang_js_componentsList,
  props: {
    swiperOnMobile: {
      type: Boolean,
      "default": false
    },
    width: {
      type: Number,
      "default": 12
    },
    singleRow: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      layout: '',
      inTabs: false
    };
  },
  computed: {
    wrapperClass: function wrapperClass() {
      var className = 'card-layout';

      if (this.width) {
        className += " card-layout-".concat(this.width);
      }

      return className;
    }
  },
  mounted: function mounted() {
    this.specifyLayout();
    window.addEventListener('resize', this.specifyLayout); //      console.log(this.$el.parentNode.className === 'rt-tabs-content__item');

    this.inTabs = this.$el.parentNode.className === 'rt-tabs-content__item'; //      console.log(this.$parent.$el)
  },
  updated: function updated() {
    this.specifyCardClass();
    window.addEventListener('resize', this.specifyCardClass);
    this.inTabs = this.$el.parentNode.className === 'rt-tabs-content__item';
  },
  methods: {
    specifyLayout: function specifyLayout() {
      if (window.innerWidth <= parseInt(variables["tablet-upper-limit"]) && this.swiperOnMobile) {
        this.layout = 'swiper';
      } else {
        this.layout = 'grid';
      }
    },
    specifyCardClass: function specifyCardClass() {
      if (this.$slots.cards && window.innerWidth <= parseInt(variables["tablet-upper-limit"])) {
        this.$el.childNodes[0].childNodes[2].childNodes[0].childNodes.forEach(function (el) {
          el.classList !== undefined && el.classList.contains('rt-col-md-3') ? el.classList.add('rtk-carousel-slide') : null;
        }); //          this.singleRow ? this.$el.classList.add('row') : null;
        //          this.singleRow ? this.$el.parentNode.classList.add('rt-col') : null;
      } else if (!!this.$slots.cards && window.innerWidth <= parseInt(variables["laptop-upper-limit"]) && window.innerWidth >= parseInt(variables["laptop-lower-limit"])) {
        this.$refs.layout.childNodes.forEach(function (el) {
          el.classList !== undefined && el.classList.contains('rt-col-md-3') ? el.classList.add('rtk-carousel-slide') : null;
        }); //          this.singleRow ? this.$el.classList.add('row') : null;
        //          this.singleRow ? this.$el.parentNode.classList.remove('rt-col') : null;
      } else if (!!this.$slots.cards && window.innerWidth >= parseInt(variables["desktop-lower-limit"])) {
        this.$refs.layout.childNodes.forEach(function (el) {
          el.classList !== undefined && el.classList.contains('rtk-carousel-slide') ? el.classList.remove('rtk-carousel-slide') : null;
        }); //          this.singleRow ? this.$el.classList.remove('row'): null;
        //          this.singleRow ? this.$el.parentNode.classList.remove('rt-col') : null;
      }
    }
  },
  render: function render(h) {
    if (this.inTabs) {
      if (this.layout === 'swiper') {
        return h("div", [h("rt-swiper", [this.$slots.cards]), h("div", {
          "class": "row"
        }, [this.$slots["side-text"]])]);
      } else {
        return h("div", {
          "class": "row"
        }, [h("div", {
          "class": "specified-card-layout",
          ref: "layout"
        }, [h("div", {
          "class": this.wrapperClass
        }, [h("div", {
          "class": "rt-col"
        }, [h("div", {
          "class": "row"
        }, [this.$slots.cards])])]), this.$slots["side-text"]])]);
      }
    } else {
      if (this.layout === 'swiper') {
        return h("div", [h("rt-swiper", [this.$slots.cards]), h("div", {
          "class": "rt-container"
        }, [h("div", {
          "class": "rt-col"
        }, [h("div", {
          "class": "row"
        }, [this.$slots["side-text"]])])])]);
      } else {
        return h("div", {
          "class": "rt-container"
        }, [h("div", {
          "class": "rt-col"
        }, [h("div", {
          "class": "row"
        }, [h("div", {
          "class": "specified-card-layout",
          ref: "layout"
        }, [h("div", {
          "class": this.wrapperClass
        }, [h("div", {
          "class": "rt-col"
        }, [h("div", {
          "class": "row"
        }, [this.$slots.cards])])]), this.$slots["side-text"]])])])]);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Card/CardLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var Card_CardLayoutvue_type_script_lang_js_ = (CardLayoutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Card/CardLayout.vue
var CardLayout_render, CardLayout_staticRenderFns




/* normalize component */

var CardLayout_component = normalizeComponent(
  Card_CardLayoutvue_type_script_lang_js_,
  CardLayout_render,
  CardLayout_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CardLayout = (CardLayout_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Game/Arrow/GameArrow.vue?vue&type=script&lang=js&
/* harmony default export */ var GameArrowvue_type_script_lang_js_ = ({
  name: "RtGameArrow",
  mounted: function mounted() {},
  render: function render(h) {
    return h("svg", {
      attrs: {
        width: "35px",
        height: "35px",
        viewBox: "0 0 62 32",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg"
      },
      "class": "rt-game-arrows"
    }, [h("g", {
      attrs: {
        id: "Page-1",
        stroke: "none",
        "stroke-width": "1",
        fill: "none",
        "fill-rule": "evenodd"
      }
    }, [h("g", {
      attrs: {
        id: "553-LP_Igrovoi_v1",
        transform: "translate(-703.000000, -744.000000)",
        fill: "#FFFFFF",
        "fill-rule": "nonzero"
      }
    }, [h("polygon", {
      attrs: {
        id: "Path-3",
        points: "703 744.090964 733.885222 775.112818 764.995496 744 762.183171 744 733.885222 772.305037 705.599095 744"
      }
    })])])]);
  }
});
// CONCATENATED MODULE: ./src/components/Game/Arrow/GameArrow.vue?vue&type=script&lang=js&
 /* harmony default export */ var Arrow_GameArrowvue_type_script_lang_js_ = (GameArrowvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Game/Arrow/GameArrow.vue
var GameArrow_render, GameArrow_staticRenderFns




/* normalize component */

var GameArrow_component = normalizeComponent(
  Arrow_GameArrowvue_type_script_lang_js_,
  GameArrow_render,
  GameArrow_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var GameArrow = (GameArrow_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Banner/BannerPaginatorItem.vue?vue&type=template&id=6d6f464d&
var BannerPaginatorItemvue_type_template_id_6d6f464d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"circle-switcher__item",class:_vm.paginatorItemClass,style:(_vm.paginatorItemStyle),on:{"click":_vm.setActiveItem}},[_c('svg',{staticClass:"circle-switcher__icon",class:_vm.paginatorItemIconClass,attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 9 9"}},[_c('circle',{attrs:{"r":"4","cx":"4.5","cy":"4.5","fill":"transparent"}})])])}
var BannerPaginatorItemvue_type_template_id_6d6f464d_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Banner/BannerPaginatorItem.vue?vue&type=template&id=6d6f464d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Banner/BannerPaginatorItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var dashOffsetStart = 180;
var dashOffsetEnd = 150;
/* harmony default export */ var BannerPaginatorItemvue_type_script_lang_js_ = ({
  name: "RtBannerPaginatorItem",
  props: {
    index: {
      type: Number,
      "default": null
    },
    sleepTime: {
      type: Number,
      "default": null
    },
    isPause: {
      type: Boolean,
      "default": false
    },
    isStopped: {
      type: Boolean,
      "default": false
    }
  },
  inject: {
    RtBanners: {}
  },
  data: function data() {
    return {
      dashOffset: dashOffsetStart,
      id: Math.random().toString(36).slice(4),
      rId: null
    };
  },
  computed: {
    isAnimated: function isAnimated() {
      return this.RtBanners.activeIndex === this.index && !this.isPause && !this.isStopped;
    },
    paginatorItemClass: function paginatorItemClass() {
      var classArray = {};

      if (this.RtBanners.activeIndex === this.index) {
        classArray["rt-banner--run-timer"] = true;
      }

      if (this.isPause && !this.isStopped) {
        classArray["rt-banner--pause"] = true;
      }

      if (this.isStopped) {
        classArray["rt-banner--is-stopped"] = true;
      }

      return classArray;
    },
    paginatorItemStyle: function paginatorItemStyle() {
      if (this.sleepTime && !this.isStopped) {
        return {
          strokeDashoffset: this.dashOffset
        };
      }
    },
    paginatorItemIconClass: function paginatorItemIconClass() {
      var classArray = {};

      if (this.RtBanners.activeIndex === this.index) {
        classArray["circle-switcher__item--active"] = true;
      }

      return classArray;
    }
  },
  mounted: function mounted() {
    var _this = this;

    if (this.isAnimated) {
      animate.start({
        draw: function draw(dist, rId) {
          _this.rId = rId;
          _this.dashOffset = dashOffsetStart + (dashOffsetEnd - dashOffsetStart) * dist;
        },
        duration: this.sleepTime,
        onLeave: function onLeave() {},
        timing: animate.timingFunctions['linear']
      });
    }
  },
  destroyed: function destroyed() {
    if (this.isAnimated) {
      animate.stop(this.rId);
    }
  },
  methods: {
    setActiveItem: function setActiveItem() {
      this.RtBanners.setActiveItem(this.index);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Banner/BannerPaginatorItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Banner_BannerPaginatorItemvue_type_script_lang_js_ = (BannerPaginatorItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Banner/BannerPaginatorItem.vue





/* normalize component */

var BannerPaginatorItem_component = normalizeComponent(
  Banner_BannerPaginatorItemvue_type_script_lang_js_,
  BannerPaginatorItemvue_type_template_id_6d6f464d_render,
  BannerPaginatorItemvue_type_template_id_6d6f464d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BannerPaginatorItem = (BannerPaginatorItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Banner/Banner.vue?vue&type=script&lang=js&
 // import debounce from "debounce";


var Bannervue_type_script_lang_js_componentsList = {};
Bannervue_type_script_lang_js_componentsList[BannerPaginatorItem.name] = BannerPaginatorItem;
/* harmony default export */ var Bannervue_type_script_lang_js_ = ({
  name: "RtBanner",
  components: Bannervue_type_script_lang_js_componentsList,
  props: {
    scrollToNextImage: {
      type: Boolean,
      "default": false
    },
    autoNextOnlyOnDesktop: {
      type: Boolean,
      "default": false
    },
    hasCustomContent: {
      type: Boolean,
      "default": false
    },
    withoutEmptyColumn: {
      type: Boolean,
      "default": false
    },
    withoutSecondEmptyColumn: {
      type: Boolean,
      "default": false
    },
    contentMobileHeight: {
      type: [Number, String],
      "default": null
    },
    contentMobileMinHeight: {
      type: [Number, String],
      "default": null
    },
    paginatorPosition: {
      type: String,
      "default": null
    },
    justify: {
      type: String,
      "default": null
    },
    contentMinHeight: {
      type: [Number, String],
      "default": null
    },
    contentHeight: {
      type: [Number, String],
      "default": null
    },
    isFullscreenImage: {
      type: Boolean,
      "default": false
    },
    noTriangle: {
      type: Boolean,
      "default": false
    },
    roundAngles: {
      type: Boolean,
      "default": false
    },
    backgroundColor: {
      type: String,
      "default": "none"
    },
    isWhiteColor: {
      type: Boolean,
      "default": false
    },
    sleepTime: {
      type: Number,
      "default": 5000
    },
    bannerLogo: {
      type: String,
      "default": null
    },
    setStopOnClick: {
      type: Boolean,
      "default": false
    },
    dontPauseOnHover: {
      type: Boolean,
      "default": false
    },
    bannerItemsWithCustomContent: {
      type: Boolean,
      "default": false
    },
    mobileImageHeight: {
      type: String,
      "default": null
    },
    mobileImageMaxHeight: {
      type: String,
      "default": null
    },
    isBackgroundBanner: {
      type: Boolean,
      "default": false
    },
    hasCustomHeight: {
      type: String,
      "default": null
    },
    hidePaginatorOnMobile: {
      type: Boolean,
      "default": false
    },
    hidePaginatorOnTablet: {
      type: Boolean,
      "default": false
    },
    //      categoryBanner: {
    //        type: Boolean,
    //        default: null
    //      },
    hasImageOnMobile: {
      type: Boolean,
      "default": false
    },
    fixedImage: {
      type: Boolean,
      "default": false
    },
    transparentBackgroundImage: {
      type: Boolean,
      "default": false
    },
    mobileImageOnTop: {
      type: Boolean,
      "default": false
    },
    switchOffTimer: {
      type: Boolean,
      "default": false
    },
    backgroundImageLeft: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      deviceType: 2,
      isMobile: false,
      isPause: false,
      touchstartX: null,
      touchendX: null,
      stopAnimation: false,
      RtBanners: {
        id: null,
        isMobile: false,
        items: [],
        activeIndex: -1,
        setActiveItem: null,
        setStartTimer: null,
        imageOnMobile: false,
        colorFillOnMobile: false
      },
      isOpenListOnTop: false,
      isStopped: false,
      localSleepTime: 5000,
      showNoTriangle: false
    };
  },
  provide: function provide() {
    var RtBanners = this.RtBanners;
    return {
      RtBanners: RtBanners
    };
  },
  computed: {
    switcherClass: function switcherClass() {
      var className = "circle-switcher";

      if (this.paginatorPosition) {
        className += " circle-switcher--" + this.paginatorPosition;
      }

      if (this.hidePaginatorOnMobile) {
        className += " md-d-none";
      }

      if (this.hidePaginatorOnTablet) {
        className += " td-d-none";
      }

      return className;
    },
    bannerClass: function bannerClass() {
      var className = "rt-banner rt-banner-id__" + this.RtBanners.id || false;

      if (this.fixedImage) {
        className += " rt-banner--fixed-image";
      }

      var activeIndex = this.RtBanners.activeIndex;

      if (this.RtBanners.items[activeIndex]) {
        if (this.isBackgroundBanner) {
          className += " rt-banner--has-absolute-position";
        }

        if (this.RtBanners.items[activeIndex].backgroundColor) {
          className += " rt-banner--background-" + this.RtBanners.items[activeIndex].backgroundColor;
        }

        if (this.RtBanners.items[activeIndex].patternBackground) {
          var bgColor = this.RtBanners.items[activeIndex].patternLeftColor.replace(/^(b2b\-)|(b2c\-)/i, "");
          className += " rt-banner--background-" + bgColor;
        }

        if (this.isFullscreenImage) {
          className += " rt-banner--full-screen";

          if (this.justify) {
            className += " justify-" + this.justify;
          }
        }

        if (this.RtBanners.items[activeIndex].isWhiteColor) {
          className += " rt-banner--color-white";
        }

        if (this.roundAngles) {
          className += " rtb-banner";
        }

        if (this.RtBanners.items[this.RtBanners.activeIndex].isGameBannerItem) {
          className += " rt-banner--for-game";
        } //          if (this.categoryBanner) {
        //            className += " rtb-banner--category";
        //          }


        if (this.mobileImageOnTop) {
          className += " rt-banner--image-ontop";
        }

        if (this.RtBanners.items[activeIndex].patternType && this.RtBanners.items[activeIndex].patternType === 3) {
          className += " rt-banner--full-screen";
        }

        if (this.RtBanners.items[activeIndex] && this.RtBanners.items[activeIndex].halfHeightImage) {
          className += " rt-banner--image-half-top";
        }
      }

      return className;
    },
    bannerStyle: function bannerStyle() {
      var styles = {};

      if (!this.RtBanners.isMobile) {
        if (this.contentMinHeight !== null) {
          styles.minHeight = this.normalizeVariable(this.contentMinHeight);
        }

        if (this.contentHeight) {
          styles.height = this.normalizeVariable(this.contentHeight);
        }
      } else {
        if (this.contentMobileMinHeight !== null) {
          styles.minHeight = this.normalizeVariable(this.contentMobileMinHeight);
        }

        if (this.contentMobileHeight !== null) {
          styles.height = this.normalizeVariable(this.contentMobileHeight);
        }
      }

      if (this.hasCustomHeight) {
        styles.height = this.normalizeVariable(this.hasCustomHeight);
      }

      return styles;
    },
    imageClass: function imageClass() {
      var className = "rt-banner-image rt-banner-image--main";
      var activeIndex = this.RtBanners.activeIndex;

      if (this.RtBanners.items[activeIndex] && this.RtBanners.items[activeIndex].patternBackground) {
        this.backgroundPattern = this.RtBanners.items[activeIndex].patternBackground;
        this.showNoTriangle = true;
        var bgColor = "";
        bgColor = this.RtBanners.items[activeIndex].patternTopColor.replace(/^(b2b\-)|(b2c\-)/i, "");
        className += " color-block--" + bgColor + "";
      } else {
        this.showNoTriangle = false;
      }

      if (this.transparentBackgroundImage) {
        className += " rt-banner-image--contain";
      }

      if (this.backgroundImageLeft) {
        className += " rt-banner-image--left";
      }

      if (this.hasImageOnMobile || !!this.RtBanners.items[activeIndex] && !!this.RtBanners.items[activeIndex].imageOnMobile) {
        className += " rt-banner-image--mobile-visible";
      }

      if (this.RtBanners.items[activeIndex] && this.RtBanners.items[activeIndex].colorFillOnMobile) {
        className += " rt-banner-image--color-fill";
      }

      return className;
    },
    imageStyle: function imageStyle() {
      var styles = {};
      var activeIndex = this.RtBanners.activeIndex;

      if (this.RtBanners.items[activeIndex] && this.RtBanners.items[activeIndex].backgroundImage) {
        styles.backgroundImage = "url(" + this.RtBanners.items[activeIndex].backgroundImage + ")";
      } else {
        styles.backgroundImage = "none";
      }

      if (this.RtBanners.items[activeIndex] && this.RtBanners.items[activeIndex].backgroundVideo) {
        this.backgroundVideo = this.RtBanners.items[activeIndex].backgroundVideo;
      } else {
        this.backgroundVideo = null;
      }

      if (this.mobileImageHeight && this.RtBanners.isMobile) {
        styles.height = this.mobileImageHeight;
      }

      if (this.mobileImageMaxHeight && this.RtBanners.isMobile) {
        styles.maxHeight = this.mobileImageMaxHeight;
      }

      return styles;
    }
  },
  mounted: function mounted() {
    this.setLocalSleepTime();

    if (this.RtBanners.items.length > 0 && this.RtBanners.items[0].id) {
      if (this.RtBanners.activeIndex < 0) {
        this.RtBanners.activeIndex = 0;
      }

      this.setStartTimer();
      this.RtBanners.$el = this.$el;
    }

    this.addListener();
    this.calculateScroll();
    this.calculateMobileOptions();
    this.setDeviceType();
    this.changePatternType();
    this.changePatternTypeOnResize();
  },
  beforeMount: function beforeMount() {
    this.RtBanners.id = this._uid || Math.random(Date.now() + 1);
    this.RtBanners.setActiveItem = this.setActiveItem;
    this.RtBanners.setStartTimer = this.setStartTimer;
  },
  beforeUpdate: function beforeUpdate() {
    this.removeListener();
  },
  updated: function updated() {
    this.addListener();
    this.calculateScroll();
  },
  beforeDestroy: function beforeDestroy() {
    this.RtBanners.items = [];
    this.removeListener();
  },
  drawOrientation: null,
  nextImageIndex: null,
  methods: {
    setLocalSleepTime: function setLocalSleepTime() {
      if (this.scrollToNextImage) {
        this.localSleepTime = this.sleepTime + 300;
      } else {
        this.localSleepTime = this.sleepTime;
      }
    },
    normalizeVariable: function normalizeVariable(variable) {
      if (typeof variable === "number") {
        variable += "px";
      }

      return variable;
    },
    setStopAnimation: function setStopAnimation() {
      this.isPause = true;
    },
    removeStopAnimation: function removeStopAnimation() {
      this.isPause = false;
      this.setStartTimer();
    },
    addListener: function addListener() {
      this.$el.addEventListener("touchstart", this.setTouchStart, {
        passive: true
      });
      this.$el.addEventListener("touchend", this.setTouchEnd, {
        passive: true
      });

      if (!this.dontPauseOnHover) {
        this.$el.addEventListener("mouseenter", this.setStopAnimation, {
          passive: true
        });
        this.$el.addEventListener("mouseleave", this.removeStopAnimation, {
          passive: true
        });
      }

      window.addEventListener("scroll", this.debounceCalculateScroll, {
        passive: false
      });
      window.addEventListener("resize", this.debounceCalculateResize, {
        passive: false
      });

      if (this.setStopOnClick) {
        this.$el.addEventListener("mousedown", this.stopPlaying, {
          passive: true
        });
      }
    },
    removeListener: function removeListener() {
      this.$el.removeEventListener("touchstart", this.setTouchStart);
      this.$el.removeEventListener("touchend", this.setTouchEnd);
      window.removeEventListener("scroll", this.debounceCalculateScroll);
      window.removeEventListener("resize", this.debounceCalculateResize);

      if (!this.dontPauseOnHover) {
        this.$el.removeEventListener("mouseenter", this.setStopAnimation);
        this.$el.removeEventListener("mouseleave", this.removeStopAnimation);
      }

      if (this.setStopOnClick) {
        this.$el.removeEventListener("mousedown", this.stopPlaying);
      }
    },
    stopVideo: function stopVideo() {
      if (this.$refs.video) {
        this.$refs.video.pause();
      }
    },
    playVideo: function playVideo() {
      var _this = this;

      if (this.backgroundVideo) {
        if (this.$refs.video) {
          var playPromise = this.$refs.video.play();
          playPromise["catch"](function (error) {});
        } else {
          setTimeout(function () {
            _this.playVideo();
          }, 100);
        }
      }
    },
    debounceCalculateScroll: function debounceCalculateScroll() {
      this.calculateScroll();
    },
    debounceCalculateResize: function debounceCalculateResize() {
      this.calculateScroll();
      this.calculateMobileOptions();
    },
    calculateMobileOptions: function calculateMobileOptions() {
      if (this.contentMobileHeight !== null || this.contentMobileMinHeight !== null || this.mobileImageHeight !== null || this.mobileImageMaxHeight !== null) {
        var isMobile = window.innerWidth <= parseInt(variables["mobile-upper-limit"]);

        if (this.RtBanners.isMobile !== isMobile) {
          this.RtBanners.isMobile = isMobile;
          this.isMobile = isMobile;
        }
      }
    },
    calculateScroll: function calculateScroll() {
      var _this2 = this;

      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var el = this.$el;
      var deltaY = Math.max(window.innerHeight, el.offsetHeight);

      if (el && typeof el.getBoundingClientRect === "function" && (el.getBoundingClientRect().top > deltaY || el.getBoundingClientRect().top < -1 * deltaY)) {
        if (!this.stopAnimation) {
          this.stopVideo();
        }

        this.stopAnimation = true;
      } else {
        if (this.stopAnimation) {
          var index = (this.RtBanners.activeIndex + 1) % this.RtBanners.items.length;

          if (this.scrollToNextImage) {
            this.$options.nextImageIndex = index;
            setTimeout(function () {
              _this2.RtBanners.activeIndex = index;
              _this2.$options.nextImageIndex = null;
            }, 400);
          }
        }

        this.stopAnimation = false;
      }

      this.playVideo();
    },
    stopPlaying: function stopPlaying() {
      if (this.setStopOnClick) {
        this.isStopped = true;
      }
    },
    setTouchStart: function setTouchStart(e) {
      this.touchstartX = e.changedTouches[0].screenX;
    },
    setTouchEnd: function setTouchEnd(e) {
      this.touchendX = e.changedTouches[0].screenX;
      this.calculateSwipe();
    },
    calculateSwipe: function calculateSwipe() {
      if (Math.abs(this.touchendX - this.touchstartX) > 50) {
        if (this.touchendX < this.touchstartX) {
          this.getNextSlide();
        } else {
          this.getPreviousSlide();
        }
      }
    },
    getNextSlide: function getNextSlide() {
      var _this3 = this;

      if (!this.RtBanners.animation) {
        var index = this.RtBanners.activeIndex;
        index++;

        if (index >= this.RtBanners.items.length) {
          index = 0;
        }

        if (this.scrollToNextImage) {
          if (!this.$options.animationHasBeenStart) {
            this.$options.drawOrientation = "next";
            this.$options.animationHasBeenStart = true;
            this.setNextActiveIndex(index);
            this.createNewBannerImage().then(function () {
              _this3.moveBannerImages().then();
            });
          }
        } else {
          this.setActiveIndex(index);
        }
      }
    },
    getPreviousSlide: function getPreviousSlide() {
      var _this4 = this;

      var index = this.RtBanners.activeIndex;
      index--;

      if (index < 0) {
        index = this.RtBanners.items.length - 1;
      }

      if (this.scrollToNextImage) {
        if (!this.$options.animationHasBeenStart) {
          this.$options.drawOrientation = "previous";
          this.$options.animationHasBeenStart = true;
          this.setNextActiveIndex(index);
          this.createNewBannerImage().then(function () {
            _this4.moveBannerImages().then();
          });
        }
      } else {
        this.setActiveIndex(index);
      }
    },
    setActiveIndex: function setActiveIndex(index) {
      this.$set(this.RtBanners, "activeIndex", index);
    },
    setNextActiveIndex: function setNextActiveIndex(index) {
      var _this5 = this;

      this.$options.nextImageIndex = index;
      setTimeout(function () {
        _this5.setActiveIndex(index);

        _this5.$options.nextImageIndex = null;
      }, 350);
    },
    setActiveItem: function setActiveItem(index) {
      var _this6 = this;

      if (this.scrollToNextImage) {
        this.$options.nextImageIndex = index;
        setTimeout(function () {
          _this6.$set(_this6.RtBanners, "activeIndex", index);

          _this6.$options.nextImageIndex = null;

          _this6.setStartTimer();
        }, 400);
      } else {
        this.$set(this.RtBanners, "activeIndex", index);
        this.setStartTimer();
      }
    },
    createNewBannerImage: function createNewBannerImage() {
      var _this7 = this;

      return new Promise(function (resolve, reject) {
        var nextBannerImage = document.createElement("div");
        nextBannerImage.classList.add("rt-banner-image", "rt-banner-image--next");

        if (_this7.isMobile && _this7.mobileImageMaxHeight) {
          nextBannerImage.style.height = _this7.mobileImageMaxHeight;
          nextBannerImage.style.maxHeight = _this7.mobileImageMaxHeight;
        }

        var nextImageIndex = _this7.$options.nextImageIndex;

        if (nextBannerImage) {
          if (_this7.$options.drawOrientation === "next") {
            nextBannerImage.style.left = "100vw";
          } else {
            nextBannerImage.style.left = "-100vw";
          }

          if (_this7.RtBanners.items[nextImageIndex]) {
            nextBannerImage.style.backgroundImage = "url(" + _this7.RtBanners.items[nextImageIndex].backgroundImage + ")";
          }

          _this7.$el.appendChild(nextBannerImage);
        }

        setTimeout(function () {
          resolve();
        }, 20);
      });
    },
    setStartTimer: function setStartTimer() {
      var _this8 = this;

      if (!this.switchOffTimer) {
        var RtBanners = this.RtBanners;

        if (RtBanners && !this.isStopped && RtBanners.activeIndex >= 0) {
          if (RtBanners.timer) {
            clearTimeout(RtBanners.timer);
          }

          var sleepTime = RtBanners.items[RtBanners.activeIndex].slideTime || this.sleepTime;

          if (this.scrollToNextImage) {
            sleepTime += 1000;
          }

          RtBanners.timer = setTimeout(function () {
            if (!_this8.autoNextOnlyOnDesktop || _this8.deviceType === 1) {
              if (!_this8.stopAnimation && !_this8.isPause) {
                var index = (RtBanners.activeIndex + 1) % RtBanners.items.length;

                if (_this8.scrollToNextImage) {
                  _this8.getNextSlide();
                } else {
                  _this8.setActiveIndex(index);
                }
              }
            }

            if (RtBanners.items.length > 1) {
              _this8.setStartTimer();
            }
          }, sleepTime);
        }
      }
    },
    stopAnimationStart: function stopAnimationStart() {
      var _this9 = this;

      return new Promise(function (resolve, reject) {
        var nextImage = _this9.$el.querySelector(".rt-banner-image--next");

        var mainImage = _this9.$el.querySelector(".rt-banner-image--main");

        if (nextImage) {
          nextImage.classList.add("rt-banner-image--stop-transition");
        }

        mainImage.classList.add("rt-banner-image--stop-transition");
        setTimeout(function () {
          resolve();
        }, 300);
      });
    },
    stopAnimationEnd: function stopAnimationEnd() {
      var _this10 = this;

      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          var nextImage = _this10.$el.querySelector(".rt-banner-image--next");

          var mainImage = _this10.$el.querySelector(".rt-banner-image--main");

          if (nextImage) {
            nextImage.classList.remove("rt-banner-image--stop-transition");
          }

          mainImage.classList.remove("rt-banner-image--stop-transition");
          setTimeout(function () {
            resolve();
          }, 100);
        }, 10);
      });
    },
    moveBannerImages: function moveBannerImages() {
      var _this11 = this;

      return new Promise(function (resolve, reject) {
        var nextBannerImage = document.querySelector(".rt-banner-image--next");
        var mainBannerImage = document.querySelector(".rt-banner-image--main");
        var nextImageIndex = _this11.$options.nextImageIndex;
        var activeImageIndex = _this11.RtBanners.activeIndex;

        if (nextBannerImage) {
          nextBannerImage.style.left = 0;
        }

        _this11.$el.classList.add("rt-banner--hide-content");

        if (_this11.$options.drawOrientation === "next") {
          mainBannerImage.style.left = "-100vw";
          nextBannerImage.style.left = "0";
        } else {
          mainBannerImage.style.left = "100vw";
          nextBannerImage.style.left = "0";
        }

        setTimeout(function () {
          _this11.stopAnimationStart().then(function () {
            _this11.clearMovedBannerImages().then();
          });
        }, 450);
      });
    },
    clearStyleMainBanner: function clearStyleMainBanner() {
      var _this12 = this;

      return new Promise(function (resolve, reject) {
        var mainBannerImage = document.querySelector(".rt-banner-image--main");
        _this12.$options.drawOrientation = null;
        mainBannerImage.style.transitionDuration = 0;
        setTimeout(function () {
          mainBannerImage.style.left = "0";
          setTimeout(function () {
            mainBannerImage.style.transitionDuration = null;
            resolve();
          }, 10);
        }, 10);
      });
    },
    clearMovedBannerImages: function clearMovedBannerImages() {
      var _this13 = this;

      return new Promise(function (resolve) {
        _this13.stopAnimationStart().then(function () {
          _this13.clearStyleMainBanner().then(function () {
            _this13.removeNewBannerImage().then(function () {
              _this13.stopAnimationEnd().then(function () {
                resolve();
              });
            });
          });
        });
      });
    },
    removeNewBannerImage: function removeNewBannerImage() {
      var _this14 = this;

      return new Promise(function (resolve, reject) {
        var nextBannerImage = document.querySelector(".rt-banner-image--next");
        _this14.$options.animationHasBeenStart = false;

        if (nextBannerImage) {
          nextBannerImage.parentNode.removeChild(nextBannerImage);

          _this14.$el.classList.remove("rt-banner--hide-content");
        }

        resolve();
      });
    },
    changePatternTypeOnResize: function changePatternTypeOnResize() {
      var _this15 = this;

      window.addEventListener("resize", function () {
        _this15.setDeviceType();

        _this15.changePatternType();
      });
    },
    setDeviceType: function setDeviceType() {
      if (window.innerWidth < parseInt(variables["mobile-upper-limit"])) {
        this.deviceType = 3;
      } else if (window.innerWidth < parseInt(variables["tablet-upper-limit"])) {
        this.deviceType = 2;
      } else {
        this.deviceType = 1;
      }
    },
    changePatternType: function changePatternType() {
      if (this.RtBanners.items[this.RtBanners.activeIndex] !== undefined && this.RtBanners.items[this.RtBanners.activeIndex].imageOnMobile !== undefined) {
        if (window.innerWidth <= parseInt(variables["mobile-upper-limit"])) {
          this.RtBanners.items[this.RtBanners.activeIndex].patternType = 1;
        } else {
          this.RtBanners.items[this.RtBanners.activeIndex].patternType = 2;
        }
      }
    }
  },
  render: function render(h) {
    var _this16 = this;

    var link = function link() {
      if (_this16.RtBanners && _this16.RtBanners.items && _this16.RtBanners.items[_this16.RtBanners.activeIndex] && _this16.RtBanners.items[_this16.RtBanners.activeIndex].link) {
        return h("a", {
          attrs: {
            href: _this16.RtBanners.items[_this16.RtBanners.activeIndex].link,
            target: _this16.RtBanners.items[_this16.RtBanners.activeIndex].linkTarget
          },
          "class": "rt-banner-content__link"
        });
      } else {
        return null;
      }
    };

    var gradient = function gradient() {
      if (!!_this16.RtBanners.items[_this16.RtBanners.activeIndex] && !!_this16.RtBanners.items[_this16.RtBanners.activeIndex].backgroundImage) {
        return h("div", {
          "class": "rt-banner-image--mobile-gradient"
        });
      }
    };

    var paginatorItem = function paginatorItem() {
      return _this16.RtBanners.items.map(function (option, index) {
        var sleepTime = _this16.localSleepTime;

        if (option["slideTime"]) {
          sleepTime = option["slideTime"];

          if (_this16.scrollToNextImage) {
            sleepTime += 1000;
          }
        }

        if (!_this16.autoNextOnlyOnDesktop && _this16.deviceType > 1) {
          sleepTime = 0;
        }

        return h("rt-banner-paginator-item", {
          key: "paginator-index" + Math.random().toString(5).slice(4),
          attrs: {
            "is-stopped": _this16.isStopped,
            "sleep-time": _this16.isMobile ? null : sleepTime,
            "is-pause": _this16.isMobile ? false : _this16.isPause,
            index: index
          }
        });
      });
    };

    var paginator = function paginator() {
      if (_this16.RtBanners.items && _this16.RtBanners.items.length > 1) {
        return h("div", {
          "class": _this16.switcherClass
        }, [h("div", {
          "class": "circle-switcher-container"
        }, [paginatorItem()])]);
      } else {
        return null;
      }
    };

    var leftTriangle = function leftTriangle() {
      if (!_this16.isFullscreenImage && !_this16.noTriangle && !_this16.showNoTriangle) {
        return h("svg", {
          "class": "rt-banner-triangle",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 185 500"
          },
          style: "transform: translate(-50% 0)"
        }, [h("polygon", {
          attrs: {
            points: "0 0,0 500,185 0 "
          }
        })]);
      } else {
        return null;
      }
    };

    var rightTriangle = function rightTriangle() {
      if (!_this16.isFullscreenImage && !_this16.noTriangle && !_this16.showNoTriangle) {
        return h("svg", {
          "class": "rt-banner-right-triangle",
          attrs: {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 185 500"
          }
        }, [h("polygon", {
          attrs: {
            points: "0 500,185 0,0 0"
          }
        })]);
      } else {
        return null;
      }
    };

    var video = function video() {
      if (_this16.backgroundVideo) {
        return h("video", {
          ref: "video",
          attrs: {
            src: _this16.backgroundVideo,
            muted: true
          },
          "class": "rt-banner-video__content"
        });
      } else {
        return null;
      }
    };

    var pattern = function () {
      if (_this16.backgroundPattern && !!_this16.RtBanners.items[_this16.RtBanners.activeIndex].patternTopColor) {
        return h("rt-pattern", {
          attrs: {
            "pattern-type": Number(_this16.RtBanners.items[_this16.RtBanners.activeIndex].patternType),
            "top-color": _this16.RtBanners.items[_this16.RtBanners.activeIndex].patternTopColor,
            "left-color": _this16.RtBanners.items[_this16.RtBanners.activeIndex].patternLeftColor,
            "right-color": _this16.RtBanners.items[_this16.RtBanners.activeIndex].patternRightColor
          }
        });
      } else {
        return null;
      }
    }();

    var logo = function logo() {
      if (_this16.bannerLogo) {
        return h("div", {
          "class": "rt-banner-logo rt-container"
        }, [h("div", {
          "class": "rt-col-12"
        }, [h("img", {
          attrs: {
            src: _this16.bannerLogo,
            alt: ""
          },
          "class": "rt-banner-logo__image"
        })])]);
      } else {
        return null;
      }
    };

    var emptyColumn = function emptyColumn() {
      if (!_this16.withoutEmptyColumn) {
        return h("div", {
          "class": "rt-col-1 md-d-none td-d-none"
        });
      } else {
        return null;
      }
    };

    var secondEmptyColumn = function secondEmptyColumn() {
      if (!_this16.withoutSecondEmptyColumn) {
        return h("div", {
          "class": "rt-col-1 md-d-none td-d-none"
        });
      } else {
        return null;
      }
    };

    var bannerContent = function bannerContent() {
      if (_this16.hasCustomContent) {
        return h("div", {
          "class": "row"
        }, [h("div", {
          "class": "rt-col-12 d-flex"
        }, [_this16.$slots["default"]])]);
      } else if (_this16.withoutEmptyColumn && _this16.withoutSecondEmptyColumn) {
        return h("div", {
          "class": "rt-col-12"
        }, [h("div", {
          "class": "row"
        }, [h("div", {
          "class": "rt-col-6 rt-col-md-3 rt-col-td-3"
        }, [_this16.$slots["default"]])])]);
      } else {
        return h("div", {
          "class": "rt-col-12"
        }, [h("div", {
          "class": "row"
        }, [emptyColumn(), h("div", {
          "class": "rt-col-4 rt-col-md-3 height-fill rt-col-td-3"
        }, [_this16.$slots["default"]]), secondEmptyColumn()])]);
      }
    };

    return h("div", {
      "class": this.bannerClass,
      style: this.bannerStyle
    }, [h("div", {
      "class": "rt-container rt-banner-container"
    }, [link(), bannerContent()]), paginator(), h("div", {
      style: this.imageStyle,
      "class": this.imageClass + (this.imageOnMobile ? " rt-banner-image--mobile-visible" : "")
    }, [leftTriangle(), video(), rightTriangle(), pattern, gradient()]), logo()]);
  }
});
// CONCATENATED MODULE: ./src/components/Banner/Banner.vue?vue&type=script&lang=js&
 /* harmony default export */ var Banner_Bannervue_type_script_lang_js_ = (Bannervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Banner/Banner.vue
var Banner_render, Banner_staticRenderFns




/* normalize component */

var Banner_component = normalizeComponent(
  Banner_Bannervue_type_script_lang_js_,
  Banner_render,
  Banner_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Banner = (Banner_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Banner/BannerItem.vue?vue&type=script&lang=js&


var BannerItemvue_type_script_lang_js_componentsList = {};
/* harmony default export */ var BannerItemvue_type_script_lang_js_ = ({
  name: "RtBannerItem",
  components: BannerItemvue_type_script_lang_js_componentsList,
  props: {
    hasCustomContent: {
      type: Boolean,
      "default": false
    },
    link: {
      type: String,
      "default": null
    },
    mobileImageMaxHeight: {
      type: String,
      "default": null
    },
    linkTarget: {
      type: String,
      "default": null
    },
    ancorHashLink: {
      type: String,
      "default": null
    },
    ancorGetParamsLink: {
      type: String,
      "default": null
    },
    contentMinHeight: {
      type: [Number, String],
      "default": null
    },
    contentHeight: {
      type: [Number, String],
      "default": null
    },
    contentMobileMinHeight: {
      type: [Number, String],
      "default": null
    },
    contentMobileHeight: {
      type: [Number, String],
      "default": null
    },
    contentMinWidth: {
      type: [Number, String],
      "default": null
    },
    contentMaxWidth: {
      type: [Number, String],
      "default": null
    },
    backgroundVideo: {
      type: String,
      "default": null
    },
    backgroundColor: {
      type: String,
      "default": null
    },
    backgroundImage: {
      type: String,
      "default": null
    },
    backgroundImageMobile: {
      type: String,
      "default": null
    },
    backgroundImageTablet: {
      type: String,
      "default": null
    },
    backgroundImageWebp: {
      type: String,
      "default": null
    },
    lazyImage: {
      type: String,
      "default": null
    },
    lazyImageMobile: {
      type: String,
      "default": null
    },
    lazyImageTablet: {
      type: String,
      "default": null
    },
    preloadImage: {
      type: Boolean,
      "default": false
    },
    isWhiteColor: {
      type: Boolean,
      "default": false
    },
    backgroundPosition: {
      type: String,
      "default": null
    },
    slideTime: {
      type: [String, Number],
      "default": null
    },
    isGameBannerItem: {
      type: Boolean,
      "default": false
    },
    ga: {
      type: Object,
      "default": null
    },
    gaB2b: {
      type: Object,
      "default": null
    },
    patternBackground: {
      type: Boolean,
      "default": false
    },
    patternTopColor: {
      type: String,
      "default": ''
    },
    patternLeftColor: {
      type: String,
      "default": ''
    },
    patternRightColor: {
      type: String,
      "default": ''
    },
    patternType: {
      type: Number,
      "default": 1
    },
    hasImageOnMobile: {
      type: Boolean,
      "default": false
    },
    colorFillOnMobile: {
      type: Boolean,
      "default": false
    },
    halfHeightImage: {
      type: Boolean,
      "default": false
    }
  },
  inject: {
    RtBanners: {}
  },
  data: function data() {
    return {
      id: this._uid,
      index: null
    };
  },
  beforeMount: function beforeMount() {
    var _this = this;

    if (this.RtBanners) {
      this.index = this.RtBanners.items.length;
      var bannerItemData = {
        isWhiteColor: this.isWhiteColor,
        id: this.id
      };

      if (this.computedBackgroundImage) {
        bannerItemData.backgroundImage = this.computedLazyImage || this.computedBackgroundImage;

        if (this.computedLazyImage) {
          this.loadImageAsync(this.computedBackgroundImage, function (img) {
            bannerItemData.backgroundImage = _this.computedBackgroundImage;
          });
        }
      }

      if (this.backgroundColor) {
        bannerItemData.backgroundColor = this.backgroundColor;
      }

      if (this.patternBackground) {
        bannerItemData.patternBackground = this.patternBackground, bannerItemData.patternType = this.patternType, bannerItemData.patternTopColor = this.patternTopColor, bannerItemData.patternLeftColor = this.patternLeftColor, bannerItemData.patternRightColor = this.patternRightColor;
      }

      if (this.hasImageOnMobile) {
        bannerItemData.imageOnMobile = this.hasImageOnMobile;
      }

      if (this.backgroundVideo) {
        bannerItemData.backgroundVideo = this.backgroundVideo;
      }

      if (this.slideTime) {
        bannerItemData.slideTime = this.slideTime;
      }

      if (this.ancorHashLink) {
        bannerItemData.ancorHashLink = this.ancorHashLink;
      }

      if (this.ancorGetParamsLink) {
        bannerItemData.ancorGetParamsLink = this.ancorGetParamsLink;
      }

      if (this.link) {
        bannerItemData.link = this.link;
      }

      if (this.linkTarget) {
        bannerItemData.linkTarget = this.linkTarget;
      }

      if (this.isGameBannerItem) {
        bannerItemData.isGameBannerItem = this.isGameBannerItem;
      }

      if (this.colorFillOnMobile) {
        bannerItemData.colorFillOnMobile = this.colorFillOnMobile;
      }

      if (this.halfHeightImage) {
        bannerItemData.halfHeightImage = this.halfHeightImage;
      }

      this.RtBanners.items.push(bannerItemData);

      if (this.ancorHashLink && location.hash) {
        if (location.hash.replace(/#/, "") === this.ancorHashLink) {
          this.RtBanners.activeIndex = this.RtBanners.items.length - 1;
        }
      }

      if (this.ancorGetParamsLink) {
        var getParams = location.href.split("?");

        if (getParams.length > 1) {
          if (getParams[1].search(this.ancorGetParamsLink) >= 0) {
            this.RtBanners.activeIndex = this.RtBanners.items.length - 1;
          }
        }
      }

      if (this.preloadImage || this.computedLazyImage) {
        var preloadImage = new Image();
        preloadImage.src = this.computedBackgroundImage;
      }
    }
  },
  computed: {
    bannerItemWrapperClass: function bannerItemWrapperClass() {
      var bannerItemWrapperClass = "";

      if (this.isGameBannerItem) {
        bannerItemWrapperClass += 'rt-banner__item-wrapper rt-banner__item-wrapper-game';
      }

      return bannerItemWrapperClass;
    },
    bannerStyle: function bannerStyle() {
      var styles = {};

      if (this.contentMinWidth !== null) {
        styles.minWidth = this.normalizeVariable(this.contentMinWidth);
      }

      if (this.contentMaxWidth !== null) {
        styles.maxWidth = this.normalizeVariable(this.contentMaxWidth);
      }

      if (!this.RtBanners.isMobile) {
        if (this.contentMinHeight) {
          styles.minHeight = this.normalizeVariable(this.contentMinHeight);
        }

        if (this.contentHeight) {
          styles.height = this.normalizeVariable(this.contentHeight);
        }

        if (this.mobileImageMaxHeight) {
          styles.maxHeight = this.mobileImageMaxHeight;
        }
      } else {
        if (this.contentMobileMinHeight !== null) {
          styles.minHeight = this.normalizeVariable(this.contentMobileMinHeight);
        }

        if (this.contentMobileHeight !== null) {
          styles.height = this.normalizeVariable(this.contentMobileHeight);
        }
      }

      return styles;
    },
    bannerClass: function bannerClass() {
      var className = " rt-banner__item-wrapper";

      if (this.RtBanners && this.RtBanners.activeIndex === this.index) {
        className += " rt-banner-content--active";
      }

      return className;
    },
    computedBackgroundImage: function computedBackgroundImage() {
      return this.computedBackgroundImageFn();
    },
    computedLazyImage: function computedLazyImage() {
      var result;

      if (this.isMobile() && this.lazyImageMobile) {
        result = this.lazyImageMobile;
      } else if (this.isTablet() && this.lazyImageTablet) {
        result = this.lazyImageTablet;
      } else {
        result = this.lazyImage;
      }

      return result;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.ga) {
      this.activateEventToLink('b2c', this.ga);
    }

    if (this.gaB2b) {
      this.activateEventToLink('b2b', this.gaB2b);
    }

    window.addEventListener('resize', function () {
      var computedBackgroundImage = _this2.computedBackgroundImageFn();

      if (computedBackgroundImage) {
        _this2.$forceUpdate();

        if (_this2.RtBanners.items[_this2.index]) {
          _this2.RtBanners.items[_this2.index].backgroundImage = computedBackgroundImage;

          if (_this2.computedLazyImage) {
            _this2.loadImageAsync(computedBackgroundImage, function (img) {
              _this2.RtBanners.items[_this2.index].backgroundImage = computedBackgroundImage;
            });
          }
        }
      }
    });
  },
  methods: {
    isMobile: function isMobile() {
      return browser.isMobile();
    },
    isTablet: function isTablet() {
      return browser.isTablet();
    },
    computedBackgroundImageFn: function computedBackgroundImageFn() {
      var result;

      if (this.isMobile() && this.backgroundImageMobile) {
        result = this.backgroundImageMobile;
      } else if (this.isTablet() && this.backgroundImageTablet) {
        result = this.backgroundImageTablet;
      } else if (browser.supportedWebP && this.backgroundImageWebp) {
        result = this.backgroundImageWebp;
      } else {
        result = this.backgroundImage;
      }

      return result;
    },
    normalizeVariable: function normalizeVariable(variable) {
      if (typeof variable === "number") {
        variable += "px";
      }

      return variable;
    },
    activateEventToLink: function activateEventToLink(typeEvent, ga) {
      if (this.$el.querySelector('a')) {
        var parentId = this.RtBanners.id;
        var currentKey = this.index;
        this.$el.querySelector('a').addEventListener('click', function (e) {
          if (!this.getAttribute('data-ga-pushed')) {
            e.preventDefault();

            if (!window.dataLayer) {
              window.dataLayer = [];
            }

            window.dataLayer.push({
              event: typeEvent,
              type: 'banner_click',
              banner_name: ga.name,
              banner_id: parentId,
              banner_place: currentKey + 1,
              banner_section: ga.section || window.location.pathname
            });
            this.setAttribute('data-ga-pushed', 'true');
            this.click();
          }
        }, false);
      }
    },
    loadImageAsync: function loadImageAsync(src, resolve) {
      var reject = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (err) {};
      var image = new Image();
      image.src = src;

      image.onload = function () {
        resolve({
          naturalHeight: image.naturalHeight,
          naturalWidth: image.naturalWidth,
          src: image.src
        });
      };

      image.onerror = function (e) {
        reject(e);
      };
    }
  },
  render: function render(h) {
    var _this3 = this;

    var content = function content() {
      if (_this3.isGameBannerItem) {
        return h("rt-banner-video-game-contron");
      }

      return null;
    }; //return <div style={this.bannerStyle} class={"rt-banner__item" + (this.RtBanners.activeIndex === this.index ? " rt-banner__item--is-active" : "")} >{this.$slots.default}</div>


    if (this.hasCustomContent) {
      var bannerClass = "rt-banner__item";

      if (this.RtBanners.activeIndex) {
        bannerClass += " rt-banner__item--is-active";
      } //return <div style={this.bannerStyle} class={"rt-banner__item" + (this.RtBanners.activeIndex === this.index ? " rt-banner__item--is-active" : "")} >{this.$slots.default}</div>


      return h("div", {
        "class": "rt-banner__item" + (this.RtBanners.activeIndex === this.index ? " rt-banner__item--is-active" : ""),
        style: this.bannerStyle
      }, [this.$slots["default"], content()]);
    } else {
      return h("div", {
        style: this.bannerStyle,
        "class": "rt-banner-content" + this.bannerClass
      }, [h("div", {
        "class": "rt-banner-content__inner"
      }, [this.$slots["default"], content()])]);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Banner/BannerItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var Banner_BannerItemvue_type_script_lang_js_ = (BannerItemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Banner/BannerItem.vue
var BannerItem_render, BannerItem_staticRenderFns




/* normalize component */

var BannerItem_component = normalizeComponent(
  Banner_BannerItemvue_type_script_lang_js_,
  BannerItem_render,
  BannerItem_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BannerItem = (BannerItem_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Banner/BannerVideoGameControl.vue?vue&type=script&lang=js&
 // import debounce from "debounce";


var BannerVideoGameControlvue_type_script_lang_js_componentsList = {};
BannerVideoGameControlvue_type_script_lang_js_componentsList[BannerPaginatorItem.name] = BannerPaginatorItem;
/* harmony default export */ var BannerVideoGameControlvue_type_script_lang_js_ = ({
  name: "RtBannerVideoGameContron",
  components: BannerVideoGameControlvue_type_script_lang_js_componentsList,
  props: {},
  data: function data() {
    return {
      isPlaying: true,
      playInterval: null,
      video: null
    };
  },
  inject: {
    RtBanners: {}
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      _this.video = _this.$el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.rt-banner-video__content');

      _this.video.addEventListener('play', function (e) {
        _this.playInterval = setInterval(function () {
          _this.video.style.strokeDashoffset = (1 - _this.video.currentTime / (_this.video.duration * 1000)) * 380 % 380;

          if (!_this.video) {
            clearInterval(_this.playInterval);
          }
        }, 2000);
      });

      _this.video.addEventListener('playing', function (e) {
        _this.isPlaying = true;
        _this.playInterval = setInterval(function () {
          _this.$el.querySelector('.banner__video-time-line-active').style.strokeDashoffset = (1 - _this.video.currentTime / _this.video.duration) * 380 % 380;
        }, 1000 / 30);
      });

      _this.video.play();

      _this.video.addEventListener('canplay', function (e) {
        setTimeout(function () {
          var playVideo = function playVideo() {
            return _this.video.play().then(function () {})["catch"](function (e) {
              setTimeout(function () {
                playVideo();
              }, 1500);
            });
          };

          playVideo();
        }, 400);
      });

      _this.video.addEventListener('pause', function (e) {
        _this.isPlaying = false;
        clearInterval(_this.playInterval);
      });
    }, 100);
  },
  methods: {
    toggleStartStop: function toggleStartStop() {
      this.$set(this, 'isPlaying', !this.isPlaying);

      if (this.isPlaying) {
        this.video.play();
      } else {
        this.video.pause();
      }
    }
  },
  render: function render(h) {
    return h("div", {
      "class": "banner__video-controls" + (this.isPlaying ? " banner__video-controls--is-pause" : ""),
      on: {
        "click": this.toggleStartStop
      }
    }, [h("svg", {
      "class": "banner__video-time-line-active",
      attrs: {
        width: "131px",
        height: "131px",
        viewBox: "0 0 126 126",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "#FF4F12"
      }
    }, [h("circle", {
      attrs: {
        r: "60",
        cx: "63",
        cy: "63",
        fill: "transparent"
      }
    })]), h("svg", {
      "class": "banner__video-time-line",
      attrs: {
        width: "131px",
        height: "131px",
        viewBox: "0 0 126 126",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        stroke: "#FFFFFF"
      }
    }, [h("circle", {
      attrs: {
        r: "60",
        cx: "63",
        cy: "63",
        fill: "transparent"
      }
    })]), h("div", {
      "class": "banner__video-button-status"
    })]);
  }
});
// CONCATENATED MODULE: ./src/components/Banner/BannerVideoGameControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var Banner_BannerVideoGameControlvue_type_script_lang_js_ = (BannerVideoGameControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Banner/BannerVideoGameControl.vue
var BannerVideoGameControl_render, BannerVideoGameControl_staticRenderFns




/* normalize component */

var BannerVideoGameControl_component = normalizeComponent(
  Banner_BannerVideoGameControlvue_type_script_lang_js_,
  BannerVideoGameControl_render,
  BannerVideoGameControl_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BannerVideoGameControl = (BannerVideoGameControl_component.exports);
// CONCATENATED MODULE: ./src/components/GalleryCarousel/GalleryCarousel.tsx
function GalleryCarousel_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GalleryCarousel_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GalleryCarousel_createClass(Constructor, protoProps, staticProps) { if (protoProps) GalleryCarousel_defineProperties(Constructor.prototype, protoProps); if (staticProps) GalleryCarousel_defineProperties(Constructor, staticProps); return Constructor; }

function GalleryCarousel_possibleConstructorReturn(self, call) { if (call && (GalleryCarousel_typeof(call) === "object" || typeof call === "function")) { return call; } return GalleryCarousel_assertThisInitialized(self); }

function GalleryCarousel_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GalleryCarousel_getPrototypeOf(o) { GalleryCarousel_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GalleryCarousel_getPrototypeOf(o); }

function GalleryCarousel_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) GalleryCarousel_setPrototypeOf(subClass, superClass); }

function GalleryCarousel_setPrototypeOf(o, p) { GalleryCarousel_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GalleryCarousel_setPrototypeOf(o, p); }

function GalleryCarousel_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GalleryCarousel_typeof = function _typeof(obj) { return typeof obj; }; } else { GalleryCarousel_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GalleryCarousel_typeof(obj); }

var GalleryCarousel_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : GalleryCarousel_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GalleryCarousel_GalleryCarousel =
/*#__PURE__*/
function (_Vue) {
  GalleryCarousel_inherits(GalleryCarousel, _Vue);

  function GalleryCarousel() {
    var _this;

    GalleryCarousel_classCallCheck(this, GalleryCarousel);

    _this = GalleryCarousel_possibleConstructorReturn(this, GalleryCarousel_getPrototypeOf(GalleryCarousel).apply(this, arguments));
    _this.stopAnimation = false;
    return _this;
  }

  GalleryCarousel_createClass(GalleryCarousel, [{
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      var _this2 = this;

      if (!this.stopAnimation) {
        this.stopAnimation = true;
        var corousel = this.$refs.carousel;
        var corouselItems = corousel.querySelectorAll(".rt-gallery-carousel-item");
        var firstItem = corouselItems[0];
        var innerWidth = window.innerWidth;

        if (innerWidth <= parseInt(variables["mobile-upper-limit"])) {
          firstItem.style.marginLeft = "-47vw";
        } else if (innerWidth <= parseInt(variables["tablet-upper-limit"])) {
          firstItem.style.marginLeft = "-20%";
        } else {
          firstItem.style.marginLeft = "-12.5%";
        }

        setTimeout(function () {
          firstItem.removeAttribute("style");
          corousel.appendChild(firstItem);
          setTimeout(function () {
            _this2.stopAnimation = false;
          }, 10);
        }, 500);
      }
    }
  }, {
    key: "previousSlide",
    value: function previousSlide() {
      var _this3 = this;

      if (!this.stopAnimation) {
        this.stopAnimation = true;
        var corousel = this.$refs.carousel;
        var corouselItems = corousel.querySelectorAll(".rt-gallery-carousel-item");
        var lastItem = corouselItems[corouselItems.length - 1];
        var innerWidth = window.innerWidth;

        if (innerWidth <= parseInt(variables["mobile-upper-limit"])) {
          lastItem.style.marginLeft = "-47vw";
        } else if (innerWidth <= parseInt(variables["tablet-upper-limit"])) {
          lastItem.style.marginLeft = "-20%";
        } else {
          lastItem.style.marginLeft = "-12.5%";
        }

        corousel.prepend(lastItem);
        setTimeout(function () {
          lastItem.removeAttribute("style");
        }, 50);
        setTimeout(function () {
          setTimeout(function () {
            _this3.stopAnimation = false;
          }, 10);
        }, 500);
      }
    }
  }, {
    key: "render",
    value: function render(h) {
      return h("div", {
        "class": "rt-gallery-carousel",
        ref: "carousel"
      }, [h("div", {
        "class": "rt-gallery-carousel-arrow rt-gallery-carousel-arrow--left",
        ref: "arrow-left",
        on: {
          "click": this.previousSlide
        }
      }, [h("svg", {
        "class": "rt-gallery-carousel-arrow__icon",
        attrs: {
          width: "12px",
          height: "20px",
          viewBox: "0 0 12 20",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        }
      }, [h("g", {
        attrs: {
          id: "Page-1",
          stroke: "none",
          "stroke-width": "1",
          fill: "none",
          "fill-rule": "evenodd"
        }
      }, [h("g", {
        attrs: {
          id: "200-LP_Igrovoi-magaz",
          transform: "translate(-40.000000, -816.000000)",
          fill: "#FF4F12"
        }
      }, [h("polygon", {
        attrs: {
          id: "Fill-1-Copy-2",
          points: "49.7179106 816 40 825.998333 49.7179106 836 52 833.651667 52 833.648333 44.5836145 825.998333 52 818.351667 52 818.348333"
        }
      })])])])]), h("div", {
        "class": "rt-gallery-carousel-arrow rt-gallery-carousel-arrow--right",
        ref: "arrow-right",
        on: {
          "click": this.nextSlide
        }
      }, [h("svg", {
        "class": "rt-gallery-carousel-arrow__icon",
        attrs: {
          width: "12px",
          height: "20px",
          viewBox: "0 0 12 20",
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg"
        }
      }, [h("g", {
        attrs: {
          id: "Page-1",
          stroke: "none",
          "stroke-width": "1",
          fill: "none",
          "fill-rule": "evenodd"
        }
      }, [h("g", {
        attrs: {
          id: "200-LP_Igrovoi-magaz",
          transform: "translate(-1410.000000, -816.000000)",
          fill: "#FF4F12"
        }
      }, [h("polygon", {
        attrs: {
          id: "Fill-1-Copy",
          transform: "translate(1416.000000, 826.000000) scale(-1, 1) translate(-1416.000000, -826.000000) ",
          points: "1419.71791 816 1410 825.998333 1419.71791 836 1422 833.651667 1422 833.648333 1414.58361 825.998333 1422 818.351667 1422 818.348333"
        }
      })])])])]), this.$slots["default"]]);
    }
  }]);

  return GalleryCarousel;
}(external_vue_default.a);

GalleryCarousel_GalleryCarousel = GalleryCarousel_decorate([vue_class_component_esm], GalleryCarousel_GalleryCarousel);
/* harmony default export */ var components_GalleryCarousel_GalleryCarousel = ({
  component: GalleryCarousel_GalleryCarousel,
  name: "RtGalleryCarousel"
});
// CONCATENATED MODULE: ./src/components/GalleryCarousel/GalleryCarouselItem.tsx
function GalleryCarouselItem_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GalleryCarouselItem_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GalleryCarouselItem_createClass(Constructor, protoProps, staticProps) { if (protoProps) GalleryCarouselItem_defineProperties(Constructor.prototype, protoProps); if (staticProps) GalleryCarouselItem_defineProperties(Constructor, staticProps); return Constructor; }

function GalleryCarouselItem_possibleConstructorReturn(self, call) { if (call && (GalleryCarouselItem_typeof(call) === "object" || typeof call === "function")) { return call; } return GalleryCarouselItem_assertThisInitialized(self); }

function GalleryCarouselItem_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GalleryCarouselItem_getPrototypeOf(o) { GalleryCarouselItem_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GalleryCarouselItem_getPrototypeOf(o); }

function GalleryCarouselItem_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) GalleryCarouselItem_setPrototypeOf(subClass, superClass); }

function GalleryCarouselItem_setPrototypeOf(o, p) { GalleryCarouselItem_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GalleryCarouselItem_setPrototypeOf(o, p); }

function GalleryCarouselItem_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GalleryCarouselItem_typeof = function _typeof(obj) { return typeof obj; }; } else { GalleryCarouselItem_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GalleryCarouselItem_typeof(obj); }

var GalleryCarouselItem_decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : GalleryCarouselItem_typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GalleryCarouselItem =
/*#__PURE__*/
function (_Vue) {
  GalleryCarouselItem_inherits(GalleryCarouselItem, _Vue);

  function GalleryCarouselItem() {
    GalleryCarouselItem_classCallCheck(this, GalleryCarouselItem);

    return GalleryCarouselItem_possibleConstructorReturn(this, GalleryCarouselItem_getPrototypeOf(GalleryCarouselItem).apply(this, arguments));
  }

  GalleryCarouselItem_createClass(GalleryCarouselItem, [{
    key: "mounted",
    value: function mounted() {}
  }, {
    key: "render",
    value: function render(h) {
      return h("div", {
        "class": "rt-gallery-carousel-item"
      }, [this.$slots["default"]]);
    }
  }]);

  return GalleryCarouselItem;
}(external_vue_default.a);

GalleryCarouselItem = GalleryCarouselItem_decorate([vue_class_component_esm], GalleryCarouselItem);
/* harmony default export */ var GalleryCarousel_GalleryCarouselItem = ({
  component: GalleryCarouselItem,
  name: "RtGalleryCarouselItem"
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/CountdownTimer/CountdownTimer.vue?vue&type=script&lang=js&
/* harmony default export */ var CountdownTimervue_type_script_lang_js_ = ({
  name: "RtCountdownTimer",
  props: {
    duration: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      timerDuration: parseInt(this.duration * 60),
      minutes: null,
      seconds: null
    };
  },
  computed: {
    countdownClass: function countdownClass() {
      var className = 'rt-timer';
      return className;
    }
  },
  mounted: function mounted() {
    var timeLeft = this.timerDuration;
    this.startCounter(timeLeft);
  },
  created: function created() {},
  methods: {
    startCounter: function startCounter(timeLeft) {
      var _this = this;

      var counter = timeLeft;
      var intervalID = setInterval(function () {
        counter--;
        _this.minutes = Math.floor(counter / 60);
        _this.seconds = counter % 60;
        _this.seconds < 10 ? _this.seconds = '0' + _this.seconds.toString() : null;
        counter <= 0 ? clearInterval(intervalID) : null;
      }, 1000);
    }
  },
  render: function render(h) {
    return h("div", {
      "class": this.countdownClass
    }, [h("div", {
      "class": "rt-timer__minutes"
    }, [this.minutes]), h("div", {
      "class": "rt-timer__seconds"
    }, [this.seconds])]);
  }
});
// CONCATENATED MODULE: ./src/components/CountdownTimer/CountdownTimer.vue?vue&type=script&lang=js&
 /* harmony default export */ var CountdownTimer_CountdownTimervue_type_script_lang_js_ = (CountdownTimervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CountdownTimer/CountdownTimer.vue
var CountdownTimer_render, CountdownTimer_staticRenderFns




/* normalize component */

var CountdownTimer_component = normalizeComponent(
  CountdownTimer_CountdownTimervue_type_script_lang_js_,
  CountdownTimer_render,
  CountdownTimer_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CountdownTimer = (CountdownTimer_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StickyBottomLine/StickyBottomLine.vue?vue&type=script&lang=js&


/* harmony default export */ var StickyBottomLinevue_type_script_lang_js_ = ({
  name: "RtStickyBottomLine",
  props: {
    isActive: {
      type: Boolean,
      "default": true
    },
    zIndex: {
      type: Number,
      "default": 2
    },
    startStopPoints: {
      type: Array,
      "default": []
    },
    deltaBetweenBlocks: {
      type: Number,
      "default": 0
    },
    hideOnDesktop: {
      type: Boolean,
      "default": false
    },
    hideOnTablet: {
      type: Boolean,
      "default": false
    },
    hideOnMobile: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      active: false,
      pointsStart: [],
      pointsEnd: [],
      activeIndex: -1,
      deviceType: ""
    };
  },
  watch: {
    isActive: function isActive() {
      this.active = this.isActive;
    }
  },
  mounted: function mounted() {
    if (this.startStopPoints.length > 0) {
      this.setStartStopPoints();
      window.addEventListener("resize", debounce_default()(this.setStartStopPoints, 100));

      if (this.hideOnDesktop || this.hideOnTablet || this.hideOnMobile) {
        window.addEventListener("resize", debounce_default()(this.setDeviceType, 100));
        this.setDeviceType();
      }

      window.addEventListener("scroll", debounce_default()(this.detectActiveIndex, 10));
      this.detectActiveIndex();
    }
  },
  methods: {
    setDeviceType: function setDeviceType() {
      var _this = this;

      var width = window.innerWidth;
      var beforeType = this.deviceType;

      if (width <= parseInt(variables["mobile-upper-limit"])) {
        this.deviceType = "mobile";

        if (beforeType != "mobile") {
          setTimeout(function () {
            _this.detectActiveIndex();

            _this.checkOffsetLine();
          }, 0);
          z;
        }
      } else {
        if (width <= parseInt(variables["tablet-upper-limit"])) {
          this.deviceType = "tablet";

          if (beforeType != "tablet") {
            setTimeout(function () {
              _this.detectActiveIndex();

              _this.checkOffsetLine();
            }, 0);
          }
        } else {
          this.deviceType = "desktop";
          this.detectActiveIndex();
          this.checkOffsetLine();

          if (beforeType != "desktop") {
            setTimeout(function () {
              _this.detectActiveIndex();

              _this.checkOffsetLine();
            }, 0);
          }
        }
      }
    },
    sort: function sort(arr) {
      arr.sort(function (a, b) {
        if (a < b) {
          return -1;
        }

        return 1;
      });
    },
    compareArr: function compareArr(arrA, arrB, delta) {
      for (var endIndex = 0; endIndex < arrB.length; endIndex++) {
        var endPoint = arrB[endIndex];

        for (var startIndex = 0; startIndex < arrB.length; startIndex++) {
          var startPoint = arrA[startIndex];

          if (startPoint >= endPoint && Math.abs(startPoint - endPoint) <= this.deltaBetweenBlocks) {
            arrA.splice(startIndex, 1);
            arrB.splice(endIndex, 1);
            endIndex--;
          }
        }

        ;
      }

      ;
      arrA = arrA.filter(function (i) {
        return !i;
      });
      arrB = arrB.filter(function (i) {
        return !i;
      });
    },
    setStartStopPoints: function setStartStopPoints() {
      var _this2 = this;

      this.pointsStart = [];
      this.pointsEnd = [];
      var bodyRect = document.body.getBoundingClientRect();
      var windowHeight = window.innerHeight;
      this.startStopPoints.forEach(function (id) {
        var el = document.getElementById(id);

        if (el) {
          var _el$getBoundingClient = el.getBoundingClientRect(),
              top = _el$getBoundingClient.top,
              height = _el$getBoundingClient.height;

          _this2.pointsStart.push(top - bodyRect.top);

          _this2.pointsEnd.push(top + height - bodyRect.top);
        }
      });
      this.sort(this.pointsStart);
      this.sort(this.pointsEnd);
      this.compareArr(this.pointsStart, this.pointsEnd, windowHeight);
    },
    detectActiveIndex: function detectActiveIndex() {
      var _this3 = this;

      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      var hasNotFound = true;
      var windowHeight = window.innerHeight;
      this.pointsStart.forEach(function (startPoint, index) {
        if (top >= startPoint - 50 - windowHeight && top <= _this3.pointsEnd[index] + 50) {
          hasNotFound = false;
          _this3.activeIndex = index;
          return false;
        }
      });

      if (hasNotFound) {
        this.activeIndex = -1;
      }

      if (this.activeIndex >= 0) {
        this.checkOffsetLine(top);
      }
    },
    checkOffsetLine: function checkOffsetLine(top) {
      if (this.$refs["line"]) {
        var height = this.$refs["line"].clientHeight;
        var windowHeight = window.innerHeight;
        var start = this.pointsStart[this.activeIndex];
        var end = this.pointsEnd[this.activeIndex];

        if (start > top) {
          var offset = windowHeight + top - start - height;

          if (offset > 0) {
            offset = 0;
          }

          this.$refs["line"].style.bottom = offset + "px";
        } else {
          var _offset = end - windowHeight - top;

          if (_offset > 0) {
            _offset = 0;
          }

          this.$refs["line"].style.bottom = _offset + "px";
        }
      }
    }
  },
  computed: {},
  render: function render(h) {
    if (this.deviceType === "desktop" && this.hideOnDesktop || this.deviceType === "tablet" && this.hideOnTablet || this.deviceType === "mobile" && this.hideOnMobile) {
      return null;
    }

    if (this.activeIndex >= 0) {
      return h("div", {
        ref: "line",
        "class": "rt-sticky-bottom-line",
        style: {
          zIndex: this.zIndex
        }
      }, [h("div", {
        "class": "rt-container"
      }, [h("div", {
        "class": "rt-col-12"
      }, [this.$slots["default"]])])]);
    }

    return null;
  }
});
// CONCATENATED MODULE: ./src/components/StickyBottomLine/StickyBottomLine.vue?vue&type=script&lang=js&
 /* harmony default export */ var StickyBottomLine_StickyBottomLinevue_type_script_lang_js_ = (StickyBottomLinevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/StickyBottomLine/StickyBottomLine.vue
var StickyBottomLine_render, StickyBottomLine_staticRenderFns




/* normalize component */

var StickyBottomLine_component = normalizeComponent(
  StickyBottomLine_StickyBottomLinevue_type_script_lang_js_,
  StickyBottomLine_render,
  StickyBottomLine_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var StickyBottomLine = (StickyBottomLine_component.exports);
// CONCATENATED MODULE: ./src/components/index.js





































































// CONCATENATED MODULE: ./src/directives/Swipe/swipe.js
function swipe_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function swipe_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Swipe = function Swipe(type, element, action) {
  var _this = this;

  swipe_classCallCheck(this, Swipe);

  swipe_defineProperty(this, "calculateSwipe", function () {
    if (Math.abs(_this.touchstartX - _this.touchendX) > 50) {
      if (_this.touchstartX < _this.touchendX && _this.type == 'right') {
        _this.action.value();
      }
    }

    if (_this.touchstartX > _this.touchendX && _this.type == 'left') {
      _this.action.value();
    }
  });

  swipe_defineProperty(this, "bind", function () {
    if (_this.$el) {
      window.test = _this.$el;

      _this.$el.addEventListener("touchstart", _this.setTouchStart, {
        passive: true
      });

      _this.$el.addEventListener("touchend", _this.setTouchEnd, {
        passive: true
      });
    }
  });

  swipe_defineProperty(this, "rebind", function (el) {
    _this.unbind();

    _this.$el = el;

    _this.bind();
  });

  swipe_defineProperty(this, "unbind", function () {
    _this.$el.removeEventListener("touchstart", _this.setTouchStart);

    _this.$el.removeEventListener("touchend", _this.setTouchEnd);
  });

  swipe_defineProperty(this, "setTouchStart", function (e) {
    _this.touchstartX = e.changedTouches[0].screenX;
  });

  swipe_defineProperty(this, "setTouchEnd", function (e) {
    _this.touchendX = e.changedTouches[0].screenX;

    _this.calculateSwipe();
  });

  this.type = type;
  this.$el = element;
  this.action = action;
  this.bind();
  this.touchendX = 0;
  this.touchstartX = 0;
};

var SwipeLeft = {
  name: 'rt-swipe-left',
  bind: function bind(el, bindings, vnode) {
    vnode.Swipe = new Swipe('left', el, bindings);
  },
  update: function update(el, bindings, vnode) {
    if (vnode.Swipe) {
      vnode.Swipe.rebind(vnode.elm);
    } else {
      vnode.Swipe = new Swipe('left', vnode.elm, bindings);
    }
  }
};
var SwipeRight = {
  name: 'rt-swipe-right',
  bind: function bind(el, bindings, vnode) {
    vnode.Swipe = new Swipe('right', el, bindings);
  },
  update: function update(el, bindings, vnode) {
    if (vnode.Swipe) {
      vnode.Swipe.rebind();
    } else {
      vnode.Swipe = new Swipe('right', el, bindings);
    }
  }
};
// CONCATENATED MODULE: ./src/directives/SlideContent/SlideContentVertical.js
function SlideContentVertical_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SlideContentVertical_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var SlideContentVertical_SlideContentVertical = function SlideContentVertical(element, data, vnode) {
  var _this = this;

  SlideContentVertical_classCallCheck(this, SlideContentVertical);

  SlideContentVertical_defineProperty(this, "bind", function () {
    if (!_this.triggerClassName) {
      setTimeout(function () {
        _this.bind();
      }, 50);
    } else {
      var _el = _this.$el;

      var trigger = _el.querySelector(".".concat(_this.triggerClassName));

      _this.checkActiveStatus();

      if (trigger) {
        trigger.addEventListener("mousedown", _this.trigger, {
          passive: false
        });
      }
    }
  });

  SlideContentVertical_defineProperty(this, "checkActiveStatus", function () {
    var el = _this.$el;
    var trigger = el.querySelector(".".concat(_this.triggerClassName));
    var content = el.querySelector(".".concat(_this.containerClassName));

    if (trigger && content) {
      if ((trigger.classList.contains(_this.activeTriggerClassName[0]) || content.classList.contains(_this.activeContainerClassName[0])) && !_this.isActive) {
        _this.isActive = true;
      }
    }
  });

  SlideContentVertical_defineProperty(this, "trigger", function () {
    var el = _this.$el;
    var trigger = el.querySelector(".".concat(_this.triggerClassName));
    var content = el.querySelector(".".concat(_this.containerClassName));

    if (trigger) {
      if (_this.isActive) {
        _this.activeTriggerClassName.filter(function (className) {
          return className.trim().length > 0;
        }).forEach(function (className) {
          trigger.classList.remove(className);
        });

        _this.activeContainerClassName.filter(function (className) {
          return className.trim().length > 0;
        }).forEach(function (className) {
          content.classList.remove(className);
        });
      } else {
        _this.activeTriggerClassName.filter(function (className) {
          return className.trim().length > 0;
        }).forEach(function (className) {
          trigger.classList.add(className);
        });

        _this.activeContainerClassName.filter(function (className) {
          return className.trim().length > 0;
        }).forEach(function (className) {
          content.classList.add(className);
        });
      }

      _this.isActive = !_this.isActive;

      if (_this.isActive && _this.scrollWhenActive) {
        utils_scrollIt(content.offsetTop, 400);
      }
    }
  });

  SlideContentVertical_defineProperty(this, "update", function (el) {
    _this.unbind();

    _this.$el = el;

    _this.bind();
  });

  SlideContentVertical_defineProperty(this, "unbind", function () {
    var el = _this.$el;
    var trigger = el.querySelector(".".concat(_this.triggerClassName));

    if (trigger) {
      trigger.removeEventListener("mousedown", _this.trigger);
    }
  });

  this.$el = element;
  this.value = data.value;
  this.bind();
  this.vnode = vnode;
  this.triggerClassName = this.value.triggerClassName || "rt-slide-content-vertical-trigger";
  this.containerClassName = this.value.containerClassName || "rt-slide-content-vertical-content";
  this.isActive = this.value.isActive ? this.value.isActive : false;
  this.scrollWhenActive = this.value.scrollWhenActive ? this.value.scrollWhenActive : false;
  this.activeTriggerClassName = this.value.activeTriggerClassName || "rt-slide-content-vertical-trigger--is-active";
  this.activeContainerClassName = this.value.activeContainerClassName || "rt-slide-content-vertical-content--is-active";
  this.activeTriggerClassName = this.activeTriggerClassName.split(' ');
  this.activeContainerClassName = this.activeContainerClassName.split(' ');
};

var SlideContentVerticalDirective = {
  name: "RtSlideContentVertical",
  bind: function bind(el, bindings, vnode) {
    vnode.context.SlideContentVertical = new SlideContentVertical_SlideContentVertical(vnode.elm, bindings, vnode);
  },
  update: function update(el, bindings, vnode) {
    vnode.context.SlideContentVertical.update(el);
  },
  beforeDestroy: function beforeDestroy() {
    vnode.context.SlideContentVertical.unbind(el);
  }
};
// CONCATENATED MODULE: ./src/directives/ScrollToOnClick/ScrollToOnClick.js
function ScrollToOnClick_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ScrollToOnClick_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var ScrollToOnClick = function ScrollToOnClick(element, data, vnode) {
  var _this = this;

  ScrollToOnClick_classCallCheck(this, ScrollToOnClick);

  ScrollToOnClick_defineProperty(this, "bind", function () {
    if (_this.$el && (!_this.vnode || !_this.vnode.ScrollToOnClick)) {
      _this.$el.addEventListener("click", _this.scrollTo, {
        passive: true
      });
    }
  });

  ScrollToOnClick_defineProperty(this, "update", function (el) {
    _this.unbind();

    _this.$el = el;

    _this.bind();
  });

  ScrollToOnClick_defineProperty(this, "unbind", function () {
    _this.$el.removeEventListener("click", _this.scrollTo);
  });

  ScrollToOnClick_defineProperty(this, "scrollTo", function () {
    function currentYPosition() {
      // Firefox, Chrome, Opera, Safari
      if (self.pageYOffset) return self.pageYOffset; // Internet Explorer 6 - standards mode

      if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop; // Internet Explorer 6, 7 and 8

      if (document.body.scrollTop) return document.body.scrollTop;
      return 0;
    }

    function elmYPosition(eID) {
      var elm = document.getElementById(eID);
      var y = elm.offsetTop;
      var node = elm;

      while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
      }

      return y;
    }

    function smoothScroll(eID) {
      var startY = currentYPosition();
      var stopY = elmYPosition(eID);
      var distance = stopY > startY ? stopY - startY : startY - stopY;

      if (distance < 100) {
        scrollTo(0, stopY);
        return;
      }

      var speed = Math.round(distance / 100);
      if (speed >= 20) speed = 20;
      var step = Math.round(distance / 25);
      var leapY = stopY > startY ? startY + step : startY - step;
      var timer = 0;

      if (stopY > startY) {
        for (var i = startY; i < stopY; i += step) {
          setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
          leapY += step;
          if (leapY > stopY) leapY = stopY;
          timer++;
        }

        return;
      }

      for (var i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step;
        if (leapY < stopY) leapY = stopY;
        timer++;
      }

      return false;
    }

    smoothScroll(_this.scrollToId);
  });

  this.$el = element;
  this.vnode = vnode;
  this.value = data.value;

  if (typeof this.value === 'string') {
    this.value = JSON.parse(this.value);
  }

  this.scrollToId = this.value.scrollToId;

  if (this.scrollToId) {
    this.bind();
  } else {
    console.error('have not set scrollToId property!');
  }
};

var ScrollToOnClickDirective = {
  name: "RtScrollToOnClick",
  isFn: true,
  bind: function bind(el, bindings, vnode) {
    vnode.context.ScrollToOnClick = new ScrollToOnClick(vnode.elm, bindings, vnode);
  },
  update: function update(el, bindings, vnode) {
    vnode.context.ScrollToOnClick.update(el);
  },
  beforeDestroy: function beforeDestroy() {
    vnode.context.ScrollToOnClick.unbind(el);
  }
};
// EXTERNAL MODULE: ./node_modules/element-closest-polyfill/index.js
var element_closest_polyfill = __webpack_require__(10);

// EXTERNAL MODULE: ./node_modules/nodelist-foreach-polyfill/index.js
var nodelist_foreach_polyfill = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/element-remove/index.js
var element_remove = __webpack_require__(12);

// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport ScrollTabs */__webpack_require__.d(__webpack_exports__, "ScrollTabs", function() { return components_ScrollTabs_ScrollTabs; });
/* concated harmony reexport Banner */__webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* concated harmony reexport BannerItem */__webpack_require__.d(__webpack_exports__, "BannerItem", function() { return BannerItem; });
/* concated harmony reexport BannerPaginatorItem */__webpack_require__.d(__webpack_exports__, "BannerPaginatorItem", function() { return BannerPaginatorItem; });
/* concated harmony reexport Carousel */__webpack_require__.d(__webpack_exports__, "Carousel", function() { return Carousel; });
/* concated harmony reexport CarouselSlide */__webpack_require__.d(__webpack_exports__, "CarouselSlide", function() { return CarouselSlide; });
/* concated harmony reexport Card */__webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* concated harmony reexport CardB2o */__webpack_require__.d(__webpack_exports__, "CardB2o", function() { return CardB2o; });
/* concated harmony reexport CardBuy */__webpack_require__.d(__webpack_exports__, "CardBuy", function() { return CardBuy; });
/* concated harmony reexport CardImage */__webpack_require__.d(__webpack_exports__, "CardImage", function() { return CardImage; });
/* concated harmony reexport CardImageList */__webpack_require__.d(__webpack_exports__, "CardImageList", function() { return CardImageList; });
/* concated harmony reexport FullscreenImage */__webpack_require__.d(__webpack_exports__, "FullscreenImage", function() { return FullscreenImage; });
/* concated harmony reexport RowList */__webpack_require__.d(__webpack_exports__, "RowList", function() { return RowList; });
/* concated harmony reexport RowListItem */__webpack_require__.d(__webpack_exports__, "RowListItem", function() { return RowListItem; });
/* concated harmony reexport Table */__webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* concated harmony reexport TableCol */__webpack_require__.d(__webpack_exports__, "TableCol", function() { return TableCol; });
/* concated harmony reexport TableHeadItem */__webpack_require__.d(__webpack_exports__, "TableHeadItem", function() { return TableHeadItem; });
/* concated harmony reexport TableItem */__webpack_require__.d(__webpack_exports__, "TableItem", function() { return TableItem; });
/* concated harmony reexport TableRow */__webpack_require__.d(__webpack_exports__, "TableRow", function() { return TableRow; });
/* concated harmony reexport DownloadContent */__webpack_require__.d(__webpack_exports__, "DownloadContent", function() { return DownloadContent; });
/* concated harmony reexport InlineDropdown */__webpack_require__.d(__webpack_exports__, "InlineDropdown", function() { return InlineDropdown; });
/* concated harmony reexport InlineDropdownItem */__webpack_require__.d(__webpack_exports__, "InlineDropdownItem", function() { return InlineDropdownItem; });
/* concated harmony reexport Tag */__webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* concated harmony reexport TagsList */__webpack_require__.d(__webpack_exports__, "TagsList", function() { return TagsList; });
/* concated harmony reexport Filter */__webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
/* concated harmony reexport FilterWatcher */__webpack_require__.d(__webpack_exports__, "FilterWatcher", function() { return FilterWatcher; });
/* concated harmony reexport FilterCaller */__webpack_require__.d(__webpack_exports__, "FilterCaller", function() { return FilterCaller; });
/* concated harmony reexport Youtube */__webpack_require__.d(__webpack_exports__, "Youtube", function() { return Youtube; });
/* concated harmony reexport Sticky */__webpack_require__.d(__webpack_exports__, "Sticky", function() { return Sticky; });
/* concated harmony reexport StickyBottomLine */__webpack_require__.d(__webpack_exports__, "StickyBottomLine", function() { return StickyBottomLine; });
/* concated harmony reexport ResizeContentHeight */__webpack_require__.d(__webpack_exports__, "ResizeContentHeight", function() { return ResizeContentHeight; });
/* concated harmony reexport Popup */__webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* concated harmony reexport LinksBlock */__webpack_require__.d(__webpack_exports__, "LinksBlock", function() { return LinksBlock; });
/* concated harmony reexport Hint */__webpack_require__.d(__webpack_exports__, "Hint", function() { return Hint; });
/* concated harmony reexport BannerVideoGameControl */__webpack_require__.d(__webpack_exports__, "BannerVideoGameControl", function() { return BannerVideoGameControl; });
/* concated harmony reexport SlideContent */__webpack_require__.d(__webpack_exports__, "SlideContent", function() { return SlideContent_SlideContent; });
/* concated harmony reexport SlideContentDottedContent */__webpack_require__.d(__webpack_exports__, "SlideContentDottedContent", function() { return SlideContent_SlideContentDottedContent; });
/* concated harmony reexport SlideContentDottedHeader */__webpack_require__.d(__webpack_exports__, "SlideContentDottedHeader", function() { return SlideContent_SlideContentDottedHeader; });
/* concated harmony reexport Slide */__webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* concated harmony reexport Swiper */__webpack_require__.d(__webpack_exports__, "Swiper", function() { return Swiper; });
/* concated harmony reexport Pattern */__webpack_require__.d(__webpack_exports__, "Pattern", function() { return Pattern; });
/* concated harmony reexport Opportunity */__webpack_require__.d(__webpack_exports__, "Opportunity", function() { return Opportunity; });
/* concated harmony reexport OpportunityItem */__webpack_require__.d(__webpack_exports__, "OpportunityItem", function() { return OpportunityItem; });
/* concated harmony reexport UnWrapper */__webpack_require__.d(__webpack_exports__, "UnWrapper", function() { return UnWrapper; });
/* concated harmony reexport RealPopup */__webpack_require__.d(__webpack_exports__, "RealPopup", function() { return RealPopup; });
/* concated harmony reexport Tabs */__webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* concated harmony reexport TabsNavigationItem */__webpack_require__.d(__webpack_exports__, "TabsNavigationItem", function() { return TabsNavigationItem; });
/* concated harmony reexport TabsContentItem */__webpack_require__.d(__webpack_exports__, "TabsContentItem", function() { return TabsContentItem; });
/* concated harmony reexport UseCase */__webpack_require__.d(__webpack_exports__, "UseCase", function() { return UseCase; });
/* concated harmony reexport ProductCard */__webpack_require__.d(__webpack_exports__, "ProductCard", function() { return components_ProductCard_ProductCard; });
/* concated harmony reexport TariffCard */__webpack_require__.d(__webpack_exports__, "TariffCard", function() { return components_TariffCard_TariffCard; });
/* concated harmony reexport BenefitItem */__webpack_require__.d(__webpack_exports__, "BenefitItem", function() { return BenefitItem; });
/* concated harmony reexport BenefitBlock */__webpack_require__.d(__webpack_exports__, "BenefitBlock", function() { return BenefitBlock; });
/* concated harmony reexport PortraitTile */__webpack_require__.d(__webpack_exports__, "PortraitTile", function() { return PortraitTile; });
/* concated harmony reexport PortraitTileItem */__webpack_require__.d(__webpack_exports__, "PortraitTileItem", function() { return PortraitTileItem; });
/* concated harmony reexport Timeline */__webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });
/* concated harmony reexport TimelineItem */__webpack_require__.d(__webpack_exports__, "TimelineItem", function() { return TimelineItem; });
/* concated harmony reexport ScrollBar */__webpack_require__.d(__webpack_exports__, "ScrollBar", function() { return ScrollBar; });
/* concated harmony reexport VerticalScrollBar */__webpack_require__.d(__webpack_exports__, "VerticalScrollBar", function() { return VerticalScrollBar; });
/* concated harmony reexport ReplacementLink */__webpack_require__.d(__webpack_exports__, "ReplacementLink", function() { return ReplacementLink; });
/* concated harmony reexport CardCarousel */__webpack_require__.d(__webpack_exports__, "CardCarousel", function() { return CardCarousel; });
/* concated harmony reexport CardLayout */__webpack_require__.d(__webpack_exports__, "CardLayout", function() { return CardLayout; });
/* concated harmony reexport GalleryCarousel */__webpack_require__.d(__webpack_exports__, "GalleryCarousel", function() { return components_GalleryCarousel_GalleryCarousel; });
/* concated harmony reexport GalleryCarouselItem */__webpack_require__.d(__webpack_exports__, "GalleryCarouselItem", function() { return GalleryCarousel_GalleryCarouselItem; });
/* concated harmony reexport OptionsList */__webpack_require__.d(__webpack_exports__, "OptionsList", function() { return OptionsList; });
/* concated harmony reexport OptionsListInfoItem */__webpack_require__.d(__webpack_exports__, "OptionsListInfoItem", function() { return OptionsListInfoItem; });
/* concated harmony reexport GameArrow */__webpack_require__.d(__webpack_exports__, "GameArrow", function() { return GameArrow; });
/* concated harmony reexport CheckboxTabs */__webpack_require__.d(__webpack_exports__, "CheckboxTabs", function() { return CheckboxTabs; });
/* concated harmony reexport CountdownTimer */__webpack_require__.d(__webpack_exports__, "CountdownTimer", function() { return CountdownTimer; });
/* concated harmony reexport SwipeLeft */__webpack_require__.d(__webpack_exports__, "SwipeLeft", function() { return SwipeLeft; });
/* concated harmony reexport SwipeRight */__webpack_require__.d(__webpack_exports__, "SwipeRight", function() { return SwipeRight; });
/* concated harmony reexport OutsideClickDirective */__webpack_require__.d(__webpack_exports__, "OutsideClickDirective", function() { return OutsideClickDirective; });





 // console.info('OptionsList',OptionsList)








var VueRtStyle = {
  install: function install(Vue, config) {
    if (!Vue.RtStyle) {
      if (window && window[variables.globalSettingsKey] && window[variables.globalSettingsKey].useValidator) {
        Vue.use(external_vee_validate_default.a);
      }

      Vue.component(components_ScrollTabs_ScrollTabs.name, components_ScrollTabs_ScrollTabs.component);
      Vue.component(Card.name, Card);
      Vue.component(CardBuy.name, CardBuy);
      Vue.component(CardImage.name, CardImage);
      Vue.component(CardImageList.name, CardImageList);
      Vue.component(Banner.name, Banner);
      Vue.component(BannerItem.name, BannerItem);
      Vue.component(BannerPaginatorItem.name, BannerPaginatorItem);
      Vue.component(BannerVideoGameControl.name, BannerVideoGameControl);
      Vue.component(FullscreenImage.name, FullscreenImage);
      Vue.component(RowList.name, RowList);
      Vue.component(RowListItem.name, RowListItem);
      Vue.component(Table.name, Table);
      Vue.component(TableCol.name, TableCol);
      Vue.component(TableHeadItem.name, TableHeadItem);
      Vue.component(TableItem.name, TableItem);
      Vue.component(TableRow.name, TableRow);
      Vue.component(DownloadContent.name, DownloadContent);
      Vue.component(InlineDropdown.name, InlineDropdown);
      Vue.component(InlineDropdownItem.name, InlineDropdownItem);
      Vue.component(Tag.name, Tag);
      Vue.component(TagsList.name, TagsList);
      Vue.component(Filter.name, Filter);
      Vue.component(FilterWatcher.name, FilterWatcher);
      Vue.component(OptionsList.name, OptionsList);
      Vue.component(OptionsListInfoItem.name, OptionsListInfoItem);
      Vue.component(FilterCaller.name, FilterCaller);
      Vue.component(Sticky.name, Sticky);
      Vue.component(StickyBottomLine.name, StickyBottomLine);
      Vue.component(ResizeContentHeight.name, ResizeContentHeight);
      Vue.component(Youtube.name, Youtube);
      Vue.component(Popup.name, Popup);
      Vue.component(LinksBlock.name, LinksBlock);
      Vue.component(Hint.name, Hint);
      Vue.component(GameArrow.name, GameArrow);
      Vue.component(Swiper.name, Swiper);
      Vue.component(Slide.name, Slide);
      Vue.component(Pattern.name, Pattern);
      Vue.component(Opportunity.name, Opportunity);
      Vue.component(OpportunityItem.name, OpportunityItem);
      Vue.component(UnWrapper.name, UnWrapper);
      Vue.component(RealPopup.name, RealPopup);
      Vue.component(UseCase.name, UseCase);
      Vue.component(BenefitBlock.name, BenefitBlock);
      Vue.component(BenefitItem.name, BenefitItem);
      Vue.component(PortraitTile.name, PortraitTile);
      Vue.component(PortraitTileItem.name, PortraitTileItem);
      Vue.component(Timeline.name, Timeline);
      Vue.component(TimelineItem.name, TimelineItem);
      Vue.component(ScrollBar.name, ScrollBar);
      Vue.component(VerticalScrollBar.name, VerticalScrollBar);
      Vue.component(ReplacementLink.name, ReplacementLink);
      Vue.component(Carousel.name, Carousel);
      Vue.component(CarouselSlide.name, CarouselSlide);
      Vue.component(CardCarousel.name, CardCarousel);
      Vue.component(CardB2o.name, CardB2o);
      Vue.component(CardLayout.name, CardLayout);
      Vue.component(CountdownTimer.name, CountdownTimer); // tsx components
      // Vue.component(Carousel.name, Carousel.component);
      // Vue.component(CarouselSlide.name, CarouselSlide.component);

      Vue.component(Tabs.name, Tabs);
      Vue.component(CheckboxTabs.name, CheckboxTabs);
      Vue.component(TabsContentItem.name, TabsContentItem);
      Vue.component(TabsNavigationItem.name, TabsNavigationItem);
      Vue.component(components_GalleryCarousel_GalleryCarousel.name, components_GalleryCarousel_GalleryCarousel.component);
      Vue.component(GalleryCarousel_GalleryCarouselItem.name, GalleryCarousel_GalleryCarouselItem.component);
      Vue.component(components_ProductCard_ProductCard.name, components_ProductCard_ProductCard.component);
      Vue.component(components_TariffCard_TariffCard.name, components_TariffCard_TariffCard.component);
      Vue.component(SlideContent_SlideContent.name, SlideContent_SlideContent.component);
      Vue.component(SlideContent_SlideContentDottedContent.name, SlideContent_SlideContentDottedContent.component);
      Vue.component(SlideContent_SlideContentDottedHeader.name, SlideContent_SlideContentDottedHeader.component);
      Vue.directive(SwipeLeft.name, SwipeLeft);
      Vue.directive(SwipeRight.name, SwipeRight);
      Vue.directive(OutsideClickDirective.name, OutsideClickDirective);
      Vue.directive(SlideContentVerticalDirective.name, SlideContentVerticalDirective);
      Vue.directive(ScrollToOnClickDirective.name, ScrollToOnClickDirective);
      Vue.RtStyle = true;
      Vue.config.test = true;
    }
  }
}; // VueRtStyle.directives = { SwipeLeft, SwipeRight, OutsideClickDirective, FilterCallerDirective};

VueRtStyle.directives = {
  SwipeLeft: SwipeLeft,
  SwipeRight: SwipeRight,
  OutsideClickDirective: OutsideClickDirective
}; // if(localStorage && localStorage.getItem('dev_mode')){
//   localStorage.setItem('dev_mode__version',version);
// }

/**
 * Глобальные настройки библиотеки
 * -Для добавления своих настроек, создайте объект
 * с названием из Global.globalSettingsKey и положите перед подключением либы
 */

var settingsKey = variables.globalSettingsKey;
var version = package_0.version;

if (settingsKey) {
  if (!window[settingsKey]) window[settingsKey] = {};
  if (!window[settingsKey].segment) window[settingsKey].segment = variables.defaultSegment;
  window[settingsKey].version = version;
} // @Deprecated


window.RTK_STYLE_KIT_MOLECULES_VER = version;
VueRtStyle.version = version;
/* harmony default export */ var src_0 = __webpack_exports__["default"] = (VueRtStyle);


/***/ })
/******/ ]);
});