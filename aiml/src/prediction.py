import os
import pickle

def load_models(directory):
    models = {}
    for filename in os.listdir(directory):
        if filename.endswith('.pkl'):
            base_name = filename.replace('_model.pkl', '')
            parts = base_name.split('_')
            if len(parts) < 2:
                print(f"Skipping invalid model file: {filename}")
                continue
            category = parts[0]
            item = '_'.join(parts[1:])  
            if category not in models:
                models[category] = {}
            path = os.path.join(directory, filename)
            with open(path, 'rb') as f:
                models[category][item] = pickle.load(f)
    return models

def make_predictions(models, category, item, steps=5):
    model = models[category][item]
    forecast = model.forecast(steps=steps)
    return forecast

if __name__ == '__main__':
    models = load_models('aiml/model')
    
    for category in models:
        print(f"\nCategory: {category}")
        for item in models[category]:
            predictions = make_predictions(models, category, item, steps=5)
            print(f"\nPredictions for {item} in {category}:")
            print(predictions)
            print("\n")


