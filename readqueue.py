#!/usr/bin/env python3
import pika, sys, os 

 credentials = pika.PlainCredentials(username='guest', password='guest')
 connection = pika.BlockingConnection(
 pika.ConnectionParameters(host='10.242.36.102', credentials=credentials))

channel = connection.channel()

channel.queue_declare(queue='Hello')

channel.basic_publish(exchange='',
          routing_key='Hello',
          body='Hey World!')
print(" Hey World ")
connection.close()
