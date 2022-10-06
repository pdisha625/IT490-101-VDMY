import Queue #


queue = []
queue.append("data")
queue.append("data 2")

print(queue)
queue.pop(0)
print(queue)

Class Queue:

	def _init_(self):
            self.queue = []
        def enqueue(self, item):
            self.queue.append(item)
        def dequeue(self):
            if len(self.queue) < 1:
            	return None
            return self.queue.pop(0)
        def size(self):
            return len(self.queue)
       
