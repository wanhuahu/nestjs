import { Controller, Get } from '@nestjs/common';
import { ProductsInMemoryService } from './products-in-memory.service';
import { ProductInMemoryDto } from './products-in-memory.dto';

@Controller('products-in-memory')
export class ProductsInMemoryController {
  constructor(private readonly productsInMemoryService: ProductsInMemoryService) {}

  @Get()
  findAll(): ProductInMemoryDto[] {
    return this.productsInMemoryService.findAll();
  }
}
