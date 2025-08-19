import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from './cart.schema';
import { Product } from '../products/products.schema';
import { CreateCartDto } from './dto/create-cart.dto';
import { CartItemResponse } from './models/get-cart.model';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private cartModel: Model<Cart>,
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async addToCart(createCartDto: CreateCartDto): Promise<Cart> {
    // If product already in cart, increment quantity
    const existing = await this.cartModel.findOne({ productId: createCartDto.productId });
    if (existing) {
      existing.quantity += createCartDto.quantity || 1;
      return existing.save();
    }
    const created = new this.cartModel(createCartDto);
    return created.save();
  }

  async getCart(): Promise<CartItemResponse[]> {
    const cartItems = await this.cartModel.find().exec();
    const products = await this.productModel.find({
      productId: { $in: cartItems.map(item => item.productId) }
    }).exec();

    return cartItems.map(cartItem => {
      const product = products.find(p => p.productId === cartItem.productId);
      return {
        productId: cartItem.productId,
        quantity: cartItem.quantity,
        name: product?.name ?? ''
      };
    });
  }

  async removeFromCart(productId: string): Promise<Cart | null> {
    const existing = await this.cartModel.findOne({ productId });
    if (existing) {
      if (existing.quantity > 1) {
        existing.quantity -= 1;
        return existing.save();
      } else {
        return this.cartModel.findOneAndDelete({ productId });
      }
    }
    return null;
  }
}
