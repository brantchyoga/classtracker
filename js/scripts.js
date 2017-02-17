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
    var city = $("input#city").val();
    var date = $("select#rush").val();
  });
});
