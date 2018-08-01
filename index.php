<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Bolder Industries</title>

  <!--  PHP FORM LINKS (delete eventually)
  <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> -->
  <!--  PHP FORM SCRIPTS (delete eventually)
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="php/phpform/form.js"></script>-->

  <!-- CSS  -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/styles.css" type="text/css" rel="stylesheet" media="screen,projection"/>
</head>
<body>

  <?php
  // include header
  include 'php/header.php';

  // set default page to home
  $current_page = 'template';

  // check what page
  if(array_key_exists('page',$_GET)) {
    $current_page = $_GET['page'];
  }

  // switch pages
  switch ($current_page) {
    case 'template':
      include 'php/template.php';
      break;
    case 'home':
      include 'php/home.php';
      break;
    case 'content':
      include 'php/content.php';
      break;
    case 'form':
      include 'php/form2/structure.php';
      break;
    default:
      include 'php/home.php';
      break;
  }

  // inclue footer & contact form popup
  include 'php/footer.php';
  include 'php/modals.php';
   ?>

  <!--  Scripts-->
  <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script src="js/bin/materialize.min.js"></script>
  <script src="js/bin/init.js"></script>

  </body>
</html>
