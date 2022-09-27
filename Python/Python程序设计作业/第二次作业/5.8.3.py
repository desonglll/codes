listA = ['python', '语', '言', '是', '一', '门', '动', '态', '语', '言']


def deleteDuplicatedElementFromList(list):
    resultList = []
    for item in list:
        if not item in resultList:
            resultList.append(item)
    return resultList


print(deleteDuplicatedElementFromList(listA))
