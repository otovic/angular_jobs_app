import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  username: string = '';
  password: string = '';

  constructor(private auth: AuthService) { }

  onSubmit() {
    this.auth.signIn(this.username, this.password).subscribe(
      (user) => {
        if (user) {
          console.log('Sign in success');
        } else {
          console.log('Sign in failed');
        }
      },
    );
  }
}
