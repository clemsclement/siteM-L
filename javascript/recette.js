//Récupérage des éléments

//Récupération Saumon

const moinsSaumon = document.querySelector("#moinsSaumon");
const plusSaumon = document.querySelector("#plusSaumon");
const chiffreSaumon = document.querySelector("#chiffreSaumon");
const personneSaumon = document.querySelector("#personneSaumon");
const ingSaumonSaumon = document.querySelector("#ingSaumonSaumon");
const ingPoivreSaumon = document.querySelector("#ingPoivreSaumon");
const ingAnethSaumon = document.querySelector("#ingAnethSaumon");
const ingSucreSaumon = document.querySelector("#ingSucreSaumon");
const ingSelSaumon = document.querySelector("#ingSelSaumon");

//Ajout du mot "personne" au <span> personneSaumon

personneSaumon.textContent = "personne";


//Mise en place de plusieurs compteurs

let compteur = 1;

const ingSaumon = {
    saumon: 140,
    poivre: 4,
    aneth: 10,
    sucre: 18,
    sel: 18
};



// Fonction pour mettre à jour les quantités

function majQuantite() {
    ingSaumonSaumon.textContent = ingSaumon.saumon * compteur;
    ingPoivreSaumon.textContent = ingSaumon.poivre * compteur;
    ingAnethSaumon.textContent = ingSaumon.aneth * compteur;
    ingSucreSaumon.textContent = ingSaumon.sucre * compteur;
    ingSelSaumon.textContent = ingSaumon.sel * compteur;
}

majQuantite();


//Ajout d'un compteur de base

chiffreSaumon.textContent = compteur;


//Ecouteur d'évenement au click pour changer les quantités

plusSaumon.addEventListener("click", () => {
    compteur ++;
    chiffreSaumon.textContent = compteur;
    majQuantite();
    if(compteur > 1){
        personneSaumon.textContent = "personnes";
    }
});

moinsSaumon.addEventListener("click", () => {
    if(compteur > 1){
        compteur --;
        chiffreSaumon.textContent = compteur;
        majQuantite();
    }
    if(compteur == 1){
        personneSaumon.textContent = "personne";
    }
});
