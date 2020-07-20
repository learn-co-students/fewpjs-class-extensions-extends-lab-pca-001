// Your code here
class Polygon {
  constructor(arr){
    this._sides = arr;
  }

  get countSides() {
    return this._sides.length;
  }

  get perimeter() {
    return this._sides.reduce( (sum, curr) => sum + curr, 0);
  }
}

class Triangle extends Polygon {
  get isValid(){
    const [a,b,c] = this._sides;
    return !( (a + b <= c) || (a + c <= b) || (b + c <= a) )
  }
}

class Square extends Polygon {
  get area(){
    return Math.pow(this._sides[0], 2);
  }

  get isValid(){
    const [a,b,c,d] = this._sides;
    return a === b && b === c && c === d;
  }
}