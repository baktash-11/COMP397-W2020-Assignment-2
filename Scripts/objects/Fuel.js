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
    var Fuel = /** @class */ (function (_super) {
        __extends(Fuel, _super);
        //public  properties 
        //construcor 
        function Fuel() {
            var _this = _super.call(this, config.Game.TEXTURE_ATLAS, "fuel", new objects.Vector2(), true) || this;
            _this.Start();
            return _this;
        }
        //private methods 
        Fuel.prototype._checkBounds = function () {
            //throw new Error("Method not implemented.");
            if (this.y >= config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        };
        Fuel.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        //public methods
        Fuel.prototype.Start = function () {
            //console.log("fuel object")
            this.type = enums.GameObjectType.FUEL;
            this.Reset();
        };
        Fuel.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Fuel.prototype.Reset = function () {
            this._verticalSpeed = util.MathB.RandomRange(1, 2);
            this._verticalSpeed = util.MathB.RandomRange(2, 5);
            this._horizontalSpeed = util.MathB.RandomRange(-2, 2);
            this.velocity = new objects.Vector2(this._horizontalSpeed, this._verticalSpeed);
            var randmoX = util.MathB.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            this.position = new objects.Vector2(randmoX, -this.width);
        };
        return Fuel;
    }(objects.GameObject));
    objects.Fuel = Fuel;
})(objects || (objects = {}));
//# sourceMappingURL=Fuel.js.map