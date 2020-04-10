module objects
{
    export class Lable extends createjs.Text
    {
        //constructor
        constructor( public labelString:string="Default Text",
                    public fontSize:string="24px", 
                    public fontFamily:string="Arail", 
                    public fontColor:string="#ff0000",
                    x:number =0, y:number=0, 
                    public isCentered:boolean=false )
        {
            super(labelString, fontSize+" "+fontFamily, fontColor);

            if(isCentered)
            {
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getMeasuredLineHeight() * 0.5;
            }

            this.x=x; 
            this.y=y;
        }

        //methods 
        public setText(newText:string)
        {
            this.text = newText;
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getMeasuredLineHeight() * 0.5;
        }

    }
}