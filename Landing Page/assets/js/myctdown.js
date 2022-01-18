const countdown = document.querySelector('.countdown');

// Set Launch Date (ms)
const launchDate = new Date('Feb 27, 2022 13:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Distance from now and the launch date (ms)
  const distance = launchDate - now;

  // Time calculation
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
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
      <div class="flex-item flex-item-lead">
        <div class="cont day">${days}<span>Days</span></div> 
      </div>
      <div class="flex-item">
        <div class="cont hrs">${hours}<span>Hrs</span></div>
      </div>
    </div>
    <br>
    <div class="flex-conatiner">
      <div class="flex-item">
        <div class="cont">${mins}<span>Mins</span></div>
      </div>
      <div class="flex-item">
        <div class="cont">${seconds}<span>Sec</span></div>
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
