import Phaser from 'phaser';

class Preload extends Phaser.Scene {

  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.tilemapTiledJSON('crystalWorld', 'assets/crystal_world_map.json');
    this.load.image('tileSetOne', 'assets/main_lev_build_1.png')
    this.load.image('tileSetTwo', 'assets/main_lev_build_2.png')
  }

  create() {
    this.scene.start('PlayScene');
  }
}

export default Preload;
