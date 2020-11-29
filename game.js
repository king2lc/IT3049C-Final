//Defining the basic characteristics of the game
//Config is an object where it is the parameter of our game
var config = {
    width: 1280,
    height: 720,
    backgroundColor: 0x000000,
    //This specifies the configuration of the game with the scenes
    scene: [Scene1, Scene2],
    pixelArt: true,
    physics: {
        default: 'arcade'
    },
}


var cursors;
var player;


//Here we are creating a new game instance that we can configure when creating it
var game = new Phaser.Game(config)