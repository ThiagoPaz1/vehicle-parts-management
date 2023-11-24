import { Module } from '@nestjs/common';
import { PartsService } from './parts.service';
import { PartsController } from './parts.controller';
import { PartsRepository } from './product.repository';

@Module({
  controllers: [PartsController],
  providers: [PartsService, PartsRepository],
})
export class PartsModule {}
