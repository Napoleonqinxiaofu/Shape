/**
 * Create by xiaofu.qin {2017/9/21}
 */
define(function (require) {

    var Line = require("./lineAndArea/line");
    var Area = require("./lineAndArea/area");
    var Arc = require("./sector/sector");
    var Pie = require("./pie/pie");
    var Symbol = require("./symbol/index");

    return {
        Line: Line,
        Area: Area,
        Arc: Arc.Sector,
        Pie: Pie,
        Symbol: Symbol
    };

});
