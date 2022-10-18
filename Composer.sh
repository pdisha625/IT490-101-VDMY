#!/bin/bash
ssh -t -p 22 youssef@10.242.36.102 
./RabbitmqScript.sh

ssh -t -p 22 mohamed11@10.242.192.211
./sqlcomposer.sh 

ssh -t -p 22 victoryajayi@10.242.49.24
./apachecomposer.sh

