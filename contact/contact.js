

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

  
  
// Submit button js
function run()
{
        const btn = document.querySelector("#btn");
        const btnText = document.querySelector("#btnText");

       
            btnText.innerHTML = "Submitted";
            btn.classList.add("active");
        
    }

function checkvalue()
{
    var name = document.getElementById("username").value;
    var email = document.getElementById("useremail").value;
    var subject = document.getElementById("usersubject").value;
    var comment = document.getElementById("usercomments").textContent;
if(name !="" || email !="" || subject!="" || comment!="")
{
    alert("hello");

}
else
{
    alert("error");
}

    
}


// submit btn js

const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");

btn.onclick = () => {
    btnText.innerHTML = "Thanks";
    btn.classList.add("active");
};



function resizepara()
{
  var scrnwidth = window.innerWidth;
var paragraph = document.getElementById("dynamic-para");
// var detailsDiv = document.querySelector(".details-div");
if(scrnwidth <= 767)
{
  paragraph.style.maxWidth = scrnwidth-20 + 'px';
  // detailsDiv.style.width = scrnwidth + 'px';
}
else
{
  paragraph.style.maxWidth = "100%";
  // detailsDiv.style.width = "100%";
}
}

resizepara();
window.addEventListener('resize', resizepara);

