
<!DOCTYPE html>
<html lang="it-IT">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/header_page.css">
    <link rel="stylesheet" type="text/css" href="../css/general_class.css">
    <link rel="shortcut icon" href="#" />
    <title>Login</title>
</head>
<body>
    <?php
    require("./header_page.php");
?>
    <div id="reg_form_cont">
    <form name="login_form" id="login_form" onsubmit="return validate_user('login_form')" method="POST" >
        <p>
            <label for="email" >Email</label>
            <input type="text" name="email" id="email" placeholder="luca.rossi@gmail.com" required autocomplete="username">
        </p>
        <p>
            <label for="pswd">Password</label>
            <input type="password" id="pswd" name="pswd" required autocomplete="current-password">
        </p>
        <button type="submit" class="end_but">Accedi</button>
        Non hai ancora un account?<a class="end_but" href="reg_form.php">Registrati</a>
    </form>
    </div>
    <?php
    require("./footer.php");
?>
<script src="../js/validate.js"></script>
</body>