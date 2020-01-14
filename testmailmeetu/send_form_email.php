<?php
// Contact subject
$subject =enquiry; 

// Details
$Name=$_POST['name'];
$emailid=$_POST['email'];
$phone=$_POST['mobile'];
$allmessage=$_POST['message'];
$subjects=$_POST['subjects'];
$message="Hi, \n My Name Is:".$Name."\n My emailid No:".$emailid."\n  My phone no is:".$phone."\n  My message is:".$allmessage."\n  My subjects are:".$subjects;


// Mail of sender
$email=$_POST['email']; 
// From 
$header ='From: '.$email."\r\n";

// Enter your email address
$to ='mittu940974@gmail.com,sanjay21121973jain@gmail.com';

$send_contact=mail($to,$subject,$message,"From:sanjay@sanjaywebdesigner.com");
$send_contact1=mail($email,$subject,$message,"From:sanjay@sanjaywebdesigner.com");
if($send_contact){
header('Location: http://www.sanjaywebdesigner.com');
exit();
}
else {
echo "ERROR";
}
?>

 

 

 


 

 

 

