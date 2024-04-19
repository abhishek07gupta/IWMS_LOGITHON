import pandas as pd

# Sample data for user upload template including an empty Warehouse Location column
data1 = {
    "Date": ["2023-04-01", "2023-04-01", "2023-04-01", "2023-04-01", "2023-04-01"],
    "Category": ["Daily Electric Appliances", "Personal Care Products", "Home Cleaning Supplies",
                 "Daily Electric Appliances", "Personal Care Products"],
    "Item": ["Electric Kettle", "Shampoo", "Detergent", "Toaster", "Soap"],
    "Quantity Ordered": [120, 200, 150, 90, 110],
    "Warehouse Location": ["", "", "", "", ""]  
}

data2 = {
    "Date": ["2023-04-02", "2023-04-02", "2023-04-02", "2023-04-02", "2023-04-02"],
    "Category": ["Daily Electric Appliances", "Personal Care Products", "Home Cleaning Supplies",
                 "Daily Electric Appliances", "Personal Care Products"],
    "Item": ["Microwave", "Conditioner", "Floor Cleaner", "Coffee Maker", "Toothpaste"],
    "Quantity Ordered": [130, 95, 120, 135, 105],
    "Warehouse Location": ["", "", "", "", ""]  
}

# Convert dictionaries to DataFrames
df1 = pd.DataFrame(data1)
df2 = pd.DataFrame(data2)

# Define file paths for the CSVs
file_path1 = 'Sample_User_Upload_1.csv'
file_path2 = 'Sample_User_Upload_2.csv'

# Save the DataFrames to CSV files
df1.to_csv(file_path1, index=False)
df2.to_csv(file_path2, index=False)

print(f"Files created: {file_path1} and {file_path2}")
