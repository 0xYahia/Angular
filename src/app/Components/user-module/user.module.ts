import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/Gaurds/auth.guard';

const route: Routes = [
  { path: '', redirectTo: '/user/userProfile', pathMatch: 'full' },
  {
    path: 'userProfile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'editProfile',
    component: EditProfileComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [UserProfileComponent, EditProfileComponent],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class UserModule {}
