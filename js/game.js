var app = {
  numberRandom: 0, // chiffre aléatoire
  numberUser: 0, // chiffre entré par l'utilisateur
  nbrTry: 0,
  form: document.querySelector('#form'),
  formButton: document.querySelector('.form_button'),
  answer: document.querySelector('.answer'),
  invalid: document.querySelector('.invalid'),
  retry: document.querySelector('.retry_button'),
  regexCompare: RegExp('^[0-9]{1,3}$'),

  init: function() {
    var easy = document.querySelector('.easy_button');
    easy.addEventListener('click', app.runGameEasy);
    /*
      var normal = document.querySelector('.normal_button');
      normal.addEventListener('click', app.showGameNormal);

      var hard = document.querySelector('.hard_button');
      hard.addEventListener('click', app.showGameHard);

      var hell = document.querySelector('.hell_button');
      hell.addEventListener('click', app.showGameHell);
    */
  },

  // Lancement de la partie
  runGameEasy: function() {

    // si la classe hidden existe on la change en visible pour afficher l'HTML qui contient le déroulement du jeu

    // numberRandom est remis à 0 à chaque fin de partie, s'il est != 0, une partie est en cours
    if (app.numberRandom == 0) {
      // premier lancement de partie
      if (document.querySelector('.in_game_standard--hidden')) {
        var gameHidden = document.querySelector('.in_game_standard--hidden');
        gameHidden.className = 'in_game_standard';
      // autre lancement de partie (rejouer)
      } else {
        // changement d'id du formulaire pour le faire ré-apparaitre.
        app.form.id = 'form';
        // on réactive le formulaire et le bouton
        app.form.numberTry.disabled = false;
        app.formButton.disabled = false;
        // on vide le tableau
        app.answer.innerHTML = '';
        // on supprime le bouton rejouer
        app.retry.innerHTML = '';
      }
      // définition d'un nombre aléatoire
      app.numberRandom = Math.floor(Math.random() * (100 - 1) + 1);
      console.log(app.numberRandom);
    } else {
      alert('Vous n\'avez pas fini votre partie');
    }
    app.form.addEventListener('submit', app.compareNumber);
  },

  compareNumber: function(evt) {
    // stop envoi formulaire
    evt.preventDefault();

    var input = document.querySelector('.form_input');

    // La chaine doit être composé uniquement de chiffre (1 à 3 chiffre max)
    if (app.regexCompare.test(input.value)) {
      app.invalid.innerHTML = ''; // vide le message d'erreur
      app.numberUser = input.value; // stock la valeur entrée
      input.value = ''; // vide la zone de saisie
      app.nbrTry++; // ajoute une tentative

      // affichage
      if (app.numberRandom < app.numberUser) {
        app.answer.innerHTML += '<tr><td class="cell_title">' + app.nbrTry + '</td> <td class="cell_title"> ' + app.numberUser + '</td> <td class="cell_title"> C\'est moins </td></tr>';
      } else if (app.numberRandom > app.numberUser) {
        app.answer.innerHTML += '<tr><td class="cell_title">' + app.nbrTry + '</td> <td class="cell_title"> ' + app.numberUser + '</td> <td class="cell_title"> C\'est plus </td></tr>';
      } else {
        app.answer.innerHTML += '<tr><td class="cell_title">' + app.nbrTry + '</td> <td class="cell_title"> ' + app.numberUser + '</td> <td class="cell_title">  Trouvé ! </td></tr>';
        // remise à 0 du numberRandom pour signaler la fin de partie
        app.numberRandom = 0;
        // changement d'id du formulaire pour le cacher.
        app.form.id = 'form--hidden';
        // par précaution, désactivation du formulaire ET du boutton
        app.form.numberTry.disabled = true;
        app.formButton.disabled = true;
        // affichage boutton rejouer
        app.retry.innerHTML = '<button class="form_button">Rejouer</button>';
        app.retry.addEventListener('click', app.runGameEasy);
      }
    } else {
      app.invalid.innerHTML = 'Saisie invalide'; // affiche message d'erreur
    }
  }
};

document.addEventListener('DOMContentLoaded', app.init);
