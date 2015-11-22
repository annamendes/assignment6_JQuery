$(document).ready(function(){



$(".lightOff").mouseenter(function(){
	$(document.body).css("background-color", "black");

});

$(".lightOff").mouseenter(function(){
        alert("I turn on!");
    });


$(".lightOff").click(function() {
        $("#lightOff").attr({src : "img/lightbulb_on.png"});
    });

$(".lightOff").dblclick(function(){
        
  $("body").css("background-color","yellow")
});














});