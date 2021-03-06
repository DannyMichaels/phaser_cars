class Controller {
  constructor() {
    emitter.on(G.SET_SCORE, this.setScore);
    emitter.on(G.UP_POINTS, this.upPoints);
  }

  setScore(score) {
    model.score = score;
  }

  // increment
  upPoints(points) {
    // change points by value
    let score = model.score;
    score += points;
    model.score = score;
  }
}
