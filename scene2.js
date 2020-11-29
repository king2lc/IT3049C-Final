//Same thing as Scene1 and the will let us play the game
class Scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
    }
  
    //This function is used to add objects to the game
    create() {
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      //this.add.image() adds the image 
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
      var randomY = Phaser.Math.Between(100, config.height - 100);
      meteor.y = randomY;      
    }

    moveMeteor(meteor, speed, direction) {
      var randomDeltaY = Phaser.Math.Between(-speed, speed);
      meteor.x -= speed;
      meteor.y += direction
      if (meteor.x < 0) {
        this.resetMeteorPos(meteor);
      }
      meteor.angle -= direction/2;
    }
  
    //THis function is used as a loop that runs constantly
    update() {
      this.moveMeteor(this.meteor1, 3, -1);
      this.moveMeteor(this.meteor2, 5, 2);
      this.moveMeteor(this.meteor3, 8, 1);
    }
  
  }

  