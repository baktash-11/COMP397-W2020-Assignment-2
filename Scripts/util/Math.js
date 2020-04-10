"use strict";
var util;
(function (util) {
    var MathB = /** @class */ (function () {
        function MathB() {
        }
        MathB.RandomRange = function (min, max) {
            return Math.random() * (max - min * 1) + min;
        };
        MathB.Clamp = function (value, min, max) {
            if (value < min) {
                value = min;
            }
            else if (value > max) {
                value = max;
            }
            return value;
        };
        MathB.Clamp01 = function (value) {
            if (value < 0.0) {
                return 0.0;
            }
            if (value > 1.0) {
                return 1.0;
            }
            return value;
        };
        MathB.Lerp = function (a, b, t) {
            return a + (b - a) * MathB.Clamp01(t);
        };
        MathB.LerpUnclamped = function (a, b, t) {
            return a + (b - a) * t;
        };
        return MathB;
    }());
    util.MathB = MathB;
})(util || (util = {}));
//# sourceMappingURL=Math.js.map