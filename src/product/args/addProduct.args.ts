import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class AddProductArgs {
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
