//constructors and classes
//this keyword
// console.log(this); //this gives a empty object
// let obj = {
//     firstName : "Vishesh",
//     lastName : "Jain",
//     greet : function(){
//         console.log("Hello good morning",this.firstName,this.lastName);
//     }
// }
// obj.greet();

// Constructors

// Classes
class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet(){
        console.log(`Hello ${this.firstName}, Good morning`);
    }
}

const p1 = new Person("Vishesh","Jain");

console.log(p1);
p1.greet();