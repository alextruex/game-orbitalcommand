/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/audio/html5audio.ts":
/*!*********************************!*\
  !*** ./src/audio/html5audio.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var HTML5Audio = (function () {
    function HTML5Audio() {
        this.sounds = {};
    }
    HTML5Audio.prototype.playSound = function (snd) {
        if (typeof this.sounds[snd] == 'undefined') {
            this.sounds[snd] = new Audio();
            this.sounds[snd].src = snd;
        }
        this.sounds[snd].play();
    };
    HTML5Audio.prototype.loopSound = function () {
    };
    HTML5Audio.prototype.stopSound = function () {
    };
    return HTML5Audio;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTML5Audio);


/***/ }),

/***/ "./src/behaviors/behaviors.ts":
/*!************************************!*\
  !*** ./src/behaviors/behaviors.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var behaviors;
behaviors['log'] = function (actor, game) {
    console.log('foo');
};
behaviors['texture'] = function (actor, game) {
    if (typeof actor.properties.y == 'number' && typeof actor.properties.x == 'number' && typeof actor.properties.texture == 'string') {
        game.video.drawImage(actor.properties.x, actor.properties.y, actor.properties.texture);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (behaviors);


/***/ }),

/***/ "./src/game/html5game.ts":
/*!*******************************!*\
  !*** ./src/game/html5game.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _video_html5video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../video/html5video */ "./src/video/html5video.ts");
/* harmony import */ var _audio_html5audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../audio/html5audio */ "./src/audio/html5audio.ts");
/* harmony import */ var _input_html5input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/html5input */ "./src/input/html5input.ts");
/* harmony import */ var _behaviors_behaviors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../behaviors/behaviors */ "./src/behaviors/behaviors.ts");




var HTML5Game = (function () {
    function HTML5Game() {
        this.video = new _video_html5video__WEBPACK_IMPORTED_MODULE_0__["default"](1280, 720);
        this.audio = new _audio_html5audio__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.input = new _input_html5input__WEBPACK_IMPORTED_MODULE_2__["default"]();
        setInterval(this.main, 1000 / 60);
    }
    HTML5Game.prototype.loadStage = function () {
    };
    HTML5Game.prototype.main = function () {
        this.stage.forEach(function (actor) {
            actor.behaviors.forEach(function (behavior) {
                _behaviors_behaviors__WEBPACK_IMPORTED_MODULE_3__["default"][behavior];
            });
        });
    };
    return HTML5Game;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTML5Game);


/***/ }),

/***/ "./src/input/html5input.ts":
/*!*********************************!*\
  !*** ./src/input/html5input.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var HTML5Input = (function () {
    function HTML5Input() {
    }
    return HTML5Input;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTML5Input);


/***/ }),

/***/ "./src/video/html5video.ts":
/*!*********************************!*\
  !*** ./src/video/html5video.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var HTML5Video = (function () {
    function HTML5Video(width, height) {
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.border = '1px solid white';
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        document.body.style.backgroundColor = '#000000';
        this.images = {};
    }
    HTML5Video.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    HTML5Video.prototype.drawImage = function (x, y, img) {
        if (typeof this.images[img] == "undefined") {
            this.images[img] = new Image();
            this.images[img].src = img;
        }
        this.ctx.drawImage(this.images[img], x, y);
    };
    HTML5Video.prototype.resizeCanvas = function () {
    };
    return HTML5Video;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTML5Video);


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_html5game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/html5game */ "./src/game/html5game.ts");

new _game_html5game__WEBPACK_IMPORTED_MODULE_0__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map