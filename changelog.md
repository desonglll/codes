```txt

diff --git a/deploy.sh b/deploy.sh
index fefd5a9..d2ad773 100644
--- a/deploy.sh
+++ b/deploy.sh
@@ -2,6 +2,14 @@
 time=$(date "+%Y-%m-%d %H:%M:%S")
 # echo -e "\nLast updated by **`whoami`** at: "${time} >> "README.md"
 
+# echo git diff
+
+echo -e "\`\`\`txt\n" >> changelog.md
+
+git diff >> changelog.md
+
+echo -e "\n\`\`\`" >> changelog.md
+
 # echo tree directories to tree.md
 
 echo -e "# Directories\n\n\`\`\`shell\n" > "TREE.md"

```
```txt

diff --git a/changelog.md b/changelog.md
index fcd3267..ea3ea7f 100644
--- a/changelog.md
+++ b/changelog.md
@@ -21,3 +21,5 @@ index fefd5a9..d2ad773 100644
  echo -e "# Directories\n\n\`\`\`shell\n" > "TREE.md"
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index f6b3783..fbb9121 100644
--- a/changelog.md
+++ b/changelog.md
@@ -35,3 +35,5 @@ index fcd3267..ea3ea7f 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 9d697e5..2c59082 100644
--- a/changelog.md
+++ b/changelog.md
@@ -49,3 +49,5 @@ index f6b3783..fbb9121 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 3f0d352..ccd718b 100644
--- a/changelog.md
+++ b/changelog.md
@@ -63,3 +63,5 @@ index 9d697e5..2c59082 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 2b44b35..6e4d958 100644
--- a/changelog.md
+++ b/changelog.md
@@ -77,3 +77,5 @@ index 3f0d352..ccd718b 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 3bcd9dd..08569e6 100644
--- a/changelog.md
+++ b/changelog.md
@@ -91,3 +91,5 @@ index 2b44b35..6e4d958 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 99e0cfe..0147954 100644
--- a/changelog.md
+++ b/changelog.md
@@ -105,3 +105,5 @@ index 3bcd9dd..08569e6 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 3d48d55..88fc46e 100644
--- a/changelog.md
+++ b/changelog.md
@@ -119,3 +119,5 @@ index 99e0cfe..0147954 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 3ddcb7d..240331d 100644
--- a/changelog.md
+++ b/changelog.md
@@ -133,3 +133,5 @@ index 3d48d55..88fc46e 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index dac992d..2192785 100644
--- a/changelog.md
+++ b/changelog.md
@@ -147,3 +147,5 @@ index 3ddcb7d..240331d 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 0d9605d..456daf5 100644
--- a/changelog.md
+++ b/changelog.md
@@ -161,3 +161,5 @@ index dac992d..2192785 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 6f97b45..48740c0 100644
--- a/changelog.md
+++ b/changelog.md
@@ -175,3 +175,5 @@ index 0d9605d..456daf5 100644
 +
 
 ```
+```txt
+
diff --git "a/\345\276\256\344\277\241\345\260\217\347\250\213\345\272\217/\345\205\232\345\233\242\345\212\251\346\211\213/\346\212\200\346\234\257\350\256\272\346\226\207/\345\233\276\347\244\272.graffle" "b/\345\276\256\344\277\241\345\260\217\347\250\213\345\272\217/\345\205\232\345\233\242\345\212\251\346\211\213/\346\212\200\346\234\257\350\256\272\346\226\207/\345\233\276\347\244\272.graffle"
index 5e66677..af032c4 100644
Binary files "a/\345\276\256\344\277\241\345\260\217\347\250\213\345\272\217/\345\205\232\345\233\242\345\212\251\346\211\213/\346\212\200\346\234\257\350\256\272\346\226\207/\345\233\276\347\244\272.graffle" and "b/\345\276\256\344\277\241\345\260\217\347\250\213\345\272\217/\345\205\232\345\233\242\345\212\251\346\211\213/\346\212\200\346\234\257\350\256\272\346\226\207/\345\233\276\347\244\272.graffle" differ

```
```txt

diff --git a/changelog.md b/changelog.md
index 5ce1fcd..52e84aa 100644
--- a/changelog.md
+++ b/changelog.md
@@ -192,3 +192,5 @@ index 5e66677..af032c4 100644
 Binary files "a/\345\276\256\344\277\241\345\260\217\347\250\213\345\272\217/\345\205\232\345\233\242\345\212\251\346\211\213/\346\212\200\346\234\257\350\256\272\346\226\207/\345\233\276\347\244\272.graffle" and "b/\345\276\256\344\277\241\345\260\217\347\250\213\345\272\217/\345\205\232\345\233\242\345\212\251\346\211\213/\346\212\200\346\234\257\350\256\272\346\226\207/\345\233\276\347\244\272.graffle" differ
 
 ```
