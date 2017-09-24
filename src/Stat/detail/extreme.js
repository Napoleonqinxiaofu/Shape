/**
 * Create by xiaofu.qin {2017/9/20}
 * 返回数组中的最大和最小的值
 */
define(function (require) {

    var min = require("./min");
    var max = require("./max");
    var flatten = require("./flatten");

    function extreme(array, accessor) {
        array = flatten(array);
        var minValue = min(array, accessor);
        var maxValue = max(array, accessor);

        return [minValue, maxValue];
    }

    return extreme;

});
