import math

class MyMath():
    def __init__(self, round) -> None:
        self.round = round
    
    def Circumference(self):
        circumference = self.round * math.pi * 2
        return circumference
    
    def Area(self):
        area = pow(self.round,2) * math.pi
        return area

    def Volume(self):
        volume = 4 / 3 * math.pi * pow(self.round, 3)
        return volume

round = int(input("Please enter the round: "))
result = MyMath(round)
print("Circumference of circle is: ", "%.2f"%result.Circumference())
print("Area of circle is: ", "%.2f"%result.Area())
print("Volume of ball is: ", "%.2f"%result.Volume())
