import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  id: number;
  @Prop()
  categories: string;
  @Prop()
  brand: string;
  @Prop()
  price: number;
  @Prop()
  color: string;
  @Prop()
  size: number;
  @Prop()
  tags: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
