import { getStations } from '../../api/index.js'

it('API > getStations', async () => {
    const fetchSpy = jest.spyOn(global, "fetch").mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve([
            {name: 'Fake data'}
        ])
    }))
    expect(await getStations()).toEqual([{
        name: 'Fake data'
    }])
    expect(fetchSpy).toHaveBeenCalled()
})

it('API > getStationDetails', async () => {
    const fetchSpy = jest.spyOn(global, "fetch").mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({name: 'Fake data'})
    }))

    expect(await getStations()).toEqual({name: 'Fake data'})
    expect(fetchSpy).toHaveBeenCalled()
})

