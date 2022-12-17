#!/usr/bin/env python3
import pika

credentials = pika.PlainCredentials(username='guest', password='guest')
param = pika.ConnectionParameters(host='10.242.235.243', port='5672', credentials=credentials)

connection = pika.BlockingConnection(param)

channel = connection.channel()

channel.queue_declare(queue='Hello')

channel.basic_publish(exchange='', routing_key='Hello', body='Hello World Disha!!!')
print(" [x] Sent 'Hello World disha!' ")
connection.close()
