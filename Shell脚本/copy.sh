rm -rf /Users/mikeshinoda/Desktop/hexo-page/source/_posts
files=$(ls)
for i in $files;
do
        echo "copy: ${i} to " /Users/mikeshinoda/Desktop/hexo-page/source/_posts
        cp -R "${i}" /Users/mikeshinoda/Desktop/hexo-page/source/_posts
done
echo "----------------------------"
echo "copy.sh finished..."
echo "----------------------------"