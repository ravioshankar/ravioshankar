import matplotlib.pyplot as plt
import numpy as np

# User input - Set 1
citySalarySet1 = {
  'Chicago': 90000,
  'DC': 120000,
  'NYC': 150000,
  'Miami': 120000,
  'SF': 210000
}

# User input - Set 2
citySalarySet2 = {
  'Chicago': 80000,
  'DC': 110000,
  'NYC': 177000,
  'Miami': 95000,
  'SF': 300000
}

# Extracting data for x and y axis
labels = list(citySalarySet1.keys())
data1 = list(citySalarySet1.values())
data2 = list(citySalarySet2.values())

# Creating radar chart
angles = np.linspace(0, 2*np.pi, len(labels), endpoint=False)
angles = np.concatenate((angles,[angles[0]]))
data1 = np.concatenate((data1,[data1[0]]))
data2 = np.concatenate((data2,[data2[0]]))

fig = plt.figure()
ax = fig.add_subplot(111, polar=True)
ax.plot(angles, data1, 'o-', linewidth=2, label='Set 1')
ax.fill(angles, data1, alpha=0.25)
ax.plot(angles, data2, 'o-', linewidth=2, label='Set 2')
ax.fill(angles, data2, alpha=0.25)
# ax.set_thetagrids(angles * 180/np.pi, labels)
ax.set_title('Salary Comparison Radar Chart')
ax.grid(True)
ax.legend(loc='upper right')

plt.show()
