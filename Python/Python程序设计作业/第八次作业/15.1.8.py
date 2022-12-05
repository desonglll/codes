file_name = "text_count.txt"
line_counts = 0
word_counts = 0
character_counts = 0
with open(file_name, 'r', encoding = 'utf8') as f:
    for line in f:
        words = line.split()
        line_counts += 1
        word_counts += len(words)
        character_counts += len(line)
print("行数:", line_counts)
print("单词个数:", word_counts)
print("字符个数:", character_counts)