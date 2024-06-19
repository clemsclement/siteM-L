// Définition de la classe Recette avec un nbPersonne de base de 1

class Recette {
    constructor(nomRecette, listeIngredient = [], nbPersonne = 1) {
        this.nomRecette = nomRecette;
        this.listeIngredient = listeIngredient;
        this.nbPersonne = nbPersonne;
    }
};

// Définition de la classe Ingredient pour le constructeur listeIngredient de la classe Recette

class Ingredient {
    constructor(nom, quantite) {
        this.nom = nom;
        this.quantite = quantite;
    }

};



// #region Recette Saumon

let recetteSaumon = new Recette(
    "Saumon Gravlax",
    [new Ingredient("Saumon Frais", 140),
    new Ingredient("Poivre Concassé", 4),
    new Ingredient("Aneth", 10),
    new Ingredient("Sucre", 18),
    new Ingredient("Sel", 18)]
);

const titreRecetteUn = document.querySelector("#titreRecetteUn");
titreRecetteUn.textContent = recetteSaumon.nomRecette;


// Création d'un liste d'ingrédient grâce à la méthode forEach();

const listeRecetteUn = document.querySelector("#listeRecetteUn");
recetteSaumon.listeIngredient.forEach(element => {
    let li = document.createElement("li");
    li.innerText = `${element.quantite * recetteSaumon.nbPersonne}g ${element.nom}`;
    listeRecetteUn.appendChild(li);
});

const personneRecetteUn = document.querySelector("#personneRecetteUn");
personneRecetteUn.innerText = recetteSaumon.nbPersonne + " " + "personne";

const plusRecetteUn = document.querySelector("#plusRecetteUn");
plusRecetteUn.innerText = "+";

//Ecouteur d'évènement pour changer le nombre de personnes et la quantité d'ingrédients

plusRecetteUn.addEventListener("click", () => {
    recetteSaumon.nbPersonne++;
    personneRecetteUn.innerText = `${recetteSaumon.nbPersonne} personnes`;
    listeRecetteUn.innerText = "";
    recetteSaumon.listeIngredient.forEach(element => {
        let li = document.createElement("li");
        li.innerText = `${element.quantite * recetteSaumon.nbPersonne}g ${element.nom}`;
        listeRecetteUn.appendChild(li);
    });
});

const moinsRecetteUn = document.querySelector("#moinsRecetteUn");
moinsRecetteUn.innerText = "-";

moinsRecetteUn.addEventListener("click", () => {
    if(recetteSaumon.nbPersonne > 1){
        recetteSaumon.nbPersonne--;
        personneRecetteUn.innerText = `${recetteSaumon.nbPersonne} personnes`;
        listeRecetteUn.innerText = "";
        recetteSaumon.listeIngredient.forEach(element => {
            let li = document.createElement("li");
            li.innerText = `${element.quantite * recetteSaumon.nbPersonne}g ${element.nom}`;
            listeRecetteUn.appendChild(li);
        });
    }
    if (recetteSaumon.nbPersonne == 1) {
        personneRecetteUn.innerText = `${recetteSaumon.nbPersonne} personne`;
    };
});

// #region Recette Pickles

let recettePickles = new Recette(
    "Pickles d'Oignons",
    [new Ingredient("Oignon Rouge", 200),
    new Ingredient("Vinaigre de Cidre", 250),
    new Ingredient("Vinaigre de Vin", 125),
    new Ingredient("Sucre", 25),
    new Ingredient("Sel et Poivre", 1)]
);

const titreRecetteDeux = document.querySelector("#titreRecetteDeux");
titreRecetteDeux.innerText = recettePickles.nomRecette;

const listeRecetteDeux = document.querySelector("#listeRecetteDeux");
recettePickles.listeIngredient.forEach(element => {
    let li = document.createElement("li");
    li.innerText = `${element.quantite * recettePickles.nbPersonne}g ${element.nom}`;
    listeRecetteDeux.appendChild(li); 
});

const personneRecetteDeux = document.querySelector("#personneRecetteDeux");
personneRecetteDeux.innerText = recettePickles.nbPersonne + " " + "personne";

const plusRecetteDeux = document.querySelector("#plusRecetteDeux");
plusRecetteDeux.innerText = "+";

plusRecetteDeux.addEventListener("click", () => {
    recettePickles.nbPersonne++;
    personneRecetteDeux.innerText = `${recettePickles.nbPersonne} personnes`;
    listeRecetteDeux.innerText = "";
    recettePickles.listeIngredient.forEach(element => {
        let li = document.createElement("li");
        li.innerText = `${element.quantite * recettePickles.nbPersonne}g ${element.nom}`;
        listeRecetteDeux.appendChild(li);
    });
});

const moinsRecetteDeux = document.querySelector("#moinsRecetteDeux");
moinsRecetteDeux.innerText = "-";

moinsRecetteDeux.addEventListener("click", () => {
    if(recettePickles.nbPersonne > 1){
        recettePickles.nbPersonne--;
        personneRecetteDeux.innerText = `${recettePickles.nbPersonne} personnes`;
        listeRecetteDeux.innerText = "";
        recettePickles.listeIngredient.forEach(element => {
            let li = document.createElement("li");
            li.innerText = `${element.quantite * recettePickles.nbPersonne}g ${element.nom}`;
            listeRecetteDeux.appendChild(li);
        });
    }
    if (recettePickles.nbPersonne == 1) {
        personneRecetteDeux.innerText = `${recettePickles.nbPersonne} personne`;
    };
});

