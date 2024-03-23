$(document).ready (function () {
    
 
    $("#container img").mousedown(function () {
        $("#container .img-container").css('width', '25%');
        $(this).parent().css('width', '75%')
    });

    $("#container img").mouseup(function () {
        $("#container .img-container").css('width', '100%');
        $(this).parent().css('width', '100%')
    })
});
