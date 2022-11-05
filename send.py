#!/usr/bin/env python3
import pika

credentials = pika.PlainCredentials(username='guest', password='guest')

connection = pika.BlockingConnection(
    pika.ConnectionParameters(host='10.242.125.55', port='5672', credentials=credentials))

channel = connection.channel()

channel.queue_declare(queue='Hello')

channel.basic_publish(exchange='', routing_key='Hello', body='Hey!')
print(" [x] Sent 'Hello World!' ")
connection.close()
