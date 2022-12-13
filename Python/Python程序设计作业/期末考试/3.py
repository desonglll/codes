import math
r = input('请输入半径:')
r = float(r)
v = 4 / 3 * math.pi * pow(r, 3) 
s = 4 * math.pi * pow(r, 2)
print("体积是:", v)
print("表面积是:", s)