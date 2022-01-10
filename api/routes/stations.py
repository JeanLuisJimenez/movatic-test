from flask_restful import Resource
from requests import get as getRequest

class Stations(Resource):
    def get(self):
        return getRequest("https://gbfs.bcycle.com/bcycle_madison/station_information.json").json()["data"]["stations"]

class Station(Resource):
    def get(self, station_id):
        stations_details = getRequest("https://gbfs.bcycle.com/bcycle_madison/station_status.json").json()["data"]["stations"]
        stations = getRequest("https://gbfs.bcycle.com/bcycle_madison/station_information.json").json()["data"]["stations"]
        
        for station_detail in stations_details:
            if station_detail["station_id"] == station_id:
                break
        
        for station in stations:
            if station["station_id"] == station_id:
                station_detail["name"] = station["name"]
                return station_detail
