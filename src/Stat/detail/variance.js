/**
 * Create by xiaofu.qin {2017/9/20}
 * 计算方差,这个计算方法还挺有趣的，没看懂，就这样算了吧
 */
define(function (require) {

    var defaultAccessor = require("./defaultAccessor");

    function variance(array, accessor) {
        var n = array.length,
            m = 0,
            i = -1,
            mean = 0,
            value,
            delta,
            sum = 0;

        accessor = defaultAccessor(accessor);

        while (++i < n) {
            if (!isNaN(value = accessor(i, array[i]))) {
                delta = value - mean;
                mean += delta / ++m;
                sum += delta * (value - mean);
            }
        }

        if (m > 1) return sum / (m - 1);
    }

    return variance;

});
