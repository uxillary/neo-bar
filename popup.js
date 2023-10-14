// Function to update NST and GMT times
function updateTime() {
    const nstTimeElement = document.getElementById("nstTime");
    const gmtTimeElement = document.getElementById("gmtTime");
  
    // Get current time in U.S. Pacific Time (Neopets Time)
    const nstDate = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" });
    nstTimeElement.innerText = nstDate;
  
    // Get current time in GMT
    const gmtDate = new Date().toLocaleString("en-US", { timeZone: "GMT" });
    gmtTimeElement.innerText = gmtDate;
  }
  
  // Update time initially and then every second
  updateTime();
  setInterval(updateTime, 1000);

// Initialize Healing Springs Timer
let healingTimer = null;
let healingSeconds = 1800;

function startHealingTimer() {
  if (healingTimer) {
    clearInterval(healingTimer);
  }

  healingTimer = setInterval(() => {
    healingSeconds--;
    const minutes = Math.floor(healingSeconds / 60);
    const seconds = healingSeconds % 60;
    document.getElementById("healingTimer").textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    if (healingSeconds <= 0) {
      clearInterval(healingTimer);
      alert("Time to visit the Healing Springs!");
      healingSeconds = 1800;
    }
  }, 1000);
}

startHealingTimer();