+```txt
+
diff --git "a/\350\275\257\344\273\266\346\265\213\350\257\225\345\237\272\347\241\200/\347\254\254\344\270\211\347\253\240\350\257\276\345\220\216\347\273\203\344\271\240.md" "b/\350\275\257\344\273\266\346\265\213\350\257\225\345\237\272\347\241\200/\347\254\254\344\270\211\347\253\240\350\257\276\345\220\216\347\273\203\344\271\240.md"
deleted file mode 100644
index 2663f5e..0000000
--- "a/\350\275\257\344\273\266\346\265\213\350\257\225\345\237\272\347\241\200/\347\254\254\344\270\211\347\253\240\350\257\276\345\220\216\347\273\203\344\271\240.md"
+++ /dev/null
@@ -1,191 +0,0 @@
----
-
-title: 第三章课后练习
-
----
-
-## 参考
-
-### 逻辑覆盖法
-
-[白盒测试方法-逻辑覆盖法](https://blog.csdn.net/IT_heima/article/details/124943269)
-
-根据覆盖目标的不同，逻辑覆盖可以分为：
-
-语句覆盖：程序里的每条可执行的语句都要至少执行一次。（最弱逻辑覆盖准则）
-
-设计原则:测试用例尽量少，覆盖率尽量高。
-
-判定覆盖：每个判断的真假分支至少执行一次，就是真要至少取一次，假要至少取一次。
-
-条件覆盖：每个判定中的每个条件可能至少满足一次，也就是每个条件至少要取一次真的，再取一次假的。
-
-判定/条件覆盖：要求判断中的每个条件所有可能至少出现一次,并且每个判定本身的判定结果也要出现一次。
-
-组合覆盖：每个判定中条件的各种可能组合至少满足一次。
-
-路径覆盖：把所有可能路径至少都走一遍。
-
-## 题目1
-
-请使用逻辑覆盖法设计测试用例，程序描述如下:
-
-![image](http://cyberdownload.anrunlu.net/20071157-1632968735968.png)
-
-### 语句覆盖
-
-- 语句覆盖（Statement Coverage）又称行覆盖、段覆盖、基本块覆盖，它是最常见的覆盖方式。语句覆盖的目的是测试程序中的代码是否被执行，它只测试代码中的执行语句，这里的执行语句不包括头文件、注释、空行等。语句覆盖在多分支的程序中，只能覆盖某一条路径，使得该路径中的每一个语句至少被执行一次，但不会考虑各种分支组合情况。
-
-> 语句覆盖的原则是覆盖每条语句，针对demo方法，一条测试用例即可完成覆盖
-
-|x|y|z|x>y|z>5|**(x>y)&&(z>5)**|x==10|y>3|**(x==10)\|\|(y>3)**|
-|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
-|x = 10|y = 5|z = 6|true|true|**true**|true|true|**true**|
-
-```C
-
-x = 10;
-y = 5;
-z = 6;
-
-```
-
-### 判定覆盖
-
-- 判定覆盖（Decision Coverage）又称为分支覆盖，其原则是设计足够多的测试用例，在测试过程中保证每个判定至少有一次为真值，有一次为假值。判定覆盖的作用是使真假分支均被执行，虽然判定覆盖比语句覆盖测试能力强，但仍然具有和语句覆盖一样的单一性。
-
-> 语句覆盖并没有考虑if语句为假（false）的情况，显然测试并不充分。分支（判定）覆盖可以解决这个问题
-
-|x|y|z|x>y|z>5|**(x>y)&&(z>5)**|x==10|y>3|**(x==10)\|\|(y>3)**|
-|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
-|x = 10|y = 5|z = 6|true|true|**true**|true|true|**true**|
-|x = 10|y = 4|z = 4|true|false|**false**|true|true|**true**|
-
-```C
-
-//Case 1
-
-x = 10;
-y = 5;
-z = 6;
-
-//Case 2
-
-x = 10;
-y = 5;
-z = 4;
-
-```
-
-### 条件覆盖
-
-- 条件覆盖（Condition Coverage）指的是设计足够多的测试用例，使判定语句中的每个逻辑条件取真值与取假值至少出现一次。
-
-> 条件的每个取值（即a、b、c、d均可以取true或false两个值）。条件覆盖能覆盖到每个条件的每个取值
-
-|x|y|z|x>y|z>5|**(x>y)&&(z>5)**|x==10|y>3|**(x==10)\|\|(y>3)**|
-|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
-|x = 10|y = 2|z = 4|true|false|**false**|true|false|**true**|
-|x = 9|y = 4|z = 6|true|true|**true**|false|true|**true**|
-
-```C
-
-//Case 1
-
-x = 10;
-y = 2;
-z = 4;
-
-//Case 2
-
-x = 9;
-y = 4;
-z = 6;
-
-```
-
-### 判定-条件覆盖
-
-- 判定-条件覆盖（Condition/Decision Coverage）要求设计足够多的测试用例，使得判定语句中所有条件的可能取值至少出现一次，同时，所有判定语句的可能结果也至少出现一次。
-
-> 同时满足判定覆盖和条件覆盖就更好了，而判定条件覆盖就能做到
-
-|x|y|z|x>y|z>5|**(x>y)&&(z>5)**|x==10|y>3|**(x==10)\|\|(y>3)**|
-|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
-|x = 2|y = 3|z = 4|false|false|**false**|false|false|**false**|
-|x = 10|y = 4|z = 6|true|true|**true**|true|true|**true**|
-
-```C
-
-//Case 1
-x = 2;
-y = 3;
-z = 4;
-
-//Case 2
-x = 10;
-y = 4;
-z = 6;
-
-```
-
-### 条件组合覆盖
-
-- 条件组合（Multiple Condition Coverage）指的是设计足够多的测试用例，使判定语句中每个条件的所有可能至少出现一次，并且每个判定语句本身的判定结果也至少出现一次，它与判定-条件覆盖的差别是，条件组合覆盖不是简单地要求每个条件都出现“真”与“假”两种结果，而是要求让这些结果的所有可能组合都至少出现一次。
-
-> 条件组合覆盖考虑的是覆盖每个分支（判定）中每个条件的每种组合
-
-|x|y|z|x>y|z>5|**(x>y)&&(z>5)**|x==10|y>3|**(x==10)\|\|(y>3)**|
-|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
-|x = 9|y = 4|z = 6|true|true|**true**|false|true|**true**|
-|x = 9|y = 2|z = 6|true|true|**true**|false|false|**false**|
-|x = 10|y = 2|z = 4|true|false|**false**|true|false|**true**|
-|x = 2|y = 3|z = 4|false|false|**false**|false|false|**false**|
-
-```C
-
-//Case 1
-x = 9;
-y = 4;
-z = 6;
-
-//Case 2
-x = 9;
-y = 2;
-z = 6;
-
-//Case 3
-x = 10;
-y = 2;
-z = 4;
-
-//Case 4
-x = 2;
-y = 3;
-z = 4;
-
-```
-
-## 题目2
-
-程序代码如下，请使用基本路径测试法设计测试用例。完成题目要求后，截图上传。
-
-![image.png](http://cyberdownload.anrunlu.net/20071157-1633397870843.png)
-
-要求：
-
-（1）画出程序的控制流图
-
-（2）用三种方式计算环形复杂度
-
-（3）根据环形复杂度列出程序的独立路径
-
-（4）设计足够的测试用例，覆盖基本路径集中的每一条独立路径
-
-### 控制流图
-
-### 计算环形复杂度
-
-### 程序的独立路径
-
-### 测试用例

```
```txt

diff --git a/changelog.md b/changelog.md
index 4e207a2..f1ce432 100644
--- a/changelog.md
+++ b/changelog.md
@@ -403,3 +403,5 @@ index 2663f5e..0000000
 -### 测试用例
 
 ```
