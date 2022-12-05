import json
with open(r'./data.json', 'r') as f:
    urls = json.load(f)
    print(urls)