/**
 * 모의 함수
 * 실제 함수의 구현 코드를 제외하고 함수에 대한 호출을 캡쳐하고 
 * new 키워드로 인스턴스화 할 때 생성자 함수의 인스턴스를 캡쳐하고 
 * 테스트시간 구성을 허용하여 코드 간 연결을 테스트할 수 있다.
 */

// forEach 함수 구현 (mock 함수 구현이 아니다. callback을 통해 mock 함수를 호출한다.)
function forEach(items, callback) {
    for (let index = 0; index < items.length; index += 1) {
        callback(items[index]);
    }
}

test('mock function use', () => {
    const mockCallback = jest.fn(x => 42 + x); // mock 함수 구현

    forEach([0, 1], mockCallback); // forEach를 통해 콜백으로 mock 함수 호출

    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(42);
    expect(mockCallback.mock.results[1].value).toBe(43);
});