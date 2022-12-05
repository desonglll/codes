import csv
def writecsv1(csvfilepath):
    headers = ['学号', '姓名', '性别', '班级', '语文', '数字', '英语']
    rows = [('101511', '林德松', '男', '一班', '72', '85', '82'),
            ('101513', '张三', '男', '一班', '75', '82', '51')]
    with open(csvfilepath, 'w', newline='') as f:
        f_csv = csv.writer(f)
        f_csv.writerow(headers)
        f_csv.writerows(rows)

if __name__ == '__main__':
    writecsv1(r'./scores.csv')
