---
title: Chapter3
date: 2022/10/27/ 16:53:52
description: 
---

- [第三次作业-第八章上机](#第三次作业-第八章上机)
  - [2 求阶乘](#2-求阶乘)
    - [题目2](#题目2)
    - [代码2](#代码2)
  - [3 求斐波那契数列](#3-求斐波那契数列)
    - [题目3](#题目3)
    - [代码3](#代码3)
  - [4 可变参数函数](#4-可变参数函数)
    - [题目4](#题目4)
    - [代码4](#代码4)
  - [5 序列最大最小值以及元素个数](#5-序列最大最小值以及元素个数)
    - [题目5](#题目5)
    - [代码5](#代码5)

## 第三次作业-第八章上机

![alt](./images/Screenshot%202022-10-27%20at%2016.54.40.png)

### 2 求阶乘

#### 题目2

编写程序,定义一个求阶乘的两数 fact(n),并编写测试代码，要求输入整数 n(n0)。
运行效果参见图8-4。请分别使用递归和非递归方式实现。

#### 代码2

```py
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

```

### 3 求斐波那契数列

#### 题目3

编写程序，定义一个求 Fibonacei(斐波那契）数列的函数 fib(n),并编写测试代码，输出前 20 项(每项宽度5个字符位置，右对齐)，每行输出 10个。运行效果参见图8-5。请分别使用递归和非递归方式实现。

#### 代码3

```py
# Fibonacei

import re


n = int(input("Please enter Fibonacei number:"))


def recursion_Fibonacei(n):
    if (n == 1 or n == 2):
        return 1
    else:
        return recursion_Fibonacei(n-1)+recursion_Fibonacei(n-2)


def norecursion_Fibonacei(n):
    first = 1
    second = 1
    result = 0
    if n == 1 or n == 2:
        return 1
    for i in range(0, n-2):
        result = first+second
        first = second
        second = result
    return result


print("With recursion:", end="\n")

for i in range(1, n+1):
    if ((i-1) % 10 == 0):
        print("")
    print("{:5d}".format(recursion_Fibonacei(i)), end="\t",)

print()

print("With norecursion:", end="\n")

for i in range(1, n+1):
    if ((i-1) % 10 == 0):
        print("")
    print("{:5d}".format(norecursion_Fibonacei(i)), end="\t",)

print()
```

### 4 可变参数函数

#### 题目4

编写程序,利用可变参数定义一个求任意个数数值的最小值的函数 min_n(a, b,*c),并编写测试代码。例如，对于“print(min_n(8，2））”以及“print(min_n(16, 1， 7，15))”的测试代码，程序运行结果如图8-6 所示。

#### 代码4

```py
def min_n(*n):
    print("minimum value is: ", min(n))


min_n(8, 2)
min_n(16, 1, 7, 4)

```

### 5 序列最大最小值以及元素个数

#### 题目5

编写程序，利用元组作为函数的返回值,求序列类型中的最大值、最小值和元素个数，并编写测试代码，假设测试数据分别为s1=[9,7,8,3,2,1,55,6]、s2= [" apple"，" pear"，"melon","kiwi"]和 s3="TheQuick BrownFox"。运行效果参见图 8-7。

#### 代码5

```py
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
```
