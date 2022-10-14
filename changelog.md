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
