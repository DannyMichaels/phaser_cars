class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }

  preload() {
    // load our images or sounds
    this.load.image('road', 'images/road.jpg');
    this.load.spritesheet('cars', 'images/cars.jpg', {
      frameWidth: 60,
      frameHeight: 126,
    });
    this.load.image('line', 'images/line.jpg');
  }

  create() {
    // define our objects
    let road = new Road({ scene: this }); // telling it that this is the scene (sceneMain)
    road.x = game.config.width / 2;
  }

  update() {
    // constant running loop
  }

  // we can also add our own custom functions
}
