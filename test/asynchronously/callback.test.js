// bad case
// ! Jest는 실행 후 끝 부분까지 도달하면 테스트가 종료된다. 
// ! 아래와 같은 형식의 테스트는 의도한 대로 동작하지 않을 수 있다.
test('the data is peanut butter (bad case)', () => {
    function callback(data) {
        expect(data).toBe('peanut butter');
    }

    fetchData(callback);
});

function fetchData(cb) {
    cb('peanut butter');
}


// good case
test('the data is peanut butter (good case)', done => {
    function callback(data) {
        expect(data).toBe('peanut butter');
        done();
    }

    fetchData(callback);
});