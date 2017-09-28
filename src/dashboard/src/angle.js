/**
 * Create by xiaofu.qin {2017/9/27}
 * description:
 */
define(["require"], function (require) {

    // 这里传递进来的Angle应该不是弧度制的角度
    function setDashboardAngle(angle) {
        this._angle = isNaN(+angle) ? 0 : +angle;
        return this;
    }

    return setDashboardAngle;

});
 