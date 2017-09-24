/**
 * Create by xiaofu.qin {2017/9/23}
 * description:
 */
define(["require"], function (require) {

    function render(context, styles) {
        if (!this._context) {
            throw new Error("Render the pie require a canvas context, Please specify one.")
        }
        if (context && !context.canvas) {
            styles = context;
        }

        this._sectorHandle.radius(this._innerRadius, this._outerRadius)
            .animate(this._animationDuration)
            .ease(this._easeMode)
            .center(this._centers)
            .context(this._context);

        var self = this;

        // 开始处理数据
        this.layout();

        this._data.forEach(function (d) {
            self._sectorHandle.startAngle(d.startAngle)
                .endAngle(d.endAngle)
                .render(styles);
        });

        return this;
    }

    return {
        render: render
    };

});
 