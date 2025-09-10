// Date - 05-09-2025

// array methods
//push,pop,shift,unshift,map,filter,reduce,slice,splice,indexOf,lastIndexOf,concat,includes,find,findIndex,some,every,forEach,sort,reverse,flat,join

// let arr = [10,20,30,40,50,60,70,80];

// // arr.push(90);
// console.log(arr.push("Vishesh")); // return new length of the array after push
// console.log(arr);
// // // output - [ 10, 20, 30, 40, 50, 60, 70, 80, 'Vishesh' ]

// // arr.pop();
// console.log(arr.pop());  // return the popped element
// console.log(arr);

// arr.shift("Jain")
// console.log(arr)

// use shift and unshift

// using callbacks functions (also known as anonymous functions)

// function func2(a){
//     console.log(a);
//     a(100);
//     console.log("This is func2");
// }

// function callback1(p1){
//     console.log(p1);
//     console.log("This is func 1 and passing as a callback");
// }

// function callback2(p2){
//     console.log(p2)
//     console.log("Func 3 is called and passing as a callback");
// }

// func2(callback1); // func1 - callback , func2 - higher order function

// func2(callback2);

// calulator
// const add = (a,b)=>{
//     console.log(a+b)
// }
// const sub = (a,b)=>{
//     console.log(a-b)
// }
// const mul = (a,b)=>{
//     console.log(a*b)
// }
// const div = (a,b)=>{
//     console.log(a/b)
// }
// const calc = (callback,a,b)=>{
//     console.log(callback)
//     callback(a,b);
// }
// calc(add,6,3)
// calc(sub,6,3)
// calc(mul,6,3)
// calc(div,6,3)

// calc(function (a,b){
//     console.log(a%b)
// },6,3);

// calc((a,b)=>{
//     console.log(a%b)
// },6,3);

// Map does not change the original array and return the new array with the same length of the original array

// let arr = [10,20,30,40,50,60,70,80]

// let result = arr.map((item)=>{
//     console.log(item*item)
//     return item**2
// })
// console.log(result)

// let result = a

//filter

// let result = arr.filter((item)=>{
//     return item>30;
// })
// console.log(result)

// let arr = [10,20,30,40,50,60,70,80]
// let result = arr.reduce((acc,cur)=>{
//     return acc*cur
// })
// console.log(result)

// 08-09-2025

// let arr = [10,20,40,30,50]
// find,findIndex

// console.log(arr.find((item)=>{
//     return item>30;
// }))
// console.log(arr.findIndex((item)=>item>30)) // if there is only single return statement in the findIndex function then you can write like this also.
// console.log(arr.findIndex(item=>item>30)) // if there is only single parameter in the arrow function you can remove the brackets also.

// console.log(arr.some((item)=>item%2!=0))
// console.log(arr.every((item)=>item%2!=0))

//reverse
// let newarr = arr.reverse()
// console.log(newarr)
// let sortedarr = arr.sort();
// console.log(sortedarr)

// let str = "  Vishesh Jain  "
// console.log(str.includes("Vish"))
// console.log(str.includes("vish"))

//trim ,split, slice

//trim
// console.log(str.length)
// console.log(str)
// console.log(str.trim())

//split
// let str = "Vishesh"
// let str1 = "Jain"
// let result = str.split("s"); // Seperator
// console.log(result)

//concat
// console.log(str.concat(" ",str1))

//replace
// let str = "Vishesh Jein"
// console.log(str.replace("e","V")) //only first match will be replced
// console.log(str.replaceAll("e","V")) // all matches will be replced

//keys,values,entries,freeze,seal,hasOwn,assign

// let obj = {
//     firstName : "Vishesh",
//     lastName : "Jain"
// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))
// console.log(Object.freeze(obj)) // dont allow to change anything in the object
// // obj.gender = "Male";
// // console.log(obj);
// console.log(Object.seal(obj)) // can't change add new property but can modify the existing properties
// console.log(Object.hasOwn(obj,"gender")) // to check wheather the property exists in the object or not
// console.log(Object.assign(obj))

//Spread operators(...) or Rest operators(...)

// let data = [];
// let copy = data;
// copy.push({});
// console.log(data)
// console.log(copy)

