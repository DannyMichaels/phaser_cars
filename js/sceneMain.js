class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }

  preload() {
    // load our images or sounds
    this.load.image('road', 'images/road.jpg');
    this.load.image('line', 'images/line.png');

    // player: car
    this.load.spritesheet('cars', 'images/cars.png', {
      frameWidth: 60,
      frameHeight: 126,
    });

    // obstacles
    this.load.image('pcar1', 'images/pcar1.png');
    this.load.image('pcar2', 'images/pcar2.png');
    this.load.image('cone', 'images/cone.png');
    this.load.image('barrier', 'images/barrier.png');
  }

  create() {
    // define our objects
    // set up
    emitter = new Phaser.Events.EventEmitter();
    controller = new Controller();

    // score box
    this.scoreBox = new ScoreBox({ scene: this });
    // this.scoreBox.x = game.config.width - 50;
    // this.scoreBox.y = 50; // top right corner

    // road
    this.road = new Road({ scene: this }); // telling it that this is the scene (sceneMain)
    Align.centerHorizontally(this.road);
    this.road.makeLines();

    this.alignGrid = new AlignGrid({ scene: this, rows: 5, cols: 5 });
    this.alignGrid.showNumbers();
    this.alignGrid.placeAtIndex(4, this.scoreBox); // place scorebox at top right
  }

  update() {
    // constant running loop
    this.road.moveLines();
    this.road.moveObject();
  }

  // we can also add our own custom functions
}
