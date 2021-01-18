$(document).ready(function() {
// alert("wowwww");

      $("#six").draggable();

      $("#three").hover(function(){
     $("#one" ).show();
     });

     $("#three").hover(function(){
    $("#two").show();
    });

    $("#one").hover(function(){
         $("#two").css("color", "black");
         });

    $("#two").hover(function(){
          $("#one").css("color", "black");
          });
})
