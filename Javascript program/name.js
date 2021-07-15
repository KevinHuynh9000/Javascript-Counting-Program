var name=prompt("What is your name")
$("h1").text("Hello "+ name+ "! Welcome to Space! Need help Counting?")


$("#ones").on("click",function(){
  var num=$("#thing").val()
var i = 0;
while (i < num){
  i++;
  if(i >500){
    break
  }
  $(".answer").append(i+", ")
}
})

$("#twos").on("click",function(){
  var numb=$("#thingTwo").val()
  var e = 0;
while (e < numb){ 
  e+=2;
  if(e >1000){
    break
  }
    $(".answerTwo").append(e+", ")
  
  }
})
$(document).ready(function(){
  $("#clear").click(function(){
    $(".answer").empty();
  });
});
$(document).ready(function(){
  $("#clearzwei").click(function(){
    $(".answerTwo").empty();
  });
});
