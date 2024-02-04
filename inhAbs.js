// // inhertance

// class Mammal {
//     noOfEyes= 2

//     eat(){
//         console.log("i am eating")
//     }
// }


// class Human extends Mammal{
//     noOfLegs = 2
//     jump(){
//         console.log("humans can jump")
//     }
// }

// const mammal = new Mammal()
// console.log(mammal.noOfEyes)
// const human = new Human()
// human.eat()
// console.log(human.noOfLegs)
// human.jump()

// class birds extends Mammal{
//     hasFeathers = true
// }

// const dove = new birds()
// console.log(dove.hasFeathers)

// // using a constructor in a class
// class Fathers{
//     constructor(strong){
//         this.strong = strong
//     }
// }

// class son extends Fathers{
//     constructor(strong){
//         super(strong)
//     }
//     HasBeards = true
// }
// const Father1 = new Fathers(true)
// console.log(Father1.strong)

// const son1 = new son(false)
// console.log(son1.strong)

//Abstraction
//to stop a base class from being instantiated

class Bugs{
    constructor(){
        if(this.constructor === Bugs){
            throw new error("Bugs");
        }
    }
}

//const BedBugs = new Bugs()

class BedBugs extends Bugs{
    Bite(){
        console.log("bed bugs dont bite")
    }
}

const BedBugs1 = new BedBugs()
BedBugs1.Bite()
