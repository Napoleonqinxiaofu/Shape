/**
 * Create by xiaofu.qin {2017/9/23}
 * description:
 */
define(["require", "../common/Math"], function (require) {

    var mathUtil = require("../common/Math");

    function startAngle(angle) {
        this._startAngle = angle;
        return this;
    }

    function endAngle(angle) {
        this._endAngle = angle;
        return this;
    }

    function padAngle(angle) {
        // 将angle转化成弧度制
        this._padAngle = angle;
        return this;
    }

    function angle(startAngle, endAngle, padAngle) {
        startAngle != null && ( this._startAngle = startAngle);
        endAngle != null && ( this._endAngle = endAngle);
        padAngle != null && ( this._padAngle = padAngle);
        return this;
    }

    return {
        angle: angle,
        startAngle: startAngle,
        endAngle: endAngle,
        padAngle: padAngle
    };

});
 