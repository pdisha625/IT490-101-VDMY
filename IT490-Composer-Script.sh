#!/bin/bash
echo "Working..."
echo "Sening to Youssef's device"
ssh -t -p 22 youssef@192.168.232.12 
echo "abcd"
sudo systemctl status apache2
sudo systemctl start apache2
sudo systemctl status rabbitmq-server
sudo systemctl start rabbitmq-server
sudo systemctl status mysql
sudo systemctl start mysql
