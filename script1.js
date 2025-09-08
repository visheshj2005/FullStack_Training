// // let arr = [10,20,30,40,50,60,true,false,"vishesh","jain",[10,20,50,"vishesh","jain",[0,20,30,40,50,"Vishesh Jain"]]]
// // // for(let i=0;i<arr.length;i++){
// // //     console.log(arr[i]);
// // // }
// // // console.log(arr.length);
// // // console.log(arr[10].length);
// // console.log(arr[arr.length-1][arr[arr.length-1].length-1][arr[arr.length-1][arr[arr.length-1].length-1].length-1])

// // let arr = [10, 20, 30];
// // arr[5] = 50;
// // console.log(arr);

// let obj = {
//   firstName: "Vishesh",
//   lastName: "Jain",
//   gender: "Male",
//   age: 19
// };
// // console.log(obj.firstName)
// // console.log(obj.lastName)
// // obj.gender = "Male"
// // console.log(obj)

// // console.log(obj["lastName"]); // if quotes not used then it consider it as a variable and show error
// // obj.firstName = "Vijay"
// // console.log(obj["firstName"])
// // console.log(obj["gender"])
// // console.log(typeof obj.age)

// let p = prompt("Which information you want :-");
// console.log(obj[p]);
// console.log(obj.firstName); //it will take firstName as a member
// console.log(obj["firstName"]) // it will take firstName as a member
// // console.log(obj[firstName]); //it will take firstName as a variable because quotes is not used

// let arr = [10,20,30,40,50,60,70,80]

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// const squArr = (arr)=>{
//     let squArr = [];
//     for(let i=0;i<arr.length;i++){
//         squArr[i] = arr[i]**2;
//     }
//     return squArr;
// }

// let squareArr = squArr([10,20,30,40,50,60,70,80]);
// console.log(squareArr)

// for in loop (works for objects also), for of loop

// let arr = [1,2,3,4,6,7,8,9]
// for(let jain in arr){ // in jain index will come
//     console.log(arr[jain])
// }

// for(let vishesh of arr){ // in vishesh element will come
//     console.log(vishesh)
// }

// while and do while loop

// let obj = {
//     firstName : "Vishesh",
//     lastName : "Jain",
//     address : "Udaipur",
//     gender : "Male"
// }
// for(let i of Object.entries(obj)){
//     console.log(i)
// }

// for(let i of Object.keys(obj)){
//     console.log(obj[i])
// }

// for(let i of Object.values(obj)){
//     console.log(i)
// }
// for(let key in obj){
//     console.log(obj[key])
// }

