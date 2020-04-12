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
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        //constructor
        function Plane() {
            var _this = _super.call(this, config.Game.TEXTURE_ATLAS, "p1", 0, 0, true) || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Plane.prototype, "planeSound", {
            // getter and setter
            get: function () {
                return this._planeSound;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        Plane.prototype._checkBounds = function () {
            // left bound
            if (this.position.x <= this.halfWidth) {
                this.position = new objects.Vector2(this.halfWidth, this.position.y);
            }
            // right bound
            if (this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
                this.position = new objects.Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
                //console.log("x > 640")
            }
        };
        Plane.prototype._move = function () {
            var newPositionX = util.MathB.Lerp(this.position.x, this.stage.mouseX, 0.07);
            this.position = new objects.Vector2(newPositionX, this._vPosition);
        };
        // PUBLIC METHODS
        Plane.prototype.Start = function () {
            this.type = enums.GameObjectType.PLANE;
            this._vPosition = 430; // locked to the bottom of the screen
            this._planeSound = createjs.Sound.play("plane");
            this._planeSound.loop = -1; //non stop sound
            this._planeSound.volume = 0.2;
        };
        Plane.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Plane.prototype.Reset = function () {
        };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=Plane.js.map