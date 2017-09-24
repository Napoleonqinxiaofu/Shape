/**
 * Create by xiaofu.qin {2017/9/19}
 */
define(function () {

    return function (accessor) {
        if (typeof accessor !== "function") {
            accessor = function(index, item) {
                return +item;
            }
        }

        return accessor;
    }

});