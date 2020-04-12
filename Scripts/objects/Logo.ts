module objects
{
    export class Logo extends GameObject
    {
      
        constructor(imagePath:Object = config.Game.ASSETS.getResult("logo"),
        x:number = 0, y:number= 0, 
        isCentered:boolean = false)
        {
            super();

            this.Start();
        }   
        protected _checkBounds(): void {}
        public Start(): void {}

        public Update(): void 
        {
           this.position = new Vector2(this.stage.mouseX, this.stage.mouseY);
        }

        public Reset(): void {}

        
    }
}