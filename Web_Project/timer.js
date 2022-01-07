var dday = new Date("January 8, 2022, 0:00:00").getTime();

setInterval(function() {
  var today = new Date().getTime();
  var gap = dday - today;
  // var day = Math.ceil(gap / (1000 * 60 * 60 * 24));
  // var hour = String(Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2,"0");
  var hour = String(Math.ceil(gap / (1000 * 60 * 60))).padStart(2,"0");
  var min = String(Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60))).padStart(2,"0");
  var sec = String(Math.ceil((gap % (1000 * 60)) / 1000)).padStart(2,"0");

  // document.getElementById("count").innerHTML = day + " days " + hour + " : " + min + " : " + sec ;
  document.getElementById("count").innerHTML = hour + " : " + min + " : " + sec ;
}, 1000);