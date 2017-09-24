/**
 * Create by xiaofu.qin {2017/9/23}
 */
define(function (require) {

    function radius(innerRadius, outerRadius) {
        innerRadius != null && (this._innerRadius = isNaN(+innerRadius) ? 0 : +innerRadius);
        outerRadius != null && (this._outerRadius = isNaN(+outerRadius) ? 0 : +outerRadius);

        return this;
    }

    return radius;

});
