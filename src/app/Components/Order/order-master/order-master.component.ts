import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss'],
})
export class OrderMasterComponent implements AfterViewInit {
  catList: ICategory[];
  selectedCatID: number = 0;
  orderTotalPrice: number = 0;
  // @ViewChild('clientNameInputElem') clientNameInputElem: ElementRef = new ElementRef()
  // @ViewChild('clientNameInputElem') clientNameInputElem: ElementRef = {} as ElementRef
  // @ViewChild('clientNameInputElem') clientNameInputElem: ElementRef | undefined = undefined
  // @ViewChild('clientNameInputElem') clientNameInputElem: ElementRef | null = null
  // @ViewChild('clientNameInputElem') clientNameInputElem?: ElementRef
  @ViewChild('clientNameInput') clientNameInputElem!: ElementRef;
  @ViewChild(ProductListComponent) prodListComObj!: ProductListComponent;

  constructor() {
    this.catList = [
      { id: 1, name: 'Laptops' },
      { id: 2, name: 'Tablets' },
      { id: 3, name: 'Mobiles' },
    ];
  }
  ngAfterViewInit() {
    this.clientNameInputElem.nativeElement.value = 'You Name';
    this.clientNameInputElem.nativeElement.style.border = '2px solid red';
    console.log(this.prodListComObj.productList);
  }
  onTotalPriceChanged(totalPrice: number) {
    this.orderTotalPrice = totalPrice;
  }
  // onTotalPriceChanged(totalPrice: any) {
  //   this.orderTotalPrice = totalPrice;
  // }
  completeOrder() {
    // For Test
    this.prodListComObj.productList[0].quantity -= 1;
  }
}
