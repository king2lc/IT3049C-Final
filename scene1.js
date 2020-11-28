class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
        this.load.image('background', 'Assets/!!!ASSETSINUSE!!!/bg9.png');

        this.load.spritesheet('player', 'Assets/!!!ASSETSINUSE!!!/player.png',{
          frameWidth: 100,
          frameHeight: 100
        });
        
        this.load.spritesheet("ship", "Assets/!!!ASSETSINUSE!!!/Pro.png",{
            frameWidth: 16,
            frameHeight: 16
        });
    }
    create() {
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      this.bg = this.add.image(windowWidth / 2, windowHeight / 2, 'background');
      this.bg.setDisplaySize(windowWidth, windowHeight);
    }
  }
  