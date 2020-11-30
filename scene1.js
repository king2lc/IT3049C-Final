/*Constructor calls super() which makes 
the class inherit all the characteristics of its predecessor
the class Scene from Phaser. So, this will be used to boot the game
*/
class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    //This function is used to load the music and images into memory
    preload(){

      //this.load.image() loads the images into Scene
        this.load.image('background', 'Assets/!!!ASSETSINUSE!!!/bg9.png');

      this.load.image('player', 'Assets/!!!ASSETSINUSE!!!/player.png',{
        frameWidth: 100,
        frameHeight: 100
      });
        
      this.load.image("earth", "Assets/!!!ASSETSINUSE!!!/Earth.png",{
        frameWidth: 100,
        frameHeight: 100
      });
        this.load.image("meteor1", "Assets/!!!ASSETSINUSE!!!/Stone1.png",{
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.image("meteor2", "Assets/!!!ASSETSINUSE!!!/Stone2.png",{
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.image("meteor3", "Assets/!!!ASSETSINUSE!!!/Stone3.png",{
          frameWidth: 100,
          frameHeight: 100
        });
        this.load.image("meteor4", "Assets/!!!ASSETSINUSE!!!/Stone4.png",{
          frameWidth: 100,
          frameHeight: 100
        });

        //this.load.audio('music', 'Assets/!!!ASSETSINUSE!!!/Music.mp3');

    }

    //This function is used to add objects to the game
    create() {

      //This jumps us to Scene2
    this.add.text(200, 200, "Loading...");

        this.scene.start("playGame");

    }
  }
  