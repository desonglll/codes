from random import random

# 最大公约数    greatest common divisor
# 辗转相除法（递归）


def gcd(a: int, b: int):
    if b == 0:
        return a
    else:
        return gcd(b, a % b)

# 最小公倍数    lowest common multiple（以最大公约数的结果为基础）


def lcm(a: int, b: int):
    return int((a * b) / gcd(a, b))


x = int(random()*100)
y = int(random()*100)
print("GCD is: ", gcd(x, y), "LCM is: ", lcm(x, y))
