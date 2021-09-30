class ScoreBox extends Phaser.GameObjects.Container {
  constructor(config) {
    super(config.scene);
    this.scene = config.scene;

    this.text1 = this.scene.add.text(0, 0, 'SCORE: 0');
    this.text1.setOrigin(0.5, 0.5); // set to center of this container
    this.add(this.text1); // add the text to the scorebox

    this.scene.add.existing(this); // pass this to the scene

    emitter.on(G.SCORE_UPDATED, this.scoreUpdated, this);
  }

  scoreUpdated() {
    this.text1.setText(`SCORE: ${model.score}`);
  }
}
