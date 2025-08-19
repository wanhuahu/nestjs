import { IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateCartDto {
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsInt()
  quantity: number = 1;
}
