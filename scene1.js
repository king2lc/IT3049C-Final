class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
        this.load.image("background", "assets/!!!ASSETSINUSE!!!/gif1.gif");
        
        this.load.spritesheet("ship", "assets/!!!ASSETSINUSE!!!/Pro.png",{
            frameWidth: 16,
            frameHeight: 16
        });
    }
    create() {
      
    }
  }
  