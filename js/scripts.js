// Questions
// 1. Seattle Offers C#, Drupal, Ruby
// Portland offers all
// 2. start portland(ruby, css, C#) seattle (Ruby)
// wait Portland (all) seattle (C#, Drupal, Ruby)
// 3. Blue-drupal, green-java, red-ruby, black-C# (no preference for css)
// 4. painting (css), puzzles (C#, Drupal, Ruby, java)
// 5. Learning styles is an informational question for epicodus on what their students think their learning styles are.

$(function() {
  $("form#basic").submit(function(event) {
    var name = $("input#name").val();
    var city = ($("input#city").val()).toLowerCase();
    var date = $("select#rush").val();
    var color = $("input:radio[name=color]:checked").val();
    var hobbie = $("select#hobbie").val();
    console.log(name);
    console.log(city);
    console.log(date);
    console.log(color);
    console.log(hobbie);
    event.preventDefault();
    $("#inputname").text(name);
    if (hobbie === "paint") {
      $("#inputclasstrack").text("CSS/Design");
      $("#hidden").show();
    } else if (color === "black") {
      $("#inputclasstrack").text("C#/.NET");
      $("#hidden").show();
    } else if (color === "blue") {
      $("#inputclasstrack").text("PHP/Drupal");
      $("#hidden").show();
    } else if (color === "red") {
      $("#inputclasstrack").text("Ruby/Rails");
      $("#hidden").show();
    } else if (color === "green") {
      $("#inputclasstrack").text("Java/Android");
      $("#hidden").show();
    } else {
      alert("Make sure all fields of the survey are filled out correctly!!!")
    }
  });
});
