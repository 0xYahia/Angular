import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductsService {
  private productList: IProduct[];

  constructor() {
    this.productList = [
      {
        id: 1,
        name: 'Lenovo laptop',
        price: 100000000,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 1,
      },
      {
        id: 2,
        name: 'Apple Mack',
        price: 207780,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 1,
      },
      {
        id: 3,
        name: 'Lenovo tablet',
        price: 3000,
        quantity: 10,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 2,
      },
      {
        id: 4,
        name: 'Samsung tablet',
        price: 40.5,
        quantity: 3,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 2,
      },
      {
        id: 5,
        name: 'Samsung Note 10',
        price: 50000,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 3,
      },
      {
        id: 6,
        name: 'Samsung S22 Ultra',
        price: 600,
        quantity: 2,
        imgURL: 'https://fakeimg.pl/200x100',
        categoryID: 3,
      },
    ];
  }

  getAllProducts(): IProduct[] {
    return this.productList;
  }

  getProductByCatID(cID: number): IProduct[] {
    if (cID == 0) return this.productList;
    return this.productList.filter((prod) => prod.categoryID == cID);
  }

  getProductByID(pID: number): IProduct | null {
    const product = this.productList.find((prod) => prod.id == pID);
    return product ? product : null;
  }

  addNewProduct(prod: IProduct) {
    this.productList.push(prod);
  }

  getProdIDs(): number[] {
    return this.productList.map((prod) => prod.id);
  }
}
