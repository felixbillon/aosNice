import { Test, TestingModule } from '@nestjs/testing';
import { VectorController } from './vector.controller';
import { VectorService } from './vector.service';

describe('VectorController', () => {
  let controller: VectorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VectorController],
      providers: [VectorService],
    }).compile();

    controller = module.get<VectorController>(VectorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
