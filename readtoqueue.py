#!/usr/bin/env python
import pika, sys, os 

def main():
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()
    
    channel.queue_declare(queue='Hello')
    
    def callback(ch, method, properties, body):
        print(" [x] Received %r" % body)
    channel.basic_consume(queue='Hello', on_message_callback=callback, auto_ack=True)
    
<<<<<<< HEAD
    print(' [*] Waiting for messages. To exit Press CTRL+C')
=======
    print(' [*] Waiting for messages. To exit Press CTRL + C')
>>>>>>> remotes/origin/master
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
