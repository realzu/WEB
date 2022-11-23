const add = require('./calculator');

test('add value', () => {
    expect(add(1, 1)).toBe(2);
});