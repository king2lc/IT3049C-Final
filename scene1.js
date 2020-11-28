class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
        this.load.image('background', 'Assets/!!!ASSETSINUSE!!!/bg9.png');

        this.load.image('test', 'Assets/Asteroids, Meteors/filled/Stones2Filled_01.png');

      this.load.image('player', 'Assets/!!!ASSETSINUSE!!!/player.png',{
        frameWidth: 100,
        frameHeight: 100
      });
        
        this.load.spritesheet("ship", "Assets/!!!ASSETSINUSE!!!/Pro.png",{
            frameWidth: 16,
            frameHeight: 16
        });
    }
    create() {


        this.scene.start("playGame");

    }
  }
  