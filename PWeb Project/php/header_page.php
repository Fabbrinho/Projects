<!DOCTYPE html>
<html lang="it">
<body>
    <div id="aL">
        <div id="address">
            <a href="../index.php" id="logo_header"><img src="../img/casa.png" alt="logo"></a>
            <a href="https://goo.gl/maps/gzALzSdgEb117dYF6">
                Dove Siamo? <img id="map" src="../img/mappag.png" alt="mappa">
            </a>
        </div>
        <div id="button_box">
            <a href="../area_riservata.php" id="areaRis">
                <img class="acc_img" src="../img/area_riservata.png" alt="Accedi">
                    My area
            </a>    
            <button id="accWindow" type="button">
                <img class="acc_img" src="../img/acc.png" alt="Accedi">
                    Accedi
                <img class="acc_img" id="tenda" src="../img/tenda.png" alt="Finestra">
            </button> 
        </div>   
</div>
        <nav>
            <div class="loghi_affix">
                <img id="logo" src="../img/Tcr.jpg" alt="Logo">
                <br>
            </div>
            <ul id="menu">
                <li > <a href="../index.php">HOME</a></li>
                <li> <a href="../index.php#res_target">IL RESORT</a></li>
                <li> <a href="../index.php#room_target">LE CAMERE</a></li>
                <li> <a href="../index.php#kit_target">LA NOSTRA CUCINA</a></li>
                <li> <a href="https://goo.gl/maps/gzALzSdgEb117dYF6">DOVE SIAMO</a></li>
                <li> <a href="./reg_form.php">PRENOTA ONLINE</a></li>
                <li> <a href="#footer">CONTATTI</a></li>
                <li> <a href="../manuale.html" target="_blank">MANUALE</a></li>
            </ul>
        </nav>
        <div id="overlay_cont" class="hidden">
             <div id="form_cont">
                 <form id="login_form_extern" action="./login.php" method="POST" onsubmit="return validate_user('login_form_extern')">
                     <p>
                         <label for="email_extern" >Email</label>
                         <input type="text" name="email" id="email_extern" placeholder="luca.rossi@gmail.com" required autocomplete="username">
                     </p>
                     <p>
                         <label for="pswd_extern">Password</label>
                         <input type="password" id="pswd_extern" name="pswd" required autocomplete="current-password">
                     </p>
                     <input id="accedi" class="accedi" type="submit" value="Accedi">
                    <a class="accedi" href="./reg_form.php">Registrati</a>
                 </form>
             </div>
         </div>
         <script src="../js/header.js"></script>
</body>
</html>