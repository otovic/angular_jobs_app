import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-profile-control',
  templateUrl: './profile-control.component.html',
  styleUrl: './profile-control.component.css'
})
export class ProfileControlComponent {
  constructor(
    private auth: AuthService,
  ) { }

  logout() {
    this.auth.signOut();
  }
}
