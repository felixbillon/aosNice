import { Test, TestingModule } from '@nestjs/testing';
import { Vector, VectorService } from './vector.service';

describe('VectorService', () => {
  let service: VectorService;
  let x: number;
  let y: number;
  let otherX: number;
  let otherY: number;
  let value: number;
  let vector: Vector;
  let other: Vector;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VectorService],
    }).compile();

    service = module.get<VectorService>(VectorService);

    x = Math.random();
    y = Math.random();
    otherX = Math.random();
    otherY = Math.random();
    value = Math.random();
    vector = { x, y };
    other = { x: otherX, y: otherY };
  });

  it(`
    Given a Vector
    When rouding the Vector
    Then x and y properties are rounded
  `, () => {
    const actual = service.round(vector);
    expect(actual.x).toBe(Math.round(x));
    expect(actual.y).toBe(Math.round(y));
  });

  it(`
    Given a Vector
    When computing the Vector length
    The the length is computed based on x and y properties
  `, () => {
    const expected: number = Math.sqrt(x * x + y * y);
    const actual = service.length(vector);
    expect(actual).toBe(expected)
  });

  it(`
    Given two Vectors
    When adding vectors
    Then a new Vector is created with the addition of both previous Vectors
  `, () => {
    const expected = {
      x: otherX + x,
      y: otherY + y
    };

    const actual = service.add(vector, other);
    expect(actual).toEqual(expected);
  });

  it(`
    Given two Vectors
    When substracting vectors
    Then a new Vector is created with the substraction of both previous Vectors
  `, () => {
    const expected = {
      x: x - otherX,
      y: y - otherY
    };

    const actual = service.substract(vector, other);
    expect(actual).toEqual(expected);
  });

  it(`
    Given a Vector
    When multipling by a number
    Then a new Vector is multipled
  `, () => {
    const expected = {
      x: x * value,
      y: y * value
    };

    const actual = service.multiply(vector, value);

    expect(actual).toEqual(expected);
  });

  it(`
    Given two Vectors
    When dividing vectors
    Then a new Vector is divided with the substraction of both previous Vectors
  `, () => {
    const expected = {
      x: x / otherX,
      y: y / otherY
    };

    const actual = service.divide(vector, other);

    expect(actual).toEqual(expected);
  });

  it(`
    Given two Vectors
    When comparing vectors
    Then vector are considered as equal is both x and both y are equals
  `, () => {
    const expected = x === otherX && y === otherY;

    const actual = service.compare(vector, other);

    expect(actual).toEqual(expected);
  });

  it(`
    Given two Vectors
    When computing the distance between vectors
    Then the distance is computed
  `, () => {
    const expected = Math.sqrt((x - otherX) * (x - otherX) + (y - otherY) * (y - otherY));

    const actual = service.distance(vector, other);

    expect(actual).toEqual(expected);
  });
});