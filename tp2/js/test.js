


// Données des étudiants
const etudiants = [
    { numero: 20210101, nom: 'Dupont', prenom: 'Jean' },
    { numero: 20221212, nom: 'Martin', prenom: 'Marie' },
    { numero: 20211312, nom: 'Durand', prenom: 'Pierre' }
];

serv.use(function(req,res,next){
    console.log("donné envoiyer ");
    next()
})
[11:11, 20/03/2024] Toihir: ???
[11:14, 20/03/2024] Toihir: 2, // Route pour numero edutian particulier
serv.get('/etud/12345', function (req, res) {
    const numero = 12345;
    const etudiant = { numero: 12345, nom: 'NAF', prenom: 'HAL' };
    res.render("page_customise.ejs", { etudiant: etudiant });
});

// Route pour /etud/numero
serv.get('/etud/:numero', function (req, res) {
    const numero = parseInt(req.params.numero);
    const etudiant = etudiants.find(etudiant => etudiant.numero == numero);
    res.render("etudiant.ejs", { etudiant: etudiant });
});
[11:15, 20/03/2024] Toihir: pour le 2 il faut creer la page page_customise.ejs je pense c est dans le views
[11:22, 20/03/2024] Toihir: 3: tu peux ajouter cette route

// Route pour /welcome
serv.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'public', 'welcome.html'));
});

serv.get('/welcome', function (req, res, next) {
    const numero = 12345;
    const etudiant = etudiants.find(etudiant => etudiant.numero == numero);;
    res.render("welcome_customise.ejs", { etudiant: etudiant });
});

puis le fichier welcome_customise.ejs similaire a welcome.html mais qui affiche le nom
[11:27, 20/03/2024] Toihir: 4: 

// Route pour /etud/numero
serv.get('/etud/:numero', function (req, res) {
    const numero = parseInt(req.params.numero);
    const etudiant = etudiants.find(etudiant => etudiant.numero == numero);

    if (!etudiant) {
        const msg = "Etudiant " + numero + " n'xiste pas";
        console.log(msg)
        return res.status(404).send(msg)
    }

    res.render("etudiant.ejs", { etudiant: etudiant });
});
[11:27, 20/03/2024] Nafyssata: c est tout les fichier qu'on a
[11:27, 20/03/2024] Toihir: t est sur dans public/ il ny a pas des fichiers ? ou dans /views
[11:29, 20/03/2024] Nafyssata: ja i une autre questio sur autre chose sur galerieA en fait on doit mettre les 2 image sur la page de sorte que les 2 occupe la moitié du largeur et lorsque on clique sur une image il prend le 3 quart de la page et l'autre image le 1/4 du largeur
[11:29, 20/03/2024] Nafyssata: et j'arrive pas a faire
[11:33, 20/03/2024] Toihir: ok