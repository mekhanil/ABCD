import numpy as np

a = np.array([1,2,3,1,2,1,1,1,3,2,2,1])
counts = np.bincount(a)
print (np.argmax(counts))

