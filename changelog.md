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
```txt

diff --git a/.vim/coc-settings.json b/.vim/coc-settings.json
deleted file mode 100644
index 625247d..0000000
--- a/.vim/coc-settings.json
+++ /dev/null
@@ -1,3 +0,0 @@
-{
-  "python.linting.enabled": false
-}
\ No newline at end of file
diff --git a/changelog.md b/changelog.md
index 2e32004..a2c688e 100644
--- a/changelog.md
+++ b/changelog.md
@@ -883,3 +883,5 @@ index 3cf66b3..8363c6f 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\344\272\224\346\254\241\344\275\234\344\270\232/\347\254\254\344\272\224\346\254\241\344\275\234\344\270\232.md" "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\344\272\224\346\254\241\344\275\234\344\270\232/\347\254\254\344\272\224\346\254\241\344\275\234\344\270\232.md"
index 29a7234..fe7a13a 100644
--- "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\344\272\224\346\254\241\344\275\234\344\270\232/\347\254\254\344\272\224\346\254\241\344\275\234\344\270\232.md"
+++ "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\344\272\224\346\254\241\344\275\234\344\270\232/\347\254\254\344\272\224\346\254\241\344\275\234\344\270\232.md"
@@ -5,6 +5,7 @@ description:
 ---
 
 - [题目](#题目)
+- [第九章课后思考题](#第九章课后思考题)
 - [第十章上机实践](#第十章上机实践)
   - [题目2](#题目2)
   - [答案2](#答案2)
@@ -19,10 +20,18 @@ description:
 
 第9章思考题要求写在纸上，标清题号
 
+![alt](./images/截屏2022-11-18%2022.20.37.png)
+
+![alt](./images/截屏2022-11-18%2022.20.52.png)
+
 第10章上机实践要求标清题号，截图
 
 ![images](./images/截屏2022-11-15%2021.14.39.png)
 
+## 第九章课后思考题
+
+![alt](./images/截屏2022-11-18%2022.44.20.png)
+
 ## 第十章上机实践
 
 ### 题目2
diff --git a/changelog.md b/changelog.md
index c772ad3..8694779 100644
--- a/changelog.md
+++ b/changelog.md
@@ -907,3 +907,5 @@ index 2e32004..a2c688e 100644
 +
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index c3e10f3..ee9ef79 100644
--- a/changelog.md
+++ b/changelog.md
@@ -952,3 +952,5 @@ index c772ad3..8694779 100644
 +
 
 ```
