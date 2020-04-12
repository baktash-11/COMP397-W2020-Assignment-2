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
    var EnemyP1 = /** @class */ (function (_super) {
        __extends(EnemyP1, _super);
        //public  properties 
        //construcor 
        function EnemyP1() {
            var _this = _super.call(this, config.Game.TEXTURE_ATLAS, "enemyPlane", new objects.Vector2(), true) || this;
            _this.Start();
            return _this;
        }
        //private methods 
        EnemyP1.prototype._checkBounds = function () {
            //throw new Error("Method not implemented.");
            if (this.y >= config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        };
        EnemyP1.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        //public methods
        EnemyP1.prototype.Start = function () {
            //console.log("enemyP1 object")
            this.type = enums.GameObjectType.ENEMYP1;
            this.Reset();
        };
        EnemyP1.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        EnemyP1.prototype.Reset = function () {
            this._verticalSpeed = util.MathB.RandomRange(3, 7);
            this._horizontalSpeed = util.MathB.RandomRange(-2, 2);
            this.velocity = new objects.Vector2(this._horizontalSpeed, this._verticalSpeed);
            var randmoX = util.MathB.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            var randomY = util.MathB.RandomRange(-this.halfHeight * 3, -this.halfHeight);
            this.position = new objects.Vector2(randmoX, randomY);
        };
        return EnemyP1;
    }(objects.GameObject));
    objects.EnemyP1 = EnemyP1;
})(objects || (objects = {}));
//# sourceMappingURL=EnemyP1.js.map