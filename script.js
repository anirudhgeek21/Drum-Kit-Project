

const a=document.querySelector(".light-mode-change")
const b=document.querySelector("body")
document.querySelector(".light-mode-change").addEventListener('click',function(){
  for (let i=0; i<7;i++){
    document.querySelectorAll(".key")[i].style.backgroundColor="#B2B1B9";
    document.querySelectorAll(".key")[i].style.color="black";
  }

  document.querySelector(".light-mode-change").style.backgroundColor="#FAF7F0";
  document.querySelector(".light-mode-change").style.border="solid 1px black";
  document.querySelector("body").style.backgroundColor="#EEEEEE";
  document.querySelector("body").style.color="black";

})

document.querySelector(".dark-mode-change").addEventListener('click',function(){
  for (let i=0; i<7;i++){
    document.querySelectorAll(".key")[i].style.backgroundColor="#423F3E";
    document.querySelectorAll(".key")[i].style.color="white";
  }
  document.querySelector(".dark-mode-change").style.backgroundColor="black";
  document.querySelector(".light-mode-change").style.backgroundColor="white";
  document.querySelector(".dark-mode-change").style.border="solid 1px white";
  document.querySelector("body").style.backgroundColor="#2B2B2B";
  document.querySelector("body").style.color="white";
})





for (var i = 0; i < 7; i++) {

  document.querySelectorAll(".key")[i].addEventListener("click", function() {

    let buttonInnerHTML = this.textContent;

    makeSound(buttonInnerHTML);



  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);



});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom_1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom_2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom_3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom_4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick_bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}
