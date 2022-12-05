class Temperature():
    def __init__(self):
        self.degree = 0
        self.Fahrenheit = 0
        self.Celsius = 0

    def ToFahrenheit(self):
        self.Celsius = int(input("Please enter Celsius Temperature: "))
        self.Fahrenheit=self.Celsius * 9 / 5 + 32
        print("Celsius: ", self.Celsius)
        print("Fahrenheit: ", self.Fahrenheit)

    def ToCelsius(self):
        self.Fahrenheit = int(input("Please enter Fahrenheit Temperature: "))
        self.Celsius=(self.Fahrenheit - 32) * 5 / 9
        print("Fahrenheit: ", self.Fahrenheit)
        print("Celsius: ", self.Celsius)

tem = Temperature()
tem.ToFahrenheit()
tem.ToCelsius()
