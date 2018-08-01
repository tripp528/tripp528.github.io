<?php

if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = "Test Email";
  $mailFrom = $_POST['email'];
  $message = $_POST['message'];

  $mailTo = "jgordo17@uvm.edu";
  $headers = "From: " . $mailFrom;
  $txt = "You have recieved an email from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.php?mailsend");


}

 ?>
