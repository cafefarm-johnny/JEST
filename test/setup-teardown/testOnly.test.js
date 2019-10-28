// 다른 테스트들을 skip하고 해당 테스트만 실행하기
test.only('this will be the only test that runs', () => {
    expect(true).toEqual(false);
});

test('this test will not run', () => {
    expect('A').toBe('A');
});