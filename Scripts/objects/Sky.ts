module objects
{
    export class Sky extends GameObject
    {
        //private variables 

        private _verticalSpeed?: number;

        //public  properties 

        //construcor 
        constructor()
        {
            super(config.Game.SKY_ATLAS, "sky");
            this.Start();
        }
        //private methods 
        protected _checkBounds(): void
        {
            //throw new Error("Method not implemented.");
            if(this.y >=0){
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
            //console.log("from sky's start method")
           this.type = enums.GameObjectType.SKY;
           this._verticalSpeed = 5;
           this.velocity = new Vector2(0, this._verticalSpeed);
           this.Reset();

        }
        
        public Update(): void 
        {
            this._move();
            this._checkBounds();
            
        }

        public Reset(): void 
        {
            
            
            this.position.y= -960;
            //this.position = new Vector2(0, -960);
        }
        
    }
}