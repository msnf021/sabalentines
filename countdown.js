// Function to calculate and display countdown
function setCountdown(targetDate, elementId) {
    var countDownDate = new Date(targetDate).getTime();
    var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Create a readable countdown string
      var countdownString = days + " days left until birthday!";
  
      // Update the HTML element with the readable countdown string
      document.getElementById(elementId).innerHTML = countdownString;
  
      if (distance < 0) {
        clearInterval(x);
        document.getElementById(elementId).innerHTML = "EXPIRED";
      }
    }, 1000);
  }
  
  // Set countdown for June 21st
  setCountdown("June 21, " + new Date().getFullYear() + " 00:00:00", "june21");
  
  // Set countdown for August 27th
  setCountdown("August 27, " + new Date().getFullYear() + " 00:00:00", "august27");
  