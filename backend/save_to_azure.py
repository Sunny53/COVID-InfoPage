# backend/save_to_azure.py
import json
from datetime import datetime

def fetch_covid_data():
    """Load sample COVID data from local file"""
    print("📡 Loading sample COVID data...")
    try:
        with open('sample-covid-data.json', 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        print("❌ sample-covid-data.json not found")
        return None

def save_data_locally(data):
    """Save JSON data locally"""
    filename = f"covid-{datetime.now().strftime('%Y-%m-%d')}.json"
    with open(filename, 'w') as f:
        json.dump(data, f, indent=2)
    print(f"✅ Saved {filename} locally")
    print(f"   Size: {len(json.dumps(data))} characters")

def main():
    """Run the pipeline"""
    print("🚀 Starting COVID data pipeline...")
    
    # Step 1: Extract
    data = fetch_covid_data()
    
    if data:
        # Step 2: Save to local file
        save_data_locally(data)
        print("🏁 Pipeline complete!")
    else:
        print("💥 Pipeline failed at extraction step")

if __name__ == "__main__":
    main()