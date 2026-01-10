# COVID InfoPage

A multi-page COVID-19 informational web application with a runnable backend demo pipeline.

Static site hosted on GitHub Pages:
https://sunny53.github.io/COVID-InfoPage/

Backend Demo runs locally only. GitHub pages does not support Flask.

## Project Overview

COVID InfoPage is a web application designed to provide accessible COVID-19 data and public health resources. The project demonstrates frontend development, API integration, and data engineering concepts such as ingestion, transformation, storage, and serving data via an API.

The application includes:
* COVID statistics and trends
* Safety and prevention guidance
* COVID-related news
* A contact page
* A demo backend pipeline

## Tech Stack
**Frontend**: HTML5, CSS3, JavaScript

**Backend**: Python, SQLite, Flask, Flask-CORS

**Tools**: Git/GitHub, VS Code, Azure Blob Storage

**Data Source**: COVID-19 data is sourced from **COVID Act Now**, a nonprofit, open-source health initiative: https://apidocs.covidactnow.org/

The COVID Act Now API stopped updating as of May 16, 2024, as active COVID tracking was discontinued.

COVID-related news is sourced from a RapidAPI news provider, which continues to update.

For demonstration purposes, sample data is ingested and stored locally in SQLite for the data pipeline.

## Repository Structure

```
COVID-InfoPage/
├── assets/             # CSS, JS, fonts, images used by frontend
├── backend/            # Python demo pipeline + Flask backend
│   ├── app/            # Flask application code
│   ├── database/       # SQLite files
│   └── pipeline/       # COVID data ingestion and processing scripts
├── frontend/           # Frontend HTML pages for site navigation
├── images/             # Static images used in UI
├── README.md           # This document
├── LICENSE.txt
└── index.html          # Main landing page
```


## Quick Start
Clone the repo:
```bash
# Clone the repository
git clone https://github.com/Sunny53/COVID-InfoPage.git
cd COVID-InfoPage

# View public dashboard
open frontend/index.html

# Run data pipeline
cd backend
pip install flask flask-cors

# Start Flask API
python app.py

# Run pipeline scripts
python save_to_azure.py
python transform.py

# View pipeline demo
open frontend/pipeline-demo.html
```
The pipeline demo fetches from `localhost:5000` and requires the Flask server to be running.

GitHub Pages is static hosting and cannot run Flask. **It only works locally**.

## Backend Pipeline Demo
The pipeline demonstrates an ETL process:
1. Extract - Read sample data
2. Transform - Clean and normalize records
3. Load - Store data in SQLite
4. Stores outputs in Azure Blob Storage

# License
This project is licensed under Creative Commons Attribution 3.0 Unported License.

See license.txt for details

# Author
**Sunny Patel**

Technical portfolio: https://sunny53.github.io/

GitHub: https://github.com/Sunny53

Contact: sunnykp5397@gmail.com


