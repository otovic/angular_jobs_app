import { Injectable } from '@angular/core';
import { JobModel } from '../core/models/job.model';
import { HttpClient } from '@angular/common/http';
import { JOB_SERVER_URL } from '../config/data/constants';
import { BehaviorSubject, catchError, map, Observable, of, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { UserModel } from '../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  userSubscription: Subscription | null = null;
  private user = new BehaviorSubject<UserModel | null>(null);

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) {
    this.userSubscription = this.auth.user$.subscribe(user => {
      this.user.next(user);
      if (user) {
        console.log("Logged-in user:", user);
      } else {
        console.log("No user is logged in");
      }
    });
  }

  ngOnDestroy() {
    this.userSubscription?.unsubscribe();
  }

  postJob(job: JobModel): Observable<any> {
    return this.http.post(`${JOB_SERVER_URL}`, job).pipe(
      (response) => {
        this.router.navigate(['/']);
        return response;
      },
      catchError((error) => {
        console.log('error', error);
        return error;
      })
    );
  }

  getUserJobs(): Observable<any> {
    return this.http.get<JobModel[]>(`${JOB_SERVER_URL}?userId=${this.user.getValue()?.id}`).pipe(
      map((jobs) => {
        return jobs.map((job) => {
          return {
            ...job,
            owned: true,
          };
        });
      }),
      catchError((error) => {
        console.log('error', error);
        return error;
      })
    );
  }

  deleteJob(jobId: string): Observable<boolean> {
    return this.http.delete(`${JOB_SERVER_URL}/${jobId}`).pipe(
      map(() => {
        return true;
      }),
      catchError((error) => {
        console.log('error', error);
        return of(false);
      })
    );
  }

  getAllJobs(): Observable<any> {
    return this.http.get<JobModel[]>(`${JOB_SERVER_URL}`).pipe(
      catchError((error) => {
        console.log('error', error);
        return error;
      })
    );
  }

  applyForJob(job: JobModel): Observable<boolean> {
    return this.http.put<JobModel>(`${JOB_SERVER_URL}/${job.id}`, {
      ...job,
      applications: [...job.applications, this.user.getValue()?.id]
    }).pipe(
      map(() => {
        return true;
      }),
      catchError((error) => {
        console.log('error', error);
        return of(false);
      })
    );
  }
}
