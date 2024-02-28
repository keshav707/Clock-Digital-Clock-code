let start = document.querySelector(".start");
let intervalID ;
start.addEventListener('click' , () => {
  
  let MIN = document.querySelector(".min");
  let SECS = document.querySelector(".sec");
  let MILI = document.querySelector(".miliSec");
  
  let min = 0;
  let sec = 0;
  let miliSec = 0;
  
  intervalID = setInterval(function() {
    
    if (miliSec == 10) {
      miliSec = 0;
      sec++;
    }
    
    if (sec == 60) {
      sec = 0;
      min++;
    }
    miliSec++;
    MIN.innerText = (min < 10 ? "0" : "") + min;
    SECS.innerText = (sec < 10 ? "0" : "") + sec;
    MILI.innerText = (miliSec < 10 ? "0" : "") + miliSec;
  },100);
})
let stop = document.querySelector('.stop');
stop.addEventListener('click' , () => {
  clearInterval(intervalID);
})