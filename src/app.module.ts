import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsInMemoryModule } from './products-in-memory/products-in-memory.module';
import { CartInMemoryModule } from './cart-in-memory/cart-in-memory.module';

@Module({
  imports: [ProductsInMemoryModule, CartInMemoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
