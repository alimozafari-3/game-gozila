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

var checkdead = setInterval(function () {
  let charactertop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );

  let blockleft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  )
  if (blockleft < 20 && blockleft > -20 && charactertop >= 130) {
    block.style.animation = "none";
    alert("game over" + Math.floor(conter / 100));
    conter = 0;
    block.style.animation = "block 1s infinite linear";
  } else {
    conter++;
    document.getElementById("scorespan").innerHTML = Math.floor(conter / 100);
  }
}, 10);
