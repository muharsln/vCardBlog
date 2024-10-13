import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CvData } from '../entities/cv-data';

@Injectable({
  providedIn: 'root'
})
export class CvDataService {
  private apiUrl = 'assets/data/cv-data.json';

  constructor(private http: HttpClient) { }

  getCvDatas(): Observable<CvData[]> {
    return this.http.get<CvData[]>(this.apiUrl);
  }
}
