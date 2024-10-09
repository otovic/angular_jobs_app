import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  username: string = '';
  password: string = '';

  constructor(private auth: AuthService, private router: Router) { }

  onSubmit() {
    if (!this.username || !this.password) {
      console.log('Username and password are required.');
      return;
    }

    this.auth.signIn(this.username, this.password).subscribe(
      (user) => {
        if (user) {
          console.log('Sign in success');
          this.router.navigate(['/']);
        } else {
          console.log('Sign in failed');
        }
      },
    );
  }
}
