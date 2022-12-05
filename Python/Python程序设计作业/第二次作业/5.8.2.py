# 请输入字符串：The quick brown fox jumps over the lazy dog.
# 其中的单次总数是：9个
str_1 = input("请输入字符串：")
n = 1
if n < len(str_1):
    n = n+1
    for i in str_1:
        m = str_1.count(' ')
print("其中的单词总数是：{}个".format(m+1))
