module objects
{   //all my scenes will extends from this abstract class
    export abstract class Scene extends createjs.Container
    {
        //constructor 
        constructor()
        {
            super()
        }

        public abstract Start():void;

        public abstract Update():void;

        public abstract Main():void;
    }
}