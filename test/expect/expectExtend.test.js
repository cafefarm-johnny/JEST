expect.extend({
    // 커스텀 matcher 만들기
    toBeWithinRange(received, floor, ceiling) {
        const pass = received >= floor && received <= ceiling;
        if (pass) {
            return {
                message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
                pass: true
            };
        } else {
            return {
                message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
                pass: false
            };
        }
    },
    // 커스텀 비동기 matcher 만들기
    async toBeDivisibleByExternalValue(received) {
        const externalValue = await getExternalValueFromRemoteSource();
        const pass = received % externalValue === 0;
        if (pass) {
            return {
                message: () => `expected ${received} not to be divisible by ${externalValue}`,
                pass: true
            }
        } else {
            return {
                message: () => `expected ${received} to be divisible by ${externalValue}`,
                pass: false
            }
        }
    }
});

function getExternalValueFromRemoteSource() {
    return new Promise((resolve, reject) => {
        resolve(5);
    });
}


describe('숫자 범위 검증', () => {
    test('in of range', () => {
        expect(100).toBeWithinRange(90, 110);
    });

    test('out of range', () => {
        // expect(101).toBeWithinRange(0, 100);
    });

    test('object verify', () => {
        expect({
            apples: 7,
            bananas: 3
        }).toEqual({
            apples: expect.toBeWithinRange(1, 10),
            bananas: expect.not.toBeWithinRange(11, 20)
        });
    });
});

describe('(비동기 matcher) 수 나누기 검증', () => {
    test('100 / 5는 0일 것이다.',
        async () => {
            await expect(100).toBeDivisibleByExternalValue();
        });

    test('101 / 5는 0이 아닐 것이다.', async () => {
        await expect(101).not.toBeDivisibleByExternalValue();
    });

});