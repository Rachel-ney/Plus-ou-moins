//****************** Fonction ***********************

// Récupère une valeur auprès de l'utilisateur.
function userReply(tentative, number) 
{
    var yesOrNot = prompt('Tentative n°' + tentative + ' : Vous pensez à ' + number + ' ? 1.C\'est plus | 2.C\'est moins | 3.Trouvé');
    yesOrNot = parseInt(yesOrNot, 10);

    // Tant que la valeur récupérée n'est pas valide ( 1, 2 ou 3) on redemande.
    while(yesOrNot != 1 && yesOrNot != 2 && yesOrNot != 3 ) {
        yesOrNot = prompt ('Saisi incorect. Tentative n°' + tentative + ' : Vous pensez à ' + number + ' ? 1.C\'est plus | 2.C\'est moins | 3.Trouvé');
        yesOrNot = parseInt(yesOrNot, 10);
    }

    return yesOrNot;
}

function runGameVsPlayer()
{
    // Déclarer variables utiles
    var number = 1000 / 2;
    var max = 1000;
    var min = 0;
    var yesOrNot = 0;
    var win = false;

    // On boucle tant que les 10 tentatives n'ont pas été épuisé, et tant que l'utilisateur n'a pas dit que c'était trouvé ( yesOrNot == 3)
    for(var tentative = 1; tentative <= 10 && yesOrNot != 3 ; tentative ++)
    {
        yesOrNot = userReply(tentative,number);
        
        // Pas de fonction ici car trop de valeur à retourner (min, max et number) à moins d'utiliser un passage par référence
        if (yesOrNot == 1) // Si c'est plus
        {
            min = number; // on redéfini le seuil minimum ( si c'est plus rien ne sert d'aller plus bas)
            number = min + ( (max - min) / 2); // on divise l'intervalle entre le min et le max par 2 pour avoir le milieu
            number = Math.floor(number); // on évite les chiffres à virgules pour ne pas fausser les calcul
        }
        else if (yesOrNot == 2) // Si c'est moins
        {
            max = number; // on redéfini le seuil maximum ( si c'est moins rien ne sert d'aller plus haut)
            number = max - ( (max - min) / 2); 
            number = Math.floor(number); 
        }
        else if (yesOrNot == 3) // Si c'est trouvé
        {
            alert('Jamais l\'homme ne battra la machine !');
            win = true;
        }
    }

    // Si on est sorti de la boucle parce que les tentatives on était épuisé.
    if (!win) 
    {
        alert('Je suis sur que tu as triché...');
    }
}

//**********************Main**************************





