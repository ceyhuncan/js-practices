/* ADVANCED OBJECTS */

/* REFERENCE TYPE */
//Reference types are non primitive types.
//Primitive types created by programming languave whereas reference types by developer
//console.log(([]===[]));
//This condition will always return 'false' since 
//JavaScript compares objects by reference, not value.

/* CONTEXT  - Where we are whitin the object*/ 

//console.log(this); //Gives windows object. References the object where we are now.
//this.alert('Askim');

function a(){
    console.log(this);
}//Gives this windows object

const obj1={
    a:function(){
        console.log(this);
    }
} //now this references the obj1 object


/* INSTANTIATION making multiple copy of object*/
// Every time create an obj from class it invoke constructor function.
//This constructor function creates object properties
//Class names start with capital leter.

class Player {
    constructor(playerName, type){
        
        this.playerName=playerName;
        this.type=type;
    }
    introduce(){
        console.log(`Hi my name is ${this.playerName} and i am a ${this.type}`);
    }
}

/* Anytime you extend from another class,
you need to also call constructor function using
super() keyword with the properties that
we want to pass to the constructor */

class Wizard extends Player{
constructor(playerName, type){
    super(playerName, type);
    console.log(this); // if you put before super it will give error.

}

play(){
    console.log(`${this.playerName} started playing`);
}
}

//Creating object. Any time you see a "new" keyword, it creates an object.
const wizard2 = new Wizard('Bebegim', 'mutlandirici')
const wizard1= new Wizard('Askim', 'Sef');

const player1 = new Player("player1", 'topcu');


/*PASS BY REFERENCE BY PASS BY VALUE*/
// Primitive types are immutable(cant be changed )
