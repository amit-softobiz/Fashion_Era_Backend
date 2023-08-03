import { Injectable } from "@nestjs/common";
import { ProductEntity } from "./entity/product.entity";



@Injectable()
export class ProductService{
    public productData: ProductEntity[] =[];

    addProduct(product:ProductEntity):string{
        this.productData.push(product);
        return "Product added successfully...";
    }

    updateProduct(id:number, updateProduct:ProductEntity):string{
        for(let x=0; x < this.productData.length; x++){
            if(this.productData[x].id == id){
                this.productData[x] = updateProduct;
            }
        }
        return "Product updated successfully...";
    }

    deleteProduct(id:number):string{
        this.productData = this.productData.filter((product)=> product.id !== id);
        return "product has been deleted..."
    }

    findProductById(id:number):ProductEntity{
        for(let x=0; x< this.productData.length; x++){
            if(this.productData[x].id == id){
                return this.productData[x];
            }
        }
    }

    findAllProducts(): ProductEntity[]{
        return this.productData;
    }



}