module scenes
{
    export class Start extends objects.Scene
    {
        //private instance variable
        private _welcomeLable:objects.Lable;
        private _playtButton:objects.Button;
        private _testButton: objects.Button;
        
        private _logo:createjs.Bitmap;
      

        //constructor
        constructor(){
            super();
            this.Start();
        }

        //public methods
        public Start(): void {
            console.log(`%c Hello from start Scene!`, "color: red; font-size: 24px;")//-------------------------------------have to commit this out
            this._welcomeLable = new objects.Lable("Welcome to Game", "24px" ," Arail","#000", 320 ,40 , true);
            this._playtButton = new objects.Button(("buttonPlay"),320, 400, true)
            this._logo = new createjs.Bitmap("./Assets/images/logo.png")
            this._logo.regX = this._logo.getBounds().width * 0.5;
            this._logo.regY = this._logo.getBounds().height * 0.5;
            this._logo.x = 320;
            this._logo.y= 240;
            
            this._testButton = new objects.Button();
            
           this.Main()
        }
        public Update(): void
        {
            //throw new Error("Method not implemented.");
        }

        public Main(): void {
            //throw new Error("Method not implemented.");
            
            this.addChild(this._logo);
            this.addChild(this._welcomeLable);
            this.addChild(this._playtButton);
            this.addChild(this._testButton);
            this._playtButton.on("click",function(){
                config.Game.SCENE= scenes.State.PLAY;
            })

        }
        
        public Clean():void{
            this.removeAllChildren();
        }
    
    }
}