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
        Object.defineProperty(Scoretracker.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            set: function (v) {
                this._highScore = v;
                config.Game.HIGH_SCORE = this._score;
                this.HighScoreLabel.setText("High Score: " + this._highScore);
                this._heghScoreLabelForEndScene.setText("High Score: " + this._highScore);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoretracker.prototype, "NumOfFuil", {
            get: function () {
                return this._numOfFuil;
            },
            set: function (v) {
                this._numOfFuil = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoretracker.prototype, "HighScoreLabel", {
            get: function () {
                return this._highScoreLabel;
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
        Object.defineProperty(Scoretracker.prototype, "NumOfFuelLable", {
            get: function () {
                return this._NumOfFuelLable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Scoretracker.prototype, "HeghScoreLabelForEndScene", {
            get: function () {
                return this._heghScoreLabelForEndScene;
            },
            enumerable: true,
            configurable: true
        });
        //private functions
        Scoretracker.prototype._initialize = function () {
            this._livesLabel = new objects.Lable("L:99", "18px", "Arail", "#FFF", 20, 20, false);
            this._scoreLable = new objects.Lable("S: 99999", "18px", "Arail", "#FFF", 20, 40, false);
            this._highScoreLabel = new objects.Lable("High Score: ", "18px", "Arail", "#FFF", 320, 20);
            this._heghScoreLabelForEndScene = new objects.Lable("High Score: 00", "30px", "Arail", "#FFF", 320, 200, true);
            this.Lives = config.Game.LIVES;
            this.Score = config.Game.SCORE;
            if (config.Game.HIGH_SCORE < config.Game.SCORE) {
                this.HighScore = config.Game.SCORE;
            }
            else {
                this.HighScore = config.Game.HIGH_SCORE;
            }
        };
        return Scoretracker;
    }());
    managers.Scoretracker = Scoretracker;
})(managers || (managers = {}));
//# sourceMappingURL=Scoretrack.js.map