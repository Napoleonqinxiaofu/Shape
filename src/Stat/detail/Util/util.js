/**
 * Create by xiaofu.qin {2017/9/20}
 */
define(function (require) {

    var toString = Object.prototype.toString;

    function isArray(arg) {
        if( Array.isArray) {
            return Array.isArray(arg);
        }
        return /array\]$/.test(toString.call(arg));
    }

    return {
        isArray: isArray
    };
});
