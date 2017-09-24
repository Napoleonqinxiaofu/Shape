/**
 * Create by xiaofu.qin {2017/9/23}
 * description:
 */
define(["require", "../common/util", "../common/Math"], function (require) {

    var util = require("../common/util");
    var mathUtil = require("../common/Math");

    function layout() {
        if (!this._data) {
            throw new Error("layout function need be invoked after invoking the data function.");
        }

        // 经过data之后的数据应该是一个一维数组，而且每一个数组元素是一个Object，
        // Object里面的value保存最终的值
        this._data = calcPercentage(this._data);

        this._data = dealAngle(this, this._data);

        return this;
    }

    function calcPercentage(data) {
        var total = 0;
        data.forEach(function (d) {
            total += d.value;
        });

        data.forEach(function (d) {
            d.percent = d.value / total;
        });

        return data;
    }

    function dealAngle(self, data) {
        var startAngle = self._startAngle,
            endAngle = self._endAngle,
            padAngle = self._padAngle,
            diffAngle = endAngle - startAngle,
            lastAngle = startAngle,
            len = data.length;

        return data.map(function (d, index) {
            d.startAngle = lastAngle;
            d.endAngle = d.percent * diffAngle + d.startAngle - padAngle;
            lastAngle = d.endAngle + padAngle;
            (index === len - 1) && (d.endAngle = endAngle);
            return d;
        });
    }

    return {
        layout: layout
    };

});
 