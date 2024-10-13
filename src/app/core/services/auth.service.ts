import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { BehaviorSubject, catchError, map, of, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AUTH_SERVER_URL } from '../../config/data/constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<UserModel | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const storedUser = localStorage.getItem('user');
    console.log("storedUser", storedUser);
    this.userSubject.next(storedUser ? JSON.parse(storedUser) as UserModel : null);
    console.log("this.userSubject.value", this.userSubject.value);
  }

  signIn(username: string, password: string) {
    return this.http.get<UserModel[] | null>(`${AUTH_SERVER_URL}/?username=${username}&password=${password}`).pipe(
      map(users => {
        if (users && users?.length > 0) {
          const user = users[0];
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        }

        return null;
      }),
      catchError((error) => {
        console.log("error", error);
        return of(null);
      })
    );
  }

  signOut() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/sign_in']);
  }

  isAuthenticated() {
    console.log("this.userSubject.value", this.userSubject.value);
    return this.userSubject.value !== null;
  }
}
