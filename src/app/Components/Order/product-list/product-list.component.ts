import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnChanges {
  orderDate: Date;
  @Input() sentCatID: number = 0;
  catList: ICategory[];
  productList: IProduct[];
  productListCat: IProduct[] = [];
  orderTotalPrice: number = 0;
  constructor() {
    this.catList = [
      { id: 1, name: 'Laptops' },
      { id: 2, name: 'Tablets' },
      { id: 3, name: 'Mobiles' },
    ];
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
    this.orderDate = new Date();
    this.productListCat = [...this.productList];
  }
  ngOnChanges() {
    this.filterProdByCatID();
  }
  buy(prodPrice: number, count: number) {
    this.orderTotalPrice = count * prodPrice;
  }
  changeSelectedCat() {
    this.sentCatID = 1;
  }
  trackByProdID(index: number, prod: IProduct) {
    return prod.id;
  }
  filterProdByCatID() {
    this.productListCat = this.productList.filter(
      (prod) => prod.categoryID == this.sentCatID
    );
  }
}
