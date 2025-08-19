import { Module } from '@nestjs/common';
import { ProductsInMemoryController } from './products-in-memory.controller';
import { ProductsInMemoryService } from './products-in-memory.service';

@Module({
  controllers: [ProductsInMemoryController],
  providers: [ProductsInMemoryService],
})
export class ProductsInMemoryModule {}
