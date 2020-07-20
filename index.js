class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }
  get countSides() {
    return this.sides.length
  }
  get perimeter() {
    let sum = 0
    for (const side of this.sides) {
      sum += side
    }
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.count === 3) {
      if(this.sides[0]+this.sides[1]>this.sides[2]&&this.sides[0]+this.sides[2]>this.sides[1]&& this.sides[1]+this.sides[2]>this.sides[0]) {
        return true
      }
    }
    return false
  }
}

class Square extends Polygon {
  get area() {
    return this.sides[0] * this.sides[1]
  }

  get isValid() {
    if (this.count === 4) {
      let side1 = this.sides[0]
      let side2 = this.sides[1]
      let side3 = this.sides[2]
      let side4 = this.sides[3]
      if (side1===side2 && side3 === side4 && side1=== side3) {
        return true
      }
    }
    return false
  }
}