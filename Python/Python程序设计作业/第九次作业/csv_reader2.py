import csv
def readcsv2(csvfilepath):
    with open(csvfilepath, newline='') as f:
        f_csv = csv.reader(f)
        headers = next(f_csv)
        print(headers)
        for row in f_csv:
            print(row)

if __name__ == '__main__':
    readcsv2(r'./scores.csv')