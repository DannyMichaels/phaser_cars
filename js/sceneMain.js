class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }

  preload() {
    // load our images or sounds
    this.load.image('road', 'images/road.jpg');
    this.load.spritesheet('cars', 'images/cars.png', {
      frameWidth: 60,
      frameHeight: 126,
    });
    this.load.image('line', 'images/line.png');
  }

  create() {
    // define our objects
    this.road = new Road({ scene: this }); // telling it that this is the scene (sceneMain)
    this.road.x = game.config.width / 2;
    this.road.makeLines();
  }

  update() {
    // constant running loop
    this.road.moveLines();
  }

  // we can also add our own custom functions
}
