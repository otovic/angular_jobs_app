import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorBlockComponent } from '../../components/common/error-block/error-block.component';
import { JobsService } from '../../services/jobs.service';
import { JobsDisplayComponent } from '../../components/ui/jobs-display/jobs-display.component';

@NgModule({
  declarations: [],
  providers: [JobsService],
  imports: [
    CommonModule,
    ErrorBlockComponent,
  ],
  exports: []
})
export class LandingPageModule { }