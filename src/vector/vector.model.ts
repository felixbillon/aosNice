import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmptyObject, IsNumber } from "class-validator";
import { Vector } from "./vector.service";

export class VectorModel implements Vector {
  @ApiProperty()
  @IsNumber()
  public x: number;
  @ApiProperty()
  @IsNumber()
  public y: number;
}

export class AddVectorsModel {
  @ApiProperty()
  @IsNotEmptyObject()
  vector1: VectorModel;
  @ApiProperty()
  @IsNotEmptyObject()
  vector2: VectorModel;
}

export class SubstractVectorsModel {
  @ApiProperty()
  @IsNotEmptyObject()
  vector1: VectorModel;
  @ApiProperty()
  @IsNotEmptyObject()
  vector2: VectorModel;
}

export class DistanceModel {
  @IsNotEmptyObject()
  vector1: VectorModel;
  @IsNotEmptyObject()
  vector2: VectorModel;
}