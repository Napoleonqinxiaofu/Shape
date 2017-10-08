/**
 * Create by xiaofu.qin {2017/10/8}
 * description:
 */
define(["require"], function (require) {

    function ease(mode) {
        this._easeMode = mode;
        return this;
    }

    function animate(duration) {
        this._animationDuration = isNaN(+duration) ? 0 : +duration;
        return this;
    }

    return {
        ease: ease,
        animate: animate
    };

});
 