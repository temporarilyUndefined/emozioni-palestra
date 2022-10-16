const firstDay = new Date("2022-10-3").getTime()
const weekms = 604800000
let currentWeek = Math.floor((Date.now() - firstDay)/weekms) - 1;

function previousweek(){
    if(currentWeek){
        currentWeek-=1;
        changeWeek(text[currentWeek] ? text[currentWeek] : {emozioni: [], descrizione: []});
    }
}

function nextweek(){
    currentWeek +=1;
    changeWeek(text[currentWeek] ? text[currentWeek] : {emozioni: [], descrizione: []});
}

function changeWeek(data){
    let startDay = new Date(firstDay + weekms * currentWeek);
    let endDay = new Date(startDay.getTime() + 518400000)
    document.getElementById("weekDate").innerText = `${startDay.getDate()}/${startDay.getMonth() + 1}/${startDay.getFullYear()}-${endDay.getDate()}/${endDay.getMonth() + 1}/${endDay.getFullYear()}`
    let emotionTab = document.getElementsByClassName("tabEm");
    let descTab = document.getElementsByClassName("tabDesc");
    let vuoto = ""
    for (let i = 0; i < 7; i++) {
        emotionTab[i].innerText = `${data.emozioni[i] ? data.emozioni[i] : vuoto}`;
        descTab[i].innerText = `${data.descrizione[i] ? data.descrizione[i] : vuoto}`;
    }
}

window.onload = function() {
    changeWeek(text[currentWeek] ? text[currentWeek] : {emozioni: [], descrizione: []});
}