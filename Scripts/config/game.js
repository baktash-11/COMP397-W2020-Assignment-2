"use strict";
var config;
(function (config) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.SCREEN_WIDTH = 640;
        Game.SCREEN_HEIGHT = 480;
        Game.FPS = 60;
        Game.ENEMYP1_NUM = util.MathB.RandomRange(4, 8);
        Game.LIVES = 3;
        Game.SCORE = 0;
        Game.HIGH_SCORE = 0;
        Game.NUM_OF_FUEL = 0;
        return Game;
    }());
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=game.js.map