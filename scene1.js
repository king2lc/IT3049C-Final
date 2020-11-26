class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
        this.load.image('background', 'Assets/!!!ASSETSINUSE!!!/bg9.png');
        
        this.load.spritesheet("player", "Assets/!!!ASSETSINUSE!!!/Pro.png",{
            frameWidth: 16,
            frameHeight: 16
        });

        this.load.spritesheet("ship1", "Assets/PixelShip/Category_0_Original/ShipOrig_0003_Package-----------------.png", {
          frameWidth: 32,
          frameHeight: 16
      });

        this.load.spritesheet("meteor", "Assets/Asteroids, Meteors/filled/Stones2Filled_03.png",{
          frameWidth: 16,
          frameHeight: 16
      });


    }
    create() {
      this.scene.start("playGame");

      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      this.bg = this.add.image(windowWidth / 2, windowHeight / 2, 'background');
      this.bg.setDisplaySize(windowWidth, windowHeight);
      
      this.anims.create({
        key: "ship1_anim",
        frames: this.game.anims.generateFrameNumbers("ship"),
        frameRate: 20,
        repeat: -1
    });

    this.anims.create({
      key: "rock",
      frames: this.game.anims.generateFrameNumbers("meteor"),
      frameRate: 20,
      repeat: -1,
  });

  this.anims.create({
    key: "player",
    frames: this.game.anims.generateFrameNumbers("player"),
    frameRate: 20,
    repeat: -1
});
    }
  }
  