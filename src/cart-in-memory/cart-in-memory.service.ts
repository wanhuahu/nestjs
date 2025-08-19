import { Injectable } from '@nestjs/common';
import { CartInMemoryDto } from './cart-in-memory.dto';

@Injectable()
export class CartInMemoryService {
  private static cart: { [id: string]: CartInMemoryDto } = {};

  addToCart(product: { id: string; name: string }): CartInMemoryDto[] {
    const existing = CartInMemoryService.cart[product.id];
    if (existing) {
      existing.quantity += 1;
    } else {
      CartInMemoryService.cart[product.id] = { ...product, quantity: 1 };
    }
    return Object.values(CartInMemoryService.cart);
  }

  getCart(): CartInMemoryDto[] {
    return Object.values(CartInMemoryService.cart);
  }

  removeFromCart(productId: string): CartInMemoryDto[] {
    const existing = CartInMemoryService.cart[productId];
    if (existing) {
      if (existing.quantity > 1) {
        existing.quantity -= 1;
      } else {
        delete CartInMemoryService.cart[productId];
      }
    }
    return Object.values(CartInMemoryService.cart);
  }
}
