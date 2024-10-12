import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainLayoutModule } from '../../core/modules/main-layout.module';
import { LandingPageModule } from '../../core/modules/landing-page.module';
import { JobsDisplayComponent } from '../../components/ui/jobs-display/jobs-display.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MainLayoutModule,
    LandingPageModule,
    JobsDisplayComponent
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
