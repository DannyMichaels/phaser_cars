/*
  one of the challenges is that with mobile devices is that we don't know the screen size before we start the game.
  and it makes it difficult to lay-out assets without knowing the screen size.

  this way allows us to lay things out in a grid with an x and y.
*/

class AlignGrid {
  constructor(config) {
    this.config = config;

    if (!config.scene) {
      console.log('missing scene');
      return;
    }

    if (!config.rows) {
      config.rows = 5;
    }

    if (!config.cols) {
      config.cols = 5;
    }

    if (!config.height) {
      config.height = game.config.height;
    }

    if (!config.width) {
      config.width = game.config.width;
    }

    this.scene = config.scene;
    this.cellWidth = config.width / config.cols;
    this.cellHeight = config.height / config.rows;
  }

  show() {
    this.graphics = this.scene.add.graphics();

    this.graphics.lineStyle(2, 0xff0000); // thickness, color

    // divide it into x equal columns
    for (let i = 0; i < this.config.width; i += this.cellWidth) {
      this.graphics.moveTo(i, 0); // x , y
      this.graphics.lineTo(i, this.config.height);
    }

    // divide into x equal rows;
    for (let i = 0; i < this.config.height; i += this.cellHeight) {
      this.graphics.moveTo(0, i); // x , y
      this.graphics.lineTo(this.config.width, i);
    }

    // will get us a x by x grid

    this.graphics.strokePath();
  }

  placeAt(xx, yy, obj) {
    // calculate position based upon the cellWidth and cellHeight
    const halfOfCellWidth = this.cellWidth / 2;
    const halfOfCellHeight = this.cellHeight / 2;

    let x2 = this.cellWidth * xx + halfOfCellWidth;
    let y2 = this.cellHeight * yy + halfOfCellHeight;

    obj.x = x2;
    obj.y = y2;
  }

  placeAtIndex(index, obj) {
    let yy = Math.floor(index / this.config.cols);

    //  get the x position by subtracting the row times the number of columns
    let xx = index - yy * this.config.cols;

    this.placeAt(xx, yy, obj);
  }

  // shows the numbers in each cell for placeAtIndex value.
  // this is for debugging / development, you don't want the player to see this.
  showNumbers() {
    let count = 0;
    this.show();

    for (let row = 0; row < this.config.rows; row++) {
       // actually cell, we're inside the cells of each row. not column
      for (let column = 0; column < this.config.cols; column++) {
        let numText = this.scene.add.text(0, 0, count, { color: '#ff0000' }); // x,y, text, css
        numText.setOrigin(0.5, 0.5); // place at center of cell
        this.placeAtIndex(count, numText);
        count++;
      }
    }
  }
}
