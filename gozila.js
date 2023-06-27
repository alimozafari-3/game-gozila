var character = document.getElementById("character");
var block = document.getElementById("block");
let wi = document.querySelector(".boht");

var conter = 0;
function jump() {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 300);
}