$(document).ready(function() {
    var countUp = 1, countDown = 1;
    $("#div").on('mouseover', function() {
        console.log("Attention, vous entrez dans la zone rouge ");
    });
   
    $("#div").on('mousedown',function(){
       
        $("#count1").text(countUp) ;
        $(this).css('border','2px solid green');
        var nouvelleElement = $('<span>');
        nouvelleElement.text("up " + countUp++);
        nouvelleElement.css({'color' : 'green', 'font-size':'20px', 'margin':'2px'}); 
        $("#header").append(nouvelleElement);
        

        

    });
    $("#div").on('mouseup',function(){
       
        $("#count2").text(countDown) ;
        $(this).css('border','2px solid red');
        var p = $('<span>');
        p.text("down " + countDown++);
        p.css({'color' : 'red', 'font-size':'20px' ,'margin':'2px'}); 
        $("#footer").append(p);
       
        

    });
    $("#footer").on('click',function(){
       
       
        $(this).css('border','2px solid red');
        var p = $('<span>');
        p.text("down " + countDown++);
        $("#count2").text(countDown) ;
        p.css({'color' : 'red', 'font-size':'20px' ,'margin':'2px'}); 
        $("#footer").append(p);
       
        

    });

    

    
  

});