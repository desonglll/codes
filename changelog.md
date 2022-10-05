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
