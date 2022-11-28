import os, re
def check_email(strEmail):
    regex_email = re.compile(r'^[\w\.\-]+@([\w\-]+\.)+[\w\-]+$')
    result = True if regex_email.match(strEmail) else False
    return result

# test
if __name__ == '__main__':
    str1 = "hjiang@yahoo.com"
    str2 = "hjiang.yahoo.com"
    print(str1, 'is correct?', check_email(str1))
    print(str2, 'is correct?', check_email(str2))