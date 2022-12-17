#!/usr/bin/env python3
import pika, sys, os 

def main():
    credentials = pika.PlainCredentials(username='admin', password='admin')
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='10.242.36.102', port='5672', credentials=credentials))
    
    channel = connection.channel()
    
    channel.queue_declare(queue='Hello')
    
    def callback(ch, method, properties, body):
        print(" [x] Received %r" % body)
        
    channel.basic_consume(queue='Hello', on_message_callback=callback, auto_ack=True)
    
    print(' [*] Waiting for messages. To exit Press CTRL + C')
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
    	    
