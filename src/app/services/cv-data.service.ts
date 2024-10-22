import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CvData } from '../entities/cv-data';

@Injectable({
  providedIn: 'root'
})
export class CvDataService {
  private apiUrlEn = 'assets/data/cv-data-en.json';
  private apiUrlTr = 'assets/data/cv-data-tr.json';

  constructor(private http: HttpClient) { }

  getCvDatasEn(): Observable<CvData> {
    return this.http.get<CvData>(this.apiUrlEn);
  }
  getCvDatasTr(): Observable<CvData> {
    return this.http.get<CvData>(this.apiUrlTr);
  }
}
