import { Injectable } from '@angular/core';
import { JobModel } from '../models/job.model';
import { HttpClient } from '@angular/common/http';
import { JOB_SERVER_URL } from '../../config/data/constants';
import { catchError, map, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthService
  ) { }

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

  getUserJobs(user: UserModel): Observable<any> {
    return this.http.get<JobModel[]>(`${JOB_SERVER_URL}?userId=${user.id}`).pipe(
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

  fetchUserApplications(user: UserModel): Observable<any> {
    return this.http.get<JobModel[]>(`${JOB_SERVER_URL}`).pipe(
      map((jobs) => {
        return jobs.filter(job => job.applications.includes(user.id.toString()));
      }),
      catchError((error) => {
        console.log('error', error);
        return of([]);
      })
    );
  }

  applyForJob(job: JobModel, user: UserModel): Observable<boolean> {
    if (!user) {
      console.error('User not found');
      alert('User not found');
      return of(false);
    }

    return this.http.put<JobModel>(`${JOB_SERVER_URL}/${job.id}`, {
      ...job,
      applications: [...job.applications, user.id]
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
