var person = {
  name:["Bob", "Smith"],
  age:32,
  gender: "Male",
  interest: ["music", "skiing"],
  hi: "Yay! It worked!",
  bio:function () {
    alert(this.name[0] + " " + this.name[1] + " is " + this.age + " years old. His interests include " + this.interests[0] + " and " + this.interest[1] + ". Yay!");
  },
  greeting: function () {
    alert("Hi! I'm" + this.name[0]+ " .");
  }
}

/**
 * Note on Tibu---just got an idea...
 Probably the front end part of the tibu site may be putting the relevant county and relevant hospitals, doctors and functions in the relevant objects.
 So that a simple this.whatever can be called when a client makes a query.
 */
$(document).ready(function() {
    // alert("Ready After");

/*
You have to either use JavaScript syntax or JQuery syntax exclusively
*JavaScript
var input = document.querySelector("input");
var btn = document.querySelector("button");
var paragraph = document.querySelector("p");

*jQuery
var input = $("input");
var btn = $("Button");
var paragraph = $("p");
*/
var input = $("input");
var btn = $("Button");
var paragraph = $("p");

    $("button.btn").click(function () {
      // alert("Buttton Works");
      paragraph.text("");
      /*
     *JavaScript
       var code = input.value;

      *jQuery
        var code = input.val();
      */
       var code = input.val();

      // We want to be able to print in the paragraph certain info in the person object.

      if (code === "name") {
        /*it would seem that .text() does not work with "<br>"
        paragraph.text(person.name[0] +"<br>" +person.name[1]);
        */

        paragraph.append(person.name[0] +"<br>" +person.name[1]);
      }
      if(code === "person"){
        paragraph.append(
          "Name: " + person.name[0] + " " + person.name[1] + "<br>" +
          "Gender: " + person.gender + "<br>" +
          "Age: " + person.age + "<br>" +
          "Interests: " + person.interest[0] + " & " + person.interest[1] + "<br>" +
          person.hi.toUpperCase()
        );
      }

       console.log(person.name[0]);
      /*
      paragraph.textContent = eval(code); -> Not working.
      When passing in string variable into eval()...It seems the correct syntax is,
      eval("(string var)");
      May have accidentally stumbled into this. It pays to keep trying.

      *JavaScript
       paragraph.textContent = eval("(code)");

      *jQuery
       paragraph.text(code);
      */

      // paragraph.text(person.name[0]);
      input.val("");
    });
});
