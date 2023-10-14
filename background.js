let healingSeconds = 1860; // 31 minutes in seconds

function startHealingTimer() {
  setInterval(() => {
    healingSeconds--;

    if (healingSeconds <= 0) {
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'healing_springs_image.jpg',
        title: 'Healing Springs',
        message: 'Time to visit the Healing Springs!'
      });
      healingSeconds = 1860; // Reset to 31 minutes
    }
  }, 1000);
}

// Start the timer when the service worker is installed
self.addEventListener('install', (event) => {
  startHealingTimer();
});

// Listen for reset event from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.resetHealingTimer) {
    healingSeconds = 1860;
  }
});
