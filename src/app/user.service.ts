import { Injectable } from '@angular/core';
import {Http, Response , Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _getUrl = '/api/users/';
  private _postUrl = '/api/register';
  private _loginUrl = '/api/login/';


  constructor(private _http: Http) { }

  getUserById(_id: string) {
      return this._http.get(this._getUrl + _id)
        .map((response: Response) => response.json());
  }
  addUser(user: User) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this._http.post(this._postUrl, JSON.stringify(user), options)
      .map((response: Response) => response.json());

  }
  Authenticate(user: User) {
    return this._http.get(this._loginUrl + user._id)
      .map((response: Response) => response.json());
  }


}
