#!/usr/bin/env python
import pika

credentials = pika.PlainCredentials(username='youssef', password='12345678')

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='10.242.125.55', credentials=credentials))

channel = connection.channel()

channel.queue_declare(queue='Hello')

channel.basic_publish(exchange='', routing_key='Hello', body='Hey!')
print(" [x] Sent 'Hello World!' ")
connection.close()		  
		
