window.addEventListener('load', function () {


  var btnSearch = document.getElementById('btnSearch')
  var searchBar = document.querySelector('input[type=text]')

  // FONCTION DE REQUETE API
  requestAPI = (yo = "") => {
    // open a request
    var request = new XMLHttpRequest()

    // Call API

    if (yo == "") {
      request.open('GET', 'https://api.unsplash.com/photos/random/?orientation=landscape&client_id=63df13fdb58a0ff2d9201a9acb9f0e05cbf454a5e198f82f5b8f53559092d57e', true)
    }
    else {
      request.open('GET', "https://api.unsplash.com/photos/random/?query=" + yo + "&orientation=landscape&client_id=63df13fdb58a0ff2d9201a9acb9f0e05cbf454a5e198f82f5b8f53559092d57e")
      // request.open('GET', 'https://api.unsplash.com/photos/random/?query="'+yo+'"&orientation=landscape&client_id=63df13fdb58a0ff2d9201a9acb9f0e05cbf454a5e198f82f5b8f53559092d57e', true)
    }


    request.onload = function () {
      // JSON acess
      var json = JSON.parse(this.response)
      console.log(json.urls.regular + "by" + json.user.name)

      var blocImage = document.getElementById('imageAPI').style
      blocImage.backgroundImage = "url('" + json.urls.regular + "')"
      blocImage.backgroundSize = "cover";
      blocImage.backgroundPosition = "center";
    }
    request.send()
  }

  // Appel de la fonction requestAPI pour afficher la photo la première fois    
  requestAPI();




  let rechercher = (valeur) => {
    console.log(valeur.value)
    // on vérifie si le champs n'est pas vide
    if (valeur.value != '') {
      valeur.style.borderBottom = "thick solid white";
      // window.open('http://google.com/search?q='+valeur.value)

      requestAPI(valeur.value);
    }
    else {
      valeur.style.borderBottom = "thick solid red";
    }
  }



  btnSearch.addEventListener('click', () => {
    rechercher(searchBar);
  })


  // REFRESH SO FRESHHH
  document.querySelector('#btnRefresh').addEventListener("click", () => {
    requestAPI();
  })


  // GESTION DE L'HEURE
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m;
    t = setTimeout(function () {
      startTime()
    }, 10000);
  }
  startTime();


});




