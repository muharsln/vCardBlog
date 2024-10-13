import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Testimonial } from '../entities/testimonial';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {
  private apiUrl = 'assets/data/testimonials.json';

  constructor(private http: HttpClient) { }

  getTestimonials(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(this.apiUrl);
  }
}