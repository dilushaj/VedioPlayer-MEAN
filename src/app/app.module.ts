import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VedioCenterComponent } from './vedio-center/vedio-center.component';
import { VedioListComponent } from './vedio-list/vedio-list.component';
import { VedioDetailComponent } from './vedio-detail/vedio-detail.component';
import { SafePipe } from './safe.pipe';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ClientcFormComponent } from './clientc-form/clientc-form.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import { VedioService } from './vedio.service';
import { AuthenticationService} from './authentication.service';
import { ChangeTextDirective } from './change-text.directive';
import { AuthGuardService} from './auth-guard.service';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VedioCenterComponent,
    VedioListComponent,
    VedioDetailComponent,
    SafePipe,
    LoginComponent,
    ClientcFormComponent,
    PaginationComponent,
    RegisterComponent,
    ChangeTextDirective,
    AdminPageComponent,
    AdminViewComponent,
    DashboardComponent
  ],
  // third party modules
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    FormsModule

  ],
  // services
  providers: [
    UserService,
    VedioService,
    AuthenticationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
