import { Component, Input } from '@angular/core';
import { JobModel } from '../../../core/models/job.model';
import { BehaviorSubject, Subject, switchMap, takeUntil } from 'rxjs';
import { JobsService } from '../../../services/jobs.service';

@Component({
  selector: 'app-jobs-display',
  templateUrl: './jobs-display.component.html',
  styleUrl: './jobs-display.component.css'
})
export class JobsDisplayComponent {
  @Input() option = 0;
  private unsubscribe$ = new Subject<void>();
  jobs: JobModel[] = [];
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

  onJobDeleted(jobId: string) {
    this.jobs = this.jobs.filter(job => job.id !== jobId);
  }

  // getOptionIndex() {
  //   return this.optionIndexSubject.value;
  // }
}
