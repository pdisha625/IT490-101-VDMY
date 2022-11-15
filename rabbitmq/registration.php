<?php

require_once('path.inc');
require_once('get_host_info.inc');
require_once('rabbitMQLib.inc');

$client = new RabbitMQClient('testRabbitMQ.ini', 'testServer');

$firstname = ($_POST['firstname']);
$lastname = ($_POST['lastname']);
$email = ($_POST['email']);
$username = ($_POST['username']);
$password = ($_POST['password']);
$confirmPassword = ($_POST['confirmPassword']);

$missingError = '';
$valError = ''; 

if (isset($_POST['sign-up'])) {
        if ((empty($username)) or (empty($email)) or (empty($firstname)) or (empty($lastname)) or (empty($password))) {
                $missingError = "Oops! You are missing some fields."; 

                if ($confirmPassword != $password) {
                        $valError = "Oops! Password did not match.";

                }

                require 'sign-up.html';

        } else {
                 
                $request = array();
                $request['type'] = "sign-up";
                $request['firstname'] = $firstname;
                $request['lastname'] = $lastname;
                $request['email'] = $email;
                $request['username'] = $username;
                $request['password'] = $password;
                $request['message'] = "'{$username}' has been registered";

                $response = $client->send_request($request);

                require 'login.html';

        }
} 



?>
