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
      this.bg = this.add.tileSprite(0, 0, this.game.config.width, this.game.config.height, 'background');
      this.bg.setOrigin(0, 0);

      var earth = this.add.image(-500, 100, 'earth');
        
      player = this.physics.add.image(config.width / 2, config.height / 2, "player");
        
      this.meteor1 = this.physics.add.image(config.width, config.height/2 - 150, "meteor1");
      this.meteor2 = this.physics.add.image(config.width, config.height/2 - 50, "meteor2");
      this.meteor3 = this.physics.add.image(config.width, config.height/2 + 50, "meteor3");
      this.meteor4 = this.physics.add.image(config.width, config.height/2 + 150, "meteor4");      

        var tween = this.tweens.add({
            targets: earth,
            x: 3000,
            duration: 100000
        });
        console.log(tween);
        
      player.setCollideWorldBounds(true);
      cursors = this.input.keyboard.createCursorKeys();
        player.angle = 90;

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
      if (meteor.x < 0 - meteor.width || (meteor.y < 0 - meteor.height || meteor.y > config.height + meteor.height)) {
        this.resetMeteorPos(meteor);
      }
      meteor.angle -= direction/2;
    }
  
    //THis function is used as a loop that runs constantly
    update() {
      this.moveMeteor(this.meteor1, 1.6, -0.6);
      this.moveMeteor(this.meteor2, 1.2, -0.4);
      this.moveMeteor(this.meteor3, 1.1, 0.2);
      this.moveMeteor(this.meteor4, 1.5, 0.4);

      this.bg.tilePositionY -= 0.5;
    
        player.setVelocity(0);

    if (cursors.left.isDown)
    {
        player.setVelocityX(-300);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(300);
    }

    if (cursors.up.isDown)
    {
        player.setVelocityY(-300);
    }
    else if (cursors.down.isDown)
    {
        player.setVelocityY(300);
    }

    }
  
  }

  