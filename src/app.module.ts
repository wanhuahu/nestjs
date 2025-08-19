import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductsInMemoryModule } from './products-in-memory/products-in-memory.module';
import { CartInMemoryModule } from './cart-in-memory/cart-in-memory.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/local'),
    ProductsModule,
    CartModule,
    ProductsInMemoryModule,
    CartInMemoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
