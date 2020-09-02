
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  timeout = setTimeout(function() {
      document.getElementById("maintext").innerHTML = "Stars Right?";
      document.getElementById("secondtext").innerHTML = "Are they connected?";
    }, 5000);
  
    timeout2 = setTimeout(function() {
        document.getElementById("maintext").innerHTML = "Nah...";
        document.getElementById("secondtext").innerHTML = "You just saw Humanity in a nutshell";
      }, 10000);
  
      timeout4 = setTimeout(function() {
          document.getElementById("maintext").innerHTML = "Who am I?"
          document.getElementById("secondtext").style.opacity = "0.0";
        }, 15000);
    
  
    timeout3 = setTimeout(function() {
        document.getElementById("maintext").innerHTML = "I am Ayush"
        document.getElementById("secondtext").style.opacity = "1";
        document.getElementById("secondtext").innerHTML = "Just one of those stars.";
      }, 20000);
  
 }else
 {
  timeout = setTimeout(function() {
    document.getElementById("lookup").style.paddingLeft="40%";
      document.getElementById("maintext").innerHTML = "Stars Right?";
      document.getElementById("secondtext").innerHTML = "Are they connected?";
    }, 5000);
  
    timeout2 = setTimeout(function() {
      document.getElementById("lookup").style.paddingLeft="70%";
        document.getElementById("maintext").innerHTML = "Nah...";
        document.getElementById("secondtext").innerHTML = "You just saw Humanity in a nutshell";
      }, 10000);
  
      timeout4 = setTimeout(function() {
        document.getElementById("lookup").style.paddingLeft="40%";
          document.getElementById("maintext").innerHTML = "Who am I?"
          document.getElementById("secondtext").style.opacity = "0.0";
        }, 15000);
    
  
    timeout3 = setTimeout(function() {
      document.getElementById("lookup").style.paddingLeft="40%";
        document.getElementById("maintext").innerHTML = "I am Ayush"
        document.getElementById("secondtext").style.opacity = "1";
        document.getElementById("secondtext").innerHTML = "Just one of those stars.";
      }, 20000);
  }

    


