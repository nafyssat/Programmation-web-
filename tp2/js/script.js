$(document).ready(function() {
    $("#paragraphe").mouseenter(function() {
        $(this).text("ceci n est pas un paragraphe");
    }
    );
    $("#paragraphe").mouseleave(function() {
        $(this).text("ceci est un paragraphe");
    }
    );
  

});