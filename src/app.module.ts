import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { ProductModule } from './product/product.module';

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
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}