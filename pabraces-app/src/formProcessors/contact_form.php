<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

//////////////////////
// Send email
//////////////////////
$your_email = 'contact@profajayibraces.org';
$from = $_POST['email'];
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$user_message = $_POST['msg'];
$message = "New message from Contact Form - profajayibraces.org \n \n  From: $from\n Subject: $subject\n Name: $name\n Message: $user_message\n ";
$message = (!empty($message)) ? wordwrap($message, 70) : '';
if(mail($your_email, $subject, $message, $from)) {
  echo json_encode(["sent" => 1, ]);
} else {
    echo json_encode(["sent" => 0, ]);
}
;


//////////////////////
// Send to database
//////////////////////
// $conn = mysqli_connect("profajayibraces.org", "profajay_profajay", "z5@N-4AjI2fz4Y", "profajay_subscriptionform");
// $query = "insert into userSubscription (email)
// values(
// '" . $_POST['email'] . "'
// )";
// $result = @mysqli_query($conn, $query);
// if ($result) {
//     echo json_encode(["sent" => 1, ]);
// } else {
//     echo json_encode(["sent" => 0, ]);
// }


?>