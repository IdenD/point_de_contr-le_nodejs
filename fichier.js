const fs = require('fs');

fs.writeFile('./welcome.txt', 'Hello Node', ()=>{
    console.log('Succès');
})

fs.readFile('./welcome.txt', (erreur, donnee)=>{
    if(erreur){
        console.log(erreur);
    } else{
        console.log(donnee.toString());
    }
})