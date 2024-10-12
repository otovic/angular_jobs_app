import { Component } from '@angular/core';
import { MainLayoutModule } from '../../core/modules/main-layout.module';
import { UserProfileModule } from '../../core/modules/user-profile.module';
import { JobsDisplayComponent } from '../../components/ui/jobs-display/jobs-display.component';

@Component({
  selector: 'app-profile-overview-page',
  standalone: true,
  imports: [
    MainLayoutModule,
    UserProfileModule,
    JobsDisplayComponent
  ],
  templateUrl: './profile-overview-page.component.html',
  styleUrl: './profile-overview-page.component.css'
})
export class ProfileOverviewPageComponent {

}
