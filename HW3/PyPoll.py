import os
import csv

script_dir = os.path.dirname(__file__) 
file_to_load = os.path.join(script_dir, 'Resources','election_results.csv')

with open(file_to_load, 'r+', encoding='utf-8') as election_data:
    file_reader = csv.reader(election_data)
    headers = next(file_reader)
    print(headers)
    print("hi")