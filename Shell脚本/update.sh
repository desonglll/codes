echo "------------------------"
echo "deploy to markdown..."
bash deploy-markdown.sh
echo "------------------------"

bash copy.sh

bash deploy-hexo.sh