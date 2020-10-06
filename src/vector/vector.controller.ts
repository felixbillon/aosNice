import { Controller } from '@nestjs/common';
import { VectorService } from './vector.service';

@Controller('vector')
export class VectorController {
    constructor(
        private vectorService: VectorService
    ) { }
}
