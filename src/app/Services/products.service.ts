import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IProduct } from '../Models/iproduct';
import { environment } from '../../environments/environment';
import { APIResponseVM } from '../ViewModels/apiresponse-vm';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Authorization: 'my-auth-token'
      }),
    };
  }

  private handleError(error: HttpErrorResponse) {
    // Generic Error handler (in backend)
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Write error details inGeneric error log
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getAllProducts(): Observable<IProduct[]> {
    // Repository Design pattern
    // return this.genericAPIHandler.getAll('/products')
    // .pip(
    //   map((APIResponseVM: APIResponseVM) => {
    //     return APIResponseVM.data
    //   })
    // )
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products`);
    // .pipe(retry(3), catchError(this.handleError));
  }

  getProductsByCatID(catID: number): Observable<IProduct[]> {
    return this.httpClient
      .get<IProduct[]>(`${environment.APIURL}/products?categoryID=${catID}`)
      .pipe(retry(3), catchError(this.handleError));
  }

  getProductByID(prodID: number): Observable<IProduct> {
    return this.httpClient
      .get<IProduct>(`${environment.APIURL}/products/${prodID}`)
      .pipe(retry(3), catchError(this.handleError));
  }

  // addProduct(newProd: IProduct): Observable<IProduct> {
  //   return this.httpClient
  //     .post<IProduct>(
  //       `${environment.APIURL}/products`,
  //       JSON.stringify(newProd),
  //       this.httpOptions
  //     )
  //     .pipe(
  //       retry(3),
  //       catchError((err: HttpErrorResponse) => {
  //         console.log(err.status, err.error);
  //         return throwError(
  //           () => new Error('Something bad happened; please try again later')
  //         );
  //       })
  //     );
  // }
  addProduct(newProd: IProduct): Observable<IProduct> {
    return this.httpClient
      .post<IProduct>(
        `${environment.APIURL}/products`,
        JSON.stringify(newProd),
        this.httpOptions
      )
      .pipe(retry(3), catchError(this.handleError));
  }

  updateProduct(prodID: number, UpdatedProd: IProduct) {}

  deleteProduct(prodID: number) {}
}
