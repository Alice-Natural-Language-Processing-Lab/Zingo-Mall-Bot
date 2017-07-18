$(document).ready(function(){

  $(".wrap").bind("click",function(){

    $(".popup").css("transform","scale(100)");
    $(".popup").show(500);
    $(".container").fadeIn("slow",function(){
    $(".container").addClass("night");
    });
    $(".wrap").css("z-index","-1");
    $(".popup").css("transform","scale(1)");
  });
    
    $("button").bind("click",function(){
         
      $(".popup").hide(300); 
      $(".container").fadeIn("slow",function(){
      $(".container").removeClass("night");
      $(".wrap").css("z-index","1");
      });
  });
});