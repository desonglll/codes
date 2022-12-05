# Fibonacei

import re


n = int(input("Please enter Fibonacei number:"))


def recursion_Fibonacei(n):
    if (n == 1 or n == 2):
        return 1
    else:
        return recursion_Fibonacei(n-1)+recursion_Fibonacei(n-2)


def norecursion_Fibonacei(n):
    first = 1
    second = 1
    result = 0
    if n == 1 or n == 2:
        return 1
    for i in range(0, n-2):
        result = first+second
        first = second
        second = result
    return result


print("With recursion:", end="\n")

for i in range(1, n+1):
    if ((i-1) % 10 == 0):
        print("")
    print("{:5d}".format(recursion_Fibonacei(i)), end="\t",)

print()

print("With norecursion:", end="\n")

for i in range(1, n+1):
    if ((i-1) % 10 == 0):
        print("")
    print("{:5d}".format(norecursion_Fibonacei(i)), end="\t",)

print()
