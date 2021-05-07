let exInfo = {}

function placeItems() {

let nav = `<nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style="display:none" id="mySidebar">
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
  <a href="home.html" onclick="w3_close()" class="w3-bar-item w3-button">HOME</a>
  <a href="index.html" class="w3-bar-item w3-button">JS Intro</a>
  <a href="jshowto.html" onclick="w3_close()" class="w3-bar-item w3-button">JS How To Use</a>
  <a href="#pricing" onclick="w3_close()" class="w3-bar-item w3-button">PRICING</a>
  <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button">CONTACT</a>
</nav> `; 

document.getElementById("navI").innerHTML = nav;

let infos = document.getElementsByTagName("info");
if(!infos) return console.log("No info word found");
for(i in infos) {
  if(infos[i].innerHTML) {
    let text = exInfo[infos[i].innerHTML.toLowerCase()];
  infos[i].onclick = () => {
  document.getElementById("popup").innerHTML = text;
  console.log(exInfo[text]);
    
  }
}
}
} 

function askAD() {
let ele = document.getElementById("popup");
ele.innerHTML = `<p> Have a doubt? No problem Clear it out by sending a Mail to the owner of the app 
<p> <br> <input class="w3-input" placeholder="Your Email" type="email"/> <br> <input type="text" placeholder="Your doubt" id="doubt"/>
<button class="w3-green"> Submit </button> <button onclick="closeAD()" class="w3-red"> Close </button>`;
document.getElementById("blur").style = "filter:blur(8px)";
document.getElementById("myNavBar").style = "filter:blur(8px)";
document.getElementById("navv").style = "filter:blur(8px)";

}

function closeAD() {
  let ele = document.getElementById("popup");
  ele.innerHTML = ''
  document.getElementById("blur").style = "filter:blur(0px)";
  document.getElementById("myNavBar").style = "filter:blur(0px)";
  document.getElementById("navv").style = "filter:blur(0px)";

}