+```txt
+
diff --git "a/\350\275\257\344\273\266\346\265\213\350\257\225\345\237\272\347\241\200/\347\254\254\344\270\211\347\253\240\350\257\276\345\220\216\347\273\203\344\271\240/\347\254\254\344\270\211\347\253\240\350\257\276\345\220\216\347\273\203\344\271\240.md" "b/\350\275\257\344\273\266\346\265\213\350\257\225\345\237\272\347\241\200/\347\254\254\344\270\211\347\253\240\350\257\276\345\220\216\347\273\203\344\271\240/\347\254\254\344\270\211\347\253\240\350\257\276\345\220\216\347\273\203\344\271\240.md"
index c4082b2..0b3ce38 100644
--- "a/\350\275\257\344\273\266\346\265\213\350\257\225\345\237\272\347\241\200/\347\254\254\344\270\211\347\253\240\350\257\276\345\220\216\347\273\203\344\271\240/\347\254\254\344\270\211\347\253\240\350\257\276\345\220\216\347\273\203\344\271\240.md"
+++ "b/\350\275\257\344\273\266\346\265\213\350\257\225\345\237\272\347\241\200/\347\254\254\344\270\211\347\253\240\350\257\276\345\220\216\347\273\203\344\271\240/\347\254\254\344\270\211\347\253\240\350\257\276\345\220\216\347\273\203\344\271\240.md"
@@ -38,9 +38,9 @@ title: 第三章课后练习
 
 > 语句覆盖的原则是覆盖每条语句，针对demo方法，一条测试用例即可完成覆盖
 
-|x|y|z|x>y|z>5|**(x>y)&&(z>5)**|x==10|y>3|**(x==10)\|\|(y>3)**|
-|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
-|x = 10|y = 5|z = 6|true|true|**true**|true|true|**true**|
+|   x    |   y   |   z   |  x>y  |  z>5  | **(x>y)&&(z>5)** | x==10 |  y>3  | **(x==10)\|\|(y>3)** |
+| :----: | :---: | :---: | :---: | :---: | :--------------: | :---: | :---: | :------------------: |
+| x = 10 | y = 5 | z = 6 | true  | true  |     **true**     | true  | true  |       **true**       |
 
 ```C
 
