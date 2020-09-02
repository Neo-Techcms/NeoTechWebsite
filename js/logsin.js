function showsign() {
    var sin = document.getElementById("signupf");
    var log = document.getElementById("loginf");
    if (log.style.display != "none") 
    {
      log.style.transition = "all 0.5s";
      log.style.opacity = "0";
      t2 =  setTimeout(function()
        { 
            log.style.display = "none";
        }, 500);

      
      sin.style.transition = "all 0.5s";
      sin.style.opacity = "1";
      t2 =  setTimeout(function()
      { 
        sin.style.display = "inherit";
      }, 500);
    } 
}
function showlog() {
    var sin = document.getElementById("signupf");
    var log = document.getElementById("loginf");
    if (sin.style.display != "none") 
    {
      
      sin.style.transition = "all 0.5s";
      sin.style.opacity = "0";
      t2 =  setTimeout(function()
      { 
        sin.style.display = "none";
      }, 500);

      log.style.transition = "all 0.5s";
      log.style.opacity = "1";
      t2 =  setTimeout(function()
        { 
            log.style.display = "inherit";
        }, 500);
    } 
}
