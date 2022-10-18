#!/bin/bash
<<<<<<< HEAD

#stop rabbitmq service 
=======
#stop rabbitmq service 

>>>>>>> 935406e57f36728c98e0f5dcd1e9810978d418bd
if (systemctl -q is-active rabbitmq-server.service)
then 
systemctl stop rabbitmq-server.service

else
#start rabbitmq service
systemctl start rabbitmq-server.service

<<<<<<< HEAD
fi 
=======
fi
>>>>>>> 935406e57f36728c98e0f5dcd1e9810978d418bd