@@ -56,10 +56,10 @@ z = 6;
 
 > 语句覆盖并没有考虑if语句为假（false）的情况，显然测试并不充分。分支（判定）覆盖可以解决这个问题
 
-|x|y|z|x>y|z>5|**(x>y)&&(z>5)**|x==10|y>3|**(x==10)\|\|(y>3)**|
-|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
-|x = 10|y = 5|z = 6|true|true|**true**|true|true|**true**|
-|x = 4|y = 3|z = 5|true|false|**false**|false|false|**false**|
+|   x    |   y   |   z   |  x>y  |  z>5  | **(x>y)&&(z>5)** | x==10 |  y>3  | **(x==10)\|\|(y>3)** |
+| :----: | :---: | :---: | :---: | :---: | :--------------: | :---: | :---: | :------------------: |
+| x = 10 | y = 5 | z = 6 | true  | true  |     **true**     | true  | true  |       **true**       |
+| x = 4  | y = 3 | z = 5 | true  | false |    **false**     | false | false |      **false**       |
 
 ```C
 
@@ -83,10 +83,10 @@ z = 5;
 
 > 条件的每个取值（即a、b、c、d均可以取true或false两个值）。条件覆盖能覆盖到每个条件的每个取值
 
-|x|y|z|x>y|z>5|**(x>y)&&(z>5)**|x==10|y>3|**(x==10)\|\|(y>3)**|
-|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
-|x = 10|y = 2|z = 4|true|false|**false**|true|false|**true**|
-|x = 9|y = 10|z = 6|false|true|**true**|false|true|**true**|
+|   x    |   y    |   z   |  x>y  |  z>5  | **(x>y)&&(z>5)** | x==10 |  y>3  | **(x==10)\|\|(y>3)** |
+| :----: | :----: | :---: | :---: | :---: | :--------------: | :---: | :---: | :------------------: |
+| x = 10 | y = 2  | z = 4 | true  | false |    **false**     | true  | false |       **true**       |
+| x = 9  | y = 10 | z = 6 | false | true  |     **true**     | false | true  |       **true**       |
 
 ```C
 
