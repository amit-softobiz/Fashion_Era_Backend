
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddProductArgs {
    id: number;
    categories: string;
    brand: string;
    price: number;
    color: string;
    size: number;
    tags: string;
}

export interface Product {
    id: number;
    categories: string;
    brand: string;
    price: number;
    color: string;
    size: number;
    tags: string;
}

export interface IQuery {
    index(): string | Promise<string>;
    products(): Product[] | Promise<Product[]>;
    findProductById(productId: number): Nullable<Product> | Promise<Nullable<Product>>;
}

export interface IMutation {
    deleteProduct(productId: number): string | Promise<string>;
    addProduct(addProductArgs: AddProductArgs): string | Promise<string>;
    updateProduct(productId: number, updateProductArgs: AddProductArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
