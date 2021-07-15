//incase i mess up my original javascript

$("#ones").on("click",function(){
    var num=$("#thing").val()
    for(i=0;i<=num; i+=1){
      if (i> 200){break}
      console.log(i)
    $(".answer").append(i+", ")
  }

  $("#twos").on("click",function(){
    var numb=$("#thingTwo").val()
    for(e=0;e<=numb; e+=2){
      if (e> 400){break}
      console.log(e)
      $(".answerTwo").append(e+", ")
    }
  })