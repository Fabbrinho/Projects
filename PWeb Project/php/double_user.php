<?php
require_once('config.php');

$jsonData = file_get_contents('php://input'); // Ottieni i dati inviati
$data = json_decode($jsonData); // Decodifica i dati JSON


$email=$data->email;
$cod=$data->cod;

$sql_valid="SELECT * FROM utente WHERE (codFiscale='$cod') OR (email='$email')";

if($result=$connessione->query($sql_valid)){
    if($result->num_rows!=0){
        echo json_encode(false);
    }
    else 
        echo json_encode(true);
}

$connessione->close();
?>
