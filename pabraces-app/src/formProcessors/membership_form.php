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
$your_email = 'membership@profajayibraces.org';
$from = 'Membership Form - www.profajayibraces.org';
$subject = 'New Submission on Membership Form';
$title = $_POST['title'];
$gender = $_POST['sex'];
$lastName = $_POST['lastName'];
$firstName = $_POST['firstName'];
$otherNames = $_POST['otherNames'];
$doBirth = $_POST['doBirth'];
$age = $_POST['age'];
$occupation = $_POST['occupation'];
$addressWork = $_POST['addressWork'];
$addressHome = $_POST['addressHome'];
$phone = $_POST['phone'];
$phoneWhatsapp = $_POST['phoneWhatsapp'];
$email = $_POST['email'];
$membershipType = $_POST['membershipType'];
$checkboxAdmin = $_POST['checkboxAdmin'];
$checkboxFinance = $_POST['checkboxFinance'];
$checkboxSponsor = $_POST['checkboxSponsor'];
$checkboxPublicity = $_POST['checkboxPublicity'];
$checkboxOutreach = $_POST['checkboxOutreach'];
$otherSpecify = $_POST['otherSpecify'];
$sign = $_POST['sign'];
$formDate = $_POST['formDate'];

$areaOfSupport = " \n $checkboxAdmin\n $checkboxFinance\n $checkboxSponsor\n $checkboxPublicity\n $checkboxOutreach\n  $otherSpecify\n";
$handleEmptyLines = preg_replace("/(^[\r\n]*|[\r\n] +)[\s\t]*[\r\n]+/", "\n", $areaOfSupport);

$message = "New submission on Membership Form - profajayibraces.org \n \n  From: $from\n Subject: $subject\n \n Title: $title\n \n Gender: $gender\n \n
Last Name: $lastName\n First Name: $firstName\n Other Names: $otherNames\n \n Date of birth: $doBirth\n \n Age: $age\n \n Occupation: $occupation\n \n Work Address: $addressWork\n Home Address: $addressHome\n \n Phone Number: $phone\n Whatsapp Number: $phoneWhatsapp\n \n Email address: $email\n \n Type of Membership: $membershipType\n \n Area(s) of Support: $handleEmptyLines\n \n Signature: $sign\n \n Date of submission: $formDate ";
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