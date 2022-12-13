a = [2,3,5,6,8]
n=int(input("please enter a number:"))
if n in a:
    print("x in the list.")
else:
    a.append(n)
    print(a[4:])