const newYear = "1 Jan 2022";
const daysE1    = document.getElementById('days');
const hoursE1   = document.getElementById('hours');
const minutesE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('secs');


function countdown() {
    const newYeardate = new Date(newYear);
    const currentDate = new Date();

    const totalsecond = (newYeardate - currentDate)/1000 ; 

    const days    = Math.floor(totalsecond/3600/24);
    const hours   = Math.floor(totalsecond/3600)%24;
    const minutes = Math.floor(totalsecond/60)%60;
    const seconds = Math.floor(totalsecond)%60;

    daysE1.innerHTML = formatTime(days);      
    hoursE1.innerHTML = formatTime(hours);    
    minutesE1.innerHTML = formatTime(minutes);
    secondsE1.innerHTML = formatTime(seconds);
}
countdown();

setInterval(countdown , 1000);

function formatTime(time)
{
    return time < 10 ? '0'+time : time ;
}