import { Component } from '@angular/core';
import { JobsService } from '../../../services/jobs.service';
import { BehaviorSubject, Subject, switchMap, takeUntil } from 'rxjs';
import { JobModel } from '../../../core/models/job.model';

@Component({
  selector: 'app-my-jobs',
  templateUrl: './my-jobs.component.html',
  styleUrl: './my-jobs.component.css'
})
export class MyJobsComponent {
  private optionIndexSubject = new BehaviorSubject<number>(0);
  private unsubscribe$ = new Subject<void>();
  jobs: JobModel[] = [];
  error: string | null = null;

  constructor(
    private jobsService: JobsService,
  ) { }

  ngOnInit() {
    // this.optionIndexSubject.pipe(
    //   takeUntil(this.unsubscribe$),
    //   switchMap(index => {
    //     if (index == 0) {
    //       return this.jobsService.getUserJobs();
    //     }

    //     return [];
    //   })
    // ).subscribe(
    //   jobs => {
    //     this.jobs = jobs ?? [];
    //   },
    //   error => {
    //     console.error('Error fetching jobs:', error);
    //     this.error = 'Error fetching jobs';
    //   }
    // );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  toggleOption(index: number) {
    this.optionIndexSubject.next(index);
  }

  onJobDeleted(jobId: string) {
    this.jobs = this.jobs.filter(job => job.id !== jobId);
  }

  getOptionIndex() {
    return this.optionIndexSubject.value;
  }
}
