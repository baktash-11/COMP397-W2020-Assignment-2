"use strict";
var Game = (function () {
    //variable decleartion 
    var canvas = document.getElementsByTagName('canvas')[0];
    var stage;
    var currentSceneState;
    var currentScene;
    var assets;
    var assetsManifest = [
        //loading assets 
        //./Assets/images/enemyPlane.png
        { id: "planeSmall", src: "./Assets/images/planeSmall.png" },
        { id: "enemyP1", src: "./Assets/images/enemyPlane.png" },
        { id: "fuel", src: "./Assets/images/fuel.png" },
        { id: "PlaneS", src: "./Assets/images/PlaneSmall.gif" },
        { id: "ePlaneSmall3", src: "./Assets/images/ePlane.png" },
        { id: "logo", src: "./Assets/images/logo.png" },
        { id: "sky", src: "./Assets/images/sky.png" },
        { id: "backButton", src: "./Assets/images/buttonBack.png" },
        { id: "nextButton", src: "./Assets/images/buttonNext.png" },
        { id: "playButton", src: "./Assets/images/buttonPlay.png" },
        { id: "stopButton", src: "./Assets/images/buttonStop.png" },
        { id: "stopButton1", src: "./Assets/images/buttonStop1.png" },
        { id: "stopButton2", src: "./Assets/images/buttonStop2.png" },
        { id: "plane", src: "./Assets/images/plane.png" },
        { id: "plane2", src: "./Assets/images/plane3.png" },
        { id: "placeHolder", src: "./Assets/images/placeHolder.png" },
        { id: "sky", src: "./Assets/images/sky.png" },
        //the sounds
        //./Assets/audio/fx_Crash.mp3
        { id: "crash_Fx", src: "./Assets/audio/falldown.mp3" },
        { id: "gas", src: "./Assets/audio/gas.mp3" },
        { id: "plane", src: "./Assets/audio/plane.mp3" },
        { id: "gun", src: "./Assets/audio/gun.mp3" },
        { id: "fuel_s", src: "./Assets/audio/fuel_s.mp3" },
    ];
    function Preload() {
        //creating assets container 
        assets = new createjs.LoadQueue();
        config.Game.ASSETS = assets;
        assets.installPlugin(createjs.Sound);
        assets.loadManifest(assetsManifest);
        assets.loadManifest(assetsManifest);
        assets.on("complete", Start);
    }
    function Start() {
        console.log("%c function Start Game!", "color: gray; font-size: 24px;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = config.Game.FPS; //game frame rate time/secod
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE = scenes.State.START;
    }
    function Update() {
        if (currentSceneState != config.Game.SCENE) //if the current scene state is not Start, play or 
         
        // or End, the main method will exicuts
        {
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        if (currentSceneState != scenes.State.NO_SCENE) {
            currentScene.Clean(); // remove all chilldren
            stage.removeAllChildren();
        }
        switch (config.Game.SCENE) {
            case scenes.State.START:
                currentScene = new scenes.Start;
                console.log("%c Hello from Main => Start!", "color: blue; font-size: 24px;");
                break;
            case scenes.State.PLAY:
                currentScene = new scenes.Play;
                console.log("%c Hello from Main => Play!", "color: #0ffff0; font-size: 24px;");
                break;
            case scenes.State.END:
                currentScene = new scenes.End;
                console.log("%c Hello from Main => Start!", "color: blue; font-size: 24px;");
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
//# sourceMappingURL=game.js.map