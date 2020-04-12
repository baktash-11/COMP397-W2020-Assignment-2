module scenes
{
    export class Play extends objects.Scene
    {
        //variables 
        
        private _plane:objects.Plane;
        private _sky?:objects.Sky;
        private _fuel?:objects.Fuel;
        private _enemyP1?: Array<objects.EnemyP1>;
        private _scoreTracker :managers.Scoretracker;

        private _bulletManager: managers.Bullet;
        private _keyboardManager: managers.Keyboard;


        
        //constructor 
        constructor()
        {
            super();
            this.Start();

        }


        //public 
        public Start(): void 
        {
            this._sky = new objects.Sky();
            this._fuel = new objects.Fuel();
            console.log(`%c Play scne!`, "color: #ff0000; font-size: 30px;")
            this._plane = new objects.Plane();
            
            //_enempP1's array 
            this._enemyP1 = new Array<objects.EnemyP1>();
            
            //push the object in array.
            for (let index = 0; index < config.Game.ENEMYP1_NUM; index++) {
               this._enemyP1.push(new objects.EnemyP1);  
            }

            this._scoreTracker = new managers.Scoretracker();
            config.Game.SCORE_TRACKER = this._scoreTracker; //updating this scoreTracker on config/game.....\
            this._scoreTracker.HighScore = config.Game.HIGH_SCORE;
            
            this._bulletManager = new managers.Bullet();
            config.Game.BULLET_MANAGER = this._bulletManager;

            this._keyboardManager = new managers.Keyboard();
            config.Game.KEYBOARD_MANAGER = this._keyboardManager;

            this.Main()            
        }


        public Update(): void 
        {
            this._sky.Update();
            this._plane.Update();
            this._fuel.Update();
            this._bulletManager.Update();

            managers.Collision.squaredRadiusCheck(this._plane, this._fuel); //collision

            this._enemyP1.forEach(enemyP1 => {
                enemyP1.Update();
                managers.Collision.squaredRadiusCheck(this._plane, enemyP1);// collision
            });
            
        }


        public Main(): void
         {
            this.addChild(this._sky);
            this.addChild(this._fuel);

            for (const enemyP1 of this._enemyP1) {//for of
                this,this.addChild(enemyP1);
            }
            
            this.addChild(this._plane);
            this.addChild(this._scoreTracker.LivesLabel);
            this.addChild(this._scoreTracker.ScoreLable);
            this.addChild(this._scoreTracker.HighScoreLabel);

           /*  this._plane.on("click", ()=>{
                config.Game.SCENE = scenes.State.END;
            }); */

            this._bulletManager.AddBulletsToScene(this);
        }

        public Clean():void{
            this._plane.planeSound.stop();
            this.removeAllChildren();
        }
    }
}