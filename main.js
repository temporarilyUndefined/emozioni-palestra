let currentWeek = 0;
const firstDay = new Date("2022-10-3").getTime()
const weekms = 604800000

function previousweek(){
    if(currentWeek){
        currentWeek-=1;
        changeWeek();
    }
}

function nextweek(){
    currentWeek +=1
    changeWeek();
}

function changeWeek(){
    let startDay = firstDay + weekms * currentWeek;
    for (let i = 0; i < 7; i++) {
        
        
    }
}


