var app = {
    random: 0,
    init: function() {
      var easy = document.querySelector('.easy_button');
      easy.addEventListener('click', app.showGameEasy);
    /*
      var normal = document.querySelector('.normal_button');
      normal.addEventListener('click', app.showGameNormal);

      var hard = document.querySelector('.hard_button');
      hard.addEventListener('click', app.showGameHard);

      var hell = document.querySelector('.hell_button');
      hell.addEventListener('click', app.showGameHell);
    */
    },
    showGameEasy: function() {
        console.log('ez');

        if (document.querySelector('.in_game_standard--hidden')) {
            var gameHidden = document.querySelector('.in_game_standard--hidden');
            gameHidden.className = 'in_game_standard--visible';
        } else {
            console.log('in_game_standard--visible existe déjà')
            var form = document.querySelector('#form');
            form.addEventListener('submit', app.runGameEasy);
            app.random = Math.floor (Math.random() * (100 - 1) + 1 );
            console.log(app.random);
        }
    },
    runGameEasy: function(evt) {
        evt.preventDefault();
        console.log('submit stop');

        


    }
  };
  
  document.addEventListener('DOMContentLoaded', app.init);