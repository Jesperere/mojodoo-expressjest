const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 5 + 5 to equal 10', () => {
    expect(sum(5, 5)).toBe(10);
})


test('adding 2 + 2 and seeing if its equal to 4.5, meant to fail', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThanOrEqual(4.5);
})

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });