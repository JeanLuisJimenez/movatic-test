export async function getStations(next, step, prev) {
    return fetch(`http://localhost:5000/stations/?next=${next}&step=${step}&prev=${prev}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => res.json())
}

export async function getTotalStations() {
    return fetch('http://localhost:5000/stations/count', {
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
