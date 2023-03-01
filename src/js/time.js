function countSeconds(hour, min, sec) {
    return  hour * 3600 + + min * 60 + + sec;
}

function printSeconds(hour, min, sec){
    document.getElementById('display').innerHTML = countSeconds(hour, min, sec);
}
/*let sec = countSeconds(5, 48, 2);
sout.innerHTML += sec + '<br/>';*/

function countTime(sec) {
    let hour = Math.floor(sec/3600);
    let min = Math.floor((sec - hour*3600)/60);
    sec = sec - hour*3600 - min*60;
    //let time = new Date(0,0, hour, min, sec);
        //sout.innerHTML += '\"' + hour + ':' + min + ':' + sec + '\"' + '<br/>';
    let time = ((hour < 10) ? "0" : "") + hour;
    time += ((min < 10) ? ":0" : ":") + min;
    time += ((sec < 10) ? ":0" : ":") + sec;
    document.getElementById('display').innerHTML += time + '<br/>';
}

/*countTime(20882);*/

function  jetLag (hour1, min1, sec1, hour2, min2, sec2) {
    let seconds1 = countSeconds(hour1, min1, sec1);
    let seconds2 = countSeconds(hour2, min2, sec2);
    let result = Math.abs(seconds2 - seconds1);
    countTime(result);
}

/*
jetLag(4,50,0,2,40,0);*/
