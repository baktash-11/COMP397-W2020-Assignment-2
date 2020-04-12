"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Logo = /** @class */ (function (_super) {
        __extends(Logo, _super);
        function Logo(log_name, x, y, isCentered) {
            if (log_name === void 0) { log_name = "placeHolder"; }
            if (x === void 0) { x = 320; }
            if (y === void 0) { y = 240; }
            if (isCentered === void 0) { isCentered = true; }
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        Logo.prototype._checkBounds = function () { };
        Logo.prototype.Start = function () { };
        Logo.prototype.Update = function () {
        };
        Logo.prototype.Reset = function () { };
        return Logo;
    }(objects.GameObject));
    objects.Logo = Logo;
})(objects || (objects = {}));
//# sourceMappingURL=Logo.js.map