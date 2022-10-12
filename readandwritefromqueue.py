#!/usr/bin/env python
import pika

credentials = pika.PlainCredentials('Youssef', password='abcd')
parameters = pika.ConnectionParameters('192.168.232.128', credentials=crendetials)

connection = pika.BlockingConnection(parameters)

channel = connection.channel()

channel.queue_declare(queue='Hello Disha')

channel.basic_publish(exchange='',
		  routing_key='Hello Disha',
		  body='Hey World!')
print(" Youssef Sent'Hello World!'")
connection.close()		  
		
