
function changetheme()
{
var color=document.querySelector(".color-div");
color.style.backgroundColor="orange";


var contentdiv = document.querySelector(".content-div");

contentdiv.style.cssText='background-color:white;border-bottom: 703px solid white;border-left: 122px solid orange;';


var name = document.getElementById("name");
name.style.color="orange";

var profes = document.getElementById("prof");
profes.style.color="black";
profes.style.fontWeight="bold";


var bio = document.getElementById("bio");
bio.style.color="grey";
bio.style.fontWeight="bold";

var contenttxt = document.querySelector(".content-txt");

contenttxt.style.cssText='background-color:white;';

var sidebar = document.querySelector(".sidebar");

sidebar.style.cssText='background-color:white;';

// visit btn
var visitbtn = document.querySelector(".brk-btn");
visitbtn.style.cssText='border: 0.3em solid orange;color:black;'

orange();



}

function orange()
{
    var visitbtn = document.querySelector(".brk-btn");
visitbtn.style.cssText='color:orange;border: 0.2em solid orange;font-weight:bold;'
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


// button js

var animateButton = function(e) {

e.preventDefault;
//reset animation
e.target.classList.remove('animate');

e.target.classList.add('animate');
setTimeout(function(){
  e.target.classList.remove('animate');
},700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
bubblyButtons[i].addEventListener('click', animateButton, false);
}






// modal js

function showmodal()
{
  var modal=document.querySelector(".modal");
  modal.style.display="block";
}

function closemodal()
{
  var modal=document.querySelector(".modal");
modal.style.display="none";


}

function showlike()
{
// {
//   var button=document.getElementById("btn-like");

alert("Thanks for like");
}

function sidebarWidth() {
  var screenWidth = window.innerWidth;
  var sidebar = document.querySelector(".sidebar");
  sidebar.style.width = screenWidth + 'px';
  var shortbio = document.querySelector(".short-bio");
  shortbio.style.width = screenWidth - 1 + 'px';
  var bio = document.getElementById("bio")
  bio.style.maxWidth = screenWidth - 10 + 'px';
}
function changewidths()
{

if (window.innerWidth <= 767 && window.innerWidth >= 320) {
  sidebarWidth();
} else {
  // Optionally, you can add code here for larger screens
}
}


window.onload = changewidths();

function sidebarheight()
{
  
  var screenheight = window.innerHeight;
var sidebar = document.querySelector(".sidebar");

sidebar.style.marginTop = screenheight - 100 + 'px';
}

function changeheight()
{

if(window.innerWidth >= 768 && window.innerWidth <= 1024)
{
sidebarheight()
}

else
{

}
}

window.onload = changeheight();













