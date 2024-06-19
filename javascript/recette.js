// //Récupération des éléments de la recette Saumon

// const moinsSaumon = document.querySelector("#moinsSaumon");
// const plusSaumon = document.querySelector("#plusSaumon");
// const chiffreSaumon = document.querySelector("#chiffreSaumon");
// const personneSaumon = document.querySelector("#personneSaumon");
// const ingSaumonSaumon = document.querySelector("#ingSaumonSaumon");
// const ingPoivreSaumon = document.querySelector("#ingPoivreSaumon");
// const ingAnethSaumon = document.querySelector("#ingAnethSaumon");
// const ingSucreSaumon = document.querySelector("#ingSucreSaumon");
// const ingSelSaumon = document.querySelector("#ingSelSaumon");


// //Ajout du mot "personne" au <span> personneSaumon

// personneSaumon.textContent = "personne";


// //Mise en place de plusieurs compteurs

// let compteur = 1;

// const ingSaumon = {
//     saumon: 140,
//     poivre: 4,
//     aneth: 10,
//     sucre: 18,
//     sel: 18
// };



// // Fonction pour mettre à jour les quantités

// function majQuantite() {
//     ingSaumonSaumon.textContent = ingSaumon.saumon * compteur;
//     ingPoivreSaumon.textContent = ingSaumon.poivre * compteur;
//     ingAnethSaumon.textContent = ingSaumon.aneth * compteur;
//     ingSucreSaumon.textContent = ingSaumon.sucre * compteur;
//     ingSelSaumon.textContent = ingSaumon.sel * compteur;
// }

// majQuantite();


// //Ajout d'un compteur de base

// chiffreSaumon.textContent = compteur;


// //Ecouteur d'évenement au click pour changer les quantités

// plusSaumon.addEventListener("click", () => {
//     compteur ++;
//     chiffreSaumon.textContent = compteur;
//     majQuantite();
//     if(compteur > 1){
//         personneSaumon.textContent = "personnes";
//     }
// });

// moinsSaumon.addEventListener("click", () => {
//     if(compteur > 1){
//         compteur --;
//         chiffreSaumon.textContent = compteur;
//         majQuantite();
//     }
//     if(compteur == 1){
//         personneSaumon.textContent = "personne";
//     }
// });

class Recette {
    constructor(nbPersonne = 1, nomRecette, listeIngredient = []) {
        this.nbPersonne = nbPersonne;
        this.nomRecette = nomRecette;
        this.listeIngredient = listeIngredient;
    }
};

class Ingredient {
    constructor(nom, quantite) {
        this.nom = nom;
        this.quantite = quantite;
    }

};

let r1 = new Recette(
    1,
    "Saumon Gravlax",
    [new Ingredient("Saumon Frais", 140),
    new Ingredient("Poivre Concassé", 4),
    new Ingredient("Aneth", 10),
    new Ingredient("Sucre", 18),
    new Ingredient("Sel", 18)]
);

const titrer1 = document.getElementById("titre");
titrer1.textContent = r1.nomRecette;

const lister1 = document.getElementById("liste");
console.log(lister1);

r1.listeIngredient.forEach(element => {
    let li = document.createElement("li");
    li.innerText = `${element.quantite * r1.nbPersonne}g ${element.nom}`;
    lister1.appendChild(li);
});

const personne = document.querySelector("#personneSaumon");
personne.innerText = r1.nbPersonne + " " + "personne";

const plusSaumon = document.querySelector("#plusSaumon");
plusSaumon.innerText = "+";

plusSaumon.addEventListener("click", () => {
    r1.nbPersonne++;
    personne.innerText = `${r1.nbPersonne} personnes`;
    lister1.innerText = "";
    r1.listeIngredient.forEach(element => {
        let li = document.createElement("li");
        li.innerText = `${element.quantite * r1.nbPersonne}g ${element.nom}`;
        lister1.appendChild(li);
    });
});

const moinsSaumon = document.querySelector("#moinsSaumon");
moinsSaumon.innerText = "-";

moinsSaumon.addEventListener("click", () => {
    if(r1.nbPersonne > 1){
        r1.nbPersonne--;
        personne.innerText = `${r1.nbPersonne} personnes`;
        lister1.innerText = "";
        r1.listeIngredient.forEach(element => {
            let li = document.createElement("li");
            li.innerText = `${element.quantite * r1.nbPersonne}g ${element.nom}`;
            lister1.appendChild(li);
        });
    }
    if (r1.nbPersonne == 1) {
        personne.innerText = `${r1.nbPersonne} personne`;
    };
});