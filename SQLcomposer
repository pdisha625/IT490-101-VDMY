#!/bin/bash

if(systemctl -q is-active mysql.service)
then
systemctl stop mysql.service

else
systemctl start mysql.service
fi
