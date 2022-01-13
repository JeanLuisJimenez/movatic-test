# Movatic Coding Challenge

## Index

* [Setup](#setup)
* [Usage](#usage)
* [Next steps](#next-steps)

## <a id="setup"></a> Setup

1. Pull this repo. `git clone git@github.com:JeanLuisJimenez/movatic-test.git`
2. Install Docker:
    * [Mac Intel Chip](https://desktop.docker.com/mac/main/amd64/Docker.dmg)
    * [Mac Apple Chip](https://desktop.docker.com/mac/main/arm64/Docker.dmg)
    * [Windows](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe)
    * [Linux](https://hub.docker.com/search?q=&type=edition&offering=community&operating_system=linux)
3. Install Python3 and pip3.
4. Run `docker-compose up` in the root of the repo/proyect, wait until it ends.

## <a id="usage"></a> Usage

To access the full table of content go to the [localhost](http://localhost/)

To access detailed data of any stations, click on the row of the station you want to see or use the following syntax `http://localhost/<station_id>`.

## <a id="next-steps"></a> Next steps

Now that we have the base project showing existing data and a screen to see details for each station, we can now add some other features as Edit, remove stations; create an actual DB to storage all the data, add Auth in the API to allow just users to see and edit the data on it, and a lot of other important features that may be suggested by the client.

Some of my suggestions are: to build new routes on the API to have access to other kinds of data such as clients, providers, vehicles, trips, etc; and some other screens to display and manage the data; more reports for stations such as monthly, weekly reports, so the client can have more info of his stations. Link each station with a client/provider.
