const express=require("express");
const fs =require("fs");
const path =require("path");

const  app = express();


app.use((req,res,next)=>{
    console.log("requete recu à ",new Date());
    next();
});

app.get('/', (req, res) => {
    res.send('Réponse pour la requête GET vers /');
});

app.get('/private', (req, res) => {
    res.send('Réponse pour la requête GET vers /private');
});

app.get('/pictures', (req, res) => {
    const filePath = path.join(__dirname, 'images', 'image.png');
    res.download(filePath);
});

app.use((req,res)=>{
    res.status(404).send( "erreur  404 : page non trouvée");
});

app.listen(8080);
    