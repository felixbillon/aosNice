import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VectorController } from './vector/vector.controller';
import { VectorService } from './vector/vector.service';

@Module({
  imports: [],
  controllers: [AppController, VectorController],
  providers: [AppService, VectorService],
})
export class AppModule { }
