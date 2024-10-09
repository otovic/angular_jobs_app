import { Component } from '@angular/core';
import { MainLayoutModule } from '../../core/modules/main-layout.module';

@Component({
  selector: 'app-profile-overview-page',
  standalone: true,
  imports: [
    MainLayoutModule
  ],
  templateUrl: './profile-overview-page.component.html',
  styleUrl: './profile-overview-page.component.css'
})
export class ProfileOverviewPageComponent {

}
