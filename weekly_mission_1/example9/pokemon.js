class Pokemon{

    constructor (name) {
        this.name = name
    }

    sayHello(){
        console.log(`My pokemon ${this.name} te saluda!!!`)
    }

    sayMessage(msg){
      
        console.log(`My pokemon ${this.name} te dice: ${msg}`)
    }
}
module.exports = Pokemon