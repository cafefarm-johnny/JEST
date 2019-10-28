// 테스트 블록의 실행 순서
describe('outer', () => {
    console.log('describe outer-a');

    describe('describe inner 1', () => {
        console.log('describe inner1');

        test('test 1', () => {
            console.log('test for describe inner 1');
            expect(true).toEqual(true);
        });
    });

    console.log('describe outer-b');

    test('test 1', () => {
        console.log('test for describe outer');
        expect(true).toEqual(true);
    });

    describe('describe inner 2', () => {
        console.log('describe inner 2');

        test('test for describe inner 2', () => {
            console.log('test for describe inner 2');
            expect(false).toEqual(false);
        });
    });

    console.log('describe outer-c');
});