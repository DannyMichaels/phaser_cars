class Collision {
  // checkCollide: check the positions of the two objects against each other
  static checkCollide(obj1, obj2) {
    /*  distanceX: x axis distance between the two, get rid of negative value if there is one with Math.abs
   reason for math.abs: (if something is 10 pixels away or -10 pixels away, it still counts as 10 pixels away) */
    let distanceX = Math.abs(obj1.x - obj2.x);
    let distanceY = Math.abs(obj1.y - obj2.y);

    let xCenterOfObj1 = obj1.width / 2;
    let yCenterOfObj1 = obj1.height / 2;

    // check if it's center of object
    if (distanceX < xCenterOfObj1) {
      if (distanceY < yCenterOfObj1) {
        return true;
      }
    }
    return false;
  }
}
