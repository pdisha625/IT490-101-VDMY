#!/usr/bin/sh
ssh -t -p 22 os95@10.242.125.55 'bash -s' sudo systemctl stop rabbitmq-server.service 
