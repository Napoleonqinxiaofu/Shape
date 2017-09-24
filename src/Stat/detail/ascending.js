/**
 * Create by xiaofu.qin {2017/9/20}
 */
define(function (require) {

    function ascending(a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }

    return ascending;

});
