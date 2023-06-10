import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  isLoggedSubject: BehaviorSubject<boolean>;
  constructor() {
    this.isLoggedSubject = new BehaviorSubject<boolean>(this.userIsLogged);
  }

  login(userName: string, password: string) {
    // Call Login APT, and ger Access Token
    let userToken = '123456789';
    localStorage.setItem('token', userToken);
    this.isLoggedSubject.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedSubject.next(false);
  }

  get userIsLogged() {
    return localStorage.getItem('token') ? true : false;
  }

  getLoggedStatus(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }
}