@@ -110,10 +110,10 @@ z = 6;
 
 > 同时满足判定覆盖和条件覆盖就更好了，而判定条件覆盖就能做到
 
-|x|y|z|x>y|z>5|**(x>y)&&(z>5)**|x==10|y>3|**(x==10)\|\|(y>3)**|
-|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
-|x = 2|y = 3|z = 4|false|false|**false**|false|false|**false**|
-|x = 10|y = 4|z = 6|true|true|**true**|true|true|**true**|
+|   x    |   y   |   z   |  x>y  |  z>5  | **(x>y)&&(z>5)** | x==10 |  y>3  | **(x==10)\|\|(y>3)** |
+| :----: | :---: | :---: | :---: | :---: | :--------------: | :---: | :---: | :------------------: |
+| x = 2  | y = 3 | z = 4 | false | false |    **false**     | false | false |      **false**       |
+| x = 10 | y = 4 | z = 6 | true  | true  |     **true**     | true  | true  |       **true**       |
 
 ```C
 
@@ -135,12 +135,12 @@ z = 6;
 
 > 条件组合覆盖考虑的是覆盖每个分支（判定）中每个条件的每种组合
 
-|x|y|z|x>y|z>5|**(x>y)&&(z>5)**|x==10|y>3|**(x==10)\|\|(y>3)**|
-|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
-|x = 9|y = 4|z = 6|true|true|**true**|false|true|**true**|
-|x = 9|y = 2|z = 6|true|true|**true**|false|false|**false**|
-|x = 10|y = 2|z = 4|true|false|**false**|true|false|**true**|
-|x = 2|y = 3|z = 4|false|false|**false**|false|false|**false**|
+|   x    |   y   |   z   |  x>y  |  z>5  | **(x>y)&&(z>5)** | x==10 |  y>3  | **(x==10)\|\|(y>3)** |
+| :----: | :---: | :---: | :---: | :---: | :--------------: | :---: | :---: | :------------------: |
+| x = 9  | y = 4 | z = 6 | true  | true  |     **true**     | false | true  |       **true**       |
+| x = 9  | y = 2 | z = 6 | true  | true  |     **true**     | false | false |      **false**       |
+| x = 10 | y = 2 | z = 4 | true  | false |    **false**     | true  | false |       **true**       |
+| x = 2  | y = 3 | z = 4 | false | false |    **false**     | false | false |      **false**       |
 
 ```C
 
@@ -184,7 +184,7 @@ z = 4;
 
 ### 控制流图
 
-![控制流图](/Users/mikeshinoda/Documents/codes/软件测试基础/第三章课后练习/控制流图.svg)
+![控制流图](%E6%8E%A7%E5%88%B6%E6%B5%81%E5%9B%BE.svg)
 
 ### 计算环形复杂度
 
