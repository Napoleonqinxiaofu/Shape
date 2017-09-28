/**
 * Create by xiaofu.qin {2017/9/27}
 * description: 是准备使用指针类型的还是圆环类型的
 */
define(["require"], function (require) {

    return function setDashboardType(type) {
        this._type = type === "point" ? "point" : "ring";
        return this;
    }

});
 