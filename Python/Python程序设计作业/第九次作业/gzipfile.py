import sys, gzip
filename = sys.argv[0]
filenamezip = filename + '.gz'
# compress
with gzip.open(filenamezip, 'wt') as f:
    for s in open(filename, 'r'):
        f.write(s)
# uncompress
for s in gzip.open(filenamezip, 'r'):
    print(s)