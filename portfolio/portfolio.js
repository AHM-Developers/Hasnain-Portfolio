


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




var patronacard = ["./patrona pic.PNG", "patrona Puppy", "Blog Site", "https://ahm-developers.github.io/Patrona-Puppys/Home%20page/home.html"];
var myport = ["./myport.PNG","Hasnain A.Samad","Portfolio Site","www.github.com"];
var watchesweb = ["" , "" , "E-Commerce Site" , "www.github.com"];
var calculator =["./calculator.PNG" , "Dynamic Calculator" , "Mini Project" , "www.github.com"];

function showall() {
  document.getElementById("tab1").style.cssText="color:yellow;text-decoration:underline 2px solid yellow;";
  document.getElementById("tab2").style.cssText="color:white;";
  document.getElementById("tab3").style.cssText="color:white;";
  document.getElementById("tab4").style.cssText="color:white;";
  document.getElementById("tab5").style.cssText="color:white;";
  document.getElementById("tab6").style.cssText="color:white;";
  document.getElementById("tab7").style.cssText="color:white;";
  
  var div = document.querySelector(".cards-div");
  var div2 = document.querySelector(".cards-div-2");

  div.innerHTML = '<div class="card col-lg-3 animated-card"><div class="img"><img src="'+patronacard[0]+'" alt="loading.."></div><div class="content"><br><h3 class="web-name">'+patronacard[1]+'</h3><h5 class="web-type">'+patronacard[2]+'</h5><br><a href="'+patronacard[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+myport[0]+'" alt="loading.."></div><div class="content"><br><h3 class="web-name">'+myport[1]+'</h3><h5 class="web-type">'+myport[2]+'</h5><br><a href="'+myport[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+calculator[0]+'" alt="loading.."></div><div class="content"><br><h3 class="web-name">'+calculator[1]+'</h3><h5 class="web-type">'+calculator[2]+'</h5><br><a href="'+calculator[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div>';

  div2.innerHTML = '<div class="card col-lg-3 animated-card"><div class="img"><img src="'+watchesweb[0]+'" alt="loading.."></div><div class="content"><br><h3 class="web-name">'+watchesweb[1]+'</h3><h5 class="web-type">'+watchesweb[2]+'</h5><br><a href="'+watchesweb[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'" alt="loading.."></div><div class="content"><br><h3 class="web-name">Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'" alt="loading.."></div><div class="content"><br><h3 class="web-name">Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div>';

  applyAnimation(".animated-card");
}

function applyAnimation(selector) {
  var cards = document.querySelectorAll(selector);
  cards.forEach(card => {
    card.style.animation = 'flip-diagonal-2-tl .6s cubic-bezier(.455,.03,.515,.955) both';
    card.style.webkitAnimation = 'flip-diagonal-2-tl .6s cubic-bezier(.455,.03,.515,.955) both';
    card.addEventListener('animationend', () => {
      card.style.animation = ''; // Remove animation after it's completed
      card.style.webkitAnimation = '';
    }, { once: true });
  });
}

function showblog() {
  document.getElementById("tab2").style.cssText="color:yellow;text-decoration:underline 2px solid yellow;";
  document.getElementById("tab1").style.cssText="color:white;";
  document.getElementById("tab3").style.cssText="color:white;";
  document.getElementById("tab4").style.cssText="color:white;";
  document.getElementById("tab5").style.cssText="color:white;";
  document.getElementById("tab6").style.cssText="color:white;";
  document.getElementById("tab7").style.cssText="color:white;";
  var div = document.querySelector(".cards-div");
  var div2 = document.querySelector(".cards-div-2");

  div.innerHTML = '<div class="card col-lg-3 animated-card"><div class="img"><img src="'+patronacard[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >'+patronacard[1]+'</h3><h5 class="web-type">'+patronacard[2]+'</h5><br><a href="'+patronacard[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name">Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div>';
  
  div2.innerHTML = '<div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name">Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div>';

  applyAnimation(".animated-card");
}

function showcommerce()
{
    document.getElementById("tab3").style.cssText="color:yellow;text-decoration:underline 2px solid yellow;";
    document.getElementById("tab1").style.cssText="color:white;";
    document.getElementById("tab2").style.cssText="color:white;";
    document.getElementById("tab4").style.cssText="color:white;";
    document.getElementById("tab5").style.cssText="color:white;";
    document.getElementById("tab6").style.cssText="color:white;";
    document.getElementById("tab7").style.cssText="color:white;";
    var div = document.querySelector(".cards-div");
    var div2 = document.querySelector(".cards-div-2");
  
    div.innerHTML = '<div class="card col-lg-3 animated-card"><div class="img"><img src="'+watchesweb[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >'+watchesweb[1]+'</h3><h5 class="web-type">'+watchesweb[2]+'</h5><br><a href="'+watchesweb[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name">Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div>';
    
    div2.innerHTML = '<div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name">Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div>';
  
    applyAnimation(".animated-card");
}


function showportfolio() 
{
    document.getElementById("tab4").style.cssText="color:yellow;text-decoration:underline 2px solid yellow;";
    document.getElementById("tab1").style.cssText="color:white;";
    document.getElementById("tab2").style.cssText="color:white;";
    document.getElementById("tab3").style.cssText="color:white;";
    document.getElementById("tab5").style.cssText="color:white;";
    document.getElementById("tab6").style.cssText="color:white;";
    document.getElementById("tab7").style.cssText="color:white;";
    var div = document.querySelector(".cards-div");
    var div2 = document.querySelector(".cards-div-2");
  
    div.innerHTML = '<div class="card col-lg-3 animated-card"><div class="img"><img src="'+myport[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >'+myport[1]+'</h3><h5 class="web-type">'+myport[2]+'</h5><br><a href="'+myport[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name">Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div>';
    
    div2.innerHTML = '<div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name">Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div>';
  
    applyAnimation(".animated-card");
}



function showbooks() 
{
    document.getElementById("tab5").style.cssText="color:yellow;text-decoration:underline 2px solid yellow;";
    document.getElementById("tab1").style.cssText="color:white;";
    document.getElementById("tab2").style.cssText="color:white;";
    document.getElementById("tab3").style.cssText="color:white;";
    document.getElementById("tab4").style.cssText="color:white;";
    document.getElementById("tab6").style.cssText="color:white;";
    document.getElementById("tab7").style.cssText="color:white;";
    var div = document.querySelector(".cards-div");
    var div2 = document.querySelector(".cards-div-2");
  
    div.innerHTML = '<div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >'+[1]+'</h3><h5 class="web-type">'+[2]+'</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name">Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div>';
    
    div2.innerHTML = '<div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name">Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div>';
  
    applyAnimation(".animated-card");
}


function showhealth() 
{
    document.getElementById("tab6").style.cssText="color:yellow;text-decoration:underline 2px solid yellow;";
    document.getElementById("tab2").style.cssText="color:white;";
    document.getElementById("tab3").style.cssText="color:white;";
    document.getElementById("tab4").style.cssText="color:white;";
    document.getElementById("tab5").style.cssText="color:white;";
    document.getElementById("tab1").style.cssText="color:white;";
    document.getElementById("tab7").style.cssText="color:white;";
    var div = document.querySelector(".cards-div");
    var div2 = document.querySelector(".cards-div-2");
  
    div.innerHTML = '<div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >'+[1]+'</h3><h5 class="web-type">'+[2]+'</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name">Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div>';
    
    div2.innerHTML = '<div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name">Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div>';
  
    applyAnimation(".animated-card");
}



function showmini() 
{
    document.getElementById("tab7").style.cssText="color:yellow;text-decoration:underline 2px solid yellow;";
    document.getElementById("tab2").style.cssText="color:white;";
    document.getElementById("tab3").style.cssText="color:white;";
    document.getElementById("tab4").style.cssText="color:white;";
    document.getElementById("tab5").style.cssText="color:white;";
    document.getElementById("tab6").style.cssText="color:white;";
    document.getElementById("tab1").style.cssText="color:white;";
    var div = document.querySelector(".cards-div");
    var div2 = document.querySelector(".cards-div-2");
  
    div.innerHTML = '<div class="card col-lg-3 animated-card"><div class="img"><img src="'+calculator[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >'+calculator[1]+'</h3><h5 class="web-type">'+calculator[2]+'</h5><br><a href="'+calculator[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name">Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div>';
    
    div2.innerHTML = '<div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name" >Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div><div class="card col-lg-3 animated-card"><div class="img"><img src="'+[0]+'"" alt="loading.."></div><div class="content"><br><h3 class="web-name">Coming Soon</h3><h5 class="web-type">Coming Soon</h5><br><a href="'+[3]+'" target="_blank" class="web-link"><button class="go-btn">Go Live</button></a></div></div>';
  
    applyAnimation(".animated-card");
}
