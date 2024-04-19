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
    if len(sys.argv) < 3:
        print("Usage: python prediction.py [category] [item]")
        sys.exit(1)

    user_category = sys.argv[1]
    user_item = sys.argv[2]

    models = load_models('aiml/model')

    # Debugging: print out loaded categories and items
    print("Loaded models for categories and items:")
    for category, items_models in models.items():
        print(f"{category}: {list(items_models.keys())}")

    if user_category in models and user_item in models[user_category]:
        predictions = make_predictions(models, user_category, user_item, steps=12)  # Assume 12 months
        if predictions is not None:
            filename = f'predictions_{user_category}_{user_item}.csv'
            save_predictions_to_csv(predictions.predicted_mean, filename)
        else:
            print(f"No predictions could be made for {user_category} and {user_item}.")
    else:
        print(f"No model found for {user_category} and {user_item}.")