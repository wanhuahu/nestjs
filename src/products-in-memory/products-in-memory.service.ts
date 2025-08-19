import { Injectable } from '@nestjs/common';
import { ProductInMemoryDto } from './products-in-memory.dto';

@Injectable()
export class ProductsInMemoryService {
  private readonly products: ProductInMemoryDto[] = [
    { id: '1', name: 'p1', price: 10 },
    { id: '2', name: 'p2', price: 20 },
    { id: '3', name: 'p3', price: 30 },
  ];

  findAll(): ProductInMemoryDto[] {
    return this.products;
  }
}