@@ -232,9 +232,9 @@ $$
 
 ### 测试用例
 
-| Path | x    | A    | B    | C    |
-| ---- | ---- | ---- | ---- | ---- |
-| 1    | 10   | 2    | 10   | 2    |
-| 2    | 10   | 0    | 0    | 2    |
-| 3    | 10   | 0    | 1    | -1   |
+| Path | x   | A   | B   | C   |
+| ---- | --- | --- | --- | --- |
+| 1    | 10  | 2   | 10  | 2   |
+| 2    | 10  | 0   | 0   | 2   |
+| 3    | 10  | 0   | 1   | -1  |
 

```
```txt

diff --git a/changelog.md b/changelog.md
index e8d4c5d..6d59462 100644
--- a/changelog.md
+++ b/changelog.md
@@ -522,3 +522,5 @@ index c4082b2..0b3ce38 100644
  
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index c708a2c..497a54a 100644
--- a/changelog.md
+++ b/changelog.md
@@ -536,3 +536,5 @@ index e8d4c5d..6d59462 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 29af30a..4f56d5b 100644
--- a/changelog.md
+++ b/changelog.md
@@ -550,3 +550,5 @@ index c708a2c..497a54a 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 75b99ed..4ef4d59 100644
--- a/changelog.md
+++ b/changelog.md
@@ -564,3 +564,5 @@ index 29af30a..4f56d5b 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/Python/test.py b/Python/test.py
index 4157403..3b2e04c 100644
--- a/Python/test.py
+++ b/Python/test.py
@@ -1,2 +1,16 @@
-a = 3.1416
-print("{0:2.2f}".format(a))
+DictStudent = [
+    {'name': '郭靖', 'gender': '男','age': 19},
+    {'name': '黄蓉', 'gender': '女','age': 18},
+    {'name': '杨康', 'gender': '男','age': 18},
+    {'name': '李莫愁', 'gender': '女','age': 20},
+    {'name': '穆念慈', 'gender': '女','age': 19},
+    {'name': '瑛姑', 'gender': '女','age': 19}
+]
+male = 0
+female = 0
+for i in DictStudent:
+    if i['gender'] == '男':
+        male += 1
+    else:
+        female += 1
+# print('男女生人数为：',{"男":{},"女":{}}.format(male,female))
diff --git a/changelog.md b/changelog.md
index 19e7592..fa14384 100644
--- a/changelog.md
+++ b/changelog.md
@@ -578,3 +578,5 @@ index 75b99ed..4ef4d59 100644
 +
 
 ```
+```txt
+
diff --git a/nvim b/nvim
deleted file mode 100644
index 2d1385b..0000000
--- a/nvim
+++ /dev/null
@@ -1,50 +0,0 @@
-# git clone git@github.com:lukas-reineke/indent-blankline.nvim
-# git clone git@github.com:hrsh7th/cmp-cmdline
-# git clone git@github.com:hrsh7th/nvim-cmp
-# git clone git@github.com:sainnhe/edge
-# git clone git@github.com:leslie255/aleph-nvim
-# git clone git@github.com:NLKNguyen/papercolor-theme
-# git clone git@github.com:lewis6991/impatient.nvim
-# git clone git@github.com:hrsh7th/cmp-path
-# git clone git@github.com:liuchengxu/space-vim-dark
-# git clone git@github.com:hrsh7th/cmp-buffer
-# git clone git@github.com:dstein64/vim-startuptime
-# git clone git@github.com:nvim-lua/plenary.nvim
-# git clone git@github.com:hrsh7th/cmp-nvim-lsp
-# git clone git@github.com:nvim-telescope/telescope.nvim
-# git clone git@github.com:projekt0n/github-nvim-theme
-# git clone git@github.com:glepnir/lspsaga.nvim
-# git clone git@github.com:akinsho/toggleterm.nvim
-# git clone git@github.com:tiagovla/tokyodark.nvim
-# git clone git@github.com:nvim-lualine/lualine.nvim
-# git clone git@github.com:lewis6991/gitsigns.nvim
-# git clone git@github.com:samodostal/image.nvim
-# git clone git@github.com:kyazdani42/nvim-tree.lua
-# git clone git@github.com:sainnhe/sonokai
-# git clone git@github.com:moll/vim-bbye
-# git clone git@github.com:L3MON4D3/LuaSnip
-# git clone git@github.com:rhysd/vim-grammarous
-# git clone git@github.com:kyazdani42/nvim-web-devicons
-# git clone git@github.com:Th3Whit3Wolf/one-nvim
-# git clone git@github.com:simrat39/rust-tools.nvim
-# git clone git@github.com:nathom/filetype.nvim
-# git clone git@github.com:akinsho/bufferline.nvim
-# git clone git@github.com:neovim/nvim-lspconfig
-# git clone git@github.com:B4mbus/oxocarbon-lua.nvim
-# git clone git@github.com:nvim-treesitter/nvim-treesitter
-git clone git@github.com:sbdchd/neoformat ~/.local/share/Users/mikeshinoda/.local/share/nvim/site/pack/packer/opt
-git clone git@github.com:sainnhe/everforest ~/.local/share/Users/mikeshinoda/.local/share/nvim/site/pack/packer/opt
-git clone git@github.com:hrsh7th/cmp-path ~/.local/share/Users/mikeshinoda/.local/share/nvim/site/pack/packer/opt
-git clone git@github.com:machakann/vim-sandwich ~/.local/share/Users/mikeshinoda/.local/share/nvim/site/pack/packer/opt
-git clone git@github.com:lyokha/vim-xkbswitch ~/.local/share/Users/mikeshinoda/.local/share/nvim/site/pack/packer/opt
-git clone git@github.com:NTBBloodbath/doom-one.nvim ~/.local/share/Users/mikeshinoda/.local/share/nvim/site/pack/packer/opt
-git clone git@github.com:SirVer/ultisnips ~/.local/share/Users/mikeshinoda/.local/share/nvim/site/pack/packer/opt
-git clone git@github.com:wellle/targets.vim ~/.local/share/Users/mikeshinoda/.local/share/nvim/site/pack/packer/opt
-git clone git@github.com:nvim-zh/better-escape.vim ~/.local/share/Users/mikeshinoda/.local/share/nvim/site/pack/packer/opt
-git clone git@github.com:shaunsingh/nord.nvim ~/.local/share/Users/mikeshinoda/.local/share/nvim/site/pack/packer/opt
-git clone git@github.com:onsails/lspkind-nvim ~/.local/share/Users/mikeshinoda/.local/share/nvim/site/pack/packer/opt
-git clone git@github.com:chrisbra/unicode.vim ~/.local/share/Users/mikeshinoda/.local/share/nvim/site/pack/packer/opt
-git clone git@github.com:tpope/vim-repeat ~/.local/share/Users/mikeshinoda/.local/share/nvim/site/pack/packer/opt
-git clone git@github.com:sainnhe/gruvbox-material ~/.local/share/Users/mikeshinoda/.local/share/nvim/site/pack/packer/opt
-git clone git@github.com:tpope/vim-eunuch ~/.local/share/Users/mikeshinoda/.local/share/nvim/site/pack/packer/opt
-git clone git@github.com:git clone git@github.com ~/.local/share/Users/mikeshinoda/.local/share/nvim/site/pack/packer/opt
diff --git "a/\350\275\257\344\273\266\346\265\213\350\257\225\345\237\272\347\241\200/\347\254\254\344\270\211\346\254\241\345\256\236\351\252\214/\347\254\254\344\270\211\346\254\241.docx" "b/\350\275\257\344\273\266\346\265\213\350\257\225\345\237\272\347\241\200/\347\254\254\344\270\211\346\254\241\345\256\236\351\252\214/\347\254\254\344\270\211\346\254\241.docx"
deleted file mode 100644
index 3035807..0000000
Binary files "a/\350\275\257\344\273\266\346\265\213\350\257\225\345\237\272\347\241\200/\347\254\254\344\270\211\346\254\241\345\256\236\351\252\214/\347\254\254\344\270\211\346\254\241.docx" and /dev/null differ

