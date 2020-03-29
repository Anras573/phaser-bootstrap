import Phaser from 'phaser'
import logo from '../../assets/Phaser-Logo-Small.png'
import { dist } from '../helpers/constants'

class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })
  }

  init () {}
  preload () {
    this.load.image('logo', dist + '/' + logo)
  }

  create () {
    const logo = this.add.image(400, 150, 'logo')

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
