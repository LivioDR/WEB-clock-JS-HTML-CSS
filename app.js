const setTime = () => {
    const hourData = new Date();
    
    // getting the HTML elements
    let years = document.getElementById("years");
    let month = document.getElementById("month");
    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let mintues = document.getElementById("mintues");
    let second = document.getElementById("sceonds");
    let timeZone = document.getElementsByTagName("h2");
    
    // setting the time info into the HTML elements
    timeZone[0].innerHTML = `Current Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`
    years.innerHTML = "Today is year " + hourData.getFullYear();
    month.innerHTML = hourData.getMonth() + 1;
    days.innerHTML = hourData.getDate();
    hours.innerHTML = hourData.getHours();
    mintues.innerHTML = hourData.getMinutes();
    second.innerHTML = hourData.getSeconds();
    
    // Changing the info after one second
    setTimeout(function(){
        setTime()
     }, 1000);
}
setTime()