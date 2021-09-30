var game; // game is global object
var model;
var emitter;
var G;
var controller;

window.onload = function () {
  var config = {
    type: Phaser.AUTO,
    width: 480,
    height: 640,
    parent: 'div-tag-name',
    scene: [SceneMain], // game screens for the game
  };
  G = new Constants();
  model = new Model();
  game = new Phaser.Game(config);
};
