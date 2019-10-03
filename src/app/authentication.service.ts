import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';


export interface UserDetails {
  _id: string;
  UserId: string;
  UserType: string;
  UserName: string;
  exp: number; // life span
  iat: number; // issued time
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  UserId: string;
  UserName?: string;
  Password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) {}

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }
  // will return UserDtail type json object
  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload); // decode base64URL encoded payload
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  // to check a user is loggedin or not by validating exp time
  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(method: 'post'|'get', type: 'login'|'register'|'vedios', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      console.log('request works');
      base = this.http.post(`/api/${type}`, user);
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token); // save token in the local storage
        }
        return data;
      })
    );

    return request;
  }

  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    console.log('login works');
    return this.request('post', 'login', user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'vedios');
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/home');
  }




}
