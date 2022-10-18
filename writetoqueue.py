#!/usr/bin/env python
import pika

credentials = pika.PlainCredentials(username='admin', password='abcd')

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='localhost', credentials=crendetials))

channel = connection.channel()

channel.queue_declare(queue='Hello')

channel.basic_publish(exchange='',
		  routing_key='Hello',
		  body='Hey World!')
print(" Hey World ")
connection.close()		  
		
