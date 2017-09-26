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

        function Area() {
            if (this instanceof Area) {
                this.init();

                return this;
            } else {
                return new Area();
            }
        }

        Area.prototype = util.clone(Line.prototype);
        Area.prototype.render = render.render;
        Area.prototype.baseY = baseY;

        Area.prototype.init = function () {
            // 初始化所有的属性
            this.y0 = 0;

            // 所有的数据点
            this._points = null;
            // 传递进来的最原始的数据
            this._originData = null;
            this._context = null;

            // 在这里初始化一下，this._curveMethod，直接调用curve方法，
            // 因为在该方法里面对这个属性进行了赋值
            this._curveMethod = this.curve(0);

            // 默认的存取器什么都不做，只是返回数据本身
            this._xAccessor = defaultAccessor();
            this._yAccessor = defaultAccessor();
            this._dataAccessor = defaultAccessor();

            this._animationDuration = 0;
            this._easeMode = "easeInOutCirc";

            // 默认是折线
            this._tension = 0;

            return this;
        };

        return Area;

    });
