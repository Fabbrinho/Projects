<!DOCTYPE html>
<html lang="it-IT">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/header_page.css" type="text/css">
    <link rel="stylesheet" href="../css/general_class.css">
    <link rel="shortcut icon" href="#" />
    <title>Registrati</title>
</head>
<body>
<?php
    require("./header_page.php");
?>
    <div id="reg_form_cont">
    <form method="POST" name="reg_form" id="reg_form" onsubmit="return double_user_check()">
        <p>
            <label for="nome" >Nome</label>
            <input type="text" id="nome" name="nome" required>
        </p>
        <p>
            <label for="cognome">Cognome</label>
            <input type="text" id="cognome" name="cognome" required>
        </p>
        <p>
            <label for="data">Data di nascita</label>
            <input type="date" id="data" name="data" required>
        </p>
        <p>
            <label for="codFiscale">Codice Fiscale</label>
            <input type="text" id="codFiscale" name="codFiscale" required>
        </p>
        <p>
            <label for="cell">Cellulare</label>
            <input type="text" id="cell" name="cell" required>
        </p>
        <p>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="luca.rossi@gmail.com" required autocomplete=off>
        </p>
        <p>
            <label for="passwd">Password</label>
            <input type="password" id="passwd" name="passwd" required autocomplete="new-password">
        </p>
        <p>
             <label for="conf_passwd">Conferma Password</label>
             <input type="password" id="conf_passwd" name="conf_passwd" required autocomplete="new-password">
         </p>

        <input type="submit" id="registrati" class="end_but" value="Registrati">
        <a class="end_but" href="login_form.php">Sei già registrato?</a>
    </form>
    </div>
    <?php
    require("./footer.php");
?>
     <script src="../js/validate.js"></script>
</body>
</html>