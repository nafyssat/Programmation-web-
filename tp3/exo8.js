const express = require('express');
const app=express();
const path = require("path");

let cours =[];
cours[0]={
    nom : "OCAML",
    description : "technique de prog fonctionnelle",
    prof:["Durand","Lefevre"],
    responsable: "Durand"
};
cours[1]={
    nom : "HTML",
    description : "langage de programmation",
    prof:["ali","nafyssata"],
    responsable: "ali"
};

app.use(express.static('public'));

app.get( '/cours/:num', (req,res) => {
    const numCours =  parseInt(req.params.num);
    if (numCours < 0 || numCours >= cours.length || isNaN(numCours)) {
        return res.status(404).send('Erreur 404: Numéro de cours invalide.');
      }
    res.render('cours.ejs',{cours:cours[numCours]});
});
app.set('views', path.join(__dirname, 'views'));
app.set( 'view engine', 'ejs' ); 



app.listen(8080);