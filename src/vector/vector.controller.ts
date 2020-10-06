import { Body, Controller, Post } from '@nestjs/common';
import { AddVectorsModel, DistanceModel, SubstractVectorsModel } from './vector.model';
import { Vector, VectorService } from './vector.service';

@Controller('vector')
export class VectorController {
  constructor(
    private vectorService: VectorService
  ) { }

  @Post('add')
  add(
    @Body() model: AddVectorsModel,
  ) {
    return this.vectorService.add(model.vector1, model.vector2);
  }

  @Post('substract')
  substract(
    @Body() model: SubstractVectorsModel,
  ) {
    return this.vectorService.add(model.vector1, model.vector2);
  }

  @Post('round')
  round(
    @Body() vector1: Vector
  ) {
    return this.vectorService.round(vector1);
  }

  @Post('distance')
  distance(
    @Body() model: DistanceModel,
  ) {
    return this.vectorService.distance(model.vector1, model.vector2);
  }
}
