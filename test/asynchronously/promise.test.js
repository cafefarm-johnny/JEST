// * return을 누락한다면 테스트는 fetchData()에서 
// * 리턴받은 프로미스가 resolve되기 전에 종료되어 then()이 콜백을 실행할 기회를 놓치므로 테스트에 실패할 수 있다.
test('the data is peanut butter (promise)', () => {
    return fetchData().then(data => {
        expect(data).toBe('peanut butter');
    });
});

function fetchData() {
    return new Promise((resolve, reject) => {
        resolve('peanut butter');
    });
}



test('the fetch fails with an error', () => {
    expect.assertions(1);
    return catchData().catch(e => expect(e).toMatch('throw test'));
});

function catchData() {
    return new Promise((resolve, reject) => {
        reject('throw test');
    });
}



test('the data is peanut butter (resolves)', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
});



test('the fetch fails with an error (rejects)', () => {
    return expect(catchData()).rejects.toMatch('throw test');
});