import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Cart extends Document {
  @Prop({ type: String, required: true })
  productId: string;

  @Prop({ required: false, default: 1 })
  quantity: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
