function updateClocks() {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };

    // Get current time in London
    const londonTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London", ...options});
    document.getElementById("londonTime").textContent = londonTime;
    
    // Determine if it's day or night in London
    const londonCurrentTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London", hour: 'numeric', hour12: false});
    const londonIsDay = londonCurrentTime >= 5 && londonCurrentTime < 20;

    // Update class based on whether it's day or night in London
    document.getElementById("londonClock").classList.toggle("night", !londonIsDay);
    document.getElementById("londonClock").classList.toggle("day", londonIsDay);

    // Get current time in Mexico City
    const mexicoCityTime = new Date().toLocaleString("en-US", {timeZone: "America/Mexico_City", ...options});
    document.getElementById("mexicoCityTime").textContent = mexicoCityTime;
    
    // Determine if it's day or night in Mexico City
    const mexicoCityCurrentTime = new Date().toLocaleString("en-US", {timeZone: "America/Mexico_City", hour: 'numeric', hour12: false});
    const mexicoCityIsDay = mexicoCityCurrentTime >= 5 && mexicoCityCurrentTime < 20;

    // Update class based on whether it's day or night in Mexico City
    document.getElementById("mexicoCityClock").classList.toggle("night", !mexicoCityIsDay);
    document.getElementById("mexicoCityClock").classList.toggle("day", mexicoCityIsDay);
}

setInterval(updateClocks, 1000);
updateClocks(); // Initial call to display clocks immediately
