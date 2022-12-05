import csv
def writecsv2(csvfilepath):
    headers = ['学号', '姓名', '语文', '数学', '英语']
    rows = [{'学号': '101511', '姓名': '林德松', '语文': '72', '数学': '85', '英语': '82'},
            {'学号': '101513', '姓名': '李四', '语文': '75', '数学': '80', '英语': '81'}]
    with open(csvfilepath, 'w', newline='') as f:
        f_csv = csv.DictWriter(f, headers)
        f_csv.writeheader()
        f_csv.writerows(rows)
if __name__ == '__main__':
    writecsv2(r'scores2.csv')