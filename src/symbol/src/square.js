/**
 * Create by xiaofu.qin {2017/9/26}
 * description:
 */
define(["require", "../../canvas/helper"], function (require) {

    var helper = require("../../canvas/helper");
    var slice = [].slice;

    return function (x, y, width, height, styles) {
        var context = this._context;
        helper.retinaScale(context);

        context.save();
        helper.setContextStyles(context, styles);

        context.beginPath();
        context.rect.apply(context, slice.call(arguments));
        context.clip();

        context.fill();
        context.restore();
        return this;
    };

});
 