/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/behaviors/behaviors.ts":
/*!************************************!*\
  !*** ./src/behaviors/behaviors.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var behaviors = {
    'log': function (actor, game) {
        console.log('foo');
    },
    'texture': function (actor, game) {
        if (typeof actor.properties.x == 'number' &&
            typeof actor.properties.y == 'number' &&
            typeof actor.properties.image == 'string') {
            game.video.drawImage(actor.properties.x, actor.properties.y, actor.properties.image);
        }
    },
    'rectangle': function (actor, game) {
        if (typeof actor.properties.x == 'number' &&
            typeof actor.properties.y == 'number' &&
            typeof actor.properties.width == 'number' &&
            typeof actor.properties.height == 'number')
            game.video.drawRect(actor.properties.x, actor.properties.y, actor.properties.width, actor.properties.height);
    },
    'player': function (actor, game) {
        if (game.input.poll('ArrowRight') && typeof actor.properties.x == 'number')
            actor.properties.x += 4;
        if (game.input.poll('ArrowLeft') && typeof actor.properties.x == 'number')
            actor.properties.x -= 4;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (behaviors);


/***/ }),

/***/ "./src/html5audio.ts":
/*!***************************!*\
  !*** ./src/html5audio.ts ***!
  \***************************/
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

/***/ "./src/html5data.ts":
/*!**************************!*\
  !*** ./src/html5data.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var HTML5Data = (function () {
    function HTML5Data() {
    }
    HTML5Data.prototype.fetchStage = function (file, game) {
        var xhttp = new XMLHttpRequest();
        xhttp.addEventListener('load', function () {
            var dom = new DOMParser();
            var doc = dom.parseFromString(xhttp.responseText, 'text/xml');
            var groups = doc.querySelectorAll('g');
            var newStage = [];
            groups.forEach(function (element) {
                var actor = { id: '', properties: {}, behaviors: [] };
                var text = element.querySelector('text').textContent;
                var text2 = text.split('&');
                element.querySelectorAll('rect').forEach(function (index) {
                    actor.properties.x = parseInt(index.attributes.getNamedItem('x').value);
                    actor.properties.y = parseInt(index.attributes.getNamedItem('y').value);
                    actor.properties.width = parseInt(index.attributes.getNamedItem('width').value);
                    actor.properties.height = parseInt(index.attributes.getNamedItem('height').value);
                });
                element.querySelectorAll('image').forEach(function (index) {
                    actor.properties.image = index.attributes.getNamedItem('xlink:href').value.replace('../', '');
                });
                actor.id = text2[0];
                var properties = text2[1].split(',');
                properties.forEach(function (property) {
                    var property2 = property.split(':');
                    actor.properties[property2[0], property[1]];
                });
                actor.behaviors = text2[2].split(',');
                newStage.push(actor);
            });
            game.stage = newStage;
        });
        xhttp.open("GET", file);
        xhttp.send();
    };
    return HTML5Data;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTML5Data);


/***/ }),

/***/ "./src/html5game.ts":
/*!**************************!*\
  !*** ./src/html5game.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _html5video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html5video */ "./src/html5video.ts");
/* harmony import */ var _html5audio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html5audio */ "./src/html5audio.ts");
/* harmony import */ var _html5input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html5input */ "./src/html5input.ts");
/* harmony import */ var _html5data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./html5data */ "./src/html5data.ts");
/* harmony import */ var _behaviors_behaviors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./behaviors/behaviors */ "./src/behaviors/behaviors.ts");





var HTML5Game = (function () {
    function HTML5Game() {
        var _this = this;
        this.video = new _html5video__WEBPACK_IMPORTED_MODULE_0__["default"](1280, 720);
        this.audio = new _html5audio__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.input = new _html5input__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.data = new _html5data__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.stage = [];
        this.loadStage('stages/title.svg');
        setInterval(function () { _this.main(); }, 1000);
    }
    HTML5Game.prototype.loadStage = function (file) {
        this.data.fetchStage(file, this);
    };
    HTML5Game.prototype.main = function () {
        var _this = this;
        console.log(this.stage);
        this.video.clear();
        this.stage.forEach(function (actor) {
            actor.behaviors.forEach(function (behavior) {
                if (typeof _behaviors_behaviors__WEBPACK_IMPORTED_MODULE_4__["default"][behavior] == 'function')
                    _behaviors_behaviors__WEBPACK_IMPORTED_MODULE_4__["default"][behavior](actor, _this);
            });
        });
    };
    return HTML5Game;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTML5Game);


/***/ }),

/***/ "./src/html5input.ts":
/*!***************************!*\
  !*** ./src/html5input.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var HTML5Input = (function () {
    function HTML5Input() {
        var _this = this;
        this.map = {};
        document.addEventListener('keydown', function (e) {
            _this.map[e.key] = 1;
        });
        document.addEventListener('keyup', function (e) {
            _this.map[e.key] = 0;
        });
    }
    HTML5Input.prototype.poll = function (key) {
        return this.map[key];
    };
    return HTML5Input;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTML5Input);


/***/ }),

/***/ "./src/html5video.ts":
/*!***************************!*\
  !*** ./src/html5video.ts ***!
  \***************************/
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
        console.log(img);
        if (typeof this.images[img] == "undefined") {
            this.images[img] = new Image();
            this.images[img].src = img;
        }
        this.ctx.drawImage(this.images[img], x, y);
    };
    HTML5Video.prototype.drawRect = function (x, y, w, h) {
        this.ctx.fillStyle = '#FF0000';
        this.ctx.fillRect(x, y, w, h);
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
/* harmony import */ var _html5game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html5game */ "./src/html5game.ts");

new _html5game__WEBPACK_IMPORTED_MODULE_0__["default"]();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map