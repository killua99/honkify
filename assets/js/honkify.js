/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/honkify.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/honkify/index.js":
/*!***************************************!*\
  !*** ./node_modules/honkify/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst honkify = (elementToHonkify = false) => {\n  if (typeof window === 'undefined') {\n    console.warn('honkify only works in the browser.');\n    console.warn('I mean... honk!');\n    return;\n  }\n\n  //check if the user is on iOS Safari, if they are, we initiate the safari audio \"hack\"\n  const ua = window.navigator.userAgent;\n  const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);\n  const webkit = !!ua.match(/WebKit/i);\n  const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);\n\n  const audio = new Audio(\n    'https://res.cloudinary.com/jlengstorf/video/upload/q_auto/v1569957993/honk-sound.mp3'\n  );\n  const defaultSelectors = [\n    'a',\n    'button',\n    'input[type=\"submit\"]',\n    'input[type=\"reset\"]',\n    'input[type=\"button\"]'\n  ];\n\n  /**\n   * if the platform is iOS Safari, we quickly play, pause, reset the audio object\n   * this allows it to be playable the next time an user clicks a link\n   */\n  if (iOSSafari) {\n    console.log('Honk! This is safari');\n    document.body.addEventListener('touchstart', () => {\n      audio.play();\n      audio.pause();\n      audio.currentTime = 0;\n    });\n  }\n\n  const everythingClickable = Array.from(\n    (elementToHonkify || document).querySelectorAll(defaultSelectors.join(','))\n  ).filter(item => !item.classList.contains('no-honk'));\n\n  const honk = event => {\n    event.preventDefault();\n    event.stopImmediatePropagation();\n\n    audio.play();\n\n    return false;\n  };\n\n  everythingClickable.forEach(link => {\n    link.addEventListener('click', honk);\n  });\n\n  const dehonk = () => {\n    everythingClickable.forEach(link => {\n      link.removeEventListener('click', honk);\n    });\n  };\n\n  return dehonk;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (honkify);\n\n\n//# sourceURL=webpack:///./node_modules/honkify/index.js?");

/***/ }),

/***/ "./src/honkify.js":
/*!************************!*\
  !*** ./src/honkify.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var honkify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! honkify */ \"./node_modules/honkify/index.js\");\n\n\nconst body = document.querySelector('body');\n\nconst honker = () => {\n\tconst initialState = { state: goose.state, unregister: () => {} };\n\tconst honk = JSON.parse(JSON.stringify(initialState));\n\tlet unregister;\n\n\tbody.onkeydown = e => {\n\t\tif (goose.hotKey !== e.key || !goose.active) {\n\t\t\treturn;\n\t\t}\n\n\t\tswitch (honk.state) {\n\t\t\tcase 'lock':\n\t\t\t\tunregister = Object(honkify__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\t\t\t\thonk.state = 'loose';\n\t\t\t\thonk.unregister = unregister;\n\n\t\t\t\t// todo: Show a popup alert about the goose is loose!\n\t\t\t\tconsole.log('The goose is loose!');\n\n\t\t\t\tbreak;\n\n\t\t\tcase 'loose':\n\t\t\t\thonk.unregister();\n\n\t\t\t\thonk.state = initialState.state;\n\t\t\t\thonk.unregister = initialState.unregister;\n\n\t\t\t\tconsole.log('The goose is lock!');\n\n\t\t\t\tbreak;\n\t\t}\n\t};\n};\n\nhonker();\n\n//# sourceURL=webpack:///./src/honkify.js?");

/***/ })

/******/ });