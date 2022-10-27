DictStudent = [
    {'name': '郭靖', 'gender': '男','age': 19},
    {'name': '黄蓉', 'gender': '女','age': 18},
    {'name': '杨康', 'gender': '男','age': 18},
    {'name': '李莫愁', 'gender': '女','age': 20},
    {'name': '穆念慈', 'gender': '女','age': 19},
    {'name': '瑛姑', 'gender': '女','age': 19}
]
male = 0
female = 0
for i in DictStudent:
    if i['gender'] == '男':
        male += 1
    else:
        female += 1
# print('男女生人数为：',{"男":{},"女":{}}.format(male,female))
