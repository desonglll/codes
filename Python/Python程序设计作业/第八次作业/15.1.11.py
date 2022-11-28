import os,re
def tasklist():
    regex_tast = re.compile(r'([\w.]+(?:[\w.]+)*)\s\s+(\d+)\w+\s\s+\d+\s\s+([\d,]+K)')
    with os.popen('tasklist /nh','r') as f:
        for line in f:
            print(regex_tast.findall(line.strip()))

if __name__ == '__main__':
    tasklist()