import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  currProdId: number = 0;
  prodIDArr: number[] = [];
  product: IProduct | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private prodService: StaticProductsService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.currProdId = Number(this.activatedRoute.snapshot.paramMap.get('pid'));
    // this.product = this.prodService.getProductByID(this.currProdId);
    console.log('on Init');

    this.prodIDArr = this.prodService.getProdIDs();
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.currProdId = Number(paramMap.get('pid'));
      this.product = this.prodService.getProductByID(this.currProdId);
    });
  }
  goBack() {
    this.location.back();
  }

  prevProduct() {
    let currIndex = this.prodIDArr.findIndex((elem) => elem == this.currProdId);
    let prevProdId;
    if (currIndex > 0) {
      prevProdId = this.prodIDArr[currIndex - 1];
      this.router.navigate(['/products', prevProdId]);
    }
  }
  nextProduct() {
    let currIndex = this.prodIDArr.findIndex((elem) => elem == this.currProdId);
    let nextProdId;
    if (currIndex < this.prodIDArr.length - 1) {
      nextProdId = this.prodIDArr[currIndex + 1];
      this.router.navigate(['/products', nextProdId]);
    }
  }
}
