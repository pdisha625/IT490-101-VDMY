#!/bin/bash

ssh -t -p 22 'os95@10.242.125.55' 
sudo python3 readqueue.py
