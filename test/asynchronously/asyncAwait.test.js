test('the data is peanut butter', async () => {
    expect.assertions(1);
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

function fetchData() {
    return new Promise((resolve, reject) => {
        resolve('peanut butter');
    });
}

// async await을 resolves와 함께 사용할 수 있다.
test('the data is peanut butter (resolves)', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
});



test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
        await catchData();
    } catch (e) {
        expect(e).toMatch('throw test');
    }
});

function catchData() {
    return new Promise((resolve, reject) => {
        reject('throw test');
    });
}

// async await을 rejects와 함께 사용할 수 있다.
test('the fetch fails with an error', async () => {
    await expect(catchData()).rejects.toMatch('throw test');
});