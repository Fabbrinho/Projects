<?php
require_once('config.php');

$nome=$connessione->real_escape_string($_REQUEST['nome']);
$cognome=$connessione->real_escape_string($_REQUEST['cognome']);
$data=$connessione->real_escape_string($_REQUEST['data']);
$cod=$connessione->real_escape_string($_REQUEST['codFiscale']);
$cell=$connessione->real_escape_string($_REQUEST['cell']);
$email=$connessione->real_escape_string($_REQUEST['email']);
$passwd=$connessione->real_escape_string($_REQUEST['passwd']);


$passwd_hashed=password_hash($passwd,PASSWORD_DEFAULT);
$sql="INSERT INTO utente(nome,cognome,data,codFiscale,cellulare,email,password) VALUES
('$nome','$cognome','$data','$cod','$cell','$email','$passwd_hashed');";


if($connessione->query($sql)===false)
    echo ("utente non registrato \n"). $connessione->error;
else
    header("location: login_form.php");
    

$connessione->close();
?>