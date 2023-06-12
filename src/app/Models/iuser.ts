export interface IUser {
  fullName: string;
  email: string;
  Phone: string;
  address: {
    city: string;
    postalCode: string;
    street: string;
  };
  password: string;
  confirmPassword: string;
}
