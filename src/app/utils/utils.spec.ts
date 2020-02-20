import { randomIntLessThan, randomBoolean, randomIntInterval } from './utils';

describe('Tests Utils', () => {
  let MathRandom: () => number;

  beforeEach(() => {
    MathRandom = Math.random;
    Math.random = () => 0.1;
  });

  it('Random int < 100 should return 10', () => {
    expect(randomIntLessThan(100)).toBe(10);
  });

  it('Random boolean should return true', () => {
    expect(randomBoolean()).toBe(true);
  });

  it('Random interval should return 31', () => {
    expect(randomIntInterval(30, 40)).toBe(31);
  });

  afterEach( () => {
      Math.random = MathRandom;
  });
});
