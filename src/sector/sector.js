/**
 * Create by xiaofu.qin {2017/9/23}
 * 扇形
 */
define(function (require) {

    var startAngle = require("./startAngle");
    var endAngle = require("./endAngle");
    var radius = require("./radius");
    var renderArc = require("./renderSector");
    var centroid = require("./centroid");
    var context = require("./context");
    var center = require("./center");

    function Sector() {
        if (this instanceof Sector) {
            this.init();

            return this;
        } else {
            return new Sector();
        }
    }

    Sector.prototype = {
        startAngle: startAngle,
        endAngle: endAngle,
        innerRadius: function (num) {
            radius.call(this, num);
            return this;
        },
        outerRadius: function (num) {
            radius.call(this, null, num);
            return this;
        },
        radius: radius,
        centroid: centroid.centroid,
        context: context,
        render: renderArc.renderArc,
        // 设置圆心的位置
        center: center,
        animate: function (num) {
            this._animationDuration = isNaN(+num) ? 0 : +num;
            return this;
        },
        ease: function (mode) {
            this._easeMode = mode;
            return this;
        }
    };

    Sector.prototype.init = function () {
        this._startAngle = 0;
        this._endAngle = 0;
        this._innerRadius = 0;
        this._outerRadius = 0;
        this._centroid = null;
        this._context = null;
        this._centers = [0, 0];
        this._easeMode = "easeOutBounce";
        this._animationDuration = 0;

        return this;
    };

    return {
        Sector: Sector
    };
});
