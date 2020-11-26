class Scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
  
    }
  
    create() {
      this.background = this.add.tileSprite(0,0,this.game.config.width, this.game.config.height, "background");
      this.background.setOrigin(0,0);

      this.ship = this.add.sprite(this.game.config.width/2 - 50, this.game.config.height/2, "ship");
    }
  
    update() {

      this.moveShip(this.ship1, 1);
  
  
      this.background.tilePositionY -= 0.5;
  
      this.movePlayerManager();
  }
  
  movePlayerManager(){
      this.player.setVelocity(0);
      if(this.cursorKeys.left.isDown){
          this.player.setVelocityX(-gameSettings.playerSpeed);
      }else if(this.cursorKeys.right.isDown){
          this.player.setVelocityX(gameSettings.playerSpeed);
      }
  
      if(this.cursorKeys.up.isDown){
          this.player.setVelocityY(-gameSettigns.playerSpeed);
      } else if(this.cursorKeys.down.isDown){
          this.player.setVelocityY(gameSettigns.playerSpeed);
      }
  }
  
      //Moving the ship on Y axis
      moveShip(ship, speed){
          ship.y += speed;
          if(ship.y > this.game.config.height){
              this.resetShipPos(ship);
          }
      }

    }
  