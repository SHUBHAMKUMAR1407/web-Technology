// console.log(this);

// document.getElementById("myButton").addEventListener("click", function(){
//     console.log(this);
// })
// function myFunction (){
// console.log(this);
// }
// document.getElementById("callFunction").addEventListener("click", function(){
//     myFunction();
// });

// const myObject = {
//     myMethod:function(){
//         setTimeout(()=>{
//             console.log(this);

//             document.getElementById("output").textContent= "this points to:"+ this;
//         },1000);
//     }
// };
// document.getElementById("callMethod").addEventListener("clcik",function(){
//     myObject.myMethod();
// });
// clickon = function(message){

//   let message = this.innerText;
  
//    alert("the time is " + message );
  
// }

// function savetime() {
//     var t = document.querySelector("#timetable");
//     var trow = document.createElement("tr");
//     var td = document.createElement("td");
//     var contents = document.createTextNode(Date());
//     td.appendChild(contents);
//     td.addEventListener('click', clickon); // Attach click event listener
//     trow.appendChild(td);
//     t.appendChild(trow);
// }

// function clickon() {
//     var message = this.innerText;
//     alert("The time is " + message);
// }

// // Define savetime function
// function savetime() {
//     var t = document.querySelector("#timetable");
//     var trow = document.createElement("tr");
//     var td = document.createElement("td");
//     var contents = document.createTextNode(Date());
//     td.appendChild(contents);
//     td.addEventListener('click', clickon); // Attach click event listener
//     trow.appendChild(td);
//     t.appendChild(trow);
// }

// tb1 = document.querySelector("#mytable");
// for(i = 0; i<10; i++){
//     row = document.createElement("tr")
//     cell = document.createElement("td")
//     cell.innerText = i;
//     row.appendChild(cell);
//     tb1.appendChild(row);
// }

// let number = prompt("enter the number");
//  let computernumber = Math.floor(Math.random()*100);45
// if(number == computernumber){

//     document.body.innerHTML= "<p> you are correct</p>"
// }
// else{
//     if(number < computernumber){
//         document.body.innerHTML= "<p> you are low</p>"
//     }
//     else{
//         if(number> computernumber){
//             document.body.innerHTML= "<p> you are high</p>"
//         }
//     }
// }