// #region Recette Riz 

let recetteRiz = new Recette(
    "Riz Vinaigré",
    [new Ingredient("Riz Rond / Japonais", 130),
    new Ingredient("Vinaigre de Riz", 20),
    new Ingredient("Eau", 20),
    new Ingredient("Sucre", 3),
    new Ingredient("Sel", 2)]
);

const titreRecetteTrois = document.querySelector("#titreRecetteTrois");
titreRecetteTrois.innerText = recetteRiz.nomRecette;

const listeRecetteTrois = document.querySelector("#listeRecetteTrois");
recetteRiz.listeIngredient.forEach(element => {
    let li = document.createElement("li");
    li.innerText = `${element.quantite * recetteRiz.nbPersonne}g ${element.nom}`;
    listeRecetteTrois.appendChild(li); 
});

const personneRecetteTrois = document.querySelector("#personneRecetteTrois");
personneRecetteTrois.innerText = recetteRiz.nbPersonne + " " + "personne";

const plusRecetteTrois = document.querySelector("#plusRecetteTrois");
plusRecetteTrois.innerText = "+";

plusRecetteTrois.addEventListener("click", () => {
    recetteRiz.nbPersonne++;
    personneRecetteTrois.innerText = `${recetteRiz.nbPersonne} personnes`;
    listeRecetteTrois.innerText = "";
    recetteRiz.listeIngredient.forEach(element => {
        let li = document.createElement("li");
        li.innerText = `${element.quantite * recetteRiz.nbPersonne}g ${element.nom}`;
        listeRecetteTrois.appendChild(li);
    });
});

const moinsRecetteTrois = document.querySelector("#moinsRecetteTrois");
moinsRecetteTrois.innerText = "-";

moinsRecetteTrois.addEventListener("click", () => {
    if(recetteRiz.nbPersonne > 1){
        recetteRiz.nbPersonne--;
        personneRecetteTrois.innerText = `${recetteRiz.nbPersonne} personnes`;
        listeRecetteTrois.innerText = "";
        recetteRiz.listeIngredient.forEach(element => {
            let li = document.createElement("li");
            li.innerText = `${element.quantite * recetteRiz.nbPersonne}g ${element.nom}`;
            listeRecetteTrois.appendChild(li);
        });
    }
    if (recetteRiz.nbPersonne == 1) {
        personneRecetteTrois.innerText = `${recetteRiz.nbPersonne} personne`;
    };
});

// #region Recette Teriyaki

let recetteTeriyaki = new Recette(
    "Sauce Teriyaki",
    [new Ingredient("Sauce Soja", 125),
    new Ingredient("Eau", 125),
    new Ingredient("Maïzena", 10),
    new Ingredient("Miel", 18),
    new Ingredient("Mirin", 20)]
);

const titreRecetteQuatre = document.querySelector("#titreRecetteQuatre");
titreRecetteQuatre.innerText = recetteTeriyaki.nomRecette;

const listeRecetteQuatre = document.querySelector("#listeRecetteQuatre");
recetteTeriyaki.listeIngredient.forEach(element => {
    let li = document.createElement("li");
    li.innerText = `${element.quantite * recetteTeriyaki.nbPersonne}g ${element.nom}`;
    listeRecetteQuatre.appendChild(li); 
});

const personneRecetteQuatre = document.querySelector("#personneRecetteQuatre");
personneRecetteQuatre.innerText = recetteTeriyaki.nbPersonne + " " + "personne";

const plusRecetteQuatre = document.querySelector("#plusRecetteQuatre");
plusRecetteQuatre.innerText = "+";

plusRecetteQuatre.addEventListener("click", () => {
    recetteTeriyaki.nbPersonne++;
    personneRecetteQuatre.innerText = `${recetteTeriyaki.nbPersonne} personnes`;
    listeRecetteQuatre.innerText = "";
    recetteTeriyaki.listeIngredient.forEach(element => {
        let li = document.createElement("li");
        li.innerText = `${element.quantite * recetteTeriyaki.nbPersonne}g ${element.nom}`;
        listeRecetteQuatre.appendChild(li);
    });
});

const moinsRecetteQuatre = document.querySelector("#moinsRecetteQuatre");
moinsRecetteQuatre.innerText = "-";

moinsRecetteQuatre.addEventListener("click", () => {
    if(recetteTeriyaki.nbPersonne > 1){
        recetteTeriyaki.nbPersonne--;
        personneRecetteQuatre.innerText = `${recetteTeriyaki.nbPersonne} personnes`;
        listeRecetteQuatre.innerText = "";
        recetteTeriyaki.listeIngredient.forEach(element => {
            let li = document.createElement("li");
            li.innerText = `${element.quantite * recetteTeriyaki.nbPersonne}g ${element.nom}`;
            listeRecetteQuatre.appendChild(li);
        });
    }
    if (recetteTeriyaki.nbPersonne == 1) {
        personneRecetteQuatre.innerText = `${recetteTeriyaki.nbPersonne} personne`;
    };
});