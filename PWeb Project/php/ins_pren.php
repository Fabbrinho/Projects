<?php
require_once("config.php");
if(session_status()==PHP_SESSION_NONE)
    session_start();

if(!isset($_SESSION["loggato"]) || !$_SESSION["loggato"]){
    header("location: ./login_form.php");
    exit;
}
$us_id=$_SESSION['id'];
$arrivo=$_COOKIE['data_arrivo'];
$partenza=$_COOKIE['data_partenza'];
$adulti=$_COOKIE['n_adulti']; 
$bambini=$_COOKIE['n_bambini'];

$jsonData = file_get_contents('php://input'); // Ottieni i dati inviati
$data = json_decode($jsonData); // Decodifica i dati JSON

$rm_id=$data->id; 
$prezzo=$data->prezzo;



$sql="INSERT INTO bk_room (us_id,rm_id,dataInizioPren,dataFinePren,prezzo) VALUES(
    '$us_id','$rm_id','$arrivo','$partenza','$prezzo');";
if($connessione->query($sql)){
    echo json_encode(true);
}
else
    echo json_encode(false);
$connessione->close();
?>
