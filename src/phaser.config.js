import Phaser from 'phaser'

import GameScene from './scenes/GameScene'

// For more settings see <https://github.com/photonstorm/phaser/blob/master/src/boot/Config.js>
export default {
  type: Phaser.AUTO,
  parent: 'content',
  width: 800,
  height: 600,
  scene: [
    GameScene
  ]
}
