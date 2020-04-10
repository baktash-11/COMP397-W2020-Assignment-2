module objects
{
    export abstract class GameObject extends createjs.Bitmap
    {
        // private varaibles 
        private _width:number;
        private _height:number;
        private _halfWidth:number;
        private _halfHeight:number;
        private _position:Vector2;
        private _isColliding:boolean;

        private _velocity:Vector2;
        private _isCentred:boolean;
        private _type : enums.GameObjectType;
        
        
       
        
        
        //getters and setters
        get width():number
        {
            return this._width;
        }

        set width(newWidth:number)
        {
            this._width = newWidth;
            this._halfWidth = this._computeHalfWidth();
        }

        get height():number
        {
            return this._height;
        }

        set height(newHeight:number)
        {
            this._height = newHeight;
            this._halfHeight = this._computeHalfHeight();
        }
        get position():Vector2
        {
            return this._position;
        }

        set position(newPosition:Vector2)
        {
            this._position = newPosition;
            this.x = newPosition.x;
            this.y = newPosition.y;
        }
        get halfWidth():number
        {
            return this._halfWidth;
        }

        get halfHeight():number
        {
            return this._halfHeight;
        }

        get isColliding():boolean
        {
            return this._isColliding;
        }

        set isColliding(newState:boolean)
        {
            this._isColliding = newState;
        }
        get isCentered():boolean
        {
            return this._isCentred;

        }

        set isCentered(newState:boolean){
            this._isCentred = newState;
            if(newState)
            {
                this._centerGameOjbect();
            }
        }

        get velocity():Vector2
        {
           return this._velocity;
        }
        set velocity(newv:Vector2){
            this._velocity = newv;
        }

        public get type() : enums.GameObjectType {
            return this._type;
        }
        public set type(v : enums.GameObjectType) {
            this._type = v;
        }


        // constructor
        //constructor(imageString:Object = config.Game.ASSETS.getResult("placeHolder"),x:number = 0, y:number = 0, centered:boolean = false)
        constructor(imageString?:Object, x?:number, y?:number, centered?:boolean)
        constructor(imageString:Object, postion:objects.Vector2, cetered?:boolean)
        constructor(first: Object = config.Game.ASSETS.getResult("placeHolder"), second: Vector2 | number =0, third: boolean | number =0, fourth:boolean= false)
        
        {
            super(first);

            
            this._width = 0;
            this._height = 0;
            this._halfWidth = 0;
            this._halfHeight = 0;
            this._position = new Vector2(0, 0, this);
            this._isColliding = false;
            this._velocity = new Vector2(0, 0);
            this._isCentred= false;

            

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            if(fourth != undefined){
                this.isCentered = fourth;
            }
            if(typeof third == "boolean"){
                this.isCentered = third;
            }
            if(typeof second =="number" && typeof third == "number"){
                this.position = new Vector2(second, third, this);
            }

            if(second instanceof Vector2){
                this.position = second;
            }
            this.type = enums.GameObjectType.UNDEFINED;

        }

        // private methods (functions)
        private _centerGameOjbect():void
        {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        }
        private _computeHalfWidth():number
        {
            return this.width * 0.5;
        }

        private _computeHalfHeight():number
        {
            return this.height * 0.5;
        }

        protected abstract _checkBounds():void;


        // public functions

        public abstract Start():void;
        public abstract Reset():void;
        public abstract Update():void;
        
        

    }

}