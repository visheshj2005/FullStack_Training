// // A function that takes input a array and removes duplicates

// const rem_dup = (arr)=>{
//     let k = 0;
//     let ans = []
//     let flag = false;
//     for(let i=0;i<arr.length;i++){
//         flag = false;
//         for(let j=0;j<i;j++){
//             if(arr[i]===arr[j]){
//                 flag = true;
//                 break;
//             }
//         }
//         if(flag){
//             continue;
//         }
//         else{
//             ans[k++] = arr[i];
//         }
//     }
//     return ans;
// }
// let arr = [1,1,1,0,2,3,4,5,6,6,0,0,10,111]
// console.log(rem_dup(arr));

// Flatten a nested array recursively

// const helper = (arr) => {
//   let ans = [];
//   let temp = [];
//   let k = 0;
//   if (arr.length == undefined) {
//     ans[k] = arr;
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr.length == undefined) {
//         ans[k] = arr;
//       } else {
//         temp = helper(arr[i]);
//         for (let j = 0; j < temp.length; j++) {
//           ans[k++] = temp[j];
//         }
//       }
//     }
//   }
//   return ans;
// };
// const flatten = (arr) => {
//   let ans = [];
//   let temp = [];
//   let k = 0;
//   for (let i = 0; i < arr.length; i++) {
//     temp = helper(arr[i]);
//     for (let j = 0; j < temp.length; j++) {
//       ans[k++] = temp[j];
//     }
//   }
//   return ans;
// };
// let arr = [1, 2, 3, [1, 2, 0,[1,2,50,30131,250,[120,30,20,[15,50,10],45]], 4, 5, [1, 2, 3, 8]], 10, 20, 30];
// console.log(flatten(arr));

//Reverse a string without built in method

// let reverse = (str)=>{
//     let temp = "";
//     let k = 0;
//     for(let i=str.length-1;i>=0;i--){
//         temp += str[i];
//     }
//     return temp;
// }
// let str = "Vishesh Jain";
// console.log(reverse(str));

// Intersection of two arrays

// const inter = (arr1,arr2)=>{
//     let ans = [];
//     let flag = false;
//     let k = 0;
//     for(let i=0;i<arr1.length;i++){
//         flag = false;
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]==arr2[j]){
//                 flag = true;
//                 break;
//             }
//         }
//         if(flag){
//             ans[k++] = arr1[i];
//         }
//     }
//     return ans;
// }
// let arr1 = [10,20];
// let arr2 = [30,50,40];
// console.log(inter(arr1,arr2));

// Merge two sorted arrays
// const merge = (arr1,arr2)=>{
//     let i = 0;
//     let j = 0;
//     let k = 0;
//     let ans = [];
//     while(i!=arr1.length&&j!=arr2.length){
//         if(arr1[i]<arr2[j]){
//             ans[k++] = arr1[i];
//             i++;
//         }
//         else{
//             ans[k++] = arr2[j];
//             j++;
//         }
//     }
//     while(i!=arr1.length){
//         ans[k++] = arr1[i];
//             i++;
//     }
//     while(j!=arr2.length){
//         ans[k++] = arr2[j];
//             j++;
//     }
//     return ans;
// }
// let arr1 = [1,2,4,10,20,30,40]
// let arr2 = [0,11,12,17,19,32,42,45]
// console.log(merge(arr1,arr2))

// find the union of two arrays

// const union = (arr1,arr2)=>{
//     let ans = [];
//     let k = arr1.length;
//     let temp = arr1;
//     let flag = false;
//     for(let i=0;i<arr2.length;i++){
//         flag = false;
//         for(let j = 0;j<temp.length;j++){
//             if(temp[j]==arr2[i]){
//                 flag = true;
//                 break;
//             }
//         }
//         if(flag){
//             continue;
//         }
//         else{
//             arr1[k++] = arr2[i];
//         }
//     }
//     return arr1
// }
// let arr1 = [10,20,30,40,50]
// let arr2 = [10,20,80,90,35,45]
// console.log(union(arr1,arr2));

// check if an array is subset of another

// const check = (arr1,arr2)=>{
//     flag = false;
//     for(let i=0;i<arr1.length;i++){
//         flag = false;
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]==arr2[j]){
//                 flag = true;
//                 break;
//             }
//         }
//         if(!flag){
//             return false;
//         }
//     }
//     return true;
// }
// let arr1 = [2,4,6,8,9]
// let arr2 = [2,4,6,8]
// if(check(arr1,arr2)){
//     console.log("Yes, arr1 is subset of arr2");
// }
// else{
//     console.log("No, arr1 is not a subset of arr2");
// }

// Check if two strings are Anagram

// const check = (str1,str2)=>{
//     if(str1.length!=str2.length){
//         return false;
//     }
//     let map1 = [];
//     let map2 = [];
//     let flag = false;
//     let k = 0;
//     for(let i=0;i<str1.length;i++){
//         flag = false;
//         for(let j=0;j<map1.length;j++){
//             if(str1[i]==map1[j][0]){
//                 flag = true;
//                 k = j;
//                 break;
//             }
//         }
//         if(flag){
//             map1[k] = [str1[i],map1[k][1]+1];
//         }
//         else{
//             map1[map1.length] = [str1[i],1];
//         }
//     }
//     for(let i=0;i<str2.length;i++){
//         flag = false;
//         for(let j=0;j<map2.length;j++){
//             if(str2[i]==map2[j][0]){
//                 flag = true;
//                 k = j;
//                 break;
//             }
//         }
//         if(flag){
//             map2[k] = [str2[i],map2[k][1]+1];
//         }
//         else{
//             map2[map2.length] = [str2[i],1];
//         }
//     }
//     if(map1.length==map2.length){
//         flag = false;
//         for(let i=0;i<map1.length;i++){
//             flag = false;
//             for(let j=0;j<map2.length;j++){
//                 if(map1[i][0]==map2[j][0]){
//                     flag = true;
//                     k = j;
//                     break;
//                 }
//             }
//             if(flag){
//                 if(map1[i][1]!=map2[k][1]){
//                     return false;
//                 }
//             }
//             else{
//                 return false;
//             }
//         }
//         for(let i=0;i<map2.length;i++){
//             flag = false;
//             for(let j=0;j<map1.length;j++){
//                 if(map2[i][0]==map1[j][0]){
//                     flag = true;
//                     k = j;
//                     break;
//                 }
//             }
//             if(flag){
//                 if(map2[i][1]!=map1[k][1]){
//                     return false;
//                 }
//             }
//             else{
//                 return false;
//             }
//         }
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// let str1 = "Priyanshu Luharia"
// let str2 = "airaLuhuhsnaPriy "
// if(check(str1,str2)){
//     console.log("yes, str1 and str2 are anagram");
// }
// else{
//     console.log("No, str1 and str2 are not anagram");
// }

// find second largest element in that array

// const find = (arr)=>{
//     let max = 0;
//     let second = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//         else if(arr[i]<max&&arr[i]>second){
//             second = arr[i];
//         }
//     }
//     return second;
// }
// let arr = [10,5,8,20,15];
// console.log(find(arr));

// Count number of vowels

// const count_vowels = (str)=>{
//     let c = 0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
//             c++;
//         }
//     }
//     return c;
// }
// let str = "hello world";
// console.log(count_vowels(str));

// check if the number if power of 2
// const check = (num)=>{
//     let temp = 1;
//     while(temp<=num){
//         if(temp==num){
//             return true;
//         }
//         temp = temp << 1;
//     }
//     return false;
// }
// let num = 1024;
// console.log(check(num));

// find longest common prefix

// const long = (arr)=>{
//     let temp = "";
//     let flag = true;
//     let min = arr[0].length;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i].length<min){
//             min = arr[i].length;
//         }
//     }
//     // console.log(min)
//     for(let i=0;i<min;i++){
//         flag = true;
//         for(let j=0;j<arr.length-1;j++){
//             if(arr[j][i]!=arr[j+1][i]){
//                 flag = false;
//                 break;
//             }
//         }
//         if(flag){
//             temp += arr[0][i];
//         }
//         else{
//             return temp;
//         }
//     }
//     return temp;
// }
// let arr = ["flower", "flowe", "floweght"];
// console.log(long(arr));

// Calculate the factorial

// const fact = (num)=>{
//     if(num==0){
//         return 1;
//     }
//     return num*fact(num-1);
// }
// let num = 6;
// console.log(fact(num));

// print fibonnaci sequence
// const fibbo = (n)=>{
//     let sum = 0;
//     let p1 = 0;
//     let p2 = 1;
//     if(n==1){
//         console.log("0");
//     }
//     else if(n==2){
//         console.log("0");
//         console.log("1");
//     }
//     else{
//         console.log("0");
//         console.log("1");
//         for(let i=0;i<n-2;i++){
//             sum = p1+p2;
//             console.log(sum+" ");
//             p1 = p2;
//             p2 = sum;
//         }
//     }
// }
// fibbo(7)

//finding all permutations of the given string
// let ans = [];
// let p = 0;
// const permutations = (str, helper, t_str, curr, len) => {
//   let temp;
//   let temp_str = "";
//   let flag = false;
//   if (curr == len - 1) {
//     for (let i = 0; i < helper.length; i++) {
//       if (helper[i] == 1) {
//         t_str += str[i];
//         for (let q = 0; q < ans.length; q++) {
//           if (ans[q] == t_str) {
//             flag = true;
//             break;
//           }
//         }
//         if (!flag) {
//           ans[p++] = t_str;
//         }
//       }
//     }
//   } else {
//     for (let i = 0; i < helper.length; i++) {
//       if (helper[i] == 1) {
//         temp_str = t_str + str[i];
//         temp = [...helper];
//         temp[i] = 0;
//         // console.log(temp);
//         permutations(str, temp, temp_str, curr + 1, len);
//       }
//     }
//   }
//   return;
// };
// let str = "aaac";
// let k = 0;
// let helper = [];
// for (let i = 0; i < str.length; i++) {
//   helper[k++] = 1;
// }
// console.log(helper)
// permutations(str, helper, "", 0, str.length);
// console.log(ans);

//Flatten the object
// let ans = [];
// let p = 0;
// const flatten = (obj, str) => {
//   for (let key in obj) {
//     if (typeof obj[key] == "object") {
//       flatten(obj[key], str + "." + key);
//     } else {
//       ans[p++] = str + "." + key + ":" + obj[key];
//     }
//   }
// };
// let obj = {
//   a: {
//     b: {
//       c: 1,
//       e: {
//         f: {
//           k: 52,
//         },
//         g: 10,
//       },
//     },
//   },
//   d: 2,
// };
// // console.log(typeof obj.d)
// flatten(obj, "");
// console.log(ans);

