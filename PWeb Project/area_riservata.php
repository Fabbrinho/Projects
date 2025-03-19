<?php
    require_once("./php/config.php");
    if (session_status() == PHP_SESSION_NONE) {
  session_start();
}
    if(!isset($_SESSION["loggato"]) || !$_SESSION["loggato"]){
    header("location: ./php/login_form.php");
    exit;
    }
?>

<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/area_riservata.css">
    <link rel="stylesheet" type="text/css" href="css/general_class.css">
    <link rel="shortcut icon" href="#" />
    <title>My area</title>
</head>
<body>
    <header>
    <div id="aL">
        <div id="address">
            <a href="./index.php" id="logo_header"><img src="./img/casa.png" alt="logo"></a>
            <a href="https://goo.gl/maps/gzALzSdgEb117dYF6">
                Dove Siamo? <img id="map" src="./img/mappag.png" alt="mappa">
        </a>
        </div>
            <a id="accWindow" href="./php/logout.php">
            <img class="acc_img" src="./img/acc.png" alt="logout">Logout</a>   
    </div>
    </header>

    <div id="overlay_cont" class="hidden">
        <button type="button" id="close_wind_ov">
            <img id="close" src="./img/close_img.png" alt="chiudi finestra">
        </button>
            <div id="inner">
            </div>
    </div>
    
    <div id="page_cont">
        <div id="pren_cont">
            <p id="titolo"></p>
            <div id="flex">
                <div id="form_cont"></div>
                <div id="gest_cont" class="hidden"></div>
            </div>
        </div>
        <div id="change_page"> <button type="button" id="prenota">PRENOTA</button> <button type="button" id="my_pren">LE MIE PRENOTAZIONI</button> </div>
    </div>
    <script src="./js/my_home.js"></script>
    <script src="./js/validate.js"></script>
    <?php
        require("./php/footer.php");
    ?>
</body>
</html>