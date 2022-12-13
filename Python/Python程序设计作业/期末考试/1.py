import math

def prime_number(n):
    if n == 0 or n == 1:
        return False
    for i in range(2, n-1):
        if n % i == 0:
            return False
    return True

n = int(input("Please enter the number:"))
if prime_number(n):
    print(n,"is a prime numebr")
else:
    print(n,"is not a prime number")