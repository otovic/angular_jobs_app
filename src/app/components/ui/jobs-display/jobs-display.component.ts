import { Component, Input } from '@angular/core';
import { JobModel } from '../../../core/models/job.model';
import { BehaviorSubject, Subject, switchMap, takeUntil } from 'rxjs';
import { JobsService } from '../../../services/jobs.service';
import { JobCardComponent } from '../../common/job-card/job-card.component';
import { ErrorBlockComponent } from '../../common/error-block/error-block.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jobs-display',
  standalone: true,
  providers: [JobsService],
  imports: [
    CommonModule,
    JobCardComponent,
    ErrorBlockComponent
  ],
  templateUrl: './jobs-display.component.html',
  styleUrl: './jobs-display.component.css'
})
export class JobsDisplayComponent {
  @Input() option = 0;
  private unsubscribe$ = new Subject<void>();
  jobs: JobModel[] = [];
  currentJobs: JobModel[] = [];
  index: number = 3;
  error: string | null = null;

  constructor(
    private jobsService: JobsService,
  ) { }

  ngOnInit() {
    this.fetchJobs();
  }

  fetchJobs() {
    switch (this.option) {
      case 0:
        this.jobsService.getAllJobs().subscribe(
          (jobs) => {
            console.log('Jobs fetched successfuly:', jobs);
            this.jobs = jobs;
            this.updateCurrentJobs();
          },
          (error) => {
            console.error('Error fetching jobs:', error);
            this.error = 'Error fetching jobs';
          }
        );
        break;
      case 1:
        this.jobsService.getUserJobs().subscribe(
          (jobs) => {
            console.log('Jobs fetched successfuly:', jobs);
            this.jobs = jobs;
            this.updateCurrentJobs();
          },
          (error) => {
            console.error('Error fetching jobs:', error);
            this.error = 'Error fetching jobs';
          }
        );
        break;
      default:
        break;
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  updateCurrentJobs() {
    this.currentJobs = this.jobs.slice(this.index - 3, this.index);
  }

  nextPage() {
    if (this.index < this.jobs.length) {
      this.index += 3
      this.updateCurrentJobs();
    }
  }

  previousPage() {
    if (this.index - 3 >= 0) {
      this.index -= 3
      this.updateCurrentJobs();
    }
  }

  onJobDeleted(jobId: string) {
    this.jobs = this.jobs.filter(job => job.id !== jobId);
  }

  // getOptionIndex() {
  //   return this.optionIndexSubject.value;
  // }
}
