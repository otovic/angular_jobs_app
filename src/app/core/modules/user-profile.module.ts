import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJobsComponent } from '../../components/ui/my-jobs/my-jobs.component';
import { WrapperAnchorComponent } from '../../components/common/wrapper-anchor/wrapper-anchor.component';
import { ButtonComponent } from '../../components/common/button/button.component';
import { JobsService } from '../../services/jobs.service';



@NgModule({
  declarations: [MyJobsComponent],
  providers: [JobsService],
  imports: [
    CommonModule,
    WrapperAnchorComponent,
    ButtonComponent,
  ],
  exports: [MyJobsComponent]
})
export class UserProfileModule { }
