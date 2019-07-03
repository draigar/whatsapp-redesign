/**
 * Created by Benjamin Francis on 6/26/2017.
 */

"use strict";

if (typeof jQuery === 'undefined') {
    throw new Error('Localstorage\'s API requires jQuery. jQuery must be included before Localstorage\'s API.')
}

var ls = {} // this is the callup function for localstorage

/**
 * First we check for localstorage if active on browser
 * this is neccessary to start with
 **/
ls.isLocalStorage = function () {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

ls.show = function (arg, object) {
    var elements = ls.getElements(arg);
    ls.showElements(arg, object);
}

ls.getElements = function (arg, object) {
    if (typeof arg === "object") {
        return [arg];
    }else {
        return document.querySelectorAll(arg);
    }
}

ls.showElements = function (arg, object) {
    $(object).html(arg);
}

// retrive dynamic data function
ls.getObject = function (arg) {
    var object = localStorage.getItem(arg);
    if(object) {
        return JSON.parse(object);
    }
    return [];
}
// store dynamic data
ls.setObject = function (arg,value) {
    var object = ls.getObject(arg);
    if(object.indexOf(arg) > -1 || !arg) {
        return false;
    }
    object.push(value);
    localStorage.setItem(arg, JSON.stringify(object));
    return true;
}
// clear stored object dynamically
ls.clearObject = function (arg) {
    localStorage.removeItem(arg);
    return true;
}
// check if storage is empty
ls.checkValue = function (arg) {
    if (localStorage.getItem(arg) === null) {
        return true;
    }
    return false;
}