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

    // add car to the road.
    this.car = this.scene.add.sprite(
      -this.displayWidth / 4, // put it on left side with negative num
      game.config.height * 0.9,
      'cars'
    ); // location of car in x of road , location of car in y of road , key of sprite

    Align.scaleToGameWidth(this.car, 0.15);

    this.add(this.car);
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
    this.lineGroup.children.iterate(
      function (child) {
        child.y += this.vSpace / 20; // decrease the speed by a factor of 20
      }.bind(this)
    );

    this.count++;
    // every 20 times
    if (this.count == 20) {
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
