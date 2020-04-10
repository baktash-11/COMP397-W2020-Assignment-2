module scenes
{
    export class End extends objects.Scene
    {
        //variables and private memebers 

        private _Label:objects.Lable;
        private _sky:objects.Sky;
        
        constructor()
        {
            super();
            this.Start();
        }


        //methods 
        public Start(): void 
        {
            //throw new Error("Method not implemented.");
            this._Label= new objects.Lable("The Game is Ended", "24px", "Consolas", "#B4D0E7", 320, 240, true);
            this._sky= new objects.Sky();
            this.Main();
        }
        public Update(): void 
        {
           
            this._sky.Update();
        }
        public Main(): void 
        {
            this.addChild(this._sky);
            this.addChild(this._Label);
           //throw new Error("Method not implemented.");
        }
        
    }
}