import Phaser from 'phaser';
import Player from '../entities/Player';

class Play extends Phaser.Scene {

  constructor() {
    super('PlayScene');
  }

  create() {
    const map = this.createMap();

    const layers = this.createLayers(map);

    this.player = this.createPlayer();

    this.physics.add.collider(this.player, layers.platformColliders);

    this.playerSpeed = 200;

    //creates a reference to cursor keys on keyboard to be used in update
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    const { left, right } = this.cursors;

    if (left.isDown) {
      this.player.setVelocityX(-this.playerSpeed);
    } else if (right.isDown) {
      this.player.setVelocityX(this.playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }
  }


  createMap() {
    const map = this.make.tilemap({key: 'crystalWorld'});
    //first argument must match what the file is called in tiled
    map.addTilesetImage('main_lev_build_1', 'tileSetOne');
    return map;
  }

  createLayers(map) {
    //first argument must match what the layer is called in tiled
    //order matters. Should match what you have in tiled
    const tileSet = map.getTileset('main_lev_build_1');
    const platformColliders = map.createStaticLayer('platform_colliders', tileSet);
    const environmentLayer = map.createStaticLayer('environment', tileSet);
    const platformsLayer = map.createStaticLayer('platforms', tileSet);
    //makes platforms collidable - -1 means that tiles that have an index larger than 0 will be collidable. 
    //Ie tiles with level features. 
    // platformColliders.setCollisionByExclusion(-1, true);
    
    //second way to add collison - using property name. You have to set special property in Titled for this to work. 
    //here we have add a custom property to call collides and set it to true for the blocks that make up the platform_colliders 
    platformColliders.setCollisionByProperty({collides: true});

  
    return {
      environmentLayer,
      platformsLayer,
      platformColliders
    }
  }

  createPlayer() {
    // const player = this.physics.add.sprite(100, 250, 'player');
    const player = new Player(this, 100, 250);
    player.body.setGravityY(500);
    player.setCollideWorldBounds(true);
    return player;
  }
}

export default Play;
