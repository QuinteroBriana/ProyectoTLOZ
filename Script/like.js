AOS.init();

$(function() {
//Funcion que hace desplegable el nav
$(".toggle").on("click", function() {
    if ($(".item").hasClass("active")) {
        $(".item").removeClass("active");
        $(".h1").css("display", "block");
        $(this).find("a").html("<i class='fas fa-bars'></i>");
        $(".cont_gallery").css("margin-top", "0%");
        
    } else {
        $(".item").addClass("active");
        $(".h1").css("display", "none");
        $(this).find("a").html("<i class='fas fa-times'></i>");
        $(".cont_gallery").css("margin-top", "25%");
    }
});
/*cambiar corazon*/

    var tapped=false
$(".fa-heart[id^=item_]").on("click", function() {
    if ($(this).hasClass("far")) {
    $(this).addClass("fas").removeClass("far").removeClass("cora").css("color", "red");
    $(this).css("cursor", "pointer");
    }else{
    $(this).addClass("far").addClass("cora").removeClass("fas").css("color", "black");
   }
});
//hover en corazones
$(".fa-heart[id^=item_]").hover(function(){
    if ($(this).hasClass("far")) {
        $(this).css("color", "red");
    }else{
        $(this).css("color", "black");
    }}  ,function(){
        if ($(this).hasClass("far")) {
        $(this).css("color", "black");
    }else{
        $(this).css("color", "red");
    }
});

});