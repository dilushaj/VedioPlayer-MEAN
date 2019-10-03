import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthenticationService]
})
export class RegisterComponent implements OnInit {
  credentials: TokenPayload = {
    UserId: '',
    UserName: '',
    Password: ''
  };
  public UserId = '';
  public UserName = '';
  public Password = '';
  public ConfirmPassword = '';
  constructor(private _userService: UserService, private auth: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmitAddUser(user: User) {
    if (user.Password === user.ConfirmPassword) {
      this._userService.addUser(user)
        .subscribe(
          data => {
            alert('Registration successful');
            this.router.navigateByUrl('/vedios');
          },
          error => {
            alert('error');
          });
    } else {
      alert('Password Missmatch');
    }

  }

  register() {
    if (this.credentials.Password === this.ConfirmPassword) {
    this.auth.register(this.credentials).subscribe(data => {
      this.router.navigateByUrl('/vedios');
    }, error => {
      alert('Error');
      console.error(error);
    });
  } else {
      alert('Password Missmatch');
    }}
  // observer- who wishes to be notified when state of another object changes, so subscribe to the service
  // observable- another objects may register due to interest of this object's state change, the person who notifies to the subscribers

}
