class Scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
  
    }
  
    create() {
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      this.bg = this.add.image(windowWidth / 2, windowHeight / 2, 'background');
      this.bg.setDisplaySize(windowWidth, windowHeight);
      this.player = this.add.sprite(config.width / 2, config.height / 2, "player");

      var image = this.add.image(100, 100, 'test');

        var tween = this.tweens.add({
            targets: image,
            x: 600,
            duration: 30000
        });
        console.log(tween);
    }
  
    update() {

    }
  
  }
  