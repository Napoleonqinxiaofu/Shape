/**
 * Create by xiaofu.qin {2017/9/23}
 * description:
 */
define(["require", "../common/defaultAccessor", "./angle", "./data", "./layout",
        "../lineAndArea/context", "../sector/radius", "./render", "../sector/sector"],
    function (require) {

    var defaultAccessor = require("../common/defaultAccessor");
    var angle = require("./angle");
    var data = require("./data");
    var layout = require("./layout");
    var context = require("../lineAndArea/context");
    var radius = require("../sector/radius");
    var center = require("../sector/center");
    var render = require("./render");

    var Sector = require("../sector/sector");

    function Pie() {
        if (this instanceof Pie) {
            this.init();
            return this;
        } else {
            return new Pie();
        }
    }

    Pie.prototype = {
        constructor: Pie,
        init: init,
        data: data.data,
        layout: layout.layout,

        angle: angle.angle,
        startAngle: angle.startAngle,
        endAngle: angle.endAngle,
        padAngle: angle.padAngle,

        innerRadius: function (num) {
            radius.apply(this, [num, null]);
            return this;
        },
        outerRadius: function (num) {
            radius.apply(this, [null, num]);
            return this;
        },
        radius: radius,

        center: center,
        context: context,
        render: render.render,
        ease: function(mode) {
            this._easeMode = mode;
            return this;
        },
        animate: function(duration) {
            this._animationDuration = duration;
            return this;
        }
    };

    function init() {
        this._startAngle = 0;
        this._endAngle = 0;
        this._padAngle = 0;

        this._context = null;
        this._data = null;
        this._originData = null;

        this._innerRadius = 0;
        this._outerRadius = 0;
        this._centers = [0, 0];

        this._easeMode = "easeOutBounce";
        this._animationDuration = null;

        this._dataAccessor = defaultAccessor();

        // 绘制扇形需要用到Sector函数,先初始化一下
        this._sectorHandle = new Sector.Sector();

        return this;
    }

    return Pie;

});
 