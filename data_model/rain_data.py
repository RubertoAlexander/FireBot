import pandas as pd
import matplotlib.pyplot as plt

rainfall = pd.read_csv("weatherAUS.csv", usecols=[0, 4])
rainfall.plot.line(title="Australian Rainfall")
plt.savefig("Rainfall.png")