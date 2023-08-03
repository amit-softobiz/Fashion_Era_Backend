import { Resolver, Query, Args, Int, Mutation } from "@nestjs/graphql";
import { Product } from "./schema/product.schema";
import { ProductService } from "./product.service";
import {Product as ProductModel} from '../graphql';
import { AddProductArgs } from "./args/addProduct.args";



@Resolver(of => Product)
export class ProductResolver{
    constructor(private readonly productService:ProductService){}

    @Query(returns => [Product],{name:"products"})
    getAllProduct():ProductModel[]{
        return this.productService.findAllProducts();
    }

    @Query(returns => Product, {name:"findProductById", nullable:true})
    getProductById(@Args({name:"productId", type:()=>Int}) id:number):ProductModel{
        return this.productService.findProductById(id);
    }

    @Mutation(returns => String,{name:"deleteProduct"})
    deleteProductById(@Args({name:"productId", type:()=>Int}) id:number):string{
        return this.productService.deleteProduct(id);
    }

    @Mutation(returns => String, {name:"addProduct"})
    addProduct(@Args("addProductArgs") addProductArgs:AddProductArgs):string{
        return this.productService.addProduct(addProductArgs);
    }

    @Mutation(returns => String, {name:"updateProduct"})
    updateBook(@Args({name:"productId", type:()=>Int}) id:number, @Args("updateProductArgs") addProductArgs:AddProductArgs):string{
        return this.productService.addProduct(addProductArgs);
    }

   
}