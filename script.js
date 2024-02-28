monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
days = ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"];
setInterval(function () {
  let time = new Date();
  let hrs = time.getHours();
  let mins = time.getMinutes();
  let sec = time.getSeconds();

  checkAMorPM(hrs);
  hrs = checkHours(hrs);

  let hours = document.querySelector(".hrs");
  hours.innerText = (hrs < 10 ? "0" : "") + hrs;
  let minute = document.querySelector(".mins");
  minute.innerText = (mins < 10 ? "0" : "") + mins;
  let second = document.querySelector(".sec");
  second.innerText = (sec < 10 ? "0" : "") + sec;


  let day = document.querySelector(".day");
  day.innerText = days[time.getDay() - 1];
  let month = document.querySelector(".month-date");
  month.innerText = monthName[time.getMonth()] + "," + time.getDate();
}, 1000);

function checkHours(hrs){
  if(hrs == 12 || hrs == 24){
    return 0;
  }
  else if(hrs > 12 && hrs < 24){
    return hrs - 12;
  }
  else{
    return hrs;
  }
}
function checkAMorPM(hrs){
  let id = document.querySelector('#am-pm');
  if(hrs == 24 || hrs < 12){
    id.innerText = "AM";
  }
  else if(hrs >= 12 && hrs < 24){
    id.innerText = "PM";
  }
}