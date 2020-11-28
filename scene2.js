class Scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
  
    }
  
    create() {
      this.player = this.add.sprite(config.width / 2, config.height / 2, "player");
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      this.bg = this.add.image(windowWidth / 2, windowHeight / 2, 'background');
      this.bg.setDisplaySize(windowWidth, windowHeight);

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
  