#!/usr/bin/env python
import pika

credentials = pika.PlainCredentials(username='admin', password='admin')

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='10.242.36.102', credentials=credentials))

channel = connection.channel()

channel.queue_declare(queue='Hello')

channel.basic_publish(exchange='', routing_key='Hello', body='Hey!')
print(" [x] Sent 'Hello World!' ")
connection.close()		  
		
