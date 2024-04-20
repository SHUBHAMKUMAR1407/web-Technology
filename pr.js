// let elementById = document.getElementById("myId");
// console.log(elementById.textContent);

// let elementByClass = document.getElementsByClassName("myClass");
// console.log(elementByClass[0].textContent);

// let elementByTag = document.getElementsByTagName("div");
// for(let i = 0; i<elementByTag.length; i++){
//     elementByTag[i].textContent = "Modified content";
// }


// let elementByQuery = document.querySelector(".myClass");
// elementByQuery.classList.add("newClass");

// elementByQuery.textContent = "this content is now styled with new class!";

// let pragraphElement = document.getElementById("myPragraph");
// pragraphElement.innerHTML = "<b> this is the now content, now in bold! </b>";

// let para = document.querySelector(".originalClass");
// console.log(para.textContent);

// para.setAttribute("class", "newClass");

// let paraNew = document.querySelector(".newClass");
// console.log(paraNew.textContent);

// // creating the new element...>>>

// let newDiv = document.createElement("div");
// newDiv.textContent = " I am a new div!";
// document.body.appendChild(newDiv);

// let butt = document.getElementById("myButton");
// butt.addEventListener("click",function(){
//     alert("button clicked!");

// });

// let p = document.getElementById("firstPragraph");
// let parent = p.parentNode;
// console.log(parent.tagName);

// let firstChild = parent.firstElementChild;
// console.log(firstChild.textContent);

// let nextSibling = p.nextElementSibling;
// console.log(nextSibling.textContent);

// let PragraphToRemove = document.getElementById("PragraphToRemove");

//   let parentNode = PragraphToRemove.parentNode;
//   parentNode.removeChild(PragraphToRemove);

// let toggleButton = document.getElementById("toggleButton");
// let content = document.getElementById("content");

// toggleButton.addEventListener("click", function(){
//     content.classList.toggle("hidden");
// });

// function handleClick(){
//     alert("button Clicked!");
// }

// let button = document.getElementById("myButton");
// button.addEventListener("click", function(){
//     alert("button clicked");
// });

// document.addEventListener("keydown", function(event){
//     console.log("key pressed :", event.key);
// });

// let myDiv = document.getElementById("myDiv");
// myDiv.addEventListener("mouseover", function(){
//     myDiv.style.backgroundColor = "lightblue";
//     console.log("mouse over!");
// });

// myDiv.addEventListener("mouseout", function(){
//     myDiv.style.backgroundColor = "pink";
//     console.log("mouse out");
// });

// document.addEventListener("keydown", function(event){
//  document.getElementById("keyMessage").textContent = "key pressed:" + event.key;

// });
// document.addEventListener("keyup", function(event){
//     document.getElementById("keyMessage").textContent = "key released!";

// });

// let myForm = document.getElementById("myForm");

// myForm.addEventListener("submit", function(event){
//     event.preventDefault();
//     let name = document.getElementById("name").value;
//     alert("your name is : " + name);
// });

// let list = document.getElementById("myList");

// list.addEventListener("click" , function(event){
//     if (event.target.tagName === "li" ){
//         alert("Item Clicked:" + event.textContent);
//     }
// });

// let button = document.getElementById("myButton");
// function handleClick(){
//     alert("Button Clicked!");

//  button.removeEventListener("click", handleClick);
// }
// button.addEventListener("click", handleClick);

// changeThisPageFunc = function(){

//     // document.body.style.backgroundColor = "#734c78";
//     prompt("body has class = " + document.body.className);
//     // alert("body has class = " + document.body.className);
//      document.body.className = "myClass";
//     // alert("body has class =" +document.body.className);
//     document.body.innerHTML ="<h1> I am a little colorful today. </h1>";
// }
    // changeThisPageFunc = function(){
    //     var myMain;
    //     document.body.style.backgroundColor = "#8f2c01";
    //     myMain = document.querySelector('main');
    //     myMain.innerHTML = "<h3> where have all the flowers gone? </h3>";
    //     myMain.style.height = "50px";
    //     myMain.style.width = "50%";
    //     myMain.style.backgroundColor= "#65419a";
    //     myMain.style.color = "white";
    // }

    // ChangeColor = function(){
    //     red = document.querySelector("#redi").value;
    //     green = document.querySelector("#greeni").value;
    //     blue = document.querySelector("#bluei").value;
    //     colorStr = "rgb("+red+","+green+", "+blue+")";

    //     document.body.style.backgroundColor = colorStr;

    // }
    // showValues = function(){
    //     document.querySelector('#redv').innerHTML = document("#redi").value;
    //     document.querySelector('#greenv').innerHTML = document("#greeni").value;
    //     document.querySelector('#bluev').innerHTML = document("#bluei").value;

    // }

    // window.onload = function(){ ChangeColor(); showValues();}

    // changeColor = function(){
    //     var red = Math.floor(Math.random() * 256);
    //     var green = Math.floor(Math.random() * 256);
    //     var blue = Math.floor(Math.random() * 256);
    //     var colorStr = "rgb(" + red + "," + green + "," + blue + ")";
    //     document.body.style.backgroundColor = colorStr;
    // }
    
    // var intervalId; // Define a variable to hold the interval ID
    
    // stop = function(){
    //     clearInterval(intervalId); // Use clearInterval to stop the interval
    // }
    
    // const startColorChange = () => {
    //     intervalId = window.setInterval(changeColor, 1000); // Assign the interval ID when starting
    // }
    
    // window.onload = startColorChange;
// time table
//     saveTime = function(){ 
//     t = document.querySelector("#timetable")
//     trow = document.createElement("tr")
//     td = document.createElement("td")
//     contents = document.createTextNode(Date())
//     td.appendChild(contents)
//     trow.appendChild(td)
//     t.appendChild(trow)
// }

hello = function(me){
    alert("hello i am " + me.innerHtml);
}