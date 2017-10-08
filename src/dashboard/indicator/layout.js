/**
 * Create by xiaofu.qin {2017/10/8}
 * description: 根据所有给出的数据计算指针的方向、位置
 */
define(["require", "../../common/Math"], function (require) {

    var mathUtil = require("../../common/Math");

    // 计算三个指针的点
    // 点的顺序依次是右、上、左
    function calcPoints(angle) {
        var x = this._x,
            y = this._y,
            mLength = this._majorLength,
            sLength = this._secondaryLength,
            points = [];

        var tempAngle = mathUtil.numToRadian(angle - 90);

        points.push({
           x: (sLength / 2) * Math.cos(tempAngle) + x,
           y: (sLength / 2) * Math.sin(tempAngle) + y
        });

        tempAngle = mathUtil.numToRadian(angle);

        points.push({
            x: mLength * Math.cos(tempAngle) + x,
            y: mLength * Math.sin(tempAngle) + y
        });

        tempAngle = mathUtil.numToRadian(angle + 90);

        points.push({
            x: (sLength / 2) * Math.cos(tempAngle) + x,
            y: (sLength / 2) * Math.sin(tempAngle) + y
        });

        return points;
    }

    return {
        layout: calcPoints
    };

});
 