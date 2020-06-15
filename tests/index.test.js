const func = require('../index');

test('Must be a string with length >= 2', () => {
    expect(func()).toBe.false;
    expect(func(null)).toBe.false;
    expect(func(undefined)).toBe.false;
    expect(func({})).toBe.false;
    expect(func(() => 1)).toBe.false;
    expect(func([0, 1, 2])).toBe.false;
    expect(func(0)).toBe.false;
    expect(func(1)).toBe.false;
    expect(func(-1)).toBe.false;
    expect(func('')).toBe.false;
    expect(func('1')).toBe.false;
    expect(func(' ')).toBe.false;
});

it('Must be positive integer followed by ms, s, m, h, d, w', () => {
    expect(func('abcdefg')).toBe.false;
    expect(func('m4')).toBe.false;
    expect(func('1234u')).toBe.false;
    expect(func('0m')).toBe.false;
    expect(func('-2d')).toBe.false;
    expect(func('24mm')).toBe.false;
});

it('unit multiplication', () => {
    expect(func('10ms')).toBe(10);
    expect(func('30s')).toBe(30000);
    expect(func('90m')).toBe(5400000);
    expect(func('8h')).toBe(28800000);
    expect(func('7d')).toBe(604800000);
    expect(func('2w')).toBe(1209600000);
});

