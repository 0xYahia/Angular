import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent implements OnInit {
  isUserLogged: boolean = false;
  constructor(private authService: UserAuthService) {}

  ngOnInit(): void {
    this.isUserLogged = this.authService.userIsLogged;
  }

  login() {
    this.authService.login('UserName', 'password');
    this.isUserLogged = this.authService.userIsLogged;
  }

  logout() {
    this.authService.logout();
    this.isUserLogged = this.authService.userIsLogged;
  }
}
