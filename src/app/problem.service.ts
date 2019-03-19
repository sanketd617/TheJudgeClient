import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  constructor(private http: HttpClient) { }

  getProblem(problemNum) {
    return this.http.get('http://localhost:8000/api/problem/' + problemNum);
  }
}
