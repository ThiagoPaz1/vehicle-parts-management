import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PartsModule } from './modules/parts/parts.module';

@Module({
  imports: [ConfigModule.forRoot(), PartsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
