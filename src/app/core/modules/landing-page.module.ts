import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorBlockComponent } from '../../components/common/error-block/error-block.component';
import { JobsService } from '../../services/jobs.service';
import { JobCardComponent } from '../../components/common/job-card/job-card.component';
import { JobsDisplayComponent } from '../../components/ui/jobs-display/jobs-display.component';

@NgModule({
  declarations: [JobsDisplayComponent],
  providers: [JobsService],
  imports: [
    CommonModule,
    ErrorBlockComponent,
    JobCardComponent
  ],
  exports: [JobsDisplayComponent]
})
export class LandingPageModule { }
