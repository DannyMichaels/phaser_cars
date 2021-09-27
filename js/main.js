var game; // game is global object

window.onload = function () {
  var config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    parent: 'div-tag-name',
    scene: [SceneMain], // game screens for the game
  };

  game = new Phaser.Game(config);
};
