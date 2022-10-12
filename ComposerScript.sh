#!/bin/bash

#stop rabbitmq service 
if (systemctl -q is-active rabbitmq-server.service)
then 
systemctl stop rabbitmq-server.service

else
#start rabbitmq service
systemctl start rabbitmq-server.service

fi 
