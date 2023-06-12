import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  userRegisterForm: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.userRegisterForm = new FormGroup({
    //   fullName: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern('[A-Za-z]{3,}'),
    //   ]),
    //   email: new FormControl(''),
    //   phone: new FormControl(''),
    //   address: new FormGroup({
    //     city: new FormControl(''),
    //     postalCode: new FormControl(''),
    //     street: new FormControl(''),
    //   }),
    //   password: new FormControl(''),
    //   confirmPassword: new FormControl(''),
    // });

    this.userRegisterForm = fb.group({
      fullName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
      email: ['', [Validators.required]],
      phone: [''],
      address: fb.group({
        city: [''],
        postalCode: [''],
        street: [''],
      }),
      password: [''],
      confirmPassword: [''],
    });
  }

  ngOnInit(): void {
    // Check for path params, to specify user reg. or Edit profile
    // In case of Edit Profile
    // to fill specific input
    // this.userRegisterForm.get('fullName')?.setValue('Test')
    // Call API to get user profile
    // to fill all input inside the form
    // this.userRegisterForm.setValue({
    //   // Must provide all properties
    //   fullName: 'ITI',
    //   email: 'mohamed@gmail.com',
    //   address: {
    //     city: 'Mansoura',
    //     postalCode: 555,
    //     street: 'street 1',
    //   },
    // });

    this.userRegisterForm.patchValue({
      // Can provide some properties
      fullName: 'ITI',
      email: 'mohamed@gmail.com',
      address: {
        city: 'Mansoura',
        postalCode: 555,
        street: 'street 1',
      },
    });
  }
  get fullName() {
    return this.userRegisterForm.get('fullName');
  }

  // fillForm() {}
}
