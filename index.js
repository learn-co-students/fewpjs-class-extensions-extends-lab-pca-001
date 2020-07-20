// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce( (total, amount) => {
      return total + amount
    })
  }
}

class Triangle extends Polygon{
  get isValid() {
    const a = this.sides[0]
    const b = this.sides[1]
    const c = this.sides[2]

    return a + b > c && a + c > b && b + c > a
  }
}

class Square extends Polygon{
  get area() {
    return this.sides[0] ** 2
  }

  get isValid() {
    const a = this.sides[0]
    const b = this.sides[1]
    const c = this.sides[2]
    const d = this.sides[3]

    return a === b || b === c || c === d
  }
}
