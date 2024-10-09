import { Component } from '@angular/core';
import { AddJobModule } from '../../core/modules/add-job.module';
import { MainLayoutModule } from '../../core/modules/main-layout.module';

@Component({
  selector: 'app-add-job-page',
  standalone: true,
  imports: [
    MainLayoutModule,
    AddJobModule
  ],
  templateUrl: './add-job-page.component.html',
  styleUrl: './add-job-page.component.css'
})
export class AddJobPageComponent {

}
