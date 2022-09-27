import math


def isTriangle(x, y, z):
    if(x+y > x or x+z > y or y+z > x):
        print("This is a triangle!")
        return True
    print("This is not a triangle!")
    return False


def Perimeter(x, y, z):
    return x+y+z


def Area(x, y, z):
    return 1/2*math.sqrt(x ** 2*z*2-((x ** 2+z ** 2-y ** 2)/2) ** 2)


print("Please enter x for a triangle: ")
x = float(input())
print("Please enter y for a triangle: ")
y = float(input())
print("Please enter z for a triangle: ")
z = float(input())
if(isTriangle(x, y, z)):
    print(Perimeter(x, y, z))
    print(Area(x, y, z))
else:
    isTriangle(x, y, z)
