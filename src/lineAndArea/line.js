/**
 * Create by xiaofu.qin {2017/9/21}
 * 线段生成器的入口文件
 */
define(function (require) {

    var defaultAccessor = require("../common/defaultAccessor");

    var dataTool = require("./data");
    var xAccessor = require("./xAccessor");
    var yAccessor = require("./yAccessor");
    var curveTool = require("./curve");
    var context = require("./context");
    var render = require("./renderLine");
    var animateRalative = require("./animateRalative");

    // 定义一个构造函数
    function Line() {
        if (this instanceof Line) {
            this.init();

            return this;
        } else {
            return new Line();
        }
    }

    Line.prototype = {
        constructor: Line,
        data: dataTool.acceptData,
        x: xAccessor,
        y: yAccessor,
        curve: curveTool.curve,
        context: context,
        render: render,
        animate: animateRalative.animate,
        ease: animateRalative.ease
    };

    Line.prototype.init = function() {
        // 初始化所有的属性

        // 所有的数据点
        this._points = null;
        // 传递进来的最原始的数据
        this._originData = null;
        this._context = null;

        // 默认的线条不是曲线
        this._curveMethod = this.curve(false);
        this._tension = 0;

        this._animationDuration = null;
        this._easeMode = "easeInOutCirc";

        // 默认的存取器什么都不做，只是返回数据本身
        this._xAccessor = defaultAccessor();
        this._yAccessor = defaultAccessor();
        this._dataAccessor = defaultAccessor();

        return this;
    };

    return Line;

});