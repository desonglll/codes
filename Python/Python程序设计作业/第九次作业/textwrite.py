with open(r'./file.txt','w') as f:
    f.write('This is a write operation\n')
    f.write('abc\n')
    f.writelines(['456\n','def\n'])