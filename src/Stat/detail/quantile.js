/**
 * Create by xiaofu.qin {2017/9/20}
 */
define(function (require) {

    var defaultAccessor = require("./defaultAccessor");

    function quantile(values, p, accessor) {
        accessor = defaultAccessor(accessor);
        var n = values.length;
        if (!n)
            return;

        if (p <= 0 || n < 2)
            return +accessor(0, values[0]);
        if (p >= 1)
            return +accessor(n - 1, values[n - 1]);

        var i = (n - 1) * p,
            i0 = Math.floor(i),
            value0 = +accessor(i0, values[i0]),
            value1 = +accessor(i0 + 1, values[i0 + 1]);
        return value0 + (value1 - value0) * (i - i0);
    }

    return quantile;
});
