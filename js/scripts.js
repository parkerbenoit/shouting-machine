$(document).ready(function() {
  $("#formOne").submit(function(event){
    const inputReceived = $("input#input1").val();

    $(".input1").text(inputReceived.toUpperCase());

    event.preventDefault();
  });
});