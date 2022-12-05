# Factorial

# Recursion

n = int(input("Please enter the number of Factorial:"))


def recurison_fact(n):
    if (n > 0):
        if (n == 1):
            return 1
        else:
            return n*recurison_fact(n-1)
    else:
        return -1


print(n, " != ", recurison_fact(n), " with recursion.")

# No Recursion


def norecursion_fact(n):
    if (n > 0):
        result = 1
        for i in range(1, n+1):
            result *= i
        return result
    else:
        return -1


print(n, " != ", norecursion_fact(n), " with no recursion.")
