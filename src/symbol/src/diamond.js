/**
 * Create by xiaofu.qin {2017/9/26}
 * description: 菱形
 */
define(["require", "../../canvas/helper"], function (require) {

    var helper = require("../../canvas/helper");

    /**
     * 菱形，需要提供中心点以及两条相互垂直的对角线长度的一半儿
     */
    return function diamond(x, y, hWidth, vWidth, styles) {
        var context = this._context;
        var points = [
            {x: x + hWidth, y: y},
            {x: x, y: y + vWidth},
            {x: x - hWidth, y: y},
            {x: x, y: y - vWidth}
        ];

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
 