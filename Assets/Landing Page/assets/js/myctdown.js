const countdown = document.querySelector('.countdown');

// Set Launch Date (ms)
const launchDate = new Date('Mar 5, 2022 13:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  var now = new Date().getTime();

  // Distance from now and the launch date (ms)
  var distance = launchDate - now;

  // Time calculation
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if(days%2 == days){
    days = "0" + days
  }
  if(hours%2 == hours){
    hours = "0"  +hours;
  }
  if(mins%2 == mins){
    mins = "0" + mins;
  }
  if(seconds%2 == seconds){
    seconds = "0" + seconds;
  }
  var mQ = window.matchMedia("(max-width:650px)")
  if(mQ.matches){
    countdown.innerHTML = `
    <div class="flex-conatiner">
      <div class="flex-item flex-item-lead" onmousemove="moveGradient()">
        <div class="cont" id="day">${days}<span>Days</span></div> 
      </div>
      <div class="flex-item" onmousemove="moveGradient()">
        <div class="cont" id="hrs">${hours}<span>Hrs</span></div>
      </div>
    </div>
    <br>
    <div class="flex-conatiner">
      <div class="flex-item" onmousemove="moveGradient()">
        <div class="cont" id="mins" >${mins}<span>Mins</span></div>
      </div>
      <div class="flex-item" onmousemove="moveGradient()">
        <div class="cont" id="sec" >${seconds}<span>Sec</span></div>
      </div>
    </div>
  `;
  }else{  countdown.innerHTML = `
    <div class="flex-conatiner">
      <div class="flex-item">
        <div class="cont day">${days}<span>Days</span></div> 
      </div>
    </div>
    <div class="flex-conatiner">
      <div class="flex-item">
        <div class="cont hrs">${hours}<span>Hrs</span></div>
      </div>
    </div>
    <div class="flex-conatiner">
      <div class="flex-item">
        <div class="cont">${mins}<span>Mins</span></div>
      </div>
    </div>
    <div class="flex-conatiner">
      <div class="flex-item">
        <div class="cont">${seconds}<span>Sec</span></div>
      </div>
    </div>
  `;
}

  if (distance < 0) {
    clearInterval(intvl);
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);
