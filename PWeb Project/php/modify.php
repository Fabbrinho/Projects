    
<?php
    require_once("./config.php");
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
      }
          if(!isset($_SESSION["loggato"]) || !$_SESSION["loggato"]){
          header("location: ./login_form.php");
          exit;
          }


        $arrivo=$connessione->real_escape_string($_REQUEST['data_arrivo']);
        $partenza=$connessione->real_escape_string($_REQUEST['data_partenza']);
        $adulti=$connessione->real_escape_string($_REQUEST['adulti']);
        $bambini=$connessione->real_escape_string($_REQUEST['bambini']);
        $cod=$connessione->real_escape_string($_REQUEST['n_ord']);
        $tipo=$connessione->real_escape_string($_REQUEST['tipo']);
        $persone=$adulti+$bambini;
    
        $sql="SELECT R.Id,R.prezzo
            FROM room R 
            WHERE (R.Tipo='$tipo') AND (R.N_bed='$persone' || R.N_bed='$persone'+1) AND R.Id NOT IN (SELECT R.Id
                  FROM room R INNER JOIN bk_room BR ON BR.rm_id=R.Id
                  WHERE (BR.dataInizioPren<= '$arrivo' && BR.dataFinePren>='$partenza') || (BR.dataInizioPren>='$arrivo' && BR.dataFinePren<='$partenza') ||
                  	(BR.dataInizioPren>='$arrivo' && BR.dataInizioPren<='$partenza') || (BR.dataFinePren>='$arrivo' && BR.dataFinePren<='$partenza')); ";
        
        if($result=$connessione->query($sql)){
            $data=[];
            if($result->num_rows>0){
                $data=$result->fetch_array(MYSQLI_ASSOC);
                $id=$data['Id'];
                $prezzoNotte=$data['prezzo']*$adulti + $data['prezzo']*$bambini/2;

                $datep=new DateTime($partenza);
                $datea=new DateTime($arrivo);
                $giorni=date_diff($datep,$datea);
                $giorni=$giorni->format('%a');
                $prezzo=$prezzoNotte*$giorni;
                $sql_mod="UPDATE bk_room BR SET BR.dataInizioPren='$arrivo',
                BR.dataFinePren='$partenza',BR.rm_id='$id',BR.prezzo='$prezzo'
                WHERE BR.codicePrenotazione='$cod'";
                if($connessione->query($sql_mod)){
                    echo true;
                }
                else
                    echo false;

            }else
            {
                echo "not_found";
            }
        }else{
            echo json_encode("Errore sulla query");
        }
    $connessione->close();
        
?>


