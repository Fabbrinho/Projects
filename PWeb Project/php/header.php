<!DOCTYPE html>
<html lang="it">
<body>
    <div id="aL">
        <div id="address">
            <a href="#" id="logo_header"><img src="./img/casa.png" alt="logo"></a>
            <a href="https://goo.gl/maps/gzALzSdgEb117dYF6">
                Dove Siamo? <img id="map" src="./img/mappag.png" alt="mappa">
            </a>
        </div>
        <div id="button_box">
            <a href="./area_riservata.php" id="areaRis">
                <img class="acc_img" src="./img/area_riservata.png" alt="Accedi">
                    My area
            </a>    
            <button id="accWindow" type="button">
                <img class="acc_img" src="./img/acc.png" alt="Accedi">
                    Accedi
                <img class="acc_img" id="tenda" src="img/tenda.png" alt="Finestra">
            </button> 
        </div>   
    </div>
        <nav>
            <div class="loghi_affix">
                <img id="logo" src="img/Tcr.jpg" alt="Logo">
                <br>
            </div>
            <ul id="menu">
                <li > <a href="#">HOME</a></li>
                <li> <a href="#res_target">IL RESORT</a></li>
                <li> <a href="#room_target">LE CAMERE</a></li>
                <li> <a href="#kit_target">LA NOSTRA CUCINA</a></li>
                <li> <a href="https://goo.gl/maps/gzALzSdgEb117dYF6">DOVE SIAMO</a></li>
                <li> <a href="php/reg_form.php">PRENOTA ONLINE</a></li>
                <li> <a href="#footer">CONTATTI</a></li>
                <li> <a href="./manuale.html" target="_blank">MANUALE</a></li>
            </ul>
        </nav>

        <div id="overlay_cont" class="hidden">
    <div id="form_cont">
        <form action="./php/login.php" method="POST" id="index_login_form" onsubmit="return validate_user('index_login_form')">
            <p>
                <label for="email" >Email</label>
                <input type="text" id="email" name="email" placeholder="luca.rossi@gmail.com" required autocomplete="username">
            </p>
            <p>
                <label for="pswd">Password</label>
                <input type="password" id="pswd" name="pswd" required autocomplete ="current-password">
            </p>
            <input id="accedi" class="accedi" type="submit" value="Accedi">
            <a class="accedi" href="./php/reg_form.php">Registrati</a>
        </form>
    </div>
</div>
<script src="./js/header.js"></script>
</body>
</html>