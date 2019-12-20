import Phaser from 'phaser'

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })
  }

  init () {}
  preload () {
    this.load.image('logo', 'assets/Phaser-Logo-Small.png')
  }

  create () {
    let logo = this.add.image(400, 150, 'logo')

    this.tweens.add({
      targets: logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1
    })
  }
}

export default GameScene
