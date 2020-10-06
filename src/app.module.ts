import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VectorController } from './vector/vector.controller';
import { VectorService } from './vector/vector.service';
import { VectorModule } from './vector/vector.module';

@Module({
  imports: [VectorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
