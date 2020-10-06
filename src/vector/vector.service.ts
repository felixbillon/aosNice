import { Injectable } from '@nestjs/common';
import { IsNumber } from "class-validator";

export class Vector {
  @IsNumber()
  public x: number;
  @IsNumber()
  public y: number;
}

@Injectable()
export class VectorService {
  round(vector: Vector): Vector {
    const v = new Vector();
    v.x = Math.round(vector.x);
    v.y = Math.round(vector.y);
    return v;
  }

  length(vector: Vector): number {
    return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
  }

  add(vector1: Vector, vector2: Vector): Vector {
    const v = new Vector();
    v.x = vector1.x + vector2.x;
    v.y = vector1.y + vector2.y;
    return v;
  }

  substract(vector1: Vector, vector2: Vector): Vector {
    const v = new Vector();
    v.x = vector1.x - vector2.x;
    v.y = vector1.y - vector2.y;
    return v;
  }

  multiply(vector: Vector, x: number, y: number = x): Vector {
    const v = new Vector();
    v.x = vector.x * x;
    v.y = vector.y * y;
    return v;
  }

  divide(vector1: Vector, vector2: Vector): Vector {
    const v = new Vector();
    v.x = vector1.x / vector2.x;
    v.y = vector1.y / vector2.y;
    return v;
  }

  compare(vector1: Vector, vector2: Vector): boolean {
    return vector1.x === vector2.x && vector1.y === vector2.y;
  }

  distance(vector1: Vector, vector2: Vector): number {
    return Math.sqrt((vector1.x - vector2.x) * (vector1.x - vector2.x) + (vector1.y - vector2.y) * (vector1.y - vector2.y));
  }
}
