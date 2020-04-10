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
    var Sky = /** @class */ (function (_super) {
        __extends(Sky, _super);
        //public  properties 
        //construcor 
        function Sky() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("sky")) || this;
            _this.Start();
            return _this;
        }
        //private methods 
        Sky.prototype._checkBounds = function () {
            //throw new Error("Method not implemented.");
            if (this.y >= 0) {
                this.Reset();
            }
        };
        Sky.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        //public methods
        Sky.prototype.Start = function () {
            //console.log("from sky's start method")
            this.type = enums.GameObjectType.SKY;
            this._verticalSpeed = 5;
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        };
        Sky.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Sky.prototype.Reset = function () {
            this.position.y = -960;
            //this.position = new Vector2(0, -960);
        };
        return Sky;
    }(objects.GameObject));
    objects.Sky = Sky;
})(objects || (objects = {}));
//# sourceMappingURL=Sky.js.map