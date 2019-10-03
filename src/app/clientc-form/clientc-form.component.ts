import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-clientc-form',
  templateUrl: './clientc-form.component.html',
  styleUrls: ['./clientc-form.component.css']
})
export class ClientcFormComponent implements OnInit {
  constructor(private _userService: UserService) { }

  submitted = false;
  months = ['January', 'Feburary', 'March'];
  isAvailable = true;
  ngOnInit() {
  }

  myClickFunction(event) {
    this.isAvailable = false;
    // just added console.log which will display the event details in browser on click of the button.
    console.log(event);
  }
  changeMonths(event) {
  }
  onSubmit(user: User) { // get the details of the corresponding user
    this.submitted = true;
    console.log(user._id);
    console.log('Came Here 1');
    this._userService.getUserById(user._id); // call for the service
  }

}




