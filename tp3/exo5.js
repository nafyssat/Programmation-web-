const express=require("express");
const app=express();
const port = 8080;//numero de port 

app.get( "/", (req, res) => { 
    console.log("envoi des infos");
    res.send("merci");
} );

app.use((req,res)=>{
    console.log("Abort");
    res.status(500).send( "ok")
});

app.listen(port);