class Polygon {
  constructor(arrayOfIntegers) {
    this.arrayOfIntegers = arrayOfIntegers
  }

  get countSides() {
    return this.arrayOfIntegers.length
  }

  get perimeter() {
    let perimeter = 0
    this.arrayOfIntegers.forEach(side => {
      perimeter = perimeter + side
    })
    return perimeter
  }
}

class Triangle extends Polygon {
  get isValid() {
    let side = this.arrayOfIntegers
    if ( side[0] + side[1] > side[2] && side[0] + side[2] > side[1] && side[2] + side[1] > side[0] )
      return true
    else
    return false
  }
}

class Square extends Polygon {
  get isValid() {
    let side = this.arrayOfIntegers
    if ( side[0] === side[1] && side[1] === side[2] && side[2] === side[3] )
      return true
    else
      return false
  }

  get area() {
    return this.arrayOfIntegers[0] * this.arrayOfIntegers[0]
  }
}