/**
 * Create by xiaofu.qin {2017/9/21}
 */
define(function (require) {

    return function (accessor) {
        if (typeof accessor !== "function") {
            accessor = function (value) {
                return value;
            }
        }
        return accessor;
    }

});
