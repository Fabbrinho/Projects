<?php
require_once("config.php");
if (session_status() == PHP_SESSION_NONE) {
    session_start();
  }
  if(!isset($_SESSION["loggato"]) || !$_SESSION["loggato"]){
    header("location: ./login_form.php");
    exit;
    }

  $_SESSION["data_arrivo"]=$_REQUEST["data_arrivo"];
  $_SESSION["data_partenza"]=$_REQUEST["data_partenza"];
  $_SESSION["n_adulti"]=$_REQUEST["adulti"];
  $_SESSION["n_bambini"]=$_REQUEST["bambini"];
  
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/pren_window.css">
    <link rel="stylesheet" href="../css/general_class.css"> 
    <link rel="shortcut icon" href="#" />
    <title>Prenota il tuo soggiorno</title>
</head>
<body>
    <header>
        <div id="aL">
            <div id="address">
                <a href="../index.php" id="logo_header"><img src="../img/casa.png" alt="logo"></a>
                <a href="https://www.google.it/maps/place/Via+delle+Calende,+11,+56025+Gello+PI/@43.6362799,10.5965883,17z/data=!3m1!4b1!4m6!3m5!1s0x12d58a8c99092e01:0xdfbc61dbae6bc025!8m2!3d43.636276!4d10.598777!16s%2Fg%2F11c5fp4p13">
                    Dove Siamo? <img id="map" src="../img/mappag.png" alt="mappa">
                </a>
            </div>
                <a id="accWindow" href="./logout.php">
                <img class="acc_img" src="../img/acc.png" alt="logout">Logout</a>   
        </div>
    </header>
    <div id="overlay_cont" class="hidden">
        <button type="button" id="close_wind_ov">
            <img id="close" src="../img/close_img.png" alt="chiudi finestra">
        </button>
            <div id="inner">
            </div>
    </div>
    <div  id="tabella_cont">
    </div>
    <?php
     require("./footer.php")
 ?>
    <script src="../js/pren.js"></script>
</body>
</html>

