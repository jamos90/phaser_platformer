import Phaser from 'phaser';

class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x,y) {
    super(scene, x, y, 'player');

    //adds all details from scene (this) context, including sprite image
    scene.add.existing(this);
    //adds passed scene (this) to player we're creating 
    scene.physics.add.existing(this);
    this.init();
  }

  init() {
    this.gravity = 500;
    this.playerSpeed = 200;
    this.body.setGravityY(this.gravity);
    this.setCollideWorldBounds(true);
    //creates a reference to cursor keys on keyboard to be used in update
    this.cursors = this.scene.input.keyboard.createCursorKeys();
  }

  //called 60fps like update
  preUpdate(time, delta) {
    //have to call super for arcade sprite to use animations on your sprite
    super.preUpdate(time, delta);
    const { left, right } = this.cursors;
    if (left.isDown) {
      this.setVelocityX(-this.playerSpeed);
    } else if (right.isDown) {
      this.setVelocityX(this.playerSpeed);
    } else {
      this.setVelocityX(0);
    }
  }
};

export default Player