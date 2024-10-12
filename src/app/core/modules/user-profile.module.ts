import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJobsComponent } from '../../components/ui/my-jobs/my-jobs.component';
import { WrapperAnchorComponent } from '../../components/common/wrapper-anchor/wrapper-anchor.component';
import { ButtonComponent } from '../../components/common/button/button.component';
import { JobsService } from '../../services/jobs.service';
import { ErrorBlockComponent } from '../../components/common/error-block/error-block.component';
import { JobCardComponent } from '../../components/common/job-card/job-card.component';
import { SplitterComponent } from '../../components/common/splitter/splitter.component';
import { SalaryPipe } from '../pipes/salary.pipe';
import { JobsDisplayComponent } from '../../components/ui/jobs-display/jobs-display.component';



@NgModule({
  declarations: [
    MyJobsComponent,
  ],
  providers: [JobsService],
  imports: [
    CommonModule,
    WrapperAnchorComponent,
    ButtonComponent,
    ErrorBlockComponent,
    JobCardComponent,
    SplitterComponent,
    SalaryPipe,
    JobsDisplayComponent
  ],
  exports: [
    MyJobsComponent,
  ]
})
export class UserProfileModule { }