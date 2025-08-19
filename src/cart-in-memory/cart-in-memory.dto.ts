import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CartInMemoryDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
