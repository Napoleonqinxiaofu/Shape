/**
 * Create by xiaofu.qin {2017/9/19}
 */
define(function (require) {

    var utilMath = require("./Util/Math");
    var defaultAccessor = require("./defaultAccessor");

    function sum(array, accessor) {
        accessor = defaultAccessor(accessor);
        var total = 0,
            len = array.length,
            i = -1,
            value;

        while (++i < len) {
            value = accessor(array[i], i);

            if (value == null || array[i] == null || isNaN(value)) {
                continue;
            }
            total = utilMath.accAdd(value, total);
        }

        return total;
    }

    return sum;
});
