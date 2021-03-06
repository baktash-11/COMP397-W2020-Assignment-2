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
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button(button_name, x, y, isCentered) {
            if (button_name === void 0) { button_name = "placeHolder"; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, config.Game.TEXTURE_ATLAS, button_name, x, y, isCentered) || this;
            _this.on("mouseover", _this.MouseOver);
            _this.on("mouseout", _this.MouseOut);
            _this.Start();
            return _this;
        }
        //private methods
        Button.prototype._checkBounds = function () {
            // throw new Error("Method not implemented.");
        };
        Button.prototype.MouseOver = function () {
            this.alpha = 0.7;
        };
        Button.prototype.MouseOut = function () {
            this.alpha = 1.0;
        };
        Button.prototype.Start = function () {
            this.type = enums.GameObjectType.BUTTON;
        };
        Button.prototype.Reset = function () {
            //throw new Error("Method not implemented.");
        };
        Button.prototype.Update = function () {
            //throw new Error("Method not implemented.");
        };
        return Button;
    }(objects.GameObject));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=Button.js.map