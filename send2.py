#!/usr/bin/env python
import pika


#parameters = pika.URLParameters('amqp://guest:guest@localhost:5672/%2f')
#parameters =  pika.ConnectionParameters(host='localhost')
parameters = pika.URLParameters('amqp://guest:guest@10.242.125.55:5672/%2f')
connection = pika.BlockingConnection(parameters)
channel = connection.channel()

channel.queue_declare(queue='hello')

channel.basic_publish(exchange='', routing_key='hello', body='Hello World!')
print(" [x] Sent 'Hello World!'")
connection.close()
