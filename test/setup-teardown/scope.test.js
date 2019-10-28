/**
 * 스코프 테스트
 * describe 블록에 들어가는 before 및 after 블록은 해당 describe 블록 내의 테스트에만 적용된다.
 * 
 * 시나리오
 * 1. 도시 데이터 베이스가 있고, 음식 데이터 베이스가 있다고 가정한다.
 * 2. 도시 데이터 베이스에 대한 테스트를 한다.
 * 3. 음식 데이터 베이스에 대한 테스트를 한다.
 * 
 * 기대 결과
 * 1. 도시 데이터 베이스 초기화 기능은 모든 테스트 케이스에 영향을 준다는 것을 깨닫기
 * 2. 음식 데이터 베이스 초기화 기능은 describe 블록 안에서만 영향을 준다는 것을 깨닫기 
 */

// 도시 데이터 베이스 초기화는 '모든 테스트 케이스들에 영향을 준다'.
beforeEach(() => {
    return initializeCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});


describe('matching cities to foods', () => {
    // describe안에 선언된 음식 데이터 베이스 초기화는 이 블록 안에서만 유효하다.
    // ! 실제 데이터 베이스에 연결하는 코드가 아니므로 'Madrid <3 Churros'가 성공하지만 
    // ! 원칙대로라면 음식 데이터 베이스 초기화가 되지 않은 상태에서의 바깥 블록에서 접근하는 해당 테스트는 실패되어야 한다.
    beforeEach(() => {
        return initializeFoodDateBase();
    });

    test('Vieenna <3 sausage', () => {
        expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });

    test('San Juan <3 plantains', () => {
        expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
});

test('Madrid <3 Churros', () => {
    expect(isValidCityFoodPair('Madrid', 'Churros')).toBe(true);
})


let cities = [];
let foodOfCities = {};


function initializeCityDatabase() {
    return new Promise((resolve, reject) => {
        if (Array.isArray(cities)) {
            cities.push('Vienna');
            cities.push('San Juan');
            cities.push('Millano');
            cities.push('Madrid');
            cities.push('Barcelona');
        }

        resolve('init cities done!');
    });
}

function clearCityDatabase() {
    cities = [];
}

function isCity(city) {
    return cities.some(v => v === city);
}

function initializeFoodDateBase() {
    return new Promise((resolve, reject) => {
        foodOfCities.Vienna = 'Wiener Schnitzel';
        foodOfCities.SanJuan = 'Mofongo';
        foodOfCities.Millano = 'Pasta';
        foodOfCities.Madrid = 'Churros';
        foodOfCities.barcelona = 'Paeya';

        resolve('init food done!');
    });
}

function clearFoodDatabase() {
    foodOfCities = {};
}

function isValidCityFoodPair(city, food) {
    city = city.replace(' ', '');

    if (foodOfCities[city] === food) {
        return true;
    }

    return false;
}