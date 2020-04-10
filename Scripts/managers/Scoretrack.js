"use strict";
var managers;
(function (managers) {
    var Scoretracker = /** @class */ (function () {
        //constructor 
        function Scoretracker() {
            this._initialize();
        }
        Object.defineProperty(Scoretracker.prototype, "Lives", {
            //getter and setter
            get: function () {
                return this._lives;
            },
            set: function (v) {
                this._lives = v;
                config.Game.LIVES = this._lives;
                this.LivesLabel.text = "L: " + this._lives; //ijecting live's update
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoretracker.prototype, "Score", {
            get: function () {
                return this._score;
            },
            set: function (v) {
                this._score = v;
                config.Game.SCORE = this._score;
                this.ScoreLable.text = "S: " + this._score; // injecting score's update
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoretracker.prototype, "LivesLabel", {
            get: function () {
                return this._livesLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoretracker.prototype, "ScoreLable", {
            get: function () {
                return this._scoreLable;
            },
            enumerable: true,
            configurable: true
        });
        //private functions
        Scoretracker.prototype._initialize = function () {
            this._livesLabel = new objects.Lable("L:99", "18px", "Arail", "#FFF", 20, 20, false);
            this._scoreLable = new objects.Lable("S: 99999", "18px", "Arail", "#FFF", 20, 40, false);
            this.Lives = config.Game.LIVES;
            this.Score = config.Game.SCORE;
        };
        return Scoretracker;
    }());
    managers.Scoretracker = Scoretracker;
})(managers || (managers = {}));
//# sourceMappingURL=Scoretrack.js.map