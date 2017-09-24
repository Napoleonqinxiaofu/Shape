/**
 * Create by xiaofu.qin {2017/9/20}
 */
define(function (require) {

    function descending(a, b) {
        return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
    }

    return descending;

});
