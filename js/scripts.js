$(document).ready(function(){
$("form#quiz").submit(function(event) {

  var nameInput1 = $("input#name").val();
  var nameInput = nameInput1.toUpperCase();
  var date = $("input#date").val();

  var weather = parseInt($("#weather").val());
  var climate = parseInt($("#climate").val());
  var enjoy = parseInt($("#enjoy").val());
  var money = parseInt($("#money").val());
  var nature = parseInt($("#nature").val());
  var food = parseInt($("#food").val());

var sum = weather + enjoy + money + nature + food
if (sum <= 5) {
    $("#answer").show();
  $(".vegas").show();
} else if (sum <= 10) {
  $(".switzerland").show();
  $("#answer").show();
}else if (sum <= 14) {
  $(".kyrgyzstan").show();
  $("#answer").show();
}else if (sum <= 18) {
  $(".hawaii").show();
  $("#answer").show();
}
  $("#restartQuiz").show();
  $(".hide-test").hide();
  $(".name").text(nameInput);
  $(".date").text(date);
  // $("#country").text(result);

  event.preventDefault();
  });
  $("form#restartQuiz").submit(function(event) {
    event.preventDefault();

    location.reload();
  });
});
