import { Injectable } from '@angular/core';
import { JobModel } from '../core/models/job.model';
import { HttpClient } from '@angular/common/http';
import { JOB_SERVER_URL } from '../config/data/constants';
import { catchError, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class JobsService {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  postJob(job: JobModel): Observable<any> {
    return this.http.post(`${JOB_SERVER_URL}`, job).pipe(
      (response) => {
        console.log('response', response);
        this.router.navigate(['/']);
        return response;
      },
      catchError((error) => {
        console.log('error', error);
        return error;
      })
    );
  }
}
