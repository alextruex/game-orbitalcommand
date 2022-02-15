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
/* harmony import */ var _generic_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generic/image */ "./src/behaviors/generic/image.ts");
/* harmony import */ var _hud_startbutton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hud/startbutton */ "./src/behaviors/hud/startbutton.ts");
/* harmony import */ var _objects_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objects/player */ "./src/behaviors/objects/player.ts");
/* harmony import */ var _objects_ball__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objects/ball */ "./src/behaviors/objects/ball.ts");




var behaviors = {
    'image': _generic_image__WEBPACK_IMPORTED_MODULE_0__["default"],
    'startbutton': _hud_startbutton__WEBPACK_IMPORTED_MODULE_1__["default"],
    'player': _objects_player__WEBPACK_IMPORTED_MODULE_2__["default"],
    'ball': _objects_ball__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (behaviors);


/***/ }),

/***/ "./src/behaviors/generic/image.ts":
/*!****************************************!*\
  !*** ./src/behaviors/generic/image.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function image(actor, game) {
    game.video.drawImage(actor.x, actor.y, actor.img);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (image);


/***/ }),

/***/ "./src/behaviors/hud/startbutton.ts":
/*!******************************************!*\
  !*** ./src/behaviors/hud/startbutton.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function startbutton(actor, game) {
    if (typeof actor.load == "undefined") {
        actor.load = 1;
        actor.frame = 0;
    }
    game.video.drawImage(actor.frame * 1280 / 640, 0, 'images/hud/stars1.png');
    game.video.drawImage(actor.frame * 1280 / 480, 0, 'images/hud/stars2.png');
    if (typeof actor.frame == 'number')
        actor.frame += 1;
    if (actor.frame > 120)
        actor.frame = 1;
    game.video.drawImage(440, 520, 'images/hud/startbutton.png');
    var x = game.input.poll('mouseX');
    var y = game.input.poll('mouseY');
    if (x > 440 && x < 840 && y > 520 && y < 640) {
        game.video.drawImage(440, 520, 'images/hud/startarrows.png');
        if (game.input.poll('mouse1')) {
            game.data.loadStage('stages/stage1.xml', game);
        }
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startbutton);


/***/ }),

/***/ "./src/behaviors/objects/ball.ts":
/*!***************************************!*\
  !*** ./src/behaviors/objects/ball.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ball(actor, game) {
    game.video.drawCircle(+actor.x, +actor.y, +actor.r);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ball);


/***/ }),

/***/ "./src/behaviors/objects/player.ts":
/*!*****************************************!*\
  !*** ./src/behaviors/objects/player.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function player(actor, game) {
    if (typeof actor.initialize == 'undefined') {
        actor.xspeed = '5';
        actor.yspeed = '-5';
        actor.initialize = '1';
    }
    var x = +actor.x;
    var y = +actor.y;
    var r = +actor.r;
    var xspeed = +actor.xspeed;
    var yspeed = +actor.yspeed;
    var G = .001;
    game.stage.forEach(function (i) {
        if (i.name == 'ball') {
            var iX = +i.x;
            var iY = +i.y;
            var iR = +i.r;
            xspeed += (iX - x) * G;
            yspeed += (iY - y) * G;
        }
    });
    x += xspeed;
    y += yspeed;
    game.video.drawCircle(x, y, +actor.r);
    actor.x = x + '';
    actor.y = y + '';
    actor.xspeed = xspeed + '';
    actor.yspeed = yspeed + '';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);


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
    HTML5Data.prototype.loadStage = function (file, game) {
        var xhttp = new XMLHttpRequest();
        xhttp.addEventListener('load', function () {
            var _a;
            var dom = new DOMParser();
            var doc = dom.parseFromString(xhttp.responseText, 'text/xml');
            console.log(doc);
            var newStage = [];
            var actors = (_a = doc.firstElementChild) === null || _a === void 0 ? void 0 : _a.children;
            if (typeof actors != 'undefined')
                for (var i = 0; i < actors.length; i++) {
                    var newActor = {};
                    newActor.name = actors[i].nodeName;
                    for (var j = 0; j < actors[i].attributes.length; j++) {
                        var key = actors[i].attributes[j].nodeName;
                        var value = actors[i].attributes[j].nodeValue;
                        if (typeof key == 'string' && typeof value == 'string' || typeof value == 'number') {
                            newActor[key] = value;
                        }
                    }
                    newStage.push(newActor);
                }
            game.stage = newStage;
            console.log(newStage);
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
        this.state = {};
        this.stage = [];
        this.data.loadStage('stages/stage1.xml', this);
        window.requestAnimationFrame(function () { _this.main(); });
    }
    HTML5Game.prototype.main = function () {
        var _this = this;
        this.video.clear();
        this.stage.forEach(function (actor) {
            if (typeof _behaviors_behaviors__WEBPACK_IMPORTED_MODULE_4__["default"][actor.name] != 'undefined')
                _behaviors_behaviors__WEBPACK_IMPORTED_MODULE_4__["default"][actor.name](actor, _this);
        });
        window.requestAnimationFrame(function () { _this.main(); });
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
        this.canvas = document.getElementById("gameCanvas");
        this.map = {
            mouseX: 0,
            mouseY: 0
        };
        document.addEventListener('keydown', function (e) {
            _this.map[e.key] = 1;
        });
        document.addEventListener('keyup', function (e) {
            _this.map[e.key] = 0;
        });
        document.addEventListener('mousemove', function (e) {
            var mouseX = Math.round((e.clientX - _this.canvas.offsetLeft) * (_this.canvas.width / _this.canvas.clientWidth));
            var mouseY = Math.round((e.clientY - _this.canvas.offsetTop) * (_this.canvas.height / _this.canvas.clientHeight));
            _this.map['mouseX'] = mouseX;
            _this.map['mouseY'] = mouseY;
        });
        document.addEventListener('mousedown', function (e) {
            _this.map['mouse1'] = 1;
        });
        document.addEventListener('mouseup', function (e) {
            _this.map['mouse1'] = 0;
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
        this.canvas.style.width = '100vw';
        this.canvas.style.height = 'height: 56.25vw';
        this.canvas.style.maxHeight = '100vh';
        this.canvas.style.maxWidth = '177.78vh';
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '0px';
        this.canvas.style.right = '0px';
        this.canvas.style.top = '0px';
        this.canvas.style.bottom = '0px';
        this.canvas.style.margin = 'auto';
        this.canvas.id = "gameCanvas";
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        document.body.style.backgroundColor = '#000000';
        document.body.style.backgroundImage = 'url("images/backgrounds/wallpaper.png")';
        document.body.style.backgroundSize = 'cover';
        document.body.style.margin = '0px';
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
        var image = this.images[img];
        this.ctx.drawImage(image, x, y);
    };
    HTML5Video.prototype.drawRect = function (x, y, w, h) {
        this.ctx.fillStyle = '#FF0000';
        this.ctx.fillRect(x, y, w, h);
    };
    HTML5Video.prototype.drawCircle = function (x, y, r) {
        this.ctx.fillStyle = '#FF0000';
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'green';
        this.ctx.fill();
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = '#003300';
        this.ctx.stroke();
    };
    HTML5Video.prototype.debugText = function (text) {
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.font = 'bold 32px sans-serif';
        this.ctx.fillStyle = '#000000';
        this.ctx.fillText(text, 644, 20);
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.fillText(text, 640, 16);
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