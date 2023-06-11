import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { APIResponseVM } from '../ViewModels/apiresponse-vm';

@Injectable({
  providedIn: 'root',
})
export class GenericApiHandlerService {
  httpOptions;
  constructor(private HttpClient: HttpClient) {
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

  getAll(APIRoute: string): Observable<APIResponseVM> {
    return this.HttpClient.get<APIResponseVM>(
      `${environment}/${APIRoute}`
    ).pipe(retry(2), catchError(this.handleError));
  }

  // getByID(id: number): Observable<APIResponseVM> {}

  // add(newObject: any): Observable<APIResponseVM> {}

  // update(id: number, mewObject: any) {}

  // delete(id: number): Observable<APIResponseVM> {}
}
