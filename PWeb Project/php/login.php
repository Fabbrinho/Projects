<?php
require_once('config.php');
ini_set( 'session.cookie_httponly', 1 );

if (session_status() == PHP_SESSION_NONE) {
    session_start();
  }
  $jsonData = file_get_contents('php://input'); // Ottieni i dati inviati
    $data = json_decode($jsonData); // Decodifica i dati JSON


$email=$data->email;
$passwd=$data->pswd;

if($_SERVER["REQUEST_METHOD"]==="POST"){
    $sql="SELECT * FROM utente WHERE email= '$email' ";
    $send['res']=false;
    if($result=$connessione->query($sql)){
        if($result->num_rows==1){
            $row=$result->fetch_array(MYSQLI_ASSOC);
            if(password_verify($passwd,$row['password'])){

                $_SESSION['loggato']=true;
                $_SESSION['id']=$row['us_id'];
                $_SESSION["data_arrivo"]="";
                $_SESSION["data_partenza"]="";
                $_SESSION["n_adulti"]="";
                $_SESSION["n_bambini"]=""; 
                $send['res']=true;
                echo json_encode($send);
            }
            else
                echo json_encode($send);

        } else {
            echo json_encode($send);
        } 
}
else{
    echo json_encode($send);
}
$connessione->close();
}
?>