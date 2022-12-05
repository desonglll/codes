import re
def html_txt(htmlwithtag):
    regex_href = re.compile(r'<.+?>')
    return regex_href.sub('',htmlwithtag)

# test
if __name__ == '__main__':
    htmltext = r'<a href=\"index.html\"Welcome to Python world!</a>'
    print(html_txt(htmltext))