+```txt
+
diff --git "a/\347\256\227\346\263\225\350\256\276\350\256\241\344\270\216\345\210\206\346\236\220\345\256\236\351\252\214/\350\257\276\345\220\216\344\275\234\344\270\2322/\350\257\276\345\220\216\344\275\234\344\270\2322.md" "b/\347\256\227\346\263\225\350\256\276\350\256\241\344\270\216\345\210\206\346\236\220\345\256\236\351\252\214/\350\257\276\345\220\216\344\275\234\344\270\2322/\350\257\276\345\220\216\344\275\234\344\270\2322.md"
index e9883ec..9adc395 100644
--- "a/\347\256\227\346\263\225\350\256\276\350\256\241\344\270\216\345\210\206\346\236\220\345\256\236\351\252\214/\350\257\276\345\220\216\344\275\234\344\270\2322/\350\257\276\345\220\216\344\275\234\344\270\2322.md"
+++ "b/\347\256\227\346\263\225\350\256\276\350\256\241\344\270\216\345\210\206\346\236\220\345\256\236\351\252\214/\350\257\276\345\220\216\344\275\234\344\270\2322/\350\257\276\345\220\216\344\275\234\344\270\2322.md"
@@ -4,6 +4,18 @@ date: 2022/11/18/ 22:48:15
 description: 
 ---
 
+- [上传 2个 蓝桥杯、ACM等相关的题目及其解答过程，题目自选。](#上传-2个-蓝桥杯acm等相关的题目及其解答过程题目自选)
+  - [要求](#要求)
+    - [1.有题目，有示例](#1有题目有示例)
+    - [2.有题目分析过程](#2有题目分析过程)
+    - [3.有代码和结果](#3有代码和结果)
+- [1. 两数之和（简单）](#1-两数之和简单)
+  - [朴素解法](#朴素解法)
+- [2. 两数相加（中等）](#2-两数相加中等)
+  - [朴素解法（哨兵技巧）](#朴素解法哨兵技巧)
+- [3. 无重复字符的最长子串（中等）](#3-无重复字符的最长子串中等)
+  - [双指针 + 哈希表](#双指针--哈希表)
+
 ## 上传 2个 蓝桥杯、ACM等相关的题目及其解答过程，题目自选。
 
 ### 要求
@@ -19,3 +31,250 @@ description:
 #### 2.有题目分析过程
 
 #### 3.有代码和结果
+
+## 1. 两数之和（简单）
+
+这是 LeetCode 上的 **[1. 两数之和](https://leetcode-cn.com/problems/two-sum/solution/po-su-jie-fa-ha-xi-biao-jie-fa-by-ac_oie-yf7o/)** ，难度为 **简单**。
+
+Tag : 「哈希表」、「模拟」
+
+
+
+给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出「和为目标值」的那「两个」整数，并返回它们的数组下标。
+
+你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
+
+你可以按任意顺序返回答案。
+
+示例 1：
+```
+输入：nums = [2,7,11,15], target = 9
+
+输出：[0,1]
+
+解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
+```
+
+示例 2：
+```
+输入：nums = [3,2,4], target = 6
+
+输出：[1,2]
+```
+
+示例 3：
+```
+输入：nums = [3,3], target = 6
+
+输出：[0,1]
+```
+
+提示：
+* $2 <= nums.length <= 10^3$
+* -$10^9 <= nums[i] <= 10^9$
+* -$10^9 <= target <= 10^9$
+* 只会存在一个有效答案
+
+---
+
+### 朴素解法
+
+由于我们每次要从数组中找两个数。
+
+因此一个很简单的思路是：使用两重循环枚举下标 $i$ 和 $j$ ，分别代表要找的两个数。
+
+然后判断 $nums[i] + nums[j] = target$ 是否成立。
+
+另外为了防止得到重复的解，我们需要在第一层循环中让 $i$ 从 $0$ 开始，到 $n - 2$ 结束（确保能取到下一位数作为 j ）；在第二层循环中让 $j$ 从 $i + 1$ 开始，到 $n - 1$ 结束。
+
+代码：
+
+```Java
+class Solution {
+    public int[] twoSum(int[] nums, int t) {
+        int n = nums.length;
+        for (int i = 0; i < n - 1; i++) {
+            for (int j = i + 1; j < n; j++) {
+                if (t == nums[i] + nums[j]) return new int[]{i,j};
+            }
+        }
+        return new int[]{};
+    }
+}
+```
+* 时间复杂度：两重循环，以复杂度是 $O(n^2)$
+* 空间复杂度：$O(1)$
+
+---
+
+## 2. 两数相加（中等）
+
+这是 LeetCode 上的 **[2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/solution/po-su-jie-fa-shao-bing-ji-qiao-by-ac_oie-etln/)** ，难度为 **中等**。
+
+Tag : 「递归」、「链表」、「数学」、「模拟」
+
+
+
+给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
+
+请你将两个数相加，并以相同形式返回一个表示和的链表。
+
+你可以假设除了数字 $0$ 之外，这两个数都不会以 $0$ 开头。
+
+示例 1：
+
+![](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2021/01/02/addtwonumber1.jpg)
+
+```
+输入：l1 = [2,4,3], l2 = [5,6,4]
+
+输出：[7,0,8]
+
+解释：342 + 465 = 807.
+```
+示例 2：
+```
+输入：l1 = [0], l2 = [0]
+
+输出：[0]
+```
+示例 3：
+```
+输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
+
+输出：[8,9,9,9,0,0,0,1]
+```
+
+提示：
+
+* 每个链表中的节点数在范围 $[1, 100]$ 内
+* $0 <= Node.val <= 9$
+* 题目数据保证列表表示的数字不含前导零
+
+
+---
+
+### 朴素解法（哨兵技巧）
+
+这是道模拟题，模拟人工竖式做加法的过程：
+
+从最低位至最高位，逐位相加，如果和大于等于 $10$，则保留个位数字，同时向前一位进 1 如果最高位有进位，则需在最前面补 $1$。
+
+做有关链表的题目，有个常用技巧：添加一个虚拟头结点（哨兵），帮助简化边界情况的判断。
+
+代码：
+```Java
+class Solution {
+    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
+        ListNode dummy = new ListNode(0);
+        ListNode tmp = dummy;
+        int t = 0;
+        while (l1 != null || l2 != null) {
+            int a = l1 != null ? l1.val : 0;
+            int b = l2 != null ? l2.val : 0;
+            t = a + b + t;
+            tmp.next = new ListNode(t % 10);
+            t /= 10;
+            tmp = tmp.next;
+            if (l1 != null) l1 = l1.next;
+            if (l2 != null) l2 = l2.next;
+        }
+        if (t > 0) tmp.next = new ListNode(t);
+        return dummy.next;
+    }
+}
+```
+* 时间复杂度：$m$ 和 $n$ 分别代表两条链表的长度，则遍历到的最远位置为 $max(m,n)$，复杂度为 $O(max(m,n))$
+* 空间复杂度：创建了 $max(m,n) + 1$ 个节点（含哨兵），复杂度为 $O(max(m,n))$（忽略常数）
+
+**注意：事实上还有可能创建 $max(m + n) + 2$ 个节点，包含哨兵和最后一位的进位。但复杂度仍为 $O(max(m,n))$。**
+
+---
+
+## 3. 无重复字符的最长子串（中等）
+
+这是 LeetCode 上的 **[3. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/shua-chuan-lc-shuang-zhi-zhen-ha-xi-biao-q08m/)** ，难度为 **中等**。
+
+Tag : 「哈希表」、「双指针」、「滑动窗口」
+
+
+
+给定一个字符串，请你找出其中不含有重复字符的「最长子串」的长度。
+
+示例 1:
+```
+输入: s = "abcabcbb"
+
+输出: 3 
+
+解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
+```
+示例 2:
+```
+输入: s = "bbbbb"
+
+输出: 1
+
+解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
+```
+示例 3:
+```
+输入: s = "pwwkew"
+
+输出: 3
+
+解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
+     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
+```
+示例 4:
+```
+输入: s = ""
+
+输出: 0
+```
+
+提示：
+
+* $0 <= s.length <= 5 \times 10^4$
+* `s` 由英文字母、数字、符号和空格组成
+
+---
+
+### 双指针 + 哈希表
+
+定义两个指针 `start` 和 `end`，表示当前处理到的子串是 `[start,end]`。
+
+`[start,end]` 始终满足要求：无重复字符。
+
+从前往后进行扫描，同时维护一个哈希表记录 `[start,end]` 中每个字符出现的次数。
+
+遍历过程中，`end` 不断自增，将第 `end` 个字符在哈希表中出现的次数加一。
+
+令 `right` 为 下标 `end` 对应的字符，当满足 `map.get(right) > 1` 时，代表此前出现过第 `end` 位对应的字符。
+
+此时更新 `start` 的位置（使其右移），直到不满足 `map.get(right) > 1` （代表 `[start,end]` 恢复满足无重复字符的条件）。同时使用 `[start,end]` 长度更新答案。
+
+代码：
+```Java
+class Solution {
+    public int lengthOfLongestSubstring(String s) {
+        Map<Character, Integer> map = new HashMap<>();
+        int ans = 0;
+        for (int start = 0, end = 0; end < s.length(); end++) {
+            char right = s.charAt(end);
+            map.put(right, map.getOrDefault(right, 0) + 1);
+            while (map.get(right) > 1) {
+                char left = s.charAt(start);
+                map.put(left, map.get(left) - 1);
+                start++;
+            }
+            ans = Math.max(ans, end - start + 1);
+        }
+        return ans;
+    }
+}
+```
+* 时间复杂度：虽然有两层循环，但每个字符在哈希表中最多只会被插入和删除一次，复杂度为 $O(n)$
+* 空间复杂度：使用了哈希表进行字符记录，复杂度为 $O(n)$
+
+---
\ No newline at end of file

```
```txt

diff --git a/changelog.md b/changelog.md
index 43f40a7..82b2b2d 100644
--- a/changelog.md
+++ b/changelog.md
@@ -1241,3 +1241,5 @@ index e9883ec..9adc395 100644
 \ No newline at end of file
 
 ```
