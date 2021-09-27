//  a container is a collection of objects that you can treat as one object
class Road extends Phaser.GameObjects.Container {
  constructor(config) {
    super(config.scene);

    this.scene = config.scene;
    this.background = this.scene.add.image(0, 0, 'road');
    this.add(this.background);
    this.scene.add.existing(this); // add this to the scene

    this.background.displayWidth = game.config.width * 0.5; // 50% of size of screen
    this.background.scaleY = this.background.scaleX; // propotional height and width

    this.setSize(this.background.displayWidth, game.config.height); // x, y, half the width, full height of game
    console.log(this);
  }
}
