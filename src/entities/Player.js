import Phaser from 'phaser';

class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x,y) {
    super(scene, x, y, 'player');

    //adds all details from scene (this) context, including sprite image
    scene.add.existing(this);
    //adds passed scene (this) to player we're creating 
    scene.physics.add.existing(this);
  }

};

export default Player