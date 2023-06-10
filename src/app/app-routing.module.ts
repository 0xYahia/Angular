import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { ProductDetailsComponent } from './Components/Order/product-details/product-details.component';

const routes: Routes = [
  // First-match wins strategy
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/:pid', component: ProductDetailsComponent },
      { path: 'orders', component: OrderMasterComponent },
    ],
  },
  { path: 'login', component: UserLoginComponent },
  { path: 'logout', component: UserLoginComponent },
  { path: '**', component: NotFoundComponent }, // Wild card path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
