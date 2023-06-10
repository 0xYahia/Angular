import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  constructor(private prodService: ProductsService, private router: Router) {}

  addProduct() {
    const product: IProduct = {
      id: 100,
      name: 'New Phone',
      price: 500,
      quantity: 500,
      imgURL: '',
      categoryID: 3,
    };

    // this.prodService.addProduct(product).subscribe((product) => {
    //   alert('Add product successfully'); // Not recommended
    //   // User instead Toast (snackbar from angular material)
    //   this.router.navigateByUrl('/products');
    // });

    const observer = {
      next: (product: IProduct) => {
        alert('Add product successfully'); // Not recommended
        // User instead Toast (snackbar from angular material)
        this.router.navigateByUrl('/products');
      },
      error: (err: Error) => {
        alert(err.message);
      },
    };
    this.prodService.addProduct(product).subscribe(observer);
  }
}
