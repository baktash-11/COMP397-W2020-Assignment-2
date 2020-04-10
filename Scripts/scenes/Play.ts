module scenes
{
    export class Play extends objects.Scene
    {
        //variables 
        
        private _plane:objects.Plane;
        private _sky?:objects.Sky;
        private _fuel?:objects.Fuel;
        private _enemyP1?: Array<objects.EnemyP1>;

        
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
            
            for (let index = 0; index < config.Game.ENEMYP1_NUM; index++) {
               this._enemyP1.push(new objects.EnemyP1);
                
            }

            this.Main()            
        }


        public Update(): void 
        {
            this._sky.Update();
            this._plane.Update();
            this._fuel.Update();

            managers.Collision.AABBCheck(this._plane, this._fuel);

            this._enemyP1.forEach(enemyP1 => {
                enemyP1.Update();
                managers.Collision.squaredRadiusCheck(this._plane, enemyP1);
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


           /*  this._plane.on("click", ()=>{
                config.Game.SCENE = scenes.State.END;
            }); */
        }

        
    }
}