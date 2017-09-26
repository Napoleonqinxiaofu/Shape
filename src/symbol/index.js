/**
 * Create by xiaofu.qin {2017/9/26}
 * description:
 */
define(["require", "./src/circle", "./src/square", "./src/cross", "./src/diamond",
    "./src/star", "./src/triangle"], function (require) {

    var circle = require("./src/circle");
    var square = require("./src/square");
    var cross = require("./src/cross");
    var diamond = require("./src/diamond");
    var star = require("./src/star");
    var triangle = require("./src/triangle");

    var context = require("../lineAndArea/context");

    function Symbol() {
        if (this instanceof Symbol) {
            this.init();
            return this;
        } else {
            return new Symbol();
        }
    }

    Symbol.prototype = {
        circle: circle,
        square: square,
        cross: cross,
        diamond: diamond,
        star: star,
        triangle: triangle,
        context: context
    };

    Symbol.types = {
        circle: true,
        square: true,
        cross: true,
        diamond: true,
        star: true,
        triangle: true,
        context: true
    };

    Symbol.prototype.init = function() {
        this._context = null;

        return this;
    };

    return Symbol;

});
 