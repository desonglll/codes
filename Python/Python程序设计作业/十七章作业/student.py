import sqlite3
conn = sqlite3.connect('data.db')
cur = conn.cursor()
cur.execute("PRAGMA foreign_keys=ON")


# 构建数据表创建及文本数据导入函数
def create_table(tab_name, col_prop_list, txt_path, conn=conn, cur=cur):
    col_name_props = ','.join(col_prop_list)
    cur.execute('CREATE TABLE IF NOT EXISTS %s(%s)' %
                (tab_name, col_name_props))
    f = open(txt_path, 'r')
    for x in f:
        x = x.rstrip().split(',')
        a = ["'%s'" % x[i] for i in range(len(x))]
        x = ','.join(a)
        cur.execute('INSERT INTO %s values(%s)' % (tab_name, x))
    f.close()
    print('%s创建成功' % tab_name)
    print('    %s导入成功' % txt_path)
    conn.commit()


# 构建数据表结构查询函数
def table_struct(tab_name, cur=cur):
    cur.execute("PRAGMA table_info(%s)" % tab_name)
    t_struct = cur.fetchall()
    for item in t_struct:
        for x in item:
            x = str(x)
            print(x, sep='\t', end=' ')
        print()

# 构建数据表内容查询函数


def table_quer(tab_name, col_names='*', num_line=None, cur=cur):
    cur.execute('select %s from %s' % (col_names, tab_name))
    Li = cur.fetchall()
    for line in Li[:num_line]:
        for item in line:
            print(item, sep='\t', end=' ')
        print()

# 数据表记录修改函数
def table_update():
    cur.execute('''SELECT 学生表.学号,学生表.姓名,课程表.课程名称,成绩表.成绩
               FROM 学生表 JOIN 成绩表 JOIN 课程表 
               ON 学生表.学号=成绩表.学号 AND 课程表.课程号=成绩表.课程号
               ORDER BY 学生表.学号 ASC''')
    number = str(input("请输入要修改的学号："))
    for line in cur.fetchall():
        temp = list(line)
        if temp[0] == number:
            print(temp)
            name = str(input("请输入要更改的姓名：（回车代表不修改）"))
            major = str(input("请输入要更改的专业：（回车代表不修改）"))
            score = str(input("请输入要更改的成绩：（回车代表不修改）"))
            if name != "":
                temp[1] = name
            if major != "":
                temp[2] = major
            if score != "":
                temp[3] = score
            print("修改过后的数据：")
            tup = tuple(temp)
            for x in tup:
                print(x, sep='\t', end= ' ')

def table_remove():
    cur.execute('''SELECT 学生表.学号,学生表.姓名,课程表.课程名称,成绩表.成绩
               FROM 学生表 JOIN 成绩表 JOIN 课程表 
               ON 学生表.学号=成绩表.学号 AND 课程表.课程号=成绩表.课程号
               ORDER BY 学生表.学号 ASC''')
    number = str(input("请输入要修改的学号："))
    for line in cur.fetchall():
        if number == line[0]:
            print(line)
            if str(input("Delete?")) == "y":
                del line
        

if __name__ == '__main__':
    # （1）创建专业表
    tab_name_1 = '专业表'
    col_prop_list_1 = ['专业编号 varchar(7) primary key',
                       '专业名称 varchar(7)']
    txt_path_1 = '专业表.txt'
    create_table(tab_name_1, col_prop_list_1, txt_path_1)
    # （2）创建学生表
    tab_name_2 = '学生表'
    col_prop_list_2 = ['学号 varchar(7) primary key',
                       '姓名 varchar(7)',
                       '性别 tinyint',
                       '生日 text NULL',
                       '专业编号 varchar(7) REFERENCES 专业表(专业编号) ON UPDATE CASCADE ON DELETE CASCADE',
                       '奖学金 numeric NULL',
                       '党员 tinyint NULL',
                       '照片 blob NULL',
                       '备注 text NULL']
    txt_path_2 = '学生表.txt'
    create_table(tab_name_2, col_prop_list_2, txt_path_2)
    # （3） 创建课程表
    tab_name_3 = '课程表'
    col_prop_list_3 = ['课程号 varchar(7) primary key',
                       '课程名称 varchar(7) NULL',
                       '先修课程代码 varchar(7) NULL',
                       '学时 smallint', '学分 smallint']
    txt_path_3 = '课程表.txt'
    create_table(tab_name_3, col_prop_list_3, txt_path_3)

    #  （4）创建成绩表
    tab_name_4 = '成绩表'
    col_prop_list_4 = ['学号 varchar(7) REFERENCES 学生表(学号) ON UPDATE CASCADE ON DELETE CASCADE',
                       '课程号 varchar(7) REFERENCES 课程表(课程号) ON UPDATE CASCADE ON DELETE CASCADE',
                       '成绩 smallint NULL',
                       'PRIMARY KEY (学号,课程号)']
    txt_path_4 = '成绩表.txt'
    create_table(tab_name_4, col_prop_list_4, txt_path_4)
