import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products`);
  }

  getProductsByCatID(catID: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      `${environment.APIURL}/products?categoryID=${catID}`
    );
  }

  getProductByID(prodID: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(
      `${environment.APIURL}/products/${prodID}`
    );
  }

  addProduct(newProd: IProduct) {}

  updateProduct(prodID: number, UpdatedProd: IProduct) {}

  deleteProduct(prodID: number) {}
}
