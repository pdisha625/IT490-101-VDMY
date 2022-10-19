#!/usr/bin/env python3
import pika, sys, os 

<<<<<<< HEAD
def main():
    credentials = pika.PlainCredentials(username='youssef', password='abcd')
    connection = pika.BlockingConnection(
    	pika.ConnectionParameters(host='10.242.125.55', credentials=credentials))
    channel = connection.channel()
    
    channel.queue_declare(queue='Hello')
    
    def callback(ch, method, properties, body):
        print(" [x] Received %r" % body)
    channel.basic_consume(queue='Hello', on_message_callback=callback, auto_ack=True)
    
    print(' ready... ')
    channel.start_consuming()
    
if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
    	print('Interrupted')
    	try:
    	    sys.exit(0)
    	except SystemExit:
    	    os._exit(0)
    	    
=======
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
>>>>>>> remotes/origin/master
