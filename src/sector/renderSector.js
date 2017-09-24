/**
 * Create by xiaofu.qin {2017/9/23}
 */
define(["require", "../lineAndArea/renderArea", "../Tween/src/Animate/Tween"],
    function (require) {

        var areaRender = require("../lineAndArea/renderArea");
        var helper = require("../canvas/helper");

        // 动画库
        var Tween = require("../Tween/src/Animate/Tween");

        function render(context, styles) {
            if (!this._context && context) {
                this._context = context;
            }
            if (context && !context.canvas) {
                styles = context;
            }

            var points = calcControlPoints(this._startAngle,
                this._endAngle, this._innerRadius, this._outerRadius);

            helper.retinaScale(this._context);

            this._animationDuration != null
                ? renderSectorInAnimate(this, styles)
                : readerSector(this, points, this._startAngle, this._endAngle, styles);

            return this;
        }

        // 获取画圆环的四个控制点
        function calcControlPoints(startAngle, endAngle, innerRadius, outerRadius) {
            var arr = [];

            // 点的排列顺序是从内径的两个点到外径的两个点，逆时针
            var x, y;

            x = innerRadius * Math.cos(startAngle);
            y = innerRadius * Math.sin(startAngle);
            arr.push({
                x: x,
                y: y
            });

            x = innerRadius * Math.cos(endAngle);
            y = innerRadius * Math.sin(endAngle);
            arr.push({
                x: x,
                y: y
            });

            x = outerRadius * Math.cos(endAngle);
            y = outerRadius * Math.sin(endAngle);
            arr.push({
                x: x,
                y: y
            });

            x = outerRadius * Math.cos(startAngle);
            y = outerRadius * Math.sin(startAngle);
            arr.push({
                x: x,
                y: y
            });

            return arr;
        }

        function readerSector(self, points, startAngle, endAngle, styles) {

            var context = self._context,
                innerRadius = self._innerRadius,
                outerRadius = self._outerRadius,
                centers = self._centers;

            context.save();

            areaRender.setStyles(context, styles);

            context.translate(centers[0], centers[1]);

            context.beginPath();

            var point = points[0];

            context.moveTo(point.x, point.y);
            context.arc(0, 0, innerRadius, startAngle, endAngle);
            context.lineTo(points[2].x, points[2].y);
            context.arc(0, 0, outerRadius, endAngle, startAngle, true);
            context.lineTo(point.x, point.y);

            context.stroke();
            context.fill();
            context.closePath();
            context.restore();
        }

        function renderSectorInAnimate(self, styles) {
            var context = self._context,
                startAngle = self._startAngle,
                endAngle = self._endAngle,
                innerRadius = self._innerRadius,
                outerRadius = self._outerRadius,
                centers = self._centers,
                animationDuration = self._animationDuration,
                easeMode = self._easeMode;

            // 记录上一次绘制的各种参数
            var lastAngle = startAngle,
                lastPoints = null;

            new Tween({
                angle: {
                    start: startAngle,
                    end: endAngle
                }
            })
                .duration(animationDuration)
                .ease(easeMode)
                .eachFrame(function (obj) {
                    // 在这里会将前一次的图形覆盖掉
                    if (lastPoints) {
                        readerSector(self, lastPoints, startAngle, lastAngle, {
                            fillStyle: "#ffffff",
                            // 放4px吧，毕竟平常的边框也没有那么大
                            lineWidth: styles && styles.lineWidth ? styles.lineWidth : 1,
                            strokeStyle: "#ffffff"
                        });
                    }
                    lastAngle = obj.angle;
                    lastPoints = _renderMiddleStateSector(startAngle, obj.angle, innerRadius, outerRadius, styles);
                })
                .start();


            // 绘制中间过程的扇形
            function _renderMiddleStateSector(startAngle, endAngle, innerRadius, outerRadius, styles) {
                var points = calcControlPoints(startAngle, endAngle, innerRadius, outerRadius, styles);
                readerSector(self, points, startAngle, endAngle, styles);

                return points;
            }
        }

        return {
            renderArc: render,
            calcControlPoints: calcControlPoints
        };

    });
