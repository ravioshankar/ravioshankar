import matplotlib.pyplot as plt

# User input
age_salary = {
    '25': 60000,
    '35': 100000,
    '45': 200000,
    '55': 300000
}

# Extracting data for x and y axis
x_data = list(age_salary.keys())
y_data = list(age_salary.values())

# Creating bar chart
plt.scatter(x_data, y_data)

# Adding labels and title
plt.xlabel('Age')
plt.ylabel('Salary')
plt.title('Age vs Salary')

# Displaying chart
plt.show()