+```txt
+
diff --git "a/\347\256\227\346\263\225\350\256\276\350\256\241\344\270\216\345\210\206\346\236\220\345\256\236\351\252\214/\350\257\276\345\220\216\344\275\234\344\270\2322/\350\257\276\345\220\216\344\275\234\344\270\2322.md" "b/\347\256\227\346\263\225\350\256\276\350\256\241\344\270\216\345\210\206\346\236\220\345\256\236\351\252\214/\350\257\276\345\220\216\344\275\234\344\270\2322/\350\257\276\345\220\216\344\275\234\344\270\2322.md"
index 9adc395..3b5b7bc 100644
--- "a/\347\256\227\346\263\225\350\256\276\350\256\241\344\270\216\345\210\206\346\236\220\345\256\236\351\252\214/\350\257\276\345\220\216\344\275\234\344\270\2322/\350\257\276\345\220\216\344\275\234\344\270\2322.md"
+++ "b/\347\256\227\346\263\225\350\256\276\350\256\241\344\270\216\345\210\206\346\236\220\345\256\236\351\252\214/\350\257\276\345\220\216\344\275\234\344\270\2322/\350\257\276\345\220\216\344\275\234\344\270\2322.md"
@@ -4,7 +4,7 @@ date: 2022/11/18/ 22:48:15
 description: 
 ---
 
-- [上传 2个 蓝桥杯、ACM等相关的题目及其解答过程，题目自选。](#上传-2个-蓝桥杯acm等相关的题目及其解答过程题目自选)
+- [上传 2个 蓝桥杯、ACM等相关的题目及其解答过程，题目自选](#上传-2个-蓝桥杯acm等相关的题目及其解答过程题目自选)
   - [要求](#要求)
     - [1.有题目，有示例](#1有题目有示例)
     - [2.有题目分析过程](#2有题目分析过程)
@@ -16,7 +16,7 @@ description:
 - [3. 无重复字符的最长子串（中等）](#3-无重复字符的最长子串中等)
   - [双指针 + 哈希表](#双指针--哈希表)
 
-## 上传 2个 蓝桥杯、ACM等相关的题目及其解答过程，题目自选。
+## 上传 2个 蓝桥杯、ACM等相关的题目及其解答过程，题目自选
 
 ### 要求
 

```
```txt

diff --git "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.1.4.py" "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.1.4.py"
index e69de29..0c2a3b1 100644
--- "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.1.4.py"
+++ "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.1.4.py"
@@ -0,0 +1,9 @@
+s1 = "abABabCD"
+print(s1.startswith("AB"))
+print(s1.startswith("AB",2))
+print(s1.endswith("CD"))
+print(s1.count("ab"))
+print(s1.index("AB"))
+print(s1.find("cd"))
+print(s1.find("CD"))
+print(s1.replace("ab","xyz"))
\ No newline at end of file
diff --git "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.2.py" "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.2.py"
index e69de29..2d4ad75 100644
--- "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.2.py"
+++ "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.2.py"
@@ -0,0 +1,39 @@
+import re
+import collections
+def analyze_text(text):
+    # calculate all alpha
+    alpha = re.findall(r"[a-zA-Z0-9]",text)
+    alpha_count = len(alpha)
+    print(alpha)
+    print("Alphabet: {0}".format(alpha_count))
+    
+    # calculate English alpha
+    eng_alpha = re.findall(r"[a-zA-Z]",text)
+    eng_alpha_count = len(eng_alpha)
+    print(eng_alpha)
+    print("English Alphabet: {0}".format(eng_alpha_count))
+    
+    # calculate Number
+    number = re.findall(r"\d",text)
+    number_count = len(number)
+    print(number)
+    print("Number: {0}".format(number_count))
+    
+    # calculate Space
+    space = re.findall(r"\s",text)
+    space_count = len(space)
+    print(space)
+    print("Space: {0}".format(space_count))
+    
+    # calculate Other
+    other = re.findall(r"[^a-zA-Z0-9 ]",text)
+    other_count = len(other)
+    print(other)
+    print("Other: {0}".format(other_count))
+    
+
+if __name__ == "__main__":
+    filename = "calc.txt"
+    with open(filename,"r") as f:
+        text = f.read()
+    analyze_text(text.strip())
\ No newline at end of file
diff --git "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.3.py" "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.3.py"
index e69de29..50cc79b 100644
--- "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.3.py"
+++ "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.3.py"
@@ -0,0 +1,24 @@
+import re
+
+def judgeNumber(number):
+    zhNumber = re.compile(r'^(\(\d{3}\)|\d{3}-)?\d{8}$')
+    result = True if zhNumber.match(number) else False
+    return result
+
+def judgeMailCode(code):
+    zhMailCode = re.compile(r'^\d{6}$')
+    result = True if zhMailCode.match(code) else False
+    return result
+
+def judgeWebSite(web):
+    WebSite = re.compile(r'^(?:https?:\/\/)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$')
+    result = True if WebSite.match(web) else False
+    return result
+    
+if __name__ == "__main__":
+    strNumber = str(input())
+    print(strNumber,' is correct? ', judgeNumber(strNumber))
+    strMailCode = str(input())
+    print(strMailCode,' is correct? ', judgeMailCode(strMailCode))
+    strWeb = str(input())
+    print(strWeb,' is correct? ', judgeWebSite(strWeb))
\ No newline at end of file
diff --git "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232.md" "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232.md"
index b46cff5..8489e2b 100644
--- "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232.md"
+++ "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232.md"
@@ -97,7 +97,364 @@ mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python
 
 # 4
 
-
+s1 = "abABabCD"
+print(s1.startswith("AB"))
+print(s1.startswith("AB",2))
+print(s1.endswith("CD"))
+print(s1.count("ab"))
+print(s1.index("AB"))
+print(s1.find("cd"))
+print(s1.find("CD"))
+print(s1.replace("ab","xyz"))
+
+ub/3.codes/Python/Python程序设计作业/第八次作业/15.1.4.py
+False
+True
+True
+2
+2
+-1
+6
+xyzABxyzCD
+
+# 5
+
+s1 = 'one,two,three'
+print(s1.split(','))
+print(s1.rsplit(',',1))
+print(s1.partition(','))
+print(s1.rpartition(','))
+s2 = 'abc\n123\nxyz'
+print(s2.splitlines())
+print(s2.splitlines(True))
+s3 = ('a','b','c')
+s4 = ':'
+print(s4.join(s3))
+print(s4.join('123'))
+
+mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.5.py
+['one', 'two', 'three']
+['one,two', 'three']
+('one', ',', 'two,three')
+('one,two', ',', 'three')
+['abc', '123', 'xyz']
+['abc\n', '123\n', 'xyz']
+a:b:c
+1:2:3
+
+# 6
+
+table1 = str.maketrans('1234567','一二三四五六日')
+s1 = '1 3 4 9'
+print(s1.translate(table1))
+weeks = {'1': 'M一','2': 'T二','3': 'W三','4': 'T四','5': 'F五','6': 'S六','7': 'S日'}
+table2 = str.maketrans(weeks)
+print(s1.translate(table2))
+
+mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.6.py
+一 三 四 9
+M一 W三 T四 9
+
+# 7
+
+s1 = input('请输入字符串：') # 'The quick brown fox jumps over the lazy dog
+s2 = s1.upper() #转换为大写
+countall = len(s1) #字符串长度
+counta = s2.count('A');counte = s2.count('E');counti = s2.count('I')
+counto = s2.count('O');countu = s2.count('U')
+print('所有字母的总数为：',countall)
+print('元音字母出现的次数和频率分别为：')
+print('A:{0}\t{1:2.2f}%'.format(counta, counta/countall * 100))
+print('E:{0}\t{1:2.2f}%'.format(counte, counte/countall * 100))
+print('I:{0}\t{1:2.2f}%'.format(counti, counti/countall * 100))
+print('O:{0}\t{1:2.2f}%'.format(counto, counto/countall * 100))
+print('U:{0}\t{1:2.2f}%'.format(countu, countu/countall * 100))
+
+mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main) [1]> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.7.py
+请输入字符串：The quick brown fox jumps over the lazy dog
+所有字母的总数为： 43
+元音字母出现的次数和频率分别为：
+A:1     2.33%
+E:3     6.98%
+I:1     2.33%
+O:4     9.30%
+U:2     4.65%
+
+# 8
+
+# 15.1.8.py
+
+file_name = "text_count.txt"
+line_counts = 0
+word_counts = 0
+character_counts = 0
+with open(file_name, 'r', encoding = 'utf8') as f:
+    for line in f:
+        words = line.split()
+        line_counts += 1
+        word_counts += len(words)
+        character_counts += len(line)
+print("行数:", line_counts)
+print("单词个数:", word_counts)
+print("字符个数:", character_counts)
+
+# text_count.txt
+
+this is a word.
+and this is a testing of text count.
+
+# shell
+
+mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main) [1]> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.8.py
+行数: 2
+单词个数: 12
+字符个数: 52
+
+# 9
+
+import re
+print(re.findall('d','godness'))
+
+mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.9.py
+['d']
+
+# 10
+
+import os, re
+def check_email(strEmail):
+    regex_email = re.compile(r'^[\w\.\-]+@([\w\-]+\.)+[\w\-]+$')
+    result = True if regex_email.match(strEmail) else False
+    return result
+
+# test
+if __name__ == '__main__':
+    str1 = "hjiang@yahoo.com"
+    str2 = "hjiang.yahoo.com"
+    print(str1, 'is correct?', check_email(str1))
+    print(str2, 'is correct?', check_email(str2))
+
+mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.10.py
+hjiang@yahoo.com is correct? True
+hjiang.yahoo.com is correct? False
+
+# 11
+
+import os,re
+def tasklist():
+    regex_tast = re.compile(r'([\w.]+(?:[\w.]+)*)\s\s+(\d+)\w+\s\s+\d+\s\s+([\d,]+K)')
+    with os.popen('tasklist /nh','r') as f:
+        for line in f:
+            print(regex_tast.findall(line.strip()))
+
+if __name__ == '__main__':
+    tasklist()
+
+mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.11.py
+/bin/sh: tasklist: command not found
+
+# 12
+
+import re
+def html_txt(htmlwithtag):
+    regex_href = re.compile(r'<.+?>')
+    return regex_href.sub('',htmlwithtag)
+
+# test
+if __name__ == '__main__':
+    htmltext = r'<a href=\"index.html\"Welcome to Python world!</a>'
+    print(html_txt(htmltext))
+
+mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.12.py
+
+# 13
+
+import re,urllib.request
+def url_extract(homepage):
+    regex_href = re.compile(r'href="(.+?)"')
+    f = urllib.request.urlopen(homepage)
+    webcontents = f.read().decode()
+    matches = regex_href.finditer(webcontents)
+    for m in matches:
+        print(m.group(1))
+# test
+if __name__ == '__main__':
+    www = r'http://www.baidu.com'
+    url_extract(www)
+
+mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.13.py
+/favicon.ico
+/content-search.xml
+//www.baidu.com/img/baidu_85beaf5496f291521eb75ba38eacbd87.svg
+//dss0.bdstatic.com
+//dss1.bdstatic.com
+//ss1.bdstatic.com
+//sp0.baidu.com
+//sp1.baidu.com
+//sp2.baidu.com
+https://psstatic.cdn.bcebos.com/video/wiseindex/aa6eef91f8b5b1a33b454c401_1660835115000.png
+//
+/
+javascript:;
+https://passport.baidu.com/v2/?login&tpl=mn&u=http%3A%2F%2Fwww.baidu.com%2F&sms=5
+http://news.baidu.com
+https://www.hao123.com?src=from_pc
+http://map.baidu.com
+http://tieba.baidu.com/
+https://haokan.baidu.com/?sfrom=baidu-top
+http://image.baidu.com/
+https://pan.baidu.com?from=1026962h
+http://www.baidu.com/more/
+https://passport.baidu.com/v2/?login&tpl=mn&u=http%3A%2F%2Fwww.baidu.com%2F&sms=5
+javascript:;
+javascript:;
+//www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6%E7%83%AD%E6%90%9C&amp;sa=ire_dl_gh_logo_texing&amp;rsv_dl=igh_logo_pcs
+/
+javascript:;
+javascript:;
+javascript:;
+https://www.baidu.com/s?wd=2022%E5%8D%A1%E5%A1%94%E5%B0%94%E4%B8%96%E7%95%8C%E6%9D%AF&rsv_dl=Worldcup_PC_2022_index_tips
+https://top.baidu.com/board?platform=pc&sa=pcindex_entry
+https://www.baidu.com/s?wd=%E5%AF%B9%E4%BA%8E%E5%B0%81%E6%8E%A7%E4%BA%BA%E5%91%98+%E5%A6%82%E4%BD%95%E4%BF%9D%E9%9A%9C%E6%AD%A3%E5%B8%B8%E5%B0%B1%E5%8C%BB%EF%BC%9F&amp;sa=fyb_n_homepage&amp;rsv_dl=fyb_n_homepage&amp;from=super&amp;cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;rsv_idx=2&amp;hisfilter=1
+https://www.baidu.com/s?wd=%E6%8B%AF%E6%95%91%E4%BA%86%E7%94%9F%E5%91%BD%E7%9A%84%E4%B8%AD%E5%9B%BD%EF%BC%8C%E4%B8%8D%E5%BA%94%E8%A2%AB%E8%AF%AF%E8%A7%A3&amp;sa=fyb_n_homepage&amp;rsv_dl=fyb_n_homepage&amp;from=super&amp;cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;rsv_idx=2&amp;hisfilter=1
+https://www.baidu.com/s?wd=%E5%AA%92%E4%BD%93%E6%8E%A2%E8%AE%BF%E6%A0%B8%E5%AD%90%E5%9F%BA%E5%9B%A0%3A%E5%88%9B%E5%A7%8B%E4%BA%BA%E7%88%B6%E4%BA%B2%E4%B8%BA%E6%95%99%E5%B8%88&amp;sa=fyb_n_homepage&amp;rsv_dl=fyb_n_homepage&amp;from=super&amp;cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;rsv_idx=2&amp;hisfilter=1
+https://www.baidu.com/s?wd=%E5%B9%BF%E5%B7%9E%E6%B5%B7%E7%8F%A0%E8%AF%95%E8%A1%8C%E2%80%9C%E9%97%AD%E7%8E%AF%E6%B3%A1%E6%B3%A1%E2%80%9D%E6%8E%A8%E8%BF%9B%E5%A4%8D%E5%B7%A5&amp;sa=fyb_n_homepage&amp;rsv_dl=fyb_n_homepage&amp;from=super&amp;cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;rsv_idx=2&amp;hisfilter=1
+https://www.baidu.com/s?wd=%E9%9F%A9%E5%9B%BDvs%E5%8A%A0%E7%BA%B3&amp;sa=fyb_n_homepage&amp;rsv_dl=fyb_n_homepage&amp;from=super&amp;cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;rsv_idx=2&amp;hisfilter=1
+https://www.baidu.com/s?wd=%E5%AA%92%E4%BD%93%3A%E6%96%B0%E7%96%86%E6%9A%B4%E9%9B%AA+%E6%9C%89%E7%89%A7%E6%B0%91%E5%A4%B1%E8%81%94%E7%89%9B%E7%BE%8A%E5%86%BB%E6%AD%BB&amp;sa=fyb_n_homepage&amp;rsv_dl=fyb_n_homepage&amp;from=super&amp;cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;rsv_idx=2&amp;hisfilter=1
+//home.baidu.com
+http://ir.baidu.com
+//www.baidu.com/duty
+//help.baidu.com
+https://e.baidu.com/?refer=1271
+http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001
+https://beian.miit.gov.cn
+//www.baidu.com/licence/
+https://www.baidu.com/s?rtt=1&amp;bsst=1&amp;cl=2&amp;tn=news
+http://v.baidu.com/v?ct=301989888&amp;rn=20&amp;pn=0&amp;db=0&amp;s=25&amp;ie=utf-8
+http://image.baidu.com/i?tn=baiduimage&amp;ps=1&amp;ct=201326592&amp;lm=-1&amp;cl=2&amp;nc=1&amp;ie=utf-8
+http://zhidao.baidu.com/q?ct=17&amp;pn=0&amp;tn=ikaslist&amp;rn=10&amp;fr=wwwt
+http://wenku.baidu.com/search?lm=0&amp;od=0&amp;ie=utf-8
+http://tieba.baidu.com/f?fr=wwwt
+https://map.baidu.com/?newmap=1&amp;ie=utf-8&amp;s=s
+https://b2b.baidu.com/s?fr=wwwt
+http://www.baidu.com/more/
+//www.baidu.com/s?rtt=1&bsst=1&cl=2&tn=news&word=
+http://ss.bdimg.com/static/superman/css/ubase_sync-d600f57804.css?v=md5
+
+# 14
+
+# 15.1.14.py
+
+import re
+import collections
+def analyze_text(text):
+    paragraphs = re.split("\n\n",text)
+    paragraph_count=len(paragraphs)
+    print("段落数:{0}".format(paragraph_count))
+    lines=re.split("\n",text)
+    line_count=len(lines)
+    print("行数:{0}".format(line_count))
+    sentences=re.split("[.?!]",text)
+    sentence_count=len(sentences)
+    print("句数:{0}".format(sentence_count))
+    words=re.split(r"\W+",text)
+    word_count=len(words)
+    print("单词数:{0}".format(word_count))
+    freqs=collections.Counter(words)
+    print("频率最高的10个单词:")
+    for (w,n) in freqs.most_common(10):
+        print("{0:10}:{1:10}".format(w,n))
+if __name__ == "__main__":
+    filename = "tomsawyer.txt"
+    with open(filename,"r") as f:
+        text=f.read()
+    analyze_text(text.strip())
+
+# tomsawyer.txt
+
+tomsawyer.txt
+hello
+hi
+hello
+what
+
+# shell
+
+mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.14.py
+段落数:1
+行数:5
+句数:2
+单词数:6
+频率最高的10个单词:
+hello     :         2
+tomsawyer :         1
+txt       :         1
+hi        :         1
+what      :         1
+
+# 15
+
+# 15.1.15.py
+
+def isPotentialGene(dna):
+    # 基因长度为3的倍数，否则返回False
+    if len(line) % 3 != 0:
+        return False
+    # 基因以ATG开始，否则返回False
+    if not dna.startswith('ATG'):
+        return False
+    # 基因以TAG、TAA或者TGA结束，否则返回False
+    if dna[-3:] not in ('TAG', 'TAA', 'TGA'):
+        return False
+    # 基因中间部分不包括密码子TAG、TAA或者TGA，否则返回False
+    for i in range(3, len(dna)-3,3):
+        if dna[i:i+3] in ('TAG', 'TAA', 'TGA'):
+            return False
+        return True
+    
+if __name__ == "__main__":
+    filename = "gene.txt"
+    for lineno, line in enumerate(open(filename,"r")):
+        if isPotentialGene(line.strip()):
+            print("{0}:{1}".format(lineno+1,line.strip()))
+
+# gene.txt
+
+ATGCGCCTGCGTCTGTATAG
+ATGCGCCTGCGTCTGTATAA
+ATGCGCCTGCGTCTGTATGA
+
+# shell
+
+mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.15.py
+1:ATGCGCCTGCGTCTGTATAG
+2:ATGCGCCTGCGTCTGTATAA
+
+# 16
+
+from itertools import cycle
+def crypt(text, key):
+    result = []
+    keys = cycle(key)
+    for ch in text:
+        result.append(chr(ord(ch)^ord(next(keys))))
+    return ''.join(result)
+# test
+if __name__ == "__main__":
+    plain = 'The quick brown fox jumps over the lazy dog'
+    key = 'Python_1'
+    print('Before crypt:{}'.format(plain))
+    encrypted = crypt(plain,key)
+    print('After crypt:{}'.format(encrypted))
+    decrypted = crypt(encrypted,key)
+    print('Decrypted:{}'.format(decrypted))
+
+mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.16.py
+Before crypt:The quick brown fox jumps over the lazy dog
+After crypt:HR;Y16
+                  HA#Y
+
+8T&4
+Decrypted:The quick brown fox jumps over the lazy dog
 
 ```
 