```
```txt

diff --git a/changelog.md b/changelog.md
index c345eaf..4239430 100644
--- a/changelog.md
+++ b/changelog.md
@@ -675,3 +675,5 @@ index 3035807..0000000
 Binary files "a/\350\275\257\344\273\266\346\265\213\350\257\225\345\237\272\347\241\200/\347\254\254\344\270\211\346\254\241\345\256\236\351\252\214/\347\254\254\344\270\211\346\254\241.docx" and /dev/null differ
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 4c621dd..a20aa85 100644
--- a/changelog.md
+++ b/changelog.md
@@ -689,3 +689,5 @@ index c345eaf..4239430 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index eeafa3e..d3193f5 100644
--- a/changelog.md
+++ b/changelog.md
@@ -703,3 +703,5 @@ index 4c621dd..a20aa85 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 8df7012..5faebe3 100644
--- a/changelog.md
+++ b/changelog.md
@@ -717,3 +717,5 @@ index eeafa3e..d3193f5 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index fdebbad..d35ed5b 100644
--- a/changelog.md
+++ b/changelog.md
@@ -731,3 +731,5 @@ index 8df7012..5faebe3 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/Python/test.py b/Python/test.py
index 3b2e04c..c689f6a 100644
--- a/Python/test.py
+++ b/Python/test.py
@@ -1,16 +1,4 @@
-DictStudent = [
-    {'name': '郭靖', 'gender': '男','age': 19},
-    {'name': '黄蓉', 'gender': '女','age': 18},
-    {'name': '杨康', 'gender': '男','age': 18},
-    {'name': '李莫愁', 'gender': '女','age': 20},
-    {'name': '穆念慈', 'gender': '女','age': 19},
-    {'name': '瑛姑', 'gender': '女','age': 19}
-]
-male = 0
-female = 0
-for i in DictStudent:
-    if i['gender'] == '男':
-        male += 1
-    else:
-        female += 1
-# print('男女生人数为：',{"男":{},"女":{}}.format(male,female))
+def f1(p,**p2):
+    print(type(p2))
+
+f1(1, a=2)
\ No newline at end of file
diff --git a/changelog.md b/changelog.md
index 6308b70..51b26ad 100644
--- a/changelog.md
+++ b/changelog.md
@@ -745,3 +745,5 @@ index fdebbad..d35ed5b 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 08f37de..18e48be 100644
--- a/changelog.md
+++ b/changelog.md
@@ -785,3 +785,5 @@ index 6308b70..51b26ad 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 85afa6e..0e34d21 100644
--- a/changelog.md
+++ b/changelog.md
@@ -799,3 +799,5 @@ index 08f37de..18e48be 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index fef64db..5422f23 100644
--- a/changelog.md
+++ b/changelog.md
@@ -813,3 +813,5 @@ index 85afa6e..0e34d21 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 547d437..7d53e8c 100644
--- a/changelog.md
+++ b/changelog.md
@@ -827,3 +827,5 @@ index fef64db..5422f23 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 1fe63fb..f05b9ee 100644
--- a/changelog.md
+++ b/changelog.md
@@ -841,3 +841,5 @@ index 547d437..7d53e8c 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index dcaaa1e..37cdc96 100644
--- a/changelog.md
+++ b/changelog.md
@@ -855,3 +855,5 @@ index 1fe63fb..f05b9ee 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index 3cf66b3..8363c6f 100644
--- a/changelog.md
+++ b/changelog.md
@@ -869,3 +869,5 @@ index dcaaa1e..37cdc96 100644
 +
 
 ```
+```txt
+

```