// let copy = [...data];
// copy.push({});
// console.log(data);
// console.log(copy);

//Destructuring and Rest operators

// let obj = {
//     firstName : "Vishesh",
//     lastName : "Jain",
//     gender : "Male",
//     address : "Udaipur",
//     section : "FSD"
// }

// let {firstName:fName="Jain",gender,...rest} = obj;

// console.log(fName);
// console.log(gender);
// console.log(rest)

// in left side of = operator ... is used - rest operator
// in right side of = operator ... is used - spread operator

// let arr = [10,20,30,40,50]
// let [,,a,...rest] = arr;
// console.log(a)
// console.log(rest)

// 09-09-2025

//Math - sqrt, random, ceil, floor , round,pow,MIN,MAX
//Number - toFixed, parseInt, parseFloat, isNaN, isInteger
//Date - getFullYear, getMonth, getDay, getDate, getHours, getMinutes, getSeconds,getTime, Now(),toDateString, toTimeString


// Math methods
// let num = 1000
// console.log(Math.sqrt(num));
// console.log(Math.ceil(10.00001));
// console.log(Math.floor(10.00001));
// console.log(Math.round(10.50001))
// let pow = Math.pow(2,-1);
// console.log(pow);

// let min = Math.min(100,200,300);
// console.log(min);

// let max = Math.max(100,200,300);
// console.log(max);

// let randomNumber = Math.random();
// console.log(randomNumber)

// let otp = Math.floor(Math.random()*9000+1000); // think about range
// console.log(otp)


//Number methods 
// let num = 102.43535343
// console.log(num.toFixed(2));

// let str = "5px";
// console.log(typeof str);
// let newNum = Number(str);
// console.log(newNum)
// console.log(typeof newNum);

// console.log(Number.parseInt(str));
// console.log(typeof Number.parseInt(str));

// let str = "34.4332"
// console.log(Number(str));

// let str = "abc"
// let num = Number(str);
// console.log(num)


// to get sum of all the numbers in the given string
// let str = "1vishesh12jain0035fvfdb10djfbvjdf12";
// str = "temp" + str;
// let sum = 0;
// console.log(str.slice(4));
// console.log(str);
// let temp = "";
// for(let i=0;i<str.length;i++){
//     if((str[i]>='1'&&str[i]<='9')&&(str[i-1]<'1'||str[i-1]>'9')){
//         temp = str.slice(i);
//         console.log(Number.parseInt(temp));
//         sum += Number.parseInt(temp);
//     }
// }
// console.log(sum)


//Date Methods
// let date = new Date();
// console.log(date.getMilliseconds());
// console.log(date.getSeconds());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getMinutes());
// console.log(date.getTime());
// console.log(date.getMonth());
// console.log(date.toDateString());
// console.log(date.toTimeString());


// let newDate = Date.now(); //https://www.epoch101.com/
// let currDate = new Date(newDate);
// console.log(currDate);
// console.log(0.1+0.2)

// if((0.1+0.2)!=0.3){
//     console.log(true)
// }
// else{
//     console.log(false)
// }


//Type conversion(explicit) and type coercion(implicit)

// let firstVar = "40"
// let newNum = Number(firstVar)
// console.log(typeof newNum);

// let num = 40; // only 0 and empty string and null and undefined and false is false ,all others are true  
// let str = "false";
// console.log(String(num));
// console.log(Boolean(num));
// console.log(Boolean(str));


//type coercison

// console.log(1+"2"+3);
// console.log(typeof (1+"2"+3));
// in + number is converted to string in other operators string is converted to numbers
// console.log(5+"5")
// console.log(5-"5")
// console.log(5*"5")
// console.log(5/"5")
// console.log("5"-true)
// console.log("5"*true)
// console.log("5"/true)
// console.log("5"+true)
// console.log([]+[]);
// console.log([]+{});
// console.log({}+{});
// console.log({}+[]);


//scopes and hoisiting

//global scope, functional scope/local scope
//block scope - ES6

//var - global scope but in function it is local scope
//let, const - block scope

//hoisiting - it is a behavior of accessing var variables and normal functions before declaration.

//var and normal functions supports hoisiting and gives undefined before declaration

//10-09-2025

