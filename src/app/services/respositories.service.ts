import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../entities/project';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RespositoriesService {
  private apiUrl = `${environment.apiUrl}/repositories`;

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
}
