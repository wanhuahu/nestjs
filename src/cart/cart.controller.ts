import { Body, Controller, Delete, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { Cart } from './cart.schema';
import { CartItemResponse } from './models/get-cart.model';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async addToCart(@Body(new ValidationPipe()) createCartDto: CreateCartDto): Promise<Cart> {
    return this.cartService.addToCart(createCartDto);
  }

  @Get()
  async getCart(): Promise<CartItemResponse[]> {
    return this.cartService.getCart();
  }

  @Delete(':productId')
  async removeFromCart(@Param('productId') productId: string): Promise<Cart | null> {
    return this.cartService.removeFromCart(productId);
  }
}
