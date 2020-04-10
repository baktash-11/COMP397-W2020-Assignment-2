module objects
{
    export class Button extends GameObject
    {
        
        constructor(imagePath:Object=config.Game.ASSETS.getResult("placeHolder"),
                    x:number = 0, y:number= 0, 
                    isCentered:boolean = false)
        {
            super(imagePath, x, y, isCentered);

            this.on("mouseover", this.MouseOver);
            this.on("mouseout", this.MouseOut);

            this.Start();
        }
        
        
        //private methods
        protected _checkBounds(): void {
           // throw new Error("Method not implemented.");
        }
        
        MouseOver():void
        {
            this.alpha = 0.7;
        }

        MouseOut():void
        {
            this.alpha = 1.0;
        }

        public Start(): void {
            this.type = enums.GameObjectType.BUTTON;
        }
        public Reset(): void {
            //throw new Error("Method not implemented.");
        }
        public Update(): void {
            //throw new Error("Method not implemented.");
        }
    }
}