import math


x = int(input())
if(x >= 0):
    y = (pow(x, 2)-3*x)/(x+1)+2*math.pi+math.sin(x)
else:
    y = math.log(math.e, -5*x)+6*math.sqrt(-x+math.e**4)-(x+1)**3

print(y)
