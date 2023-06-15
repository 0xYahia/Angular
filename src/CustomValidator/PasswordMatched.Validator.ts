import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// If validator has parameters (Factory function) function will return function
// export function passwordMatch(): ValidatorFn {
export const passwordMatch: ValidatorFn =
  // return function (control: AbstractControl): ValidationErrors | null {
  // If validator not has parameters
  (formGroup: AbstractControl): ValidationErrors | null => {
    let passControl = formGroup.get('password');
    let confirmPassControl = formGroup.get('confirmPassword');
    if (
      !passControl ||
      !confirmPassControl ||
      !passControl.value ||
      !confirmPassControl.value
    )
      return null;

    let valErr = {
      UnmatchedPassword: {
        pass: passControl.value,
        confirmPassControl: confirmPassControl.value,
      },
    };
    return passControl.value == confirmPassControl.value ? null : valErr;
  };
// }
