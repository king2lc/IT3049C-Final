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
      this.meteor1 = this.add.image(config.width / 2, config.height/2 - 100, "meteor1");
      this.meteor2 = this.add.image(config.width / 2, config.height/2, "meteor2");
      this.meteor3 = this.add.image(config.width / 2, config.height/2 + 100, "meteor3");

      var image = this.add.image(100, 100, 'test');

        var tween = this.tweens.add({
            targets: image,
            x: 600,
            duration: 30000
        });
        console.log(tween);
      

    }

    resetMeteorPos(meteor) {
      meteor.x = config.width;
      var randomY = Phaser.Math.Between(0, config.height);
      meteor.y = randomY;      
    }

    moveMeteor(meteor, speed) {
      var randomDeltaY = Phaser.Math.Between(-speed, speed);
      meteor.x -= speed;
      meteor.y += randomDeltaY;
      if (meteor.x < 0) {
        this.resetMeteorPos(meteor);
      }
    }
  
    update() {
      this.moveMeteor(this.meteor1, 10);
      this.moveMeteor(this.meteor2, 20);
      this.moveMeteor(this.meteor3, 15);
    }
  
  }

  