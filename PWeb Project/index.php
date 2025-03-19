<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/header.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <link rel="stylesheet" type="text/css" href="css/general_class.css">
    <link rel="shortcut icon" href="#" />
    <title>Tuscany Country Resort Website</title>
    <style>
    </style>
</head>
<body>
        <header id="img1">
            <?php
                require("./php/header.php");
            ?>
        </header>
        <br id="res_target">
        <br>
            <div class="desc_cont" id="desc_cont">
                <div class="art_cont" id="art_cont">
                    <article id="art">
                    <h2>Tuscany Country Resort</h2>
                    <p><strong>Situato a soli 40 minuti in macchina o in treno da Firenze e ha 20 minuti di macchina da Pisa</strong>, in un terra ricca di arte e cultura<b>,
                     </b>si trova il Tuscany Country Resort, un magico rifugio di charme dove potrete vivere un’esperienza speciale, 
                     circondati dai meravigliosi paesaggi che solo la Toscana sa offrire.<b> </b>Troverete un'oasi in cui potrete giocare a <strong>golf h24</strong>, partecipare ad escursioni nella
                     natura o, più semplicemente, farvi cullare dalle acque della nostra <strong>piscina</strong>.
                    <p>
                    <strong>Il Tuscany Country Resort vi aspetta, per farvi fare un esperienza unica, grazie alla nostra tenuta e alla nostra sontuosa cucina.</strong>
                    </p>
                    </article>
                </div>
                <img id="im_desc" class="im_desc" src="img/descp.jpg" alt="vista esterna">
            </div>
            <br id="room_target">
            <section id="room_img">
                <h2 id="room_title"> Le Nostre Camere</h2>
                <div id="room_cont">
                    <div id="room"></div>
                    <button type="button" id="standard" class="selected">Standard</button><button type="button" id="premium" class="notselected">Premium</button><button type="button" id="excelsior" class="notselected">Excelsior</button>
                </div>
            </section>
            <br id="kit_target">
            <br>
            <h2 id="kit_title">La Cucina Hight Quality del Tuscany Resort</h2>
            <div class="desc_cont" id="kit_cont">
                <div class="art_cont" id="kit_art_cont">
                    <article id="kit_art">
                        <h2>La Tecnica</h2>
                        <p>
                            <strong> "Passione e Perfezione"</strong><br>
                            Sono queste le uniche parole che servono a descrivere l'esperienza culinaria
                            che il Tuscany Country Resort vi regalerà.<br>
                             Anni di studio e dedizione del nostro chef sono serviti ad 
                            accumulare un'esperienza tale da rendere incredibile ogni piatto.
                        </p>
                        <h2>L'innovazione</h2>
                        <p>
                            Oltre ad avere una tecnica fuori dal comune, la nostra cucina è sempre alla ricerca di nuovi
                            sapori per arricchire ogni piatto, mescolando tradizione e innovazione in un connubio strabiliante.
                        </p>
                    </article>
                </div>
                <video muted autoplay loop class="im_desc">
                    <source src="./img/Riccio.mp4" type="video/mp4">
                </video>
            </div>
     <?php
            require("./php/footer.php");
     ?>
     <script src="./js/transition.js"></script>
     <script src="./js/validate.js"></script>
    </body>
</html>