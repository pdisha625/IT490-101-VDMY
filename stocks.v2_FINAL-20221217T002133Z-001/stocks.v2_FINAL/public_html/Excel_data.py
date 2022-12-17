import pandas as pd
import matplotlib.pyplot as plt
var = pd.read_excel("IT490 SQL DATA.xlsx")
print(var)
x = list(var['X values'])
y = list(var['Y values'])
plt.figure(figsize=(10,10))
plt.style.use('seaborn')
plt.scatter(x,y,marker="*",s=100,edgecolors="black",c="yellow")
plt.title("Pharma stock prices")
plt.show()

