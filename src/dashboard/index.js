/**
 * Create by xiaofu.qin {2017/9/27}
 * description:
 */
define(["require", "./src/data", "./src/angle", "./src/type",
    "./src/render", "./src/layout", "../common/defaultAccessor"], function (require) {

    var data = require("./src/data");
    var angle = require("./src/angle");
    var type = require("./src/type");
    var render = require("./src/render");
    var layout = require("./src/layout");

    var dataAccessor = require("../common/defaultAccessor");

    function Dashboard() {
        if (this instanceof Dashboard) {
            this.init();
            return this;
        } else {
            return new Dashboard();
        }
    }

    Dashboard.prototype = {
        init: init,
        angle: angle,
        value: data.value,
        data: data.data,
        type: type,
        render: render,
        _layout: layout.layout
    };

    function init() {
        // 默认的仪表盘的总角度是180度
        this._angle = 180;

        // 默认的仪表盘的样式是指针类型仪表盘
        this._type = "point";

        // 默认的动画时间是1000ms
        this._animationDuration = 1000;

        // 默认的缓动方式是easeInOutCirc
        this._easeMode = "easeInOutCirc";

        this._dataAccessor = dataAccessor();

        this._originData = null;
        this._data = null;

        this._scale = null;
    }

    return Dashboard;

});
 