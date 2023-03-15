import Phaser from 'phaser';

class Play extends Phaser.Scene {

  constructor() {
    super('PlayScene');
  }

  create() {
    const map = this.createMap();
    const layers = this.createLayers(map);
    const player = this.createPlayer();

    this.physics.add.collider(player, layers.platformsLayer);
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
    const environmentLayer = map.createStaticLayer('environment', tileSet);
    const platformsLayer = map.createStaticLayer('platforms', tileSet);
    platformsLayer.setCollisionByExclusion(-1, true);

  
    return {
      environmentLayer,
      platformsLayer
    }
  }

  createPlayer() {
    const player = this.physics.add.sprite(100, 250, 'player');
    player.body.setGravityY(500);
    player.setCollideWorldBounds(true);
    return player;
  }
}

export default Play;
