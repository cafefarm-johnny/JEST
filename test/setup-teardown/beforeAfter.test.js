beforeEach(() => {
    initializeCityDatabase();
});

afterEach(() => {
    clearCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});


let cities = [];

function initializeCityDatabase() {
    if (Array.isArray(cities)) {
        cities.push('Vienna');
        cities.push('San Juan');
        cities.push('Millano');
        cities.push('Madrid');
        cities.push('Barcelona');
    }
}

function clearCityDatabase() {
    cities = [];
}

function isCity(city) {
    return cities.some(v => v === city);
}