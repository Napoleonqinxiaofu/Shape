/**
 * Create by xiaofu.qin {2017/9/19}
 */
define(function (require) {
    var accessorDefault = require("./defaultAccessor");

    function maxArray(array, accessor) {
        accessor = accessorDefault(accessor);

        var value, i = -1, len = array.length, maxValue;

        while (++i < len) {
            value = accessor(i, array[i]);

            if( array[i] == null || value == null || window.isNaN(value) ) {
                continue;
            }

            maxValue == undefined && (maxValue = value);

            if( maxValue < value ) {
                maxValue = value;
            }
        }

        return maxValue;
    }

    return maxArray;
});
