import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignUpComponent,
  },
  { path: 'signout', component: SignoutComponent },
  { path: '', component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
