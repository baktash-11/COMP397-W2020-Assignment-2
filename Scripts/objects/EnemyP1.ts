
module objects
{
    export class EnemyP1 extends GameObject
    {
        //private variables 

        private _verticalSpeed?: number;
        private _horizontalSpeed?:number;

        //public  properties 

        //construcor 
        constructor()
        {
            super(config.Game.TEXTURE_ATLAS, "enemyPlane", new Vector2(), true);
            this.Start();
        }
        //private methods 
        protected _checkBounds(): void
        {
            //throw new Error("Method not implemented.");
            if(this.y >= config.Game.SCREEN_HEIGHT + this.height){
                this.Reset();
            }
        }
        private _move():void
        {
            this.position = Vector2.add(this.position, this.velocity);
        }

        //public methods
        public Start(): void 
        {
            //console.log("enemyP1 object")
          
            this.type = enums.GameObjectType.ENEMYP1;
           this.Reset();

        }
        
        public Update(): void 
        {
            this._move();
            this._checkBounds();
            
        }

        public Reset(): void 
        {
            this._verticalSpeed = util.MathB.RandomRange(3, 7);
            this._horizontalSpeed = util.MathB.RandomRange(-2, 2);
            this.velocity= new Vector2(this._horizontalSpeed, this._verticalSpeed);

            let randmoX = util.MathB.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth)
            let randomY = util.MathB.RandomRange(-this.halfHeight* 3, -this.halfHeight);
            this.position = new Vector2(randmoX, randomY);
        }
        
    }
}