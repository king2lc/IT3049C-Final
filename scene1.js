class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
      game.scale.pageAlignHorizontally = true;
      game.scale.pageAlignVertically = true;
      game.scale.refresh();
    }
  
    create() {
      
    }
  }
  