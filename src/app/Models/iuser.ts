export interface IUser {
  fullName: string;
  email: string;
  phoneNo: string[];
  address: {
    city: string;
    postalCode: string;
    street: string;
  };
  password: string;
  confirmPassword: string;
  referral: string;
  referralOther: string;
}
