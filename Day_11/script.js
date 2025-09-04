function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

console.log("Hello");
sleep(10000).then(() => {
  console.log("World!");
});
document.getElementById("box").style.backgroundColor = "blue";
// function sleep(ms) {
//   const start = Date.now();
//   while (Date.now() - start < ms) {
//     // Busy-wait (blocks everything)
//   }
// }
// console.log("Hello");
// sleep(20000); // blocks for 1 second

//render document


// console.log("Hello World");
// console.log(prompt("HEliioo"));
// alert("Good Morning");
// prompt("HEliioo")

// confirm("Hello")

// if(confirm("age > 18")){
//     console.log("more than 18 years");
// }
// else{
//       console.log("more less 18 years");
// }

// if(false){
//     alert("fnkfngkf");
// }
// else{
//     console.log("dfhdhfhdf");
// }

// var,let,const
// let,const - ES-6

// var a = 20
// console.log(a);

// let b = 40
// console.log(b);

// const c = 50
// console.log(c);

// Scope of var --- global
// Scole of let --- local

// var firstname = "Vishesh";
// var lastname = "Jain";
// console.log(`My name is ${firstname} ${lastname}`);

// let value;
// console.log(value);
// console.log(typeof value);
// console.log(typeof typeof value);

// let new_value = null;
// console.log(new_value);
// console.log(typeof new_value);
// console.log(typeof typeof new_value);

// let new_value = Symbol("Vishesh");
// let newVar2 = Symbol("Jain");
// console.log(new_value);
// console.log(typeof newVar2);
// console.log(newVar2 == new_value)

let arr = [10, 20, "Vishesh", "Jain"];
console.log(arr[1]);

// Object - Collections of key value pairs
