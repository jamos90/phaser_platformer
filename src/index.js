import Phaser from 'phaser';
import PlayScene from './scenes/Play';
import PreloadScene from './scenes/Preload';

//config passed to phase game object
const WIDTH = 1280;
const HEIGHT = 600

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
}

const scenes = [
  PreloadScene,
  PlayScene,
]

const createScene = scene => new scene(SHARED_CONFIG);

const initScenes = () => scenes.map((scene) =>  createScene(scene));
  

const config = {
  //type will be WebGl - web graphics lib, part of the browser - js api for rendering graphics
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  pixelArt: true,
  physics: {
    //arcade physics plugin, manages physics simulations
    default: 'arcade',
    arcade: {
      debug: false,
    }
  },
  scene: initScenes()
}

new Phaser.Game(config);