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
        function Logo(imagePath, x, y, isCentered) {
            if (imagePath === void 0) { imagePath = config.Game.ASSETS.getResult("logo"); }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        Logo.prototype._checkBounds = function () { };
        Logo.prototype.Start = function () { };
        Logo.prototype.Update = function () {
            this.position = new objects.Vector2(this.stage.mouseX, this.stage.mouseY);
        };
        Logo.prototype.Reset = function () { };
        return Logo;
    }(objects.GameObject));
    objects.Logo = Logo;
})(objects || (objects = {}));
//# sourceMappingURL=Logo.js.map