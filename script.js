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

// function updateTime() {
//     const clockElement = document.getElementById("currentUTCTime");
//     const now = new Date();

//     // Convert to Nigeria Time (WAT)
//     const nigeriaTime = new Date(now.getTime() + (60 * 60 * 1000)); // Add 1 hour

//     const options = {
//         weekday: "long",
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//         timeZoneName: "short",
//     };

//     clockElement.textContent = nigeriaTime.toLocaleString("en-NG, options");
// }

// updateTime();
// setInterval(updateTime, 1000); //update every second