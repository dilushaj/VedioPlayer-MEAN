import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VedioCenterComponent } from './vedio-center/vedio-center.component';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import { ClientcFormComponent } from './clientc-form/clientc-form.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService} from './auth-guard.service';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'vedios', component: VedioCenterComponent, canActivate: [AuthGuardService] },
  {path: 'login', component: LoginComponent},
  {path: 'clientc-form', component: ClientcFormComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminPageComponent, canActivate: [AuthGuardService] },
  {path: 'admin-view', component: AdminViewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
