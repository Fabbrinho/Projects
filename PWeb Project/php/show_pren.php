<?php
require_once("config.php");
if(session_status()==PHP_SESSION_NONE)
    session_start();
if(!isset($_SESSION["loggato"]) || !$_SESSION["loggato"]){
    header("location: ./login_form.php");
    exit;
    }
$id=$_SESSION['id'];

$sql="SELECT R.Tipo,DATE_FORMAT(BR.dataInizioPren,'%d/%m/%y') as dataInizioPren, DATE_FORMAT(BR.dataFinePren,'%d/%m/%y') as dataFinePren,BR.prezzo,BR.codicePrenotazione  FROM bk_room BR INNER JOIN 
room R ON BR.rm_id=R.id WHERE BR.us_id='$id'";

if($result=$connessione->query($sql)){
    if($result->num_rows>0){
        $data=[];
        while($row= $result->fetch_array(MYSQLI_ASSOC)){
            $tmp;
            $tmp['tipo']=$row['Tipo'];
            $tmp['arrivo']=$row['dataInizioPren'];
            $tmp['partenza']=$row['dataFinePren'];
            $tmp['codice']=$row['codicePrenotazione'];
            $tmp['prezzo']=$row['prezzo'];
            array_push($data,$tmp);
        }
       echo json_encode($data);
    } else{
        $data['not_found']=true;
        echo json_encode($data);
    }
}else
      echo json_encode( $connessione);
    $connessione->close();

?>