@@ -111,6 +468,56 @@ mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python
 
 #### 答案2
 
+```python
+
+# 15.2.py
+
+import re
+import collections
+def analyze_text(text):
+    # calculate all alpha
+    alpha = re.findall(r"[a-zA-Z0-9]",text)
+    alpha_count = len(alpha)
+    print(alpha)
+    print("Alphabet: {0}".format(alpha_count))
+    
+    # calculate English alpha
+    eng_alpha = re.findall(r"[a-zA-Z]",text)
+    eng_alpha_count = len(eng_alpha)
+    print(eng_alpha)
+    print("English Alphabet: {0}".format(eng_alpha_count))
+    
+    # calculate Number
+    number = re.findall(r"\d",text)
+    number_count = len(number)
+    print(number)
+    print("Number: {0}".format(number_count))
+    
+    # calculate Space
+    space = re.findall(r"\s",text)
+    space_count = len(space)
+    print(space)
+    print("Space: {0}".format(space_count))
+    
+    # calculate Other
+    other = re.findall(r"[^a-zA-Z0-9 ]",text)
+    other_count = len(other)
+    print(other)
+    print("Other: {0}".format(other_count))
+    
+
+if __name__ == "__main__":
+    filename = "calc.txt"
+    with open(filename,"r") as f:
+        text = f.read()
+    analyze_text(text.strip())
+
+# calc.txt
+
+hello 123>>>???
+
+```
+
 ### 第三题
 
 #### 题目3
