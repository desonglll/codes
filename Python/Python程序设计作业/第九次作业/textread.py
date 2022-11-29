with open(r'./file.txt','r') as f:
    for s in f.readlines():
        print(s,end="")