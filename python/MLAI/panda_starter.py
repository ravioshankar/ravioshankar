import pandas as pd

melbourne_data_path = '../melb_data.csv'

melbourne_data = pd.read_csv(melbourne_data_path)

melbourne_data.describe()
