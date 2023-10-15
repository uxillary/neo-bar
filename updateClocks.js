document.addEventListener("DOMContentLoaded", function() {
    function updateClocks() {
        const now = new Date();
        
        // Neopets Time (U.S. Pacific Time)
        const nstTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
        const nstHours = nstTime.getHours().toString().padStart(2, '0');
        const nstMinutes = nstTime.getMinutes().toString().padStart(2, '0');
        document.getElementById("nstTime").innerText = `${nstHours}:${nstMinutes}`;
        
        // GMT
        const gmtHours = now.getUTCHours().toString().padStart(2, '0');
        const gmtMinutes = now.getUTCMinutes().toString().padStart(2, '0');
        document.getElementById("gmtTime").innerText = `${gmtHours}:${gmtMinutes}`;
      }
      
      // Update the clocks every minute
      setInterval(updateClocks, 60000);
      
      // Update the clocks immediately
      updateClocks();
  });
  
  