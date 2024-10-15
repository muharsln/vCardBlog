import { Component, OnInit } from '@angular/core';
import { CvData } from '../../entities/cv-data';
import { CvDataService } from '../../services/cv-data.service';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {
  cvDatas: CvData[] = [];

  constructor(private cvDataService: CvDataService, private titleService:Title) {}

  ngOnInit() {
    this.titleService.setTitle("Muhammed Arslan | Resume")
    this.cvDataService.getCvDatas().subscribe(data => {
      this.cvDatas = data;
    });
  }
}