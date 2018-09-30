//****************** FONCTIONS ************************

// Lance la partie 
function runGame(level) {
  var partie = null;

  // DOM
  var resultatContent = document.querySelector('.resultat');

  // Déclarer et génerer un chiffre aléatoire en fonction du level choisi par l'utilisateur.
  var numberRandom = Math.floor(Math.random() * (level - 1) + 1);
  console.log(numberRandom);

  // Déclarer les autres variables utiles.
  var tentative = 0;
  var numberUser = 0;
  var win = null; // permettra de savoir si on affiche un message de win ou de game over.

  // Boucler tant que le nombre de tentative ne dépasse pas 10 ET que le chiffre entré par l'utilisateur n'est pas le bon
  for (tentative = 1; tentative <= 10 && numberUser != numberRandom; tentative++) {
    numberUser = recoverNumber(level); // on récupère la saisie utilisateur dans numberUser
    win = compare(numberRandom, numberUser, tentative); // on compare la saisie utilisateur au chiffre random. win récupère true ou false
  }

  if (win) // si win == true on est sortie de la boucle car numberRandom == numberUser
  {
    alert('Félicitation vous avez trouvé ! Le chiffre était bien ' + numberRandom);
    win = 'win';
    tentative--;
  } else { // sinon c'est que le compteur est arrivé à 10
    alert('Les 10 tentatives sont expirés. GAME OVER. Le chiffre était ' + numberRandom);
    win = 'loose';
    tentative = '--';
  }

  if (level === 100) {
    partie = 'Facile';
  } else if (level === 500) {
    partie = 'Moyen';
  } else {
    partie = 'Difficile';
  }

  //DOM
  resultatContent.innerHTML = resultatContent.innerHTML + '<tr> <td class="cellule">' + partie + '</td> <td class="cellule">' + win + '</td> <td class="cellule">' + tentative + '</td> <td class="cellule">' + numberRandom + '</td> </tr>';
}

// Récupère une valeur auprès de l'utilisateur.
function recoverNumber(level) {
  var numberUser = prompt('Choisissez un chiffre entre 1 et ' + level + ' : '); // Demande du chiffre
  numberUser = parseInt(numberUser, 10); // convertir string en int ( base 10 pour avoir un chiffre décimal )

  // Tant que l'utilisateur n'entre pas un chiffre on est bête et on le redemande xD 
  while (isNaN(numberUser)) {
    numberUser = prompt('Saisie invalide. Choisissez un chiffre entre 1 et ' + level + ' : ');
    numberUser = parseInt(numberUser, 10);
  }

  return numberUser;
}

// Compare le chiffre donné par l'utilisateur avec le chiffre aléatoire.
function compare(random, user, tentative) {
  if (random > user) {
    alert('Tentative n°' + tentative + ' . C\'est plus...');
    return false;
  } else if (random < user) {
    alert('Tentative n°' + tentative + ' . C\'est moins...');
    return false;
  } else {
    return true;
  }
}

;