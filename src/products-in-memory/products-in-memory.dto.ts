import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductInMemoryDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}