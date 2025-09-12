// Async JS

// Promise

// function fetchData() {
//   let data = {
//     firstName: "Vishesh",
//     lastName: "Jain",
//     gender: "Male",
//   };
//   return data;
// }
// let result;
// setTimeout(() => {
//   result = fetchData();
// }, 2000);

// setTimeout(() => {
//   console.log(result);
// }, 2100);

// function fetchData() {
//   let data = {
//     firstName: "Vishesh",
//     lastName: "Jain",
//     gender: "Male"
//   };
//   return new Promise((resolve,reject)=>{
//      let randomNumber = Math.floor(Math.random()*100);
//      console.log(randomNumber);
//      setTimeout(()=>{
//         if(randomNumber%2==0){
//             resolve(data);
//         }
//         else{
//             reject("Error");
//         }
//      },2000)
//   });
// }
// fetchData()
// .then((data)=>{
//     console.log("successfully fetched data ",data);
// })
// .catch((err)=>{
//     console.log(err);
// })

const fetchData = () => {
  return fetch("https://fakestoreapi.com/users");
};
fetchData()
.then((res)=>{
    res.json()
    .then((data)=>{
        let tbody = document.getElementById("tbody");
        data.forEach((ele) => {
            // console.log(ele);
            let tr = document.createElement("tr");
            tr.innerHTML = `<td>${ele.id}</td><td>${ele.name.firstname}</td><td>${ele.name.lastname}</td><td>${ele.email}</td><td>${ele.username}</td>`
            tbody.appendChild(tr);
        });
    })
    .catch((err)=>{
        console.log(err);
    })
})
.catch((error)=>{
    console.log(error);
})

// use of async await

// const fetchdata = async ()=>{
//     const response = await fetch("https://fakestoreapi.com/products")
//     response.json()
//     .then((response)=>{
//         console.log(response);
//     })
// }
// fetchdata();

// use of .finally

// use of eventloop