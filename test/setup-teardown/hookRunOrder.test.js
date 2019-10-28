// 훅 실행 순서
beforeAll(() => console.log('Global - beforeAll'));
afterAll(() => console.log('Global - afterAll'));
beforeEach(() => console.log('Global - beforeEach'));
afterEach(() => console.log('Global - afterEach'));
test('', () => console.log('Global - Test'));
describe('Scoped / Nested block', () => {
    beforeAll(() => console.log('describe - beforeAll'));
    afterAll(() => console.log('describe - afterAll'));
    beforeEach(() => console.log('describe - beforeEach'));
    afterEach(() => console.log('describe - afterEach'));
    test('', () => console.log('describe - Test'));
});