/**
 * Create by xiaofu.qin {2017/9/21}
 * 线段生成器的入口文件
 */
define(["require", "../common/defaultAccessor", "./line", "./renderArea", "./baseY", "../common/util"],
    function (require) {

        var defaultAccessor = require("../common/defaultAccessor");
        var util = require("../common/util");

        var Line = require("./line");
        var render = require("./renderArea");
        var baseY = require("./baseY");
        var animateRalative = require("./animateRalative");

        function Area() {
            if (this instanceof Area) {
                this.init();

                return this;
            } else {
                return new Area();
            }
        }

        Area.prototype = util.clone(Line.prototype);

        Area.prototype.init = function () {
            // 初始化所有的属性
            this.y0 = 0;

            // 所有的数据点
            this._points = null;
            // 传递进来的最原始的数据
            this._originData = null;
            this._context = null;

            this._curveMethod = null;

            // 默认的存取器什么都不做，只是返回数据本身
            this._xAccessor = defaultAccessor();
            this._yAccessor = defaultAccessor();
            this._dataAccessor = defaultAccessor();

            this._animationDuration = null;
            this._easeMode = "easeInOutCirc";

            return this;
        };

        Area.prototype.render = render.render;
        Area.prototype.baseY = baseY;

        return Area;

    });
