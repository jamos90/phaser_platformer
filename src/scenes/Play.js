import Phaser from 'phaser';

class Play extends Phaser.Scene {

  constructor() {
    super('PlayScene');
  }

  create() {
    const map = this.make.tilemap({key: 'crystalWorld'});
    //first argument must match what the file is called in tiled
    const tileSetOne = map.addTilesetImage('main_lev_build_1', 'tileSetOne');
    const tileSetTwo = map.addTilesetImage('main_lev_build_2', 'tileSetTwo');

    //first argument must match what the layer is called in tiled
    //order matters. Should match what you have in tiled
    map.createStaticLayer('environment', tileSetOne);
    map.createStaticLayer('platforms', tileSetOne);

  }
}

export default Play;
