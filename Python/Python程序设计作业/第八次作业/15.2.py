import re
import collections
def analyze_text(text):
    # calculate all alpha
    alpha = re.findall(r"[a-zA-Z0-9]",text)
    alpha_count = len(alpha)
    print(alpha)
    print("Alphabet: {0}".format(alpha_count))
    
    # calculate English alpha
    eng_alpha = re.findall(r"[a-zA-Z]",text)
    eng_alpha_count = len(eng_alpha)
    print(eng_alpha)
    print("English Alphabet: {0}".format(eng_alpha_count))
    
    # calculate Number
    number = re.findall(r"\d",text)
    number_count = len(number)
    print(number)
    print("Number: {0}".format(number_count))
    
    # calculate Space
    space = re.findall(r"\s",text)
    space_count = len(space)
    print(space)
    print("Space: {0}".format(space_count))
    
    # calculate Other
    other = re.findall(r"[^a-zA-Z0-9 ]",text)
    other_count = len(other)
    print(other)
    print("Other: {0}".format(other_count))
    

if __name__ == "__main__":
    filename = "calc.txt"
    with open(filename,"r") as f:
        text = f.read()
    analyze_text(text.strip())