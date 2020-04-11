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
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        //constructor 
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //public 
        Play.prototype.Start = function () {
            this._sky = new objects.Sky();
            this._fuel = new objects.Fuel();
            console.log("%c Play scne!", "color: #ff0000; font-size: 30px;");
            this._plane = new objects.Plane();
            //_enempP1's array 
            this._enemyP1 = new Array();
            //push the object in array.
            for (var index = 0; index < config.Game.ENEMYP1_NUM; index++) {
                this._enemyP1.push(new objects.EnemyP1);
            }
            this._scoreTracker = new managers.Scoretracker();
            config.Game.SCORE_TRACKER = this._scoreTracker; //updating this scoreTracker on config/game.....\
            this._scoreTracker.HighScore = config.Game.HIGH_SCORE;
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._sky.Update();
            this._plane.Update();
            this._fuel.Update();
            managers.Collision.squaredRadiusCheck(this._plane, this._fuel); //collision
            this._enemyP1.forEach(function (enemyP1) {
                enemyP1.Update();
                managers.Collision.squaredRadiusCheck(_this._plane, enemyP1); // collision
            });
        };
        Play.prototype.Main = function () {
            this.addChild(this._sky);
            this.addChild(this._fuel);
            for (var _i = 0, _a = this._enemyP1; _i < _a.length; _i++) { //for of
                var enemyP1 = _a[_i];
                this, this.addChild(enemyP1);
            }
            this.addChild(this._plane);
            this.addChild(this._scoreTracker.LivesLabel);
            this.addChild(this._scoreTracker.ScoreLable);
            this.addChild(this._scoreTracker.HighScoreLabel);
            /*  this._plane.on("click", ()=>{
                 config.Game.SCENE = scenes.State.END;
             }); */
        };
        Play.prototype.Clean = function () {
            this._plane.planeSound.stop();
            this.removeAllChildren();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map