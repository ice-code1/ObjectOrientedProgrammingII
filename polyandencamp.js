// class Shape{
//     area(){
//         throw new error("this cannot be implemented directly")
//     }
// }

// const shape = new Shape()

// shape.area()
//shape constructor

class Shapecons{
    constructor(){
        if(this.constructor == Shapecons){
            throw new error("this can be implemented directly")
        }
    }
    area(){
        throw new error("this cannot be implemented directly")
    }
}

// const shapecons = new Shapecons()
//calling  shapecons from another class
// method over riding
class Circle extends Shapecons{
    constructor(radius){
        super()
        this.radius = radius
    }

    area(){
        const area = Math.PI * (this.radius)**2
        return area
    }

}
const circle = new Circle(9)
console.log(circle.area())

class Square extends Shapecons{
    constructor(length){
        super()
        this.length = length
    }

    area(){
        const area = this.length * this.length
        return area
    }
}

const square = new Square(7)
console.log(square.area())


//encampsulation
class Customers {
    #create(){
        console.log("i am creating myself")
    }

    // we use another public method within the class
    accessCreate(){
        this.#create()
    }
}
 const john = new Customers()

 john.accessCreate()