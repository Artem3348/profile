/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 79:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 684:
/***/ ((module) => {

module.exports = JSON.parse('{"user":{"name":"Artem","avatar":"https://avatars.githubusercontent.com/u/117042730?v=4","location":"Saint-Petersburg, Russia","occupation":"developer"},"links":[{"url":"https://github.com/Artem3348","text":"github","icon":"fa fa-github"},{"url":"mailto:agatema@mail.ru","text":"email","icon":"fa fa-envelope"},{"url":"telto:89999999999","text":"phone","icon":"fa fa-phone"},{"url":"https://linkedin.com","text":"linkedin","icon":"fa fa-linkedin"},{"url":"https://telegram.org","text":"telegram","icon":"fa fa-telegram"}]}');

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
var exports = __webpack_exports__;
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_require__(79);
__webpack_require__(279);
var data_json_1 = __webpack_require__(684);
var Profile = /** @class */ (function () {
    function Profile() {
    }
    Profile.prototype.render = function (data) {
        var $avatar = document.querySelector('#avatar');
        if ($avatar === null) {
            throw new Error('error');
        }
        $avatar.setAttribute('src', data.user.avatar);
        var $name = document.querySelector('#name');
        if ($name === null) {
            throw new Error('error');
        }
        $name.innerText = data.user.name;
        var $location = document.querySelector('#location');
        if ($location === null) {
            throw new Error('error');
        }
        $location.innerHTML += ' ' + data.user.location;
        var $occupation = document.querySelector('#occupation');
        if ($occupation === null) {
            throw new Error('error');
        }
        $occupation.innerText = data.user.occupation;
        var $templateBtnLink = document.querySelector('#link');
        if ($templateBtnLink === null) {
            throw new Error('error');
        }
        this.generateLinks(data.links, $templateBtnLink);
        $templateBtnLink.remove();
        var $year = document.querySelector('#year');
        if ($year === null) {
            throw new Error('error');
        }
        $year.innerText = String(new Date().getFullYear());
    };
    Profile.prototype.generateLinks = function (linksData, $templateBtnLink) {
        if ($templateBtnLink === null) {
            throw new Error('error');
        }
        for (var _i = 0, linksData_1 = linksData; _i < linksData_1.length; _i++) {
            var name_1 = linksData_1[_i];
            var $newBtnLink = $templateBtnLink.cloneNode(true);
            var linkText = ' ' + name_1.text;
            var $newLink = $newBtnLink.querySelector('a');
            if ($newLink === null) {
                throw new Error('error');
            }
            $newLink.append(linkText);
            $newLink.setAttribute('href', name_1.url);
            var $newBtnLinkIcon = $newBtnLink.querySelector('i');
            if ($newBtnLinkIcon === null) {
                throw new Error('error');
            }
            $newBtnLinkIcon.className += ' ' + name_1.icon;
            $templateBtnLink.before($newBtnLink);
        }
        return true;
    };
    return Profile;
}());
var profile = new Profile();
profile.render(data_json_1.default);
function toggleDisplayPageContent() {
    var $elements = document.querySelectorAll('body *');
    $elements.forEach(function ($element) {
        if ($element.style.display === '' && $element.className !== 'loader') {
            $element.style.display = 'none';
        }
        else {
            $element.removeAttribute('style');
        }
    });
}
function createStub() {
    var $stubContainer = document.createElement('div');
    $stubContainer.className +=
        'container d-flex flex-column justify-content-center align-items-center';
    var $stub = document.createElement('div');
    $stub.textContent = 'Профиль загружается';
    $stubContainer.append($stub);
    var $loader = document.createElement('span');
    $loader.className = 'loader';
    renderStub($stubContainer, $loader);
    return $stub;
}
function renderStub($stub, $loader) {
    var $container = document.querySelector('.container');
    if ($container === null) {
        throw new Error('error');
    }
    $container.append($stub);
    $stub.append($loader);
}
function addDisplayStub($stub) {
    $stub.style.display = 'block';
}
function removeStub($stub) {
    if ($stub.parentElement === null) {
        throw new Error('error');
    }
    $stub.parentElement.remove();
}
document.addEventListener('DOMContentLoaded', function () {
    var $stub = createStub();
    toggleDisplayPageContent();
    addDisplayStub($stub);
    setTimeout(function () {
        toggleDisplayPageContent();
        removeStub($stub);
    }, 2500);
});

})();

/******/ })()
;