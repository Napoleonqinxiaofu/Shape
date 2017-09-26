/**
 * Create by xiaofu.qin {2017/9/25}
 * description:
 */
define(["require"], function (require) {

    var defaultAccessor = require("../common/defaultAccessor");

    // 现在的y是data传递进来的每一个数组元素其中的某一个值
    function xAccessor(accessor) {
        this._xAccessor = defaultAccessor(accessor);

        return this;
    }

    function yAccessor(accessor) {
        this._yAccessor = defaultAccessor(accessor);

        return this;
    }

    return {
        xAccessor: xAccessor,
        yAccessor: yAccessor
    };
});
 