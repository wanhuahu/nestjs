import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsInMemoryModule } from './products-in-memory/products-in-memory.module';

@Module({
  imports: [ProductsInMemoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
