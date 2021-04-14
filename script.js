const divResultat = document.querySelector("#resultat");

var tabJeu = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
];



var tabResultat = genereTableauAleatoire();


var oldSelection=[];
var nbAffiche= 0;
var ready = true;

afficherTableau();

function afficherTableau(){
  var txt ="";

    for(var i=0; i < tabJeu.length; i++){
      txt += "<div>";
      for(var j=0; j < tabJeu[i].length; j++){
        if(tabJeu[i][j] === 0){
        txt +="<button class='btn btn-primary m-2' style='width:200px;height200px' onClick='verif(\""+i+"-"+j+"\")'>Afficher</button>";
      }else{
      txt += "<img src='"+getImage(tabJeu[i][j])+"' style='width:200px;height200px' class='m-2'>";
    }
  }
  txt += "</div>";
}
divResultat.innerHTML = txt;
}

function getImage(valeur){
  var imgTxt = "images/";
  switch(valeur){
    case 1 : imgTxt += "a.JPG";
    break;
    case 2 : imgTxt += "b.JPG";
    break;
    case 3 : imgTxt += "c.JPG";
    break;
    case 4 : imgTxt += "d.JPG";
    break;
    case 5 : imgTxt += "e.JPG";
    break;
    case 6 : imgTxt += "f.JPG";
    break;
    case 7 : imgTxt += "g.jpg";
    break;
    case 8 : imgTxt += "h.jpg";
    break;
    default : console.log("cas non reconnu")
  }
  return imgTxt;
}

function verif(bouton){
  if(ready){
  nbAffiche++;
  var ligne = bouton.substr(0,1);
  var colonne = bouton.substr(2.1);

  tabJeu[ligne][colonne] = tabResultat[ligne][colonne];
  afficherTableau();

if(nbAffiche>1){
  ready = false;
  setTimeout(() =>{
    if(tabJeu[ligne][colonne] !== tabResultat[oldSelection[0]][oldSelection[1]]){
    tabJeu[ligne][colonne] = 0;
    tabJeu[oldSelection[0]][oldSelection[1]] = 0;
  }
  afficherTableau();
    ready= true;
    nbAffiche = 0;
    oldSelection = [ligne, colonne];
  },1000)

}else {
    oldSelection = [ligne, colonne];
      }
    }
}

function genereTableauAleatoire(){
  var tab = [];

  var nbImagePosition=[0,0,0,0,0,0,0,0];

for(var i = 0 ; i < 4 ; i++){
  var ligne = [];
  for(var j = 0; j < 4 ; j++){
  var fin = false;
    while(!fin){
      var randomImage = Math.floor(Math.random() * 8);
        if(nbImagePosition[randomImage] < 2){
          ligne.push(randomImage+1);
          nbImagePosition[randomImage]++;
          fin = true;
        }
      }
    }
  tab.push(ligne);
}
  return tab;
}
