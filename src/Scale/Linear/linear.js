/**
 * Create by xiaofu.qin {2017/8/31}
 */

define(["require", "./util"], function (require) {

    var util = require("./util");

    function linear() {

        var _domain = [0, 1],
            _range = [0, 1],
            _clamp = false,
            _isRound = false,
            _step = null,
            // 用来保存最初始的定义域，为了nice和ticks函数调用的时候不会多次修改_domain
            _domainBackUp = _domain.slice();

        var domainToRangeDe,
            domainToRangeRe,
            rangeToDomainDe,
            rangeToDomainRe;

        function rescale() {
            domainToRangeDe = domainToRangeRe = rangeToDomainDe = rangeToDomainRe = null;
            return scale;
        }

        function scale(x) {
            !domainToRangeDe && (domainToRangeDe = util.deInterpolateNumber(_domain[0], _domain[1], _clamp));
            !domainToRangeRe && (domainToRangeRe = util.reInterpolateNumber(_range[0], _range[1]));

            return _isRound ? Math.round(domainToRangeRe(domainToRangeDe(x))) :
                domainToRangeRe(domainToRangeDe(x));
        }

        scale.invert = function (y) {
            !rangeToDomainDe && (rangeToDomainDe = util.deInterpolateNumber(_range[0], _range[1]));
            !rangeToDomainRe && (rangeToDomainRe = util.reInterpolateNumber(_domain[0], _domain[1]));

            return rangeToDomainRe(rangeToDomainDe(y));
        };

        scale.domain = function (_) {
            if (!_) {
                return _domain.slice();
            }
            _ = _.map(Number);

            _domain = _;
            // 保存下原始的定义域
            _domainBackUp = _domain.slice();

            return rescale();
        };

        scale.range = function (_) {
            if (!_) {
                return _range.slice();
            }
            _ = _.map(Number);
            _range = _;

            return rescale();
        };

        scale.rangeRound = function (_) {
            if (!_) {
                return _range.slice();
            }

            _ = _.map(Number);
            _range = _;
            _isRound = true;

            return rescale();
        };

        scale.nice = function (count) {
            // 默认为9个区间,也就是10个刻度
            count = count || 10;
            var start = _domainBackUp[0], end = _domainBackUp[1],
                reverse = start > end,
                step;
            if (reverse) {
                step = start;
                start = end;
                end = step;
            }

            var result = util.tickIncrement(start, end, count);

            _domain = reverse ? result.domain.reverse() : result.domain;
            _step = reverse ? -result.step : result.step;

            return rescale();
        };

        scale.ticks = function (count) {
            scale.nice(count);
            return util.makeRange(_domain[0], _domain[1], _step);
        };

        scale.clamp = function (b) {
            _clamp = !!b;
            return rescale();
        };

        // 调试输出所有的变量
        scale.debug = function () {

            console.log({
                domain: _domain.slice(),
                range: _range.slice(),
                clamp: _clamp,
                step: _step
            });

            return scale;
        };

        return rescale();
    }

    return linear;

});