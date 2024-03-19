const { log } = require('console');
const fs=require('fs');
console.log("reading file , please wait");

fs.readFile('fichier.txt','utf-8' , (err,data) =>{
    if(err){
        console.error("error");
        return;
    }
    console.log("UNsychro");
    console.log(data);
});

console.log("nafyss");
try{
    const fileContent= fs.readFileSync('fichier1.txt' ,'utf-8');
    console.log("sychro");
    console.log(fileContent);
    
}catch(err){
    console.error("erreur 2");
}

