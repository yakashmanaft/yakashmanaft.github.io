<?php
// if( isset($_POST['userName']) && isset($_POST['userEmail']) && isset($_POST['userPhone']) && isset($_POST['userMessage'])){
// 	$n = $_POST['userName']; // HINT: use preg_replace() to filter the data
//     $e = $_POST['userEmail'];
//     $p = $_POST['userPhone'];
// 	$m = nl2br($_POST['userMessage']);
// 	$to = "anfalov.s.v@yandex.ru";	
// 	$from = $e;
// 	$subject = 'Заявка с Camini-vent.ru';
// 	$message = '<b>Name:</b> '.$n.' <br><b>Email:</b> '.$e.' <br><b>Phone:</b> '.$p.' <br><p>'.$m.'</p>';
// 	$headers = "From: $from\n";
// 	$headers .= "MIME-Version: 1.0\n";
// 	$headers .= "Content-type: text/html; charset=utf-8\n";
// 	if( mail($to, $subject, $message, $headers) ){
// 		echo "success";
// 	} else {
// 		echo "The server failed to send the message. Please try again later.";
// 	}
// }

	if (isset($_POST['name'])) {$phone = $_POST['phone'];}
	if (isset($_POST['phone'])) {$name = $_POST['name'];}
	if (isset($_POST['email'])) {$email = $_POST['email'];}

	$myaddres  = "ya.kashmanaft@yandex.ru";

	$mes = "Тема: Тест запроса обратного звонка!\nИмя: $name\nТелефон: $phone\nПочта: $email";

	$sub='Тест запроса'; // subject
	$email='Тест запроса обратного звонка'; // от кого
	$send = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

	ini_set('short_open_tag', 'On');
	header('Refresh: 3; URL=index.html');
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="refresh" content="3; url=index.html">
		<title>Спасибо! Мы свяжемся с вами!</title>
		<meta name="generator">
		<script type="text/javascript">
		setTimeout('location.replace("/index.html")', 3000);
		/*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
		</script> 
	</head>
	<body>
		<h1 style="margin: 0 auto;">Тест успешный! Мы свяжемся с вами!</h1>
	</body>
</html>