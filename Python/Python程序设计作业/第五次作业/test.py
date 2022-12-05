class parent:
    def __init__(self, param):
        self.v1 = param

class child(parent):
    def __init__(self, param):
        parent.__init__(self, param)
        self.v2 = param
obj = child(100)
print("%d %d" % (obj.v1, obj.v2))
