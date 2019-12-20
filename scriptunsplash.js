// Au chargement de la page
window.addEventListener('load', function () {

// DECLARATION DES FONCTION---------------
  var btnSearch = document.getElementById('btnSearch')
  var searchBar = document.querySelector('input[type=text]')
  // La clé pour accéder à l'API
  var myKey = '63df13fdb58a0ff2d9201a9acb9f0e05cbf454a5e198f82f5b8f53559092d57e'

// FONCTIONS PRINCIPALES--------------------------
  // Fonction de la requete API
  requestAPI = (requete = "") => {
    // ouvrir une requete
    var request = new XMLHttpRequest()

    // test de la requête  (si requete nulle on renvoie une image random)
    if (requete == "") {
      request.open('GET', 'https://api.unsplash.com/photos/random/?orientation=landscape&client_id=' + myKey, true)
      console.log('ok')
    }
    else { //On recherche la photo
      request.open('GET', "https://api.unsplash.com/photos/random/?query=" + requete + "&orientation=landscape&client_id=63df13fdb58a0ff2d9201a9acb9f0e05cbf454a5e198f82f5b8f53559092d57e")
    }

    request.onload = function () {
      // Acces au json (parse)
      var json = JSON.parse(this.response)

      // Afficher l'auteur
      console.log(json.urls.regular + "by" + json.user.name)

      // On insère l'url de l'immae récupérée dans le background-image
      var blocImage = document.getElementById('imageAPI').style
      blocImage.backgroundImage = "url('" + json.urls.regular + "')"
      blocImage.backgroundSize = "cover";
      blocImage.backgroundPosition = "center";
    }
    request.send()
  }

  // Appel de la fonction requestAPI pour afficher la photo la première fois    
  requestAPI();



  // Fonction pour lancer une recherche
  let rechercher = (valeur) => {
    console.log(valeur.value)
    // on vérifie si le champs n'est pas vide
    if (valeur.value != '') {
      // On actualise le boder bottom
      valeur.style.borderBottom = "thick solid white";

      // window.open('http://google.com/search?q='+valeur.value) //Recherche sur internet (V0)
      
      // On appelle la fonction pour faire une requete API avec la valeur recherchée par l'utilisateur
      requestAPI(valeur.value);
    }
    else {
      // On actualise le boder bottom
      valeur.style.borderBottom = "thick solid red";
    }
  }

// RECHERCHE----------------------------------
  // On appelle la fonction de recherche lorsque l'utilisateur clique sur le bouton
  btnSearch.addEventListener('click', () => {
    rechercher(searchBar);
  })


  // Lorsque l'on click sur le bouton refresh on update l'image de manière random
  document.querySelector('#btnRefresh').addEventListener("click", () => {
    requestAPI();
  })

// AFFICHAGE DE L'HEURE---------------------------------
  // GESTION DE L'HEURE
  //Fonction de test pour ajouter des 0 si le chiffre est <10 (pour la beauté =>10:02 au lieu de 10:2)
  function testTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  // Fonction pour afficher le temps réel
  function timeAfficher() {
    var ajd = new Date();
    var h = ajd.getHours();
    var m = ajd.getMinutes();

    // var s = ajd.getSeconds();
    //On ajoute les 0 si nécéssaire
    m = testTime(m);
    // s = testTime(s); //secondes
    document.getElementById('time').innerHTML = h + ":" + m;

    //On défini un timer pour update l'heure
    t = setTimeout(function () {
      timeAfficher()
    }, 10000);
  }

  //On appelle la fonction et on appelle l'heure
  timeAfficher();
});




