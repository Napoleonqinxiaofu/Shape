/**
 * Create by xiaofu.qin {2017/9/20}
 */
define(function (require) {

    var quantile = require("./quantile");
    var ascending =  require("./ascending");

    function median(array, accessor) {
        var i = -1,
            len = array.length,
            value;
        var newArray = [];

        // 过滤掉undefined和null、NaN
        while (++i < len) {
            value = array[i];
            if (value == null || isNaN(value)) {
                continue;
            }
            newArray.push(value);
        }

        return quantile(newArray.sort(ascending), 0.5, accessor);
    }

    return median;
});
