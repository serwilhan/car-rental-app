const calculate = require('./src/services/calculate');

describe('calculate test', () => {
  // Positive Test
  test('Positive Test', () => {
    const hitung = calculate(1, 2);
    expect(hitung).toEqual(3);
  });
});
