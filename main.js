//Definitions about the following words must be short and easily understandable

let exInfo = {
  "console" : "A console is a terminal or PC or window that provides a text display and keyboard and allows overall control of the computer.",
  "frontend" : "Front end is everything that users visually see first in their browser or application.",
  "javascriptkeyword" : "Enter about JS Keywords",
  "keyword" : "Enter about JS Keywords",
  "compiler" : "Enter about compiler",
  "string" : "Enter about string",
  "strings" : "Enter about string"
}


function placeItems() {
  
let nav = `<nav class="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style="display:none" id="mySidebar">
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
  <a href="home.html" onclick="w3_close(); showLoading()" class="w3-bar-item w3-button">HOME</a>
  <a href="index.html" onclick="w3_close(); showLoading()" class="w3-bar-item w3-button">JS Intro</a>
  <a href="jshowto.html" onclick="w3_close(); showLoading()" class="w3-bar-item w3-button">JS How To Use</a>
   <a href="jsstatements.html" onclick="w3_close(); showLoading()" class="w3-bar-item w3-button">JS Statements</a>
    <a href="jscomments.html" onclick="w3_close(); showLoading()" class="w3-bar-item w3-button">JS Comments</a>
     <a href="jsvariables.html" onclick="w3_close(); showLoading()" class="w3-bar-item w3-button">JS Variables</a>   
</nav> `; 

document.getElementById("navI").innerHTML = nav;

let infos = document.getElementsByTagName("info");
if(!infos) return console.log("No info word found");
for(i in infos) {
  if(infos[i].innerHTML) {
    let text = exInfo[infos[i].innerHTML.toLowerCase().trim()];
  infos[i].onclick = () => {
  let pop = document.getElementById("popup");
  pop.style.display = "block"
  pop.innerHTML = text + "<br> <button onclick='closeAD()' class='w3-red'> Close </button>";
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
ele.style.display = "block";
blurExceptPopup()

} 

function blurExceptPopup() {
document.getElementById("blur").style = "filter:blur(8px)";
document.getElementById("navv").style = "filter:blur(8px)";

}

function closeAD() {
  let ele = document.getElementById("popup");
  ele.innerHTML = ''
  ele.style.display = "none"
  unBlur()
} 

function unBlur() {
  document.getElementById("blur").style = "filter:blur(0px)";
  document.getElementById("navv").style = "filter:blur(0px)";

}

function showLoading() {
  let pop = document.getElementById('popup');
  pop.style.display = "block";
  pop.innerHTML = ` Loading... <br>`;
  blurExceptPopup()
}

function changeLang() {
  let langs = ["english", "hindi", "marathi"];
let ele = document.getElementById('language');
let lang = ele.value;
let contents = document.getElementsByTagName(lang.trim());

langs.forEach((l) => {
  
   let tags = document.getElementsByTagName(l);
   for(i in tags) {
     if(tags[i].innerHTML) tags[i].style.display = "none";
   }
  })
  
  for(i in contents) {
    if(contents[i].innerHTML) contents[i].style.display = "block";
  }

}
