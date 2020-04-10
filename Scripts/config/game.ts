module config
{
    export class Game
    {
        public static SCREEN_WIDTH:number = 640;
        public static SCREEN_HEIGHT:number= 480;
        public static SCENE: scenes.State;
        
        public static ASSETS: createjs.LoadQueue;
        public static FPS: number = 60;

        public static ENEMYP1_NUM: number = util.MathB.RandomRange(5 , 10);

        public static LIVES:number = 3; 
        public static SCORE:number = 0;
        public static SCORE_TRACKER:managers.Scoretracker; 
    }

}