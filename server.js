// const http = require('http');

// const server = http.createServer((req, res)=>{
    
//     res.setHeader("content-type", "text/html");

//     // res.SetHeader("content-type", "text/plain");
//      //console.log('serveur créé');
//         res.write('<h1>Hello Node</h1>');
//         res.end();
// });

// server.listen(3000, "localhost", ()=>{
//     console.log('Prêt à ecouter les requetes sur le port 3000');
// });


class Homme {
    constructor(nom, race, langue){
        this.nom = nom;
        this.race = race;
        this.langue = langue;
    };

    afficherRace(){
        console.log(`Ma race est ${this.race}`);
        return this;
    };

    afficherLangue(){
        console.log(`Ma langue est le ${this.langue}`);
        return this;
  };

  changerLangue(newLangue){
    this.langue = newLangue;
    return this;
  };



}

const homme1 = new Homme("Edan", "Africain", "français");
homme1.langue = "Bambara";
homme1.afficherLangue();