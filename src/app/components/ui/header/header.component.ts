import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { UserModel } from '../../../core/models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: UserModel | null = null;
  private userSubscription: Subscription | null = null;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
    console.log('Header component created');
  }

  ngOnInit() {
    this.userSubscription = this.auth.user$.subscribe((user) => {
      this.user = user;
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
