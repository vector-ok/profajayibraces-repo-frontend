<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$your_email = 'subscription@profajayibraces.org';
$from = 'Subscription Form - profajayibraces.org';
$subject = 'New Subscription';
$email = $_POST['email'];
$message = "$email\n has just subscribed to receive email updates from the Professor Emmanuel Olubusayo Ajayi Orthodontics Advancement Foundation \n ";
$message = (!empty($message)) ? wordwrap($message, 70) : '';
// $result = mail($your_email, $subject, $message, $from);
// if ($result) {
//     echo json_encode(["sent" => 1, ]);
// } else {
//     echo json_encode(["sent" => 0, ]);
// }

// send entry to database (not created yet)
$conn = mysqli_connect("profajayibraces.org", "profajay_dev", "peoaf21*+1", "profajay_publicationform");
$query = "insert into userSubscription (email)
values(
'" . $_POST['email'] . "'
)";
$result = @mysqli_query($conn, $query);
if ($result) {
    echo json_encode(["sent" => 1, ]);
} else {
    echo json_encode(["sent" => 0, ]);
}



//
// ///////////// Send Email ////////////////////
//
//
//
// //////////////////////////
// //Specify default values//
// //////////////////////////
//
// //Your E-mail
// $your_email = 'subscription@profajayibraces.org';
//
// //Default Subject if 'subject' field not specified
// $default_subject = 'New Email Subscription - profajayibraces.org';
//
// // //Message if 'name' field not specified
// // $name_not_specified = 'Please type a valid name';
//
// //Message if 'email' field not specified
// $email_not_specified = 'Please type a valid email address';
//
// // //Message if 'message' field not specified
// // $message_not_specified = 'Please type a vaild message';
//
// //Message if e-mail sent successfully
// $email_was_sent = 'Your subscription was successful. Thank you!';
//
// //Message if e-mail not sent (server not configured)
// $server_not_configured = 'Sorry, an error ocurred!';
//
//
// ///////////////////////////
// //Contact Form Processing//
// ///////////////////////////
// $errors = array();
// if(isset($_POST['email']) {
// 	if(!empty($_POST['email']))
// 		$sender_email = stripslashes(strip_tags(trim($_POST['email'])));
//
//
// 	if(empty($email)) {
// 		$errors[] = $email_not_specified;
//   }
//
// 	$from = 'Subscription Form - profajayibraces.org';
//
// 	$subject = 'New Subscription';
//
// 	$email = $_POST['email'];
//
// 	$message = "$email\n has just subscribed to receive email updates from the Professor Emmanuel Olubusayo Ajayi Orthodontics Advancement Foundation \n ";
//
//   $message = (!empty($message)) ? wordwrap($message, 70) : '';
//
// 	//sending message if no errors
// 	if(empty($errors)) {
// 		if (mail($your_email, $subject, $message, $from)) {
// 			// echo $email_was_sent;
// 		} else {
// 			$errors[] = $server_not_configured;
// 			// echo implode('<br>', $errors );
// 		}
// 	} else {
// 		// echo implode('<br>', $errors );
// 	}
// } else {
// 	// if "name" or "message" vars not send ('name' attribute of contact form input fields was changed)
// 	// echo '"name" and "message" were not received by server. Likely, "name" attributes for an input field is missing';
// }
?>
