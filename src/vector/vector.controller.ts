import { Body, Controller, Post } from '@nestjs/common';
import { Vector, VectorService } from './vector.service';

@Controller('vector')
export class VectorController {
  constructor(
    private vectorService: VectorService
  ) { }

  @Post('add')
  add(
    @Body() vector1: Vector,
    @Body() vector2: Vector
  ) {
    return this.vectorService.add(vector1, vector2);
  }

  @Post('substract')
  substract(
    @Body() vector1: Vector,
    @Body() vector2: Vector
  ) {
    return this.vectorService.add(vector1, vector2);
  }

  @Post('round')
  round(
    @Body() vector1: Vector
  ) {
    return this.vectorService.round(vector1);
  }

  @Post('distance')
  distance(
    @Body() vector1: Vector,
    @Body() vector2: Vector
  ) {
    return this.vectorService.distance(vector1, vector2);
  }
}
