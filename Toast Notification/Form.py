import sys
import pymongo

# Replace with your MongoDB connection details
client = pymongo.MongoClient("mongodb+srv://EzraDemo:<Ezraraj15>@cluster0.jjy1b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")  # Replace with your server address and port
db = client["your_database_name"]  # Replace with your database name
collection = db["your_collection_name"]  # Replace with your collection name

# Function to add data to the MongoDB collection
def add_data(name, age):
    data = {"name": name, "age": age}
    result = collection.insert_one(data)
    print(f"Data added with ID: {result.inserted_id}")

# Function to view data from the MongoDB collection
def view_data():
    for document in collection.find():
        print(document)

# Check if command-line arguments are provided
if len(sys.argv) == 3:
    name = sys.argv[1]
    age = int(sys.argv[2])
    add_data(name, age)
else:
    print("Usage: python your_script.py <name> <age>")

# Uncomment the next line to view data
# view_data()