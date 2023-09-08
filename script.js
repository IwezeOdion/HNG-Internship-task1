function updateDateTime() {
    const dayOfWeek = new Date().toLocaleDateString("en-US", {
      weekday: "long",
    });
    const utcTime = new Date().toUTCString();

    document.querySelector(
      '[data-testid="currentDayOfTheWeek"]'
    ).textContent = dayOfWeek;
    document.querySelector('[data-testid="currentUTCTime"]').textContent =
      utcTime;
  }

  setInterval(updateDateTime, 1000);

// function updateClock() {
//   const currentTime = new Date();
//   const options = { timeZone: 'Africa/Lagos', hour12: false };
//   const watTime = currentTime.toLocaleTimeString('en-US', options);
//   const watDate = currentTime.toLocaleDateString('en-US', { timeZone: 'Africa/Lagos' });

//   const clockElement = document.getElementById('clock');
//   clockElement.innerHTML = `Current Time in WAT: ${watTime} on ${watDate}`;
//   clockElement.setAttribute('data-testid', 'currentUTCTime'); // Adding data-testid dynamically
// }

// // Update the clock every second
// setInterval(updateClock, 1000);

// // Initial call to set the clock
// updateClock();