module managers
{
    export class Scoretracker
    {
        //private members
        
        private _lives : number;
        private _score : number;
        private _livesLabel : objects.Lable;
        private _scoreLable : objects.Lable;
        
        
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

        public get LivesLabel() : objects.Lable {
            return this._livesLabel;
        }

        public get ScoreLable() : objects.Lable {
            return this._scoreLable;
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

            this.Lives = config.Game.LIVES;
            this.Score = config.Game.SCORE;
            
        }
        //public fucntions
    }
}