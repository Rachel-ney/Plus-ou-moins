<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../css/reset.css" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <link rel="stylesheet" href="../css/style.css" />
    <title> Plus ou moins ? </title>
  </head>

  <body>
    <section class="wrapper">

        <h1 class="wrapper_title"> Vous aimez le jeu du plus ou moins ? </h1>
        <p class="wrapper_sub-title"> 
        Vous allez être servi ! <br/><br/>
        Le principe est simple, la machine tire un chiffre au hasard et vous devez le retrouver en moins de 10 coup avec pour seule indication : c'est plus ou c'est moins ! 
        </p>

        
        <div class="game">
            <article class="game_lvl" >
                <p class="game-title"> Cliquez sur le niveau de difficulté voulu : </p>

            <ul> 
                <li class="link" onclick="runGame(100)"><span class="game-bold">Facile </span> : de 1 à 100</li>
                <li class="link" onclick="runGame(500)"><span class="game-bold">Moyen </span>: de 1 à 500</li>
                <li class="link" onclick="runGame(1000)"><span class="game-bold">Difficile </span>: de 1 à 1000</li>
                <li class="link" onclick="runGame(10000)"><span class="game-bold">Infernal </span>: de 1 à ... good luck</li>
            </ul>

            </article>

            <article class="game-vs-player">
                <p class="game-title"> Et si on inversait les rôles ? </p>
                    <span class="game-bold">VOUS</span> pensez à un chiffre entre 1 et 1000, et la machine doit le retrouver en moins de 10 coup héhé. <br/>
                    Soyez bon joueur ne trichez pas dans vos indication !
                </p>
                <ul class="game_vs_player_list">
                    <li class="game_vs_player_italic" > Valeur à entrer dans le cas ou :</li> 
                    <li> C'est <span class="game-bold">plus</span> : 1</li>
                    <li>C'est <span class="game-bold">moins</span> :  2</li> 
                    <li>Si la machine à <span class="game-bold">trouvé</span>, vous devrez entrer 3</li> 
                </ul>
                <p class="game-title">Alors tenté ?</p>
                <ul>
                    <li class="link" onclick="runGameVsPlayer()">Evidemment !</li>
                    <li>Très peu pour moi...</li>
                </ul>
            </article>
        </div>

        <div class="game">
            <table class="tableau">
                <thead>
                    <tr>
                        <th class="cellule-titre">Niveau</th>
                        <th class="cellule-titre">Résultat</th>
                        <th class="cellule-titre">Tentatives</th>
                        <th class="cellule-titre">Nombre à trouver</th>
                    </tr>
                </thead>
                <tbody class="resultat">

                </tbody>
            </table>
        </div>

    </section>
  </body>
    <script src="../js/game.js"> </script>
    <script src="../js/gameVSplayer.js"> </script>
</html>
