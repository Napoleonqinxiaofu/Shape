/**
 * Create by xiaofu.qin {2017/9/26}
 * description: 本来还想将所有的数据保存到内存中，现在想想算了吧，因为一个symbol也花不了多少消耗。
 */
define(["require", "../../canvas/helper"], function (require) {

    var helper = require("../../canvas/helper");

    var pi = Math.PI;

    return function (x, y, radius, styles) {
        var context = this._context;
        helper.retinaScale(context);

        context.save();
        helper.setContextStyles(context, styles);

        // 这一步简直会害死人啊，如果不加上clip的话，每一个绘制context的时候都会重新绘制整个画布，
        // 而这个时候的fillStyle之类的都会跟着当前的fillStyle一样变化
        context.beginPath();
        context.moveTo(x, y);
        context.arc(x, y, radius, 0, 2 * pi);
        context.clip();

        context.fill();
        context.restore();
        return this;
    };

});
 