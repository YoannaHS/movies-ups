$(document).ready(function () {
  // Inicializamos material box
  $('.materialboxed').materialbox();

  // Initialize collapse button
  $('.button-collapse').sideNav();

  // Iniciar modal
  // $('#modal-movie0').modal();
  $('#modal-movie').modal();

  // Para traer la data de la API
  // Trabajaremos para el caso con las siguientes películas:
  // var arrMovies = ['Gladiator', 'Braveheart', 'Django Unchained', 'Deadpool', 'Game of Thrones', 'Twilight', 'Harry Potter and the Deathly Hallows', 'Star Wars', 'Batman', 'knowing', 'Iron Man' ];

  var arrMovies = ['Gladiator', 'Braveheart', 'Django Unchained', 'Deadpool', 'Game of Thrones', 'Twilight', 'Batman', 'knowing', 'Iron Man'];

  // Seleccionamos estructura a moestrar películas en el newsfeed
  var containerMovies1 = $('#container-movie-1');
  var containerMovies2 = $('#container-movie-2');
  var containerMovies3 = $('#container-movie-3');
  // var containerMovies4 = $('#container-movie-4');

  for (var i = 0; i < arrMovies.length; i++) {
    if (i < 3) {
      containerMovies1.prepend('<div class="col s4 container-flex-column"><img id="movie' + i + '" src="" alt="movies-API-OMDB" class="materialboxed imgs-gallery responsive-img"><h6 class=center-align id="name-movie' + i + '">Nombre Película</h6><a class="waves-effect waves-light btn modal-trigger btn-modal" href="#modal-movie">Ver Datos</a></div>');
    }
    if (i >= 3 && i < 6) {
      containerMovies2.prepend('<div class="col s4 container-flex-column"><img id="movie' + i + '" src="" alt="movies-API-OMDB" class="materialboxed imgs-gallery responsive-img"><h6 class=center-align id="name-movie' + i + '">Nombre Película</h6><a class="waves-effect waves-light btn modal-trigger btn-modal" href="#modal-movie">Ver Datos</a></div>');
    }
    if (i >= 6 && i < 9) {
      containerMovies3.prepend('<div class="col s4 container-flex-column"><img id="movie' + i + '" src="" alt="movies-API-OMDB" class=" materialboxed imgs-gallery responsive-img"><h6 class=center-align id="name-movie' + i + '">Nombre Película</h6><a class="waves-effect waves-light btn modal-trigger btn-modal" href="#modal-movie">Ver Datos</a></div>');
    }
    // if (i >= 9 && i < 12) {
    //   containerMovies4.prepend('<div class="col s4 container-flex-column"><img id=movie' + i + ' + src="" alt="movies-API-OMDB"class="imgs-gallery responsive-img"><h6 id=name-movie' + i + ' >Nombre Película</h6>');
    // }
    // apicall(arrMovies[i], '#movie' + i, '#name-movie' + i, '#td-year', '#td-time', '#td-repart', '#td-genre', '#name-movie1', '#movie1');

    // $('.btn-modal').on('click', function() {
    //   // $('#td-year').removeAttr('id');
    //   $('#td-year').attr('id', 'td-year' + i);
    //   // console.log('td-year' + i);
    //   // $('#td-time').removeAttr('id');
    //   $('#td-time').attr('id', 'td-time' + i);
    //   // $('#td-repart').removeAttr('id');
    //   $('#td-repart').attr('id', 'td-repart' + i);
    //   // $('#td-genre').removeAttr('id');
    //   $('#td-genre').attr('id', 'td-genre' + i);
    // });

    apicall(arrMovies[i], '#movie' + i, '#name-movie' + i);

    //
    // $('#td-year').text('');
    // $('#td-time').text('');
    // $('#td-repart').text('');
    // $('#td-genre').text('');
    // $('#name-movie1').text('');
    // $('#movie1').attr('src', '');
  }

  // llamando API OMDB:
  // , idYear, idTime, idRepart, idGenre, idNameMovie, idImgMovie
  // &apikey=a1792c9b


  function apicall(nameMovie, idImg, idNameMovie) {
    $.getJSON('http://www.omdbapi.com/?t=' + nameMovie + '&apikey=a1792c9b').then(function(response) {
      console.log(response);
      // arrNameMovies.push = response.Title;
      // console.log(arrNameMovies);
      // console.log(idYear);
      // var name = response.Title;
      $(idImg).attr('src', response.Poster);
      $(idNameMovie).text(response.Title);

      $('.btn-modal').on('click', function() {
        console.log(response);
        $('#td-year').text(response.Year);
        $('#td-time').text(response.Runtime);
        $('#td-repart').text(response.Actors);
        $('#td-genre').text(response.Genre);
        $('#name-movie').text(response.Title);
        $('#movie-img').attr('src', response.Poster);
      });
    });
  };

  $('#btn-reload').on('click', function() {
    location.reload();
  });
});