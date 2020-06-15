const chai = require('chai');
const { expect } = chai;
const func = require('./index');

describe('test >', () => {
  it('Must be a string with length >= 2', () => {
    expect(func()).to.be.false;
    expect(func(null)).to.be.false;
    expect(func(undefined)).to.be.false;
    expect(func({})).to.be.false;
    expect(func(() => 1)).to.be.false;
    expect(func([0, 1, 2])).to.be.false;
    expect(func(0)).to.be.false;
    expect(func(1)).to.be.false;
    expect(func(-1)).to.be.false;
    expect(func('')).to.be.false;
    expect(func('1')).to.be.false;
    expect(func(' ')).to.be.false;
  });

  it('Must be positive integer followed by ms, s, m, h, d, w', () => {
    expect(func('abcdefg')).to.be.false;
    expect(func('m4')).to.be.false;
    expect(func('1234u')).to.be.false;
    expect(func('0m')).to.be.false;
    expect(func('-2d')).to.be.false;
    expect(func('24mm')).to.be.false;
  });

  it('unit multiplication', () => {
    expect(func('10ms')).to.eql(10);
    expect(func('30s')).to.eql(30000);
    expect(func('90m')).to.eql(5400000);
    expect(func('8h')).to.eql(28800000);
    expect(func('7d')).to.eql(604800000);
    expect(func('2w')).to.eql(1209600000);
  });
});
