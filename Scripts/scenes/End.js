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
var scenes;
(function (scenes) {
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        function End() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //methods 
        End.prototype.Start = function () {
            //throw new Error("Method not implemented.");
            this._Label = new objects.Lable("The Game is Ended", "24px", "Consolas", "#B4D0E7", 320, 240, true);
            this._sky = new objects.Sky();
            this.Main();
        };
        End.prototype.Update = function () {
            this._sky.Update();
        };
        End.prototype.Main = function () {
            this.addChild(this._sky);
            this.addChild(this._Label);
            //throw new Error("Method not implemented.");
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=End.js.map