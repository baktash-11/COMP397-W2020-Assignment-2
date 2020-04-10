module objects
{
    export class Player extends GameObject
    {
      
        constructor()
        {
            super();

            this.Start();
        }   
        protected _checkBounds(): void {}
        public Start(): void { this.type = enums.GameObjectType.PLAYER;}

        public Update(): void 
        {
           this.position = new Vector2(this.stage.mouseX, this.stage.mouseY);
        }

        public Reset(): void {}

        
    }
}