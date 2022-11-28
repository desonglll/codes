from itertools import cycle
def crypt(text, key):
    result = []
    keys = cycle(key)
    for ch in text:
        result.append(chr(ord(ch)^ord(next(keys))))
    return ''.join(result)
# test
if __name__ == "__main__":
    plain = 'The quick brown fox jumps over the lazy dog'
    key = 'Python_1'
    print('Before crypt:{}'.format(plain))
    encrypted = crypt(plain,key)
    print('After crypt:{}'.format(encrypted))
    decrypted = crypt(encrypted,key)
    print('Decrypted:{}'.format(decrypted))