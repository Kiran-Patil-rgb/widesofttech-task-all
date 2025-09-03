class cars {
   name
    wheels
    doors
    canDrive
    canFly
    canSwim

// setInfo(name, wheels,doors,candrive,canswim,canfly){
//     this.n
//   name = name
//     this.doors = doors
//     this.wheels = wheels
//     this.candrive = candrive
//     this.canswim = canswim
//     this.canfly = canfly
// }
constructor(name, wheels, doors, canDrive, canSwim, canFly){
    this.name = name
        this.doors = doors
        this.wheels = wheels
        this.canDrive = canDrive
        this.canSwim = canSwim
        this.canFly = canFly
}
getInfo(){
    console.log("car name is " + this.name)
    console.log("car has " + this.doors + "doors")
    console.log("car  " + this.wheels + " wheels ")
    console.log(`car can ${this.candrive ? "can drive !" : "can't drive !"}`)

        console.log(`car can ${this.canfly ? "can fly !" : "can't fly !"}`)

        console.log(`car can ${this.canswim ? "can swim !" : "can't swim !"}`)
    }

drive(){
    console.log(this.name + " car is driving !")
}
stop(){
    console.log(this.name + " car is stoped !")
}
reverse(){
    console.log(this.name + " car is reversing !")
}
}

let swift = new cars("BMW" ,4,5,true,false,false)
let swift1 = new cars("BMW",4 ,5 ,true,false,false)


swift.getInfo()
swift1.getInfo()
console.log(swift.name)
console.log(swift.wheels)
console.log(swift.doors)
console.log(swift.canfly)
console.log(swift.canswim)

swift.drive()
swift.stop()
swift.reverse()


