import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import { AuthenticationService, TokenPayload, UserDetails} from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService, AuthenticationService]
})
export class LoginComponent implements OnInit {
   credentials: TokenPayload = {
     UserId: '',
     Password: ''
   };
  public UserId = '';
  public Password = '';
  constructor( private auth:  AuthenticationService, private router: Router) { }
  ngOnInit() {
  }
  onClickLogin() {
    this.auth.login(this.credentials).subscribe(data => {
      this.router.navigateByUrl('/admin');
    }, (err) => {
      console.error(err);
    });

  }

}
