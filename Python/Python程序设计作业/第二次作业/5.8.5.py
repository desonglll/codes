
s = [9, 7, 8, 3, 2, 1, 5, 6]

for i in range(0, len(s)):
    if s[i] % 2 == 0:
        s[i] = pow(s[i], 2)

print(s)
