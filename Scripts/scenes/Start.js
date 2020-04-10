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
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        //constructor
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //public methods
        Start.prototype.Start = function () {
            console.log("%c Hello from start Scene!", "color: red; font-size: 24px;"); //-------------------------------------have to commit this out
            this._welcomeLable = new objects.Lable("Welcome to Game", "24px", " Arail", "#000", 320, 40, true);
            this._playtButton = new objects.Button(config.Game.ASSETS.getResult("playButton"), 320, 400, true);
            //this.backGround = new objects.Logo("./Assets/images/background.png",0, 0, false)
            this._testButton = new objects.Button();
            this.Main();
        };
        Start.prototype.Update = function () {
            //throw new Error("Method not implemented.");
        };
        Start.prototype.Main = function () {
            //throw new Error("Method not implemented.");
            this.addChild(this._welcomeLable);
            this.addChild(this._playtButton);
            this.addChild(this._testButton);
            this._playtButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY;
            });
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map