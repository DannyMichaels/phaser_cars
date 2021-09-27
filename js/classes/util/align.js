class Align {
  static scaleToGameWidth(obj, percentage) {
    obj.displayWidth = game.config.width * percentage;
    obj.scaleY = obj.scaleX;
  }

  static center(obj) {
    obj.x = game.config.width / 2;
    obj.y = game.config.height / 2;
  }

  static centerHorizontally(obj) {
    obj.x = game.config.width / 2;
  }

  static centerVertically(obj) {
    obj.y = game.config.height / 2;
  }
}
