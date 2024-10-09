import { Component } from '@angular/core';
import { JobModel } from '../../../core/models/job.model';
import { AuthService } from '../../../core/services/auth.service';
import { UserModel } from '../../../core/models/user.model';
import { JobsService } from '../../../services/jobs.service';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrl: './add-job.component.css',
})
export class AddJobComponent {
  job: JobModel = {
    userId: undefined,
    jobId: '',
    title: '',
    postedBy: '',
    description: '',
    location: '',
    salaryLower: 0,
    salaryHigher: 0,
    date: '',
  }
  user: UserModel | null = null;

  constructor(
    private auth: AuthService,
    private jobsService: JobsService,
    private utils: UtilsService,
  ) { }

  ngOnInit() {
    this.auth.user$.subscribe((user) => {
      if (!user) {
        alert('You must be signed in to add a job.');
        return;
      }

      this.user = user;
      this.job.userId = user?.id;
      this.job.postedBy = user?.username;
      this.job.jobId = this.utils.generateRandomString(16);
    });
  }

  onSubmit() {
    console.log(this.job);
    if (this.job.salaryHigher < this.job.salaryLower) {
      alert("Salary higher range must be greater than the lower range.");
      return;
    }

    if (!this.job.title || !this.job.description || !this.job.location || !this.job.salaryLower || !this.job.salaryHigher) {
      alert('All fields are required.');
      return;
    }

    this.jobsService.postJob(this.job).subscribe(
      (job) => {
        if (job) {
          alert('Job added successfully.');
        } else {
          alert('Failed to add job.');
        }
      },
    );
  }
}
