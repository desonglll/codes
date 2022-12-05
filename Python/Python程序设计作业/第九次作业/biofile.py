from io import BytesIO
f = BytesIO()
f.write('中午'.encode('utf-8'))
f.seek(0)
b = f.read()
print(b)
print(f.getvalue())