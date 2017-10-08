/**
 * Create by xiaofu.qin {2017/10/8}
 * description: 仪表盘上的指针
 */
define(["require", "./center", "./animate", "./render",
    "./length", "./angle", "./layout", "../../lineAndArea/context"], function (require) {

    var center = require("./center");
    var animate = require("./animate");
    var render = require("./render");
    var length = require("./length");
    var angle = require("./angle");
    var layout = require("./layout");
    var context = require("../../lineAndArea/context");

    function Indicator() {
        if (this instanceof Indicator) {
            this.init();
            return this;
        } else {
            return new Indicator();
        }
    }

    Indicator.prototype = {
        conxtructor: Indicator,
        init: init,
        animate: animate.animate,
        ease: animate.ease,
        center: center,
        context: context,
        render: render,
        length: length,
        angle: angle,
        layout: layout.layout
    };

    function init() {
        this._x = 0;
        this._y = 0;
        this._animationDuration = 0;
        this._easeMode = "easeOutCirc";

        // 长轴长度的次轴长度, 下面的数据是默认的
        this._majorLength = 10;
        this._secondaryLength = 6;

        this._angle = 0;

        this._context = null;
    }

    return Indicator;

});
 