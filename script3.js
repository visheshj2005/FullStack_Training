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