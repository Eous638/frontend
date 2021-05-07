# %%
from math import pi, sqrt, factorial
#prvi
# %%
r = 12.32506
obim = 2.0 *r*pi
print('obim je: ', obim)

#drugi
#%%
x1 =int(input('x1: '))
x2 =int(input('x2: '))
y1=int(input('y1: '))
y2=int(input('y2: '))

dist = sqrt((x1*x2)**2 + (y1*y2)**2)
print('distanca je: ', dist)
#%%
fact = factorial(200)
def zeroes(num):
    return str(num).count('0')
print(zeroes(fact))
# %%
