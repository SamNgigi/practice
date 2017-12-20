/*Back-End*/
// Random
var randomNumber = Math.floor(Math.random()*100)+1;
console.log(randomNumber);
// number of times user has guessed
var guessCount = 1
// GameLogic- checkGuess function.
/*
var guesses = document.querySelector('.guesses');
var lastGuess = document.querySelector('.last-guess');
var lowHi = document.querySelector('.low-or-hi');
*/

var checkGuess = function (input) {
  //  alert(number);
  if(guessCount ===1 && input !== randomNumber){
  $(".guesses").text("Previous guesses: ");
  // guesses.textContent = 'Previous guesses: ';
  }
  $(".guesses").text("Previous guesses: " + input + ", ");
  // guesses.textContent += number + ' ';

  if(input === randomNumber){
/*
lastGuess.textContent = "Congratulations! You got it right";
lastGuess.style.backgroundColor = "#8cff1a";
lowHi.textContent = "";
*/
/*
$(".last-guess").text("Congratulations! You got it right");
$(".last-guess").css("backgroundColor", "#8cff1a");
$(".low-or-hi").text("");
*/
$(".last-guess").text("Congratulations! You got it right");
$(".last-guess").css({"backgroundColor": "#8cff1a", "color": "#fff" , "font-size":"25px"});
$(".low-or-hi").text("");

gameOver();
  }else if (guessCount === 10) {
    $(".last-guess").text("!!GAME OVER!!");
    $(".last-guess").css({"backgroundColor": "#e60000", "color": "#fff", "font-size":"25px"});
    gameOver();
  }else {
    $(".last-guess").text("Try Again");
    $(".last-guess").css({"backgroundColor": "#ff6666", "color": "#fff" });
    if (input > randomNumber) {
      $(".low-or-hi").text("Last guess was to high");
    }else if (input < randomNumber) {
        $(".low-or-hi").text("Last guess was to low");
    }
  }

}

$(document).ready(function() {
  // user's guesses max = 10

  $("button").click(function (event) {
    /*
  alert("Working");
    We have to declare the userGuess within the click function or we will get a is NaN result

    Why because the number is entered into the form when the page is loaded and the form is created.
    */
    var userGuess = parseInt($(".guess").val());
    // console.log(userGuess);
    //  $(".guesses").text(userGuess)
    // $(".guesses").text(randomNumber);
      /*
      How to print userGuess into a specific element using a function

      var testFunctions = function (input) {
        $(".guesses").text(input);
      }
      testFunctions(userGuess);
      */
// We have to pass in the user guess as an argument because it is generated after document-ready.
    checkGuess(userGuess);
  });
});
