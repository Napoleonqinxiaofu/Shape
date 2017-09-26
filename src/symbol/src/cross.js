/**
 * Create by xiaofu.qin {2017/9/26}
 * description:
 */
define(["require", "../../canvas/helper"], function (require) {
    var helper = require("../../canvas/helper");

    /**
     * 十字符号需要提供的参数是中心的坐标以及十字架的宽度
     */
    return function cross(x, y, width, styles) {
        var context = this._context;

        helper.retinaScale(context);

        context.save();
        context.beginPath();

        context.lineJoin = "miter";
        helper.setContextStyles(context, styles);

        context.moveTo(x, y);
        // 先竖后横
        context.lineTo(x, y - width / 2);
        context.lineTo(x, y + width / 2);
        context.lineTo(x, y);
        context.lineTo(x - width / 2, y);
        context.lineTo(x + width / 2, y);

        context.stroke();
        context.closePath();
        context.restore();

        return this;
    }

});
 