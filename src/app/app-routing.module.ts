import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './weather/pages/home/home.component';
import {DetailsComponent} from './weather/pages/details/details.component';
import {AddComponent} from './weather/pages/add/add.component';
import {LoginComponent} from './weather/pages/login/login.component';
import {SignupComponent} from './weather/pages/signup/signup.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details/:city', component: DetailsComponent},
  {path: 'add', component: AddComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
