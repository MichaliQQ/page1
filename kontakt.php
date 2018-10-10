<?php

$temat = $_POST['subject'];

// Tworzymy zmienną dla adresu email
$email = $_POST['email'];

// Tworzymy zmienną dla wiadomości
$message = $_POST['message'];

// Podajesz adres email z którego ma być wysłana wiadomość
$odkogo = "kamil.michalik97@gmail.com";

// Podajesz adres email na który chcesz otrzymać wiadomość
$dokogo = "kamil.michalik97@gmail.com";

$tytul = "formularz kontaktowy - portfolio";
// Przygotowujesz treść wiadomości
$wiadomosc = "";
$wiadomosc .= "Temat: " . $temat . "\n";
$wiadomosc .= "Email: " . $email . "\n";
$wiadomosc .= "Wiadomość: " . $message . "\n";

// Wysyłamy wiadomość
$sukces = mail($dokogo, $tytul, $wiadomosc, "Od: <$odkogo>");

// Przekierowywujemy na potwierdzenie
if ($sukces){
  print "<script type=\"text/javascript\">window.alert('Wiadomosc wyslana!');</script>\
  <meta http-equiv=\"refresh\" content=\"0;URL=index.php\">";
}
else{
  print "<script type=\"text/javascript\">window.alert('Blad podczas wysylania wiadomosci!');</script>\
  <meta http-equiv=\"refresh\" content=\"0;URL=index.php\">";
}
?>
