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
    var Lable = /** @class */ (function (_super) {
        __extends(Lable, _super);
        //constructor
        function Lable(labelString, fontSize, fontFamily, fontColor, x, y, isCentered) {
            if (labelString === void 0) { labelString = "Default Text"; }
            if (fontSize === void 0) { fontSize = "24px"; }
            if (fontFamily === void 0) { fontFamily = "Arail"; }
            if (fontColor === void 0) { fontColor = "#ff0000"; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, labelString, fontSize + " " + fontFamily, fontColor) || this;
            _this.labelString = labelString;
            _this.fontSize = fontSize;
            _this.fontFamily = fontFamily;
            _this.fontColor = fontColor;
            _this.isCentered = isCentered;
            if (isCentered) {
                _this.regX = _this.getBounds().width * 0.5;
                _this.regY = _this.getMeasuredLineHeight() * 0.5;
            }
            _this.x = x;
            _this.y = y;
            return _this;
        }
        //methods 
        Lable.prototype.setText = function (newText) {
            this.text = newText;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getMeasuredLineHeight() * 0.5;
        };
        return Lable;
    }(createjs.Text));
    objects.Lable = Lable;
})(objects || (objects = {}));
//# sourceMappingURL=Label.js.map