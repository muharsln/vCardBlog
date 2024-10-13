import { Component, OnInit } from '@angular/core';
import { CvData } from '../../entities/cv-data';
import { CvDataService } from '../../services/cv-data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements OnInit {
  cvDatas: CvData[] = [];

  constructor(private cvDataService: CvDataService) { }

  ngOnInit() {
    this.cvDataService.getCvDatas().subscribe(data => {
      this.cvDatas = data;
    });
  }
}