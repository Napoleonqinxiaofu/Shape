/**
 * Create by xiaofu.qin {2017/9/21}
 */
define(function (require) {

    var defaultAccessor = require("../common/defaultAccessor");

    // 现在的y是data传递进来的每一个数组元素其中的某一个值
    function xAccessor(accessor) {
        this._xAccessor = defaultAccessor(accessor);

        return this;
    }

    return xAccessor;

});
