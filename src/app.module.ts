import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground:true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      definitions:{
        path:join(process.cwd(), 'src/graphql.ts'),
      }
    }),
    MongooseModule.forRoot('mongodb+srv://amitxtest:amitxtest@cluster0.3d8tyjj.mongodb.net/FashionEraDB?retryWrites=true&w=majority'),
    ProductModule
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {}
