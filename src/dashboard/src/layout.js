/**
 * Create by xiaofu.qin {2017/9/27}
 * description:
 */
define(["require", "./data", "../../Stat/index", "../../common/Math", "../../Scale/Linear/linear"], function (require) {

    var dataTool = require("./data");
    var Stat = require("../../Stat/index");
    var mathUtil = require("../../common/Math");
    var linear = require("../../Scale/Linear/linear");

    var ticksMap = {
        180: 8,
        360: 14
    };

    function layout() {
        this._data = dataTool.dealData(this._data, this._dataAccessor);
        var total = calcTotalValue(this._data);

        this._scale = linear().domain(total > 0 ? [0, total] : [total, 0])
            .range([0, this._angle]);

        this._scale.nice(ticksMap[this._angle]);

        console.log(this._scale.ticks(ticksMap[this._angle]));

        return this;
    }

    // 计算所有data里面的所有value的和
    function calcTotalValue(data) {
        return Stat.sum(data, function(d) {
            return +d.value;
        });
    }

    /**
     * 将value扩展成一个比较符合人类阅读习惯的数值。
     * @param value
     * @param count {Number} 刻度数量
     * @returns {*}
     */
    function niceValue(value, count) {
        value = +value;
        // [0, value] 或者[value, 0]之间设定有count-1个区间，也就是count个刻度。
        count = count-1 || 4;

        var step =  value / count,
            isReversed = value < 0;

        step = Math.abs(step);
        value = Math.abs(value);

        // 获取当前step的数量级
        var magnitude = parseInt(Math.log(step) / Math.log(10));

        // value === 0的时候
        if( !isFinite(magnitude) ) {
            return value;
        }

        // 现在获取当前数量级的第一个值
        var nextOrderMagnitude = Math.pow(10, magnitude);

        // 如果这个时候step正好等于nextOrderMagnitute，
        // 我们就不要获取下一个数量级的第一个值了，因为step就很完美
        if( step !== nextOrderMagnitude ) {
            magnitude += 1;
            nextOrderMagnitude = Math.pow(10, magnitude);
        }

        // 将step转化成(0, 1]之间的数值
        var newStep = step / nextOrderMagnitude;

        var arr = [0.1, 0.2, 0.25, 0.5, 1];

        // 将newStep转化成符合人类阅读习惯的数值
        arr.some(function(item) {
            if( newStep < item ) {
                newStep = item;
                return true;
            }
        });

        newStep = accMul(newStep, Math.pow(10, magnitude));

        var num = newStep * count;

        return isReversed ? num * -1 : num;
    }

    return {
        layout: layout,
        niceValue: niceValue
    };

});
 