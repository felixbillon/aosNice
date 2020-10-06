import { Injectable } from '@nestjs/common';

export interface Vector {
  x: number;
  y: number;
}

@Injectable()
export class VectorService {
  round(vector: Vector): Vector {
    return {
      x: Math.round(vector.x),
      y: Math.round(vector.y)
    };
  }

  length(vector: Vector): number {
    return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
  }

  add(vector1: Vector, vector2: Vector): Vector {
    return {
      x: vector1.x = vector1.x + vector2.x,
      y: vector1.y = vector1.y + vector2.y
    };
  }

  substract(vector1: Vector, vector2: Vector): Vector {
    return {
      x: vector1.x - vector2.x,
      y: vector1.y - vector2.y
    };
  }

  multiply(vector: Vector, x: number, y: number = x): Vector {
    return {
      x: vector.x * x,
      y: vector.y * y
    };
  }

  divide(vector1: Vector, vector2: Vector): Vector {
    return {
      x: vector1.x / vector2.x,
      y: vector1.y / vector2.y
    };
  }

  compare(vector1: Vector, vector2: Vector): boolean {
    return vector1.x === vector2.x && vector1.y === vector2.y;
  }

  distance(vector1: Vector, vector2: Vector): number {
    return Math.sqrt((vector1.x - vector2.x) * (vector1.x - vector2.x) + (vector1.y - vector2.y) * (vector1.y - vector2.y));
  }
}
