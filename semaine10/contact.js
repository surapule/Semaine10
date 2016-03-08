affichageID = document.querySelector("#affichage p");
multiplicateurID = document.querySelector("#multiplicateur p");
autoclicID = document.querySelector("#autoclic p");
btnAjouter = document.querySelector("#btnAjout");
btnMultiplicateur = document.querySelector("#btnMultiplicateur");
btnAutoclic = document.querySelector("#btnAutoclic");

// differentes valeurs
score = 0 ;
compteurMultiplicateur = 1;
compteurAutoclic = 0;
prixMultiplicateur = 20;
prixAutoclic = 40;

//placement valeur dans Html

function affichageScore() {
    affichageID.innerHTML = "Score : " + score;
};

function affichageMultiplicateur() {
  multiplicateurID.innerHTML = "Prix du prochain multiplicateur " + prixMultiplicateur;
  btnMultiplicateur.innerHTML = "Multiplier vos click de : " + compteurMultiplicateur;
};

function affichageAutoclic() {
  autoclicID.innerHTML = "Prix du prochain autoclic " + prixAutoclic;
  btnAutoclic.innerHTML = "Autoclic X  " + compteurAutoclic;
};


//incrémenter d'un cran
function incrementAffichage() {
  score += compteurMultiplicateur;
  affichageScore()
};

function autoclicScore() {
  score += compteurAutoclic;
  affichageScore()
};

function incrementMultiplicateur() {
  if (score >= prixMultiplicateur) {
        score  -= prixMultiplicateur;
        compteurMultiplicateur += 1;
        multiplicateurPrix();
        affichageScore();
        affichageMultiplicateur();
  } else {
        alert("Vous devez possédez " + prixMultiplicateur);
  }
};

function multiplicateurPrix() {
  prixMultiplicateur *= 2;
};


function incrementAutoclic() {
  if(score >= prixAutoclic) {
        score -= prixAutoclic;
        compteurAutoclic +=1;
        autoclicPrix();
        affichageScore();
        affichageAutoclic();
  } else {
    alert("Vous devez possédez " + prixAutoclic);
  }
}; 

function autoclicPrix() {
    prixAutoclic *= 2;
};

setInterval(autoclicScore, 1000)
affichageScore();
affichageMultiplicateur();
affichageAutoclic();
btnAjouter.onclick = incrementAffichage;
btnMultiplicateur.onclick = incrementMultiplicateur;
btnAutoclic.onclick = incrementAutoclic;

