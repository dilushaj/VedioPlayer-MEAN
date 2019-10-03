import { Component } from '@angular/core';
import { AuthenticationService} from './authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public auth: AuthenticationService, private router: Router) {}
  onSubmitLogin() {
    this.router.navigateByUrl('/login');
  }
  onSubmitRegister() {
    this.router.navigateByUrl('/register');
  }
}
