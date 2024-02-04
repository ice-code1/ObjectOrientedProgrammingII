//uni of learnable
class KingdomAnimalia{
    constructor(name,hab){
        if(this.constructor === KingdomAnimalia){
            throw new Error("KingdomAnimalia")
        }
        this.name = name
        this.hab = hab
    this.spine = true
    return this.spine
    }

   
    
}

class Vertebrates extends KingdomAnimalia{
    constructor(spine,hab){
        super(spine)
        this.spine = true
        this.hab = hab
    }
    #habitant(){
    
        if (this.hab === 'land'){
        return "terrestial"
        }
        else if(this.hab === 'water'){
        return "aquatic"
    }
        else{
            return "aboreal"
        }
    
    }

    accessHabitant(){
        this.#habitant()
    }

     movement(){
       console.log("vertebrates are fast ")
    }

    spinalCord(){
        spine = true
        console.log("it posses spinalcord")

    }

}

class Invertebrates extends KingdomAnimalia{
    constructor(spine,habitant){
        super(spine)
        this.spine = false
        this.habitant = habitant
    }
    movement(){
        console.log("invetebrates are slow")
    }
      

}
class Warmbloded extends Vertebrates{
    reactionTime = "Fast"
    bodyTemperature = "constant"
    spinalCord(){
        spine = true
        return "it is a warm bloded animal"
    }
   

}
class Coldbloded extends Vertebrates{
    spinalCord(spine){
        if(spine==true){
            return Vertebrates.spinalCord()
        }
        else{
            return "it does not posses backbone"
        }
        return "it is a cold bloded animal"
    }


}

const lion = new Warmbloded("lion")
const vet = new Vertebrates(true,"land")
console.log(`${lion.name} lives on ${vet.accessHabitant()}, it has a ${lion.reactionTime}, and a ${lion.bodyTemperature} body temperature `)
