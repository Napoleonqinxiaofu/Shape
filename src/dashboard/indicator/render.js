/**
 * Create by xiaofu.qin {2017/10/8}
 * description:
 */
define(["require", "../../canvas/helper",
    "../../Tween/src/Animate/Tween", "../../common/Math"], function (require) {

    var helper = require("../../canvas/helper");
    var Tween = require("../../Tween/src/Animate/Tween");
    var mathUtil = require("../../common/Math");

    function render(context, styles) {
        if (context && context.canvas) {
            this.context(context);
        }
        if (context && !context.canvas) {
            styles = context;
        }
        styles = styles || {
            lineWidth: 0,
            strokeStyle: "#ffffff"
        };
        helper.retinaScale(this._context);

        renderInAnimate(this, styles);

        return this;
    }

    // 绘制单次的指针
    function renderIndicator(self, angle, styles) {
        var context = self._context;
        var points = self.layout(angle);

        context.save();
        context.beginPath();
        helper.setContextStyles(context, styles);

        context.moveTo(points[0].x, points[0].y);
        context.lineTo(points[1].x, points[1].y);
        context.lineTo(points[2].x, points[2].y);

        context.arc(self._x, self._y, self._secondaryLength / 2,
            mathUtil.numToRadian(angle - 90), mathUtil.numToRadian(angle + 90), true);

        context.closePath();
        context.fill();
        context.stroke();
        context.restore();
    }

    function clearIndicator(self, angle, styles) {
        styles = {
            lineWidth: styles.lineWidth ? styles.lineWidth : 1,
            fillStyle: "#ffffff",
            strokeStyle: "#ffffff"
        };
        renderIndicator(self, angle, styles);
    }

    //
    function renderInAnimate(self, styles) {
        var angle = self._angle;
        var lastAngle;

        var tweenIns = new Tween({
            angle: {
                start: 0,
                end: angle
            }
        });

        tweenIns.duration(self._animationDuration)
            .ease(self._easeMode)
            .eachFrame(function (angle) {
                angle = angle.angle;
                if (lastAngle) {
                    clearIndicator(self, lastAngle, styles)
                }
                lastAngle = angle;
                renderIndicator(self, angle, styles);
            })
            .start();
    }

    return render;

});
 