@@ -120,3 +527,40 @@ mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python
 ![alt](./images/截屏2022-11-28%2020.33.45.png)
 
 #### 答案3
+
+```python
+
+import re
+
+def judgeNumber(number):
+    zhNumber = re.compile(r'^(\(\d{3}\)|\d{3}-)?\d{8}$')
+    result = True if zhNumber.match(number) else False
+    return result
+
+def judgeMailCode(code):
+    zhMailCode = re.compile(r'^\d{6}$')
+    result = True if zhMailCode.match(code) else False
+    return result
+
+def judgeWebSite(web):
+    WebSite = re.compile(r'^(?:https?:\/\/)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$')
+    result = True if WebSite.match(web) else False
+    return result
+    
+if __name__ == "__main__":
+    strNumber = str(input())
+    print(strNumber,' is correct? ', judgeNumber(strNumber))
+    strMailCode = str(input())
+    print(strMailCode,' is correct? ', judgeMailCode(strMailCode))
+    strWeb = str(input())
+    print(strWeb,' is correct? ', judgeWebSite(strWeb))
+
+mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.3.py
+021-12345678
+021-12345678  is correct?  True
+123456
+123456  is correct?  True
+https://www.r2coding.com 
+https://www.r2coding.com  is correct?  **True**
+
+```
\ No newline at end of file
diff --git a/changelog.md b/changelog.md
index 302ae7d..096ee8e 100644
--- a/changelog.md
+++ b/changelog.md
@@ -1277,3 +1277,555 @@ index 9adc395..3b5b7bc 100644
  
 
 ```
+```txt
+
+diff --git "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.1.4.py" "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.1.4.py"
+index e69de29..0c2a3b1 100644
+--- "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.1.4.py"
++++ "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.1.4.py"
+@@ -0,0 +1,9 @@
++s1 = "abABabCD"
++print(s1.startswith("AB"))
++print(s1.startswith("AB",2))
++print(s1.endswith("CD"))
++print(s1.count("ab"))
++print(s1.index("AB"))
++print(s1.find("cd"))
++print(s1.find("CD"))
++print(s1.replace("ab","xyz"))
+\ No newline at end of file
+diff --git "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.2.py" "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.2.py"
+index e69de29..2d4ad75 100644
+--- "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.2.py"
++++ "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.2.py"
+@@ -0,0 +1,39 @@
++import re
++import collections
++def analyze_text(text):
++    # calculate all alpha
++    alpha = re.findall(r"[a-zA-Z0-9]",text)
++    alpha_count = len(alpha)
++    print(alpha)
++    print("Alphabet: {0}".format(alpha_count))
++    
++    # calculate English alpha
++    eng_alpha = re.findall(r"[a-zA-Z]",text)
++    eng_alpha_count = len(eng_alpha)
++    print(eng_alpha)
++    print("English Alphabet: {0}".format(eng_alpha_count))
++    
++    # calculate Number
++    number = re.findall(r"\d",text)
++    number_count = len(number)
++    print(number)
++    print("Number: {0}".format(number_count))
++    
++    # calculate Space
++    space = re.findall(r"\s",text)
++    space_count = len(space)
++    print(space)
++    print("Space: {0}".format(space_count))
++    
++    # calculate Other
++    other = re.findall(r"[^a-zA-Z0-9 ]",text)
++    other_count = len(other)
++    print(other)
++    print("Other: {0}".format(other_count))
++    
++
++if __name__ == "__main__":
++    filename = "calc.txt"
++    with open(filename,"r") as f:
++        text = f.read()
++    analyze_text(text.strip())
+\ No newline at end of file
+diff --git "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.3.py" "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.3.py"
+index e69de29..50cc79b 100644
+--- "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.3.py"
++++ "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/15.3.py"
+@@ -0,0 +1,24 @@
++import re
++
++def judgeNumber(number):
++    zhNumber = re.compile(r'^(\(\d{3}\)|\d{3}-)?\d{8}$')
++    result = True if zhNumber.match(number) else False
++    return result
++
++def judgeMailCode(code):
++    zhMailCode = re.compile(r'^\d{6}$')
++    result = True if zhMailCode.match(code) else False
++    return result
++
++def judgeWebSite(web):
++    WebSite = re.compile(r'^(?:https?:\/\/)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$')
++    result = True if WebSite.match(web) else False
++    return result
++    
++if __name__ == "__main__":
++    strNumber = str(input())
++    print(strNumber,' is correct? ', judgeNumber(strNumber))
++    strMailCode = str(input())
++    print(strMailCode,' is correct? ', judgeMailCode(strMailCode))
++    strWeb = str(input())
++    print(strWeb,' is correct? ', judgeWebSite(strWeb))
+\ No newline at end of file
+diff --git "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232.md" "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232.md"
+index b46cff5..8489e2b 100644
+--- "a/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232.md"
++++ "b/Python/Python\347\250\213\345\272\217\350\256\276\350\256\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232/\347\254\254\345\205\253\346\254\241\344\275\234\344\270\232.md"
+@@ -97,7 +97,364 @@ mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python
+ 
+ # 4
+ 
+-
++s1 = "abABabCD"
++print(s1.startswith("AB"))
++print(s1.startswith("AB",2))
++print(s1.endswith("CD"))
++print(s1.count("ab"))
++print(s1.index("AB"))
++print(s1.find("cd"))
++print(s1.find("CD"))
++print(s1.replace("ab","xyz"))
++
++ub/3.codes/Python/Python程序设计作业/第八次作业/15.1.4.py
++False
++True
++True
++2
++2
++-1
++6
++xyzABxyzCD
++
++# 5
++
++s1 = 'one,two,three'
++print(s1.split(','))
++print(s1.rsplit(',',1))
++print(s1.partition(','))
++print(s1.rpartition(','))
++s2 = 'abc\n123\nxyz'
++print(s2.splitlines())
++print(s2.splitlines(True))
++s3 = ('a','b','c')
++s4 = ':'
++print(s4.join(s3))
++print(s4.join('123'))
++
++mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.5.py
++['one', 'two', 'three']
++['one,two', 'three']
++('one', ',', 'two,three')
++('one,two', ',', 'three')
++['abc', '123', 'xyz']
++['abc\n', '123\n', 'xyz']
++a:b:c
++1:2:3
++
++# 6
++
++table1 = str.maketrans('1234567','一二三四五六日')
++s1 = '1 3 4 9'
++print(s1.translate(table1))
++weeks = {'1': 'M一','2': 'T二','3': 'W三','4': 'T四','5': 'F五','6': 'S六','7': 'S日'}
++table2 = str.maketrans(weeks)
++print(s1.translate(table2))
++
++mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.6.py
++一 三 四 9
++M一 W三 T四 9
++
++# 7
++
++s1 = input('请输入字符串：') # 'The quick brown fox jumps over the lazy dog
++s2 = s1.upper() #转换为大写
++countall = len(s1) #字符串长度
++counta = s2.count('A');counte = s2.count('E');counti = s2.count('I')
++counto = s2.count('O');countu = s2.count('U')
++print('所有字母的总数为：',countall)
++print('元音字母出现的次数和频率分别为：')
++print('A:{0}\t{1:2.2f}%'.format(counta, counta/countall * 100))
++print('E:{0}\t{1:2.2f}%'.format(counte, counte/countall * 100))
++print('I:{0}\t{1:2.2f}%'.format(counti, counti/countall * 100))
++print('O:{0}\t{1:2.2f}%'.format(counto, counto/countall * 100))
++print('U:{0}\t{1:2.2f}%'.format(countu, countu/countall * 100))
++
++mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main) [1]> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.7.py
++请输入字符串：The quick brown fox jumps over the lazy dog
++所有字母的总数为： 43
++元音字母出现的次数和频率分别为：
++A:1     2.33%
++E:3     6.98%
++I:1     2.33%
++O:4     9.30%
++U:2     4.65%
++
++# 8
++
++# 15.1.8.py
++
++file_name = "text_count.txt"
++line_counts = 0
++word_counts = 0
++character_counts = 0
++with open(file_name, 'r', encoding = 'utf8') as f:
++    for line in f:
++        words = line.split()
++        line_counts += 1
++        word_counts += len(words)
++        character_counts += len(line)
++print("行数:", line_counts)
++print("单词个数:", word_counts)
++print("字符个数:", character_counts)
++
++# text_count.txt
++
++this is a word.
++and this is a testing of text count.
++
++# shell
++
++mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main) [1]> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.8.py
++行数: 2
++单词个数: 12
++字符个数: 52
++
++# 9
++
++import re
++print(re.findall('d','godness'))
++
++mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.9.py
++['d']
++
++# 10
++
++import os, re
++def check_email(strEmail):
++    regex_email = re.compile(r'^[\w\.\-]+@([\w\-]+\.)+[\w\-]+$')
++    result = True if regex_email.match(strEmail) else False
++    return result
++
++# test
++if __name__ == '__main__':
++    str1 = "hjiang@yahoo.com"
++    str2 = "hjiang.yahoo.com"
++    print(str1, 'is correct?', check_email(str1))
++    print(str2, 'is correct?', check_email(str2))
++
++mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.10.py
++hjiang@yahoo.com is correct? True
++hjiang.yahoo.com is correct? False
++
++# 11
++
++import os,re
++def tasklist():
++    regex_tast = re.compile(r'([\w.]+(?:[\w.]+)*)\s\s+(\d+)\w+\s\s+\d+\s\s+([\d,]+K)')
++    with os.popen('tasklist /nh','r') as f:
++        for line in f:
++            print(regex_tast.findall(line.strip()))
++
++if __name__ == '__main__':
++    tasklist()
++
++mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.11.py
++/bin/sh: tasklist: command not found
++
++# 12
++
++import re
++def html_txt(htmlwithtag):
++    regex_href = re.compile(r'<.+?>')
++    return regex_href.sub('',htmlwithtag)
++
++# test
++if __name__ == '__main__':
++    htmltext = r'<a href=\"index.html\"Welcome to Python world!</a>'
++    print(html_txt(htmltext))
++
++mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.12.py
++
++# 13
++
++import re,urllib.request
++def url_extract(homepage):
++    regex_href = re.compile(r'href="(.+?)"')
++    f = urllib.request.urlopen(homepage)
++    webcontents = f.read().decode()
++    matches = regex_href.finditer(webcontents)
++    for m in matches:
++        print(m.group(1))
++# test
++if __name__ == '__main__':
++    www = r'http://www.baidu.com'
++    url_extract(www)
++
++mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.13.py
++/favicon.ico
++/content-search.xml
++//www.baidu.com/img/baidu_85beaf5496f291521eb75ba38eacbd87.svg
++//dss0.bdstatic.com
++//dss1.bdstatic.com
++//ss1.bdstatic.com
++//sp0.baidu.com
++//sp1.baidu.com
++//sp2.baidu.com
++https://psstatic.cdn.bcebos.com/video/wiseindex/aa6eef91f8b5b1a33b454c401_1660835115000.png
++//
++/
++javascript:;
++https://passport.baidu.com/v2/?login&tpl=mn&u=http%3A%2F%2Fwww.baidu.com%2F&sms=5
++http://news.baidu.com
++https://www.hao123.com?src=from_pc
++http://map.baidu.com
++http://tieba.baidu.com/
++https://haokan.baidu.com/?sfrom=baidu-top
++http://image.baidu.com/
++https://pan.baidu.com?from=1026962h
++http://www.baidu.com/more/
++https://passport.baidu.com/v2/?login&tpl=mn&u=http%3A%2F%2Fwww.baidu.com%2F&sms=5
++javascript:;
++javascript:;
++//www.baidu.com/s?wd=%E7%99%BE%E5%BA%A6%E7%83%AD%E6%90%9C&amp;sa=ire_dl_gh_logo_texing&amp;rsv_dl=igh_logo_pcs
++/
++javascript:;
++javascript:;
++javascript:;
++https://www.baidu.com/s?wd=2022%E5%8D%A1%E5%A1%94%E5%B0%94%E4%B8%96%E7%95%8C%E6%9D%AF&rsv_dl=Worldcup_PC_2022_index_tips
++https://top.baidu.com/board?platform=pc&sa=pcindex_entry
++https://www.baidu.com/s?wd=%E5%AF%B9%E4%BA%8E%E5%B0%81%E6%8E%A7%E4%BA%BA%E5%91%98+%E5%A6%82%E4%BD%95%E4%BF%9D%E9%9A%9C%E6%AD%A3%E5%B8%B8%E5%B0%B1%E5%8C%BB%EF%BC%9F&amp;sa=fyb_n_homepage&amp;rsv_dl=fyb_n_homepage&amp;from=super&amp;cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;rsv_idx=2&amp;hisfilter=1
++https://www.baidu.com/s?wd=%E6%8B%AF%E6%95%91%E4%BA%86%E7%94%9F%E5%91%BD%E7%9A%84%E4%B8%AD%E5%9B%BD%EF%BC%8C%E4%B8%8D%E5%BA%94%E8%A2%AB%E8%AF%AF%E8%A7%A3&amp;sa=fyb_n_homepage&amp;rsv_dl=fyb_n_homepage&amp;from=super&amp;cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;rsv_idx=2&amp;hisfilter=1
++https://www.baidu.com/s?wd=%E5%AA%92%E4%BD%93%E6%8E%A2%E8%AE%BF%E6%A0%B8%E5%AD%90%E5%9F%BA%E5%9B%A0%3A%E5%88%9B%E5%A7%8B%E4%BA%BA%E7%88%B6%E4%BA%B2%E4%B8%BA%E6%95%99%E5%B8%88&amp;sa=fyb_n_homepage&amp;rsv_dl=fyb_n_homepage&amp;from=super&amp;cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;rsv_idx=2&amp;hisfilter=1
++https://www.baidu.com/s?wd=%E5%B9%BF%E5%B7%9E%E6%B5%B7%E7%8F%A0%E8%AF%95%E8%A1%8C%E2%80%9C%E9%97%AD%E7%8E%AF%E6%B3%A1%E6%B3%A1%E2%80%9D%E6%8E%A8%E8%BF%9B%E5%A4%8D%E5%B7%A5&amp;sa=fyb_n_homepage&amp;rsv_dl=fyb_n_homepage&amp;from=super&amp;cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;rsv_idx=2&amp;hisfilter=1
++https://www.baidu.com/s?wd=%E9%9F%A9%E5%9B%BDvs%E5%8A%A0%E7%BA%B3&amp;sa=fyb_n_homepage&amp;rsv_dl=fyb_n_homepage&amp;from=super&amp;cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;rsv_idx=2&amp;hisfilter=1
++https://www.baidu.com/s?wd=%E5%AA%92%E4%BD%93%3A%E6%96%B0%E7%96%86%E6%9A%B4%E9%9B%AA+%E6%9C%89%E7%89%A7%E6%B0%91%E5%A4%B1%E8%81%94%E7%89%9B%E7%BE%8A%E5%86%BB%E6%AD%BB&amp;sa=fyb_n_homepage&amp;rsv_dl=fyb_n_homepage&amp;from=super&amp;cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;rsv_idx=2&amp;hisfilter=1
++//home.baidu.com
++http://ir.baidu.com
++//www.baidu.com/duty
++//help.baidu.com
++https://e.baidu.com/?refer=1271
++http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001
++https://beian.miit.gov.cn
++//www.baidu.com/licence/
++https://www.baidu.com/s?rtt=1&amp;bsst=1&amp;cl=2&amp;tn=news
++http://v.baidu.com/v?ct=301989888&amp;rn=20&amp;pn=0&amp;db=0&amp;s=25&amp;ie=utf-8
++http://image.baidu.com/i?tn=baiduimage&amp;ps=1&amp;ct=201326592&amp;lm=-1&amp;cl=2&amp;nc=1&amp;ie=utf-8
++http://zhidao.baidu.com/q?ct=17&amp;pn=0&amp;tn=ikaslist&amp;rn=10&amp;fr=wwwt
++http://wenku.baidu.com/search?lm=0&amp;od=0&amp;ie=utf-8
++http://tieba.baidu.com/f?fr=wwwt
++https://map.baidu.com/?newmap=1&amp;ie=utf-8&amp;s=s
++https://b2b.baidu.com/s?fr=wwwt
++http://www.baidu.com/more/
++//www.baidu.com/s?rtt=1&bsst=1&cl=2&tn=news&word=
++http://ss.bdimg.com/static/superman/css/ubase_sync-d600f57804.css?v=md5
++
++# 14
++
++# 15.1.14.py
++
++import re
++import collections
++def analyze_text(text):
++    paragraphs = re.split("\n\n",text)
++    paragraph_count=len(paragraphs)
++    print("段落数:{0}".format(paragraph_count))
++    lines=re.split("\n",text)
++    line_count=len(lines)
++    print("行数:{0}".format(line_count))
++    sentences=re.split("[.?!]",text)
++    sentence_count=len(sentences)
++    print("句数:{0}".format(sentence_count))
++    words=re.split(r"\W+",text)
++    word_count=len(words)
++    print("单词数:{0}".format(word_count))
++    freqs=collections.Counter(words)
++    print("频率最高的10个单词:")
++    for (w,n) in freqs.most_common(10):
++        print("{0:10}:{1:10}".format(w,n))
++if __name__ == "__main__":
++    filename = "tomsawyer.txt"
++    with open(filename,"r") as f:
++        text=f.read()
++    analyze_text(text.strip())
++
++# tomsawyer.txt
++
++tomsawyer.txt
++hello
++hi
++hello
++what
++
++# shell
++
++mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.14.py
++段落数:1
++行数:5
++句数:2
++单词数:6
++频率最高的10个单词:
++hello     :         2
++tomsawyer :         1
++txt       :         1
++hi        :         1
++what      :         1
++
++# 15
++
++# 15.1.15.py
++
++def isPotentialGene(dna):
++    # 基因长度为3的倍数，否则返回False
++    if len(line) % 3 != 0:
++        return False
++    # 基因以ATG开始，否则返回False
++    if not dna.startswith('ATG'):
++        return False
++    # 基因以TAG、TAA或者TGA结束，否则返回False
++    if dna[-3:] not in ('TAG', 'TAA', 'TGA'):
++        return False
++    # 基因中间部分不包括密码子TAG、TAA或者TGA，否则返回False
++    for i in range(3, len(dna)-3,3):
++        if dna[i:i+3] in ('TAG', 'TAA', 'TGA'):
++            return False
++        return True
++    
++if __name__ == "__main__":
++    filename = "gene.txt"
++    for lineno, line in enumerate(open(filename,"r")):
++        if isPotentialGene(line.strip()):
++            print("{0}:{1}".format(lineno+1,line.strip()))
++
++# gene.txt
++
++ATGCGCCTGCGTCTGTATAG
++ATGCGCCTGCGTCTGTATAA
++ATGCGCCTGCGTCTGTATGA
++
++# shell
++
++mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.15.py
++1:ATGCGCCTGCGTCTGTATAG
++2:ATGCGCCTGCGTCTGTATAA
++
++# 16
++
++from itertools import cycle
++def crypt(text, key):
++    result = []
++    keys = cycle(key)
++    for ch in text:
++        result.append(chr(ord(ch)^ord(next(keys))))
++    return ''.join(result)
++# test
++if __name__ == "__main__":
++    plain = 'The quick brown fox jumps over the lazy dog'
++    key = 'Python_1'
++    print('Before crypt:{}'.format(plain))
++    encrypted = crypt(plain,key)
++    print('After crypt:{}'.format(encrypted))
++    decrypted = crypt(encrypted,key)
++    print('Decrypted:{}'.format(decrypted))
++
++mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python3 /Users/mikeshinoda/Github/3.codes/Python/Python程序设计作业/第八次作业/15.1.16.py
++Before crypt:The quick brown fox jumps over the lazy dog
++After crypt:HR;Y16
++                  HA#Y
++
++8T&4
++Decrypted:The quick brown fox jumps over the lazy dog
+ 
+ ```
+ 
+@@ -111,6 +468,56 @@ mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python
+ 
+ #### 答案2
+ 
++```python
++
++# 15.2.py
++
++import re
++import collections
++def analyze_text(text):
++    # calculate all alpha
++    alpha = re.findall(r"[a-zA-Z0-9]",text)
++    alpha_count = len(alpha)
++    print(alpha)
++    print("Alphabet: {0}".format(alpha_count))
++    
++    # calculate English alpha
++    eng_alpha = re.findall(r"[a-zA-Z]",text)
++    eng_alpha_count = len(eng_alpha)
++    print(eng_alpha)
++    print("English Alphabet: {0}".format(eng_alpha_count))
++    
++    # calculate Number
++    number = re.findall(r"\d",text)
++    number_count = len(number)
++    print(number)
++    print("Number: {0}".format(number_count))
++    
++    # calculate Space
++    space = re.findall(r"\s",text)
++    space_count = len(space)
++    print(space)
++    print("Space: {0}".format(space_count))
++    
++    # calculate Other
++    other = re.findall(r"[^a-zA-Z0-9 ]",text)
++    other_count = len(other)
++    print(other)
++    print("Other: {0}".format(other_count))
++    
++
++if __name__ == "__main__":
++    filename = "calc.txt"
++    with open(filename,"r") as f:
++        text = f.read()
++    analyze_text(text.strip())
++
++# calc.txt
++
++hello 123>>>???
++
++```
++
+ ### 第三题
+ 
+ #### 题目3
+@@ -120,3 +527,40 @@ mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/python
+ ![alt](./images/截屏2022-11-28%2020.33.45.png)
+ 
+ #### 答案3
++
++```python
++
++import re
++
++def judgeNumber(number):
++    zhNumber = re.compile(r'^(\(\d{3}\)|\d{3}-)?\d{8}$')
++    result = True if zhNumber.match(number) else False
++    return result
++
++def judgeMailCode(code):
++    zhMailCode = re.compile(r'^\d{6}$')
++    result = True if zhMailCode.match(code) else False
++    return result
++
++def judgeWebSite(web):
++    WebSite = re.compile(r'^(?:https?:\/\/)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$')
++    result = True if WebSite.match(web) else False
++    return result
++    
++if __name__ == "__main__":
++    strNumber = str(input())
++    print(strNumber,' is correct? ', judgeNumber(strNumber))
++    strMailCode = str(input())
++    print(strMailCode,' is correct? ', judgeMailCode(strMailCode))
++    strWeb = str(input())
++    print(strWeb,' is correct? ', judgeWebSite(strWeb))
++
++mikeshinoda@Mikes-Air ~/G/3/P/P/第八次作业 (main)> /opt/homebrew/bin/pyth
\ No newline at end of file

```
```txt

diff --git a/changelog.md b/changelog.md
index e6cb9d7..8206fe0 100644
--- a/changelog.md
+++ b/changelog.md
@@ -2401,3 +2401,5 @@ index 302ae7d..096ee8e 100644
 \ No newline at end of file
 
 ```
+```txt
+

```
```txt

diff --git a/changelog.md b/changelog.md
index eaf766d..3a45d3f 100644
--- a/changelog.md
+++ b/changelog.md
@@ -2415,3 +2415,5 @@ index e6cb9d7..8206fe0 100644
 +
 
 ```
+```txt
+

```
