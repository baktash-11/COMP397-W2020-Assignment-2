let Game = (function(){

    //variable decleartion 
    let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage:createjs.Stage;

    let currentSceneState:scenes.State;
    let currentScene: objects.Scene;

    let textureAtlas: createjs.SpriteSheet;
    let skyAtlas: createjs.SpriteSheet;
    let logoAtlas: createjs.SpriteSheet;
   
    let assets:createjs.LoadQueue;
    let assetsManifest =
    [
        //loading assets 
        
        {id:"atlas", src:"./Assets/sprites/atlas.png"},
        {id:"sky", src:"./Assets/images/sky.png"},
        {id:"logo", src:"./Assets/images/logo.png"},

     
        
        //the sounds
        //./Assets/audio/fx_Crash.mp3
        {id:"crash_Fx", src:"./Assets/audio/falldown.mp3"},
        {id:"gas", src:"./Assets/audio/gas.mp3"},
        {id:"plane", src:"./Assets/audio/plane.mp3"},
        {id:"gun", src:"./Assets/audio/gun.mp3"},
        {id:"fuel_s", src:"./Assets/audio/fuel_s.mp3"},
        
    ]

    let spritData =
    {
        "images": {},
        
         
        "frames": [
            [1, 1, 140, 56, 0, 0, 0],
            [143, 1, 140, 56, 0, 0, 0],
            [1, 59, 140, 56, 0, 0, 0],
            [143, 59, 140, 56, 0, 0, 0],
            [1, 117, 87, 82, 0, 0, 0],
            [1, 201, 87, 82, 0, 0, 0],
            [90, 117, 87, 82, 0, 0, 0],
            [90, 201, 87, 82, 0, 0, 0],
            [179, 117, 70, 59, 0, 0, 0],
            [251, 117, 29, 29, 0, 0, 0],
            [251, 148, 27, 47, 0, 0, 0],
            [179, 178, 16, 16, 0, 0, 0]
        ],
        
        "animations": {
            "buttonBack": { "frames": [0] },
            "buttonNext": { "frames": [1] },
            "buttonPlay": { "frames": [2] },
            "buttonStop1": { "frames": [3] },
            "p1": { 
                    "frames": [4, 5, 6, 7 ],
                    "speed": 0.3
                },
          
            "enemyPlane": { "frames": [8] },
            "placeHolder": { "frames": [9] },
            "fuel": { "frames": [10] },
            "bullet": { "frames": [11] }
        },
       
    }
    let skyData =
    {
        "images": {},
        
        "frames": [
            [1, 1, 640, 1440, 0, 0, 0]
        ],
        
        "animations": {
            "sky": { "frames": [0] }
        }

    }

    let logoData =
    {
        "images": {},
        
        "frames": [
            [1, 1, 321, 245, 0, 0, -17]
        ],
        
        "animations": {
            "logo": { "frames": [0] }
        }
    }
   
    
    function Preload():void
    {
        //creating assets container 
        assets = new createjs.LoadQueue();
        config.Game.ASSETS= assets;
        assets.installPlugin(createjs.Sound);
        assets.loadManifest(assetsManifest);
        assets.loadManifest(assetsManifest);
        assets.on("complete", Start);
        
    }
   

    

    function Start():void
    {
        console.log(`%c function Start Game!`, "color: gray; font-size: 24px;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = config.Game.FPS; //game frame rate time/secod
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20); 

        spritData.images =[assets.getResult("atlas")];
        textureAtlas = new createjs.SpriteSheet(spritData);
        config.Game.TEXTURE_ATLAS= textureAtlas;

        skyData.images = [assets.getResult("sky")]
        skyAtlas = new createjs.SpriteSheet(skyData);
        config.Game.SKY_ATLAS= skyAtlas;

        logoData.images = [assets.getResult("logo")]
        logoAtlas = new createjs.SpriteSheet(logoData);
        config.Game.LOGO_ATLAS= logoAtlas;

        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE = scenes.State.START;
    }

    function Update():void
    {
        if(currentSceneState != config.Game.SCENE)//if the current scene state is not Start, play or 
                                                 // or End, the main method will exicuts
        {
            Main();
        }
        currentScene.Update();
        stage.update();
    }

    function Main():void
    {
        
        if(currentSceneState != scenes.State.NO_SCENE)
        {
          currentScene.Clean(); // remove all chilldren
          stage.removeAllChildren();
        }
        
        switch(config.Game.SCENE)
        {
            case scenes.State.START:
                currentScene = new scenes.Start;
                console.log(`%c Hello from Start => Start!`, "color: blue; font-size: 24px;");
            break;

            case scenes.State.PLAY:
                currentScene = new scenes.Play;
                console.log(`%c Hello from Play => Play!`, "color: #0ffff0; font-size: 24px;");
            break;

            case scenes.State.END:
                currentScene = new scenes.End;
               
            break;
        }
        currentSceneState = config.Game.SCENE;
        stage.addChild(currentScene);

        
        
    }

    window.addEventListener('load', Preload);
})();
//galaga
//gradius
//river aid