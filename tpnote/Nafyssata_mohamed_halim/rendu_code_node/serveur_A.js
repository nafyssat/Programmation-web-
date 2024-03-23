const express = require('express');
const serv= express();
serv.use(express.static('public'));
const path = require('path');
serv.use(express.json())


// Données des étudiants
const etudiants = [
    { numero: 20210101, nom: 'Dupont', prenom: 'Jean' },
    { numero: 20221212, nom: 'Martin', prenom: 'Marie' },
    { numero: 20211312, nom: 'Durand', prenom: 'Pierre' },
    { numero: 22022215, nom: 'NAFYSSATA', prenom: 'HALIM' }
];
//question 1
serv.use(function(req,res,next){
    console.log("Traitement demande ");
    next()
});


serv.get('/',function (req,res,next) {
    res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
});

//question 2
serv.get('/etud/22022215', function (req, res) {
    const numero = 22022215;
    const etudiant = etudiants.find(etudiant => etudiant.numero == numero);
    res.render("page_customise.ejs", { etudiant: etudiant });
});

// Route pour /etud/numero
serv.get('/etud/:numero',function (req,res) {
    const numero = parseInt(req.params.numero);
    const etudiant = etudiants.find(etudiant => etudiant.numero == numero);
    res.render("etudiant.ejs", { etudiant: etudiant });
});

//question 3 

serv.get('/welcome', function (req, res, next) {
    const numero = 22022215;
    const etudiant = etudiants.find(etudiant => etudiant.numero == numero);
    res.render("welcome_customise.ejs", {etudiant: etudiant });
});

// question 5
serv.get('/etudiants', function (req, res) {
    res.render("etudiants.ejs", { etudiants: etudiants });
});

//question 7
serv.get('/ajouter', function (req, res) {
    res.render("ajouter.ejs");
});

serv.post('/ajouter', function (req, res) {
    const {numero, nom, prenom} = req.body;


    if(etudiants.find(etudiant => etudiant.numero == numero)){
        return res.status(403).send("etudiant existe deja");
    }
    
    etudiants.push({numero, nom, prenom});

    
    res.redirect('/etudiants');
});

serv.listen(8080); 

