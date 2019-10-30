/**
 * mock 네이밍
 * 
 * 에러 출력 시 "jest.fn()" 으로 출력되는 대신 mock 함수를 위한 네이밍을 제공한다.
 * 이 기능은 테스트 결과에서 mock 함수에서 에러를 보고할 때 빠르게 식별하기 위해 사용할 수 있다.
 */

test('mock names', () => {
    const myMockFn = jest.fn()
        .mockReturnValue('default')
        .mockImplementation(scalar => 42 + scalar)
        .mockName('add42');

    expect(myMockFn.getMockName()).toEqual('add42');
});