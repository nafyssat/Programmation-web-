let users =[];
const express=require('express');
const app=express();
app.use(express.urlencoded({extended: true}));

app.get( '/', (req, res) => {
    const data = {
        nom: '', 
        motdepasse:''
     };
    res.render('form',data);
});
app.get( '/image/:num/show', (req, res) => { // localhost:port/image/<idbhdkjfbkdfjbkjfdb>/show
    const id = req.params.id
    const data = {
        nom: '', 
        motdepasse:''
     };
     res.render('cours.ejs', catalogue[req.params.num]);
    res.render('form',data);
});
app.get( '/images', (req, res) => {

    // return res.json({[images]})
});

app.post('/', (req, res) => {
    nom = req.body.nom;
    motdepasse= req.body.motdepasse;

    let user = users.find(user => user.nom == nom && user.motdepasse == motdepasse);

    if(userInfo){

    }else{
        user = { nom, motdepasse};
        users = users.push(user)
        
    }

    });
    


app.listen(3000);


