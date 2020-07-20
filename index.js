// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((total, side) => total + side, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    let [aSide, bSide, cSide] = this.sides
    return aSide < (bSide + cSide) && bSide < (aSide + cSide) && cSide < (aSide + bSide)
  }
}

class Square extends Polygon {
  get isValid() {
    let [aSide, bSide, cSide, dSide] = this.sides
    return aSide === bSide && bSide === cSide && cSide === dSide && aSide ===dSide
  }

  get area() {
    let [aSide, bSide, cSide, dSide] = this.sides
    return aSide * aSide
  }
}