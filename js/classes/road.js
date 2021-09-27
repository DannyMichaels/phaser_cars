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
  }

  makeLines() {
    const AMOUNT_OF_LINES = 100; // amount of lines to have on the scene
    this.VERTICAL_SPACE = this.displayHeight / 10; // vertical margin between each item

    for (let yAxis = 0; yAxis < AMOUNT_OF_LINES; yAxis++) {
      let line = this.scene.add.image(
        this.x,
        yAxis * this.VERTICAL_SPACE,
        'line'
      ); // x ,y , key
      this.lineGroup.add(line);
    }
  }

  moveLines() {
    this.lineGroup.children.iterate(
      function (child) {
        child.y += this.VERTICAL_SPACE;
      }.bind(this)
    );
  }
}
