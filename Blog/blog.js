
function zoomin(div)
{



}



function toggleBulb() {
    var bulbOn = document.querySelector(".bulbon");
    var bulbOff = document.querySelector(".bulbof");
  
    if (bulbOn.style.display === "none" || bulbOn.style.display === "") {
      bulbOn.style.display = "block";
      bulbOff.style.display = "none";
    } else {
      bulbOn.style.display = "none";
      bulbOff.style.display = "block";
    }
  }
  