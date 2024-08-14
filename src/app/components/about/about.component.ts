import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Testimonial } from '../../entities/testimonial';
import { TestimonialsService } from '../../services/testimonials.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  testimonials: Testimonial[] = [];
  showPopup = false;
  popupName = '';
  popupText = '';
  popupImage = '';

  constructor(private testimonialService: TestimonialsService) { }

  ngOnInit() {
    this.testimonialService.getTestimonials().subscribe(data => {
      this.testimonials = data;
    });
  }

  openPopup(id: number) {
    const testimonial = this.testimonials.find(t => t.id === id);
    if (testimonial) {
      this.popupName = testimonial.name;
      this.popupText = testimonial.text;
      this.popupImage = testimonial.image;
      this.showPopup = true;
    }
  }

  closePopup() {
    this.showPopup = false;
  }
}