<?php
    require_once("./config.php");
    if (session_status() == PHP_SESSION_NONE) {
  session_start();
}
    if(!isset($_SESSION["loggato"]) || !$_SESSION["loggato"]){
    header("location: ./login_form.php");
    exit;
}


$data=[];
$data['res']=false;
$codice=$connessione->real_escape_string($_REQUEST['n_ord']);
$sql="DELETE FROM bk_room WHERE codicePrenotazione='$codice'";
if($connessione->query($sql)){
    $data['res']=true;
}
echo json_encode($data);
$connessione->close();
?>