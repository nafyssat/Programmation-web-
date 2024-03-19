document.addEventListener(
    "DOMContentLoaded", function(){
        var butt = document.getElementById( 'butt' );
        var list = document.getElementById('liste');
        



        list.style.display="none";

        butt.addEventListener('click',function() {
                
                $(list).slideToggle('slow');
                
                $(butt).text(function(_,text){
                    return text ==='afficher' ? 'Masquer' : 'afficher';
                })
            })
        var welcomeButton = document.getElementById('welcome');
        var welcomeMessage = $('#paragraphe');
       $('#paragraphe').css({'display':'none'},{'position':'absolute'},{'font-size': '24px'}) ;


        welcomeButton.addEventListener('click', function() {
            welcomeMessage.css('left', '-100%');
            welcomeMessage.show().animate({
                left: '50%',
                marginLeft: -welcomeMessage.width() / 2
            }, 'slow');
        });


    }
)