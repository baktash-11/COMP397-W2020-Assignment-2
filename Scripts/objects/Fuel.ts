module objects
{
    export class Fuel extends GameObject
    {
        //private variables 

        private _verticalSpeed?: number;
        private _horizontalSpeed?: number;

        //public  properties 

        //construcor 
        constructor()
        {
            super(config.Game.ASSETS.getResult("fuel"), new Vector2(), true);
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
            
            //console.log("fuel object")
            
            this.type = enums.GameObjectType.FUEL;
            this.Reset();
            
        }
        
        public Update(): void 
        {
            
            this._move();
            this._checkBounds();
            
        }

        public Reset(): void 
        {
            this._verticalSpeed = util.MathB.RandomRange(1, 2);
            
            this._verticalSpeed = util.MathB.RandomRange(2, 5);
           
            this._horizontalSpeed = util.MathB.RandomRange(-2, 2);
            this.velocity = new Vector2(this._horizontalSpeed, this._verticalSpeed);
            let randmoX = util.MathB.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            this.position = new Vector2(randmoX, - this.width);
            
        }
        
    }
}