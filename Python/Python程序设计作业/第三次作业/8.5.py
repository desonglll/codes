s1 = [9, 7, 8, 3, 2, 1, 55, 6]
s2 = ["apple", "pear", "melon", "kiwi"]
s3 = "TheQuickBrownFox"


def fun(s: list):
    print("maximum value is: ", max(s))
    print("minimum value is: ", min(s))
    print("number of elements is:", len(s))


fun(s1)
fun(s2)
fun(s3)
