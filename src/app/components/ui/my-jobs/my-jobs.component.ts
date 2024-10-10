import { Component } from '@angular/core';
import { JobsService } from '../../../services/jobs.service';
import { AuthService } from '../../../core/services/auth.service';
import { BehaviorSubject, Subject, Subscription, switchMap, takeUntil } from 'rxjs';
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

  constructor(
    private jobsService: JobsService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    console.log('MyJobsComponent initialized');
    this.optionIndexSubject.pipe(
      takeUntil(this.unsubscribe$),
      switchMap(index => {
        if (index == 0) {
          return this.auth.user$.pipe(
            takeUntil(this.unsubscribe$),
            switchMap(user => {
              if (user) {
                return this.jobsService.getUserJobs(user.id); // Fetch jobs based on current index
              }
              return []; // Return an empty array if no user
            })
          );
        }

        return [];
      })
    ).subscribe(
      jobs => {
        this.jobs = jobs; // Update jobs when they change
      },
      error => {
        console.error('Error fetching jobs:', error);
      }
    );
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  toggleOption(index: number) {
    this.optionIndexSubject.next(index);
  }

  getOptionIndex() {
    return this.optionIndexSubject.value;
  }
}
