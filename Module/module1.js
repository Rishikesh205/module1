let bulebutton = document.querySelector("#blue_button");
let redbutton = document.querySelector("#red_button");
let greenbutton = document.querySelector("#green_button");
let yellowbutton = document.querySelector("#yellow_button");
let lightbluebutton = document.querySelector("#lightblue_button")
let contentText = document.querySelector(".contain_text");


bulebutton.addEventListener("click", bluefunction);

function bluefunction() {
  contentText.style.backgroundColor = "blue";
}

redbutton.addEventListener("click", redfunction);

function redfunction() {
  contentText.style.backgroundColor = "red";
}


let name = document.querySelector("#name");
yellowbutton.addEventListener("click",yellowfunction);
function yellowfunction() {
  contentText.style.backgroundColor = "yellow";
}

greenbutton.addEventListener("click",greenfunction);
function greenfunction ()
{
    contentText.style.backgroundColor = "green";
}
lightbluebutton.addEventListener("click",lightbluefunction);
function lightbluefunction ()
{
    contentText.style.backgroundColor = "lightblue";
}


name.textContent = prompt("YO! What are you looking for!! Enter your name buddy!");


let paragraph = document.getElementById("original_text");
paragraph.textContent="SIC MUNDUS CREATUS EST"

let textarea = document.getElementById("text_area_text");
textarea.addEventListener("change",changeText);
function changeText(){
  alert("This is not original");
  let content = textarea.value;
  paragraph.textContent = content;
}
