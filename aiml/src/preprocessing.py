
import pandas as pd
from sklearn.preprocessing import OneHotEncoder

def load_data(filepath):
    data = pd.read_csv(filepath)
    return data

def preprocess_data(data):
    data['Date'] = pd.to_datetime(data['Date']).dt.to_period('D')
    encoder = OneHotEncoder(sparse=False, drop='first')  
    encoded_features = encoder.fit_transform(data[['Category', 'Item']])
    encoded_features_df = pd.DataFrame(encoded_features, columns=encoder.get_feature_names_out(['Category', 'Item']))
    data = pd.concat([data, encoded_features_df], axis=1)
    return data

def save_preprocessed_data(data, filepath):
    # Ensure the filepath ends with a filename, e.g., preprocessed_data.csv
    full_path = filepath if filepath.endswith('.csv') else filepath + 'preprocessed_data.csv'
    data.to_csv(full_path, index=False)

data = load_data('aiml/dataset/Demand_Forecasting_Dataset (1).csv')
final_data = preprocess_data(data)
save_preprocessed_data(final_data, 'aiml/dataset/')  # Make sure the path ends correctly
