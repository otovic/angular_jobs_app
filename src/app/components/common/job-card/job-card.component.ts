import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobModel } from '../../../core/models/job.model';
import { SplitterComponent } from '../splitter/splitter.component';
import { SalaryPipe } from '../../../core/pipes/salary.pipe';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { JobsService } from '../../../core/services/jobs.service';
import { AuthService } from '../../../core/services/auth.service';
import { Subscription } from 'rxjs';
import { UserModel } from '../../../core/models/user.model';

@Component({
  selector: 'app-job-card',
  standalone: true,
  providers: [JobsService],
  imports: [
    SplitterComponent,
    SalaryPipe,
    CommonModule,
    ButtonComponent
  ],
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css'
})
export class JobCardComponent {
  userSubscription = new Subscription();
  user: UserModel | null = null;
  @Input() job!: JobModel;
  @Output() deleteNotifier: EventEmitter<string> = new EventEmitter<string>();
  @Output() applyNotifier: EventEmitter<string> | null = null;

  constructor(
    private jobsService: JobsService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.userSubscription = this.auth.user$.subscribe(user => {
      console.log('User in job card:', user);
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  deleteJob() {
    this.jobsService.deleteJob(this.job.id!).subscribe(
      (success) => {
        if (success) {
          console.log('Job deleted successfully');
          if (this.deleteNotifier) this.deleteNotifier.emit(this.job.id!);
        }
      },
      (error) => {
        console.error('Error deleting job:', error);
      }
    );
  }

  applyForJob() {
    console.log('Applying for job:', this.user);
    this.jobsService.applyForJob(this.job!, this.user!).subscribe(
      (success) => {
        if (success) {
          this.job.applications.push(this.user!.id!.toString());
          if (this.applyNotifier) this.applyNotifier.emit(this.job.id!);
        }
      },
      (error) => {
        console.error('Error applying job:', error);
      }
    );
  }
}
