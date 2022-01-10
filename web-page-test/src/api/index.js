export async function getStations() {
    return fetch('http://localhost:5000/stations/', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => res.json())
}

export async function getStationDetails(id) {
    return fetch(`http://localhost:5000/stations/${id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => res.json())
}
