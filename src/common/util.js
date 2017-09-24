/**
 * Create by xiaofu.qin {2017/9/20}
 */
define(function (require) {

    var toString = Object.prototype.toString;

    function isArray(arg) {
        if (Array.isArray) {
            return Array.isArray(arg);
        }
        return /array\]$/ig.test(toString.call(arg));
    }

    function isObject(arg) {
        return /object\]$/ig.test(toString.call(arg));
    }

    // 深度复制
    function clone(source) {
        var target;

        if (isArray(source)) {
            target = source.map(clone);
        }
        else if (isObject(source)) {
            target = {};
            Object.keys(source).forEach(function (key) {
                target[key] = clone(source[key]);
            });
        }else {
            target = source;
        }

        return target;
    }

    // 从source中合并键值对到target中
    function merge(target, source) {
        if( !isObject(target) || !isObject(source)) {
            throw new TypeError("merge function require two object as it's params.");
        }
        Object.keys(source).forEach(function(key) {
            !target[key] && (target[key] = clone(source[key]));
        });

        return target;
    }

    return {
        isArray: isArray,
        isObject: isObject,
        clone: clone,
        merge: merge
    };
});
