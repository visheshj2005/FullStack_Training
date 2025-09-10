// console.log(window);
// console.log(window.document);
// console.log(document);
// let myDiv = document.getElementById("container");
// console.log(myDiv.id);
// myDiv.id = "vishesh";
// myDiv.className = "jain"
// console.log(myDiv.classList)
// myDiv.classList.add("header");
// myDiv.classList.remove("header");
// myDiv.classList.toggle("header");
// myDiv.classList.toggle("header");

// let input = document.getElementById("container");
// console.log(input.getAttribute("id"));
// console.log(input.getAttribute("class"));
// input.setAttribute("class","myname");
// input.setAttribute("style","width:100px;heigth:200px;background-color:blue;");

//innerHTML, innerText, textContent

// let para = document.getElementById("para");
// para.innerHTML = "<h1>helllloooooo</h1>"

//querySelector
//querySelectorAll

// let myDiv = document.querySelectorAll("#item");
// let myDiv1 = document.querySelectorAll(".container");
// let myDiv2 = document.querySelectorAll("div");
// console.log(myDiv);
// console.log(myDiv1);
// console.log(myDiv2);

let newEle = document.createElement("h1");
newEle.innerHTML = "My name is Vishesh Jain";
newEle.style.background = "skyblue";
document.body.appendChild(newEle);