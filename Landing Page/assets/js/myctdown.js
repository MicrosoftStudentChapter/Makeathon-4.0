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

  // Display result
  countdown.innerHTML = `
    <div class="col">
      <div class="cont day">${days}<span>Days</span></div> 
    </div>
    <div class="col">
      <div class="cont hrs">${hours}<span>Hours</span></div>
    </div>
    <div class="col min">
      <div class="cont">${mins}<span>Minutes</span></div>
    </div>
    <div class="col sec">
      <div class="cont">${seconds}<span>Seconds</span></div>
    </div>
  `;

  // If launch date is reached
  if (distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);
