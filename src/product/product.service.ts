import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  addProduct(product: Product): string {
    const createdCat = new this.productModel(product);
    console.log('createdCat', createdCat);
    createdCat.save();
    return 'Product added successfully...';
  }

  async updateProduct(id: number, updateProduct: Product): Promise<string> {
    const data = await this.productModel
      .findOneAndUpdate({ id: id }, updateProduct, { new: true })
      .exec();
    return 'Product updated successfully...';
  }

  deleteProduct(id: number): string {
    this.productModel.findOneAndDelete({ id }).exec();
    return 'product has been deleted...';
  }

  findProductById(id: number): Promise<Product> {
    return this.productModel.findOne({ id }).exec();
  }

  findAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
