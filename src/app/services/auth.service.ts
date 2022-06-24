import { from, Observable, of, Subject, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { User } from 'app/model/user';
import { concatMap, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router, private http: HttpClient) {}

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  //userSignup
  createUser(req: any) {

  }

  loginUser(req: any) {

  }

  logout() {
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(['/login']);
  }

}
