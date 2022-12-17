#!/usr/bin/php
<?php
require_once('path.inc');
require_once('get_host_info.inc');
require_once('rabbitMQLib.inc');

$client = new RabbitMQClient("testRabbitMQ.ini", 'testServer');
if(isset($argv[1])){
	$msg = $argv[1];
}
else{
	$msg = "test message";
}



$request = array();
$request['type'] = "login";
$request['username'] = "admin";
$request['password'] = "admin";
$request['message'] = $msg;
$response = $client->send_request($request);

echo "client received response: " . PHP_EOL;
print_r($response);
echo "\n\n";

echo $argv[0] . " END".PHP_EOL;
?>
