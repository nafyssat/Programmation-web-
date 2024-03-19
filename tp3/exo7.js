const express = require("express");
const app =  express();

app.get('/cours/:titre/descr', (req, res) => {
    const titre= req.params.titre;
    res.send(" vous avez demandé le Cours "+titre);
} );

app.use((req, res) => {
    res.status(404).send('Erreur 404: La ressource demandée est introuvable.');
});

app.listen(8080, () => {
    console.log(`Serveur Express en cours d'exécution sur le port 8080`);
});

