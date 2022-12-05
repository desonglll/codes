flag = False
print("Please enter N for calculate and press Enter: ")
n = int(input())
sum = 0
for i in range(1, 2*n):
    if(i % 2 != 0 and flag == False):
        sum += i
        # print("+", i, end='')
        flag = True
    elif(i % 2 != 0 and flag == True):
        sum -= i
        flag = False
        # print("-", i, end='')
print("Sum is: ", sum)
