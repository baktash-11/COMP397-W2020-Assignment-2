module managers
{
    export class Scoretracker
    {
        //private members
        
        private _lives : number;
        private _score : number;
        private _highScore : number;
        private _numOfFuil : number;
        
        
        private _NumOfFuelLable : objects.Lable;
        private _livesLabel : objects.Lable;
        private _scoreLable : objects.Lable;
        private _highScoreLabel : objects.Lable;
        private _heghScoreLabelForEndScene: objects.Lable;
   
        
        
        //getter and setter
        
        public get Lives() : number {
            return this._lives;
        }
        public set Lives(v : number) {
            this._lives = v;
            config.Game.LIVES = this._lives;
            this.LivesLabel.text = "L: "+ this._lives; //ijecting live's update
        }
        
        public get Score() : number {
            return this._score;
        }
        public set Score(v : number) {
            this._score = v;
            config.Game.SCORE = this._score;
            this.ScoreLable.text = "S: "+this._score; // injecting score's update
        }
        
        
        public get HighScore() : number {

            return this._highScore;
        }
        public set HighScore(v : number) {
            this._highScore = v;
            config.Game.HIGH_SCORE = this._score;
            this.HighScoreLabel.setText("High Score: " + this._highScore);
            this._heghScoreLabelForEndScene.setText("High Score: "+ this._highScore);
        }
        
        public get NumOfFuil() : number {
            return this._numOfFuil;
        }
        public set NumOfFuil(v : number) {
            this._numOfFuil = v;
        }
        
        
        public get HighScoreLabel() : objects.Lable {
            return this._highScoreLabel;
        }
        public get LivesLabel() : objects.Lable {
            return this._livesLabel;
        }
        
        public get ScoreLable() : objects.Lable {
            return this._scoreLable;
        }
        
        public get NumOfFuelLable() : objects.Lable {
            return this._NumOfFuelLable;
        }

        public get HeghScoreLabelForEndScene():objects.Lable{
            return this._heghScoreLabelForEndScene;
        }
        //constructor 
        constructor(){
            this._initialize();
        }

        //private functions
        private _initialize():void
        {
            this._livesLabel = new objects.Lable("L:99", "18px","Arail", "#FFF", 20, 20, false );
            this._scoreLable = new objects.Lable("S: 99999", "18px","Arail", "#FFF", 20, 40, false );
            this._highScoreLabel = new objects.Lable("High Score: ", "18px","Arail", "#FFF", 320, 20);
            this._heghScoreLabelForEndScene = new objects.Lable("High Score: 00", "30px","Arail", "#FFF", 320, 200, true);

            this.Lives = config.Game.LIVES;
            this.Score = config.Game.SCORE;
            
        }
        //public fucntions
    }
}