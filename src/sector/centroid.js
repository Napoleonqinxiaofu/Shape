/**
 * Create by xiaofu.qin {2017/9/23}
 * description: 获取整个圆环的中心点
 */
define(["require"], function (require) {

    function centroid() {

        var angle = (this._startAngle + this._endAngle) / 2,
            distance = this._innerRadius + (this._outerRadius - this._innerRadius) / 2;

        return [distance * Math.cos(angle), distance * Math.sin(angle)];
    }

    return {
        centroid: centroid
    };

});
 