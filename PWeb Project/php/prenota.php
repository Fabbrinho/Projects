<?php
require_once("config.php");
if (session_status() == PHP_SESSION_NONE) {
    session_start();
  }
if(!isset($_SESSION["loggato"]) || !$_SESSION["loggato"]){
  header("location: ./login_form.php");
  exit;
  }

$arrivo=$_SESSION["data_arrivo"];
$partenza=$_SESSION["data_partenza"];
$adulti=$_SESSION["n_adulti"];
$bambini=$_SESSION["n_bambini"];


setcookie("data_arrivo", $arrivo, 
    ['expires' => time() + 3600,
        'path' => '/',
        'samesite' => 'Strict',
    ]);
setcookie("data_partenza", $partenza,
    ['expires' => time() + 3600,
    'path' => '/',
    'samesite' => 'Strict',
    ]);
setcookie("n_adulti", $adulti, 
    ['expires' => time() + 3600,
    'path' => '/',
    'samesite' => 'Strict',
    ]);
setcookie("n_bambini", $bambini, 
    ['expires' => time() + 3600,
    'path' => '/',
    'samesite' => 'Strict',
    ]);

$sql="SELECT *
    FROM (SELECT *
            FROM room R 
            WHERE (R.n_bed='$adulti'+'$bambini' || R.n_bed='$adulti'+'$bambini'+1) AND R.id NOT IN (
                SELECT R.id
                  FROM room R INNER JOIN bk_room BR ON BR.rm_id=R.id
                  WHERE (BR.dataInizioPren<= '$arrivo' && BR.dataFinePren>='$partenza') || (BR.dataInizioPren>='$arrivo' && BR.dataFinePren<='$partenza') ||
                  	(BR.dataInizioPren>='$arrivo' && BR.dataInizioPren<='$partenza') || (BR.dataFinePren>='$arrivo' && BR.dataFinePren<='$partenza'))) as D
    GROUP BY D.tipo,D.prezzo; ";

$data=[];
if($result=$connessione->query($sql)){
    if($result->num_rows==0){
        $connessione->close();
        $data['not_found']=true;
        echo json_encode($data);
    }
    else 
        {
            $datep=new DateTime($partenza);
            $datea=new DateTime($arrivo);
            $giorni=date_diff($datep,$datea);
            $giorni=$giorni->format('%a');
            while($row= $result->fetch_array(MYSQLI_ASSOC)){
                $tmp;
                $tmp['id']=$row['id'];
                $tmp['tipo']=$row['tipo'];
                $tmp['letti']=$row['n_bed'];
                $prezzoAnotte=$row['prezzo']*$adulti+$row['prezzo']*$bambini/2;
                $tmp['prezzo']=$prezzoAnotte*$giorni;
                array_push($data,$tmp);
            }
            $connessione->close();
            echo json_encode($data);
        }
}else {
    $connessione->close();

    $data['connection']=true;
    echo json_encode($data) ;
}

?>