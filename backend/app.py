from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route('/api/covid-data')
def get_covid_data():
    """Serve COVID data from SQLite to frontend"""
    try:
        conn = sqlite3.connect('covid_data.db')
        cursor = conn.cursor()
        
        cursor.execute('''
            SELECT country, confirmed, deaths, recovered 
            FROM daily_stats 
            ORDER BY confirmed DESC 
            LIMIT 50
        ''')
        
        countries = []
        for row in cursor.fetchall():
            countries.append({
                'country': row[0],
                'confirmed': row[1],
                'deaths': row[2],
                'recovered': row[3]
            })
        
        conn.close()
        
        return jsonify({
            'success': True,
            'data': countries,
            'total_count': len(countries)
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/health')
def health_check():
    return jsonify({
        'status': 'healthy',
        'message': 'Flask API is running!'
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)