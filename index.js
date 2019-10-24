$("button.drum").click(handleFunction);


function handleFunction(){
  var btnHTML = this.innerHTML;
  keyListener(btnHTML);
  btnAnimation(btnHTML);
}


$("body").keydown(function(event){ //anonymous function
    keyListener(event.key); //Adds event listener to the whole document and plays audio based on the presed key
    btnAnimation(event.key); // adds "animation" to the currently pressed button
});


function keyListener(key){
  switch (key) {
    case "w":
     var tom1 = new Audio("sounds/tom-1.mp3");
     tom1.play();
     break;

    case "a":
     var tom2 = new Audio("sounds/tom-2.mp3");
     tom2.play();
     break;

    case "s":
     var tom3 = new Audio("sounds/tom-3.mp3");
     tom3.play();
     break;

    case "d":
     var tom4 = new Audio("sounds/tom-4.mp3");
     tom4.play();
     break;

     case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

      case "k":
       var crash = new Audio("sounds/crash.mp3");
       crash.play();
       break;

       case "l":
        var bass = new Audio("sounds/kick-bass.mp3");
        bass.play();
        break;
    default:

  }
}


function btnAnimation(keyPressed){
var activeBtn = $("."+keyPressed);
activeBtn.addClass("pressed");
  setTimeout(function(){
    activeBtn.removeClass("pressed");
  }, 100);
}
