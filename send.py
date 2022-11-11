#!/usr/bin/env python3
import pika

credentials = pika.PlainCredentials(username='admin', password='admin')
param = pika.ConnectionParameters(host='10.242.125.55', port='5672', credentials=credentials)

connection = pika.BlockingConnection(param)

channel = connection.channel()

channel.queue_declare(queue='Hello')

channel.basic_publish(exchange='', routing_key='Hello', body='Hello World Disha!!!')
print(" [x] Sent 'Hello World disha!' ")
connection.close()
