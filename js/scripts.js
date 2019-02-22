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
  // alert('Please make a selection.');
  $("#country").empty().append("LAS VEGAS");
  $("#answer").show();
} else if (sum <= 10) {
  $("#country").append("Switzerland");
  $("#answer").show();
}else if (sum <= 14) {
  $("#country").append("Kyrgyzstan");
  $("#answer").show();
}else if (sum <= 18) {
  $("#country").append("Hawaii");
  $("#answer").show();
}


  $(".name").text(nameInput);
  $(".date").text(date);
  // $("#country").text(result);
  event.preventDefault();
  });
});
