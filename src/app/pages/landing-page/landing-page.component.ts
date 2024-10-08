import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/ui/header/header.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})

export class LandingPageComponent {
  constructor(private router: Router) { }

  navigateToAddJob() {
    this.router.navigate(['add_new_job']);
  }
}
