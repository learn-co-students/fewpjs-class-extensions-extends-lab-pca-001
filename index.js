class Polygon {
  constructor(sides) {
    this.sides = sides;
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
    let [side1, side2, side3] = this.sides
    return side1 < (side2 + side3) && side2 < (side1 + side3) && side3 < (side1 + side2)
  }
}

class Square extends Polygon {
  get area() {
    return this.sides[0] ** 2
  }

  get isValid() {
    const [sideA, sideB, sideC, sideD] = this.sides
    return sideA === sideB && sideB === sideC && sideC === sideD
  }

}