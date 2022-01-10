from flask import Flask
from flask_restful import Resource, Api
from flask_cors import CORS
from routes import stations

app = Flask(__name__)
api = Api(app)

CORS(app, resources={r"/*": {"origins": "*"}})

if __name__ == "__main__":
  app.run(debug=True)

api.add_resource(stations.Stations, '/stations/')
api.add_resource(stations.Station, '/stations/<station_id>')
