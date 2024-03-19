const http =require('http');
//fs module pour les fichier 
const fs = require('fs');

//creation du server
const server = http.createServer((req,res)=>{

    fs.readFile('fichier.txt','utf-8',(err,data)=>{
        if(err){
            res.writeHead(500,{
                'Content-Type':'text/plain'
            });
            res.end("fichier non trouve");
        }else{
            res.writeHead(200,{'content-Type':"text/html"});

            res.write('<!DOCTYPE html>');            
            res.write('<head>');
            res.write('<meta charset="UTF-8">');
            res.write('<title>Node</title>');
            res.write('</head>');
            res.write('<body>');
            res.write('<header>');
            res.write('<h1>Module FS</h1>');
            res.write('</header>');
            res.write('<main>');
            res.write('<p>' + data + '</p>');
            res.write('</main>');
            res.write('<footer>');
            res.write('<p>Created by NAFYSSATA </p>');
            res.write('</footer>');
            res.write('</body>');
            res.write('</html>');
            res.end();
            
        }
    })
    
});
server.listen(8080);