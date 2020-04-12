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
            this._LabelEnd = new objects.Lable("GAME OVER", "40px", "Consolas", "#FF0000", 320, 240, true);
            this._sky = new objects.Sky();
            this._backButton = new objects.Button("buttonBack", 320, 400, true);
            this._scoreTracker = new managers.Scoretracker();
            this._scoreTracker.HighScore = config.Game.HIGH_SCORE;
            this.Main();
        };
        End.prototype.Update = function () {
            this._sky.Update();
        };
        End.prototype.Main = function () {
            //throw new Error("Method not implemented.");
            this.addChild(this._sky);
            this.addChild(this._LabelEnd);
            this.addChild(this._backButton);
            this.addChild(this._scoreTracker.HeghScoreLabelForEndScene);
            this._backButton.on("click", function () {
                config.Game.SCORE_TRACKER.Lives = 3;
                config.Game.SCORE_TRACKER.Score = 0;
                config.Game.SCENE = scenes.State.PLAY;
            });
        };
        End.prototype.Clean = function () {
            this.removeAllChildren();
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=End.js.map