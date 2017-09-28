/**
 * Create by xiaofu.qin {2017/9/26}
 * description:
 */
define(["require", "../../canvas/helper"], function (require) {

    var helper = require("../../canvas/helper");

    function calcTrianglePoints(x, y, length) {
        var points = [];
        var sin60 = Math.sin(Math.PI / 3);

        // 需要注意的是canvas的y正向与正常的读卡而坐标的y正向是反向的
        points.push({
            x: x + length / 2,
            y: y + length * sin60 / 3
        });

        points.push({
            x: x,
            y: y - length * sin60 / 3 * 2
        });

        points.push({
            x: x - length / 2,
            y: y + length * sin60 / 3
        });

        return points;

    }

    /**
     * 三角形需要提供中心点以及边长
     */
    return function cross(x, y, length, styles) {
        var context = this._context;
        var points = calcTrianglePoints(x, y, length);

        helper.retinaScale(context);

        context.save();
        context.beginPath();

        context.lineJoin = "miter";
        helper.setContextStyles(context, styles);

        context.moveTo(points[0].x, points[0].y);
        points.forEach(function (p) {
            context.lineTo(p.x, p.y);
        });

        context.fill();
        context.closePath();
        context.restore();

        return this;
    }
});
 