import { Module } from '@nestjs/common';
import { CartInMemoryController } from './cart-in-memory.controller';
import { CartInMemoryService } from './cart-in-memory.service';

@Module({
  controllers: [CartInMemoryController],
  providers: [CartInMemoryService],
})
export class CartInMemoryModule {}
