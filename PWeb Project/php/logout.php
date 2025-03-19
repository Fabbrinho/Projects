<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
  }
  if(!isset($_SESSION["loggato"]) || !$_SESSION["loggato"]){
    header("location: ./login_form.php");
    exit;
    }
  
session_unset();
session_destroy();
header("location: ../index.php");
exit;
?>
