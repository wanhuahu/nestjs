import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CartInMemoryService } from './cart-in-memory.service';
import { CartInMemoryDto } from './cart-in-memory.dto';

@Controller('cart-in-memory')
export class CartInMemoryController {
  constructor(private readonly cartInMemoryService: CartInMemoryService) {}

  @Post()
  addToCart(@Body() product: { id: string; name: string }): CartInMemoryDto[] {
    return this.cartInMemoryService.addToCart(product);
  }

  @Get()
  getCart(): CartInMemoryDto[] {
    return this.cartInMemoryService.getCart();
  }

  @Delete(':productId')
  removeFromCart(@Param('productId') productId: string): CartInMemoryDto[] {
    return this.cartInMemoryService.removeFromCart(productId);
  }
}
