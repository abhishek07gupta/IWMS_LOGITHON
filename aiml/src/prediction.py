import os
import pickle
import sys
import pandas as pd

def load_models(directory):
    models = {}
    for filename in os.listdir(directory):
        if filename.endswith('.pkl') and filename != 'model.pkl':  # Skip the invalid file
            base_name = filename.replace('_model.pkl', '')
            parts = base_name.split('_')
            category = parts[0]
            item = '_'.join(parts[1:])  
            if category not in models:
                models[category] = {}
            path = os.path.join(directory, filename)
            with open(path, 'rb') as f:
                models[category][item] = pickle.load(f)
    return models

def make_predictions(models, category, item, steps=5):
    model = models.get(category, {}).get(item, None)
    if model is not None:
        forecast = model.get_forecast(steps=steps)
        return forecast
    else:
        return None

def save_predictions_to_csv(predictions, filename):
    predictions.to_frame().to_csv(filename, header=False)
    print(f"Predictions saved to {filename}")

if __name__ == '__main__':
    models = load_models('aiml/model')
    
    for category in models:
        print(f"\nCategory: {category}")
        for item in models[category]:
            predictions = make_predictions(models, category, item, steps=5)
            print(f"\nPredictions for {item} in {category}:")
            print(predictions)
            print("\n")


