import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../entities/repository';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RespositoriesService {
  private apiUrl = `${environment.apiUrl}/repositories`;

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.apiUrl);
  }
}
