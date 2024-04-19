

import pandas as pd
from statsmodels.tsa.arima.model import ARIMA
import pickle
import os

def load_data(filepath):
    data = pd.read_csv(filepath, index_col='Date', parse_dates=True)
    data.index = pd.DatetimeIndex(data.index).to_period('D')
    return data

def train_category_item_models(data):
    models = {}
    print("Training models for each category and item...")
    for category in data['Category'].unique():
        category_data = data[data['Category'] == category]
        print(f"Processing category: {category}, Items: {len(category_data['Item'].unique())}")
        models[category] = {}
        for item in category_data['Item'].unique():
            item_data = category_data[category_data['Item'] == item]
            print(f"  Item: {item}, Data points: {len(item_data['Demand'])}")
            if len(item_data['Demand']) >= 20:
                print(f"    Training model for {item}...")
                model = ARIMA(item_data['Demand'], order=(1,1,1)).fit()
                models[category][item] = model
            else:
                print(f"    Not enough data to train model for {item}.")
    return models

def save_models(models, directory):
    print(f"Saving models to {directory}...")
    if not os.path.exists(directory):
        os.makedirs(directory)
    for category, items in models.items():
        for item, model in items.items():
            model_path = f'{directory}/{category}_{item}_model.pkl'
            print(f"  Saving {item} model to {model_path}")
            with open(model_path, 'wb') as f:
                pickle.dump(model, f)

# Main Execution
if __name__ == '__main__':
    data = load_data('aiml/dataset/preprocessed_data.csv')
    models = train_category_item_models(data)
    save_models(models, 'aiml/model')

