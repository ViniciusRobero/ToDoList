import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Assignment } from '../../core/models/assignment';
import 'rxjs/add/operator/toPromise';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8'})
};

@Injectable()
export class AssignmentService {
  private repositoryUrl = environment.api + "/assignment/";

  constructor(private http: HttpClient) {
  }

  getall(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.repositoryUrl);
  }

  create(assignment: Assignment): Observable<Assignment> {
    return this.http.post<Assignment>(this.repositoryUrl, assignment, httpOptions);
  }

  update(assignment: Assignment) {
    this.http.put(this.repositoryUrl, assignment, httpOptions).subscribe();
  }

  delete(id: number) {
    this.http.delete(this.repositoryUrl + id, httpOptions).subscribe();
  }
}
