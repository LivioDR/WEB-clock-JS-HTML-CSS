const hourData = new Date();
// let li=document.getElementsByTagName('li').;
let years = document.getElementById("years");
let month = document.getElementById("month");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let mintues = document.getElementById("mintues");
let second = document.getElementById("sceonds");
let timeZone = document.getElementsByTagName("h2");
// console.log(timeZone)
timeZone[0].innerHTML += Intl.DateTimeFormat().resolvedOptions().timeZone;
years.innerHTML = "Today is year " + hourData.getFullYear();
month.innerHTML = hourData.getMonth() + 1;
days.innerHTML = hourData.getDate();
hours.innerHTML = hourData.getHours();
mintues.innerHTML = hourData.getMinutes();
second.innerHTML = hourData.getSeconds();
// let hours = hourData.getHours();
setTimeout(function(){
    window.location.reload(1);
 }, 1000);
// console.log(days);

// years.innerHTML = hourData.getFullYear();
