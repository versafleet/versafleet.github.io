<?php
	header('Content-type: application/json');
	/*$status = array(
		'type'=>'success',
		'message'=>'Email sent!'
	);*/
	
	
		
    $name = $_POST['name']; 
    $email = $_POST['email']; 
	$cellphone = $_POST['cellphone']; 
    $company = $_POST['company']; 
    $message = $_POST['message']; 

    $email_from = $email;
    $email_to = "jan.donyada@sypherlabs.com";
	$subject = "Business Enquiry";

    $body = "Name: " . $name . "\n\n" . "Email: " . $email . "\n\n" . "Cell Phone: " . $cellphone . "\n\n" . "Company: " . $company . "Message: " . $message;

    /*$success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');*/
	
	if ($_POST['falsefield'] == null){
	
		mail($email_to, $subject, $body, "From: <".$email_from.">");
	
		/*echo json_encode($status);*/
		header("Location:index.html#result");
	
	}else{
		
		echo json_encode("false");
   		die; 
		
	}