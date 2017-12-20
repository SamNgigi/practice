var person = {}

$(document).ready(function() {
/*
  *JQuery
    var input = $("input");
    var btn = $("button");
    var paragraph = $("p");

  *JavaScript
    var input = document.querySelector("input");
    var btn = document.querySelector("button");
    var paragraph = document.querySelector("p");
*/
  var input = $("input");
  var paragraph = $("p");
  var btn = $("button");
  btn.click(function () {
    /*
      e.preventDefault(); has to be declared in the button type is submit...and the click function is submit.
    */
    // paragraph text empty to reset "p". Has to be declared before anything else.
    paragraph.text("");
    /*
     alert("Working");
     The var code has to be declared within the click function.

     *JavaScript
       var code = input.value;
       console.log(code);
       paragraph.textContent = eval("(code)");

     *JQuery
       var code = input.val();
       paragraph.text(code);
    */
    //  Below resets the form. Has to be declared last so that the code is executed first.
       var code = input.val();
       paragraph.text(code);
       input.val("");

  })
});
