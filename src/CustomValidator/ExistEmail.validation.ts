import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function existEmailValidator(existEmails: string[]): ValidatorFn {
  //  It's not recommended to use this implementation to send the email list,
  //  Instead, use Async validator ro call API that takes the email values and returns boolean
  return (control: AbstractControl): ValidationErrors | null => {
    let emailVal: string = control.value;
    let validationError = { existEmail: { value: emailVal } };
    if (emailVal.length == 0 && control.untouched) return null;
    // return emailVal.includes('@') ? null : validationError;
    let foundEmail = existEmails.includes(emailVal);
    return foundEmail ? validationError : null;
  };
}
