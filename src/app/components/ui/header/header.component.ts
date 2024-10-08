import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { UserModel } from '../../../core/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  user: UserModel | null = null;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe((user) => {
      this.user = user;
    });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
