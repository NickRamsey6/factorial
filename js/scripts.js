

//factorial logic
// $(document).ready(function() {
//
//   $("#number-form").submit(function(event) {
//     event.preventDefault();
//
// var total =1;
// var number = parseInt($('#number1').val());
//
// for (i=0; i < number; i++) {
//   total = total * (number-i);
// }
// var factorial = (number + '! = ' + total);
//
// alert(factorial);
//   });
// });


//Palindrome logic

function checkPalindrome(x) {

  var x = $('#word1').val()
  var y = x.split("");
  var z = y.reverse("");
  var t = z.join("")
}

$(document).ready(function() {
    $("#word-form").submit(function(event) {

      event.preventDefault();

      var x = $('#word1').val()
      var y = x.split("");
      var z = y.reverse("");
      var t = z.join("")

      if (x === t) {
        alert(true);
      } else {
        alert(false);
      }
    //  }

//      if (input === output) {
//        return true;



});
});
