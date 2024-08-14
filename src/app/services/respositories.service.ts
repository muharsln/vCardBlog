import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../entities/repository';

@Injectable({
  providedIn: 'root'
})
export class RespositoriesService {
  private dataUrl = 'http://localhost:8080/api/repositories';

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.dataUrl);
  }
}
