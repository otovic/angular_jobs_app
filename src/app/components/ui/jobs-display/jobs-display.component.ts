import { Component, Input } from '@angular/core';
import { JobModel } from '../../../core/models/job.model';
import { BehaviorSubject, Subject, Subscription, switchMap, takeUntil } from 'rxjs';
import { JobsService } from '../../../core/services/jobs.service';
import { JobCardComponent } from '../../common/job-card/job-card.component';
import { ErrorBlockComponent } from '../../common/error-block/error-block.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth.service';
import { UserModel } from '../../../core/models/user.model';
import { ButtonComponent } from '../../common/button/button.component';

@Component({
  selector: 'app-jobs-display',
  standalone: true,
  providers: [
    JobsService,
    AuthService
  ],
  imports: [
    CommonModule,
    JobCardComponent,
    ErrorBlockComponent,
    ButtonComponent
  ],
  templateUrl: './jobs-display.component.html',
  styleUrl: './jobs-display.component.css'
})
export class JobsDisplayComponent {
  userSubscription = new Subscription();
  user: UserModel | null = null;

  @Input() page = 0;

  @Input() option = 0;
  private unsubscribe$ = new Subject<void>();

  jobs: JobModel[] = [];
  currentJobs: JobModel[] = [];

  index: number = 3;
  error: string | null = null;

  constructor(
    private auth: AuthService,
    private jobsService: JobsService,
  ) { }

  ngOnInit() {
    this.userSubscription = this.auth.user$.subscribe(user => {
      this.user = user;

      if (!this.user && this.option !== 0) {
        console.error('User not found');
        return;
      }

      this.fetchJobs();
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe;
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  fetchJobs() {
    switch (this.option) {
      case 0:
        this.jobsService.getAllJobs().subscribe(
          (jobs) => {
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
        this.jobsService.getUserJobs(this.user!).subscribe(
          (jobs) => {
            this.jobs = jobs;
            this.updateCurrentJobs();
          },
          (error) => {
            console.error('Error fetching jobs:', error);
            this.error = 'Error fetching jobs';
          }
        );
        break;
      case 2:
        this.jobsService.fetchUserApplications(this.user!).subscribe(
          (jobs) => {
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
    this.updateCurrentJobs();
  }

  toggleOption(index: number) {
    this.option = index;
    this.fetchJobs();
  }
}
