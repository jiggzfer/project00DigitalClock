function clock() {
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let Seconds = d.getSeconds();
    let session = 'pm';


    //test for variables of time elements above 

    //console.log(hour);
    //console.log(minutes);
    //console.log(Seconds);

    if (hours < 12){
        session ='am'
    };
// below makes 24 hour clock to 12 hour 
    if (hours > 12){
        hours -= 12
        session ='pm'
    };
   
//below allows me to prepend "0" to single digit numbers 
    if (hours < 10){hours = "0" + hours}
    console.log(hours);

    if (minutes < 10){minutes = "0" + minutes}
    console.log(minutes);

    if (Seconds < 10){Seconds = "0" + Seconds}
    console.log(Seconds);
   
/*below allows me to prepend "0" to single digit numbers 


 const padHour= (hours).toString().padStart(2, '0')
 console.log(padHour)

 const padMinute= (minutes).toString().padStart(2, '0')
 console.log(padMinute)

 const padSecond= (Seconds).toString().padStart(2, '0')
 console.log(padSecond)*/

    let currentTime = hours + ':' + minutes +':' + Seconds + session
    console.log(currentTime);  

    

    document.getElementById('time').innerText = currentTime;
}


setInterval(clock, 1000);
clock();