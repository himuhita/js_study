<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "hita1717", "test");

$result = $conn->query("SELECT * FROM peoples");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
  if ($outp != "") {$outp .= ",";}
  $outp .= '{"ID":"'  . $rs["id"] . '",';
    $outp .= '"Name":"'   . $rs["name"]        . '",';
  $outp .= '"City":"'   . $rs["city"]        . '",';
  $outp .= '"Country":"'. $rs["country"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>