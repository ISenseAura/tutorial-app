let exInfo = {
"console" : "Enter an explanation about the word console here",
"frontend" : "Enter an explanation about frontend here",
"javascriptkeyword" : "Enter about JavaScript keywords"
}

function placeItems() {

let nav = `<nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style="display:none" id="mySidebar">
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
  <a href="home.html" onclick="w3_close(); showLoading()" class="w3-bar-item w3-button">HOME</a>
  <a href="index.html" onclick="w3_close(); showLoading()" class="w3-bar-item w3-button">JS Intro</a>
  <a href="jshowto.html" onclick="w3_close(); showLoading()" class="w3-bar-item w3-button">JS How To Use</a>
   <a href="jsstatements.html" onclick="w3_close(); showLoading()" class="w3-bar-item w3-button">JS Statements</a>
</nav> `; 

document.getElementById("navI").innerHTML = nav;

let infos = document.getElementsByTagName("info");
if(!infos) return console.log("No info word found");
for(i in infos) {
  if(infos[i].innerHTML) {
    let text = exInfo[infos[i].innerHTML.toLowerCase().trim()];
  infos[i].onclick = () => {
  document.getElementById("popup").innerHTML = text + "<br> <button onclick='closeAD()' class='w3-red'> Close </button>";
  blurExceptPopup()
  console.log(text);
  }
}
}
} 

function askAD() {
let ele = document.getElementById("popup");
ele.innerHTML = `<p> Have a doubt? No problem Clear it out by sending a Mail to the owner of the app 
<p> <br> <input class="w3-input" placeholder="Your Email" type="email"/> <br> <input type="text" placeholder="Your doubt" id="doubt"/>
<button class="w3-green"> Submit </button> <button onclick="closeAD()" class="w3-red"> Close </button>`;

blurExceptPopup()

} 

function blurExceptPopup() {
document.getElementById("blur").style = "filter:blur(8px)";
document.getElementById("navv").style = "filter:blur(8px)";

}

function closeAD() {
  let ele = document.getElementById("popup");
  ele.innerHTML = ''
  unBlur()
} 

function unBlur() {
  document.getElementById("blur").style = "filter:blur(0px)";
  document.getElementById("navv").style = "filter:blur(0px)";

}

function showLoading() {
  let pop = document.getElementById('popup');
  pop.innerHTML = ` Loading... <br>`;
  blurExceptPopup()
}

