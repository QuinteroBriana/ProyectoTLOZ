
//animaciones
AOS.init();
//el magico mundo del jquery
$(function() {
  var tapped=false
//Funcion que hace desplegable el nav
  $(".toggle").on("click", function() {
    if ($(".item").hasClass("active")) {
        $(".item").removeClass("active");
        $(this).find("a").html("<i class='fas fa-bars'></i>");
    } else {
        $(".item").addClass("active");
        $(this).find("a").html("<i class='fas fa-times'></i>");
    }
});

//funcion para dar click y se muestre la info de la noticia en escritorio
$("article").click(function(){
  $(".informacion").css("display", "block");
});

//funcion para dar dos clicks y se quite la info de la noticia en ecritorio
$("article").dblclick(function(){
 $(".informacion").css("display", "none");
});

//funcion para dar toques en celular/tableta y se quite o aparezca la informacion
$("article").on("touchstart", function(e) {
 if(!tapped){ //if tap is not set, set up single tap
     tapped=setTimeout(function(){
         tapped=null
         $(".informacion").css("display", "none");
         //insert things you want to do when single tapped
     },1000);   //wait 300ms then run single click code
   } else {    //tapped within 300ms of last tap. double tap
     clearTimeout(tapped);
     //stop single tap callback
     tapped=null
     $(".informacion").css("display", "block");
     //insert things you want to do when double tapped
   }
});
e.preventDefault()

});