"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("./styles.css");
var data_json_1 = require("../data/data.json");
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
