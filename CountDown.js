console.log('Script Loaded');
const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const giveAway = document.getElementById('giveaway');
const countTimer = document.querySelectorAll('.countTimer h1');
const countdowncontainer = document.querySelector('.countdown-container');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const presentDate = new Date(tempYear, tempMonth, (tempDay + 10), 11, 30, 0);

// console.log(presentDate);
// console.log(month[2]);
// month.forEach(function(item){
//     console.log(item);
// });

const year = presentDate.getFullYear();
const hour = presentDate.getHours();
const minutes = presentDate.getMinutes();
const date = presentDate.getDate();
const months = month[presentDate.getMonth()];
const day = days[presentDate.getDay()];
// console.log(day);

giveAway.textContent = `Giveaway Ends on ${day}, ${date} ${months} ${year} ${hour}:${minutes}AM`;

function getRemainingTime(){    
    const currentDay = new Date();
    const currentTime = currentDay.getTime();
    const futureTime = presentDate.getTime();
    const t = futureTime - currentTime;

    // 1s = 1000ms
    // 1min = 60s
    // 1hr = 60min
    // 1day = 24hr
    const oneSecond = 1000;
    const oneMinute = 60*1000;
    const oneHour = 60*60*1000;
    const oneDay = 24*60*60*1000;

    let diffDay = Math.floor(t/oneDay);
    let diffHour = Math.floor((t%oneDay)/oneHour);
    let diffMinute = Math.floor((t%oneHour)/oneMinute);
    let diffSeconds = Math.floor((t%oneMinute)/oneSecond);

    // console.log(diffDay);
    // console.log(diffHour);
    // console.log(diffMinute);
    // console.log(diffSeconds);
    // console.log(t);
    // console.log(currentTime);
    // console.log(futureTime);

    const timearr = [diffDay, diffHour, diffMinute, diffSeconds];
    countTimer.forEach(function(item, index){
        if(item.innerHTML < 10){
            item.innerHTML = `0${timearr[index]}`
        } else {
            item.innerHTML = timearr[index];
        }
    });

    const countDown = setInterval(getRemainingTime, 1000);

    if(t<0){
        countdowncontainer.innerHTML = `<p class="expire">Sorry the Giveaway has Expired!!</p>`;
    }
}

getRemainingTime();