$(document).ready(
    function(){
        
        
        $('#nafy, #nom, #prenom').on('input', function(){
            var civilite = $("select[name = nafy]").val();
            var nom = $("input[name = nom]").val();
            var prenom = $("input[name = prenom]").val();
            var nom_complet = $("input[name = Cnom]");
            nom_complet.val((civilite+' ')+(prenom+' ')+(nom)); 

            if(nom === undefined|| prenom === undefined){
                $('#submit').prop('disabled',true) ;
                $('#submit').css({"background-color": "red"}) ;

            }else {
                $('#submit').prop('disabled',false) ;
                $('#submit').css({"background-color": "#4caf50"}) ;
            }
        })

        
        //affiche la valeur 
        $("input[name=JsLevel]").on('input', function(){
            var valeur = $(this).val()+"%";
            $('#niveau_js_value').text(valeur);
                });

        //rend le mot de passe visible 
        $("input[name=afficher_mot_de_passe]").on('input', function(){
            var valeur = $(this).prop( "checked" );
            if  (valeur == true){
                $("#mdp,#Cmdp").attr("type","text");
            }else{
                $("#mdp,#Cmdp").attr("type","password");
            }
            
        });
        $("input[name=Cmdp]").on('input', function(){
            var valeur = $(this).val();
            var mdp =$("#mdp").val();
            if  (valeur !== mdp){
                $("#Cmdp").css({"background-color":"red"});
                $("button[type='submit']").prop("disabled",true) ;
                $('#submit').css({"background-color": "red"}) ;


            }else{
                $("#Cmdp").css({"background-color":''}) ;
                $("button[type='submit']").prop("disabled",false) ;
                $('#submit').css({"background-color": "#4caf50"}) ;

            }
            
        });
        function createMessage(){
            var civilite = $('#civilite').val();
            var nom = $('#nom').val();
            var prenom = $('#prenom').val(); 
            var dateNaissance = $('#date_naissance').val();
            var niveauJs = $('#niveau_js').val();// Nouvelle ligne pour récupérer le niveau en JavaScript
            var couleurPref = $('#couleur_pref').val()
            var message = "Bonjour " + civilite + " " + prenom + " " + nom + ", vous êtes né le " + dateNaissance + ".";
            message += " Votre niveau en JavaScript est de " + niveauJs + ".";
            message += " Votre couleur préférée est " + couleurPref + ".";
            return message;
        }

        $('#submit').on('click',function(){
            var message = createMessage(); // Créer le texte formaté
            $('#form').html(message); // Injecter le texte dans la div de résultat
            $('#myform').hide(); // Cacher le formulaire
            $('#form').show(); 

        })
       

    }  
);