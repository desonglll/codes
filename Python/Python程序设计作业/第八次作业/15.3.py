import re

def judgeNumber(number):
    zhNumber = re.compile(r'^(\(\d{3}\)|\d{3}-)?\d{8}$')
    result = True if zhNumber.match(number) else False
    return result

def judgeMailCode(code):
    zhMailCode = re.compile(r'^\d{6}$')
    result = True if zhMailCode.match(code) else False
    return result

def judgeWebSite(web):
    WebSite = re.compile(r'^(?:https?:\/\/)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$')
    result = True if WebSite.match(web) else False
    return result
    
if __name__ == "__main__":
    strNumber = str(input())
    print(strNumber,' is correct? ', judgeNumber(strNumber))
    strMailCode = str(input())
    print(strMailCode,' is correct? ', judgeMailCode(strMailCode))
    strWeb = str(input())
    print(strWeb,' is correct? ', judgeWebSite(strWeb))