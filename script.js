// let x = 3;
// let y = 2;
// // console.log(x+y);
// // console.log(x-y);
// // console.log(x*y);
// // console.log(x/y);
// console.log(x%y);
// // console.log(x**y);

// let a = 10;
// x += y;
// console.log(x);
// x -= y;
// console.log(x);
// x *= y;
// console.log(x);
// x /= y;
// console.log(x);
// x %= y;
// console.log(x);
// x **= y;
// console.log(x);

// let x = 5;
// let y = "5";
// console.log(x==y); //== onyl comapares value
// console.log(x===y); //=== compares values as well as the data tyle

// let x = 5;
// let y = 5;
// console.log(x!=y);//!= comapares values only
// console.log(x!==y);//!== comapares values only and datatype as well
// console.log(x>=y);

// let x = true;
// let y = false;
// console.log(x&&y);
// console.log(x||y);
// console.log(!y);
// console.log(10&&20);


//Short Circuit Evaluation
//0,"",false,undefined,null  - False
// console.log(10&&""&&undefined);
// console.log(0||""||undefined||null||false||1);
// let num1 = 10;
// let num2 = 0;
// let num3 = 20;

// console.log(num1 && num3);
// console.log(num2 || num3);  
// console.log(num1 || num2); 
// console.log(num2&&num3);


// let str1 = "Hello";
// let str2 = "";
// let num1 = 42;

// console.log(str1 && num1); 
// console.log(str2 || num1); 
// console.log(str1 || str2); 
// console.log(num1 && str2);

// let isTrue = true;
// let isFalse = false;
// let num = 10;

// console.log(isTrue && num);
// console.log(isFalse || num); 
// console.log(isTrue && isFalse);   
// console.log(isFalse || isTrue);

// let num1 = 0;
// let num2 = 100;
// let str1 = "JS";
// let str2 = "";

// console.log((num1 || num2) && str1); 
// console.log((str2 || num1) || str1); 
// console.log((str1 && num2) || num1);
// console.log((num1 && str2) || str1);

// let bool1 = true;
// let bool2 = false;
// let num = 0;
// let str = "Code";

// console.log(bool1 && str && num);  
// console.log(bool1 || str || num);    
// console.log(bool2 || num || str);    
// console.log(bool2 && str && num);

// let a = 5;
// let b = 0;
// let c = "Hi";
// let d = "";

// console.log(a && b && c); 
// console.log(a || b || d); 
// console.log(b || d || c); 
// console.log(c && a && d);

// let x = 10;
// let y = 0;
// let z = -5;

// console.log(x && y && z); 
// console.log(x || y || z); 
// console.log(y || z || x); 
// console.log(z && x && y);

// or ka shortcircuit - true
// and ka shortcircuit - false

// let role = "ADMIN";

// role==="ADMIN"&&console.log("You are admin")

// console.log(5&11); 0101 & 1010 ---> 0000

// console.log(5|10);
// console.log(5^10);

// let x = 5;
// console.log(x>>>1);
// console.log(x>>1);
// console.log(x<<<1); // not working

// console.log(-5>>>1); //2147483645



//Conditional Statements

// if else, switch

// Switch case statement

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What is your name? ', (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close(); // Close the interface when done
// });

// let day = +prompt("Enter the day number - "); // + is used for type casting to integer by default it is string

// function

// function func1(a,b){
//     console.log(`The value of a is ${a} and the value of b is ${b}`);
// }
// func1(100,"Vishesh")

// const func1 = function(a,b){
//     console.log(`The value of a is ${a} and the value of b is ${b}`);
// }

// func1(100,"Vishesh")

// const func1 = (a,b)=>{
//     console.log(`The value of a is ${a} and the value of b is ${b}`);
// }

// // func1(100,"Vishesh")
// let name = "Visesh"
// setTimeout((name)=>{
//     console.log(`${name} Jain`);
// },1000)

// Loops

// for
// while
// do while


