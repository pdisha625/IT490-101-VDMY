<?php

require_once('path.inc');
require_once('get_host_info.inc');
require_once('rabbitMQLib.inc');

$client = new RabbitMQClient('testRabbitMQ.ini', 'testServer');

$username = ($_POST['username']);
$password = ($_POST['password']);
$confirmPassword = ($_POST['confirmPassword']);

$missingError = '';
$valError = ''; 

if (isset($_POST['login'])) {
        if ((empty($username)) or (empty($email)) or (empty($firstname)) or (empty($lastname)) or (empty($password))) {
                $missingError = "Oops! You are missing some fields."; 

                if ($confirmPassword != $password) {
                        $valError = "Oops! Password did not match.";

                }

                require 'registration.html';

        } else {
                 
                $request = array();
                $request['type'] = "login";
                $request['username'] = $username;
                $request['password'] = $password;
                $request['message'] = "'{$username}' has been registered";

                $response = $client->send_request($request);

                require 'login.html';

        }
} 



?>
