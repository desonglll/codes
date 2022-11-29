import os
f = open('./data.dat','w+b')
f.seek(0)   #定位到开始的位置
f.write(b'Hello')
f.write(b'World')
f.seek(-5,os.SEEK_END)  #定位到结束位置的倒数第五个位置
b = f.read(5)
print(b)