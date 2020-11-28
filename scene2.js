class Scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
  
    }
  
    create() {
      this.player = this.add.sprite(config.width / 2, config.height / 2, "player");
    }
  
    update() {

    }
  
  }
  