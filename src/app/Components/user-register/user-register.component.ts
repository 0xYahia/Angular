import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { existEmailValidator } from 'src/CustomValidator/ExistEmail.validation';
import { passwordMatch } from 'src/CustomValidator/PasswordMatched.Validator';
import { IUser } from 'src/app/Models/iuser';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent implements OnInit {
  userRegisterForm: FormGroup;
  existUserEmail: string[] = [];
  constructor(private fb: FormBuilder) {
    this.existUserEmail = ['aa@aa.com', 'bb@bb.com', 'cc@cc.com'];

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

    this.userRegisterForm = fb.group(
      {
        fullName: [
          '',
          [Validators.required, Validators.pattern('[A-Za-z]{3,}')],
        ],
        email: [
          '',
          [Validators.required, existEmailValidator(this.existUserEmail)],
        ],
        phoneNo: fb.array([this.fb.control('')]),
        address: fb.group({
          city: [''],
          postalCode: [''],
          street: [''],
        }),
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        referral: [''],
        // referralOther: ['', [Validators.required]],
        referralOther: [''],
      },
      // { validators: passwordMatch() }
      { validators: passwordMatch }
    );
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
    //   this.userRegisterForm.patchValue({
    //     // Can provide some properties
    //     fullName: 'ITI',
    //     email: 'mohamed@gmail.com',
    //     address: {
    //       city: 'Mansoura',
    //       postalCode: 555,
    //       street: 'street 1',
    //     },
    //   });
  }
  get fullName() {
    return this.userRegisterForm.get('fullName');
  }

  get phoneNumbers() {
    return this.userRegisterForm.get('phoneNo') as FormArray;
  }

  get email() {
    return this.userRegisterForm.get('email') as FormArray;
  }

  get referral() {
    return this.userRegisterForm.get('referral');
  }

  get password() {
    return this.userRegisterForm.get('password');
  }

  get confirmPassword() {
    return this.userRegisterForm.get('confirmPassword');
  }
  // fillForm() {}

  addPhoneNo(event: any) {
    this.phoneNumbers.push(this.fb.control(''));
    event.target?.classList.add('d-none');
  }

  updateReferralValidator() {
    if (this.referral?.value === 'other') {
      this.userRegisterForm
        .get('referralOther')
        ?.addValidators(Validators.required);
    } else {
      this.userRegisterForm.get('referralOther')?.clearValidators();
    }
    this.userRegisterForm.get('referralOther')?.updateValueAndValidity();
  }

  submit() {
    let userModel: IUser = (<IUser>this.userRegisterForm.value) as IUser;
    // let userModel: IUser = this.userRegisterForm.value as IUser
    console.log(userModel);
  }
}
