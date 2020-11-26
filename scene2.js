class Scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
  
    }
  
    create() {
      this.background = this.add.tileSprite(0,0,this.game.config.width, this.game.config.height, "background");
      this.background.setOrigin(0,0);

      this.ship = this.add.sprite(this.game.config.width/2 - 50, this.game.config.height/2, "ship1");
    }
  
    update() {

  }
    }
  