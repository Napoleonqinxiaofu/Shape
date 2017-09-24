/**
 * Create by xiaofu.qin {2017/9/19}
 */
define(function (require) {

    var min = require("./detail/min");
    var max = require("./detail/max");
    var extreme = require("./detail/extreme");

    var mean = require("./detail/mean");
    var sum = require("./detail/sum");
    var median = require("./detail/median");

    var pairs = require("./detail/pairs");
    var shuffle = require("./detail/shuffle");

    var range = require("./detail/range");

    var flatten = require("./detail/flatten");
    var merge = require("./detail/merge");

    var quantile = require("./detail/quantile");

    var variance = require("./detail/variance");

    return {
        min: min,
        max: max,
        extreme: extreme,

        mean: mean,
        sum: sum,
        median: median,

        pairs: pairs,
        shuffle: shuffle,
        range: range,

        merge: merge,
        flatten: flatten,

        quantile: quantile,

        variance: variance
    };

});

