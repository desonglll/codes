num=int(input("请输入购买的商品数："))
if num<100:
  total=25*num
elif num<500:
  total=25*num*0.9
else:
  total=25*num*0.8-1000
print("应付金额为："+str(round(total,1)))