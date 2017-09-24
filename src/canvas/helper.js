/**
 * Create by xiaofu.qin {2017/9/22}
 */
define(function (require) {

    // 什么视网膜的问题来着，在Chart.js里面使用到
    function retinaScale(context, forceRatio) {
        // devicePixelRatio = window.devicePixelRatio = 物理像素 / dips || 1
        // retina 视网膜的意思
        // 该Window属性devicePixelRatio返回当前显示设备的物理像素分辨率与CSS像素中分辨率的比率。
        // 该值也可以解释为像素大小的比率：一个CSS像素的大小与一个物理像素的大小。
        // 简单来说，这告诉浏览器应该使用多少屏幕的实际像素来绘制单个CSS像素。
        //设备像素也被称为物理像素,他是显示设备中一个最微小的物理部件
        // 屏幕密度是指一个设备表面上存在的像素数量，它通常以每英寸有多少像素来计算（PPI）。苹果将这个营销出一个专业的术语“Retina”
        //CSS像素是一个抽象的单位，主要使用在浏览器上，用来精确的度量（确定）Web页面上的内容。
        //!Important
        // 一般情况下，CSS像素被称为与设备无关的像素（device-independent像素），简称为“DIPs”。
        // 在一个标准的显示密度下，一个CSS像素对应着一个设备像素
        //<div height="200" width="300"></div>
        // 上面的代码，将会在显示屏设备上绘制一个200x300像素的盒子。但是在Retina屏幕下，
        // 相同的div却使用了400x600设备像素，保持相同的物理尺寸显示，导致每个css像素点实际上有4倍的普通像素点
        // 最后告诉你，这TM看不懂了
        var pixelRatio = forceRatio || window.devicePixelRatio || 1;
        if (pixelRatio === 1) {
            return;
        }
        // 现在我的电脑上的window.devicePixelRatio是1.25

        var canvas = context.canvas;
        var height = canvas.height;
        var width = canvas.width;

        if (canvas && canvas.pixelRatio) {
            return false;
        }

            canvas.height = height * pixelRatio;
        canvas.width = width * pixelRatio;
        context.scale(pixelRatio, pixelRatio);

        // 有点儿麻烦，不知道你们在干什么
        // If no style has been set on the canvas, the render size is used as display size,
        // making the chart visually bigger, so let's enforce it to the "correct" values.
        // See https://github.com/chartjs/Chart.js/issues/3575
        canvas.style.height = height + 'px';
        canvas.style.width = width + 'px';

        // 在这里给canvas元素设置一个属性来判断是否考虑过这个retina，
        // 下次如果执行这个函数的话，就不用都执行完了
        canvas.pixelRatio = pixelRatio;
    }

    return {
        retinaScale: retinaScale
    };

});
