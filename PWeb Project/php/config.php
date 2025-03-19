<?php
$database="fabbri_616288";
$user="root";
$pswd="";
$host="127.0.0.1";

$connessione=new mysqli($host,$user,$pswd,$database);

if($connessione=== false){
    die("Impossibile Connettersi");
}
 
?>