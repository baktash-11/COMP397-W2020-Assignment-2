module objects
{
    export class Logo extends GameObject
    {
      
        constructor(log_name:string = "placeHolder",
        x:number = 320, y:number= 240, 
        isCentered:boolean = true)
        {
            super();

            this.Start();
        }   
        protected _checkBounds(): void {}
        public Start(): void {}

        public Update(): void 
        {
           
        }

        public Reset(): void {}

        
    }
}