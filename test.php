
<html>
<?php

if ($c=OCILogon("ora_f8s0b", "a40642100", "dbhost.ugrad.cs.ubc.ca:1522/ug")) {
  echo "Successfully connected to Oracle.\n";
  OCILogoff($c);
} else {
  $err = OCIError();
  echo "Oracle Connect Error " . $err['message'];
}

?>
</html>