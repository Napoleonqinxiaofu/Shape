/**
 * Create by xiaofu.qin {2017/9/26}
 * description:
 */
define(["require", "../../canvas/helper"], function (require) {

    var helper = require("../../canvas/helper");
    var pi = Math.PI,
        snippet = pi * 2 / 5,
        outerStartAngle = pi / 2,
        innerStartAngle = outerStartAngle + 36 / 180 * pi;

    function calcStarPoints(x, y, outerRadius, innerRadius) {
        var points = [],
            i = 0,
            num = 5;

        innerRadius = innerRadius || outerRadius / 2;

        for (; i < num; i++) {
            points.push({
                x: outerRadius * Math.cos(outerStartAngle + snippet * i) + x,
                y: outerRadius * Math.sin(outerStartAngle + snippet * i) + y
            });
            points.push({
                x: innerRadius * Math.cos(innerStartAngle + snippet * i) + x,
                y: innerRadius * Math.sin(innerStartAngle + snippet * i) + y
            });
        }

        return points;
    }

    return function star(x, y, r1, r0, styles) {
        var context = this._context;
        var points = calcStarPoints(x, y, r1, r0);

        helper.retinaScale(context);

        context.save();
        context.beginPath();

        context.lineJoin = "miter";
        helper.setContextStyles(context, styles);

        context.moveTo(points[0].x, points[0].y);
        points.push(points.shift());
        points.forEach(function (p) {
            context.lineTo(p.x, p.y);
        });
        context.fill();
        context.closePath();
        context.restore();

        return this;
    }
});
 