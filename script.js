window.addEventListener('load', function() {

    // document.querySelector('button').addEventListener('click', ()=>{
    //     console.log('feaf')
       
    //     img1.src =  'https://i.kym-cdn.com/photos/images/newsfeed/001/439/881/ed5.png';
   
    // })






    var yo = new XMLHttpRequest()

    // Call API
    yo.open('GET', 'https://dog.ceo/api/breeds/image/random', true)
    yo.onload = function() {
      // JSON acess
      var data = JSON.parse(this.response)
    
      console.log(data.message)
        var blocImage =  document.getElementById('imageAPI').style
        blocImage.backgroundImage = "url('" + data.message+"')"
        blocImage.backgroundSize = "cover";
        blocImage.backgroundPosition = "center";
    
    
        // var img1 = document.createElement('img'); 
        // img1.src = data.message; 
        // document.getElementById('imageAPI').appendChild(img1); 
        
    
     
    }
    yo.send()






    document.querySelector('#btnRefresh').addEventListener("click", ()=>{
   // open a request
var request = new XMLHttpRequest()

// Call API
request.open('GET', 'https://dog.ceo/api/breeds/image/random', true)
request.onload = function() {
  // JSON acess
  var data = JSON.parse(this.response)

  console.log(data.message)
    var blocImage =  document.getElementById('imageAPI').style
    blocImage.backgroundImage = "url('" + data.message+"')"
    blocImage.backgroundSize = "cover";
    blocImage.backgroundPosition = "center";


    // var img1 = document.createElement('img'); 
    // img1.src = data.message; 
    // document.getElementById('imageAPI').appendChild(img1); 
    

 
}
request.send()







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
  document.getElementById('time').innerHTML = h + ":" + m ;
  t = setTimeout(function() {
    startTime()
  }, 10000);
}
startTime();


  });


  
var btnSearch = document.getElementById('btnSearch')
var searchBar = document.querySelector('input[type=text]')


let rechercher = (valeur)=>{
  console.log(valeur)
    // on vérifie si le champs n'est pas vide
    if(valeur.value != '') {
      valeur.style.borderBottom = "thick solid white";
      window.open('http://google.com/search?q='+valeur.value)
    }
    else{
      valeur.style.borderBottom = "thick solid red";
    
    }
}

btnSearch.addEventListener('click', ()=>{
  rechercher(searchBar);
} )


// for(var k=0; k<btnfavoris.length;k++) {btnfavoris[k].add('click', ()=>{

// } 
// } 






//   var request = new XMLHttpRequest()

// // Call API
// request.open('GET', 'https://random.dog/woof.json', true)
// request.onload = function() {
//   // JSON acess
//   var data = JSON.parse(this.response)

//   console.log(data.url)

//   document.querySelector('h1').addEventListener("click", ()=>{

//         var img1 = document.createElement('img'); 
//         img1.src = data.url; 
//         document.getElementById('body').appendChild(img1); 
    
//         // img.onload = imageIsLoaded;
// })
//     // 	    window.open('http://google.com/search?q='+movie.title);
//     // });

// //     data.forEach(movie => {
// //       console.log(movie.title)
// //       var film = document.createElement('div')
// //   		film.setAttribute('class', 'film')
    
// //       var h1 = document.createElement('h1')
// //       h1.textContent = movie.title

// //   // Append the movies
// //   container.appendChild(film)

// //  // Add title
// //   film.appendChild(h1)
 
//  //Search on click
// //   h1.addEventListener("click", ()=>{
// // 	    window.open('http://google.com/search?q='+movie.title);
// // });

//     // })
// }
// request.send()













   // 	    window.open('http://google.com/search?q='+movie.title);
    // });

//     data.forEach(movie => {
//       console.log(movie.title)
//       var film = document.createElement('div')
//   		film.setAttribute('class', 'film')
    
//       var h1 = document.createElement('h1')
//       h1.textContent = movie.title

//   // Append the movies
//   container.appendChild(film)

//  // Add title
//   film.appendChild(h1)
 
 //Search on click
//   h1.addEventListener("click", ()=>{
// 	    window.open('http://google.com/search?q='+movie.title);
// });

    // })