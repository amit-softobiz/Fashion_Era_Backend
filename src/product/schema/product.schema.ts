import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field((type) => Int)
  id: number;

  @Field()
  categories: string;

  @Field()
  brand: string;

  @Field((type) => Int)
  price: number;

  @Field()
  color: string;

  @Field((type) => Int)
  size: number;

  @Field()
  tags: string;
}
