import sqlite3
import json
import glob
import os

def find_latest_json_file():
    """Find the most recent covid-*.json file"""
    json_files = glob.glob('covid-*.json')
    
    if not json_files:
        print("❌ No covid-*.json files found")
        return None
    
    latest_file = max(json_files, key=os.path.getmtime)
    print(f"📁 Found latest file: {latest_file}")
    return latest_file

def load_latest_data():
    """Load the most recent JSON file"""
    json_file = find_latest_json_file()
    
    if not json_file:
        return None
    
    try:
        with open(json_file, 'r') as f:
            return json.load(f)
    except Exception as e:
        print(f"❌ Error loading {json_file}: {e}")
        return None

def create_database():
    """Create SQLite database and table"""
    conn = sqlite3.connect('covid_data.db')
    cursor = conn.cursor()
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS daily_stats (
            date TEXT,
            country TEXT,
            confirmed INTEGER,
            deaths INTEGER,
            recovered INTEGER,
            PRIMARY KEY (date, country)
        )
    ''')
    
    conn.commit()
    return conn, cursor

def transform_and_load():
    """Transform JSON data and load into SQLite"""
    data = load_latest_data()
    
    if not data:
        print("💥 No data to load")
        return
    
    conn, cursor = create_database()
    cursor.execute("DELETE FROM daily_stats")
    
    date = data['Date'][:10]
    country_count = 0
    
    for country in data['Countries']:
        cursor.execute('''
            INSERT OR REPLACE INTO daily_stats 
            VALUES (?, ?, ?, ?, ?)
        ''', (
            date,
            country['Country'],
            country['TotalConfirmed'],
            country['TotalDeaths'],
            country['TotalRecovered']
        ))
        country_count += 1
    
    conn.commit()
    conn.close()
    print(f"✅ Loaded {country_count} countries into database")

if __name__ == "__main__":
    transform_and_load()