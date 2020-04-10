module objects
{
    export class Plane extends GameObject
    {
        // private variables 
        private _vPosition:number;

       
        //constructor
        constructor()
        {
            super(config.Game.ASSETS.getResult("planeSmall"), 0, 0, true);

            this.Start();
        }

        // private methods
        protected _checkBounds(): void 
        {
            // left bound
            if(this.position.x <= this.halfWidth)
            {
                this.position = new Vector2(this.halfWidth, this.position.y);
                
            }

            // right bound

            if(this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth )
            {
                this.position = new Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
                console.log("x > 640")
            }
            


        }        

        private _move(): void
        {
            let newPositionX = util.MathB.Lerp(this.position.x, this.stage.mouseX, 0.07);
            this.position = new Vector2(newPositionX, this._vPosition);
        }
        
        // PUBLIC METHODS
        public Start(): void 
        {
            
            
            this.type = enums.GameObjectType.PLANE;
            this._vPosition = 430; // locked to the bottom of the screen
           // let engineSound = createjs.Sound.play("engine");
            //engineSound.loop = -1; // loop forever
            //engineSound.volume = 0.1; // 10% volume
        }

        public Update(): void 
        {
            this._move();
            this._checkBounds();
        }

        public Reset(): void 
        {

        }

        
    }

}
