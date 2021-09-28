//  a container is a collection of objects that you can treat as one object
class Road extends Phaser.GameObjects.Container {
  constructor(config) {
    super(config.scene);

    this.scene = config.scene;
    this.background = this.scene.add.image(0, 0, 'road');
    this.add(this.background);
    this.scene.add.existing(this); // add this to the scene

    // this.background.displayWidth = game.config.width * 0.5; // 50% of size of screen
    // this.background.scaleY = this.background.scaleX; // propotional height and width
    Align.scaleToGameWidth(this.background, 0.5);

    this.setSize(this.background.displayWidth, game.config.height); // x, y, half the width, full height of game
    console.log(this);

    this.lineGroup = this.scene.add.group(); //  don't put lineGroup as child of container, it will cause errors
    //
    //
    this.count = 0; // count how many times we're moving the lines

    this.rightLaneLocation = this.displayWidth / 4;
    this.leftLaneLocation = -this.displayWidth / 4;

    // add car to the road.
    this.car = this.scene.add.sprite(
      this.rightLaneLocation, // put it on right lane with positive num
      game.config.height * 0.9, // y
      'cars' // sprite key
    ); // location of car in x of road , location of car in y of road , key of sprite

    Align.scaleToGameWidth(this.car, 0.1);

    this.add(this.car);
    //
    // add click
    this.background.setInteractive();
    this.background.on('pointerdown', this.changeLanes, this); // pointerdown means click
  }

  addObject() {
    this.object = this.scene.add.sprite(this.leftLaneLocation, 0, 'pcar'); // x ,y , key
  }

  changeLanes() {
    // if car.x axis is positive (greater than 0), then we know it's on the right side of the road
    let carIsRightSide = this.car.x > 0;

    if (carIsRightSide) {
      // if on right side of road  move it to left side
      this.car.x = this.leftLaneLocation;
      return;
    }

    // else if on the left side of the road, move it to right side.
    this.car.x = this.rightLaneLocation;
  }

  makeLines() {
    this.vSpace = this.displayHeight / 10; // vertical space between each item

    const AMOUNT_OF_LINES = 20; // amount of lines to have on the scene

    for (let yAxis = 0; yAxis < AMOUNT_OF_LINES; yAxis++) {
      let line = this.scene.add.image(this.x, yAxis * this.vSpace, 'line'); // x ,y , key
      line.originalY = line.y;
      this.lineGroup.add(line);
    }
  }

  moveLines() {
    const AMOUNT_OF_LINES = 20; // amount of lines to have on the scene

    this.lineGroup.children.iterate(
      function (child) {
        child.y += this.vSpace / 20; // decrease the speed by a factor of 20
      }.bind(this)
    );

    this.count++;
    // every 20 times
    if (this.count == AMOUNT_OF_LINES) {
      // reset
      this.count = 0;
      this.lineGroup.children.iterate(
        function (child) {
          child.y = child.originalY;
        }.bind(this)
      );
    }
  }
}
