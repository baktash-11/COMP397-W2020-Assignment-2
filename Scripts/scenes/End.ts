module scenes
{
    export class End extends objects.Scene
    {
        //variables and private memebers 

        private _LabelEnd:objects.Lable;
        private _sky:objects.Sky;
        private _backButton:objects.Button;
        private _scoreTracker:managers.Scoretracker;

        
        constructor()
        {
            super();
            this.Start();
        }


        //methods 
        public Start(): void 
        {
            //throw new Error("Method not implemented.");
            this._LabelEnd= new objects.Lable("GAME OVER", "40px", "Consolas", "#FF0000", 320, 240, true);
            this._sky= new objects.Sky();
            this._backButton = new objects.Button("buttonBack",320, 400, true);

            this._scoreTracker = new managers.Scoretracker();
            this._scoreTracker.HighScore = config.Game.HIGH_SCORE

            
            this.Main();
        }
        public Update(): void 
        {
           
            this._sky.Update();
        }
        public Main(): void 
        {
            //throw new Error("Method not implemented.");
            this.addChild(this._sky);
            this.addChild(this._LabelEnd);
            this.addChild(this._backButton);
            this.addChild(this._scoreTracker.HeghScoreLabelForEndScene);

            this._backButton.on("click",()=>{
            config.Game.SCORE_TRACKER.Lives=3;
            config.Game.SCORE_TRACKER.Score=0;
            config.Game.SCENE = scenes.State.PLAY;
        });

        }
        
        public Clean():void {
            this.removeAllChildren();
        }
    }
}