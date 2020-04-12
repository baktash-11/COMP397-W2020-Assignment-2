module objects
{
    export class Plane extends GameObject
    {
        // private variables 
        private _vPosition:number;
        private _planeSound : createjs.AbstractSoundInstance;
        private _bulletSpawn: objects.Vector2;
        private _horizontalSpeed: number;
        // getter and setter
        public get planeSound() : createjs.AbstractSoundInstance 
        {
           return this._planeSound;
        }
        
        //constructor
        constructor()
        {
            super(config.Game.TEXTURE_ATLAS, "p1", 0, 0, true);

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
                //console.log("x > 640")
            }
            


        }        

        private _move(): void
        {
            if(config.Game.KEYBOARD_MANAGER.MoveRight || config.Game.KEYBOARD_MANAGER.MoveLeft)
            {
                let newPositionX = (config.Game.KEYBOARD_MANAGER.MoveRight)?
                this.position.x + this._horizontalSpeed : this. position.x -this._horizontalSpeed;

                newPositionX = util.MathB.Lerp(this.position.x, newPositionX, 0.5);
                this.position = new Vector2(newPositionX, this._vPosition);
            }
            this._bulletSpawn = new Vector2(this.position.x, this.position.y - this.halfHeight);
           
        }
        
        // PUBLIC METHODS
        public Start(): void 
        {
            
            
            this.type = enums.GameObjectType.PLANE;
            this._vPosition = 430; // locked to the bottom of the screen
            this._planeSound = createjs.Sound.play("plane");
            this. _planeSound.loop = -1; //non stop sound
            this. _planeSound.volume = 0.2; 
            this._horizontalSpeed = 10;
            this.position = new objects.Vector2(config.Game.SCREEN_WIDTH * 0.5, this._vPosition);
        }

        public Update(): void 
        {
            this._move();
            this._checkBounds();
            
            if(createjs.Ticker.getTicks() % 5 == 0)
            {
                if(config.Game.KEYBOARD_MANAGER.Fire)
                {
                    this.FireBullets();
                }
            }
        }

        public Reset(): void 
        {

        }
        public FireBullets(): void
        {
            let bullet = config.Game.BULLET_MANAGER.GetBullet();
            bullet.position = this._bulletSpawn;
        }
        
    }

}
