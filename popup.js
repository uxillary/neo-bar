function updateClocks() {
    const now = new Date();
    
    // Neopets Time (U.S. Pacific Time)
    const neopetsTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
    const neopetsHours = neopetsTime.getHours().toString().padStart(2, '0');
    const neopetsMinutes = neopetsTime.getMinutes().toString().padStart(2, '0');
    document.getElementById("neopetsTime").innerText = `${neopetsHours}:${neopetsMinutes}`;
    
    // GMT
    const gmtHours = now.getUTCHours().toString().padStart(2, '0');
    const gmtMinutes = now.getUTCMinutes().toString().padStart(2, '0');
    document.getElementById("gmtTime").innerText = `${gmtHours}:${gmtMinutes}`;
  }
  
  // Update the clocks every minute
  setInterval(updateClocks, 60000);
  
  // Update the clocks immediately
  updateClocks();  

  //Healing Springs timer
  document.getElementById("healingSprings").addEventListener('click', () => {
    chrome.runtime.sendMessage({ resetHealingTimer: true });
  });