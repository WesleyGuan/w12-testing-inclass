// game.spec.ts
import { Potter } from './potter';

describe('Potter', () => {
  let potter: Potter;

  beforeEach(() => {
    potter = new Potter();
  });

  it('please create an instance of potter', () => {
    expect(potter).toBeTruthy();
  });

  test('testBasics1', () => {
    potter.buy([]);
    expect(potter.price).toBe(0);
  });
  test('testBasics2', () => {
    potter.buy([1]);
    expect(potter.price).toBe(8);
  });
  test('testBasics3', () => {
    potter.buy([2]);
    expect(potter.price).toBe(8);
  });
  test('testBasics4', () => {
    potter.buy([3]);
    expect(potter.price).toBe(8);
  });
  test('testBasics5', () => {
    potter.buy([4]);
    expect(potter.price).toBe(8);
  });
  test('testBasics6', () => {
    potter.buy([1, 1, 1]);
    expect(potter.price).toBe(8 * 3);
  });

  test('testSimpleDiscounts1', () => {
    potter.buy([0, 1]);
    expect(potter.price).toBe(8 * 2 * 0.95);
  });
  test('testSimpleDiscounts2', () => {
    potter.buy([0, 2, 4]);
    expect(potter.price).toBe(8 * 3 * 0.9);
  });
  test('testSimpleDiscounts3', () => {
    potter.buy([0, 1, 2, 4]);
    expect(potter.price).toBe(8 * 4 * 0.8);
  });
  test('testSimpleDiscounts4', () => {
    potter.buy([0, 1, 2, 3, 4]);
    expect(potter.price).toBe(8 * 5 * 0.75);
  });

  test('testSeveralDiscounts1', () => {
    potter.buy([0, 0, 1]);
    expect(potter.price).toBe(8 + (8 * 2 * 0.95));
  });
  test('testSeveralDiscounts2', () => {
    potter.buy([0, 0, 1, 1]);
    expect(potter.price).toBe(2 * (8 * 2 * 0.95));
  });
  test('testSeveralDiscounts3', () => {
    potter.buy([0, 0, 1, 2, 2, 3]);
    expect(potter.price).toBe((8 * 4 * 0.8) + (8 * 2 * 0.95));
  });
  test('testSeveralDiscounts4', () => {
    potter.buy([0, 1, 1, 2, 3, 4]);
    expect(potter.price).toBe(8 + (8 * 5 * 0.75));
  });

  test('testEdgeCases1', () => {
    potter.buy([0, 0, 1, 1, 2, 2, 3, 4]);
    expect(potter.price).toBe(2 * (8 * 4 * 0.8));
  });
  test('testEdgeCases2', () => {
    potter.buy([0, 0, 0, 0, 0,
      1, 1, 1, 1, 1,
      2, 2, 2, 2,
      3, 3, 3, 3, 3,
      4, 4, 4, 4]);
    expect(potter.price).toBe(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8));
  });
}); 