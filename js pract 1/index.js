const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let d = new Date();
let month = months[d.getMonth()];
let day = days[d.getDay()];

document.getElementById('name').innerHTML ="Kozhamkulov Aidar";

document.getElementById('date').innerHTML =  "Year: " + d.getFullYear() + "<br>Today is: " + day + "<br>Date: " +d.getDate() + "<br>Month: " + month + "<br>Current time is: " + d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();

var date2 = new Date();
var date3 = new Date("06/01/2024");
var timeDiff = Math.abs(date2.getTime() - date3.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

document.getElementById('calc').innerHTML = diffDays + " days left until the freedom!"


function mult(){
  var num1 = Number(document.getElementById("num1").value);
         var num2 = Number(document.getElementById("num2").value);
         var result = num1 * num2;
  document.getElementById('res').innerHTML = "Result is: <br>" + result;
}
function dev(){
  var num1 = Number(document.getElementById("num1").value);
         var num2 = Number(document.getElementById("num2").value);
         var result = num1 / num2;
  document.getElementById('res').innerHTML = "Result is: <br>" + result;
}
